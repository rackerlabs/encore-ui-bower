/*
 * EncoreUI
 * https://github.com/rackerlabs/encore-ui

 * Version: 0.12.2 - 2014-06-25
 * License: Apache License, Version 2.0
 */
angular.module('encore.ui', [
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
  'encore.ui.rxFavicon',
  'encore.ui.rxFeedback',
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
  'encore.ui.rxToggle',
  'encore.ui.rxTokenInterceptor',
  'encore.ui.rxUnauthorizedInterceptor',
  'cfp.hotkeys',
  'ui.bootstrap'
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
]).constant('feedbackApi', '/api/feedback');
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
          name: 'unified-preprod',
          pattern: /\/\/(\w+\.)encore.rackspace.com/,
          url: '{{path}}'
        },
        {
          name: 'unified',
          pattern: 'encore.rackspace.com',
          url: '{{path}}'
        },
        {
          name: 'unified-prod',
          pattern: /\/\/(?=[\w.]+)encore.rackspace.com/,
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
        // overwrite old environments with new
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
  'ngRoute',
  'cfp.hotkeys'
]).value('encoreNav', [{
    title: 'All Tools',
    children: [
      {
        linkText: 'Account',
        key: 'accountLvlTools',
        directive: 'rx-account-search',
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
        linkText: 'Billing',
        key: 'billing',
        directive: 'rx-billing-search',
        visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        childVisibility: function (scope) {
          // We only want to show this nav if accountNumber is already defined in the URL
          // (otherwise a accountNumber hasn't been chosen yet, so nav won't work, so we hide it)
          if (scope.route.current) {
            return !_.isUndefined(scope.route.current.pathParams.accountNumber);
          }
          return false;
        },
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
            href: '/billing/payment/{{accountNumber}}/options',
            linkText: 'Payment Options'
          },
          {
            href: '/billing/purchase-orders/{{accountNumber}}',
            linkText: 'Purchase Orders'
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
        visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
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
              },
              {
                href: '/cloud/{{user}}/cbs/snapshots',
                linkText: 'Snapshots'
              }
            ]
          },
          {
            href: '/cloud/{{user}}/databases/instances',
            linkText: 'Databases',
            visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)'
          },
          {
            href: '/cloud/{{user}}/loadbalancers',
            linkText: 'Load Balancers',
            visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)'
          },
          {
            href: '/cloud/{{user}}/networks',
            linkText: 'Networks',
            visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)'
          }
        ]
      },
      {
        href: '/support',
        linkText: 'Support Service',
        key: 'supportService',
        directive: 'rx-support-service-search'
      },
      {
        href: '/ticketing',
        linkText: 'Ticketing',
        key: 'ticketing',
        children: [
          {
            href: '/ticketing/list',
            linkText: 'My Selected Queues'
          },
          {
            href: '/ticketing/my',
            linkText: 'My Tickets'
          },
          {
            href: '/ticketing/queues',
            linkText: 'Queue Admin'
          }
        ]
      },
      {
        href: '/virt',
        linkText: 'Virtualization Admin',
        key: 'virtualization',
        visibility: '("unified-preprod" | rxEnvironmentMatch) || ("local" | rxEnvironmentMatch)',
        directive: 'rx-virt-search'
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
  'hotkeys',
  function (rxAppRoutes, hotkeys) {
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
        if (scope.collapsibleNav) {
          hotkeys.add({
            combo: 'ctrl+h',
            description: 'Show/hide the main menu',
            callback: function () {
              scope.collapsedNav = !scope.collapsedNav;
            }
          });
        }
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
      submit: '=?',
      pattern: '@?'
    }
  };
}).directive('rxAtlasSearch', [
  '$window',
  function ($window) {
    return {
      template: '<rx-app-search placeholder="Search for user..." submit="searchAccounts"></rx-app-search>',
      restrict: 'E',
      link: function (scope) {
        scope.searchAccounts = function (searchValue) {
          if (!_.isEmpty(searchValue)) {
            $window.location = '/cloud/' + searchValue + '/servers/';
          }
        };
      }
    };
  }
]).directive('rxAccountSearch', [
  '$window',
  function ($window) {
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
  }
]).directive('rxBillingSearch', [
  '$window',
  function ($window) {
    return {
      template: '<rx-app-search placeholder="Fetch account by number..." submit="fetchAccounts"></rx-app-search>',
      restrict: 'E',
      link: function (scope) {
        scope.fetchAccounts = function (searchValue) {
          if (!_.isEmpty(searchValue)) {
            $window.location = '/billing/overview/' + searchValue;
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
  return function (size, unit) {
    var units = [
        'GB',
        'TB',
        'PB'
      ];
    var index = _.indexOf(units, unit);
    if (index === -1) {
      index = Math.floor(Math.log(size) / Math.log(1000));
    }
    return size / Math.pow(1000, Math.floor(index)).toFixed(1) + ' ' + units[index];
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
angular.module('encore.ui.rxFavicon', ['encore.ui.rxEnvironment']).directive('rxFavicon', [
  'Environment',
  '$parse',
  '$log',
  function (Environment, $parse, $log) {
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
  }
]);
angular.module('encore.ui.rxFeedback', ['ngResource']).value('feedbackTypes', [
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
    placeholder: 'We love to hear that you\'re enjoying Encore! Tell us what you like, and what we can do ' + 'to make it even better'
  }
]).service('rxScreenshotSvc', [
  '$log',
  '$q',
  function ($log, $q) {
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
  }
]).service('rxFeedbackSvc', [
  '$resource',
  'feedbackApi',
  '$location',
  '$window',
  function ($resource, feedbackApi, $location, $window) {
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
      var uri = encodeURI('mailto:encoreui@lists.rackspace.com?subject=' + subject + '&body=' + body);
      var windowOpen = $window.open(uri, '_blank');
      if (!windowOpen) {
        $window.location.href = uri;
      }
    };
    return {
      api: apiEndpoint,
      setEndpoint: setEndpoint,
      fallback: emailFeedback
    };
  }
]).directive('rxFeedback', [
  'feedbackTypes',
  '$location',
  'rxFeedbackSvc',
  'rxScreenshotSvc',
  'rxNotify',
  function (feedbackTypes, $location, rxFeedbackSvc, rxScreenshotSvc, rxNotify) {
    return {
      restrict: 'E',
      templateUrl: 'templates/rxFeedback.html',
      link: function (scope) {
        scope.currentUrl = $location.url();
        scope.feedbackTypes = feedbackTypes;
        var showSuccessMessage = function (response) {
          var message = _.isString(response.message) ? response.message : 'Thanks for your feedback!';
          rxNotify.add(message, { type: 'success' });
        };
        var showFailureMessage = function (httpResponse) {
          var errorMessage = 'An error occurred submitting your feedback';
          if (httpResponse.data && _.isString(httpResponse.data.message)) {
            errorMessage += ': ' + httpResponse.data.message;
          }
          rxNotify.add(errorMessage, { type: 'error' });
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
]).directive('rxFormInput', function () {
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
});
angular.module('encore.ui.rxLogout', []).directive('rxLogout', [
  '$rootScope',
  '$location',
  'Auth',
  function ($rootScope, $location, Auth) {
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
            if ($location.$$html5) {
              $window.location = '/login';
            } else {
              $window.location = '#/login';
            }
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
      if (msgs.loading) {
        scope[uid].loadingMsg = rxNotify.add(msgs.loading, loadingOpts);
      }
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
angular.module('encore.ui.rxToggle', []).directive('rxToggle', function () {
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
angular.module('encore.ui.rxUnauthorizedInterceptor', ['encore.ui.rxSession']).factory('UnauthorizedInterceptor', [
  '$q',
  '$window',
  '$location',
  'Session',
  function ($q, $window, $location, Session) {
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
          Session.logout();
          //Logs out user by removing token
          $window.location = '/login?redirect=' + returnPath;
        }
        return $q.reject(response);
      }
    };
  }
]);