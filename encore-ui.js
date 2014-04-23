/*
 * EncoreUI
 * https://github.com/rackerlabs/encore-ui

 * Version: 0.7.5 - 2014-04-23
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
  'encore.ui.rxSpinner'
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
  return function (dateString, maxUnits) {
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
    if (!_.isNumber(maxUnits)) {
      maxUnits = 2;
    }
    if (days > 0) {
      age.push({
        value: days,
        suffix: 'd'
      });
    }
    if (hours > 0) {
      age.push({
        value: hours - 24 * days,
        suffix: 'h'
      });
    }
    age.push({
      value: mins - 60 * hours,
      suffix: 'm'
    });
    return _.map(age.slice(0, maxUnits), function (dateUnit, index, listOfAges) {
      if (index == listOfAges.length - 1) {
        return Math.round(dateUnit.value) + dateUnit.suffix;
      } else {
        return Math.floor(dateUnit.value) + dateUnit.suffix;
      }
    }).join(' ');
  };
});
angular.module('encore.ui.rxEnvironment', ['ngSanitize']).service('Environment', [
  '$location',
  function ($location) {
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
     * @returns {*} The current environment (if found), else undefined.
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
      return currentEnvironment;
    };
    /*
     * Adds an environment to the stack
     * @public
     * @param {object} environment The environment to add. See 'environments' array for required properties
     * @throws Environment must match pattern defined in isValidEnvironment function
     */
    envSvc.add = function (environment) {
      // do some sanity checks here
      if (isValidEnvironment(environment)) {
        // add environment
        environments.push(environment);
      } else {
        throw new Error('Environment incorrectly defined');
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
        linkText: 'Account-level Tools',
        directive: 'rx-global-search',
        childVisibility: function (scope) {
          // We only want to show this nav if user is already defined in the URL
          // (otherwise a user hasn't been chosen yet, so nav won't work, so we hide it)
          if (scope.route.current) {
            return !_.isUndefined(scope.route.current.pathParams.user);
          }
          return false;
        },
        childHeader: '<strong class="current-search">Current User:</strong>' + '<span class="current-result">{{route.current.pathParams.user}}</span>',
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
          }
        ]
      },
      {
        href: {
          tld: 'cloudatlas',
          path: 'ticketqueues'
        },
        linkText: 'Ticket Queues',
        children: [
          {
            href: '/ticketqueues/my',
            linkText: 'My Tickets'
          },
          {
            href: '/ticketqueues/queues',
            linkText: 'Queue Admin'
          }
        ]
      }
    ]
  }]).factory('rxAppRoutes', [
  '$rootScope',
  '$location',
  '$route',
  '$interpolate',
  'rxEnvironmentUrlFilter',
  function ($rootScope, $location, $route, $interpolate, rxEnvironmentUrlFilter) {
    return function (routes) {
      var isActive = function (item) {
        // check if url matches absUrl
        var pathMatches = _.contains($location.absUrl(), item.url);
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
      $rootScope.$on('$locationChangeSuccess', function () {
        routes = setDynamicProperties(routes);
      });
      routes = setDynamicProperties(routes);
      return {
        getAll: function () {
          return routes;
        },
        setAll: function (newRoutes) {
          routes = setDynamicProperties(newRoutes);
        }
      };
    };
  }
]).directive('rxApp', [
  'rxAppRoutes',
  'encoreNav',
  function (rxAppRoutes, encoreNav) {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'templates/rxApp.html',
      scope: {
        siteTitle: '@?',
        menu: '=?',
        collapsibleNav: '@',
        collapsedNav: '=?'
      },
      link: function (scope) {
        var menu = scope.menu || encoreNav;
        scope.appRoutes = new rxAppRoutes(menu);
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
]);
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
    var authSvc = $resource('/identity/:action', {}, {
        loginWithJSON: {
          method: 'POST',
          isArray: false,
          params: { action: 'tokens' }
        },
        validate: {
          method: 'GET',
          url: '/identity/login/session/:id',
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
    session.getToken = function () {
      return LocalStorage.getObject(TOKEN_ID);
    };
    session.storeToken = function (token) {
      LocalStorage.setObject(TOKEN_ID, token);
    };
    session.logoff = function () {
      LocalStorage.removeItem(TOKEN_ID);
    };
    session.isCurrent = function () {
      var token = session.getToken();
      //Conditional to prevent null exceptions when validating the token
      if (token && token.access && token.access.token && token.access.token.expires) {
        return new Date(token.access.token.expires) > _.now();
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
        fieldId: '@'
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
        function ($scope) {
          var success = function () {
            // fire event to notify auth service about logout
            $rootScope.$broadcast('event:auth-loginRequired');
          };
          // TODO: Handle failure
          $scope.logout = function () {
            Auth.logout(success);
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
      sortMethod: '=',
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