/*
 * EncoreUI
 * https://github.com/rackerlabs/encore-ui

 * Version: 0.10.1 - 2014-05-16
 * License: Apache License, Version 2.0
 */
angular.module('encore.ui', [
  'encore.ui.tpls',
  'encore.ui.configs',
  'encore.ui.rxActiveUrl',
  'encore.ui.rxAge',
  'encore.ui.rxEnvironment',
  'encore.ui.rxApp',
  'encore.ui.rxAttributes',
  'encore.ui.rxIdentity',
  'encore.ui.rxLocalStorage',
  'encore.ui.rxSession',
  'encore.ui.rxPermission',
  'encore.ui.rxAuth',
  'encore.ui.rxBreadcrumbs',
  'encore.ui.rxButton',
  'encore.ui.rxCapitalize',
  'encore.ui.rxCompile',
  'encore.ui.rxDiskSize',
  'encore.ui.rxDropdown',
  'encore.ui.rxForm',
  'encore.ui.rxLogout',
  'encore.ui.rxModalAction',
  'encore.ui.rxNav',
  'encore.ui.rxNotify',
  'encore.ui.rxPageTitle',
  'encore.ui.rxPaginate',
  'encore.ui.rxRelatedMenu',
  'encore.ui.rxProductResources',
  'encore.ui.rxSessionStorage',
  'encore.ui.rxSortableColumn',
  'encore.ui.rxSpinner',
  'encore.ui.rxTokenInterceptor',
  'encore.ui.rxUnauthorizedInterceptor'
]);
angular.module('encore.ui.tpls', [
  'templates/rxActiveUrl.html',
  'templates/rxAccountSearch.html',
  'templates/rxApp.html',
  'templates/rxAppNav.html',
  'templates/rxAppNavItem.html',
  'templates/rxAppSearch.html',
  'templates/rxPage.html',
  'templates/rxPermission.html',
  'templates/rxBreadcrumbs.html',
  'templates/rxButton.html',
  'templates/rxDropdown.html',
  'templates/rxFormFieldset.html',
  'templates/rxFormInput.html',
  'templates/rxFormItem.html',
  'templates/rxFormOptionTable.html',
  'templates/rxFormRadio.html',
  'templates/rxFormSelect.html',
  'templates/rxModalAction.html',
  'templates/rxModalActionForm.html',
  'templates/rxNav.html',
  'templates/rxNotification.html',
  'templates/rxNotifications.html',
  'templates/rxItemsPerPage.html',
  'templates/rxPaginate.html',
  'templates/rxRelatedMenu.html',
  'templates/rxProductResources.html',
  'templates/rxSortableColumn.html'
]);
angular.module('encore.ui.configs', []).value('devicePaths', [
  {
    value: '/dev/xvdb',
    label: '/dev/xvdb'
  },
  {
    value: '/dev/xvdd',
    label: '/dev/xvdd'
  },
  {
    value: '/dev/xvde',
    label: '/dev/xvde'
  },
  {
    value: '/dev/xvdf',
    label: '/dev/xvdf'
  },
  {
    value: '/dev/xvdg',
    label: '/dev/xvdg'
  },
  {
    value: '/dev/xvdh',
    label: '/dev/xvdh'
  },
  {
    value: '/dev/xvdj',
    label: '/dev/xvdj'
  },
  {
    value: '/dev/xvdk',
    label: '/dev/xvdk'
  },
  {
    value: '/dev/xvdl',
    label: '/dev/xvdl'
  },
  {
    value: '/dev/xvdm',
    label: '/dev/xvdm'
  },
  {
    value: '/dev/xvdn',
    label: '/dev/xvdn'
  },
  {
    value: '/dev/xvdo',
    label: '/dev/xvdo'
  },
  {
    value: '/dev/xvdp',
    label: '/dev/xvdp'
  }
]);
angular.module('encore.ui.rxActiveUrl', []).directive('rxActiveUrl', [
  '$location',
  function ($location) {
    return {
      restrict: 'E',
      templateUrl: 'templates/rxActiveUrl.html',
      transclude: true,
      replace: true,
      scope: { url: '@' },
      controller: [
        '$scope',
        function ($scope) {
          $scope.isNavActive = function (pattern) {
            return $location.path().indexOf(pattern) !== -1;
          };
        }
      ],
      link: function (scope, element, attribute) {
        // Is the subset of whatever is in isNavActive part of the URL string?
        scope.navActive = scope.isNavActive(attribute.url);
      }
    };
  }
]);
angular.module('encore.ui.rxAge', []).filter('rxAge', function () {
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
      verbose = false;
    }
    // This initialization has to happen AFTER verbose init so that we can
    // use the original passed in value.
    maxUnits = _.isNumber(maxUnits) ? maxUnits : 2;
    var dateUnits = [
        days,
        hours - 24 * days,
        mins - 60 * hours
      ];
    var suffixes = [
        'd',
        'h',
        'm'
      ];
    if (verbose) {
      suffixes = [
        ' day',
        ' hour',
        ' minute'
      ];
      _.forEach(suffixes, function (suffix, index) {
        suffixes[index] += dateUnits[index] != 1 ? 's' : '';
      });
    }
    if (days > 0) {
      age.push({
        value: days,
        suffix: suffixes[0]
      });
    }
    if (hours > 0) {
      age.push({
        value: hours - 24 * days,
        suffix: suffixes[1]
      });
    }
    age.push({
      value: mins - 60 * hours,
      suffix: suffixes[2]
    });
    return _.map(age.slice(0, maxUnits), function (dateUnit, index, listOfAges) {
      if (index == listOfAges.length - 1) {
        return Math.round(dateUnit.value) + dateUnit.suffix;
      } else {
        return Math.floor(dateUnit.value) + dateUnit.suffix;
      }
    }).join(verbose ? ', ' : ' ');
  };
});
angular.module('encore.ui.rxEnvironment', ['ngSanitize']).service('Environment', [
  '$location',
  '$rootScope',
  '$log',
  function ($location, $rootScope, $log) {
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
    var environments = [
        {
          name: 'local',
          pattern: /\/\/(localhost|server)(:\d{1,4})?/,
          url: '//localhost:' + $location.port() + '/{{path}}'
        },
        {
          name: 'staging',
          pattern: /\/\/staging\.(?:.*\.)?encore.rackspace.com/,
          url: '//staging.{{tld}}.encore.rackspace.com/{{path}}'
        },
        {
          name: 'production',
          pattern: /\/\/(?!staging).*\.?encore.rackspace.com/,
          url: '//{{tld}}.encore.rackspace.com/{{path}}'
        },
        {
          name: 'unified',
          pattern: 'en.core.rackspace.com',
          url: '{{path}}'
        }
      ];
    /*
     * Checks if an environment has valid properties
     * @private
     * @param {object} environment The environment object to check
     * @returns {boolean} true if valid, false otherwise
     */
    var isValidEnvironment = function (environment) {
      var isValid = _.isString(environment.name) && (_.isString(environment.pattern) || _.isRegExp(environment.pattern)) && _.isString(environment.url);
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
        // overwrite old environemnts with new
        environments = newEnvironments;
      }
    };
    return envSvc;
  }
]).filter('rxEnvironmentUrl', [
  'Environment',
  '$interpolate',
  function (Environment, $interpolate) {
    return function (details) {
      var environment = Environment.get();
      // convert url template into full path based on details provided (if details is an object)
      var url = _.isObject(details) ? $interpolate(environment.url)(details) : details;
      return url;
    };
  }
]).filter('rxEnvironmentMatch', [
  'Environment',
  function (Environment) {
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
  }
]).directive('rxIfEnvironment', [
  '$compile',
  function ($compile) {
    return {
      restrict: 'A',
      terminal: true,
      priority: 1000,
      compile: function () {
        return {
          pre: function preLink(scope, element, attrs) {
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
  }
]);
angular.module('encore.ui.rxApp', [
  'encore.ui.rxEnvironment',
  'ngSanitize',
  'ngRoute'
]).value('encoreNav', [{
    title: 'All Tools',
    children: [
      {
        linkText: 'Account',
        key: 'accountLvlTools',
        directive: 'rx-account-search',
        visibility: '("unified" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        childVisibility: function (scope) {
          if (scope.route.current) {
            return !_.isUndefined(scope.route.current.pathParams.accountNumber);
          }
          return false;
        },
        children: [{
            href: '/accounts/{{accountNumber}}',
            linkText: 'Overview'
          }]
      },
      {
        href: '/billing',
        linkText: 'Billing',
        key: 'billing',
        visibility: '("unified" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        children: [
          {
            href: '/billing/overview/{{accountNumber}}',
            linkText: 'Overview'
          },
          {
            href: '/billing/transactions/{{accountNumber}}',
            linkText: 'Transactions'
          },
          {
            href: '/billing/usage/{{accountNumber}}',
            linkText: 'Current Usage'
          },
          {
            href: '/billing/discounts/{{accountNumber}}',
            linkText: 'Discounts'
          },
          {
            href: '/billing/payment/{{accountNumber}}/options',
            linkText: 'Payment Options'
          },
          {
            href: '/billing/preferences/{{accountNumber}}',
            linkText: 'Preferences'
          }
        ]
      },
      {
        linkText: 'Cloud',
        key: 'cloud',
        directive: 'rx-atlas-search',
        visibility: '"!unified" | rxEnvironmentMatch',
        childVisibility: function (scope) {
          // We only want to show this nav if user is already defined in the URL
          // (otherwise a user hasn't been chosen yet, so nav won't work, so we hide it)
          if (scope.route.current) {
            return !_.isUndefined(scope.route.current.pathParams.user);
          }
          return false;
        },
        childHeader: '<strong class="current-search">Current Account:</strong>' + '<span class="current-result">{{route.current.pathParams.user}}</span>',
        children: [
          {
            href: {
              tld: 'cloudatlas',
              path: '{{user}}/servers'
            },
            linkText: 'Cloud Servers'
          },
          {
            href: {
              tld: 'cloudatlas',
              path: '{{user}}/cbs/volumes'
            },
            linkText: 'Block Storage',
            children: [
              {
                href: '/{{user}}/cbs/volumes',
                linkText: 'Volumes'
              },
              {
                href: '/{{user}}/cbs/snapshots',
                linkText: 'Snapshots'
              }
            ]
          },
          {
            href: {
              tld: 'cloudatlas',
              path: '{{user}}/databases/instances'
            },
            linkText: 'Databases',
            visibility: '"!production" | rxEnvironmentMatch'
          },
          {
            href: {
              tld: 'cloudatlas',
              path: '{{user}}/loadbalancers'
            },
            linkText: 'Load Balancers',
            visibility: '"!production" | rxEnvironmentMatch'
          },
          {
            href: {
              tld: 'cloudatlas',
              path: '{{user}}/networks'
            },
            linkText: 'Networks',
            visibility: '"!production" | rxEnvironmentMatch'
          }
        ]
      },
      {
        href: '/supportservice',
        linkText: 'Support Service',
        key: 'supportService',
        visibility: '("unified" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        children: [
          {
            href: '/supportservice/browse',
            linkText: 'Browse Accounts'
          },
          {
            href: '/supportservice/admin',
            linkText: 'Admin'
          }
        ]
      },
      {
        href: {
          tld: 'cloudatlas',
          path: 'ticketqueues'
        },
        linkText: 'Ticket Queues',
        key: 'ticketQueues',
        visibility: '"!unified" | rxEnvironmentMatch',
        children: [
          {
            href: {
              tld: 'cloudatlas',
              path: 'ticketqueues/list'
            },
            linkText: 'My Selected Queues'
          },
          {
            href: {
              tld: 'cloudatlas',
              path: 'ticketqueues/my'
            },
            linkText: 'My Tickets'
          },
          {
            href: {
              tld: 'cloudatlas',
              path: 'ticketqueues/queues'
            },
            linkText: 'Queue Admin'
          }
        ]
      },
      {
        href: '/virt',
        linkText: 'Virtualization Admin',
        key: 'virtualization',
        visibility: '("unified" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        children: [
          {
            href: '/virt/vcenters',
            linkText: 'vCenters'
          },
          {
            href: '/virt/hypervisor-clusters',
            linkText: 'Hypervisor Clusters'
          },
          {
            href: '/virt/hypervisors',
            linkText: 'Hypervisors'
          },
          {
            href: '/virt/vms',
            linkText: 'VMs'
          }
        ]
      }
    ]
  }]).service('rxAppRoutes', [
  '$rootScope',
  '$location',
  '$route',
  '$interpolate',
  'rxEnvironmentUrlFilter',
  '$log',
  function ($rootScope, $location, $route, $interpolate, rxEnvironmentUrlFilter, $log) {
    var AppRoutes = function () {
      var routes = [];
      var isActive = function (item) {
        // check if url matches absUrl
        // TODO: Add Unit Tests for URLs with Query Strings in them.
        var baseUrl = $location.absUrl().split('?')[0];
        var itemUrl = _.isString(item.url) ? item.url.split('?')[0] : undefined;
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
        getIndexByKey: function (key) {
          var routeIndex = getRouteIndex(key, routes);
          if (_.isUndefined(routeIndex)) {
            $log.debug('Could not find route by key: ', key);
          }
          return routeIndex;
        },
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
  }
]).run([
  'rxAppRoutes',
  'encoreNav',
  function (rxAppRoutes, encoreNav) {
    rxAppRoutes.setAll(encoreNav);
  }
]).directive('rxApp', [
  'rxAppRoutes',
  function (rxAppRoutes) {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/rxApp.html',
      scope: {
        siteTitle: '@?',
        menu: '=?',
        collapsibleNav: '@',
        collapsedNav: '=?',
        newInstance: '@?'
      },
      link: function (scope) {
        scope.appRoutes = scope.newInstance ? rxAppRoutes.createInstance() : rxAppRoutes;
        // we only want to set new menu data if a new instance of rxAppRoutes was created
        // or if scope.menu was defined
        if (scope.newInstance || scope.menu) {
          scope.appRoutes.setAll(scope.menu);
        }
        if (!_.isBoolean(scope.collapsedNav)) {
          scope.collapsedNav = false;
        }
        scope.collapseMenu = function () {
          scope.collapsedNav = !scope.collapsedNav;
        };
      }
    };
  }
]).directive('rxPage', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/rxPage.html',
    scope: {
      title: '=',
      subtitle: '='
    },
    link: function (scope, element) {
      // Remove the title attribute, as it will cause a popup to appear when hovering over page content
      // @see https://github.com/rackerlabs/encore-ui/issues/251
      element.removeAttr('title');
    }
  };
}).directive('rxAppNav', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/rxAppNav.html',
    scope: {
      items: '=',
      level: '='
    }
  };
}).directive('rxAppNavItem', [
  '$compile',
  '$location',
  '$route',
  function ($compile, $location, $route) {
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
      var rxNavTemplate = '<rx-app-nav items="item.children" level="' + childLevel + '">' + '</rx-app-nav>';
      if (angular.isArray(scope.item.children)) {
        injectContent('.item-children', rxNavTemplate);
      }
    };
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/rxAppNavItem.html',
      link: linker,
      scope: { item: '=' },
      controller: [
        '$scope',
        '$location',
        function ($scope, $location) {
          // provide `route` as a scope property so that links can tie into them
          $scope.route = $route;
          $scope.isVisible = function (visibility) {
            if (_.isUndefined(visibility)) {
              // if undefined, default to true
              return true;
            }
            return $scope.$eval(visibility, { location: $location });
          };
          $scope.toggleNav = function (ev, href) {
            // if no href present, simply toggle active state
            if (_.isEmpty(href)) {
              ev.preventDefault();
              $scope.item.active = !$scope.item.active;
            }  // otherwise, let the default nav do it's thing
          };
        }
      ]
    };
  }
]).directive('rxAppSearch', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/rxAppSearch.html',
    scope: {
      placeholder: '@?',
      model: '=?',
      submit: '=?'
    }
  };
}).directive('rxAtlasSearch', [
  '$location',
  function ($location) {
    return {
      template: '<rx-app-search placeholder="Search for user..." submit="searchAccounts"></rx-app-search>',
      restrict: 'E',
      link: function (scope) {
        scope.searchAccounts = function (searchValue) {
          $location.path(searchValue + '/servers/');
        };
      }
    };
  }
]).directive('rxAccountSearch', [
  '$location',
  function ($location) {
    return {
      templateUrl: 'templates/rxAccountSearch.html',
      restrict: 'E',
      link: function (scope) {
        scope.fetchAccount = function (accountNumber) {
          if (accountNumber) {
            $location.path('/accounts/' + accountNumber);
          }
        };
      }
    };
  }
]).directive('rxTicketSearch', function () {
  return {
    template: '<rx-app-search placeholder="Search for a Ticket..." submit="searchTickets"></rx-app-search>',
    restrict: 'E',
    link: function (scope) {
      // TQTicketSelection.loadTicket.bind(TQTicketSelection)
      scope.searchTickets = function () {
      };
    }
  };
});
angular.module('encore.ui.rxAttributes', []).directive('rxAttributes', [
  '$parse',
  '$compile',
  function ($parse, $compile) {
    // @see http://stackoverflow.com/questions/19224028/add-directives-from-directive-in-angularjs
    return {
      restrict: 'A',
      terminal: true,
      priority: 1000,
      compile: function (el, attrs) {
        return {
          pre: function preLink(scope, element) {
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
  }
]);
angular.module('encore.ui.rxIdentity', ['ngResource']).factory('Identity', [
  '$resource',
  function ($resource) {
    var authSvc = $resource('/api/identity/:action', {}, {
        loginWithJSON: {
          method: 'POST',
          isArray: false,
          params: { action: 'tokens' }
        },
        validate: {
          method: 'GET',
          url: '/api/identity/login/session/:id',
          isArray: false
        }
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
  }
]);
/*jshint proto:true*/
angular.module('encore.ui.rxLocalStorage', []).service('LocalStorage', [
  '$window',
  function ($window) {
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
  }
]);
angular.module('encore.ui.rxSession', ['encore.ui.rxLocalStorage']).factory('Session', [
  'LocalStorage',
  function (LocalStorage) {
    var TOKEN_ID = 'encoreSessionToken';
    var session = {};
    /**
        * Dot walks the token without throwing an error.
        * If key exists, returns value otherwise returns undefined.
        */
    session.getByKey = function (key) {
      var tokenValue, token = session.getToken(), keys = key ? key.split('.') : undefined;
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
  }
]);
angular.module('encore.ui.rxPermission', ['encore.ui.rxSession']).factory('Permission', [
  'Session',
  function (Session) {
    var permissionSvc = {};
    permissionSvc.getRoles = function () {
      var token = Session.getToken();
      return token && token.access && token.access.user && token.access.user.roles ? token.access.user.roles : [];
    };
    permissionSvc.hasRole = function (role) {
      return _.some(permissionSvc.getRoles(), function (item) {
        return item.name === role;
      });
    };
    return permissionSvc;
  }
]).directive('rxPermission', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: { role: '@' },
    templateUrl: 'templates/rxPermission.html',
    controller: [
      '$scope',
      'Permission',
      function ($scope, Permission) {
        $scope.hasRole = function () {
          return Permission.hasRole($scope.role);
        };
      }
    ]
  };
});
angular.module('encore.ui.rxAuth', [
  'encore.ui.rxIdentity',
  'encore.ui.rxSession',
  'encore.ui.rxPermission'
]).factory('Auth', [
  'Identity',
  'Session',
  'Permission',
  function (Identity, Session, Permission) {
    var svc = {};
    _.assign(svc, Identity);
    _.assign(svc, Session);
    _.assign(svc, Permission);
    return svc;
  }
]);
angular.module('encore.ui.rxBreadcrumbs', []).factory('rxBreadcrumbsSvc', function () {
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
}).directive('rxBreadcrumbs', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/rxBreadcrumbs.html',
    controller: [
      '$scope',
      'rxBreadcrumbsSvc',
      function ($scope, rxBreadcrumbsSvc) {
        $scope.breadcrumbs = rxBreadcrumbsSvc;
      }
    ],
    scope: { visible: '&' }
  };
});
angular.module('encore.ui.rxButton', []).directive('rxButton', function () {
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
angular.module('encore.ui.rxCapitalize', []).filter('rxCapitalize', function () {
  return function (input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };
});
angular.module('encore.ui.rxCompile', []).directive('rxCompile', [
  '$compile',
  function ($compile) {
    return function (scope, element, attrs) {
      scope.$watch(function (scope) {
        // watch the 'compile' expression for changes
        return scope.$eval(attrs.rxCompile);
      }, function (value) {
        // when the 'compile' expression changes
        // assign it into the current DOM
        element.html(value);
        // compile the new DOM and link it to the current
        // scope.
        // NOTE: we only compile .childNodes so that
        // we don't get into infinite loop compiling ourselves
        $compile(element.contents())(scope);
      });
    };
  }
]);
angular.module('encore.ui.rxDiskSize', []).filter('rxDiskSize', function () {
  return function (size) {
    var units = [
        'GB',
        'TB',
        'PB'
      ];
    var unit = Math.floor(Math.log(size) / Math.log(1000));
    return size / Math.pow(1000, Math.floor(unit)).toFixed(1) + ' ' + units[unit];
  };
});
angular.module('encore.ui.rxDropdown', []).directive('rxDropdown', [
  '$rootScope',
  function ($rootScope) {
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
  }
]);
angular.module('encore.ui.rxForm', ['ngSanitize']).directive('rxFormItem', function () {
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
}).directive('rxFormFieldset', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/rxFormFieldset.html',
    transclude: true,
    scope: {
      legend: '@',
      description: '@'
    }
  };
}).directive('rxFormInput', function () {
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
}).directive('rxFormRadio', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/rxFormRadio.html',
    scope: {
      options: '=',
      fieldId: '@',
      model: '='
    }
  };
}).directive('rxFormSelect', function () {
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
}).directive('rxFormOptionTable', [
  '$interpolate',
  function ($interpolate) {
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
      controller: [
        '$scope',
        function ($scope) {
          var determineMatch = function (val1, val2) {
            if (_.isUndefined(val1) || _.isUndefined(val2)) {
              return false;
            }
            return val1 == val2;
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
                return val == $scope.model;
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
      ]
    };
  }
]);
angular.module('encore.ui.rxLogout', []).directive('rxLogout', [
  '$rootScope',
  'Auth',
  function ($rootScope, Auth) {
    return {
      restrict: 'A',
      controller: [
        '$scope',
        '$window',
        function ($scope, $window) {
          var success = function () {
            // fire event to notify auth service about logout
            $rootScope.$broadcast('event:auth-loginRequired');
          };
          $scope.logout = function () {
            Auth.logout(success);
            $window.location = '/login';
          };
        }
      ],
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
  }
]);
angular.module('encore.ui.rxModalAction', ['ui.bootstrap']).directive('rxModalForm', function () {
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
}).controller('rxModalCtrl', [
  '$scope',
  '$modalInstance',
  '$rootScope',
  function ($scope, $modalInstance, $rootScope) {
    // define a controller for the modal to use
    $scope.submit = function () {
      $modalInstance.close($scope);
    };
    $scope.cancel = $modalInstance.dismiss;
    // cancel out of the modal if the route is changed
    $rootScope.$on('$routeChangeSuccess', $modalInstance.dismiss);
  }
]).directive('rxModalAction', [
  '$modal',
  function ($modal) {
    var createModal = function (config, scope) {
      var modal = $modal.open({
          templateUrl: config.templateUrl,
          controller: 'rxModalCtrl',
          scope: scope
        });
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
  }
]);
angular.module('encore.ui.rxNav', ['encore.ui.rxDropdown']).directive('rxNav', function () {
  return {
    templateUrl: 'templates/rxNav.html',
    restrict: 'E',
    scope: {
      'searchFunction': '&',
      'placeholderText': '@',
      'links': '=?',
      'logo': '=?'
    },
    controller: [
      '$scope',
      function ($scope) {
        $scope.bookmarks = {
          linkText: 'Bookmarks',
          items: [{
              title: 'Bookmarks go here!',
              path: '/'
            }]
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
          items: [{
              title: 'Ticket Queues',
              path: '/ticketqueues/',
              className: ''
            }]
        };
      }
    ]
  };
});
angular.module('encore.ui.rxNotify', ['ngSanitize']).directive('rxNotification', function () {
  return {
    scope: { type: '@' },
    transclude: true,
    restrict: 'E',
    templateUrl: 'templates/rxNotification.html'
  };
}).directive('rxNotifications', [
  'rxNotify',
  function (rxNotify) {
    return {
      scope: { stack: '@?' },
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/rxNotifications.html',
      controller: [
        '$scope',
        function ($scope) {
          /*
             * Calls rxNotify service to remove a message from a stack
             * @param {object} message The message object to remove.
             */
          $scope.dismiss = function (message) {
            rxNotify.dismiss(message);
          };
        }
      ],
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
  }
]).service('rxNotify', [
  '$timeout',
  '$rootScope',
  function ($timeout, $rootScope) {
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
        stacks[key] = _.reject(stacks[key], { 'dismiss': messageDefaults.dismiss });
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
      var message = { text: text };
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
    $rootScope.$on('$routeChangeSuccess', function processRouteChange() {
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
  }
]).factory('rxPromiseNotifications', [
  'rxNotify',
  '$rootScope',
  '$q',
  '$interpolate',
  function (rxNotify, $rootScope, $q, $interpolate) {
    var scope = $rootScope.$new();
    /*
     * Removes 'loading' message from stack
     * @private
     * @this Scope used for storing messages data
     */
    var dismissLoading = function () {
      rxNotify.dismiss(this.loadingMsg);
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
        var msgOpts = { type: msgType };
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
      var loadingOpts = { loading: true };
      if (stack) {
        loadingOpts.stack = stack;
      }
      scope[uid].loadingMsg = rxNotify.add(msgs.loading, loadingOpts);
      // bind promise to show message actions
      deferred.promise.then(showMessage.bind(scope[uid], 'success'), showMessage.bind(scope[uid], 'error')).finally(dismissLoading.bind(scope[uid]));
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
    return { add: add };
  }
]);
angular.module('encore.ui.rxPageTitle', []).factory('rxPageTitle', [
  '$document',
  function ($document) {
    var suffix = '', title = '';
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
  }
]);
angular.module('encore.ui.rxPaginate', []).directive('rxPaginate', function () {
  return {
    templateUrl: 'templates/rxPaginate.html',
    replace: true,
    restrict: 'E',
    scope: {
      pageTracking: '=',
      numberOfPages: '@'
    }
  };
}).factory('PageTracking', function () {
  function PageTrackingObject(opts) {
    this.settings = _.defaults(opts, {
      itemsPerPage: 10,
      pagesToShow: 5,
      pageNumber: 0,
      pageInit: false,
      total: 0,
      showAll: false
    });
  }
  return {
    createInstance: function (options) {
      options = options ? options : {};
      var tracking = new PageTrackingObject(options);
      return tracking.settings;
    }
  };
}).filter('Paginate', [
  'PageTracking',
  function (PageTracking) {
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
        var last = added > items.length ? items.length : added;
        pager.first = first + 1;
        pager.last = last;
        return items.slice(first, last);
      }
    };
  }
]).filter('Page', [
  'PageTracking',
  function (PageTracking) {
    return function (pager) {
      if (!pager) {
        pager = PageTracking.createInstance();
      }
      var displayPages = [],
        // the next four variables determine the number of pages to show ahead of and behind the current page
        pagesToShow = pager.pagesToShow || 5, pageDelta = (pagesToShow - 1) / 2, pagesAhead = Math.ceil(pageDelta), pagesBehind = Math.floor(pageDelta);
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
  }
]);
angular.module('encore.ui.rxRelatedMenu', []).directive('rxRelatedMenu', function () {
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
      scope.menuPosition = _.isEmpty(scope.position) ? 'left' : scope.position;
      scope.state = _.isEmpty(scope.defaultState) ? 'open' : scope.defaultState == 'open';
      scope.isCollapsable = scope.collapsable();
      scope.toggleRelatedMenu = function () {
        scope.state = !scope.state;
      };
    }
  };
});
angular.module('encore.ui.rxProductResources', [
  'encore.ui.rxActiveUrl',
  'encore.ui.rxRelatedMenu'
]).directive('rxProductResources', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/rxProductResources.html',
    scope: { user: '=' }
  };
});
/*jshint proto:true*/
angular.module('encore.ui.rxSessionStorage', []).service('SessionStorage', [
  '$window',
  function ($window) {
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
  }
]);
angular.module('encore.ui.rxSortableColumn', []).directive('rxSortableColumn', function () {
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
}).factory('rxSortUtil', function () {
  var util = {};
  util.getDefault = function (property, reversed) {
    var prop = property ? property : 'name';
    return {
      predicate: prop,
      reverse: reversed
    };
  };
  util.sortCol = function ($scope, predicate) {
    var reverse = $scope.sort.predicate === predicate ? !$scope.sort.reverse : false;
    $scope.sort = {
      reverse: reverse,
      predicate: predicate
    };
    // This execution should be moved outside of the scope for rxSortUtil
    // already rxSortUtil.sortCol has to be wrapped, and can be implemented there
    // rather than have rxSortUtil.sortCol check/expect for a pager to be present.
    if ($scope.pager) {
      $scope.pager.pageNumber = 0;
    }
  };
  return util;
});
angular.module('encore.ui.rxSpinner', []).directive('rxSpinner', function () {
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
angular.module('encore.ui.rxTokenInterceptor', ['encore.ui.rxSession']).factory('TokenInterceptor', [
  'Session',
  function (Session) {
    return {
      request: function (config) {
        config.headers['X-Auth-Token'] = Session.getTokenId();
        return config;
      }
    };
  }
]);
angular.module('encore.ui.rxUnauthorizedInterceptor', []).factory('UnauthorizedInterceptor', [
  '$q',
  '$window',
  '$location',
  function ($q, $window, $location) {
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
          $window.location = '/login?redirect=' + returnPath;
        }
        return $q.reject(response);
      }
    };
  }
]);
angular.module('templates/rxActiveUrl.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxActiveUrl.html', '<li ng-class="{ selected: navActive }" ng-transclude=""></li>');
  }
]);
angular.module('templates/rxAccountSearch.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxAccountSearch.html', '<div class="rx-app-search"><form name="search" role="search" ng-submit="fetchAccount(model)"><input type="text" placeholder="Search by Account Number..." ng-model="model" class="form-item search-input" ng-required="" ng-pattern="/(^\\d{1,9}$|^$)/"><button type="submit" class="search-action" ng-disabled="!search.$valid"><span class="visually-hidden">Search</span></button></form></div>');
  }
]);
angular.module('templates/rxApp.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxApp.html', '<div class="rx-app" ng-class="{collapsible: collapsibleNav === \'true\', collapsed: collapsedNav}" ng-cloak=""><nav class="rx-app-menu"><header class="site-branding"><h1 class="site-title">{{ siteTitle || \'Encore\' }}</h1><button class="collapsible-toggle btn-link" ng-if="collapsibleNav === \'true\'" ng-click="collapseMenu()" title="{{ (collapsedNav) ? \'Show\' : \'Hide\' }} Main Menu"><span class="visually-hidden">{{ (collapsedNav) ? \'Show\' : \'Hide\' }} Main Menu</span><div class="double-chevron" ng-class="{\'double-chevron-left\': !collapsedNav}"></div></button><div class="site-options"><a href="#" rx-logout="" class="site-logout">Logout</a></div></header><nav class="rx-app-nav"><div ng-repeat="section in appRoutes.getAll()" class="nav-section nav-section-{{ section.type || \'all\' }}"><h2 class="nav-section-title">{{ section.title }}</h2><rx-app-nav items="section.children" level="1"></rx-app-nav></div></nav></nav><div class="rx-app-content" ng-transclude=""></div></div>');
  }
]);
angular.module('templates/rxAppNav.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxAppNav.html', '<div class="rx-app-nav rx-app-nav-level-{{level}}"><ul class="rx-app-nav-group"><rx-app-nav-item ng-repeat="item in items" item="item"></rx-app-nav-item></ul></div>');
  }
]);
angular.module('templates/rxAppNavItem.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxAppNavItem.html', '<li class="rx-app-nav-item" ng-show="isVisible(item.visibility)" ng-class="{\'has-children\': item.children.length > 0, active: item.active }"><a href="{{ item.url }}" class="item-link" ng-click="toggleNav($event, item.href)">{{item.linkText}}</a><div class="item-content" ng-show="item.active && (item.directive || item.children)"><div class="item-directive" ng-show="item.directive"></div><div class="item-children" ng-show="item.children && isVisible(item.childVisibility)"><div class="child-header" ng-if="item.childHeader" rx-compile="item.childHeader"></div></div></div></li>');
  }
]);
angular.module('templates/rxAppSearch.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxAppSearch.html', '<div class="rx-app-search"><form role="search" ng-submit="submit(model)"><input type="text" placeholder="{{ placeholder }}" ng-model="model" class="form-item search-input" ng-required=""><button type="submit" class="search-action"><span class="visually-hidden">Search</span></button></form></div>');
  }
]);
angular.module('templates/rxPage.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxPage.html', '<div class="rx-page"><header class="page-header clearfix"><rx-breadcrumbs></rx-breadcrumbs></header><div class="page-body"><rx-notifications></rx-notifications><div class="page-titles"><h2 class="page-title" ng-bind-html="title"></h2><h3 class="page-subtitle" ng-bind-html="subtitle"></h3></div><div class="page-content" ng-transclude=""></div></div></div>');
  }
]);
angular.module('templates/rxPermission.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxPermission.html', '<div class="rxPermission" ng-if="hasRole(role)" ng-transclude=""></div>');
  }
]);
angular.module('templates/rxBreadcrumbs.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxBreadcrumbs.html', '<ol class="rx-breadcrumbs"><li ng-repeat="breadcrumb in breadcrumbs.getAll()" class="breadcrumb"><ng-switch on="$last"><span ng-switch-when="true" class="breadcrumb-name last" ng-bind="breadcrumb.name"></span> <span ng-switch-default=""><a href="{{breadcrumb.path}}" ng-class="{first: $first}" class="breadcrumb-name" ng-bind="breadcrumb.name"></a></span> {{user}}</ng-switch></li></ol>');
  }
]);
angular.module('templates/rxButton.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxButton.html', '<button type="submit" class="button primary rx-button" ng-disabled="toggle">{{ toggle ? toggleMsg : defaultMsg }}<div class="spinner" ng-show="toggle"><i class="pos1"></i> <i class="pos2"></i> <i class="pos3"></i></div></button>');
  }
]);
angular.module('templates/rxDropdown.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxDropdown.html', '<div class="dropdown"><a href="#" ng-click="toggle($event)" class="nav-link">{{menu.linkText}} <b class="caret"></b></a><ol class="nav-dropdown group" ng-show="visible"><li ng-repeat="item in menu.items" class="item {{item.className}}"><a href="{{item.path}}" class="item-target">{{item.title}}</a><ul class="dropdown-menu" ng-show="item.sub"><li ng-repeat="subItem in item.sub"><a href="{{subItem.path}}">{{subItem.title}}</a></li></ul></li></ol></div>');
  }
]);
angular.module('templates/rxFormFieldset.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxFormFieldset.html', '<div class="form-item rx-form-fieldset"><fieldset><legend class="field-legend">{{legend}}:</legend><div class="field-input" ng-transclude=""></div><span ng-if="description" class="field-description" ng-bind-html="description"></span></fieldset></div>');
  }
]);
angular.module('templates/rxFormInput.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxFormInput.html', '<div class="form-item"><label for="{{fieldId}}" class="field-label">{{label}}:</label><div><input type="{{type}}" ng-required="{{required}}" id="{{fieldId}}" ng-min-length="{{minLength}}" ng-max-length="{{maxLength}}" max="{{max}}" min="{{min}}" name="{{name}}" ng-model="model" value="{{value}}" class="field-input"><span class="field-suffix" ng-if="suffix">{{suffix}}</span></div><label ng-if="description" class="field-description" for="{{fieldId}}">{{description}}</label></div>');
  }
]);
angular.module('templates/rxFormItem.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxFormItem.html', '<div class="form-item"><label><span class="field-label">{{label}}:</span> <span class="field-prefix" ng-if="prefix">{{prefix}}</span>  <span class="field-input" ng-transclude=""></span> <span class="field-suffix" ng-if="suffix">{{suffix}}</span> <span ng-if="description" class="field-description" ng-bind-html="description"></span></label></div>');
  }
]);
angular.module('templates/rxFormOptionTable.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxFormOptionTable.html', '<div class="form-item"><table class="table-striped option-table" ng-show="data.length > 0"><thead><tr><th></th><th ng-repeat="column in columns" scope="col">{{column.label}}</th></tr></thead><tr ng-repeat="row in data" ng-class="{current: isCurrent(row.value), selected: isSelected(row.value, $index)}"><td class="option-table-input" ng-switch="type"><label><input type="radio" ng-switch-when="radio" id="{{fieldId}}_{{$index}}" ng-model="$parent.$parent.model" value="{{row.value}}" name="{{fieldId}}" ng-disabled="isCurrent(row.value)" ng-attributes="{\'ng-required\': required}"><input type="checkbox" ng-switch-when="checkbox" id="{{fieldId}}_{{$index}}" ng-model="$parent.model[$index]" rx-attributes="{\'ng-true-value\': row.value, \'ng-false-value\': row.falseValue}"></label></td><td ng-repeat="column in columns"><label for="{{fieldId}}_{{$parent.$index}}"><span ng-bind-html="getContent(column, row)"></span> <span ng-show="isCurrent(row.value)">{{column.selectedLabel}}</span></label></td></tr></table></div>');
  }
]);
angular.module('templates/rxFormRadio.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxFormRadio.html', '<fieldset><div ng-repeat="option in options" class="form-item"><label for="{{fieldId}}_{{$index}}" class="field-label">{{option.label}}:</label><input type="radio" id="{{fieldId}}_{{$index}}" ng-model="$parent.model" value="{{option.value}}" name="{{fieldId}}" class="field-input"><p class="field-description">{{option.description}}</p></div></fieldset>');
  }
]);
angular.module('templates/rxFormSelect.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxFormSelect.html', '<fieldset class="form-item"><label for="{{fieldId}}" class="field-label">{{label}}:</label><div class="field-select"><select name="{{fieldId}}" id="{{fieldId}}" ng-model="model" ng-required="required"><option ng-repeat="option in options" value="{{option.value}}" ng-disabled="option.disabled" ng-selected="{{option.value == model}}">{{option.label}}</option></select></div></fieldset>');
  }
]);
angular.module('templates/rxModalAction.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxModalAction.html', '<span class="modal-link-container rx-modal-action"><a href="#" class="modal-link {{classes}}" ng-click="showModal($event)" ng-transclude=""></a></span>');
  }
]);
angular.module('templates/rxModalActionForm.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxModalActionForm.html', '<div class="modal-header"><h3 class="modal-title">{{title}}</h3><h4 class="modal-subtitle" ng-if="subtitle">{{subtitle}}</h4><button class="modal-close btn-link" ng-click="$parent.cancel()"><span class="visually-hidden">Close Window</span></button></div><div class="modal-body"><div ng-show="$parent.isLoading" class="loading"><i class="spinner gray"></i></div><form ng-hide="$parent.isLoading" name="modalActionForm" class="modal-form rx-form" ng-transclude=""></form></div><div class="modal-footer"><button class="submit form-action" ng-click="$parent.submit()" type="submit" ng-disabled="modalActionForm.$invalid">{{submitText || "Submit"}}</button> <button class="cancel form-action" ng-click="$parent.cancel()">{{cancelText || "Cancel"}}</button></div>');
  }
]);
angular.module('templates/rxNav.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxNav.html', '<header class="site-header"><h1 class="logo" ng-hide="logo"><a href="/">Encore</a></h1><div ng-if="logo" ng-bind-html="logo"></div><rx-global-search placeholder-text="{{ placeholderText }}" search-function="searchFunction()"></rx-global-search><nav class="main-nav"><ul><li class="nav-item" ng-hide="links"><rx-dropdown menu="bookmarks"></rx-dropdown></li><li class="nav-item" ng-hide="links"><rx-dropdown menu="internalTools"></rx-dropdown></li><li class="nav-item" ng-show="links" ng-repeat="link in links"><rx-dropdown menu="link"></rx-dropdown></li></ul></nav><nav class="user-nav"><ul><li class="nav-item"><a href="/login" rx-logout="" class="nav-link">Log out</a></li></ul></nav><div class="sub-header"><nav class="site-breadcrumbs"><rx-breadcrumbs></rx-breadcrumbs></nav><a class="bookmark" href="#"><i class="fa fa-bookmark"></i> &nbsp;Bookmark this page</a></div></header>');
  }
]);
angular.module('templates/rxNotification.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxNotification.html', '<div class="rx-notifications"><div class="rx-notification notification-{{type}}"><span class="notification-text" ng-transclude=""></span></div></div>');
  }
]);
angular.module('templates/rxNotifications.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxNotifications.html', '<div class="rx-notifications" ng-show="messages.length > 0"><div ng-repeat="message in messages" class="rx-notification notification-{{message.type}}" ng-class="{\'notification-loading\': message.loading}" rx-spinner="" toggle="message.loading" ng-init="loading = message.loading"><span class="notification-text" ng-bind-html="message.text"></span> <button ng-click="dismiss(message)" class="notification-dismiss btn-link" ng-if="message.dismissable && !message.loading">&times; <span class="visually-hidden">Dismiss Message</span></button></div></div>');
  }
]);
angular.module('templates/rxItemsPerPage.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxItemsPerPage.html', '<form id="itemsPerPageForm" class="itemsPerPage"><label for="itemsPerPageSelector">{{ label }}</label><select name="itemsPerPageSelector" id="itemsPerPageSelector" ng-model="pager.itemsPerPage" ng-change="updatePaging()"><option ng-repeat="i in pager.itemSizeList">{{ i }}</option></select></form>');
  }
]);
angular.module('templates/rxPaginate.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxPaginate.html', '<div class="rx-paginate"><ul class="pagination"><li ng-class="{disabled: pageTracking.pageNumber == 0}" class="pagination-first"><a ng-click="pageTracking.pageNumber = 0" ng-hide="pageTracking.pageNumber == 0">First</a> <span ng-show="pageTracking.pageNumber == 0">First</span></li><li ng-class="{disabled: pageTracking.pageNumber == 0}" class="pagination-prev"><a ng-click="pageTracking.pageNumber = (pageTracking.pageNumber - 1)" ng-hide="pageTracking.pageNumber == 0">\xab Prev</a> <span ng-show="pageTracking.pageNumber == 0">\xab Prev</span></li><li ng-repeat="n in pageTracking | Page" ng-class="{active: n == pageTracking.pageNumber, \'page-number-last\': n == pageTracking.totalPages - 1}" class="pagination-page"><a ng-click="pageTracking.pageNumber = n">{{n + 1}}</a></li><li ng-class="{disabled: pageTracking.pageNumber == pageTracking.totalPages - 1 || pageTracking.total == 0}" class="pagination-next"><a ng-click="pageTracking.pageNumber = (pageTracking.pageNumber + 1)" ng-hide="pageTracking.pageNumber == pageTracking.totalPages - 1 || pageTracking.total == 0">Next \xbb</a> <span ng-show="pageTracking.pageNumber == pageTracking.totalPages - 1">Next \xbb</span></li><li ng-class="{disabled: pageTracking.pageNumber == pageTracking.totalPages - 1}" class="pagination-last"><a ng-click="pageTracking.pageNumber = pageTracking.totalPages - 1" ng-hide="pageTracking.pageNumber == pageTracking.totalPages - 1">Last</a> <span ng-show="pageTracking.pageNumber == pageTracking.totalPages - 1">Last</span></li></ul></div>');
  }
]);
angular.module('templates/rxRelatedMenu.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxRelatedMenu.html', '<div class="related-menu" ng-class="{\'menu-left\': menuPosition == \'left\', \'menu-right\': menuPosition == \'right\', \'collapsable\': isCollapsable, \'menu-shown\': state}"><div ng-if="isCollapsable" class="menu-toggle" ng-click="toggleRelatedMenu()"><i class="fa" ng-class="{\'fa-angle-double-left\': (state&&(menuPosition == \'left\'))||(!state&&(menuPosition == \'right\')), \'fa-angle-double-right\': (!state&&(menuPosition == \'left\'))||(state&&(menuPosition == \'right\'))} "></i></div><div class="menu-content" ng-transclude=""></div></div>');
  }
]);
angular.module('templates/rxProductResources.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxProductResources.html', '<h5>Available Product Resources</h5><ul class="product-resources"><rx-active-url url="/servers"><a href="/{{user}}/servers/" class="ico-servers">Cloud Servers <span>OpenStack / Nova</span></a></rx-active-url><rx-active-url url="/cbs/"><a href="/{{user}}/cbs/volumes/" class="ico-block-storage">Block Storage <span>OpenStack / Cinder</span></a><ul class="sub-products"><rx-active-url url="/cbs/volumes"><a href="/{{user}}/cbs/volumes/">Volumes</a></rx-active-url><rx-active-url url="/cbs/snapshots"><a href="/{{user}}/cbs/snapshots/">Snapshots</a></rx-active-url></ul></rx-active-url><rx-active-url url="/databases/instances" rx-if-environment="!production"><a href="/{{user}}/databases/instances/" class="ico-databases">Databases <span>OpenStack / Trove</span></a></rx-active-url><rx-active-url url="/loadbalancers" rx-if-environment="!production"><a href="/{{user}}/loadbalancers/" class="ico-servers">Load Balancers <span>OpenStack / Neutron</span></a></rx-active-url></ul>');
  }
]);
angular.module('templates/rxSortableColumn.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('templates/rxSortableColumn.html', '<div class="rx-sortable-column"><button class="sort-action btn-link" ng-click="sortMethod({property:sortProperty})"><span class="visually-hidden">Sort by&nbsp;</span> <span ng-transclude=""></span></button> <i class="sort-icon" ng-style="{visibility: predicate === \'{{sortProperty}}\' && \'visible\' || \'hidden\'}" ng-class="{\'desc\': !reverse, \'asc\': reverse}"><span class="visually-hidden">Sorted {{reverse ? \'ascending\' : \'descending\'}}</span></i></div>');
  }
]);