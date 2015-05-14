/*
 * EncoreUI
 * https://github.com/rackerlabs/encore-ui

 * Version: 1.16.0 - 2015-05-14
 * License: Apache License, Version 2.0
 */
angular.module('encore.ui', ['encore.ui.configs','encore.ui.rxAccountInfo','encore.ui.rxActionMenu','encore.ui.rxActiveUrl','encore.ui.rxAge','encore.ui.rxEnvironment','encore.ui.rxAppRoutes','encore.ui.rxLocalStorage','encore.ui.rxSession','encore.ui.rxApp','encore.ui.rxAttributes','encore.ui.rxIdentity','encore.ui.rxPermission','encore.ui.rxAuth','encore.ui.rxBreadcrumbs','encore.ui.rxButton','encore.ui.rxCapitalize','encore.ui.rxCharacterCount','encore.ui.rxCheckbox','encore.ui.rxCollapse','encore.ui.rxCompile','encore.ui.rxDiskSize','encore.ui.rxFavicon','encore.ui.rxFeedback','encore.ui.rxSessionStorage','encore.ui.rxMisc','encore.ui.rxFloatingHeader','encore.ui.rxForm','encore.ui.rxInfoPanel','encore.ui.rxLogout','encore.ui.rxModalAction','encore.ui.rxNotify','encore.ui.rxPageTitle','encore.ui.rxPaginate','encore.ui.rxRadio','encore.ui.rxSearchBox','encore.ui.rxSelectFilter','encore.ui.rxSortableColumn','encore.ui.rxSpinner','encore.ui.rxStatus','encore.ui.rxStatusColumn','encore.ui.rxToggle','encore.ui.rxToggleSwitch','encore.ui.rxTokenInterceptor','encore.ui.rxUnauthorizedInterceptor', 'cfp.hotkeys','ui.bootstrap']);
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
.constant('feedbackApi', '/api/encore/feedback')
.provider('routesCdnPath', function () {

    this.customURL = null;

    this.$get = function () {
        var staging = this.customURL ||
            'https://5593626d69acc4cdb66a-521ce2b7cdb9308893eabb7915d88c0c.ssl.cf1.rackcdn.com/encoreNav.json';

        var production =
            'https://d5b31243886503cdda55-92f888f8ef3e8464bcb65f52330fcbfb.ssl.cf1.rackcdn.com/encoreNav.json';

        var preprod =
            'https://b24ad15095637d2f91ee-ae6903de16cd565a74a9a50d287ad33f.ssl.cf1.rackcdn.com/encoreNav.json';

        return {
            production: production,
            staging: staging,
            preprod: preprod,
            hasCustomURL: !_.isEmpty(this.customURL)
        };
        
    };
});

angular.module('encore.ui.rxAccountInfo', [])

/**
 * @ngdoc directive
 * @name encore.ui.rxAccountInfo:rxAccountInfo
 * @restrict E
 * @scope
 * @description
 * Responsible for drawing an account info box.
 *
 * There are two different styles of account info box supported. The "old" one, which appears
 * wherever you want it to be, and a new one that is intended to be placed underneath the breadcrumbs.
 * To use the new one, pass `account-info-banner="true"` to this directive
 *
 * @param {string} accountNumber - The account number to load and retrieve data for
 * @param {string} [teamId] - Optional team ID, used for loading team badges
 * @param {string} [notifyStack] - Optional notifications stack to put errors on. Defaults to `page`
 * @param {string} [accountInfoBanner] - Set to "true" to use the new under-the-breadcrumbs style
 */
.directive('rxAccountInfo', ["Teams", "SupportAccount", "Encore", "rxNotify", "encoreRoutes", "AccountStatusGroup", function (Teams, SupportAccount, Encore, rxNotify, encoreRoutes,
                                    AccountStatusGroup) {
    return {
        templateUrl: function (elem, attr) {
            if (attr.accountInfoBanner === 'true') {
                return 'templates/rxAccountInfoBanner.html';
            }
            return 'templates/rxAccountInfo.html';
        },
        restrict: 'E',
        transclude: true,
        scope: {
            accountNumber: '@',
            teamId: '@',
            notifyStack: '@'
        },
        link: function (scope) {
            var notifyStack = scope.notifyStack || 'page';
            scope.badges = [];
            scope.tooltipHtml = function (badge) {
                return ['<span class="tooltip-header">', badge.name,
                        '</span><p>', badge.description, '</p>'].join('');
            };

            // Currently, the only time we should show the `Current User` area is
            // if the Racker is on the Cloud page
            encoreRoutes.isActiveByKey('cloud').then(function (isCloud) {
                scope.showCurrentUser = isCloud;
            });

            scope.accountPageUrl = _.template('/accounts/<%= accountNumber %>', scope);

            SupportAccount.getBadges({ accountNumber: scope.accountNumber }, function (badges) {
                scope.badges = scope.badges.concat(badges);
            }, function () {
                rxNotify.add('Error retrieving badges for this account', {
                    type: 'error',
                    stack: notifyStack
                });
            });

            if (!_.isEmpty(scope.teamId) && (_.isNumber(_.parseInt(scope.teamId)))) {
                Teams.badges({ id: scope.teamId }).$promise.then(function (badges) {
                    scope.badges = scope.badges.concat(badges);
                }, function () {
                    rxNotify.add('Error retrieving badges for this team', {
                        type: 'error',
                        stack: notifyStack
                    });
                });
            }

            Encore.getAccount({ id: scope.accountNumber }, function (account) {
                scope.accountName = account.name;
                scope.accountStatus = account.status;
                scope.statusClass = '';
                var statusClass = AccountStatusGroup(account.status);
                if (statusClass === 'warning') {
                    scope.statusClass = 'msg-warn';
                } else if (statusClass === 'info') {
                    scope.statusClass = 'msg-info';
                }
            }, function () {
                rxNotify.add('Error retrieving account name', {
                    type: 'error',
                    stack: notifyStack
                });
            });
        }
    };
}]);

angular.module('encore.ui.rxActionMenu', [])
.directive('rxActionMenu', ["$rootScope", "$document", function ($rootScope, $document) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/rxActionMenu.html',
        scope: {
            globalDismiss: '=?'
        },
        link: function ($scope, element) {
            if (!_.isBoolean($scope.globalDismiss)) {
                $scope.globalDismiss = true;
            }
            $scope.displayed = false;

            $scope.toggle = function () {
                $scope.displayed = !$scope.displayed;
                $rootScope.$broadcast('actionMenuShow', element);
            };

            $scope.modalToggle = function () {
                if ($scope.globalDismiss) {
                    $scope.toggle();
                }
            };

            $scope.$on('actionMenuShow', function (ev, el) {
                if ($scope.globalDismiss && el[0] !== element[0]) {
                    $scope.displayed = false;
                }
            });
            
            $document.on('click', function (clickEvent) {
                if ($scope.globalDismiss && $scope.displayed && !element[0].contains(clickEvent.target)) {
                    $scope.$apply(function () { $scope.displayed = false;});
                }
            });

            // TODO: Center the Action Menu box so it 
            // takes the height of the translucded content
            // and then centers it with CSS. 
            // I spent an afternoon trying to see if I could
            // repurpose angularjs' bootstrap popover library
            // and their position.js file, but I spent too
            // much time and had to table this.  -Ernie
            
            // https://github.com/angular-ui/bootstrap/blob/master/src/position/position.js
            // https://github.com/angular-ui/bootstrap/blob/master/src/tooltip/tooltip.js
        }
    };
}]);

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
.directive('rxActiveUrl', ["$location", function ($location) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxActiveUrl.html',
        transclude: true,
        replace: true,
        scope: {
            url: '@'
        },
        controller: ["$scope", function ($scope) {
            $scope.isNavActive = function (pattern) {
                return $location.path().indexOf(pattern) !== -1;
            };
        }],
        link: function (scope, element, attribute) {
            // Is the subset of whatever is in isNavActive part of the URL string?
            scope.navActive = scope.isNavActive(attribute.url);
        }
    };
}]);

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
.service('Environment', ["$location", "$rootScope", "$log", function ($location, $rootScope, $log) {
    /*
     * This array defines different environments to check against.
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
        // Matches only https://preprod.encore.rackspace.com
        name: 'preprod',
        pattern: /\/\/preprod.encore.rackspace.com/,
        url: '{{path}}'
    }, {
        // This is anything with a host preceeding encore.rackspace.com
        // https://staging.encore.rackspace.com/
        // https://preprod.encore.rackspace.com/
        name: 'unified-preprod',
        pattern: /\/\/(\w+\.)encore.rackspace.com/,
        url: '{{path}}'
    }, {
        // This is *all* environments
        // https://encore.rackspace.com/
        // https://staging.encore.rackspace.com/
        // https://preprod.encore.rackspace.com/
        name: 'unified',
        pattern: 'encore.rackspace.com',
        url: '{{path}}'
    }, {
        // This is only https://encore.rackspace.com/
        name: 'unified-prod',
        pattern: /\/\/encore.rackspace.com/,
        url: '{{path}}'
    }];

    /*
     * Checks if an environment has valid properties
     * @private
     * @param {object} environment The environment object to check
     * @returns {boolean} true if valid, false otherwise
     */
    var isValidEnvironment = function (environment) {
        return _.isString(environment.name) &&
            (_.isString(environment.pattern) || _.isRegExp(environment.pattern)) &&
            _.isString(environment.url);
    };

    var environmentPatternMatch = function (href, pattern) {
        if (_.isRegExp(pattern)) {
            return pattern.test(href);
        }

        return _.contains(href, pattern);
    };

    /*
     * Retrieves current environment
     * @public
     * @param {string} [href] The path to check the environment on. Defaults to $location.absUrl()
     * @returns {Object} The current environment (if found), else 'localhost' environment.
     */
    this.get = function (href) {
        // default to current location if href not provided
        href = href || $location.absUrl();

        var currentEnvironment = _.find(environments, function (environment) {
            return environmentPatternMatch(href, environment.pattern);
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
    this.add = function (environment) {
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
    this.setAll = function (newEnvironments) {
        // validate that all new environments are valid
        if (newEnvironments.length > 0 && _.every(environments, isValidEnvironment)) {
            // overwrite old environments with new
            environments = newEnvironments;
        }
    };

    /*
     * Given an environment name, check if any of our registered environments 
     * match it
     * @public
     * @param {string} [name] Environment name to check
     * @param {string} [href] Optional href to check against. Defaults to $location.absUrl()
     */
    this.envCheck = function (name, href) {
        href = href || $location.absUrl();
        var matchingEnvironments = _.filter(environments, function (environment) {
            return environmentPatternMatch(href, environment.pattern);
        });
        return _.contains(_.pluck(matchingEnvironments, 'name'), name);
    };

    var makeEnvCheck = function (name) {
        return function (href) { return this.envCheck(name, href); };
    };

    /* Whether or not we're in the `preprod` environment
     * @public
     */
    this.isPreProd = makeEnvCheck('preprod');

    /* Whether or not we're in `local` environment
     * @public
     */
    this.isLocal = makeEnvCheck('local');

    /* Whether or not we're in the `unified-preprod` environment
     * @public
     */
    this.isUnifiedPreProd = makeEnvCheck('unified-preprod');

    /* Whether or not we're in the `unified` environment
     * @public
     */
    this.isUnified = makeEnvCheck('unified');

    /* Whether or not we're in the `unified-prod` environment
     * @public
     */
    this.isUnifiedProd = makeEnvCheck('unified-prod');

}])
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
.filter('rxEnvironmentUrl', ["Environment", "$interpolate", function (Environment, $interpolate) {
    return function (details) {
        var environment = Environment.get();

        // convert url template into full path based on details provided (if details is an object)
        return _.isObject(details) ? $interpolate(environment.url)(details) : details;
    };
}])
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
.filter('rxEnvironmentMatch', ["Environment", function (Environment) {
    return function (environment) {
        // check to see if first character is negation indicator
        var isNegated = environment[0] === '!';

        // get name of environment to look for
        var targetEnvironmentName = isNegated ? environment.substr(1) : environment;

        var environmentMatches = Environment.envCheck(targetEnvironmentName);
        return isNegated ? !environmentMatches : environmentMatches;
    };
}])
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
*     <div rx-if-environment="unified-preprod">Show if staging</div>
*     <div rx-if-environment="!unified-prod">Show if not prod</div>
* </pre>
*/
.directive('rxIfEnvironment', ["$compile", function ($compile) {
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
}]);

angular.module('encore.ui.rxAppRoutes', ['encore.ui.rxEnvironment'])
/**
* @ngdoc service
* @name encore.ui.rxAppRoutes:urlUtils
* @description
* Set of utility functions used by rxAppRoutes to break apart/compare URLs
*/
.service('urlUtils', ["$location", "rxEnvironmentUrlFilter", "$interpolate", "$route", "$document", function ($location, rxEnvironmentUrlFilter, $interpolate, $route, $document) {
    // remove any preceding # and / from the URL for cleaner comparison
    this.stripLeadingChars = function (url) {
        // http://regexr.com/39coc
        var leadingChars = /^((?:\/|#)+)/;

        return url.replace(leadingChars, '');
    };

    // remove any trailing /'s from the URL
    this.stripTrailingSlash = function (url) {
        // Match a forward slash / at the end of the string ($)
        var trailingSlash = /\/$/;

        return url.replace(trailingSlash, '');
    };

    // Given a URL, split it on '/' and return all the non-empty components
    this.getChunks = function (url) {
        if (!_.isString(url)) {
            return [''];
        }

        return _.compact(url.split('/'));
    };

    // Get the current path. Knows how to work with the `base` tag
    this.getFullPath = function () {
        var base = $document.find('base');
        var basePath = '';

        if (base.length > 0) {
            basePath = base[0].getAttribute('href');

            // remove trailing '/' if present
            basePath = this.stripTrailingSlash(basePath);
        }

        return basePath + $location.path();
    };

    // get the current path, adding the <base> path if neeeded
    //
    // @example
    // if the current page url is 'http://localhost:9000/encore-ui/#/overviewPage#bookmark?book=harry%20potter'
    // and the page contains a <base href="encore-ui"> tag
    // getCurrentPath() would return '/encore-ui/overviewPage'
    this.getCurrentPathChunks = function () {
        var fullPath = this.stripLeadingChars(this.getFullPath());

        return this.getChunks(fullPath);
    };

    // get the url defined in the route by removing the hash tag, leading slashes and query string
    // e.g. '/#/my/url?param=1' -> 'my/url'
    this.getItemUrl = function (item) {
        if (!_.isString(item.url)) {
            return undefined;
        }

        // remove query string
        var itemUrl = item.url.split('?')[0];
        itemUrl = this.stripLeadingChars(itemUrl);

        return itemUrl;
    };

    // For a given route item, grab its defined URL, and see
    // if it matches the currentPathChunks
    this.isActive = function (item, currentPathChunks) {
        var itemUrlChunks = this.getChunks(this.getItemUrl(item));
        var numChunks = itemUrlChunks.length;

        // check against the path and the hash
        // (in case the difference is the 'hash' like on the encore-ui demo page)
        var pathMatches = this.matchesSubChunks(currentPathChunks, itemUrlChunks, numChunks);
        if (!pathMatches) {
            pathMatches = this.matchesSubChunks(this.getChunks($location.hash()), itemUrlChunks, numChunks);
        }

        // if current item not active, check if any children are active
        // This requires that `isActive` was called on all the children beforehand
        if (!pathMatches && item.children) {
            pathMatches = _.any(item.children, 'active');
        }

        return pathMatches;
    };

    // Given a URL string, interpolate it with $route.current.pathParams
    // If the optional `extraContext` is passed in, then the URL will be interpolated
    // with those values as well, with `extraContext` values taking precedence
    this.buildUrl = function (url, extraContext) {
        // sometimes links don't have URLs defined, so we need to exit before $interpolate throws an error
        if (_.isUndefined(url)) {
            return url;
        }

        // run the href through rxEnvironmentUrl in case it's defined as such
        url = rxEnvironmentUrlFilter(url);

        if ($route.current) {
            // convert any nested expressions to defined route params
            var finalContext = _.defaults(extraContext || {}, $route.current.pathParams);
            url = $interpolate(url)(finalContext);
        }

        return url;
    };

    // Given two sets of chunks, check if the first `numChunks` of `firstChunks`
    // matches all of `subChunks`
    this.matchesSubChunks = function (firstChunks, subChunks, numChunks) {
        return _.isEqual(firstChunks.slice(0, numChunks), subChunks);
    };
}])
/**
* @ngdoc interface
* @name encore.ui.rxApp:AppRoutes
* @description
* Manages page routes, building urls and marking them as active on route change
*/
.factory('rxAppRoutes', ["$rootScope", "$log", "urlUtils", "$q", function ($rootScope, $log, urlUtils, $q) {
    var AppRoutes = function (routes) {
        routes = routes || [];
        // we need to get the current path on page load
        var currentPathChunks = urlUtils.getCurrentPathChunks();
        var loadingDeferred = $q.defer();

        // if the routes were already passed in, then we can immediately
        // resolve the promise
        if (routes.length > 0) {
            loadingDeferred.resolve(routes);
        }

        var setDynamicProperties = function (routes, extraUrlContext) {
            _.each(routes, function (route) {
                // build out url for current route
                route.url = urlUtils.buildUrl(route.href, extraUrlContext);

                // check if any children exist, if so, build their URLs as well
                if (route.children) {
                    route.children = setDynamicProperties(route.children, extraUrlContext);
                }

                // set active state (this needs to go after the recursion,
                // so that the URL is built for all the children)
                route.active = urlUtils.isActive(route, currentPathChunks);
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

        // Get the route for a given index
        var getRouteByIndex = function (indexes, subRoutes) {
            var i, route,
                depth = indexes.length;
            for (i = 0; i < depth; i++) {
                route = subRoutes[indexes[i]];
                subRoutes = route.children;
            }
            return route;
        };

        $rootScope.$on('$locationChangeSuccess', function () {
            // NOTE: currentPath MUST be updated before routes
            currentPathChunks = urlUtils.getCurrentPathChunks();

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
                return loadingDeferred.promise.then(function () {
                    var routeIndex = getRouteIndex(key, routes);
                    if (_.isUndefined(routeIndex)) {
                        $log.debug('Could not find route by key: ', key);
                        return $q.reject();
                    }

                    return routeIndex;
                });
            },

            getRouteByKey: function (key) {
                return this.getIndexByKey(key).then(function (index) {
                    return getRouteByIndex(index, routes);
                }, function () {
                    return $q.reject();
                });
            },

            isActiveByKey:  function (key) {
                return this.getRouteByKey(key).then(function (route) {
                    return urlUtils.isActive(route, urlUtils.getCurrentPathChunks());
                }, function () {
                    return $q.reject();
                });
                
            },
            /**
             * functionality to update routes based on their key
             * @param {string} key Route key used to identify it in navigation
             * @param {object} routeInfo Information used to overwrite original properties
             * @return {boolean} true if successfully updated, false if key not found
             */
            setRouteByKey: function (key, routeInfo) {
                return this.getIndexByKey(key).then(function (routeIndex) {
                    routes = updateRouteByIndex(routeIndex, routeInfo, routes, 0);

                    // now that we've updated the route info, we need to reset the dynamic properties
                    routes = setDynamicProperties(routes);

                    return routeIndex;
                }, function () {
                    return $q.reject();
                });
            },
            getAll: function () {
                return loadingDeferred.promise.then(function () {
                    return routes;
                });
            },
            setAll: function (newRoutes) {
                // let's not mess with the original object
                var routesToBe = _.clone(newRoutes, true);

                routes = setDynamicProperties(routesToBe);
                loadingDeferred.resolve();
            },
            rebuildUrls: function (extraUrlContext) {
                setDynamicProperties(routes, extraUrlContext);
            }
        };
    };

    return AppRoutes;
}]);

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
    .service('LocalStorage', ["$window", function ($window) {
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
    }]);

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
    * Session.getToken(); // Returns the stored token
    * Session.storeToken(token); // Stores token
    * Session.logout(); // Logs user off
    * Session.isCurrent(); // Returns true/false if the token has expired.
    * Session.isAuthenticated(); // Returns true/false if the user token is valid.
    * </pre>
    */
    .factory('Session', ["LocalStorage", function (LocalStorage) {
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
    }]);

angular.module('encore.ui.rxApp', ['encore.ui.rxAppRoutes', 'encore.ui.rxEnvironment', 'ngSanitize',
    'ngRoute', 'cfp.hotkeys', 'encore.ui.rxSession', 'encore.ui.rxLocalStorage'])
/**
* @ngdoc service
* @name encore.ui.rxApp:encoreRoutes
* @description
* Creates a shared instance of AppRoutes that is used for the Encore App nav.
* This allows apps to make updates to the nav via `encoreRoutes`.
*
* @returns {object} Instance of rxAppRoutes with `fetchRoutes` method added
*/
.factory('encoreRoutes', ["rxAppRoutes", "routesCdnPath", "rxNotify", "$q", "$http", "rxVisibilityPathParams", "rxVisibility", "Environment", "rxHideIfUkAccount", "LocalStorage", function (rxAppRoutes, routesCdnPath, rxNotify, $q, $http,
                                   rxVisibilityPathParams, rxVisibility, Environment,
                                   rxHideIfUkAccount, LocalStorage) {

    // We use rxVisibility in the nav menu at routesCdnPath, so ensure it's ready
    // before loading from the CDN
    rxVisibility.addVisibilityObj(rxVisibilityPathParams);
    rxVisibility.addVisibilityObj(rxHideIfUkAccount);

    var encoreRoutes = new rxAppRoutes();

    var setWarningMessage = function () {
        rxNotify.add('There was a problem loading the navigation, so a cached version has been loaded for display.', {
            type: 'warning'
        });
    };

    var setFailureMessage = function () {
        rxNotify.add('Error loading site navigation', {
            type: 'error'
        });
    };

    var url, suffix;
    switch (true) {
        case Environment.isUnifiedProd(): {
            url = routesCdnPath.production;
            suffix = 'prod';
            break;
        }
        case Environment.isPreProd(): {
            url = routesCdnPath.preprod;
            suffix = 'preprod';
            break;
        }
        case routesCdnPath.hasCustomURL: {
            url = routesCdnPath.staging;
            suffix = 'custom';
            break;
        }
        default: {
            url = routesCdnPath.staging;
            suffix = 'staging';
        }
    }

    encoreRoutes.fetchRoutes = function () {
        var routesKey = 'encoreRoutes-' + suffix;
        var cachedRoutes = LocalStorage.getObject(routesKey);

        $http.get(url)
            .success(function (routes) {
                encoreRoutes.setAll(routes);
                LocalStorage.setObject(routesKey, routes);
            })
            .error(function () {
                if (cachedRoutes) {
                    encoreRoutes.setAll(cachedRoutes);
                    setWarningMessage();
                } else {
                    setFailureMessage();
                }
            });

        return cachedRoutes || [];
    };

    return encoreRoutes;
}])
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
* @param {boolean} [hideFeeback] Whether to hide the 'feedback' link or not (defaults to show it)
* @param {string} [logoutUrl] URL to pass to rx-logout
*
* @example
* <pre>
*     <rx-app site-title="Custom Title"></rx-app>
* </pre>
*/
.directive('rxApp', ["encoreRoutes", "rxAppRoutes", "hotkeys", "Environment", "routesCdnPath", "Session", function (encoreRoutes, rxAppRoutes, hotkeys,
                              Environment, routesCdnPath, Session) {
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
            hideFeedback: '@?',
            logoutUrl: '@?'
        },
        link: function (scope) {
            scope.userId = Session.getUserId();

            scope.isPreProd = Environment.isPreProd();

            scope.isLocalNav = routesCdnPath.hasCustomURL && (Environment.isLocal());

            scope.isWarning = scope.isPreProd || scope.isLocalNav;

            if (scope.isPreProd) {
                scope.warningMessage =
                    'You are using a pre-production environment that has real, live production data!';
            } else if (scope.isLocalNav) {
                scope.warningMessage =
                    'You are using a local nav file. Remove it from your config before committing!';
            }

            // default hideFeedback to false
            var appRoutes = scope.newInstance ? new rxAppRoutes() : encoreRoutes;

            // we only want to set new menu data if a new instance of rxAppRoutes was created
            // or if scope.menu was defined
            if (scope.newInstance || scope.menu) {
                appRoutes.setAll(scope.menu);
            } else {
                // if the default menu is needed, load it from the CDN
                // a cached copy is assigned if available
                scope.routes = appRoutes.fetchRoutes();
            }

            appRoutes.getAll().then(function (routes) {
                scope.routes = routes;
            });

            // default hideFeedback to false
            scope.hideFeedback = scope.hideFeedback ? true : false;

            if (scope.collapsibleNav) {
                hotkeys.add({
                    combo: 'h',
                    description: 'Show/hide the main menu',
                    callback: function () {
                        scope.collapsedNav = !scope.collapsedNav;
                    }
                });
            }
        }
    };
}])
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxPage
* @restrict E
* @scope
* @description
* Responsible for creating the HTML necessary for a page (including breadcrumbs and page title)
* You can pass in a `title` attribute or an `unsafeHtmlTitle` attribute, but not both. Use the former
* if your title is a plain string, use the latter if your title contains embedded HTML tags AND you
* trust the source of this title. Arbitrary javascript can be executed, so ensure you trust your source.
*
* The document title will be set to either `title` or a stripped version of `unsafeHtmlTitle`, depending
* on which you provide.
*
* @param {expression} [title] Title of page
* @param {expression} [unsafeHtmlTitle] Title for the page, with embedded HTML tags
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
            unsafeHtmlTitle: '=',
            subtitle: '=',
            status: '@',
            accountNumber: '@',
            teamId: '@'
        },
        link: function (scope, element) {
            // Remove the title attribute, as it will cause a popup to appear when hovering over page content
            // @see https://github.com/rackerlabs/encore-ui/issues/251
            element.removeAttr('title');
        },
        controller: ["$scope", "rxPageTitle", function ($scope, rxPageTitle) {
            $scope.$watch('title', function () {
                rxPageTitle.setTitle($scope.title);
            });

            $scope.$watch('unsafeHtmlTitle', function () {
                if (!_.isEmpty($scope.unsafeHtmlTitle)) {
                    rxPageTitle.setTitleUnsafeStripHTML($scope.unsafeHtmlTitle);
                }
            });
        }]
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
.directive('rxAppNavItem', ["$compile", "$location", "$route", function ($compile, $location, $route) {
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
        controller: ["$scope", "$location", "rxVisibility", function ($scope, $location, rxVisibility) {
            // provide `route` as a scope property so that links can tie into them
            $scope.route = $route;

            $scope.isVisible = function (visibility) {
                var locals = {
                    location: $location
                };
                if (_.isUndefined(visibility)) {
                    // if undefined, default to true
                    return true;
                }

                if (_.isArray(visibility)) {
                    // Expected format is
                    // ["someMethodName", { param1: "abc", param2: "def" }]
                    // The second element of the array is optional, used to pass extra
                    // info to "someMethodName"
                    var methodName = visibility[0];
                    var configObj = visibility[1]; //optional

                    _.merge(locals, configObj);

                    // The string 'false' will evaluate to the "real" false
                    // in $scope.$eval
                    visibility = rxVisibility.getMethod(methodName) || 'false';
                }

                return $scope.$eval(visibility, locals);
            };

            $scope.toggleNav = function (ev, href) {
                // if no href present, simply toggle active state
                if (_.isEmpty(href)) {
                    ev.preventDefault();
                    $scope.item.active = !$scope.item.active;
                }
                // otherwise, let the default nav do it's thing
            };
        }]
    };
}])
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
 * @name encore.ui.rxApp:rxAccountUsers
 * @restrict E
 * @description
 * Provides the ability to switch between account users. This directive is specific to Rackspace
 */
.directive('rxAccountUsers', ["$location", "$route", "Encore", "$rootScope", "encoreRoutes", function ($location, $route, Encore, $rootScope, encoreRoutes) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxAccountUsers.html',
        link: function (scope) {
            scope.isCloudProduct = false;

            var checkCloud = function () {
                encoreRoutes.isActiveByKey('accountLvlTools').then(function (isAccounts) {
                    if (isAccounts) {
                        loadUsers();
                        encoreRoutes.isActiveByKey('cloud').then(function (isCloud) {
                            scope.isCloudProduct = isCloud;
                        });
                    } else {
                        scope.isCloudProduct = false;
                    }
                });
            };

            // We use $route.current.params instead of $routeParams because
            // the former is always available, while $routeParams only gets populated
            // after the route has successfully resolved. See the Angular docs on $routeParams
            // for more details.
            var loadUsers = function () {
                var success = function (account) {
                    scope.users = account.users;
                    scope.currentUser = $route.current.params.user;
                    if (!scope.currentUser) {
                        // We're not in Cloud, but instead in Billing, or Events, or
                        // one of the other Accounts menu items that doesn't use a username as
                        // part of the route params.
                        // But we need the URLs for the Cloud items to be valid, so grab a
                        // default username for this account, and rebuild the Cloud URLs with
                        // it
                        encoreRoutes.rebuildUrls({ user: account.users[0].username });
                    }
                };
                Encore.getAccountUsers({ id: $route.current.params.accountNumber }, success);
            };

            checkCloud();

            scope.switchUser = function (user) {
                // TODO: Replace with updateParams in Angular 1.3
                //$route.updateParams({ user: user });

                // Update the :user route param
                var params = $route.current.originalPath.split('/');
                var userIndex = _.indexOf(params, ':user');

                if (userIndex !== -1) {
                    var path = $location.url().split('/');
                    path[userIndex] = user;
                    $location.url(path.join('/'));
                }
            };

            $rootScope.$on('$routeChangeSuccess', checkCloud);
        }
    };
}])
/**
* @ngdoc directive
* @name encore.ui.rxApp:rxAtlasSearch
* @restrict E
* @description
* Used to search accounts for Cloud Atlas
*/
.directive('rxAtlasSearch', ["$window", function ($window) {
    return {
        template: '<rx-app-search placeholder="Search by username..." submit="searchAccounts"></rx-app-search>',
        restrict: 'E',
        link: function (scope) {
            scope.searchAccounts = function (searchValue) {
                if (!_.isEmpty(searchValue)) {
                    $window.location = '/cloud/' + searchValue + '/servers/';
                }
            };
        }
    };
}])
.directive('rxAccountSearch', ["$window", function ($window) {
    return {
        templateUrl: 'templates/rxAccountSearch.html',
        restrict: 'E',
        link: function (scope) {
            scope.fetchAccount = function (searchValue) {
                if (!_.isEmpty(searchValue)) {
                    $window.location = '/search?term=' + searchValue;
                }
            };
        }
    };
}])
.directive('rxBillingSearch', ["$location", "$window", "encoreRoutes", function ($location, $window, encoreRoutes) {
    return {
        templateUrl: 'templates/rxBillingSearch.html',
        restrict: 'E',
        link: function (scope) {
            scope.searchType = 'bsl';
            scope.$watch('searchType', function () {
                scope.placeholder = scope.searchType === 'bsl' ? 'Transaction or Auth ID' : 'Account or Contact Info';
            });
            scope.fetchAccounts = function (searchValue) {
                if (!_.isEmpty(searchValue)) {
                    // Assuming we are already in /billing, we should use $location to prevent a page refresh
                    encoreRoutes.isActiveByKey('billing').then(function (isBilling) {
                        if (isBilling) {
                            $location.url('/search?q=' + searchValue + '&type=' + scope.searchType);
                        } else {
                            $window.location = '/billing/search?q=' + searchValue + '&type=' + scope.searchType;
                        }
                    });
                }
            };
        }
    };
}])

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
})

/*
 * @ngdoc service
 * @name encore.ui.rxApp:rxVisibility
 * @description
 * Provides an interface for adding new `visibility` methods for nav menus.
 * Methods added via `addMethod` should have a `function (scope, args)` interface
 * When you do `visibility: [ "someMethodName", { foo: 1, bar: 2} ]` in
 * a nav menu definition, the (optional) object will be passed to your method as the
 * second argument `args`, i.e. function (scope, args) {}
 */
.factory('rxVisibility', function () {

    var methods = {};

    var addMethod = function (methodName, method) {
        methods[methodName] = method;
    };

    var getMethod = function (methodName) {
        return methods[methodName];
    };

    var hasMethod = function (methodName) {
        return _.has(methods, methodName);
    };

    /* This is a convenience wrapper around `addMethod`, for
     * objects that define both `name` and `method` properties
     */
    var addVisibilityObj = function (obj) {
        addMethod(obj.name, obj.method);
    };

    return {
        addMethod: addMethod,
        getMethod: getMethod,
        hasMethod: hasMethod,
        addVisibilityObj: addVisibilityObj

    };

})

/*
 * @ngdoc object
 * name encore.ui.rxApp:rxVisibilityPathParams
 * @description
 * Returns an object with `name` and `method` params that can
 * be passed to `rxVisibility.addMethod()`. We use register this by
 * default, as it's used by the nav menu we keep in routesCdnPath.
 * The method is used to check if {param: 'someParamName'} is present
 * in the current route
 * Use it as `visibility: [ 'rxPathParams', { param: 'userName' } ]`
 */
.factory('rxVisibilityPathParams', ["$routeParams", function ($routeParams) {

    var pathParams = {
        name:'rxPathParams',
        method: function (scope, args) {
            return !_.isUndefined($routeParams[args.param]);
        }
    };

    return pathParams;
}])

/*
 * @ngdoc object
 * name encore.ui.rxApp:rxHideIfUkAccount
 * @description
 * Check if account number in URL is of the UK origin
 * @return false if account number matches UK pattern
 * Use it as `visibility: [ 'rxHideIfUkAccount' ]`
 */
.factory('rxHideIfUkAccount', ["$routeParams", function ($routeParams) {
    var isUkAccount = {
        name: 'rxHideIfUkAccount',
        method: function () {
            return $routeParams.accountNumber < 10000000;
        }
    };

    return isUkAccount;
}])

/*
 * @ngdoc provider
 * name encore.ui.rxApp: rxStatusTags
 * @description
 * This provider is primarily used for applications to specify custom status
 * tags, for use with the `status` attributes of `rx-page` and of breadcrumb
 * objects.
 *
 * It also contains getTag and hasTag run time (vs. config time) methods, but
 * these should rarely, if ever, be needed outside of the framework.
 */
.provider('rxStatusTags', function () {

    var allTags = {
        alpha: {
            class: 'alpha-status',
            text: 'Alpha'
        },
        beta: {
            class: 'beta-status',
            text: 'Beta'
        },
    };
    // Takes an object with `key`, `text` and `class` attributes,
    // and adds it to to the existing set of status values
    this.addStatus = function (config) {
        allTags[config.key] = {
            text: config.text,
            'class': config['class']
        };
    };

    this.$get = function () {
        return {
            // Given a status tag key, return the `text` and `class` specified
            // for the tag
            getTag: function (key) {
                if (_.has(allTags, key)) {
                    return allTags[key];
                }
                return { class: '', text: '' };
            },

            hasTag: function (key) {
                return _.has(allTags, key);
            }
        };
    };
})

/**
* @ngdoc directive
* @name encore.ui.rxApp:rxStatusTag
* @restrict E
* @description
* This is used to draw the Alpha/Beta/etc tags in page titles and in breadcrumbs. It's not
* intended as a public directive.
*/
.directive('rxStatusTag', ["rxStatusTags", function (rxStatusTags) {
    return {
        template: '<span ng-if="status && validKey" class="status-tag {{ class }}">{{ text }}</span>',
        restrict: 'E',
        scope: {
            status: '@'
        },
        link: function (scope) {
            scope.validKey = rxStatusTags.hasTag(scope.status);
            if (scope.validKey) {
                var config = rxStatusTags.getTag(scope.status);
                scope.class = config.class;
                scope.text = config.text;
            }
        }
    };
}]);

angular.module('encore.ui.rxAttributes', [])
.directive('rxAttributes', ["$parse", "$compile", function ($parse, $compile) {
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
}]);

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
    .factory('Identity', ["$resource", function ($resource) {
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
    }]);

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
    .factory('Permission', ["Session", function (Session) {
        var permissionSvc = {};
        
        permissionSvc.getRoles = function () {
            var token = Session.getToken();
            return (token && token.access && token.access.user && token.access.user.roles) ?
                token.access.user.roles : [];
        };

        permissionSvc.hasRole = function (roles) {
            // Replace any spaces surrounded the comma delimeter
            roles = roles.split(',').map(function (r) {
                return r.trim();
            });
            
            // Get all the role names from the session and retrieve their names
            var userRoles = _.pluck(this.getRoles(), 'name');
            // Find the common roles between what's been passed in, and the session
            var commonRoles = _.intersection(userRoles, roles);
            // if the common roles list is not empty, then we have the expected roles
            return !_.isEmpty(commonRoles);
        };

        return permissionSvc;
    }])
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
            controller: ["$scope", "Permission", function ($scope, Permission) {
                $scope.hasRole = function (roles) {
                    return Permission.hasRole(roles);
                };
            }]
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
    * Auth.loginWithJSON(json); // Returns a promise
    * Auth.login({username: '', password: '', successCallback, errorCallback}); // Returns a promise
    * Auth.getToken(); // Returns the stored token
    * Auth.storeToken(token); // Stores token
    * Auth.logout(); // Logs user off
    * Auth.isCurrent(); // Returns true/false if the token has expired.
    * Auth.isAuthenticated(); // Returns true/false if the user token is valid.
    * Auth.getRoles() // Returns an array of roles for a user
    * Auth.hasRole(role) // Returns true/false if user has specified role
    * </pre>
    */
    .factory('Auth', ["Identity", "Session", "Permission", function (Identity, Session, Permission) {
        var svc = {};

        _.assign(svc, Identity);
        _.assign(svc, Session);
        _.assign(svc, Permission);

        return svc;
    }]);

angular.module('encore.ui.rxBreadcrumbs', ['ngSanitize'])
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

    breadcrumbsService.getAll = function (titleStatus) {
        // return a copy of the array (so it can't be modified)
        var copy = breadcrumbs.slice(0);

        // If a titleStatus tag was passed in for the page, check each of the
        // breadcrumbs to see if they're asking for that tag
        if (_.isString(titleStatus) && titleStatus) {
            _.each(copy, function (breadcrumb) {
                // only add the page status tag to the breadcrumb if it
                // doesn't already have its own status tag defined
                if (breadcrumb.usePageStatusTag && !breadcrumb.status) {
                    breadcrumb.status = titleStatus;
                }
            });
        }
        return copy;
    };

    breadcrumbsService.setHome = function (path, name) {
        breadcrumbs[0] = {
            path: path,
            name: name || breadcrumbs[0].name
        };
    };

    return breadcrumbsService;
})

/**
* @ngdoc directive
* @name encore.ui.rxBreadcrumbs:rxBreadcrumbs
* @restrict E
* @scope
* @description
* Responsible for drawing the breadcrumbs for a page
*
* @param {string} [status] The tag to apply to any breadcrumbs with usePageStatusTag:true
*
* @example
* <pre>
*     <rx-app site-title="Custom Title"></rx-app>
* </pre>
*/
.directive('rxBreadcrumbs', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxBreadcrumbs.html',
        controller: ["$scope", "rxBreadcrumbsSvc", function ($scope, rxBreadcrumbsSvc) {
            $scope.breadcrumbs = rxBreadcrumbsSvc;
        }],
        scope: {
            status: '@'
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
    * and renable when operation is complete. If you set `classes` attributes `<rx-button>`,
    * those will get passed to the `<button>` instance as `class`
    * @scope
    * @param {String} loadingMsg - Text to be displayed when an operation is in progress.
    * @param {String} defaultMsg - Text to be displayed by default an no operation is in progress.
    * @param {Boolean} toggle - When true, the button will display the loading text.
    * @param {Boolean} disable - When true, the button will be disabled.
    */
    .directive('rxButton', function () {
        return {
            templateUrl: 'templates/rxButton.html',
            restrict: 'E',
            scope: {
                toggleMsg: '@',
                defaultMsg: '@',
                toggle: '=',
                disable: '=?',
                classes: '@?'
            },
        };
    });

angular.module('encore.ui.rxCapitalize', [])
.filter('rxCapitalize', function () {
    return function (input) {
        if (!_.isString(input)) {
            return '';
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
});

angular.module('encore.ui.rxCharacterCount', [])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxCharacterCount:rxCharacterCount
 * @restrict A
 * @description
 * Monitors the number of characters in a text input and compares it to the desired length.
 *
 * @param {number} [low-boundary=10] How far from the maximum to enter a warning state
 * @param {number} [max-characters=254] The maximum number of characters allowed
 * @param {boolean} [highlight=false] Whether or not characters over the limit are highlighted
 *
 * @example
 * <pre>
 *     <textarea ng-model="model" rx-character-count></textarea>
 * </pre>
 */
.directive('rxCharacterCount', ["$compile", function ($compile) {
    var counterStart = '<div class="character-countdown" ';
    var counterEnd =   'ng-class="{ \'near-limit\': nearLimit, \'over-limit\': overLimit }"' +
                  '>{{ remaining }}</div>';

    var backgroundStart = '<div class="input-highlighting" ';
    var backgroundEnd = '><span>{{ underLimitText }}</span>' +
                     '<span class="over-limit-text">{{ overLimitText }}</span></div>';

    var extraDirectives = function (attrs) {
        var extra = '';
        if (_.has(attrs, 'ngShow')) {
            extra += 'ng-show="' + attrs.ngShow + '" ';
        }
        if (_.has(attrs, 'ngHide')) {
            extra += 'ng-hide="' + attrs.ngHide + '" ';
        }
        return extra;
    };

    var buildCounter = function (attrs) {
        return counterStart + extraDirectives(attrs) + counterEnd;
    };

    var buildBackground = function (attrs) {
        return backgroundStart + extraDirectives(attrs) + backgroundEnd;
    };

    return {
        restrict: 'A',
        require: 'ngModel',
        // scope:true ensures that our remaining/nearLimit/overLimit scope variables
        // only live within this directive
        scope: true,
        link: function (scope, element, attrs, ngModelCtrl) {
            // Wrap the textarea so that an element containing a copy of the text
            // can be layered directly behind it.
            var wrapper = angular.element('<div class="counted-input-wrapper" />');
            element.after(wrapper);

            $compile(buildCounter(attrs))(scope, function (clone) {
                wrapper.append(element);
                wrapper.append(clone);
            });

            var maxCharacters = _.parseInt(attrs.maxCharacters) || 254;
            var lowBoundary = _.parseInt(attrs.lowBoundary) || 10;
            scope.remaining = maxCharacters;
            scope.nearLimit = false;
            scope.overLimit = false;

            // This gets called whenever the ng-model for this element
            // changes, i.e. when someone enters new text into the textarea
            scope.$watch(
                function () { return ngModelCtrl.$modelValue; },
                function (newValue) {
                    if (typeof newValue !== 'string') {
                        return;
                    }
                    scope.remaining = maxCharacters - newValue.length;
                    scope.nearLimit = scope.remaining >= 0 && scope.remaining < lowBoundary;
                    scope.overLimit = scope.remaining < 0;
                });

            function countSpaces (str, options) {
                options || (options = {});
                return str.search(options.fromEnd ? /\s*$/ : /\S/);
            }

            // Since the input value is trimmed before writing to the model,
            // an input event is attached to the element to handle the highlighting,
            // which needs the pre- and post-trimmed string.
            function writeLimitText () {
                var val = element.val();
                var cutoff = maxCharacters;
                var end = val.length;

                if (!attrs.ngTrim || attrs.ngTrim !== 'false') {
                    cutoff += countSpaces(val);
                    end = countSpaces(val, { fromEnd: true });
                }

                scope.underLimitText = val.slice(0, cutoff);
                scope.overLimitText = val.slice(cutoff, end);
                scope.$apply();
            }

            if (attrs.highlight === 'true') {
                $compile(buildBackground(attrs))(scope, function (clone) {
                    wrapper.prepend(clone);
                });

                element.on('input', writeLimitText);
            }

            scope.$on('$destroy', function () {
                element.off('input', writeLimitText);
                wrapper.remove();
            });
        }
    };
}]);

angular.module('encore.ui.rxCheckbox', [])
.directive('rxCheckbox', function () {
    return {
        restrict: 'A',
        scope: {
            ngDisabled: '=?'
        },
        compile: function (tElement, tAttrs) {
            // automatically set input type
            tElement.attr('type', 'checkbox');
            tAttrs.type = 'checkbox';

            return function (scope, element, attrs) {
                var disabledClass = 'rx-disabled';
                var wrapper = angular.element('<div class="rxCheckbox"></div>');
                var fakeCheckbox = '<div class="fake-checkbox">' +
                        '<div class="tick fa fa-check"></div>' +
                    '</div>';

                element.wrap(wrapper);
                element.after(fakeCheckbox);

                // apply/remove disabled attribute so we can
                // apply a CSS selector to style sibling elements
                if (attrs.disabled) {
                    wrapper.addClass(disabledClass);
                }
                if (_.has(attrs, 'ngDisabled')) {
                    scope.$watch('ngDisabled', function (newVal) {
                        if (newVal === true) {
                            wrapper.addClass(disabledClass);
                        } else {
                            wrapper.removeClass(disabledClass);
                        }
                    });
                }

                // remove stylistic markup when element is destroyed
                element.on('$destroy', function () {
                    wrapper[0].remove();
                });
            };
        }//compile
    };
});//rxCheckbox

angular.module('encore.ui.rxCollapse', [])
/**
 * @ngdoc directive
 * @name encore.ui.rxCollapse:rxCollapse
 * @restrict E
 * @scope
 * @description
 * Hide and show an element with a transition.
 *
 * @param {string} [title] The title to display next to the toggle button.
 * @param {string} [expanded] Initially expanded or collapsed.  Default is expanded.
 *
 * @example
 * <pre>
 *     <rx-collapse title="Filter results" expanded="true"></rx-collapse>
 * </pre>
 */
.directive('rxCollapse', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxCollapse.html',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function (scope, element, attrs) {
            scope.isExpanded = (attrs.expanded === 'false') ? false : true;
        }
    };
});

angular.module('encore.ui.rxCompile', [])
/*
 * @ngdoc directive
 * @name encore.ui.rxCompile:rxCompile
 * @see http://docs.angularjs.org/api/ng/service/$compile#attributes
 */
.directive('rxCompile', ["$compile", function ($compile) {
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
}]);

angular.module('encore.ui.rxDiskSize', [])
.filter('rxDiskSize', function () {
    return function (size, unit) {
        var units = ['GB', 'TB', 'PB'];
        var index = _.indexOf(units, unit);

        if (index === -1) {
            if (size > 0) {
                index = Math.floor(Math.log(size) / Math.log(1000));
            } else {
                index = 0;
                size = 0;
            }
        }

        return size / Math.pow(1000, Math.floor(index)).toFixed(1) + ' ' + units[index];
    };
});

angular.module('encore.ui.rxFavicon', ['encore.ui.rxEnvironment'])
/**
* @ngdoc directive
* @name encore.ui.rxFavicon:rxFavicon
* @restrict A
*
* @description
* Updates href of element and replaces it with path to a different image based on environment
* @scope
* @param {Object} rxFavicon - Takes two optional properties (staging and local), with the value of each being
*                             the path to the favicon.
*/
.directive('rxFavicon', ["Environment", "$parse", "$log", function (Environment, $parse, $log) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, el, attrs) {
            // parse out the object inside of the rx-favicon attribute
            var favicons = $parse(attrs.rxFavicon)(scope);

            // if favicons isn't properly defined, report a warning and exit
            if (!_.isObject(favicons)) {
                $log.warn('rxFavicon: An object must be passed in to this attribute');
                // exit out of the function
                return false;
            }

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
}]);

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
.service('rxScreenshotSvc', ["$log", "$q", function ($log, $q) {
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
}])
.factory('rxFeedbackSvc', ["$resource", "feedbackApi", "$location", "$window", function ($resource, feedbackApi, $location, $window) {
    var container = {
        api: undefined,
        email: 'encoreui@lists.rackspace.com'
    };

    container.setEndpoint = function (url) {
        container.api = $resource(url);
    };

    // set a default endpoint
    container.setEndpoint(feedbackApi);

    container.fallback = function (feedback) {
        var subject = 'Encore Feedback: ' + feedback.type.label;
        var body = [
            'Current Page: ' + $location.absUrl(),
            'Browser User Agent: ' + navigator.userAgent,
            'Comments: ' + feedback.description
        ];

        body = body.join('\n\n');

        // if the feedback service fails, this fallback function can be run as a last ditch effort
        var uri = encodeURI('mailto:' + container.email + '?subject=' + subject + '&body=' + body);
        var windowOpen = $window.open(uri, '_blank');

        if (!windowOpen) {
            $window.location.href = uri;
        }
    };

    return container;
}])
.directive('rxFeedback', ["feedbackTypes", "$location", "rxFeedbackSvc", "rxScreenshotSvc", "rxNotify", "Session", function (feedbackTypes, $location, rxFeedbackSvc, rxScreenshotSvc, rxNotify, Session) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFeedback.html',
        scope: {
            sendFeedback: '=?onSubmit'
        },
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
                    screenshot: screenshot,
                    sso: feedback.sso
                }, showSuccessMessage, function (httpResponse) {
                    showFailureMessage(httpResponse);

                    rxFeedbackSvc.fallback(feedback);
                });
            };

            if (!_.isFunction(scope.sendFeedback)) {
                scope.sendFeedback = function (feedback) {
                    feedback.sso = Session.getUserId();

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
        }
    };
}]);

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
    .service('SessionStorage', ["$window", function ($window) {
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
    }]);

angular.module('encore.ui.rxMisc', ['debounce', 'encore.ui.rxSessionStorage'])
/**
 * @ngdoc service
 * @name encore.ui.rxMisc:rxDOMHelper
 * @description
 * A small set of functions to provide some functionality
 * that isn't present in Angular's jQuery-lite, and other
 * DOM-related functions that are useful
 *
 * All methods take jquery-lite wrapped elements as arguments
 */
.factory('rxDOMHelper', ["$document", "$window", function ($document, $window) {

    var scrollTop = function () {
        // Safari and Chrome both use body.scrollTop, but Firefox needs
        // documentElement.scrollTop
        var doc = $document[0];
        var scrolltop = $window.pageYOffset || doc.body.scrollTop || doc.documentElement.scrollTop || 0;
        return scrolltop;
    };

    var offset = function (elm) {
        //http://cvmlrobotics.blogspot.co.at/2013/03/angularjs-get-element-offset-position.html
        var rawDom = elm[0];
        var _x = 0;
        var _y = 0;
        var doc = $document[0];
        var body = doc.documentElement || doc.body;
        var scrollX = $window.pageXOffset || body.scrollLeft;
        var scrollY = scrollTop();
        var rect = rawDom.getBoundingClientRect();
        _x = rect.left + scrollX;
        _y = rect.top + scrollY;
        return { left: _x, top:_y };
    };

    var style = function (elem) {
        if (elem instanceof angular.element) {
            elem = elem[0];
        }
        return $window.getComputedStyle(elem);
    };

    var width = function (elem) {
        return style(elem).width;
    };

    var height = function (elem) {
        return style(elem).height;
    };

    var shouldFloat = function (elem, maxHeight) {
        var elemOffset = offset(elem),
            scrolltop = scrollTop();

        return ((scrolltop > elemOffset.top) && (scrolltop < elemOffset.top + maxHeight));
    };

    // An implementation of wrapAll, based on
    // http://stackoverflow.com/a/13169465
    // Takes a raw DOM `newParent`, and moves all of `elms` (either
    // a single element or an array of elements) into it. It then places
    // `newParent` in the location that elms[0] was originally in
    var wrapAll = function (newParent, elms) {

        // Figure out if it's one element or an array
        var isGroupParent = ['SELECT', 'FORM'].indexOf(elms.tagName) !== -1;
        var el = (elms.length && !isGroupParent) ? elms[0] : elms;

        // cache the current parent node and sibling
        // of the first element
        var parentNode = el.parentNode;
        var sibling = el.nextSibling;

        // wrap the first element. This automatically
        // removes it from its parent
        newParent.appendChild(el);

        // If there are other elements, wrap them. Each time
        // it will remove the element from its current parent,
        // and also from the `elms` array
        if (!isGroupParent) {
            while (elms.length) {
                newParent.appendChild(elms[0]);
            }
        }

        // If there was a sibling to the first element,
        // insert newParent right before it. Otherwise
        // just add it to parentNode
        if (sibling) {
            parentNode.insertBefore(newParent, sibling);
        } else {
            parentNode.appendChild(newParent);
        }
    };

    // bind `f` to the scroll event
    var onscroll = function (f) {
        angular.element($window).bind('scroll', f);
    };

    var find = function (elem, selector) {
        return angular.element(elem[0].querySelector(selector));
    };

    return {
        offset: offset,
        scrollTop: scrollTop,
        width: width,
        height: height,
        shouldFloat: shouldFloat,
        onscroll: onscroll,
        find: find,
        wrapAll: wrapAll
    };
}])

/*
 * @ngdoc filter
 * @name encore.ui.rxMisc:titleize
 * @description
 * Convert a string to a title case, stripping out symbols and capitalizing words.
 *
 * Credit where it's due: https://github.com/epeli/underscore.string/blob/master/titleize.js
 *
 * @param {string} str The string to convert
 * @returns {string} The titleized version of the string
 */
.filter('titleize', function () {
    return function (str) {
        return str.toLowerCase().replace(/_/g, ' ').replace(/(?:^|\s)\S/g, function (c) {
            return c.toUpperCase();
        });
    };
})

/**
 * @ngdoc service
 * @name encore.ui.rxMisc:rxAutoSave
 * @description
 * A factory that controllers can use to help automatically save and load
 * (from LocalStorage) forms on any given page.
 */
.factory('rxAutoSave', ["$location", "$q", "debounce", "LocalStorage", function ($location, $q, debounce, LocalStorage) {

    /* 
     * We'll version the schema for the stored data, so if we need to change
     * the schema in the future, we can do automatic migrations. Never 
     * delete any of these documented schemas. If you have to add a new version,
     * then add it on top, but keep the documentation for the old one around.
     * VERSION 1
     *      'rxAutoSave::' + URL => {
     *          pageConfig: {
     *              version: 1
     *          },
     *          forms: {
     *              "form1": {
     *                   config: {
     *                      expires: 0,
     *                  },
     *                  data: {
     *                      // Serialized form data
     *                  }
     *              }
     *              "form2": {
     *                  config: {
     *                      expires: 33421234322,
     *                  }
     *                  data: {
     *                      // Serialized form data
     *                  }
     *              }
     *          }
     *      }
    */
    var version = 1;

    // This will be used by the rxAutoSave instance to interact with
    // LocalStorage. 
    //
    // @param watchVar - the string name of the
    //                   object that's being watched, representing the model for the form.
    //                   StorageAPI is not publically exposed, it can only be used and accessed
    //                   by the rxAutoSave instance
    // @param [storageBackend] - Optional, defaults to LocalStorage. If you pass in a storage object,
    //                           it must support both getObject(key) and setObject(key, val), matching
    //                           the operations of LocalStorage and SessionStorage
    var StorageAPI = function (watchVar, storageBackend) {
        this.key = 'rxAutoSave::' + $location.url();
        this.watchVar = watchVar;
        this.storage = storageBackend ? storageBackend : LocalStorage;
    };

    // Get all the saved data for this page. If none
    // exists, then create an empty object that matches
    // the current schema.
    StorageAPI.prototype.getAll = function () {
        return this.storage.getObject(this.key) || {
            pageConfig: {
                version: version,
            },
            forms: {
            }
        };
    };

    // Given a `watchVar`, return the corresponding
    // `form` object from LocalStorage. This form object should include
    // both `.data` and `.config` properties.
    // If no form currently exists for `watchVar`, then an empty
    // object will be created that matches the current schema
    StorageAPI.prototype.getForm = function () {
        var all = this.getAll();
        if (!_.has(all.forms, this.watchVar)) {
            all.forms[this.watchVar] = {
                data: {},
                config: {
                    expires: 0
                }
            };
        }
        return all.forms[this.watchVar];
    };

    // Given a full form object, save it into LocalStorage,
    // indexed into the forms[watchVar] location for this page
    StorageAPI.prototype.setForm = function (form) {
        var all = this.getAll();
        all.forms[this.watchVar] = form;
        this.storage.setObject(this.key, all);
    };

    // Get the current `config` object for a given watchVar
    StorageAPI.prototype.getConfig = function () {
        return this.getForm().config;
    };

    // Return the time that a given form is supposed to
    // have its saved data expire
    StorageAPI.prototype.getExpires = function () {
        return this.getConfig().expires;
    };

    // For a given watchVar, set a new expiry time, and save
    // into LocalStorage
    StorageAPI.prototype.setExpiryTime = function (expiryTime) {
        var form = this.getForm();
        form.config.expires = expiryTime;
        this.setForm(form);
    };

    // Force an expiration for a given watchVar. This will completely
    // clear the saved data for this watchVar, and set the `expires`
    // back to 0
    StorageAPI.prototype.expire = function () {
        var form = this.getForm();
        form.data = {};
        form.config.expires = 0;
        this.setForm(form);
    };

    // Return the current saved data for a given watchVar
    StorageAPI.prototype.getDataObject = function () {
        return this.getForm().data || {};
    };

    // For a given watchVar, store `val` as its saved
    // data, into LocalStorage
    StorageAPI.prototype.setDataObject = function (val) {
        var form = this.getForm();
        form.data = val;
        this.setForm(form);
    };

    // This is what we return from rxAutoSave, and calling this
    // function will return an instance
    return function (scope, watchVar, opts) {

        opts = opts || {};
        _.defaults(opts, {
            load: true,
            save: true,
            clearOnSuccess: undefined,
            exclude: [],
            ttl: 172800,
            storageBackend: LocalStorage
        });

        opts.ttl = opts.ttl * 1000; // convert back to milliseconds
        
        var api = new StorageAPI(watchVar, opts.storageBackend);

        var updateExpiryTime = function () {
            if (opts.ttl > 0) {
                api.setExpiryTime(_.now() + opts.ttl);
            }
        };

        // Responsible for loading the data from LocalStorage into the form
        var load = function () {
            var expires = api.getExpires();
            if (expires > 0 && expires <= _.now()) {
                // This data has expired. Make sure we clear it out
                // of LocalStorage
                api.expire();
                return;
            }

            updateExpiryTime();

            // Write all the storedObject values into scope[watchVar], except
            // for any specified in opts.exclude
            var storedObject = api.getDataObject();
            _.assign(scope[watchVar], _.omit(storedObject, opts.exclude));
        };

        // This is the "instance" that is returned when someone
        // calls rxAutoSave($scope, 'someWatchVar')
        var autoSaveInstance = {
            clear: function () {
                api.expire();
            },

            clearOnSuccess: function (promise) {
                promise.then(this.clear);
            },

            save: function () {
                update(scope[watchVar]);
            },

            getStoredValue: function () {
                return api.getDataObject();
            }
        };

        _.bindAll(autoSaveInstance);

        var update = function (newVal) {
            // Get the current data stored for this watchVar
            var data = api.getDataObject();

            // Overwrite all properties in allWatchVars[watchVar] with properties from
            // newVal, except for the properties in opts.exclude
            _.assign(data, _.omit(newVal, opts.exclude));

            // Store the newly changed data in LocalStorage
            api.setDataObject(data);

            // Update the expiry time whenever we modify data
            updateExpiryTime();
        };
        
        // We don't want to write to LocalStorage every time the model changes,
        // because that would turn typing into a textarea into an expensive operation.
        // We'll instead debounce the the writes for 1 second
        var debounced = debounce(update, 1000);

        $q.when(opts.save).then(function (shouldSave) {
            if (shouldSave) {
                // The `true` third argument tells $watch to do a deep comparison
                scope.$watch(watchVar, debounced, true);
            }
        });

        $q.when(opts.load).then(function (shouldLoad) {
            if (shouldLoad) {
                load();
            }
        });

        if (!_.isUndefined(opts.clearOnSuccess)) {
            autoSaveInstance.clearOnSuccess(opts.clearOnSuccess);
        }

        return autoSaveInstance;
    };
}]);

/**
 * @ngdoc directive
 * @name encore.ui.rxFloatingHeader:rxFloatingHeader
 * @description
 * Turns a tableheader into a floating persistent header
 */
angular.module('encore.ui.rxFloatingHeader', ['encore.ui.rxMisc'])
.directive('rxFloatingHeader', ["rxDOMHelper", function (rxDOMHelper) {
    return {
        restrict: 'A',
        controller: ["$scope", function ($scope) {
            this.update = function () {
                // It's possible for a child directive to try to call this
                // before the rxFloatingHeader link function has been run,
                // meaning $scope.update won't have been configured yet
                if (_.isFunction($scope.update)) {
                    $scope.update();
                }
            };
        }],
        link: function (scope, table) {
            var state, seenFirstScroll, trs, ths, clones, inputs, maxHeight, header, singleThs, maxThWidth;

            var setup = function () {

                if (clones && clones.length) {
                    _.each(clones, function (clone) {
                        // Possible memory leak here? I tried clone.scope().$destroy(),
                        // but it causes exceptions in Angular
                        clone.remove();
                    });
                }
                state = 'fixed',
                seenFirstScroll = false,

                // The original <tr> elements
                trs = [],

                // The original <th> elements
                ths = [],

                // All <th> elements that are the *only* <th> in their row
                singleThs = [],

                // The maximum width we could find for a <th>
                maxThWidth = 0,

                // Clones of the <tr> elements
                clones = [],

                // any <input> elements in the <thead>
                inputs = [],
                maxHeight,
                header = angular.element(table.find('thead'));
                
                // Are we currently floating?
                var floating = false;
                // Grab all the original `tr` elements from the `thead`,
                _.each(header.find('tr'), function (tr) {
                    tr = angular.element(tr);

                    // If `scope.setup()` has been called, it means we'd previously
                    // worked with these rows before. We want them in as clean a state as possible
                    if (!floating && tr.hasClass('rx-floating-header')) {
                        floating = true;
                    }

                    // We are going to clone all the <tr> elements in the <thead>, and insert them
                    // into the DOM whenever the original <tr> elements need to float. This keeps the
                    // height of the table correct, and prevents it from jumping up when we put
                    // the <tr> elements into a floating state.
                    // It also makes sure the column widths stay correct, as the widths of the columns
                    // are determined by the current fixed header, not the floating header.
                    var clone = tr.clone();
                    clones.push(clone);
                    if (floating) {
                        clone.removeClass('rx-floating-header');
                    }

                    if (floating) {
                        // We're currently floating, so add the class back, and
                        // push the clone back on
                        header.append(clone);
                    }
                    trs.push(tr);

                    var thsInTr = _.map(tr.find('th'), angular.element);
                    ths = ths.concat(thsInTr);

                    // This <tr> only had one <th> in it. Grab that <th> and its clone
                    // Also grab the width of the <th>, and compare it to our max width.
                    // We need to do this because if a <th> was hidden, and then made to
                    // appear while floating, its width will be too short, and will need
                    // to be updated
                    if (thsInTr.length === 1) {
                        var th = thsInTr[0];
                        var width = rxDOMHelper.width(th);
                        if (width !== 'auto') {
                            var numeric = _.parseInt(width);
                            if (numeric > maxThWidth) {
                                maxThWidth = numeric;
                            }
                        }

                        singleThs.push([th, angular.element(clone.find('th'))]);
                    }
                });

                // Explicitly set the width on every <th> that is the *only*
                // <th> in its <tr>
                maxThWidth = maxThWidth.toString() + 'px';
                _.each(singleThs, function (thPair) {
                    thPair[0].css({ width: maxThWidth });
                    thPair[1].css({ width: maxThWidth });
                });

                // Apply .filter-header to any <input> elements
                _.each(ths, function (th) {
                    var input = th.find('input');
                    if (input.length) {
                        var type = input.attr('type');
                        if (!type || type === 'text') {
                            th.addClass('filter-header');
                            input.addClass('filter-box');
                            inputs.push(input);
                        }
                    }
                });
            };

            setup();

            scope.updateHeaders = function () {
                if (_.isUndefined(maxHeight)) {
                    maxHeight = table[0].offsetHeight;
                }

                maxHeight = _.max([maxHeight, table[0].offsetHeight]);

                if (rxDOMHelper.shouldFloat(table, maxHeight)) {
                    if (state === 'fixed') {
                        state = 'float';
                        var thWidths = [],
                            trHeights = [];

                        // Get the current height of each `tr` that we want to float
                        _.each(trs, function (tr) {
                            trHeights.push(parseInt(rxDOMHelper.height(tr)));
                        });

                        // Grab the current widths of each `th` that we want to float
                        thWidths = _.map(ths, rxDOMHelper.width);

                        // Put the cloned `tr` elements back into the DOM
                        _.each(clones, function (clone) {
                            header.append(clone);
                        });

                        // Apply the rx-floating-header class to each `tr` and
                        // set a correct `top` for each, to make sure they stack
                        // properly
                        // We previously did tr.css({ 'width': rxDOMHelper.width(tr) })
                        // but it *seems* that setting the widths of the `th` is enough
                        var topOffset = 0;
                        _.each(trs, function (tr, index) {
                            tr.addClass('rx-floating-header');
                            tr.css({ 'top': topOffset.toString() + 'px' });
                            topOffset += trHeights[index];
                        });

                        // Explicitly set the widths of each `th` element that we floated
                        _.each(_.zip(ths, thWidths), function (pair) {
                            var th = pair[0];
                            var width = pair[1];
                            th.css({ 'width': width });
                        });
                    }

                } else {
                    if (state === 'float' || !seenFirstScroll) {
                        state = 'fixed';
                        seenFirstScroll = true;

                        // Make sure that an input filter doesn't have focus when
                        // we re-dock the header, otherwise the browser will scroll
                        // the screen back up ot the input
                        _.each(inputs, function (input) {
                            if (rxDOMHelper.scrollTop() > rxDOMHelper.offset(input).top) {
                                input[0].blur();
                            }
                        });

                        _.each(trs, function (tr) {
                            tr.removeClass('rx-floating-header');
                        });

                        // Detach each cloaned `tr` from the DOM,
                        // but don't destroy it
                        _.each(clones, function (clone) {
                            clone.remove();
                        });
                    }
                }

            };

            rxDOMHelper.onscroll(function () {
                scope.updateHeaders();
            });

            scope.update = function () {
                setup();
            };
        },
    };
}]);

angular.module('encore.ui.rxForm', ['ngSanitize', 'encore.ui.rxMisc'])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxForm:rxFormItem
 * @restrict E
 * @description
 * This directive is used to wrap input fields and select boxes in the proper HTML.
 * It will attach the `<label>` to a transcluded input using the `id` attribute of the input.
 * If no `id` attribute exists, it will create one.
 *
 * @scope
 * @param {String} label - Text to use for <label>
 * @param {String} prefix - Text to include to the left of content
 * @param {String} suffix - Text to include to the right of content
 * @param {String} description - Text to place below input
 */
.directive('rxFormItem', ["$document", "rxDOMHelper", function ($document, rxDOMHelper) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFormItem.html',
        transclude: true,
        scope: {
            label: '@',
            suffix: '@',
            prefix: '@',
            description: '@'
        },
        link: function (scope, el) {
            var inputSelectors = [
                '.field-input-wrapper input',
                '.field-input-wrapper select',
                '.field-input-wrapper textarea'
            ];
            inputSelectors = inputSelectors.join(', ');

            // For accessibility reasons, we need to link the <label> to the <input>
            // To do this, we use the 'for' and 'id' attributes on the <label> and <input> tags, respectively
            // Since the field input is dynamically inserted, we don't know its ID (or if it has one)
            // This code takes care of linking the two

            var setFieldId = function () {
                // default to scope's id
                var fieldId = 'field-' + scope.$id;

                var inputField = el[0].querySelector(inputSelectors);

                scope.isTextArea = _.has(inputField, 'type') && inputField.type === 'textarea';

                // make sure an input field is found
                if (!_.isObject(inputField)) {
                    return;
                }

                // Manually insert the `suffix` span after the input/select/textarea
                // It needs to be in between the input/select/textarea and any other
                // transcluded content, so we have to do it here instead of in the template
                if (scope.suffix) {
                    var suffixSpan = $document[0].createElement('span');
                    suffixSpan.innerHTML = scope.suffix;
                    suffixSpan.className = 'field-suffix';
                    inputField.parentNode.insertBefore(suffixSpan, inputField.nextSibling);
                }

                // Put a <span class="field-input"> around the input/select/textarea
                var fieldInputSpan = $document[0].createElement('span');
                fieldInputSpan.className = 'field-input';
                rxDOMHelper.wrapAll(fieldInputSpan, inputField);

                var inputId = inputField.getAttribute('id');

                if (_.isString(inputId)) {
                    fieldId = inputId;
                } else {
                    inputField.setAttribute('id', fieldId);
                }

                el[0].querySelector('.field-label').setAttribute('for', fieldId);
            };

            setFieldId();
        }
    };
}])
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
 * @param {Object} required - Value passed to input's 'ng-required' attribute
 * @param {Function} disableFn - Callback function to determine if option should be disabled.
                                 Takes tableId, fieldId, and rowId as parameters.
                                 Example:
```
 disable-fn="disableOption(tableId, fieldId, rowId)"
```
 */
.directive('rxFormOptionTable', ["$interpolate", function ($interpolate) {
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
            required: '=',
            emptyMessage: '@',
            disableFn: '&?'
        },
        controller: ["$scope", "$element", function ($scope, $element) {
            var determineMatch = function (val1, val2) {
                if (_.isUndefined(val1) || _.isUndefined(val2)) {
                    return false;
                }

                return (val1 == val2);
            };

            $scope.checkDisabled = function (row) {
                return $scope.disableFn({ tableId: $element.attr('id'), fieldId: $scope.fieldId, rowId: row.id });
            };

            // Determines whether the row is the initial choice
            $scope.isCurrent = function (val) {
                return determineMatch(val, $scope.selected);
            };

            // Determines whether the row is selected
            $scope.isSelected = function (val, idx) {
                // row can only be 'selected' if it's not the 'current' value
                if (!$scope.isCurrent(val)) {
                    if ($scope.type == 'radio') {
                        return (val == $scope.model);
                    } else if ($scope.type == 'checkbox') {
                        if (!_.isUndefined(val)) {
                            // if 'val' is defined, run it through our custom matcher
                            return determineMatch(val, $scope.model[idx]);
                        } else {
                            // otherwise, just return the value of the model and angular can decide
                            return $scope.modelProxy[idx];
                        }
                    }
                }

                return false;
            };

            /*
             * checkRequired: Returns true/false to the ng-required attribute for checkboxes.
             * Returns a true value if required="true" and there is at least one checkbox
             * checked (based on $scope.values).
             */
            $scope.checkRequired = function () {
                if (_.isBoolean($scope.required)) {
                    return $scope.required && boxesChecked === 0;
                } else {
                    return false;
                }
            };

            // Because of a bug in Angular 1.2.x, we can't use `required` and
            // ngTrueValue/ngFalseValue simultaneously. We don't want to affect
            // people that were already using rxFormOptionTable, so instead we'll
            // build a `modelProxy` which is simply a mapping of $scope.model to
            // an array of `true` / `false` values. We then have to take care
            // of updating the actual $scope.model ourselves in `updateCheckboxes`
            // with the correct ngTrueValue/ngFalseValue values
            $scope.modelProxy = _.map($scope.model, function (val, index) {
                var data = $scope.data[index];
                var trueValue = _.has(data, 'value') ? data.value : true;
                return val === trueValue;
            });

            // If we are using checkboxes and the required attribute is set, then we
            // need an array to store the indexes of checked boxes. ng-required is
            // specifically set if required is true and the array is empty.
            var boxesChecked = 0;
            _.forEach($scope.modelProxy, function (el) {
                if (el) {
                    boxesChecked += 1;
                }
            });

            /*
             * Updates $scope.values when a checkbox is clicked.
             * @param {String|boolean} val - The checkbox value (Boolean, ng-true-value or ng-false-value per row)
             * @param {Integer} index - Array index of the checkbox element marked true
             */
            $scope.updateCheckboxes = function (val, index) {
                var data = $scope.data[index];
                var trueValue = _.has(data, 'value') ? data.value : true;
                var falseValue = _.has(data, 'falseValue') ? data.falseValue : false;

                $scope.model[index] = val ? trueValue : falseValue;

                if (val) {
                    boxesChecked += 1;
                } else {
                    boxesChecked -= 1;
                }
            };

            /*
             * Get the value out of a key from the row, or parse an expression
             * @param {Object} column - Column whose `key` is an Angular Expression or HTML to be compiled
             * @param {Object} row - Data object with data to be used against the expression
             */
            $scope.getContent = function (column, row) {
                var expr = column.key;
                // If no expression exit out;
                if (!expr) {
                    return '';
                }

                // if the expr is a property of row, then we expect the value of the key.
                if (row.hasOwnProperty(expr)) {
                    return String(row[expr]);
                }

                // Compile expression & Run output template
                var outputHTML = $interpolate(expr)(row);
                return outputHTML;
            };
        }]

    };
}])
/**
 * @ngdoc service
 * @name encore.ui.rxModalForm:rxFormUtils
 * @description
 * Set of utility functions used by rxForm to access form data
 *
 * @example
 * <pre>
 * // Returns the selected option for the rxFormOptionTable with id tableId
 * // [{ tableId: 'tableId', fieldId: 'fieldId', rowId: 'rowId' }]
 * getSelectedOptionForTable(tableId)

 * // Returns the selected option for the rxFormOptionTable in the tabset with id tabsetId
 * // [{ tableId: 'tableId', fieldId: 'fieldId', rowId: 'rowId' }]
 * getSelectedOptionForTabSet(tabsetId)
 * </pre>
 */
.factory('rxFormUtils', function () {

    var rxFormUtils = {};

    // Returns the selected option for the rxFormOptionTable with id: tableId
    // and fieldId: fieldId (optional)
    // @param {String} tableId - The id of the table
    // @returns {object} The rowId of the selected option
    rxFormUtils.getSelectedOptionForTable = function (tableId) {
        var selectedRow;
        var row = document.querySelector('rx-form-option-table#' + tableId + ' .selected input');
        if (!_.isEmpty(row)) {
            selectedRow = { rowId: row.value };
        }
        return selectedRow;
    };

    // Returns the selected option within the tabset
    // @param {String} tabsetId - The id of the tabset
    // @returns {object} The tableId, fieldId, and rowId of the selected option
    rxFormUtils.getSelectedOptionForTabSet = function (tabsetId) {
        var selectedOption;
        var xpathToTable = '//div[@id="' + tabsetId +
            '"]//tr[contains(@class, "selected")]//ancestor::rx-form-option-table';
        var result = document.evaluate(xpathToTable, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (result.singleNodeValue) {
            var table = result.singleNodeValue;
            var fieldId = table.getAttribute('field-id');
            var rowId = rxFormUtils.getSelectedOptionForTable(table.id).rowId;
            selectedOption = { tableId: table.id, fieldId: fieldId, rowId: rowId };
        }
        return selectedOption;
    };

    return rxFormUtils;
});

angular.module('encore.ui.rxInfoPanel', [])
/**
 * @ngdoc directive
 * @name encore.ui.rxInfoPanel:rxInfoPanel
 * @restrict E
 *
 * @description
 * Renders a generic, pre-styled, info panel, with an optional title.
 * @scope
 * @param {String} title - Text to be displayed in the title area of the info panel
 */
.directive('rxInfoPanel', function () {
    return {
        templateUrl: 'templates/rxInfoPanel.html',
        restrict: 'E',
        transclude: true,
        scope: {
            panelTitle: '@',
        }
    };
});

angular.module('encore.ui.rxLogout', ['encore.ui.rxAuth'])
/**
* @ngdoc directive
* @name encore.ui.rxLogout:rxLogout
* @restrict A
* @scope
* @description
* Adds logout functionality to an element
*
* @param {string} [rxLogout] URL to redirect to after logging out
*
* @example
* <button rx-logout>Logout</button>
* <button rx-logout="/custom">Logout (w/ custom location)</button>
*/
.directive ('rxLogout', ["Auth", "$window", "$location", function (Auth, $window, $location) {
    return {
        restrict: 'A',
        scope: {
            rxLogout: '@'
        },
        link: function (scope, element) {
            // if URL not provided to redirect to, use default location
            scope.logoutUrl = (_.isString(scope.rxLogout) && scope.rxLogout.length > 0) ? scope.rxLogout : '/login';

            element.on('click', function () {
                Auth.logout();

                // check if in HTML5 Mode or not (if not, add hashbang)
                // @see http://stackoverflow.com/a/23624785
                if (!$location.$$html5) {
                    scope.logoutUrl = '#' + scope.logoutUrl;
                }

                $window.location = scope.logoutUrl;
            });
        }
    };
}]);

angular.module('encore.ui.rxModalAction', ['ui.bootstrap'])
.run(["$compile", "$templateCache", function ($compile, $templateCache) {
    $compile($templateCache.get('templates/rxModalFooters.html'));
}])
/**
* @ngdoc directive
* @name encore.ui.rxModalAction:rxModalForm
* @restrict E
* @scope
* @description
* Responsible for creating the HTML necessary for modal form
*
* @param {string} title Title of modal window
* @param {string} [subtitle] Subtitle of modal window
* @param {boolean} [isLoading] True to show a spinner by default
* @param {string} [submitText] 'Submit' button text to use. Defaults to 'Submit'
* @param {string} [cancelText] 'Cancel' button text to use. Defaults to 'Cancel'
* @param {string} [returnText] 'Return' button text to use. Defaults to 'Return'
* @param {string} [defaultFocus] default focus element. May be 'submit' or 'cancel'. Defaults to 'firstTabbable'
*
* @example
* <rx-modal-form title="My Form" is-loading="true" submit-text="Yes!"></rx-modal-form>
*/
.directive('rxModalForm', ["$timeout", "$compile", "rxModalFooterTemplates", function ($timeout, $compile, rxModalFooterTemplates) {
    return {
        transclude: true,
        templateUrl: 'templates/rxModalActionForm.html',
        restrict: 'E',
        scope: {
            title: '@',
            subtitle: '@?',
            isLoading: '=?',
            submitText: '@?',
            cancelText: '@?',
            returnText: '@?',
            defaultFocus: '@?'
        },
        link: function (scope, element) {
            // Copy the text variables onto the parent scope so they can be accessible by transcluded content.
            _.assign(scope.$parent, _.pick(scope, ['submitText', 'cancelText', 'returnText']));

            // Manually compile and insert the modal's footers into the DOM.
            $compile(rxModalFooterTemplates.flush())(scope.$parent, function (clone) {
                element.children('div.modal-footer').append(clone);
            });

            var focusSelectors = {
                'cancel': 'button.cancel',
                'submit': 'button.submit',
                'firstTabbable': 'input:not([type="hidden"]):not([disabled="disabled"]), textarea, select'
            };
            var setFocus = function (focus) {
                var formSelector, focusElement;

                if (focus === 'cancel' || focus === 'submit') {
                    formSelector = element[0].querySelector('.modal-footer');
                    focusElement = formSelector.querySelector(focusSelectors[focus]);
                } else {
                    focus = 'firstTabbable';
                    formSelector = element[0].querySelector('.modal-form');
                    // first check for an element with autofocus
                    focusElement = formSelector.querySelector('[autofocus]');
                    if (!focusElement) {
                        focusElement = formSelector.querySelector(focusSelectors[focus]);
                    }
                }
                if (focusElement) {
                    focusElement.focus();
                }
            };

            // Give content some time to load to set the focus
            $timeout(function () {
                setFocus(scope.defaultFocus);
            }, 400);

            // Remove the title attribute, as it will cause a popup to appear when hovering over page content
            // @see https://github.com/rackerlabs/encore-ui/issues/256
            element.removeAttr('title');
        }
    };
}])
.controller('rxModalCtrl', ["$scope", "$modalInstance", "$rootScope", function ($scope, $modalInstance, $rootScope) {
    // define a controller for the modal to use
    $scope.submit = function () {
        $modalInstance.close($scope);
    };

    $scope.cancel = $modalInstance.dismiss;

    // cancel out of the modal if the route is changed
    $rootScope.$on('$routeChangeSuccess', $modalInstance.dismiss);
}])
/**
* @ngdoc service
* @name encore.ui.rxModalAction:rxModalFooterTemplates
* @description
* A cache for storing the modal footer templates
* This is used internally by rxModalFooter, which is preferred
* for registering templates over direct calling of this api.
* @example
* <pre>
* rxModalFooterTemplates.add("step1", "<p>Step 1 Body</p>");
* rxModalFooterTemplates.flush(); // returns html string to be inserted into DOM
* </pre>
*/
.factory('rxModalFooterTemplates', function () {
    var globals = {};
    var locals = {};

    return {
        /*
         * Concatenates all the registered templates and clears the local template cache.
         * @public
         * @returns {string} The concatenated templates wrapped in an ng-switch.
         */
        flush: function () {
            var states = _.assign({}, globals, locals);
            locals = {};
            return _.values(states).reduce(function (html, template) {
                return html + template;
            }, '<div ng-switch="state">') + '</div>';
        },
        /*
         * Register a template with an associated state.
         * @public
         * @param {string} The state being registered.
         * @param {string} The template assicated with the state.
         * @param [object} options
         * @param {boolean} options.global Indicates if the template is used in other modals.
         */
        add: function (state, template, options) {
            if (options.global) {
                globals[state] = template;
            } else {
                locals[state] = template;
            }
        }
    };
})
/**
* @ngdoc directive
* @name encore.ui.rxModalAction:rxModalFooter
* @restrict E
* @scope
* @description
* Define a footer for the next modal.
*
* @param {string} state The content will be shown in the footer when this state is activated.
* @param {string} [global] If the global attribute is present, then this footer can be used
*                          in other modals. This attribute takes no values.
*
* @example
* <rx-modal-footer state="confirm">
*     <button class="button" ng-click="setState('pending')">I understand the risks.</button>
* </rx-modal-footer>
*/
.directive('rxModalFooter', ["rxModalFooterTemplates", function (rxModalFooterTemplates) {
    return {
        restrict: 'E',
        compile: function (element, attrs) {
            var footer = angular.element('<div></div>')
                .append(element.html())
                .attr('ng-switch-when', attrs.state);

            rxModalFooterTemplates.add(attrs.state, footer[0].outerHTML, {
               global: attrs.global !== undefined
            });

            return function (scope, el) {
                el.remove();
            };
        }
    };
}])
/**
* @ngdoc directive
* @name encore.ui.rxModalAction:rxModalAction
* @restrict E
* @scope
* @description
* Link which will show a modal window on click, and handle callbacks for pre/post modal actions
*
* @param {function} [preHook] Function to call when a modal is opened
* @param {function} [postHook] Function to call when a modal is submitted (not called when cancelled out of)
* @param {string} [templateUrl] URL of template to use for modal content
* @param {string} [disable-esc] If the `disable-esc` attribute is present, then "Press Esc to close" will be disabled
*                               for the modal. This attribute takes no values.
*
* @example
* <rx-modal-action
*     pre-hook="myPreHook(this)"
*     post-hook="myPostHook(fields)"
*     template-url="modalContent.html"
*     disable-esc>
*         My Link Text
*  </rx-modal-action>
*/
.directive('rxModalAction', ["$modal", function ($modal) {
    var createModal = function (config, scope) {
        config = _.defaults(config, {
            templateUrl: config.templateUrl,
            controller: 'rxModalCtrl',
            scope: scope
        });

        config.windowClass = 'rxModal';

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

                scope.setState = function (state) {
                    scope.state = state;
                };
                scope.setState('editing');

                // Since we don't want to isolate the scope, we have to eval our attr instead of using `&`
                // The eval will execute function (if it exists)
                scope.$eval(attrs.preHook);

                if (_.has(attrs, 'disableEsc')) {
                    attrs.keyboard = false;
                }

                var modal = createModal(attrs, scope);

                modal.result.then(handleSubmit, focusLink);
            };
        }
    };
}]);

angular.module('encore.ui.rxNotify', ['ngSanitize', 'ngAnimate'])
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
.directive('rxNotification', ["rxNotify", function (rxNotify) {
    return {
        scope: {
            type: '@'
        },
        transclude: true,
        restrict: 'E',
        templateUrl: 'templates/rxNotification.html',
        link: {
            // Transclude returns a jqLite object of the content in the directive pre transclusion into the template.
            pre: function (scope, el, attrs, ctrl, transclude) {
                if (!_.isEmpty(attrs.stack)) {
                    /* jshint maxlen:false */
                    /**
                     * transclude().parent() - returns a jqLite instance of the parent (this directive as defined
                     *                           in the template pre-rendering).
                     * transclude().parent().html() - returns the inner HTML of the parent, as a string, as it was
                     *                                  defined in the template pre-rendering (Text Only)
                     * ----------------------------
                     * el                           -> [<rx-notification stack=​"demo-stack" type=​"info">​
                     *                                  <div class=​"rx-notifications">​...template...​</div>​
                     *                                  </rx-notification>​]
                     *
                     * transclude()                 -> [<span class=​"ng-scope">​Hello, world in demo-stack stack!​</span>​]
                     *
                     * transclude().parent()        -> [<rx-notification stack=​"demo-stack" type=​"info">​
                     *                                  <span class=​"ng-scope">​Hello, world in demo-stack stack!​</span>
                     *                                  ​</rx-notification>​]
                     *
                     * transclude().parent().html() -> "<span class="ng-scope">Hello, world in demo-stack stack!</span>"
                     **/
                    var content = transclude().parent().html();
                    rxNotify.add(content, {
                        type: attrs.type,
                        stack: attrs.stack
                    });
                    el.remove();
                }
            }
        }
    };
}])
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
.directive('rxNotifications', ["rxNotify", function (rxNotify) {
    return {
        scope: {
            stack: '@?'
        },
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/rxNotifications.html',
        controller: ["$scope", function ($scope) {
            /*
             * Calls rxNotify service to remove a message from a stack
             * @param {object} message The message object to remove.
             */
            $scope.dismiss = function (message) {
                rxNotify.dismiss(message);
            };
        }],
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
}])
/**
* @ngdoc service
* @name encore.ui.rxNotify:rxNotify
* @description
* Manages page messages for an application
*/
.service('rxNotify', ["$interval", "$rootScope", function ($interval, $rootScope) {
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
        ondismiss: _.noop(),
        stack: 'page',
        repeat: true
    };

    /*
     * Adds a message to a stack
     * @private
     * @param {object} message The message object to add.
     */
    var addToStack = function (message) {
        // if repeat is false, check to see if the message is already in the stack
        if (!message.repeat) {
            if (_.find(stacks[message.stack], { text: message.text, type: message.type })) {
                return;
            }
        }

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

        $interval(function () {
            dismiss(message);
        }, timeoutMs, 1);

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
        if (stacks.hasOwnProperty(stack)) {
            // @see http://davidwalsh.name/empty-array
            stacks[stack].length = 0;
        }
    };

    /*
     * removes a specific message from a stack
     * @public
     * @param {string} msg Message to remove
     */
    var dismiss = function (msg) {
        // remove message by id
        stacks[msg.stack] = _.reject(stacks[msg.stack], { 'id': msg.id });

        if (_.isFunction(msg.ondismiss)) {
            $interval(function () {
                msg.ondismiss(msg);
            }, 0, 1);
        }
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
}])
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
.factory('rxPromiseNotifications', ["rxNotify", "$rootScope", "$q", "$interpolate", function (rxNotify, $rootScope, $q, $interpolate) {
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
}]);

angular.module('encore.ui.rxPageTitle', [])
.factory('rxPageTitle', ["$document", "$filter", function ($document, $filter) {
    var suffix = '',
        title = '';

    var addSuffix = function (t) {
        if (suffix !== '') {
            title = t + suffix;
        } else {
            title = t;
        }
        
    };

    var setDocumentTitle = function (t) {
        $document.prop('title', t);
    };

    return {
        setSuffix: function (s) {
            suffix = s;
        },
        getSuffix: function () {
            return suffix;
        },
        setTitle: function (t) {
            addSuffix(t);
            setDocumentTitle(title);
        },

        // Set the page title to `t`, and strip any HTML tags/entities
        // within it. This is considered unsafe, i.e. you *must* trust the 
        // source of the input, as it allows arbitrary javascript to be executed
        setTitleUnsafeStripHTML: function (t) {
            addSuffix(t);
            setDocumentTitle($filter('rxUnsafeRemoveHTML')(title));
        },

        getTitle: function () {
            return $document.prop('title');
        }
    };
}])

/**
 *
 * @ngdoc filter
 * @name encore.ui.rxPageTitle:rxUnsafeRemoveHTML
 * @description
 * Given a string, it removes all HTML tags from the string, using the
 * browser's own parsing engine. Any content inside of tags will be kept.
 *
 * NOTE: You must only use this with trusted text. See
 * http://stackoverflow.com/a/5002618 for more details
 *
 * @param {string} The string to remove HTML from
 *
 * @returns {string} Cleaned string
 */
.filter('rxUnsafeRemoveHTML', ["$document", function ($document) {
    return function (htmlString) {
        // protect against null, which can crash some browsers
        if (_.isEmpty(htmlString)) {
            htmlString = '';
        }

        var div = $document[0].createElement('div');
        div.innerHTML = htmlString;
        return div.textContent || div.innerText || '';
    };
}]);

angular.module('encore.ui.rxPaginate', ['encore.ui.rxLocalStorage', 'debounce'])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxPaginate:rxPaginate
 * @restrict E
 * @description
 * Directive that takes in the page tracking object and outputs a page
 * switching controller. It can be used in conjunction with the Paginate
 * filter for UI-based pagination, or can take an optional serverInterface
 * object if you instead intend to use a paginated server-side API
 *
 * @param {Object} pageTracking This is the page tracking service instance to
 * be used for this directive
 * @param {number} numberOfPages This is the maximum number of pages that the
 * page object will display at a time.
 * @param {Object} [serverInterface] An object with a `getItems()` method. The requirements
 * of this method are described in the rxPaginate README
 * @param {Object} [filterText] The model for the table filter input, if any. This directive
 * will watch that model for changes, and request new results from the paginated API, on change
 * @param {Object} [selections] The `selected` property of a SelectFilter instance, if one is being used.
 * This directive will watch the filter's selections, and request new results from the paginated API, on change
 * @param {Object} [sortColumn] The model containing the current column the results should sort on.
 * This directive will watch that column for changes, and request new results from the paginated API, on change
 * @param {Object} [sortDirection] The model containing the current direction of the current sort column. This
 * directive will watch for changes, and request new results from the paginated API, on change
 * @param {String} [errorMessage] An error message that should be displayed if a call to the request fails
 */
.directive('rxPaginate', ["$q", "$compile", "debounce", "PageTracking", "rxPromiseNotifications", function ($q, $compile, debounce, PageTracking, rxPromiseNotifications) {
    return {
        templateUrl: 'templates/rxPaginate.html',
        replace: true,
        restrict: 'E',
        require: '?^rxLoadingOverlay',
        scope: {
            pageTracking: '=',
            numberOfPages: '@',
            serverInterface: '=?',
            filterText: '=?',
            selections: '=?',
            sortColumn: '=?',
            sortDirection: '=?'
        },
        link: function (scope, element, attrs, rxLoadingOverlayCtrl) {

            var errorMessage = attrs.errorMessage;

            rxLoadingOverlayCtrl = rxLoadingOverlayCtrl || {
                show: _.noop,
                hide: _.noop,
                showAndHide: _.noop
            };
            // We need to find the `<table>` that contains
            // this `<rx-paginate>`
            var parentElement = element.parent();
            while (parentElement.length && parentElement[0].tagName !== 'TABLE') {
                parentElement = parentElement.parent();
            }

            var table = parentElement;

            scope.updateItemsPerPage = function (itemsPerPage) {
                return scope.pageTracking.setItemsPerPage(itemsPerPage).then(function () {

                    // Set itemsPerPage as the new default value for
                    // all future pagination tables
                    PageTracking.userSelectedItemsPerPage(itemsPerPage);
                });
            };

            scope.scrollToTop = function () {
                table[0].scrollIntoView(true);
            };

            // Everything here is restricted to using server-side pagination
            if (!_.isUndefined(scope.serverInterface)) {

                var params = function () {
                    var direction = scope.sortDirection ? 'DESCENDING' : 'ASCENDING';
                    return {
                        filterText: scope.filterText,
                        selections: scope.selections,
                        sortColumn: scope.sortColumn,
                        sortDirection: direction
                    };
                };

                var getItems = function (pageNumber, itemsPerPage) {
                    scope.loadingState = 'loading';
                    var response = scope.serverInterface.getItems(pageNumber,
                                                   itemsPerPage,
                                                   params());
                    rxLoadingOverlayCtrl.showAndHide(response);

                    if (errorMessage) {
                        rxPromiseNotifications.add(response, {
                            error: errorMessage
                        });
                    }
                    return response.finally(function () {
                        scope.loadingState = '';
                    });
                };
        
                // Register the getItems function with the PageTracker
                scope.pageTracking.updateItemsFn(getItems);

                var notifyPageTracking = function () {
                    var pageNumber = 0;
                    scope.pageTracking.newItems(getItems(pageNumber, scope.pageTracking.itemsPerPage));
                };

                // When someone changes the sort column, it will go to the 
                // default direction for that column. That could cause both
                // `sortColumn` and `sortDirection` to get changed, and 
                // we don't want to cause two separate API requests to happen
                var columnOrDirectionChange = debounce(notifyPageTracking, 100);

                var textChange = debounce(notifyPageTracking, 500);

                var selectionChange = debounce(notifyPageTracking, 1000);

                var ifChanged = function (fn) {
                    return function (newVal,  oldVal) {
                        if (newVal !== oldVal) {
                            fn();
                        }
                    };
                };
                // Whenever the filter text changes (modulo a debounce), tell
                // the PageTracker that it should go grab new items
                if (!_.isUndefined(scope.filterText)) {
                    scope.$watch('filterText', ifChanged(textChange));
                }

                if (!_.isUndefined(scope.selections)) {
                    scope.$watch('selections', ifChanged(selectionChange), true);
                }

                if (!_.isUndefined(scope.sortColumn)) {
                    scope.$watch('sortColumn', ifChanged(columnOrDirectionChange));
                }
                if (!_.isUndefined(scope.sortDirection)) {
                    scope.$watch('sortDirection', ifChanged(columnOrDirectionChange));
                }

                notifyPageTracking();

            }

        }
    };
}])

/**
 *
 * @ngdoc directive
 * @name encore.ui.rxPaginate:rxLoadingOverlay
 * @restrict A
 * @description
 * This directive can be used to show and hide a "loading" overlay on top
 * of any given element. Add this as an attribute to your element, and then
 * other sibling or child elements can require this as a controller.
 *
 * @method show - Shows the overlay
 * @method hide - Hides the overlay
 * @method showAndHide(promise) - Shows the overlay, and automatically
 * hides it when the given promise either resolves or rejects
 */
.directive('rxLoadingOverlay', ["$compile", "rxDOMHelper", function ($compile, rxDOMHelper) {
    var loadingBlockHTML = '<div ng-show="showLoadingOverlay" class="loading-overlay">' +
                                '<div class="loading-text-wrapper">' +
                                    '<i class="fa fa-fw fa-lg fa-spin fa-circle-o-notch"></i>' +
                                    '<div class="loading-text">Loading...</div>' +
                                '</div>' +
                            '</div>';

    return {
        restrict: 'A',
        scope: true,
        controller: ["$scope", "$element", function ($scope, $element) {
            this.show = function () {
                var offset = rxDOMHelper.offset($element);
                var width = rxDOMHelper.width($element);
                var height = rxDOMHelper.height($element);
                if (!_.isUndefined($scope.loadingBlock)) {
                    $scope.loadingBlock.css({
                        top: offset.top + 'px',
                        left: offset.left + 'px',
                        width: width,
                        height: height,
                    });
                }
                $scope.showLoadingOverlay = true;
            };

            this.hide = function () {
                $scope.showLoadingOverlay = false;
            };

            this.showAndHide = function (promise) {
                this.show();
                promise.finally(this.hide);
            };
        }],
        link: function (scope, element) {
            // This target element has to have `position: relative` otherwise the overlay
            // will not sit on top of it
            element.css({ position: 'relative' });
            scope.showLoadingOverlay = false;

            $compile(loadingBlockHTML)(scope, function (clone) {
                scope.loadingBlock = clone;
                element.after(clone);
            });
        }
    };
}])
/**
*
* @ngdoc service
* @name encore.ui.rxPaginate:PageTracking
* @description
* This is the data service that can be used in conjunction with the pagination
* objects to store/control page display of data tables and other items.
*
* @property {number} itemsPerPage This is the current setting for the number
* of items to display per page.
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
* PageTracking object. Enables the ability to override default pager.
* If you choose to override the default `itemsPerPage`, and it isn't
* a value in itemSizeList, then it will automatically be added to itemSizeList
* at the right spot.
*
* @method userSelectedItemsPerPage Call this when a user chooses a new value for
* itemsPerPage, and all future instances of PageTracking will default to that value,
* assuming that the value exists in itemSizeList
* 
*
* @example
* <pre>
* PageTracking.createInstance({showAll: true, itemsPerPage: 15});
* </pre>
*/
.factory('PageTracking', ["$q", "LocalStorage", "rxPaginateUtils", function ($q, LocalStorage, rxPaginateUtils) {

    function PageTrackingObject (opts) {
        var pager = _.defaults(_.cloneDeep(opts), {
            itemsPerPage: 200,
            pagesToShow: 5,
            pageNumber: 0,
            pageInit: false,
            total: 0,
            showAll: false,
            itemSizeList: [50, 200, 350, 500]
        });

        // This holds all the items we've received. For UI pagination,
        // this will be the entire set. For API pagination, this will be
        // whatever chunk of data the API decided to send us
        pager.localItems = [];

        var itemsPerPage = pager.itemsPerPage;
        var itemSizeList = pager.itemSizeList;

        // If itemSizeList doesn't contain the desired itemsPerPage,
        // then find the right spot in itemSizeList and insert the
        // itemsPerPage value
        if (!_.contains(itemSizeList, itemsPerPage)) {
            var index = _.sortedIndex(itemSizeList, itemsPerPage);
            itemSizeList.splice(index, 0, itemsPerPage);
        }

        var selectedItemsPerPage = parseInt(LocalStorage.getItem('rxItemsPerPage'));

        // If the user has chosen a desired itemsPerPage, make sure we're respecting that
        // However, a value specified in the options will take precedence
        if (!opts.itemsPerPage && !_.isNaN(selectedItemsPerPage) && _.contains(itemSizeList, selectedItemsPerPage)) {
            pager.itemsPerPage = selectedItemsPerPage;
        }
        
        Object.defineProperties(pager, {
            'items': {
                // This returns the slice of data for whatever current page the user is on.
                // It is used for server-side pagination.
                get: function () {
                    var info = rxPaginateUtils.firstAndLast(pager.pageNumber, pager.itemsPerPage, pager.total);
                    return pager.localItems.slice(info.first - pager.cacheOffset, info.last - pager.cacheOffset);
                }
            },

            'totalPages': {
                get: function () { return Math.ceil(pager.total / pager.itemsPerPage); }
            }
        });

        function updateCache (pager, pageNumber, localItems) {
            var numberOfPages = Math.floor(localItems.length / pager.itemsPerPage);
            var cachedPages = numberOfPages ? _.range(pageNumber, pageNumber + numberOfPages) : [pageNumber];
            pager.cachedPages = !_.isEmpty(cachedPages) ? cachedPages : [pageNumber];
            pager.cacheOffset = pager.cachedPages[0] * pager.itemsPerPage;
        }

        updateCache(pager, 0, pager.localItems);
        
        var updateItems = function (pageNumber) {
            // This is the function that gets used when doing UI pagination,
            // thus we're not waiting for the pageNumber to come back from a service,
            // so we should set it right away. We can also return an empty items list,
            // because for UI pagination, the items themselves come in through the Pagination
            // filter
            pager.pageNumber = pageNumber;
            var data = {
                items: [],
                pageNumber: pageNumber,
                totalNumberOfItems: pager.total
            };
            return $q.when(data);
        };
        pager.updateItemsFn = function (fn) {
            updateItems = fn;
        };

        // Used by rxPaginate to tell the pager that it should grab
        // new items from itemsPromise, where itemsPromise is the promise
        // returned by a product's getItems() method.
        // Set shouldUpdateCache to false if the pager should not update its cache with these values
        pager.newItems = function (itemsPromise, shouldUpdateCache) {
            if (_.isUndefined(shouldUpdateCache)) {
                shouldUpdateCache = true;
            }
            return itemsPromise.then(function (data) {
                pager.pageNumber = data.pageNumber;
                pager.localItems = data.items;
                pager.total = data.totalNumberOfItems;
                if (shouldUpdateCache) {
                    updateCache(pager, pager.pageNumber, data.items);
                }
                return data;
            });
        };

        // 0-based page number
        // opts: An object containing:
        //  forceCacheUpdate: true/false, whether or not to flush the cache
        //  itemsPerPage: If specificed, request this many items for the page, instead of
        //                using pager.itemsPerPage
        pager.goToPage = function (n, opts) {
            opts = opts || {};
            var shouldUpdateCache = true;

            // If the desired page number is currently cached, then just reuse
            // our `localItems` cache, rather than going back to the API.
            // By setting `updateCache` to false, it ensures that the current
            // pager.cacheOffset and pager.cachedPages values stay the
            // same
            if (!opts.forceCacheUpdate && _.contains(pager.cachedPages, n)) {
                shouldUpdateCache = false;
                return pager.newItems($q.when({
                    pageNumber: n,
                    items: pager.localItems,
                    totalNumberOfItems: pager.total
                }), shouldUpdateCache);
            }

            var itemsPerPage = opts.itemsPerPage || pager.itemsPerPage;
            return pager.newItems(updateItems(n, itemsPerPage), shouldUpdateCache);
        };

        // This tells the pager to go to the current page, but ensure no cached
        // values are used. Can be used by page controllers when they want
        // to force an update
        pager.refresh = function (stayOnCurrentPage) {
            var pageNumber = stayOnCurrentPage ? pager.currentPage() : 0;
            return pager.goToPage(pageNumber, { forceCacheUpdate: true });
        };

        pager.isFirstPage = function () {
            return pager.isPage(0);
        };

        pager.isLastPage = function () {
            return pager.isPage(_.max([0, pager.totalPages - 1]));
        };

        pager.isPage = function (n) {
            return pager.pageNumber === n;
        };
        
        pager.isPageNTheLastPage = function (n) {
            return pager.totalPages - 1 === n;
        };
        
        pager.currentPage = function () {
            return pager.pageNumber;
        };

        pager.goToFirstPage = function () {
            pager.goToPage(0);
        };

        pager.goToLastPage = function () {
            pager.goToPage(_.max([0, pager.totalPages - 1]));
        };

        pager.goToPrevPage = function () {
            pager.goToPage(pager.currentPage() - 1);
        };

        pager.goToNextPage = function () {
            pager.goToPage(pager.currentPage() + 1);
        };

        pager.isEmpty = function () {
            return pager.total === 0;
        };

        pager.setItemsPerPage = function (numItems) {
            var opts = {
                forceCacheUpdate: true,
                itemsPerPage: numItems
            };
            return pager.goToPage(0, opts).then(function (data) {
                // Wait until we get the data back from the API before we
                // update itemsPerPage. This ensures that we don't show
                // a "weird" number of items in a table
                pager.itemsPerPage = numItems;
                // Now that we've "officially" changed the itemsPerPage,
                // we have to update all the cache values
                updateCache(pager, data.pageNumber, data.items);
            });
        };

        pager.isItemsPerPage = function (numItems) {
            return pager.itemsPerPage === numItems;
        };

        this.pager = pager;

        pager.goToPage(pager.pageNumber);

    }

    return {
        createInstance: function (options) {
            options = options ? options : {};
            var tracking = new PageTrackingObject(options);
            return tracking.pager;
        },

        userSelectedItemsPerPage: function (itemsPerPage) {
            LocalStorage.setItem('rxItemsPerPage', itemsPerPage);
        }
    };
}])

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
.filter('Paginate', ["PageTracking", "rxPaginateUtils", function (PageTracking, rxPaginateUtils) {
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
            // We were previously on the last page, but enough items were deleted
            // to reduce the total number of pages. We should now jump to whatever the
            // new last page is
            // When loading items over the network, our first few times through here
            // will have totalPages===0. We do the _.max to ensure that
            // we never set pageNumber to -1
            if (pager.pageNumber + 1 > pager.totalPages) {
                if (!pager.isLastPage()) {
                    pager.goToLastPage();
                }
            }
            var firstLast = rxPaginateUtils.firstAndLast(pager.currentPage(), pager.itemsPerPage, items.length);
            return items.slice(firstLast.first, firstLast.last);
        }
    };
}])

/**
*
* @ngdoc service
* @name encore.ui.rxPaginate:rxPaginateUtils
* @description
* A few utilities
*/
.factory('rxPaginateUtils', function () {
    var rxPaginateUtils = {};

    rxPaginateUtils.firstAndLast = function (pageNumber, itemsPerPage, totalNumItems) {
        var first = pageNumber * itemsPerPage;
        var added = first + itemsPerPage;
        var last = (added > totalNumItems) ? totalNumItems : added;

        return {
            first: first,
            last: last,
        };
        
    };

    // Given the user requested pageNumber and itemsPerPage, and the number of items we'll
    // ask a paginated API for (serverItemsPerPage), calculate what page number the API
    // should be asked for, how and far of an offset to use to slice into the returned items.
    // It is expected that authors of getItems() functions will use this, and do the slice themselves
    // before resolving getItems()
    rxPaginateUtils.calculateApiVals = function (pageNumber, itemsPerPage, serverItemsPerPage) {
        var serverPageNumber = Math.floor(pageNumber * itemsPerPage / serverItemsPerPage);
        var offset = pageNumber * itemsPerPage - serverItemsPerPage * serverPageNumber;

        return {
            serverPageNumber: serverPageNumber,
            offset: offset
        };
    };

    return rxPaginateUtils;
})

/**
 * @ngdoc filter
 * @name encore.ui.rxPaginate:PaginatedItemsSummary
 * @description
 * Given an active pager (i.e. the result of PageTracking.createInstance()),
 * return a string like "26-50 of 500", when on the second page of a list of
 * 500 items, where we are displaying 25 items per page
 *
 * @param {Object} pager The instance of the PageTracking service. If not
 *
 * @returns {String} The list of page numbers that will be displayed.
 */
.filter('PaginatedItemsSummary', ["rxPaginateUtils", function (rxPaginateUtils) {
    return function (pager) {
        var template = '<%= first %>-<%= last %> of <%= total %>';
        if (pager.showAll || pager.itemsPerPage > pager.total) {
            template = '<%= total %>';
        }
        var firstAndLast = rxPaginateUtils.firstAndLast(pager.currentPage(), pager.itemsPerPage, pager.total);
        return _.template(template, {
            first: firstAndLast.first + 1,
            last: firstAndLast.last,
            total: pager.total
        });
    };
}])
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
.filter('Page', ["PageTracking", function (PageTracking) {
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

}]);

angular.module('encore.ui.rxRadio', [])
.directive('rxRadio', function () {
    return {
        restrict: 'A',
        scope: {
            ngDisabled: '=?'
        },
        compile: function (tElement, tAttrs) {
            // automatically set input type
            tElement.attr('type', 'radio');
            tAttrs.type = 'radio';

            return function (scope, element, attrs) {
                var disabledClass = 'rx-disabled';
                var wrapper = angular.element('<div class="rxRadio"></div>');
                var fakeRadio = '<div class="fake-radio">' +
                        '<div class="tick"></div>' +
                    '</div>';

                element.wrap(wrapper);
                element.after(fakeRadio);

                // apply/remove disabled attribute so we can
                // apply a CSS selector to style sibling elements
                if (attrs.disabled) {
                    wrapper.addClass(disabledClass);
                }
                if (_.has(attrs, 'ngDisabled')) {
                    scope.$watch('ngDisabled', function (newVal) {
                        if (newVal === true) {
                            wrapper.addClass(disabledClass);
                        } else {
                            wrapper.removeClass(disabledClass);
                        }
                    });
                }

                // remove stylistic markup when element is destroyed
                element.on('$destroy', function () {
                    wrapper[0].remove();
                });
            };
        }//compile
    };
});

angular.module('encore.ui.rxSearchBox', [])
.directive('rxSearchBox', function () {
    return {
        restrict: 'E',
        require: 'ngModel',
        templateUrl: 'templates/rxSearchBox.html',
        scope: {
            searchVal: '=ngModel',
            isDisabled: '@ngDisabled',
            rxPlaceholder: '=?'
        },
        controller: ["$scope", function ($scope) {
            $scope.searchVal = $scope.searchVal || '';
            $scope.rxPlaceholder = $scope.rxPlaceholder || 'Search...';

            $scope.$watch('searchVal', function (newVal) {
                if ($scope.isDisabled) {
                    $scope.isClearable = false;
                } else {
                    $scope.isClearable = newVal.toString() !== '';
                }
            });

            $scope.clearSearch = function () {
                $scope.searchVal = '';
            };
        }]
    };
});

angular.module('encore.ui.rxSelectFilter', ['encore.ui.rxMisc'])
/**
 * @ngdoc filter
 * @name encore.ui.rxSelectFilter:Apply
 * @description
 * Used to apply an instance of SelectFilter to an array.
 *
 * @param {Array} list The list to be filtered.
 * @param {Object} filter An instance of SelectFilter
 */
.filter('Apply', function () {
    return function (list, filter) {
        return filter.applyTo(list);
    };
})

/**
 * @ngdoc service
 * @name encore.ui.rxSelectFilter:SelectFilter
 * @description
 * A prototype for creating objects that can be used for filtering arrays.
 *
 * @method create(options) - Create a filter that tracks the provided properties.
 */
.service('SelectFilter', function () {
    return {
        create: function (options) {
            options = _.defaults(options, {
                properties: [],
                available: {},
                selected: _.isUndefined(options.available) ? {} : _.cloneDeep(options.available)
            });

            var filter = _.cloneDeep(options);

            var firstRun = true;

            function init (list) {
                filter.properties.forEach(function (property) {
                    if (_.isUndefined(filter.available[property])) {
                        filter.available[property] = _.uniq(_.pluck(list, property));
                    }

                    // Check `options.selected` instead of `filter.selected` because the latter
                    // is used as the model for `<rx-multi-select>`, which initializes its
                    // model to an empty array. However, the intent is select all options
                    // initially when left unspecified (preferred default behavior).
                    if (_.isUndefined(options.selected[property])) {
                        filter.selected[property] = _.clone(filter.available[property]);
                    }
                });
            }

            function isItemValid (item) {
                return filter.properties.every(function (property) {
                    return _.contains(filter.selected[property], item[property]);
                });
            }

            filter.applyTo = function (list) {
                if (firstRun) {
                    firstRun = false;
                    init(list);
                }
                return list.filter(isItemValid);
            };

            return filter;
        }
    };
})

/**
 * @ngdoc directive
 * @name encore.ui.rxSelectFilter:rxSelectFilter
 * @restrict E
 * @description
 * Autmatically creates the appropriate dropdowns to manage a filter object.
 *
 * @param {Object} filter - An instance of SelectFilter
 */
.directive('rxSelectFilter', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxSelectFilter.html',
        scope: {
            filter: '='
        }
    };
})

/**
 * @ngdoc directive
 * @name encore.ui.rxSelectFilter:rxMultiSelect
 * @restrict E
 * @description
 * A multi-select dropdown with checkboxes for each option
 *
 * @param {string} ng-model The scope property that stores the value of the input
 * @param {Array} [options] A list of the options for the dropdown
 */
.directive('rxMultiSelect', ["$document", "rxDOMHelper", function ($document, rxDOMHelper) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxMultiSelect.html',
        transclude: true,
        require: ['rxMultiSelect', 'ngModel'],
        scope: {
            selected: '=ngModel',
            options: '=?',
        },
        controller: ["$scope", function ($scope) {
            if (_.isUndefined($scope.selected)) {
                $scope.selected = [];
            }

            this.options = [];
            this.addOption = function (option) {
                if (option !== 'all') {
                    this.options = _.union(this.options, [option]);
                }
            };

            this.select = function (option) {
                $scope.selected = option === 'all' ? _.clone(this.options) : _.union($scope.selected, [option]);
            };
            this.unselect = function (option) {
                $scope.selected = option === 'all' ? [] : _.without($scope.selected, option);
            };
            this.isSelected = function (option) {
                if (option === 'all') {
                    return this.options.length === $scope.selected.length;
                } else {
                    return _.contains($scope.selected, option);
                }
            };

            this.render = function () {
                if (this.ngModelCtrl) {
                    this.ngModelCtrl.$render();
                }
            };
        }],
        link: function (scope, element, attrs, controllers) {
            var selectElement = rxDOMHelper.find(element, '.rx-multi-select')[0];

            var documentClickHandler = function (event) {
                if (event.target !== selectElement) {
                    scope.listDisplayed = false;
                    scope.$apply();
                }
            };

            $document.on('click', documentClickHandler);
            scope.$on('$destroy', function () {
                $document.off('click', documentClickHandler);
            });

            scope.listDisplayed = false;

            scope.toggleDisplay = function (event) {
                if (event.target === selectElement) {
                    scope.listDisplayed = !scope.listDisplayed;
                } else {
                    event.stopPropagation();
                }
            };

            var selectCtrl = controllers[0];
            var ngModelCtrl = controllers[1];

            ngModelCtrl.$render = function () {
                scope.preview = (function () {
                    function getLabel (option) {
                        var optionElement = rxDOMHelper.find(element, '[value="' + option + '"]');
                        return optionElement.text().trim();
                    }

                    if (_.isEmpty(scope.selected)) {
                        return 'None';
                    } else if (scope.selected.length === 1) {
                        return getLabel(scope.selected[0]) || scope.selected[0];
                    } else if (scope.selected.length === selectCtrl.options.length - 1) {
                        var option = _.first(_.difference(selectCtrl.options, scope.selected));
                        return 'All except ' + getLabel(option) || scope.selected[0];
                    } else if (scope.selected.length === selectCtrl.options.length) {
                        return 'All Selected';
                    } else {
                        return scope.selected.length + ' Selected';
                    }
                })();
            };

            selectCtrl.ngModelCtrl = ngModelCtrl;
        }
    };
}])

/**
 * @ngdoc directive
 * @name encore.ui.rxSelectFilter:rxSelectOption
 * @restrict E
 * @description
 * A single option for rxMultiSelect
 *
 * @param {string} value The value of the option. If no transcluded content is provided,
 *                       the value will also be used as the option's text.
 */
.directive('rxSelectOption', ["rxDOMHelper", function (rxDOMHelper) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxSelectOption.html',
        transclude: true,
        scope: {
            value: '@'
        },
        require: '^^rxMultiSelect',
        link: function (scope, element, attrs, selectCtrl) {
            scope.transclusion = rxDOMHelper.find(element, '[ng-transclude] > *').length > 0;

            scope.toggle = function () {
                if (scope.isSelected) {
                    selectCtrl.unselect(scope.value);
                } else {
                    selectCtrl.select(scope.value);
                }
            };

            // The state of the input may be changed by the 'all' option.
            scope.$watch(function () {
                return selectCtrl.isSelected(scope.value);
            }, function (isSelected) {
                scope.isSelected = isSelected;
            });

            selectCtrl.addOption(scope.value);

            selectCtrl.render();
        }
    };
}]);

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
        return { predicate: property, reverse: reversed };
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
})
/**
* @ngdoc filter
* @name encore.ui.rxSortableColumn:rxSortEmptyTop
* @description
* Filter that moves rows with an empty predicate to the top of the column in ascending order,
  and to the bottom in descending order.
*
* @example
* <pre>
* [{ name: { firstName: 'Adam' } }, { }] | rxSortEmptyTop 'name.firstName':false
* Will sort as [{}, { name: { firstName: 'Adam' } }].

* [{ name: { firstName: 'Adam' } }, { name: { firstName: null } ] | rxSortEmptyTop 'name.firstName':true
* Will sort as [{ name: { firstName: 'Adam' } }, {}]

* </pre>
*/
.filter('rxSortEmptyTop', ['$filter', '$parse', function ($filter, $parse) {
    return function (array, key, reverse) {

        var predicateGetter = $parse(key);

        var sortFn = function (item) {
            return predicateGetter(item) || '';
        };

        return $filter('orderBy')(array, sortFn, reverse);
    };
}]);

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
* @param {Boolean} rxSpinner - When present, adds an extra class to the spinner depicting the color
*/
.directive('rxSpinner', function () {
    return {
        restrict: 'A',
        scope: {
            toggle: '=',
            rxSpinner: '@',
            size: '@'
        },
        link: function (scope, element) {
            scope.$watch('toggle', function (value) {
                var size = scope.size ? scope.size : '';
                var type = scope.rxSpinner ? scope.rxSpinner : '';
                if (value) {
                    element.prepend('<div class="rx-spinner ' + type + ' ' + size + '"></div> ');
                } else {
                    element.find('div').remove();
                }
            });
        }
    };
});

angular.module('encore.ui.rxStatus', ['encore.ui.rxNotify'])
/**
* @ngdoc service
* @name encore.ui.rxStatus:StatusUtil
* @description
* Manipulates references to needed $scope input for proper notification functionality
*
* @example
* <pre>
*   $rootScope.$on('$routeChangeSuccess', function () {
*       Status.setScope(); // no input results in $rootScope being used
*       Status.setUtil($rootScope); // forcibly set $rootScope as the scope to be used
*   });
* </pre>
*/
    .service('StatusUtil', ["$route", "$rootScope", "Status", function ($route, $rootScope, Status) {
        return {
            setupScope: function (scope) {
                Status.setScope(scope || $rootScope);
            }
        };
    }])
/**
* @ngdoc service
* @name encore.ui.rxStatus:Status
* @description
* Manages notifications for rxNotify with an abstracted set of functions for ease of use
*/
    .service('Status', ["$rootScope", "rxNotify", "ErrorFormatter", function ($rootScope, rxNotify, ErrorFormatter) {
        var stack = 'page';
        var scope;
        var status = {
            LOADING: function () {
                return { 
                    loaded: false,
                    loading: true,
                    prop: 'loaded'
                };
            },
            SUCCESS: function () {
                return { 
                    loaded: true,
                    loading: false,
                    success: true,
                    type: 'success',
                    prop: 'loaded',
                    repeat: false,
                    timeout: 5
                };
            },
            ERROR: function () {
                return { 
                    loaded: true,
                    loading: false,
                    success: false,
                    type: 'error',
                    prop: 'loaded',
                    repeat: false
                };
            },
            WARNING: function () {
                return { 
                    loaded: true,
                    loading: false,
                    success: true,
                    type: 'warning',
                    prop: 'loaded'
                };
            },
            INFO: function () {
                return { 
                    loaded: true,
                    loading: false,
                    success: true,
                    type: 'info',
                    prop: 'loaded'
                };
            },
            CLEAR: function () {
                return {
                    loading: false,
                    prop: 'loaded'
                };
            },
        };

        // States that specify a type cannot be dismissed (have to be approved by user)
        var isDismissable = function (state) {
            return _.has(state, 'loading') && !_.has(state, 'type');
        };

        // Given an options object, check if scope[options.prop] exists,
        // and set it to `val` if so. `val` defaults to true if not
        // supplied
        var setDoneLoadingProp = function (options, val) {
            val = _.isUndefined(val) ? true : val;
            if (_.has(options, 'prop') && _.has(scope, options.prop)) {
                scope[options.prop] = val;
            }
        };

        // If the stack is overridden in a given controller, it needs to be refreshed
        // for any subsequent controllers since a Service is loaded by Angular only once
        $rootScope.$on('$routeChangeStart', function () {
            status.setStack('page');
        });

        status.setStack = function (s) {
            stack = s;
        };

        status.setScope = function ($scope) {
            scope = $scope;
            scope.loaded = false;
        };

        status.setStatus = function (msg, state) {
            state.stack = stack;

            if (!_.has(state, 'dismiss') && isDismissable(state)) {
                // state.prop defaults to 'loaded', per status.LOADING
                // However, if a promise is passed in, we use the $resolved
                // property instead of the default loaded or passed in value
                if (_.has(scope[state.prop], '$resolved')) {
                    state.prop = state.prop + '.$resolved';
                }
                state.dismiss = [scope, state.prop];
            }

            if (state.type === 'success') {
                state.show = state.show || 'next';
            }

            setDoneLoadingProp(state, _.has(state, 'loading') ? !state.loading : true);
            scope.status = state;
            return rxNotify.add(msg, state);
        };

        status.setLoading = function (msg, options) {
            options = _.defaults(options ? options : {}, status.LOADING());

            // prop is the variable on scope that stores whether this loading is complete
            // By default is uses $scope.loaded, but individual messages should be able to
            // use their own property
            var prop = options.prop;
            if (!_.has(scope, prop)) {
                scope[prop] = false;
            }
            return status.setStatus(msg || '', options);
        };

        status.setSuccess = function (msg, options) {
            options = _.defaults(options ? options : {}, status.SUCCESS());
            return status.setStatus(msg || '', options);
        };

        status.setSuccessNext = function (msg, options) {
            var next = { 'show': 'next' };
            options = _.defaults(options ? options : {}, next);
            return status.setSuccess(msg, options);
        };

        status.setSuccessImmediate = function (msg, options) {
            var immediate = { 'show': 'immediate' };
            options = _.defaults(options ? options : {}, immediate);
            return status.setSuccess(msg, options);
        };

        status.setWarning = function (msg, options) {
            options = _.defaults(options ? options : {}, status.WARNING());
            return status.setStatus(msg, options);
        };

        status.setInfo = function (msg, options) {
            options = _.merge(options ? options : {}, status.INFO());
            return status.setStatus(msg, options);
        };

        /*
         * `msg` - can be a plain string, or it can be a string template with ${message} in it
         * `error` - An optional error object. Should have a `message` or `statusText` property
         * `options` - A usual options object
         */
        status.setError = function (msg, error, options) {
            options = _.defaults(options ? options : {}, status.ERROR());
            msg = ErrorFormatter.buildErrorMsg(msg || '', error);
            return status.setStatus(msg, options);
        };

        status.complete = function (options) {
            return status.setSuccessImmediate('', _.defaults(options ? options : {}, status.SUCCESS()));
        };

        status.dismiss = function (obj) {
            scope.status = status.CLEAR();
            return rxNotify.dismiss(obj);
        };

        status.clear = function (st) {
            scope.status = status.CLEAR();
            return rxNotify.clear(st || stack);
        };

        return status;
    }])
/**
* @ngdoc service 
* @name encore.ui.rxStatus:ErrorFormatter
* @description
* Provides a helper method to parse error objects for 'message' and format them
* as necessary for Status.setError()
*/
    .factory('ErrorFormatter', function () {
        /*
         * formatString is a string with ${message} in it somewhere, where ${message}
         * will come from the `error` object. The `error` object either needs to have
         * a `message` property, or a `statusText` property.
         */
        var buildErrorMsg = function (formatString, error) {
            error = error || {};
            if (!_.has(error, 'message')) {
                error.message = _.has(error, 'statusText') ? error.statusText : 'Unknown error';
            }
            return _.template(formatString, error);
        };

        return {
            buildErrorMsg: buildErrorMsg
        };
    });

angular.module('encore.ui.rxStatusColumn', [])

/**
 * @ngdoc directive
 * @name encore.ui.rxStatusColumn:rxStatusColumn
 * @description
 * A directive for drawing colored status columns in a table. This
 * takes the place of the <td></td> for the column it's in.
 *
 * @param {String} status The status to draw
 * @param {String} [api] Optionally specify which API mapping to use for the status
 * @param {String} [tooltip] The string to use for the tooltip. If omitted,
 *                           it will default to using the passed in status 
 */
.directive('rxStatusColumn', ["rxStatusMappings", "rxStatusColumnIcons", function (rxStatusMappings, rxStatusColumnIcons) {
    return {
        templateUrl: 'templates/rxStatusColumn.html',
        restrict: 'A',
        scope: {
            status: '@',
            api: '@',
            tooltipContent: '@'
        },
        link: function (scope, element) {

            var lastStatusClass = '';

            var updateTooltip = function () {
                scope.tooltipText = scope.tooltipContent || scope.status || '';
            };

            var setStatus = function (status) {
                scope.mappedStatus = rxStatusMappings.getInternalMapping(status, scope.api);
                updateTooltip();

                // We use `fa-exclamation-circle` when no icon should be visible. Our LESS file
                // makes it transparent
                scope.statusIcon = rxStatusColumnIcons[scope.mappedStatus] || 'fa-exclamation-circle';
                element.addClass('status');
                element.removeClass(lastStatusClass);
                lastStatusClass = 'status-' + scope.mappedStatus;
                element.addClass(lastStatusClass);
                element.addClass('rx-status-column');
            };

            scope.$watch('status', function (newStatus) {
                setStatus(newStatus);
            });

            scope.$watch('tooltipContent', function () {
                updateTooltip();
            });
        }
    };
}])

/**
 * @ngdoc object
 * @name encore.ui.rxStatusColumn:rxStatusColumnIcons
 * @description
 * Mapping of internal statuses to FontAwesome icons.
 * The keys map to the names defined in rxStatusColumn.less
 */
.value('rxStatusColumnIcons', {
    'ERROR': 'fa-ban',
    'WARNING': 'fa-exclamation-triangle',
    'INFO': 'fa-info-circle',
})

/**
 * @ngdoc directive
 * @name encore.ui.rxStatusColumn:rxStatusHeader
 * @description
 * Place this attribute directive on the `<th>` for the status columns. It ensures
 * correct styling.
 *
 */
.directive('rxStatusHeader', function () {
    return {
        link: function (scope, element) {
            element.addClass('rx-status-header');
        }
    };
})

/**
 * @ngdoc service
 * @name encore.ui.rxStatusColumn:rxStatusMappings
 * @description
 * A set of methods for creating mappings between a product's notion
 * of statuses, and the status identifiers used in encore-ui
 *
 */
.factory('rxStatusMappings', function () {

    var globalMappings = {};
    var apiMappings = {};
    var rxStatusMappings = {};

    var upperCaseCallback = function (objectValue, sourceValue) {
        return sourceValue.toUpperCase();
    };

    // Takes a full set of mappings to be used globally
    rxStatusMappings.addGlobal = function (mapping) {
        _.assign(globalMappings, mapping, upperCaseCallback);
    };

    // Create a mapping specific to a particular API. This will
    // only be used when the directive receives the `api="..."`
    // attribute
    rxStatusMappings.addAPI = function (apiName, mapping) {
        var api = apiMappings[apiName] || {};
        _.assign(api, mapping, upperCaseCallback);
        apiMappings[apiName] = api;
    };

    var buildMapFunc = function (mapToString) {
        return function (statusString, api) {
            var obj = {};
            if (_.isString(statusString)) {
                obj[statusString] = mapToString;
            } else if (_.isArray(statusString)) {
                _.each(statusString, function (str) {
                    obj[str] = mapToString;
                });
            }

            if (api) {
                rxStatusMappings.addAPI(api, obj);
            } else {
                rxStatusMappings.addGlobal(obj);
            }
        };
    };

    // All four of these map a string, or an array of strings,
    // to the corresponding internal status (Active/Warning/Error/Info)
    // Each can optionally take a string as the second parameter, indictating
    // which api the mapping belongs to
    rxStatusMappings.mapToActive = buildMapFunc('ACTIVE');
    rxStatusMappings.mapToWarning = buildMapFunc('WARNING');
    rxStatusMappings.mapToError = buildMapFunc('ERROR');
    rxStatusMappings.mapToInfo = buildMapFunc('INFO');
    rxStatusMappings.mapToPending = buildMapFunc('PENDING');
    rxStatusMappings.mapToDisabled = buildMapFunc('DISABLED');
    
    rxStatusMappings.getInternalMapping = function (statusString, api) {
        if (_.has(apiMappings, api) && _.has(apiMappings[api], statusString)) {
            return apiMappings[api][statusString];
        }

        var mapped = globalMappings[statusString];

        return mapped ? mapped : statusString;
    };

    return rxStatusMappings;
    
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

angular.module('encore.ui.rxToggleSwitch', [])
/**
 *
 * @ngdoc directive
 * @name encore.ui.rxToggleSwitch:rxToggleSwitch
 * @restrict E
 * @description
 * Displays an on/off switch toggle
 *
 * @paran {string} [ng-model] The scope property to bind to
 * @param {boolean} [disabled] Indicates if the input is disabled
 * @param {function} [postHook] A function to run when the switch is toggled
 * @param {expression} [trueValue=true] The value of the scope property when the switch is on
 * @param {expression} [falseValue=false] The value of the scope property when the switch is off
 *
 * @example
 * <pre>
 *     <rx-toggle-switch ng-model="foo"></rx-toggle-switch>
 * </pre>
 */
.directive('rxToggleSwitch', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxToggleSwitch.html',
        require: 'ngModel',
        scope: {
            model: '=ngModel',
            disabled: '=?',
            postHook: '&',
            trueValue: '@',
            falseValue: '@'
        },
        link: function (scope, element, attrs, ngModelCtrl) {
            var trueValue = _.isUndefined(scope.trueValue) ? true : scope.trueValue;
            var falseValue = _.isUndefined(scope.falseValue) ? false : scope.falseValue;

            if (_.isUndefined(scope.model) || scope.model !== trueValue) {
                scope.model = falseValue;
            }

            ngModelCtrl.$formatters.push(function (value) {
                return value === trueValue;
            });

            ngModelCtrl.$parsers.push(function (value) {
                return value ? trueValue : falseValue;
            });

            ngModelCtrl.$render = function () {
                scope.state = ngModelCtrl.$viewValue ? 'ON' : 'OFF';
            };

            scope.update = function () {
                if (scope.disabled) {
                    return;
                }

                ngModelCtrl.$setViewValue(!ngModelCtrl.$viewValue);
                ngModelCtrl.$render();
                scope.postHook({ value: ngModelCtrl.$modelValue });
            };
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
    .provider('TokenInterceptor', function () {
        var exclusionList = this.exclusionList = [ 'rackcdn.com' ];

        this.$get = ["Session", function (Session) {
            return {
                request: function (config) {
                    // Don't add the X-Auth-Token if the request URL matches
                    // something in exclusionList
                    var exclude = _.some(exclusionList, function (item) {
                        if (_.contains(config.url, item)) {
                            return true;
                        }
                    });

                    if (!exclude) {
                        config.headers['X-Auth-Token'] = Session.getTokenId();
                    }
                    return config;
                }
            };
        }];
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
    .factory('UnauthorizedInterceptor', ["$q", "$window", "Session", function ($q, $window, Session) {
        var svc = {
            redirectPath: function () {
                // This brings in the entire relative URI (including the path
                // specified in a <base /> tag), along with query params as a
                // string.
                // e.g https://www.google.com/search?q=woody+wood+pecker
                // window.location.pathname = /search?q=woody+wood+pecker
                return $window.location.pathname;
            },
            redirect: function (loginPath) {
                loginPath = loginPath ? loginPath : '/login?redirect=';
                $window.location = loginPath + encodeURIComponent(svc.redirectPath());
            },
            responseError: function (response) {
                if (response.status === 401) {
                    Session.logout(); // Logs out user by removing token
                    svc.redirect();
                }

                return $q.reject(response);
            }
        };

        return svc;
    }]);
