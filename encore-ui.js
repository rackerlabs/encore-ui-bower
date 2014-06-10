/*
 * EncoreUI
 * https://github.com/rackerlabs/encore-ui

 * Version: 0.11.0 - 2014-06-10
 * License: Apache License, Version 2.0
 */
angular.module('encore.ui', ['encore.ui.configs','encore.ui.rxActiveUrl','encore.ui.rxAge','encore.ui.rxEnvironment','encore.ui.rxApp','encore.ui.rxAttributes','encore.ui.rxIdentity','encore.ui.rxLocalStorage','encore.ui.rxSession','encore.ui.rxPermission','encore.ui.rxAuth','encore.ui.rxBreadcrumbs','encore.ui.rxButton','encore.ui.rxCapitalize','encore.ui.rxCompile','encore.ui.rxDiskSize','encore.ui.rxDropdown','encore.ui.rxFavicon','encore.ui.rxFeedback','encore.ui.rxForm','encore.ui.rxLogout','encore.ui.rxModalAction','encore.ui.rxNav','encore.ui.rxNotify','encore.ui.rxPageTitle','encore.ui.rxPaginate','encore.ui.rxRelatedMenu','encore.ui.rxProductResources','encore.ui.rxSessionStorage','encore.ui.rxSortableColumn','encore.ui.rxSpinner','encore.ui.rxToggle','encore.ui.rxTokenInterceptor','encore.ui.rxUnauthorizedInterceptor']);
angular.module('encore.ui.configs', [])
.value('devicePaths', [
    { value: '/dev/xvdb', label: '/dev/xvdb' },
    { value: '/dev/xvdd', label: '/dev/xvdd' },
    { value: '/dev/xvde', label: '/dev/xvde' },
    { value: '/dev/xvdf', label: '/dev/xvdf' },
    { value: '/dev/xvdg', label: '/dev/xvdg' },
    { value: '/dev/xvdh', label: '/dev/xvdh' },
    { value: '/dev/xvdj', label: '/dev/xvdj' },
    { value: '/dev/xvdk', label: '/dev/xvdk' },
    { value: '/dev/xvdl', label: '/dev/xvdl' },
    { value: '/dev/xvdm', label: '/dev/xvdm' },
    { value: '/dev/xvdn', label: '/dev/xvdn' },
    { value: '/dev/xvdo', label: '/dev/xvdo' },
    { value: '/dev/xvdp', label: '/dev/xvdp' }
])
.constant('feedbackApi', '/api/feedback');
angular.module('encore.ui.rxActiveUrl', [])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxActiveUrl
 * @restrict A
 * @description
 * This is used as an attribute to directive <rx-product-resources>, in the
 * form of <li rx-active-url="/servers">. The directive checks if the attribute
 * value is a subset of the current URL. If so it returns the class name "selected"
 */
.directive('rxActiveUrl', function ($location) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxActiveUrl.html',
        transclude: true,
        replace: true,
        scope: {
            url: '@'
        },
        controller: function ($scope) {
            $scope.isNavActive = function (pattern) {
                return $location.path().indexOf(pattern) !== -1;
            };
        },
        link: function (scope, element, attribute) {
            // Is the subset of whatever is in isNavActive part of the URL string?
            scope.navActive = scope.isNavActive(attribute.url);
        }
    };
});

angular.module('encore.ui.rxAge', [])
// Another option
// age.js -- https://github.rackspace.com/gist/roge5001/2417941
// age.spec.js -- https://github.rackspace.com/gist/roge5001/2417940
.filter('rxAge', function () {
    return function (dateString, maxUnits, verbose) {
        if (!dateString) {
            return 'Unavailable';
        } else if (dateString === 'z') {
            return '--';
        }

        var now = moment();
        var date = moment(dateString);
        var diff = now.diff(date);
        var duration = moment.duration(diff);
        var days = parseInt(duration.asDays(), 10);
        var hours = parseInt(duration.asHours(), 10);
        var mins = parseInt(duration.asMinutes(), 10);
        var age = [];

        if (_.isBoolean(maxUnits)) {
            // if maxUnits is a boolean, then we assume it's meant to be the verbose setting
            verbose = maxUnits;
        } else if (!_.isBoolean(verbose)) {
            // otherwise, if verbose isn't set, default to false
            verbose =  false;
        }

        // This initialization has to happen AFTER verbose init so that we can
        // use the original passed in value.
        maxUnits = (_.isNumber(maxUnits)) ? maxUnits : 2;

        var dateUnits = [days, hours - (24 * days), mins - (60 * hours)];
        var suffixes = ['d', 'h', 'm'];

        if (verbose) {
            suffixes = [' day', ' hour', ' minute'];

            _.forEach(suffixes, function (suffix, index) {
                suffixes[index] += ((dateUnits[index] != 1) ? 's' : '');
            });
        }

        if (days > 0) {
            age.push({ value: days, suffix: suffixes[0] });
        }

        if (hours > 0) {
            age.push({ value: hours - (24 * days), suffix: suffixes[1] });
        }

        age.push({ value: mins - (60 * hours), suffix: suffixes[2] });

        return _.map(age.slice(0, maxUnits), function (dateUnit, index, listOfAges) {
            if (index == listOfAges.length - 1) {
                return Math.round(dateUnit.value) + dateUnit.suffix;
            } else {
                return Math.floor(dateUnit.value) + dateUnit.suffix;
            }
        }).join((verbose) ? ', ' : ' ');
    };
});

angular.module('encore.ui.rxEnvironment', ['ngSanitize'])
/**
*
* @ngdoc service
* @name encore.ui.rxEnvironment:Environment
* @description
* Allows defining environments and retrieving the current environment based on location
*
* @example
* <pre>
* Environment.get() // return environment object that matches current location
* </pre>
*/
.service('Environment', function ($location, $rootScope, $log) {
    var envSvc = {};

    /*
     * This array defined different environments to check against.
     * It is prefilled with 'Encore' based environments
     * It can be overwritten if necessary via the returned 'environments' property
     *
     * @property {string} name The 'friendly' name of the environment
     * @property {string|RegEx} pattern The pattern to match the current path against
     * @property {string} url The url pattern used to build out urls for that environment.
     *                        See 'buildUrl' for more details
     */

    var environments = [{
        // http://localhost:3000/
        // http://localhost:9000/
        // http://localhost/
        // http://server/
        name: 'local',
        pattern: /\/\/(localhost|server)(:\d{1,4})?/,
        url: '//localhost:' + $location.port() + '/{{path}}'
    }, {
        // https://staging.encore.rackspace.com/
        // https://preprod.encore.rackspace.com/
        name: 'unified-preprod',
        pattern: /\/\/(\w+\.)encore.rackspace.com/,
        url: '{{path}}'
    }, {
        // https://encore.rackspace.com/
        name: 'unified',
        pattern: 'encore.rackspace.com',
        url: '{{path}}'
    }, {
        // https://encore.rackspace.com/ only
        name: 'unified-prod',
        pattern: /\/\/(?=[\w.]+)encore.rackspace.com/,
        url: '{{path}}'
    }];

    /*
     * Checks if an environment has valid properties
     * @private
     * @param {object} environment The environment object to check
     * @returns {boolean} true if valid, false otherwise
     */
    var isValidEnvironment = function (environment) {
        var isValid =
            _.isString(environment.name) &&
            (_.isString(environment.pattern) || _.isRegExp(environment.pattern)) &&
            _.isString(environment.url);

        return isValid;
    };

    /*
     * Retrieves current environment
     * @public
     * @param {string} [href] The path to check the environment on. Defaults to $location.absUrl()
     * @returns {Object} The current environment (if found), else 'localhost' environment.
     */
    envSvc.get = function (href) {
        // default to current location if href not provided
        href = href || $location.absUrl();

        var currentEnvironment = _.find(environments, function (environment) {
            var pattern = environment.pattern;

            if (_.isRegExp(pattern)) {
                return pattern.test(href);
            }

            return _.contains(href, pattern);
        });

        if (_.isUndefined(currentEnvironment)) {
            $log.warn('No environments match URL: ' + $location.absUrl());
            // set to default/first environment to avoid errors
            currentEnvironment = environments[0];
        }

        return currentEnvironment;
    };

    /*
     * Adds an environment to the stack
     * @public
     * @param {object} environment The environment to add. See 'environments' array for required properties
     */
    envSvc.add = function (environment) {
        // do some sanity checks here
        if (isValidEnvironment(environment)) {
            // add environment
            environments.push(environment);
        } else {
            $log.error('Unable to add Environment: defined incorrectly');
        }
    };

    /*
     * Replaces current environments array with new one
     * @public
     * @param {array} newEnvironments New environments to use
     */
    envSvc.setAll = function (newEnvironments) {
        // validate that all new environments are valid
        if (newEnvironments.length > 0 && _.every(environments, isValidEnvironment)) {
            // overwrite old environments with new
            environments = newEnvironments;
        }
    };

    return envSvc;
})
/**
*
* @ngdoc filter
* @name encore.ui.rxEnvironment:rxEnvironmentUrl
* @description
* Builds a URL based on current environment.
* Note: if value passed in isn't an object, it will simply return that value
*
* @example
* <pre>
* {{ { tld: 'cloudatlas', path: 'cbs/servers' } | rxEnvironmentUrl }}
* Renders as '//staging.cloudatlas.encore.rackspace.com/cbs/servers' in staging
*
* {{ '/myPath' | rxEnvironmentUrl }}
* Renders as '/myPath' regardless of environment, because value passed in was not an object
* </pre>
*/
.filter('rxEnvironmentUrl', function (Environment, $interpolate) {
    return function (details) {
        var environment = Environment.get();

        // convert url template into full path based on details provided (if details is an object)
        var url = _.isObject(details) ? $interpolate(environment.url)(details) : details;

        return url;
    };
})
/**
*
* @ngdoc filter
* @name encore.ui.rxEnvironment:rxEnvironmentMatch
* @description
* Checks if current environment matches target environment
*
* @example
* <pre>
* {{ 'production' | rxEnvironmentMatch }}
* returns true if current environment is 'production', false otherwise
*
* {{ '!production' | rxEnvironmentMatch }}
* returns false if current environment is 'production', true otherwise
* </pre>
*/
.filter('rxEnvironmentMatch', function (Environment) {
    return function (environment) {
        // check to see if first character is negation indicator
        var isNegated = environment[0] === '!';

        // get name of environment to look for
        var targetEnvironmentName = isNegated ? environment.substr(1) : environment;

        // get name of current environment
        var currentEnvironmentName = Environment.get().name;

        if (isNegated) {
            return currentEnvironmentName !== targetEnvironmentName;
        } else {
            return currentEnvironmentName === targetEnvironmentName;
        }
    };
})
/**
* @ngdoc directive
* @name encore.ui.rxEnvironment:rxEnvironment
* @restrict A
* @description
* Show or hide content based on environment name
* @requires encore.ui.rxEnvironment:Environment
*
* @example
* <pre>
*     <div rx-if-environment="staging">Show if staging</div>
*     <div rx-if-environment="!production">Show if not prod</div>
* </pre>
*/
.directive('rxIfEnvironment', function ($compile) {
    return {
        restrict: 'A',
        terminal: true,
        priority: 1000,
        compile: function () {
            return {
                pre: function preLink (scope, element, attrs) {
                    // add ng-show attr to element
                    element.attr('ng-show', '\'' + attrs.rxIfEnvironment + '\'| rxEnvironmentMatch');

                    //remove the attribute to avoid an indefinite loop
                    element.removeAttr('rx-if-environment');
                    element.removeAttr('data-rx-if-environment');

                    // build the new element
                    $compile(element)(scope);
                }
            };
        }
    };
});

angular.module('encore.ui.rxApp', ['encore.ui.rxEnvironment', 'ngSanitize', 'ngRoute'])
/*
 * This array defines the default navigation to use for all Encore sites and used by rxAppNav.
 * It can be overwritten if necessary via the 'menu' property of rxAppNav.
 *
 * @property {string} title Only used on the top level, defines the title to use for all sub-navigation
 *
 * Common Properties for all 'children' nav items:
 * @property {string} [key] ID to use for getter/setter methods by apps. Needs to be unique.
 * @property {string|object} href Url to use for the menu item or object to passed to rxEnvironmentUrl
 * @property {string} linkText The text displayed for the menu item
 * @property {array} children Child menu items for the navigation heirarchy
 * @property {string} directive Name of directive to build and show when item is active. For example:
 *                              Value of 'my-directive' becomes '<my-directive></my-directive>'
 * @property {expression|function} [childVisibility] Rule to determine visibility of child menu
 * @property {expression} [childHeader] Expression which will be displayed above child menu. Access controller
 * scope via: `route.current.scope` @see http://devdocs.io/angular/ngroute.$route#properties_current
 *
 */
.value('encoreNav', [{
    title: 'All Tools',
    children: [{
        linkText: 'Account',
        key: 'accountLvlTools',
        directive: 'rx-account-search',
        childVisibility: function (scope) {
            if (scope.route.current) {
                return !_.isUndefined(scope.route.current.pathParams.accountNumber);
            }

            return false;
        },
        children: [
            {
                href: '/accounts/{{accountNumber}}',
                linkText: 'Overview'
            }
        ]
    },
    {
        href: '/billing',
        linkText: 'Billing',
        key: 'billing',
        visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)'
    },
    {
        linkText: 'Cloud',
        key: 'cloud',
        directive: 'rx-atlas-search',
        visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        childVisibility: function (scope) {
            // We only want to show this nav if user is already defined in the URL
            // (otherwise a user hasn't been chosen yet, so nav won't work, so we hide it)
            if (scope.route.current) {
                return !_.isUndefined(scope.route.current.pathParams.user);
            }
            return false;
        },
        childHeader: '<strong class="current-search">Current Account:</strong>' +
            '<span class="current-result">{{route.current.pathParams.user}}</span>',
        children: [
            {
                href: '/cloud/{{user}}/servers',
                linkText: 'Cloud Servers'
            },
            {
                href: '/cloud/{{user}}/cbs/volumes',
                linkText: 'Block Storage',
                children: [
                    {
                        href: '/cloud/{{user}}/cbs/volumes',
                        linkText: 'Volumes'
                    }, {
                        href: '/cloud/{{user}}/cbs/snapshots',
                        linkText: 'Snapshots'
                    }
                ]
            }, {
                href: '/cloud/{{user}}/databases/instances',
                linkText: 'Databases',
                visibility: '"unified-preprod" | rxEnvironmentMatch'
            }, {
                href: '/cloud/{{user}}/loadbalancers',
                linkText: 'Load Balancers',
                visibility: '"unified-preprod" | rxEnvironmentMatch'
            }, {
                href: '/cloud/{{user}}/networks',
                linkText: 'Networks',
                visibility: '"unified-preprod" | rxEnvironmentMatch'
            }
        ]
    }, {
        href: '/support',
        linkText: 'Support Service',
        key: 'supportService',
        visibility: '("unified" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        directive: 'rx-support-service-search',
    }, {
        href: 'ticketing',
        linkText: 'Ticketing',
        key: 'ticketing',
        children: [
            {
                href: 'ticketing/list',
                linkText: 'My Selected Queues'
            },
            {
                href: 'ticketing/my',
                linkText: 'My Tickets'
            }, {
                href: 'ticketing/queues',
                linkText: 'Queue Admin'
            }
        ]
    }, {
        href: '/virt',
        linkText: 'Virtualization Admin',
        key: 'virtualization',
        visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        directive: 'rx-virt-search'
    }]
}])
/**
* @ngdoc interface
* @name encore.ui.rxApp:rxAppRoutes
* @description
* Manages page routes, building urls and marking them as active on route change
*/
.service('rxAppRoutes', function ($rootScope, $location, $route, $interpolate, rxEnvironmentUrlFilter, $log) {
    var AppRoutes = function () {
        var routes = [];

        var isActive = function (item) {
            // check if url matches absUrl
            // TODO: Add Unit Tests for URLs with Query Strings in them.
            var baseUrl = $location.absUrl().split('?')[0];
            var itemUrl = (_.isString(item.url)) ? item.url.split('?')[0] : undefined;
            var pathMatches = _.contains(baseUrl, itemUrl);

            // if current item not active, check if any children are active
            if (!pathMatches && item.children) {
                pathMatches = _.any(item.children, isActive);
            }

            return pathMatches;
        };

        var buildUrl = function (url) {
            // sometimes links don't have URLs defined, so we need to exit before $interpolate throws an error
            if (_.isUndefined(url)) {
                return url;
            }

            // run the href through rxEnvironmentUrl in case it's defined as such
            url = rxEnvironmentUrlFilter(url);

            if ($route.current) {
                // convert any nested expressions to defined route params
                url = $interpolate(url)($route.current.pathParams);
            }

            return url;
        };

        var setDynamicProperties = function (routes) {
            _.each(routes, function (route) {
                // build out url for current route
                route.url = buildUrl(route.href);

                // check if any children exist, if so, build their URLs as well
                if (route.children) {
                    route.children = setDynamicProperties(route.children);
                }

                // set active state (this needs to go after the recursion,
                // so that the URL is built for all the children)
                route.active = isActive(route);
            });

            return routes;
        };

        var getRouteIndex = function (key, routes) {
            var routeIndex;
            var routeAlreadyFound = false;

            _.forEach(routes, function (route, index) {
                var foundThisTime = false;
                if (route.key === key) {
                    routeIndex = [index];
                    foundThisTime = true;
                } else if ('children' in route) {
                    // if there are children in the route, we need to search through them as well
                    var childIndex = getRouteIndex(key, route.children);
                    if (childIndex) {
                        routeIndex = [index].concat(childIndex);
                        foundThisTime = true;
                    }
                }
                if (foundThisTime) {
                    if (routeAlreadyFound) {
                        $log.warn('Duplicate routes found for key: ' + key);
                    } else {
                        routeAlreadyFound = true;
                    }
                }
            });

            return routeIndex;
        };

        var updateRouteByIndex = function (indexes, routeInfo, routes, level) {
            var route = routes[indexes[0]];

            if (level < indexes.length - 1) {
                // if there's more than one index, we need to recurse down a level
                route.children = updateRouteByIndex(indexes.slice(1), routeInfo, route.children, level + 1);
            } else {
                _.assign(route, routeInfo);
            }

            return routes;
        };

        $rootScope.$on('$locationChangeSuccess', function () {
            routes = setDynamicProperties(routes);
        });

        return {
            /**
             * Finds the indexes/path to a route. Will return last match if duplicate keys exist
             * @see setRouteByKey for actual use
             * @param  {string} key Route Key
             * @example
             *     var myRouteIndex = rxAppRoutes.getIndexByKey('myKey'); // [0, 2, 0]
             * @return {array|undefined} array of indexes describing path to route (or undefined if not found)
             */
            getIndexByKey: function (key) {
                var routeIndex = getRouteIndex(key, routes);

                if (_.isUndefined(routeIndex)) {
                    $log.debug('Could not find route by key: ', key);
                }

                return routeIndex;
            },
            /**
             * functionality to update routes based on their key
             * @param {string} key Route key used to identify it in navigation
             * @param {object} routeInfo Information used to overwrite original properties
             * @return {boolean} true if successfully updated, false if key not found
             */
            setRouteByKey: function (key, routeInfo) {
                var routeIndex = this.getIndexByKey(key);

                // make sure the key was found
                if (routeIndex) {
                    routes = updateRouteByIndex(routeIndex, routeInfo, routes, 0);

                    // now that we've updated the route info, we need to reset the dynamic properties
                    routes = setDynamicProperties(routes);

                    return true;
                } else {
                    return false;
                }
            },
            getAll: function () {
                return routes;
            },
            setAll: function (newRoutes) {
                routes = setDynamicProperties(newRoutes);
            }
        };
    };

    var appRoutesInstance = new AppRoutes();

    appRoutesInstance.createInstance = function () {
        return new AppRoutes();
    };

    return appRoutesInstance;
})
// We need to set the default rxAppRoutes navigation before the app's load so that they can update
// it in their `run` statement if need be.
.run(function (rxAppRoutes, encoreNav) {
    rxAppRoutes.setAll(encoreNav);
})
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxApp
* @restrict E
* @scope
* @description
* Responsible for creating the HTML necessary for a common Encore layout.
*
* @param {string} [siteTitle] Title of site to use in upper right hand corner
* @param {array} [menu] Menu items used for left-hand navigation
* @param {string} [collapsibleNav] Set to 'true' if the navigation menu should be collapsible
* @param {string} [collapsedNav] Binding for the collapsed state of the menu.
* @param {boolean} [newInstance] Whether the menu items should be a new instance of rxAppRoutes
*
* @example
* <pre>
*     <rx-app site-title="Custom Title"></rx-app>
* </pre>
*/
.directive('rxApp', function (rxAppRoutes) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/rxApp.html',
        scope: {
            siteTitle: '@?',
            menu: '=?',
            collapsibleNav: '@',
            collapsedNav: '=?',
            newInstance: '@?',
            hideFeedback: '@?'
        },
        link: function (scope) {
            scope.appRoutes = scope.newInstance ? rxAppRoutes.createInstance() : rxAppRoutes;

            // default hideFeedback to false
            scope.hideFeedback = scope.hideFeedback ? true : false;

            // we only want to set new menu data if a new instance of rxAppRoutes was created
            // or if scope.menu was defined
            if (scope.newInstance || scope.menu) {
                scope.appRoutes.setAll(scope.menu);
            }
        }
    };
})
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxPage
* @restrict E
* @scope
* @description
* Responsible for creating the HTML necessary for a page (including breadcrumbs and page title)
*
* @param {expression} [title] Title of page
* @param {expression} [subtitle] Subtitle of page
*
* @example
* <pre>
*     <rx-page title="'Page Title'"></rx-page>
* </pre>
*/
.directive('rxPage', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/rxPage.html',
        scope: {
            title: '=',
            subtitle: '=',
        },
        link: function (scope, element) {
            // Remove the title attribute, as it will cause a popup to appear when hovering over page content
            // @see https://github.com/rackerlabs/encore-ui/issues/251
            element.removeAttr('title');
        }
    };
})
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxAppNav
* @restrict E
* @scope
* @description
* Creates a menu based on items passed in.
*
* @param {object} items Menu items to display. See encoreNav for object definition
* @param {string} level Level in heirarchy in page. Higher number is deeper nested
*
* @example
* <pre>
*     <rx-app-nav level="1" items="menuItems"></rx-app-nav>
* </pre>
*/
.directive('rxAppNav', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/rxAppNav.html',
        scope: {
            items: '=',
            level: '='
        }
    };
})
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxAppNavItem
* @restrict E
* @description
* Creates a menu item. Recursively creates rx-app-nav if 'children' present.
* 'Item' must be avialable via scope
*
* @example
* <pre>
*     <rx-app-nav-item ng-repeat="item in items"></rx-app-nav-item>
* </pre>
*/
.directive('rxAppNavItem', function ($compile, $location, $route) {
    var linker = function (scope, element) {
        var injectContent = function (selector, content) {
            var el = element[0].querySelector(selector);
            el = angular.element(el);

            $compile(content)(scope, function (compiledHtml) {
                el.append(compiledHtml);
            });
        };

        var directiveHtml = '<directive></directive>';
        // add navDirective if defined
        if (angular.isString(scope.item.directive)) {
            // convert directive string to HTML
            // e.g. my-directive -> <my-directive></my-directive>
            directiveHtml = directiveHtml.replace('directive', scope.item.directive);

            injectContent('.item-directive', directiveHtml);
        }

        // increment nesting level for child items
        var childLevel = scope.$parent.level + 1;
        // safety check that child level is a number
        if (isNaN(childLevel)) {
            childLevel = 2;
        }
        // add children if present
        // Note: this can't be added in the HTML due to angular recursion issues
        var rxNavTemplate = '<rx-app-nav items="item.children" level="' + childLevel + '">' +
            '</rx-app-nav>';
        if (angular.isArray(scope.item.children)) {
            injectContent('.item-children', rxNavTemplate);
        }
    };

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/rxAppNavItem.html',
        link: linker,
        scope: {
            item: '='
        },
        controller: function ($scope, $location) {
            // provide `route` as a scope property so that links can tie into them
            $scope.route = $route;

            $scope.isVisible = function (visibility) {
                if (_.isUndefined(visibility)) {
                    // if undefined, default to true
                    return true;
                }

                return $scope.$eval(visibility, {
                    location: $location
                });
            };

            $scope.toggleNav = function (ev, href) {
                // if no href present, simply toggle active state
                if (_.isEmpty(href)) {
                    ev.preventDefault();
                    $scope.item.active = !$scope.item.active;
                }
                // otherwise, let the default nav do it's thing
            };
        }
    };
})
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxAppSearch
* @restrict E
* @scope
* @description
* Creates a search input form for navigation
*
* @param {string} [placeholder] Title of page
* @param {*} [model] Model to tie input form to (via ng-model)
* @param {function} [submit] Function to run on submit (model is passed as only argument to function)
*
*/
.directive('rxAppSearch', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/rxAppSearch.html',
        scope: {
            placeholder: '@?',
            model: '=?',
            submit: '=?',
            pattern: '@?'
        }
    };
})
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxAtlasSearch
* @restrict E
* @description
* Used to search accounts for Cloud Atlas
*/
.directive('rxAtlasSearch', function ($location) {
    return {
        template: '<rx-app-search placeholder="Search for user..." submit="searchAccounts"></rx-app-search>',
        restrict: 'E',
        link: function (scope) {
            scope.searchAccounts = function (searchValue) {
                $location.path(searchValue + '/servers/');
            };
        }
    };
})
.directive('rxAccountSearch', function ($window) {
    return {
        templateUrl: 'templates/rxAccountSearch.html',
        restrict: 'E',
        link: function (scope) {
            scope.fetchAccount = function (query) {
                if (query) {
                    $window.location = _.template('/search?term=${query}', query);
                }
            };
        }
    };
})
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxTicketSearch
* @restrict E
* @description
* Used to search tickets for Ticket Queues
*/
.directive('rxTicketSearch', function () {
    return {
        template: '<rx-app-search placeholder="Search for a Ticket..." submit="searchTickets"></rx-app-search>',
        restrict: 'E',
        link: function (scope) {
            // TQTicketSelection.loadTicket.bind(TQTicketSelection)
            scope.searchTickets = function () {
                // TODO do something here
            };
        }
    };
});

angular.module('encore.ui.rxAttributes', [])
.directive('rxAttributes', function ($parse, $compile) {
    // @see http://stackoverflow.com/questions/19224028/add-directives-from-directive-in-angularjs
    return {
        restrict: 'A',
        terminal: true,
        priority: 1000,
        compile: function (el, attrs) {
            return {
                pre: function preLink (scope, element) {
                    // run the attributes against the scope
                    var attributes = $parse(attrs.rxAttributes)(scope);

                    _.forIn(attributes, function (val, attr) {
                        // if the value exists in the scope, add/set the attribute
                        // otherwise, the attribute isn't added to the element
                        if (!_.isUndefined(val)) {
                            element.attr(attr, val);
                        }
                    });

                    //remove the attribute to avoid an indefinite loop
                    element.removeAttr('rx-attributes');
                    element.removeAttr('data-rx-attributes');

                    // build the new element
                    $compile(element)(scope);
                }
            };
        }
    };
});
angular.module('encore.ui.rxIdentity', ['ngResource'])
   /**
    *
    * @ngdoc service
    * @name encore.ui.rxIdentity:Identity
    * @description
    * Service which is designed to authenticate with Rackspace's Identity service.
    *
    * @requires $resource
    *
    * @example
    * <pre>
    * Identity.loginWithJSON(json); //Returns a promise
    * Identity.login({username: '', password: '', successCallback, errorCallback}); // returns a promise
    * </pre>
    */
    .factory('Identity', function ($resource) {
        var authSvc = $resource('/api/identity/:action',
            {},
            {
                loginWithJSON: { method: 'POST', isArray: false, params: { action: 'tokens' }},
                validate: { method: 'GET', url: '/api/identity/login/session/:id', isArray: false }
            });

        authSvc.login = function (credentials, success, error) {
            var body = {
                auth: {
                    passwordCredentials: {
                        username: credentials.username,
                        password: credentials.password
                    }
                }
            };

            return authSvc.loginWithJSON(body, success, error);
        };

        return authSvc;
    });

/*jshint proto:true*/
angular.module('encore.ui.rxLocalStorage', [])
    /**
    *
    * @ngdoc service
    * @name encore.ui.rxLocalStorage:LocalStorage
    * @description
    * A simple wrapper for injecting the global variable localStorage
    * for storing values in local storage. This service is similar to angular's
    * $window and $document services.  The API works the same as the W3C's
    * specification provided at: http://dev.w3.org/html5/webstorage/#storage-0.
    * Also includes to helper functions for getting and setting objects.
    *
    * @example
    * <pre>
    * LocalStorage.setItem('Batman', 'Robin'); // no return value
    * LocalStorage.key(0); // returns 'Batman'
    * LocalStorage.getItem('Batman'); // returns 'Robin'
    * LocalStorage.removeItem('Batman'); // no return value
    * LocalStorage.setObject('hero', {name:'Batman'}); // no return value
    * LocalStorage.getObject('hero'); // returns { name: 'Batman'}
    * LocalStorage.clear(); // no return value
    * </pre>
    */
    .service('LocalStorage', function ($window) {
        this.setItem = function (key, value) {
            $window.localStorage.setItem(key, value);
        };

        this.getItem = function (key) {
            return $window.localStorage.getItem(key);
        };

        this.key = function (key) {
            return $window.localStorage.key(key);
        };

        this.removeItem = function (key) {
            $window.localStorage.removeItem(key);
        };

        this.clear = function () {
            $window.localStorage.clear();
        };

        this.__defineGetter__('length', function () {
            return $window.localStorage.length;
        });

        this.setObject = function (key, val) {
            var value = _.isObject(val) || _.isArray(val) ? JSON.stringify(val) : val;
            this.setItem(key, value);
        };

        this.getObject = function (key) {
            var item = $window.localStorage.getItem(key);
            try {
                item = JSON.parse(item);
            } catch (error) {
                return item;
            }

            return item;
        };
    });

angular.module('encore.ui.rxSession', ['encore.ui.rxLocalStorage'])
/**
    *
    * @ngdoc service
    * @name encore.ui.rxSession:Session
    * @description
    * Service for managing user session in encore-ui.
    *
    * @requires encore.ui.rxLocalStorage:LocalStorage
    *
    * @example
    * <pre>
    * Session.getToken(); //Returns the stored token
    * Session.storeToken(token); //Stores token
    * Session.logoff(); //Logs user off
    * Session.isCurrent(); //Returns true/false if the token has expired.
    * Session.isAuthenticated(); //Returns true/false if the user token is valid.
    * </pre>
    */
    .factory('Session', function (LocalStorage) {
        var TOKEN_ID = 'encoreSessionToken';
        var session = {};

        /**
        * Dot walks the token without throwing an error.
        * If key exists, returns value otherwise returns undefined.
        */
        session.getByKey = function (key) {
            var tokenValue,
                token = session.getToken(),
                keys = key ? key.split('.') : undefined;

            if (_.isEmpty(token) || !keys) {
                return;
            }

            tokenValue = _.reduce(keys, function (val, key) {
                return val ? val[key] : undefined;
            }, token);

            return tokenValue;
        };

        session.getToken = function () {
            return LocalStorage.getObject(TOKEN_ID);
        };

        session.getTokenId = function () {
            return session.getByKey('access.token.id');
        };

        session.getUserId = function () {
            return session.getByKey('access.user.id');
        };

        session.getUserName = function () {
            return session.getByKey('access.user.name');
        };

        session.storeToken = function (token) {
            LocalStorage.setObject(TOKEN_ID, token);
        };

        session.logout = function () {
            LocalStorage.removeItem(TOKEN_ID);
        };

        session.isCurrent = function () {
            var expireDate = session.getByKey('access.token.expires');

            if (expireDate) {
                return new Date(expireDate) > _.now();
            }

            return false;
        };

        session.isAuthenticated = function () {
            var token = session.getToken();
            return _.isEmpty(token) ? false : session.isCurrent();
        };

        return session;
    });

angular.module('encore.ui.rxPermission', ['encore.ui.rxSession'])
    /**
    *
    * @ngdoc service
    * @name encore.ui.rxPermission:Permission
    * @description
    * Simple service for accessing roles and permissions for a user.
    * @requires encore.ui.rxSession:Session
    *
    * @example
    * <pre>
    * Permission.getRoles() //returns an array of roles for a user
    * Permission.hasRole(role) //returns true/false if user has specified role
    * </pre>
    */
    .factory('Permission', function (Session) {
        var permissionSvc = {};

        permissionSvc.getRoles = function () {
            var token = Session.getToken();
            return (token && token.access && token.access.user && token.access.user.roles) ?
                token.access.user.roles : [];
        };

        permissionSvc.hasRole = function (role) {
            return _.some(permissionSvc.getRoles(), function (item) {
                return item.name === role;
            });
        };

        return permissionSvc;
    })
    /**
    * @ngdoc directive
    * @name encore.ui.rxPermission:rxPermission
    * @restrict E
    * @description
    * Simple directive which will show or hide content if user specified role.
    * @requires encore.ui.rxPermission:Permission
    *
    * @scope
    * @param {String} role - Name of required role.
    */
    .directive('rxPermission', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                role: '@'
            },
            templateUrl: 'templates/rxPermission.html',
            controller: function ($scope, Permission) {
                $scope.hasRole = function () {
                    return Permission.hasRole($scope.role);
                };
            }
        };
    });

angular.module('encore.ui.rxAuth',
    ['encore.ui.rxIdentity', 'encore.ui.rxSession', 'encore.ui.rxPermission'])
   /**
    *
    * @ngdoc service
    * @name encore.ui.rxAuth:Auth
    * @description
    * Service which provides an entire solution for authenticating, user session management
    * and permissions in the UI.  The Auth service is a wrapper for the Identity, Session and
    * Permission services.  These services were broken into smaller components to facilitate
    * customization and re-use. 
    *
    * @requires encore.ui.rxIdentity:Identity
    * @requires encore.ui.rxSession:Session
    * @requires encore.ui.rxPermission:Permission
    *
    * @example
    * <pre>
    * Auth.loginWithJSON(json); //Returns a promise
    * Auth.login({username: '', password: '', successCallback, errorCallback}); // returns a promise
    * Auth.getToken(); //Returns the stored token
    * Auth.storeToken(token); //Stores token
    * Auth.logoff(); //Logs user off
    * Auth.isCurrent(); //Returns true/false if the token has expired.
    * Auth.isAuthenticated(); //Returns true/false if the user token is valid.
    * Auth.getRoles() //returns an array of roles for a user
    * Auth.hasRole(role) //returns true/false if user has specified role
    * </pre>
    */
    .factory('Auth', function (Identity, Session, Permission) {
        var svc = {};

        _.assign(svc, Identity);
        _.assign(svc, Session);
        _.assign(svc, Permission);

        return svc;
    });

angular.module('encore.ui.rxBreadcrumbs', [])
.factory('rxBreadcrumbsSvc', function () {
    // default will always be home
    var breadcrumbs = [{
        path: '/',
        name: 'Home'
    }];
    var breadcrumbsService = {};

    breadcrumbsService.set = function (items) {
        // reset to just homepage
        breadcrumbs = breadcrumbs.splice(0, 1);
        // add in new breadcrumbs
        breadcrumbs = breadcrumbs.concat(items);
    };

    breadcrumbsService.getAll = function () {
        // return a copy of the array (so it can't be modified)
        return breadcrumbs.slice(0);
    };

    return breadcrumbsService;
})
.directive('rxBreadcrumbs', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxBreadcrumbs.html',
        controller: function ($scope, rxBreadcrumbsSvc) {
            $scope.breadcrumbs = rxBreadcrumbsSvc;
        },
        scope: {
            visible: '&'
        }
    };
});
angular.module('encore.ui.rxButton', [])
    /**
    * @ngdoc directive
    * @name encore.ui.rxButton:rxButton
    * @restrict E
    *
    * @description
    * Renders a button which will disable when clicked and show a loading message
    * and renable when operation is complete.
    * @scope
    * @param {String} loadingMsg - Text to be displayed when an operation is in progress.
    * @param {String} defaultMsg - Text to be displayed by default an no operation is in progress.
    * @param {Boolean} toggle - When true, the button will display the loading text.
    */
    .directive('rxButton', function () {
        return {
            templateUrl: 'templates/rxButton.html',
            restrict: 'E',
            scope: {
                toggleMsg: '@',
                defaultMsg: '@',
                toggle: '='
            }
        };
    });

angular.module('encore.ui.rxCapitalize', [])
.filter('rxCapitalize', function () {
    return function (input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
});
angular.module('encore.ui.rxCompile', [])
/*
 * @ngdoc directive
 * @name encore.ui.rxCompile:rxCompile
 * @see http://docs.angularjs.org/api/ng/service/$compile#attributes
 */
.directive('rxCompile', function ($compile) {
    return function (scope, element, attrs) {
        scope.$watch(
            function (scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.rxCompile);
            },
            function (value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
            }
        );
    };
});

angular.module('encore.ui.rxDiskSize', [])
.filter('rxDiskSize', function () {
    return function (size, unit) {
        var units = ['GB', 'TB', 'PB'];
        var index = _.indexOf(units, unit);

        if (index === -1) {
            index = Math.floor(Math.log(size) / Math.log(1000));
        }

        return size / Math.pow(1000, Math.floor(index)).toFixed(1) + ' ' + units[index];
    };
});

angular.module('encore.ui.rxDropdown', [])
.directive('rxDropdown', function ($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxDropdown.html',
        link: function (scope, element) {
            scope.visible = false;

            scope.toggle = function ($event) {
                $event.preventDefault();
                scope.visible = !scope.visible;
                $rootScope.$broadcast('dropdownShow', element);
            };

            scope.$on('dropdownShow', function (ev, el) {
                if (el[0] !== element[0]) {
                    scope.visible = false;
                }
            });
        },
        scope: {
            visible: '&',
            menu: '='
        }
    };
});
angular.module('encore.ui.rxFavicon', ['encore.ui.rxEnvironment'])
.directive('rxFavicon', function (Environment, $parse) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, el, attrs) {
            var favicons = $parse(attrs.rxFavicon)(scope) || { };

            // fallbacks in case staging/local isn't defined
            favicons.prod = el.attr('href');
            favicons.staging = favicons.staging || favicons.prod;
            favicons.local = favicons.local || favicons.staging;

            // convert environment name to match scope variables
            var environmentMap = {
                'local': 'local',
                'unified-preprod': 'staging',
                'ghPages': 'prod',
                'unified-prod': 'prod'
            };

            scope.$watch(function () {
                return Environment.get();
            }, function (environment) {
                var currentEnv = environmentMap[environment.name];

                // update href to use new path
                el.attr('href', favicons[currentEnv]);
            });
        }
    };
});
angular.module('encore.ui.rxFeedback', ['ngResource'])
.value('feedbackTypes', [
    {
        label: 'Software Bug',
        prompt: 'Bug Description',
        placeholder: 'Please be as descriptive as possible so we can track it down for you.'
    },
    {
        label: 'Incorrect Data',
        prompt: 'Problem Description',
        placeholder: 'Please be as descriptive as possible so we can figure it out for you.'
    },
    {
        label: 'Feature Request',
        prompt: 'Feature Description',
        placeholder: 'Please be as descriptive as possible so we can make your feature awesome.'
    },
    {
        label: 'Kudos',
        prompt: 'What made you happy?',
        placeholder: 'We love to hear that you\'re enjoying Encore! Tell us what you like, and what we can do ' +
            'to make it even better'
    }
])
// requires html2canvas
.service('rxScreenshotSvc', function ($log, $q) {
    // double check that html2canvas is loaded
    var hasDependencies = function () {
        var hasHtml2Canvas = typeof html2canvas == 'function';

        return hasHtml2Canvas;
    };

    return {
        capture: function (target) {
            var deferred = $q.defer();

            if (!hasDependencies()) {
                $log.warn('rxScreenshotSvc: no screenshot captured, missing html2canvas dependency');
                deferred.reject('html2canvas not loaded');
            } else {
                html2canvas(target, {
                    onrendered: function (canvas) {
                        var imgData = canvas.toDataURL('image/png');

                        deferred.resolve(imgData);
                    }
                });
            }

            return deferred.promise;
        }
    };
})
.service('rxFeedbackSvc', function ($resource, feedbackApi, $location, $window) {
    var apiEndpoint;

    var setEndpoint = function (url) {
        apiEndpoint = $resource(url);
    };

    // set a default endpoint
    setEndpoint(feedbackApi);

    var emailFeedback = function (feedback) {
        var subject = 'Encore Feedback: ' + feedback.type.label;
        var body = [
            'Current Page: ' + $location.absUrl(),
            'Browser User Agent: ' + navigator.userAgent,
            'Comments: ' + feedback.description
        ];

        body = body.join('\n\n');

        // if the feedback service fails, this fallback function can be run as a last ditch effort
        $window.location.href = encodeURI('mailto:encoreui@lists.rackspace.com?subject=' + subject +
            '&body=' + body);
    };

    return {
        api: apiEndpoint,
        setEndpoint: setEndpoint,
        fallback: emailFeedback
    };
})
.directive('rxFeedback', function (feedbackTypes, $location, rxFeedbackSvc, rxScreenshotSvc, rxNotify) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFeedback.html',
        link: function (scope) {
            scope.currentUrl = $location.url();
            scope.feedbackTypes = feedbackTypes;

            var showSuccessMessage = function (response) {
                var message = _.isString(response.message) ? response.message : 'Thanks for your feedback!';

                rxNotify.add(message, {
                    type: 'success'
                });
            };

            var showFailureMessage = function (httpResponse) {
                var errorMessage = 'An error occurred submitting your feedback';

                if (httpResponse.data && _.isString(httpResponse.data.message)) {
                    errorMessage += ': ' + httpResponse.data.message;
                }

                rxNotify.add(errorMessage, {
                    type: 'error'
                });
            };

            var makeApiCall = function (feedback, screenshot) {
                rxFeedbackSvc.api.save({
                    type: feedback.type.label,
                    description: feedback.description,
                    screenshot: screenshot
                }, showSuccessMessage, function (httpResponse) {
                    showFailureMessage(httpResponse);

                    rxFeedbackSvc.fallback(feedback);
                });
            };

            scope.sendFeedback = function (feedback) {
                var root = document.querySelector('.rx-app');

                // capture screenshot
                var screenshot = rxScreenshotSvc.capture(root);

                screenshot.then(function (dataUrl) {
                    makeApiCall(feedback, dataUrl);
                }, function (reason) {
                    makeApiCall(feedback, reason);
                });
            };
        }
    };
});
angular.module('encore.ui.rxForm', ['ngSanitize'])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxForm:rxFormItem
 * @restrict E
 * @description
 * This directive is used to wrap input fields and select boxes in the proper HTML
 * @scope
 * @param {String} label - Text to use for <label>
 * @param {String} prefix - Text to include to the left of content
 * @param {String} suffix - Text to include to the right of content
 * @param {String} description - Text to place below input
 */
.directive('rxFormItem', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFormItem.html',
        transclude: true,
        scope: {
            label: '@',
            suffix: '@',
            prefix: '@',
            description: '@'
        }
    };
})
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxForm:rxFormFieldset
 * @restrict E
 * @description
 * This directive is used to wrap a set of input fields in the proper HTML
 * @scope
 * @param {String} legend - Text to use for <legend>
 * @param {String} description - Text to place below input
 */
.directive('rxFormFieldset', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFormFieldset.html',
        transclude: true,
        scope: {
            legend: '@',
            description: '@'
        }
    };
})
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxForm:rxFormInput
 * @restrict E
 * @description
 * This directive is used to create an &lt;input&gt; tag.
 * @scope
 * @param {String} type - Value passed to input's 'type' attribute
 * @param {String} required - Value passed to input's 'ng-required' attribute
 * @param {String} fieldId - Used for label and input 'id' attribute
 * @param {Object} model - Value to bind input to using ng-model
 * @param {String} minLength - Value passed to input's 'minLength' attribute
 * @param {String} maxLength - Value passed to input's 'maxLength' attribute
 * @param {String} max - Value passed to input's 'max' attribute
 * @param {String} min - Value passed to input's 'min' attribute
 * @param {String} label - Text to use for <label>
 * @param {String} suffix - Text to use after <label>
 * @param {String} description - Text to place after input
 */
.directive('rxFormInput', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFormInput.html',
        scope: {
            type: '@',
            required: '@',
            fieldId: '@',
            model: '=',
            minLength: '@',
            maxLength: '@',
            max: '@',
            min: '@',
            name: '@',
            value: '@',
            label: '@',
            suffix: '@',
            description: '@'
        }
    };
})
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxForm:rxFormRadio
 * @restrict E
 * @description
 * This directive is used to create a set of &lt;input type="radio"&gt; tags.
 * @scope
 * @param {Array} options - An array of radio inputs to generate. Example format:
 *     ```
 *     [{
 *         label: 'Staging',
 *         value: 'STAGING'
 *     }, {
 *         label: 'ORD (Chicago)',
 *         value: 'ORD'
 *     }];
 *     ```
 * @param {String} fieldId - Used for label and input 'id' attribute
 * @param {Object} model - Value to bind input to using ng-model
 */
.directive('rxFormRadio', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFormRadio.html',
        scope: {
            options: '=',
            fieldId: '@',
            model: '='
        }
    };
})
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxForm:rxFormSelect
 * @restrict E
 * @description
 * This directive is used to create a &lt;select&gt; box w/options.
 * @scope
 * @param {Array} options - An array of options to generate. Example format:
 *     ```
 *     [{
 *         label: 'Staging',
 *         value: 'STAGING'
 *     }, {
 *         label: 'ORD (Chicago)',
 *         value: 'ORD'
 *     }];
 *     ```
 * @param {String} fieldId - Used for label and input 'id' attribute
 * @param {String} label - Text to use for &lt;label&gt;
 * @param {Object} model - Value to bind input to using ng-model
 * @param {String} required - Value passed to select's 'ng-required' attribute
 */
.directive('rxFormSelect', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFormSelect.html',
        scope: {
            options: '=',
            fieldId: '@',
            label: '@',
            model: '=',
            required: '@'
        }
    };
})
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxForm:rxFormOptionTable
 * @restrict E
 * @description
 * This directive is used to build a table of radio/checkbox inputs
 * @scope
 * @param {Array} data - Array of objects used to populate table. Properties must match columns data
 * key. Example:
 * ```
 * [
 *     {
 *         'name': 'Option 1',
 *         'value': 0
 *     }, {
 *         'name': 'Option 2',
 *         'value': 1
 *     }, {
 *         'name': 'Option 3',
 *         'value': 2
 *     }
 * ]
 * ```
 * @param {array} columns - Array of objects with label/key values. Example:
 * ```
 * [{
 *     'label': 'Name',
 *     'key': 'name'
 * }]
 * ```
 * @param {String=} selected - Key of item that's selected (and therefore will have input disabled)
 * @param {String} type - Type of input to be used
 * @param {Object} model - Value to bind input to using ng-model
 * @param {String} fieldId - Used for label and input 'id' attribute
 * @param {String} required - Value passed to input's 'ng-required' attribute
 */
.directive('rxFormOptionTable', function ($interpolate) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFormOptionTable.html',
        scope: {
            data: '=',
            columns: '=',
            selected: '@',
            type: '@',
            model: '=',
            fieldId: '@',
            required: '@'
        },
        controller: function ($scope) {
            var determineMatch = function (val1, val2) {
                if (_.isUndefined(val1) || _.isUndefined(val2)) {
                    return false;
                }

                return (val1 == val2);
            };

            // Determines whether the row is the initial choice
            $scope.isCurrent = function (val) {
                return determineMatch(val, $scope.selected);
            };

            // Determines whether the row is selected
            $scope.isSelected = function (val, idx) {
                // row can only be 'selected' if it's not the 'current'' value
                if (!$scope.isCurrent(val)) {
                    if ($scope.type == 'radio') {
                        return (val == $scope.model);
                    } else if ($scope.type == 'checkbox') {
                        if (!_.isUndefined(val)) {
                            // if 'val' is defined, run it through our custom matcher
                            return determineMatch(val, $scope.model[idx]);
                        } else {
                            // otherwise, just return the value of the model and angular can decide
                            return $scope.model[idx];
                        }
                    }
                }

                return false;
            };

            /*
             * Get the value out of a key from the row, or parse an expression
             * @param {String} expr - Key or Angular Expression (or static text) to be compiled
             * @param {Object} row - Data object with data to be used against the expression
             */
            $scope.getContent = function (column, row) {
                var expr = column.key;
                // If no expression exit out;
                if (!expr) {
                    return;
                }

                // if the expr is a property of row, then we expect the value of the key.
                if (row.hasOwnProperty(expr)) {
                    return row[expr];
                }

                // Compile expression & Run output template
                var outputHTML = $interpolate(expr)(row);
                return outputHTML;
            };
        }
    };
});
angular.module('encore.ui.rxLogout', [])
.directive('rxLogout', function ($rootScope, Auth) {
    return {
        restrict: 'A',
        controller: function ($scope, $window) {
            var success = function () {
                // fire event to notify auth service about logout
                $rootScope.$broadcast('event:auth-loginRequired');
            };

            $scope.logout = function () {
                Auth.logout(success);
                $window.location = '/login';
            };
        },
        link: function (scope, element) {
            var handleClick = function (ev) {
                if (ev && ev.preventDefault) {
                    ev.preventDefault();
                }

                scope.logout();
            };

            element.bind('click', handleClick);
        }
    };
});

angular.module('encore.ui.rxModalAction', ['ui.bootstrap'])
.directive('rxModalForm', function () {
    return {
        transclude: true,
        templateUrl: 'templates/rxModalActionForm.html',
        restrict: 'E',
        scope: {
            title: '@',
            subtitle: '@',
            isLoading: '=',
            submitText: '@',
            cancelText: '@'
        },
        link: function (scope, element) {
            // Remove the title attribute, as it will cause a popup to appear when hovering over page content
            // @see https://github.com/rackerlabs/encore-ui/issues/256
            element.removeAttr('title');
        }
    };
})
.controller('rxModalCtrl', function ($scope, $modalInstance, $rootScope) {
    // define a controller for the modal to use
    $scope.submit = function () {
        $modalInstance.close($scope);
    };

    $scope.cancel = $modalInstance.dismiss;

    // cancel out of the modal if the route is changed
    $rootScope.$on('$routeChangeSuccess', $modalInstance.dismiss);
})
.directive('rxModalAction', function ($modal) {
    var createModal = function (config, scope) {
        config = _.defaults(config, {
            templateUrl: config.templateUrl,
            controller: 'rxModalCtrl',
            scope: scope
        });
        var modal = $modal.open(config);

        return modal;
    };

    return {
        transclude: true,
        templateUrl: 'templates/rxModalAction.html',
        restrict: 'E',
        scope: true,
        link: function (scope, element, attrs) {
            // add any class passed in to scope
            scope.classes = attrs.classes;

            var focusLink = function () {
                element.find('a')[0].focus();
            };

            var handleSubmit = function () {
                focusLink();

                // Since we don't want to isolate the scope, we have to eval our attr instead of using `&`
                // The eval will execute function
                scope.$eval(attrs.postHook);
            };

            scope.showModal = function (evt) {
                evt.preventDefault();

                // Note: don't like having to create a 'fields' object in here,
                // but we need it so that the child input fields can bind to the modalScope
                scope.fields = {};

                // Since we don't want to isolate the scope, we have to eval our attr instead of using `&`
                // The eval will execute function (if it exists)
                scope.$eval(attrs.preHook);

                var modal = createModal(attrs, scope);

                modal.result.then(handleSubmit, focusLink);
            };
        }
    };
});
angular.module('encore.ui.rxNav', ['encore.ui.rxDropdown'])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxNav
 * @restrict E
 * @description
 * TBD
 */
.directive('rxNav', function () {
    return {
        templateUrl: 'templates/rxNav.html',
        restrict: 'E',
        scope: {
            'searchFunction': '&',
            'placeholderText': '@',
            'links': '=?',
            'logo': '=?'
        },
        controller: function ($scope) {
            $scope.bookmarks = {
                linkText: 'Bookmarks',
                items: [
                    {
                        title: 'Bookmarks go here!',
                        path: '/'
                    }
                ]
            };

            $scope.dashboards = {
                linkText: 'Dashboards',
                items: [
                    {
                        title: 'Link 1',
                        path: '/path'
                    },
                    {
                        title: 'Link 2',
                        path: '/path2'
                    },
                    {
                        title: 'Link 3',
                        path: '/path3'
                    }
                ]
            };

            $scope.internalTools = {
                linkText: 'Internal Tools',
                items: [
                    { title: 'Ticket Queues', path: '/ticketqueues/', className: '' }
                ]
            };
        }
    };
});

angular.module('encore.ui.rxNotify', ['ngSanitize'])
/**
* @ngdoc directive
* @name encore.ui.rxNotify:rxNotification
* @restrict E
* @scope
* @description
* Display a static message with styling taken from rx-notifications
*
* @param {string} type The type of notification (e.g. 'warning', 'error')
*
* @example
* <rx-notification type="warning">This is a message!</rx-notification>
*/
.directive('rxNotification', function () {
    return {
        scope: {
            type: '@'
        },
        transclude: true,
        restrict: 'E',
        templateUrl: 'templates/rxNotification.html'
    };
})
 /**
 * @ngdoc directive
 * @name encore.ui.rxNotify:rxNotifications
 * @restrict E
 * @scope
 * @description
 * Displays all messages in a stack
 *
 * @param {string} [stack] The message stack to associate with
 *
 * @example
 * <rx-notifications stack="myCustomStack"></rx-notifications>
 */
.directive('rxNotifications', function (rxNotify) {
    return {
        scope: {
            stack: '@?'
        },
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/rxNotifications.html',
        controller: function ($scope) {
            /*
             * Calls rxNotify service to remove a message from a stack
             * @param {object} message The message object to remove.
             */
            $scope.dismiss = function (message) {
                rxNotify.dismiss(message);
            };
        },
        link: function (scope) {
            var stack = scope.stack || 'page';

            // watch the stack for updates
            scope.$watch(function () {
                return rxNotify.stacks[stack];
            }, function (data) {
                scope.messages = data;
            });

            scope.loading = true;
        }
    };
})
/**
* @ngdoc service
* @name encore.ui.rxNotify:rxNotify
* @description
* Manages page messages for an application
*/
.service('rxNotify', function ($timeout, $rootScope) {
    var defaultStack = 'page';
    var stacks = {};

    // initialize a default stack
    stacks[defaultStack] = [];

    // array that contains messages to show on 'next' (when route changes)
    var nextQueue = [];

    var messageDefaults = {
        type: 'info',
        timeout: -1,
        dismissable: true,
        loading: false,
        show: 'immediate',
        dismiss: 'next',
        stack: 'page'
    };

    /*
     * Adds a message to a stack
     * @private
     * @param {object} message The message object to add.
     */
    var addToStack = function (message) {
        // if timeout is set, we should remove message after time expires
        if (message.timeout > -1) {
            dismissAfterTimeout(message);
        }

        // make sure there's actual text to add
        if (message.text.length > 0) {
            stacks[message.stack].push(message);
        }
    };

    /*
     * Sets a timeout to wait a specific time then dismiss message
     * @private
     * @param {object} message The message object to remove.
     */
    var dismissAfterTimeout = function (message) {
        // convert seconds to milliseconds
        var timeoutMs = message.timeout * 1000;

        $timeout(function () {
            dismiss(message);
        }, timeoutMs);
    };

    /*
     * Shows/dismisses message after scope.prop change to true
     * @private
     * @param {object} message The message object to show/dismiss
     * @param {string} changeType Whether to 'show' or 'dismiss' the message
     */
    var changeOnWatch = function (message, changeType) {
        var scope = message[changeType][0];
        var prop = message[changeType][1];

        // function to run to change message visibility
        var cb;

        // switch which function to call based on type
        if (changeType == 'show') {
            cb = addToStack;
        } else if (changeType == 'dismiss') {
            cb = dismiss;

            // add a listener to dismiss message if scope is destroyed
            scope.$on('$destroy', function () {
                dismiss(message);
            });
        }

        scope.$watch(prop, function (newVal) {
            if (newVal === true) {
                cb(message);
            }
        });
    };

    /*
     * removes all messages that are shown and dismissable
     * @private
     */
    var clearAllDismissable = function () {
        _.forOwn(stacks, function (index, key) {
            stacks[key] = _.reject(stacks[key], {
                'dismiss': messageDefaults.dismiss
            });
        });
    };

    /*
     * adds messages marked as 'next' to relevant queues
     * @private
     */
    var addAllNext = function () {
        _.each(nextQueue, function (message) {
            // add to appropriate stack
            addToStack(message);
        });

        // empty nextQueue of messages
        nextQueue.length = 0;
    };

    /*
     * deletes all messages in a stack
     * @public
     * @param {string} stack The name of the stack to clear
     */
    var clear = function (stack) {
        // @see http://davidwalsh.name/empty-array
        stacks[stack].length = 0;
    };

    /*
     * removes a specific message from a stack
     * @public
     * @param {string} msg Message to remove
     */
    var dismiss = function (msg) {
        // remove message by id
        stacks[msg.stack] = _.reject(stacks[msg.stack], { 'id': msg.id });
    };

    /*
     * adds a message to a stack
     * @public
     * @param {string} text Message text
     * @param {object} options Message options. See README.md for examples
     */
    var add = function (text, options) {
        var message = {
            text: text
        };

        options = options || {};

        // add unique id to message for easier identification
        options.id = _.uniqueId();

        // if stack is specified, add to different stack
        var stack = options.stack || defaultStack;

        // if new stack doesn't exist, create it
        if (!_.isArray(stacks[stack])) {
            stacks[stack] = [];
        }

        // merge options with defaults (overwriting defaults where applicable)
        _.defaults(options, messageDefaults);

        // add options to message
        _.merge(message, options);

        // if dismiss is set to array, watch variable
        if (_.isArray(message.dismiss)) {
            changeOnWatch(message, 'dismiss');
        }

        // add message to stack immediately if has default show value
        if (message.show == messageDefaults.show) {
            addToStack(message);
        } else if (message.show == 'next') {
            nextQueue.push(message);
        } else if (_.isArray(message.show)) {
            changeOnWatch(message, 'show');
        }

        // return message object
        return message;
    };

    // add a listener to root scope which listens for the event that gets fired when the route successfully changes
    $rootScope.$on('$routeChangeSuccess', function processRouteChange () {
        clearAllDismissable();
        addAllNext();
    });

    // expose public API
    return {
        add: add,
        clear: clear,
        dismiss: dismiss,
        stacks: stacks
    };
})
/**
* @ngdoc service
* @name encore.ui.rxNotify:rxPromiseNotifications
* @description
* Manages displaying messages for a promise
*
* @example
* rxPromiseNotifications.add($scope.deferred.promise, {
*     loading: 'Loading Message',
*     success: 'Success Message',
*     error: 'Error Message'
* });
*/
.factory('rxPromiseNotifications', function (rxNotify, $rootScope, $q, $interpolate) {
    var scope = $rootScope.$new();

    /*
     * Removes 'loading' message from stack
     * @private
     * @this Scope used for storing messages data
     */
    var dismissLoading = function () {
        if (this.loadingMsg) {
            rxNotify.dismiss(this.loadingMsg);
        }
    };

    /*
     * shows either a success or error message
     * @private
     * @this Scope used for storing messages data
     * @param {string} msgType Message type to be displayed
     * @param {Object} response Data that's returned from the promise
     */
    var showMessage = function (msgType, response) {
        if (msgType in this.msgs && !this.isCancelled) {
            // convert any bound properties into a string based on obj from result
            var exp = $interpolate(this.msgs[msgType]);
            var msg = exp(response);

            var msgOpts = {
                type: msgType
            };

            // if a custom stack is passed in, specify that for the message options
            if (this.stack) {
                msgOpts.stack = this.stack;
            }

            rxNotify.add(msg, msgOpts);
        }
    };

    /*
     * cancels all messages from displaying
     * @private
     * @this Scope used for storing messages data
     */
    var cancelMessages = function () {
        this.isCancelled = true;
        this.deferred.reject();
    };

    /*
     * Creates a new promise notification handler to show loading, success/error messages
     * @public
     * @param {Object} promise The promise to attach to for showing success/error messages
     * @param {Object} msgs The messages to display. Can take in HTML/expressions
     * @param {Object} msgs.loading Loading message to show while promise is unresolved
     * @param {Object} [msgs.success] Success message to show on successful promise resolve
     * @param {Object} [msgs.error] Error message to show on promise rejection
     * @param {string} [stack] What stack to add to. Defaults to default rxNotify stack
     */
    var add = function (promise, msgs, stack) {
        var deferred = $q.defer();

        var uid = _.uniqueId('promise_');

        scope[uid] = {
            isCancelled: false,
            msgs: msgs,
            stack: stack
        };

        // add loading message to page
        var loadingOpts = {
            loading: true
        };

        if (stack) {
            loadingOpts.stack = stack;
        }

        if (msgs.loading) {
            scope[uid].loadingMsg = rxNotify.add(msgs.loading, loadingOpts);
        }

        // bind promise to show message actions
        deferred.promise
            .then(showMessage.bind(scope[uid], 'success'), showMessage.bind(scope[uid], 'error'))
            .finally(dismissLoading.bind(scope[uid]));

        // react based on promise passed in
        promise.then(function (response) {
            deferred.resolve(response);
        }, function (reason) {
            deferred.reject(reason);
        });

        // if page change, cancel everything
        $rootScope.$on('$routeChangeStart', cancelMessages.bind(scope[uid]));

        // attach deferred to scope for later access
        scope[uid].deferred = deferred;

        return scope[uid];
    };

    return {
        add: add
    };
});

angular.module('encore.ui.rxPageTitle', [])
.factory('rxPageTitle', function ($document) {
    var suffix = '',
        title = '';

    return {
        setSuffix: function (s) {
            suffix = s;
        },
        getSuffix: function () {
            return suffix;
        },
        setTitle: function (t) {
            if (suffix !== '') {
                title = t + suffix;
            } else {
                title = t;
            }
            $document.prop('title', title);
        },
        getTitle: function () {
            return $document.prop('title');
        }
    };
});
angular.module('encore.ui.rxPaginate', [])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxPaginate:rxPaginate
 * @restrict E
 * @description
 * Directive that takes in the page tracking object and outputs a page
 * switching controller
 *
 * @param {Object} pageTracking This is the page tracking service instance to
 * be used for this directive
 * @param {number} numberOfPages This is the maximum number of pages that the
 * page object will display at a time.
 */
.directive('rxPaginate', function () {
    return {
        templateUrl: 'templates/rxPaginate.html',
        replace: true,
        restrict: 'E',
        scope: {
            pageTracking: '=',
            numberOfPages: '@'
        }
    };
})
/**
*
* @ngdoc service
* @name encore.ui.rxPaginate:PageTracking
* @description
* This is the data service that can be used in conjunction with the pagination
* objects to store/control page display of data tables and other items.
*
* @property {number} itemsPerPage This is the current setting for the number
* of items to display per page
* @property {number} pagesToShow This is the number of pages to show
* in the pagination controls
* @property {number} pageNumber This is where the current page number is
* stored.
* @property {boolean} pageInit This is used to determine if the page has been
* initialzed before.
* @property {number} total This is the total number of items that are in the
* data set
* @property {boolean} showAll This is used to determine whether or not to use
* the pagination or not.
*
* @method createInstance This is used to generate the instance of the
* PageTracking object. Enables the ability to override default settings
*
* @example
* <pre>
* PageTracking.createInstance({showAll: true, itemsPerPage: 15});
* </pre>
*/
.factory('PageTracking', function () {
    function PageTrackingObject (opts) {
        this.settings = _.defaults(opts, {
            itemsPerPage: 10,
            pagesToShow: 5,
            pageNumber: 0,
            pageInit: false,
            total: 0,
            showAll: false,
        });
    }

    return {
        createInstance: function (options) {
            options = options ? options : {};
            var tracking = new PageTrackingObject(options);
            return tracking.settings;
        }
    };
})

/**
*
* @ngdoc filter
* @name encore.ui.rxPaginate:Paginate
* @description
* This is the pagination filter that is used to calculate the division in the
* items list for the paging.
*
* @param {Object} items The list of items that are to be sliced into pages
* @param {Object} pager The instance of the PageTracking service. If not
* specified, a new one will be created.
*
* @returns {Object} The list of items for the current page in the PageTracking object
*/
.filter('Paginate', function (PageTracking) {
    return function (items, pager) {
        if (!pager) {
            pager = PageTracking.createInstance();
        }
        if (pager.showAll) {
            pager.total = items.length;
            return items;
        }
        if (items) {
            pager.total = items.length;
            pager.totalPages = Math.ceil(pager.total / pager.itemsPerPage);

            var first = pager.pageNumber * pager.itemsPerPage;
            var added = first + pager.itemsPerPage;
            var last = (added > items.length) ? items.length : added;

            pager.first = first + 1;
            pager.last = last;

            return items.slice(first, last);
        }
    };
})
/**
*
* @ngdoc filter
* @name encore.ui.rxPaginate:Page
* @description
* This is the pagination filter that is used to limit the number of pages
* shown
*
* @param {Object} pager The instance of the PageTracking service. If not
* specified, a new one will be created.
*
* @returns {Array} The list of page numbers that will be displayed.
*/
.filter('Page', function (PageTracking) {
    return function (pager) {
        if (!pager) {
            pager = PageTracking.createInstance();
        }

        var displayPages = [],
            // the next four variables determine the number of pages to show ahead of and behind the current page
            pagesToShow = pager.pagesToShow || 5,
            pageDelta = (pagesToShow - 1) / 2,
            pagesAhead = Math.ceil(pageDelta),
            pagesBehind = Math.floor(pageDelta);

        if (pager && pager.length !== 0) {
                // determine starting page based on (current page - (1/2 of pagesToShow))
            var pageStart = Math.max(Math.min(pager.pageNumber - pagesBehind, pager.totalPages - pagesToShow), 0),

                // determine ending page based on (current page + (1/2 of pagesToShow))
                pageEnd = Math.min(Math.max(pager.pageNumber + pagesAhead, pagesToShow - 1), pager.totalPages - 1);

            for (pageStart; pageStart <= pageEnd; pageStart++) {
                // create array of page indexes
                displayPages.push(pageStart);
            }
        }

        return displayPages;
    };

});

angular.module('encore.ui.rxRelatedMenu', [])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxRelatedMenu
 * @restrict E
 * @description
 * This directive is used to create a menu for a page. By default it shows
 * on the left side, but can be configured for the direction you want.
 * @scope
 * @param {Boolean=false} collapsable - Is this menu going to be collapsable
 * @param {String='open'} default-state - This option is only used
 * if collapsable is true. Potential values are 'open' or 'closed'.
 * @param {String='click'} trigger - This option is only used if
 * collapsable is true. Potential values are 'click' or 'hover'.
 * @param {Boolean} state - Is the menu opened or closed.
 * @param {String='left'} position - Where should the sidebar live? Possible
 * values are 'left' or 'right'.
 *
 */
.directive('rxRelatedMenu', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'templates/rxRelatedMenu.html',
        scope: {
            collapsable: '&',
            defaultState: '@',
            trigger: '@',
            state: '=',
            position: '@'
        },
        link: function (scope) {
            scope.menuPosition = (_.isEmpty(scope.position)) ? 'left' : scope.position;
            scope.state = (_.isEmpty(scope.defaultState)) ? 'open' : scope.defaultState == 'open';

            scope.isCollapsable = scope.collapsable();

            scope.toggleRelatedMenu = function () {
                scope.state = !scope.state;
            };

        }
    };
});
angular.module('encore.ui.rxProductResources', ['encore.ui.rxActiveUrl', 'encore.ui.rxRelatedMenu'])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxProductResources
 * @restrict E
 * @description
 * TBD
 */
.directive('rxProductResources', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxProductResources.html',
        scope: {
            user: '='
        }
    };
});
/*jshint proto:true*/
angular.module('encore.ui.rxSessionStorage', [])
    /**
    *
    * @ngdoc service
    * @name encore.ui.rxSessionStorage:SessionStorage
    * @description
    * A simple wrapper for injecting the global variable sessionStorage
    * for storing values in session storage. This service is similar to angular's
    * $window and $document services.  The API works the same as the W3C's
    * specification provided at: http://dev.w3.org/html5/webstorage/#storage-0.
    * Also includes to helper functions for getting and setting objects.
    *
    * @example
    * <pre>
    * SessionStorage.setItem('Batman', 'Robin'); // no return value
    * SessionStorage.key(0); // returns 'Batman'
    * SessionStorage.getItem('Batman'); // returns 'Robin'
    * SessionStorage.removeItem('Batman'); // no return value
    * SessionStorage.setObject('hero', {name:'Batman'}); // no return value
    * SessionStorage.getObject('hero'); // returns { name: 'Batman'}
    * SessionStorage.clear(); // no return value
    * </pre>
    */
    .service('SessionStorage', function ($window) {
        this.setItem = function (key, value) {
            $window.sessionStorage.setItem(key, value);
        };

        this.getItem = function (key) {
            return $window.sessionStorage.getItem(key);
        };

        this.key = function (key) {
            return $window.sessionStorage.key(key);
        };

        this.removeItem = function (key) {
            $window.sessionStorage.removeItem(key);
        };

        this.clear = function () {
            $window.sessionStorage.clear();
        };

        this.__defineGetter__('length', function () {
            return $window.sessionStorage.length;
        });

        this.setObject = function (key, val) {
            var value = _.isObject(val) || _.isArray(val) ? JSON.stringify(val) : val;
            this.setItem(key, value);
        };

        this.getObject = function (key) {
            var item = $window.sessionStorage.getItem(key);
            try {
                item = JSON.parse(item);
            } catch (error) {
                return item;
            }

            return item;
        };
    });

angular.module('encore.ui.rxSortableColumn', [])
/**
* @ngdoc directive
* @name encore.ui.rxSortableColumn:rxSortableColumn
* @restrict E
*
* @description
* Renders a clickable link in a table heading which will sort the table by
* the referenced property in ascending or descending order.
*
* @param {String} displayText - The text to be displayed in the link
* @param {Function} sortMethod - The sort function to be called when the link is clicked
* @param {String} sortProperty - The property on the array to sort by when the link is clicked.
* @param {Object} predicate - The current property the collection is sorted by.
* @param {Boolean} reverse - Indicates whether the collection should sort the array in reverse order.
*/
.directive('rxSortableColumn', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxSortableColumn.html',
        transclude: true,
        scope: {
            sortMethod: '&',
            sortProperty: '@',
            predicate: '=',
            reverse: '='
        }
    };
})
/**
* @ngdoc service
* @name encore.ui.rxSortableColumn:rxSortUtil
* @description
* Service which provided utility methods for sorting collections.
*
* @example
* <pre>
* rxSortUtil.getDefault() // returns a sort object with name as the default.
* rxSortUtil.sortCol($scope, 'name') // sorts the collection based on the predicate
* </pre>
*/
.factory('rxSortUtil', function () {
    var util = {};

    util.getDefault = function (property, reversed) {
        var prop = property ? property : 'name';
        return { predicate: prop, reverse: reversed };
    };

    util.sortCol = function ($scope, predicate) {
        var reverse = ($scope.sort.predicate === predicate) ? !$scope.sort.reverse : false;
        $scope.sort = { reverse: reverse, predicate: predicate };

        // This execution should be moved outside of the scope for rxSortUtil
        // already rxSortUtil.sortCol has to be wrapped, and can be implemented there
        // rather than have rxSortUtil.sortCol check/expect for a pager to be present.
        if ($scope.pager) {
            $scope.pager.pageNumber = 0;
        }
    };

    return util;
});

angular.module('encore.ui.rxSpinner', [])
/**
* @ngdoc directive
* @name encore.ui.rxSpinner:rxSpinner
* @restrict A
*
* @description
* Renders a spinner animation on the provided element given the 'toggle' attribute is truthy

* @scope
* @param {String} size - Controls the size of the spinner.  The options are default (no size specified),
* mini, small, large and extra-large
* @param {Boolean} toggle - When true, the spinner will display
*/
.directive('rxSpinner', function () {
    return {
        restrict: 'A',
        scope: {
            toggle: '=',
            size: '@'
        },
        link: function (scope, element) {
            scope.$watch('toggle', function (value) {
                var size = scope.size ? scope.size : '';

                if (value) {
                    element.prepend('<div class="rx-spinner ' + size + '"></div> ');
                } else {
                    element.find('div').remove();
                }
            });
        }
    };
});

angular.module('encore.ui.rxToggle', [])
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxToggle
* @restrict A
* @description
* Adds a 'click' listener to an element that, when fired, toggles the boolean scope property defined
*
* @param {string} rxToggle Boolean property to toggle true/false state
*/
.directive('rxToggle', function () {
    return {
        restrict: 'A',
        link: function ($scope, el, attrs) {
            var propToToggle = attrs.rxToggle;

            el.on('click', function () {
                $scope.$apply(function () {
                    // we use $scope.$eval to allow for nested properties
                    // e.g. '$parent.propertyName'
                    // this allows us to switch back between true/false for any value
                    $scope.$eval(propToToggle + ' = !' + propToToggle);
                });
            });
        }
    };
});
angular.module('encore.ui.rxTokenInterceptor', ['encore.ui.rxSession'])
    /**
    *
    * @ngdoc service
    * @name encore.ui.rxTokenInjector:TokenInjector
    * @description
    * Simple injector which will intercept http request and inject the
    * Rackspace Identity's token into every http request.
    *
    * @requires encore.ui.rxSession:Session
    *
    * @example
    * <pre>
    * angular.module('encoreApp', ['encore.ui'])
    *     .config(function ($httpProvider) {
    *         $httpProvider.interceptors.push('TokenInterceptor');
    *     });
    * </pre>
    */
    .factory('TokenInterceptor', function (Session) {
        return {
            request: function (config) {
                config.headers['X-Auth-Token'] = Session.getTokenId();
                return config;
            }
        };
    });

angular.module('encore.ui.rxUnauthorizedInterceptor', ['encore.ui.rxSession'])
    /**
    *
    * @ngdoc service
    * @name encore.ui.rxUnauthorizedInterceptor:UnauthorizedInterceptor
    * @description
    * Simple injector which will intercept http responses. If a 401 is returned,
    * the ui redirects to /login.
    *
    * @requires $q
    * @requires @window
    * @requires $location
    * @requires encore.ui.rxSession:Session
    *
    * @example
    * <pre>
    * angular.module('encoreApp', ['encore.ui'])
    *     .config(function ($httpProvider) {
    *         $httpProvider.interceptors.push('UnauthorizedInterceptor');
    *     });
    * </pre>
    */
    .factory('UnauthorizedInterceptor', function ($q, $window, $location, Session) {
        return {
            responseError: function (response) {
                // If one uses the <base /> tag, $location's API is unable to
                // give us a proper path(). Therefore, we have to grab the current
                // browser URL and fetch the proper portion to return to after login.
                //
                // For Example:
                // <base href="/app"></base>
                // current URL: /app/path
                // $location.path(): /path
                // $location.absUrl(): https://localhost:9000/app/path
                var returnPath = '/' + $location.absUrl().split('/').splice(3).join('/');
                if (response.status === 401) {
                    Session.logout(); //Logs out user by removing token
                    $window.location = '/login?redirect=' + returnPath;
                }

                return $q.reject(response);
            }
        };
    });
