/*
 * EncoreUI
 * https://github.com/rackerlabs/encore-ui

 * Version: 1.47.3-0 - 2016-05-06
 * License: Apache-2.0
 */
angular.module('encore.ui', ['encore.ui.atoms','encore.ui.elements','encore.ui.molecules','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.elements','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.layout','encore.ui.metadata','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.rxAccountInfo','encore.ui.rxActionMenu','encore.ui.rxActiveUrl','encore.ui.utilities','encore.ui.rxApp','encore.ui.utilities','encore.ui.rxAttributes','encore.ui.utilities','encore.ui.rxBreadcrumbs','encore.ui.utilities','encore.ui.rxBulkSelect','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.rxCharacterCount','encore.ui.atoms','encore.ui.rxCollapse','encore.ui.rxCompile','encore.ui.molecules','encore.ui.utilities','encore.ui.utilities','encore.ui.rxEnvironment','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.rxFeedback','encore.ui.utilities','encore.ui.utilities','encore.ui.rxFloatingHeader','encore.ui.rxForm','encore.ui.utilities','encore.ui.utilities','encore.ui.rxInfoPanel','encore.ui.utilities','encore.ui.rxLogout','encore.ui.rxMetadata','encore.ui.rxMisc','encore.ui.rxModalAction','encore.ui.utilities','encore.ui.utilities','encore.ui.rxMultiSelect','encore.ui.utilities','encore.ui.rxNotify','encore.ui.utilities','encore.ui.rxOptionTable','encore.ui.utilities','encore.ui.rxPaginate','encore.ui.utilities','encore.ui.rxPermission','encore.ui.utilities','encore.ui.rxRadio','encore.ui.utilities','encore.ui.rxSearchBox','encore.ui.rxSelect','encore.ui.rxSelectFilter','encore.ui.rxSortableColumn','encore.ui.utilities','encore.ui.utilities','encore.ui.rxSpinner','encore.ui.rxStatusColumn','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.rxTags','encore.ui.molecules','encore.ui.utilities','encore.ui.rxToggle','encore.ui.rxToggleSwitch','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.tabs','encore.ui.utilities','encore.ui.utilities','encore.ui.tooltips','encore.ui.typeahead','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities','encore.ui.utilities', 'cfp.hotkeys','ui.bootstrap']);
/**
 * @ngdoc overview
 * @name atoms
 * @requires utilities
 * @description
 * # Atoms
 * Atoms are the basic building blocks for all UI elements.
 *
 * ## Atoms
 * * {@link atoms.directive:rxCheckbox rxCheckbox}
 */
angular.module('encore.ui.atoms', [
    'encore.ui.utilities'
]);

/**
 * @ngdoc overview
 * @name elements
 * @requires utilities
 * @description
 * # Elements
 * Elements are visual directives.
 *
 * ## Directives
 * * {@link elements.directive:rxButton rxButton}
 */
angular.module('encore.ui.elements', [
    'encore.ui.utilities'
]);

/**
 * @ngdoc overview
 * @name molecules
 * @requires utilities
 * @requires atoms
 * @description
 * # Molecules
 * Molecules are complex elements made up of various Atoms.
 *
 * ## Directives
 * * {@link molecules.directive:rxDatePicker rxDatePicker}
 * * {@link molecules.directive:rxTimePicker rxTimePicker}
 */
angular.module('encore.ui.molecules', [
    'encore.ui.utilities',
    'encore.ui.atoms'
]);

/**
 * @ngdoc overview
 * @name utilities
 * @description
 * # Utilities
 * Utilities are modules related to:
 *
 * * business logic
 *   * values, constants, controllers, services
 * * display logic & application flow control
 *   * convenience, "if"-like, and "switch"-like directives
 *   * filters
 *
 * ## Values & Constants
 * * {@link utilities.value:devicePaths devicePaths}
 * * {@link utilities.constant:feedbackApi feedbackApi}
 * * {@link utilities.value:feedbackTypes feedbackTypes}
 * * {@link utilities.object:rxStatusColumnIcons rxStatusColumnIcons}
 *
 * ## Controllers
 * * {@link utilities.controller:rxBulkSelectController rxBulkSelectController}
 * * {@link utilities.controller:rxFeedbackController rxFeedbackController}
 * * {@link utilities.controller:rxModalCtrl rxModalCtrl}
 *
 * ## Directives
 * * {@link utilities.directive:rxFavicon rxFavicon}
 *
 * ## Filters
 * * {@link utilities.filter:Page Page}
 * * {@link utilities.filter:Paginate Paginate}
 * * {@link utilities.filter:PaginatedItemsSummary PaginatedItemsSummary}
 * * {@link utilities.filter:rxAge rxAge}
 * * {@link utilities.filter:rxCapitalize rxCapitalize}
 * * {@link utilities.filter:rxDiskSize rxDiskSize}
 * * {@link utilities.filter:rxEnvironmentMatch rxEnvironmentMatch}
 * * {@link utilities.filter:rxEnvironmentUrl rxEnvironmentUrl}
 * * {@link utilities.filter:rxSortEmptyTop rxSortEmptyTop}
 * * {@link utilities.filter:rxUnsafeRemoveHTML rxUnsafeRemoveHTML}
 * * {@link utilities.filter:titleize titleize}
 * * {@link utilities.filter:xor xor}
 *
 * ## Services
 * * {@link utilities.service:Auth Auth}
 * * {@link utilities.service:encoreRoutes encoreRoutes}
 * * {@link utilities.service:Environment Environment}
 * * {@link utilities.service:ErrorFormatter ErrorFormatter}
 * * {@link utilities.service:hotkeys hotkeys}
 * * {@link utilities.service:Identity Identity}
 * * {@link utilities.service:NotifyProperties NotifyProperties}
 * * {@link utilities.service:PageTracking PageTracking}
 * * {@link utilities.service:Permission Permission}
 * * {@link utilities.service:routesCdnPath routesCdnPath}
 * * {@link utilities.service:rxAppRoutes rxAppRoutes}
 * * {@link utilities.service:rxAutoSave rxAutoSave}
 * * {@link utilities.service:rxBreadcrumbsSvc rxBreadcrumbsSvc}
 * * {@link utilities.service:rxBulkSelectUtils rxBulkSelectUtils}
 * * {@link utilities.service:rxDOMHelper rxDOMHelper}
 * * {@link utilities.service:rxFeedbackSvc rxFeedbackSvc}
 * * {@link utilities.service:rxFormUtils rxFormUtils}
 * * {@link utilities.service:rxHideIfUkAccount rxHideIfUkAccount}
 * * {@link utilities.service:rxLocalStorage rxLocalStorage}
 * * {@link utilities.service:rxModalFooterTemplates rxModalFooterTemplates}
 * * {@link utilities.service:rxNestedElement rxNestedElement}
 * * {@link utilities.service:rxNotify rxNotify}
 * * {@link utilities.service:rxPageTitle rxPageTitle}
 * * {@link utilities.service:rxPaginateUtils rxPaginateUtils}
 * * {@link utilities.service:rxPromiseNotifications rxPromiseNotifications}
 * * {@link utilities.service:rxScreenshotSvc rxScreenshotSvc}
 * * {@link utilities.service:rxSortUtil rxSortUtil}
 * * {@link utilities.service:rxStatusMappings rxStatusMappings}
 * * {@link utilities.service:rxStatusTags rxStatusTags}
 * * {@link utilities.service:rxVisibility rxVisibility}
 * * {@link utilities.service:rxVisibilityPathParams rxVisibilityPathParams}
 * * {@link utilities.service:Session Session}
 * * {@link utilities.service:Status Status}
 * * {@link utilities.service:StatusUtil StatusUtil}
 * * {@link utilities.service:TokenInterceptor TokenInterceptor}
 * * {@link utilities.service:UnauthorizedInterceptor UnauthorizedInterceptor}
 * * {@link utilities.service:urlUtils urlUtils}
 */
angular.module('encore.ui.utilities', [
    'ngResource',
    'debounce',
]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:Apply
 * @description
 * Used to apply an instance of {@link utilities.service:SelectFilter SelectFilter} to an array.
 *
 * Merely calls the `applyTo()` method of a `SelectFilter` instance to an
 * input array.
 * <pre>
 * <tr ng-repeat="item in list | Apply:filter">
 * </pre>
 *
 * @param {Array} list The list to be filtered.
 * @param {Object} filter An instance of SelectFilter
 *
 */
.filter('Apply', function () {
    return function (list, filter) {
        return filter.applyTo(list);
    };
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:Auth
 * @description
 * Service which provides an entire solution for authenticating, user session management
 * and permissions in the UI.  The Auth service is a wrapper for the Identity, Session and
 * Permission services.  These services were broken into smaller components to facilitate
 * customization and re-use.
 *
 * @requires utilities.service:Identity
 * @requires utilities.service:Session
 * @requires utilities.service:Permission
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

angular.module('encore.ui.elements')
/**
 * @ngdoc directive
 * @name elements.directive:rxButton
 * @restrict E
 * @scope
 * @description
 * Renders a button which will disable when clicked and show a loading message,
 * and re-enable when the operation is complete. If you set `classes` attributes
 * `<rx-button>`, those will get passed to the `<button>` instance as `class`.
 *
 * `rxButton` is used to create buttons with a dynamically-displayed loading
 * indicator. This is meant to be used as a replacement for `<button>` elements
 * in scenarios where the button has multiple states.
 *
 * ## Button State
 *
 * The state of the button is controlled via the `toggle` attribute, which
 * disables the button and replaces the `default-msg` with the `toggle-msg` as
 * the button's text.  There are no defaults for these messages, so they must
 * be defined if the toggle behavior is desired.  While the button is in the
 * toggled state, it is also disabled (no matter what the value of `disable` is).
 *
 * The button does not modify the variable passed to `toggle`; it should be
 * modified in the handler provided to `ng-click`.  Usually, the handler will
 * set the variable to `true` immediately, and then to `false` once the the
 * process (e.g. an API call) is complete.
 *
 * To disable the button, use the `disable` attribute instead of the normal
 * `ng-disabled` - the behavior is the same.
 *
 * ## Styling
 *
 * There are several styles of buttons available, and they are documented in the
 * [Buttons Styleguide](/encore-ui/#/elements/Buttons). Any classes that need to be
 * added to the button should be passed to the `classes` attribute.
 *
 * @param {String} loadingMsg Text to be displayed when an operation is in progress.
 * @param {String} defaultMsg Text to be displayed by default when no operation is in progress.
 * @param {Boolean=} [toggle=false] When true, the button will display the loading text.
 * @param {Boolean=} [disable=false] When true, the button will be disabled.
 * @param {String=} [classes=""] The class names to be applied to the button.
 *
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc parameters
 * @name utilities.value:devicePaths
 * @description
 * Provides configuration for device paths.
 *
 */
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
]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:encoreRoutes
 * @description
 * Creates a shared instance of `AppRoutes` that is used for the Encore App nav.
 * This allows apps to make updates to the nav via `encoreRoutes`.
 *
 * @return {Object} Instance of rxAppRoutes with `fetchRoutes` method added
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:Environment
 * @description
 *
 * Allows defining environments and retrieving the current environment based on location
 *
 * ## Adding New Environments ##
 *
 * If necessary, you can add additional environments with `Environment.add()`.
 * This takes an object with three properties, `name`, `pattern` and `url`, where
 *
 * * name: The "friendly" name of your environment, like "local", "preprod", etc.
 * * pattern: A string or RegEx that the current path is matched against
 * * url: The URL pattern used to build URLs when using rxEnvironmentUrl
 *
 * As an example, if we didn't already have a `'preprod'` environment, we could
 * add it as follows:
 *
 * <pre>
 * Environment.add({
 *     // Matches only https://preprod.encore.rackspace.com
 *     name: 'preprod',
 *     pattern: /\/\/preprod.encore.rackspace.com/,
 *     url: '{{path}}'
 * });
 * </pre>
 *
 * For this demo application, we add a "Github Pages" environment, like this:
 *
 * <pre>
 * Environment.add({
 *     name: 'ghPages',
 *     pattern: '//rackerlabs.github.io',
 *     url: baseGithubUrl + '{{path}}'
 * });
 * </pre>
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
     * Adds an environment to the front of the stack, ensuring it will be matched first
     * @public
     * @param {object} environment The environment to add. See 'environments' array for required properties
     */
    this.add = function (environment) {
        // do some sanity checks here
        if (isValidEnvironment(environment)) {
            // add environment, over riding all others created previously
            environments.unshift(environment);
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:ErrorFormatter
 * @description
 * Provides a helper method to parse error objects for `message` and format them
 * as necessary for `Status.setError()`.  See {@link utilities.service:Status Status} Service
 * for more information.
 *
 * # Error Messages Using ErrorFormatter
 *
 * `ErrorFormmatter` provides a specialized template `error` string
 * with an `object:{}` as the second parameter containing the replacements for
 * the template in the error string.  If in a proper format, the object can be
 * automatically parsed using an `ErrorFormatter` and displayed to the user.
 *
 * For example:
 *
 * <pre>
 * Status.setError(
 *     'Failed loading browsing history: ${message}',
 *     {
 *         message: 'User has previously cleared their history!'
 *     }
 * );
 * </pre>
 *
 * Please note that the replacement variable `${message}` in the error string
 * maps one-to-one to the keys provided in the the error object.
 *  - One can specify any number of template variables to replace.
 *  - Not providing a balanced list of variables and their replacements will result in a:
 *
 * <pre>
 * ReferenceError: <replacement> is not defined
 * </pre>
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc parameters
 * @name utilities.constant:feedbackApi
 * @description
 * Provides the feedback URL.
 */
.constant('feedbackApi', '/api/encore/feedback');

angular.module('encore.ui.utilities')
/**
 * @ngdoc parameters
 * @name utilities.value:feedbackTypes
 * @description
 * Provides default feedback types with placeholder text.
 */
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
]);

/**
 * @ngdoc service
 * @name utilities.service:hotkeys
 * @description
 * # hotkeys
 *
 * This utility is simply a reference guide to using
 * [the angular-hotkeys plugin](http://chieffancypants.github.io/angular-hotkeys/)
 * from within EncoreUI.
 *
 * Angular-hotkeys was chosen as the solution for hotkeys from within EncoreUI apps,
 * due to its integration into Angular, it's use of the very good 'mousetrap' library,
 * and because it allows multiple ways to define hotkeys (through a directive, controller,
 * route config, etc).
 *
 * ## Global Shortcuts
 *
 * Currently there is only one global shortcut key defined (`h`). This will collapse/expand
 * the main menu on any page. More keys can be added as need for them is identified
 * (suggestions welcome!).
 *
 * ## Shortcut Keys
 *
 * Because browsers and operating systems have a long list of defined shortcut keys,
 * it can be difficult to find a keybinding that isn't already taken. When choosing a
 * shortcut key for your app, you can avoid most conflicts by simple leaving off the
 * modifier key (e.g. `ctrl`).
 *
 * For Encore, the best practice is to use a single letter for your keystroke. For example,
 * the global key to show/hide the rxApp menu is simply `h`.
 *
 * If you'll be defining multiple shortcuts related to a specific set of actions, consider
 * a combination of two letters, where the first letter is the same for all keystrokes. For
 * example, an account menu might have the following shortcuts:
 *
 * - `a` `n` Creates a new account
 * - `a` `v` Views the selected account
 * - `a` `d` Deletes the selected account
 *
 * ## Identifying shortcut keys
 *
 * If you provide a description, the shortcut will be defined in a helper list provided
 * when the user presses the `?` key. Currently there is no official guidance on a design
 * pattern to identify to end-users what particular shortcuts are outside of the standard
 * help window.
 *
 */

angular.module('encore.ui.utilities')
/**
* @ngdoc service
* @name utilities.service:Identity
* @description
* This is a component designed to aid interaction with Rackspace's Identity API.
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

/**
 * @ngdoc overview
 * @name layout
 * @description
 * # layout Component
 *
 * Encore UI includes a grid system forked from
 * [Angular Material's layout module](https://material.angularjs.org/#/layout/container)
 * with minor usability enhancements to provide an assortment of attribute-based
 * layout options based on the flexbox layout model. Included are intuitive attribute
 * based styles that ease the creation of responsive row and/or column based page layouts.
 *
 * ## Note About Responsive Features
 *
 * Two versions of the Encore UI CSS file are included in this project. One includes
 * responsive design style attributes (encore-ui-resp-x.x.x.css). The other omits
 * these attributes to save space if desired (encore-ui-x.x.x.css). Be sure to only
 * include the appropriate css file for your project. Any attributes which include
 * the following suffixes require the responsive css file to work:
 * '-sm', '-gt-sm', '-md', '-gt-md', '-lg', '-gt-lg'.
 */
angular.module('encore.ui.layout', []);

/**
 * @ngdoc overview
 * @name metadata
 * @deprecated
 * @description
 * # metadata Component
 *
 * **Deprecated**: Use {@link rxMetadata} instead.
 */
angular.module('encore.ui.metadata', []);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:NotifyProperties
 * @description
 *
 * This factory provides functionality for abstracting "properties", and allowing
 * other directives/controllers/etc. to register for notifications when the properties
 * change. It would normally be used for a parent directive's controller, and child element
 * directives that "require" that controller.
 *
 * For example, say you have a value you want to track, which we'll call `numSelected`.
 * This will be a plain integer value that you have complete control over. What you want
 * is for other directives/controllers/etc to be able to register for notifications whenever
 * `numSelected` changes.
 *
 * The `registrationFn` method here sets all of this up. In your directive/controller where
 * you want your property to live, do something like:
 *
 * @example
 * <pre>
 * stats = { _numSelected: 0 };
 * scope.registerForNumSelected = NotifyProperties.registrationFn(stats, 'numSelected', '_numSelected');
 * </pre>
 *
 * This is saying "We have a property `_numSelected` in `stats`, and we want it exposed as `numSelected`
 * in `stats`. Whenever `stats.numSelected` is modified, other directives/controllers should be notified."
 *
 * In this example, a user registers for notifications by calling:
 * <pre>
 * registerForNumSelected(notificationFunction);
 * </pre>
 * Then, whenever `numSelected` changes, it will call:
 * <pre>
 * notificationFunction(newValue, oldValue);
 * </pre>
 *
 * This means that if you set:
 * <pre>
 * stats.numSelected = 20;
 * </pre>
 * Everyone that registered for notifications will get their notification function called.
 */
.factory('NotifyProperties', ["$timeout", function ($timeout) {
    var NotifyProperties = {};

    NotifyProperties.registrationFn = function (dst, name, sourceName) {
        var listeners = [];
        var notify = function (newVal, oldVal) {
            _.each(listeners, function (fn) {
                $timeout(function () { fn(newVal, oldVal); });
                fn(newVal, oldVal);
            });
        };

        Object.defineProperty(dst, name, {
            get: function () { return dst[sourceName]; },
            set: function (newVal) {
                var oldVal = dst[sourceName];
                dst[sourceName] = newVal;
                notify(newVal, oldVal);
            },
        });
        return function register (fn) {
            listeners.push(fn);
        };

    };

    return NotifyProperties;
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:Page
 * @description
 * This is the pagination filter that is used to limit the number of pages
 * shown.
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:PageTracking
 * @description
 * This is the data service that can be used in conjunction with the pagination
 * objects to store/control page display of data tables and other items.
 * This is intended to be used with {@link rxPaginate.directive:rxPaginate}
 * @namespace PageTracking
 *
 * @example
 * <pre>
 * $scope.pager = PageTracking.createInstance({showAll: true, itemsPerPage: 15});
 * </pre>
 * <pre>
 * <rx-paginate page-tracking="pager"></rx-paginate>
 * </pre>
 */
.factory('PageTracking', ["$q", "LocalStorage", "rxPaginateUtils", function ($q, LocalStorage, rxPaginateUtils) {
    var PageTracking = {
        /**
        * @ngdoc method
        * @name utilities.service:PageTracking#createInstance
        * @methodOf utilities.service:PageTracking
        * @param {Object} options Configuration options for the pager
        * @param {number} [options.itemsPerPage=200] The default number of items to display per page.
        * If you choose a value * that is not in the default set ot itemsPerPage options (50, 200, 350, 500),
        * then that value will be inserted into that list in the appropriate place
        * @param {number[]} [options.itemSizeList=(50, 200, 350, 500)] The "items per page" options to give to the user.
        * As these * same values are used all throughout Encore, you probably should not alter them for your table.
        * @param {boolean} [options.persistItemsPerPage=true] Whether or not a change to this pager's itemsPerPage
        * should be persisted globally to all other pagers
        * @param {number} [options.pagesToShow=5] This is the number of page numbers to show
        * in the pagination controls
        * @param {boolean} [options.showAll=false] This is used to determine whether or not to use
        * the pagination. If `true`, then all items will be displayed, i.e. pagination will not be used
        *
        * @description This is used to generate the instance of the
        * PageTracking object. It takes an optional `options` object, allowing you to customize the default
        * pager behaviour.
        *
        * @return {Object} A new pager instance to be passed to the `page-tracking` attribute of `<rx-paginate>`
        * (see {@link rxPaginate.directive:rxPaginate})
        */
        createInstance: function (options) {
            options = options ? options : {};
            var tracking = new PageTrackingObject(options);
            return tracking.pager;
        },

        /*
        * @method userSelectedItemsPerPage This method sets a new global itemsPerPage value
        */
        userSelectedItemsPerPage: function (itemsPerPage) {
            LocalStorage.setItem('rxItemsPerPage', itemsPerPage);
        }
    };

    function PageTrackingObject (opts) {
        var pager = _.defaults(_.cloneDeep(opts), {
            itemsPerPage: 200,
            persistItemsPerPage: true,
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

                // Persist this itemsPerPage as the new global value
                if (pager.persistItemsPerPage) {
                    PageTracking.userSelectedItemsPerPage(numItems);
                }
            });
        };

        pager.isItemsPerPage = function (numItems) {
            return pager.itemsPerPage === numItems;
        };

        this.pager = pager;

        pager.goToPage(pager.pageNumber);

    }

    return PageTracking;
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:Paginate
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:PaginatedItemsSummary
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:Permission
 * @description
 * Simple service for accessing roles and permissions for a user.
 *
 * @requires utilities.service:Session
 *
 * @example
 * <pre>
 * Permission.getRoles() //returns an array of roles for a user
 * Permission.hasRole(role) //returns true/false if user has specified role
 * </pre>
 */
.factory('Permission', ["Session", function (Session) {
    var permissionSvc = {};

    var cleanRoles = function (roles) {
        return roles.split(',').map(function (r) {
            return r.trim();
        });
    };

    var userRoles = function () {
        return _.pluck(permissionSvc.getRoles(), 'name');
    };

    /**
     * @description Takes a function and a list of roles, and returns the
     * result of calling that function with `roles`, and comparing to userRoles().
     *
     * @param {function} fn - Comparison function to use. _.any, _.all, etc.
     * @param {array} roles - List of desired roles
     */
    var checkRoles = function (roles, fn) {
        // Some code expects to pass a comma-delimited string
        // here, so turn that into an array
        if (_.isString(roles)) {
            roles = cleanRoles(roles);
        }

        var allUserRoles = userRoles();
        return fn(roles, function (role) {
            return _.contains(allUserRoles, role);
        });
    };

    /**
     * @name  getRoles
     * @ngdoc method
     * @methodOf utilities.service:Permission
     * @description
     * Fetch all the roles tied to the user (in the exact format available in their Session token).
     *
     * @returns {Array} List of all roles associated to the user.
     */
    permissionSvc.getRoles = function () {
        var token = Session.getToken();
        return (token && token.access && token.access.user && token.access.user.roles) ?
            token.access.user.roles : [];
    };

    /**
     * @name  hasRole
     * @ngdoc method
     * @methodOf utilities.service:Permission
     * @description Check if user has at least _one_ of the given roles.
     * @param {Array} roles List of roles to check against
     * @returns {Boolean} True if user has at least _one_ of the given roles; otherwise, False.
     */
    permissionSvc.hasRole = function (roles) {
        return checkRoles(roles, _.any);
    };

    /**
     * @name  hasAllRoles
     * @ngdoc method
     * @methodOf utilities.service:Permission
     * @description Checks if user has _every_ role in given list.
     * @param {Array} roles List of roles to check against
     * @returns {Boolean} True if user has _every_ role in given list; otherwise, False.
     *
     */
    permissionSvc.hasAllRoles = function (roles) {
        return checkRoles(roles, _.all);
    };

    return permissionSvc;
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:routesCdnPath
 * @description
 * `routesCdnPath` is configured as a `.provider`. This is to allow users to override the URL used when in a
 * local/staging environment.
 *
 * The main reason for that is to let people test local versions of
 * [the encore-ui-nav JSON file](https://github.com/rackerlabs/encore-ui-nav/blob/staging/src/encoreNav.json)
 * before submitting pull requests to that repository.
 *
 * For example, to point to a local `mynav.json` file, put the following into your `app.js`:
 *
 * <pre>
 * .config(function (otherdependencies, ..., routesCdnPathProvider) {
 *     // Other config stuff you need to do
 *     routesCdnPathProvider.customURL = 'mynav.json';
 * });
 * </pre>
 *
 * The `mynav.json` file will likely have to live in your `app/` folder, depending
 * on your configuration.
 *
 * If you do set `customURL` to a non `null` value, then `routesCdnPath.hasCustomURL`
 * will automatically get set to `true`. `hasCustomURL` is intended only for the framework
 * to use, but we are documenting it in case you find your own use case for it.
 *
 */
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

/**
 * @ngdoc overview
 * @name rxAccountInfo
 * @description
 * # rxAccountInfo Component
 *
 * This component is used to draw an account info box at the top of each page,
 * directly underneath the breadcrumbs. `rxPage` (through `rxApp`) integrates it
 * directly into its template, and you activate it by passing `account-number="..."`
 * to `<rx-page>`.
 *
 * While you could theoretically use this component elsewhere, its design and style
 * were done with the intention of sitting underneath the breadcrumbs.
 *
 * When placed on a page that has `:user` in its route parameters, this component
 * will also draw a drop-down user selector, to allow the Racker to change which
 * user they're looking at for the given account. At this time, this user-selection
 * is *only* available for products under Cloud. If you need it for additional products,
 * please let us know.
 *
 * This directive requires that `SupportAccount`, `Encore`, `AccountStatusGroup`,
 * and `Teams` services are available. These are not provided by this project,
 * but are available in an internal Rackspace repository.
 *
 * ## Directives
 * * {@link rxAccountInfo.directive:rxAccountInfo rxAccountInfo}
 */
angular.module('encore.ui.rxAccountInfo', []);

angular.module('encore.ui.rxAccountInfo')
/**
 * @ngdoc directive
 * @name rxAccountInfo.directive:rxAccountInfo
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

            var fetchTeamBadges = function (teamId) {
                Teams.badges({ id: teamId }).$promise.then(function (badges) {
                    scope.badges = scope.badges.concat(badges);
                }, function () {
                    rxNotify.add('Error retrieving badges for this team', {
                        type: 'error',
                        stack: notifyStack
                    });
                });
            };

            if (!_.isEmpty(scope.teamId) && (_.isNumber(_.parseInt(scope.teamId)))) {
                fetchTeamBadges(scope.teamId);
            }

            Encore.getAccount({ id: scope.accountNumber }, function (account) {
                // Only attempt if no teamId is passed to directive
                if (_.isEmpty(scope.teamId)) {
                    var primaryTeam = _.find(account.teams, function (team) {
                        return _.contains(team.flags, 'primary');
                    });

                    if (primaryTeam) {
                        fetchTeamBadges(primaryTeam.id);
                    }
                }

                scope.accountName = account.name;
                scope.accountStatus = account.status;
                scope.accountAccessPolicy = account.accessPolicy;
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

/**
 * @ngdoc overview
 * @name rxActionMenu
 * @description
 * # rxActionMenu Component
 *
 * A component to create a configurable action menu.
 *
 * ## Directives
 * * {@link rxActionMenu.directive:rxActionMenu rxActionMenu}
 */
angular.module('encore.ui.rxActionMenu', []);

angular.module('encore.ui.rxActionMenu')
/**
 * @ngdoc directive
 * @name rxActionMenu.directive:rxActionMenu
 * @restrict E
 * @scope
 * @description
 *
 * Component to add a clickable cog which brings up a menu of configurable actions.
 *
 * Normally the menu is dismissable by clicking anywhere on the page, but this can
 * be disabled by passing an optional `global-dismiss="false"` attribute to the
 * directive.
 *
 * @param {Boolean=} [globalDismiss=true] - optional attribute to make menu dismissable by clicking anywhere on the page
 */
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

/**
 * @ngdoc overview
 * @name rxActiveUrl
 * @deprecated THIS COMPONENT IS MARKED TO BE REMOVED IN A FUTURE RELEASE.
 * @description
 * # rxActiveUrl Component
 *
 * A Component adds a class name of 'selected' to an LI if the current url matches
 * a pre-defined value
 *
 * ## Directives
 * * {@link rxActiveUrl.directive:rxActiveUrl rxActiveUrl}
 */
angular.module('encore.ui.rxActiveUrl', []);

angular.module('encore.ui.rxActiveUrl')
/**
 * @ngdoc directive
 * @name rxActiveUrl.directive:rxActiveUrl
 * @restrict A
 * @scope
 * @description
 * This is used as an attribute to directive `<rx-product-resources>`, in the
 * form of `<li rx-active-url="/servers">`. The directive checks if the attribute
 * value is a subset of the current URL. If so it returns the class name "selected".
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:rxAge
 * @description
 * Several filters are available to parse dates.
 *
 * ## Two Digit Display
 * 1. You can just have it use the default abbreviated method and it truncates it
 *  to the two largest units.
 *
 *  <pre>
 *    <div ng-controller="rxAgeCtrl">
 *      <ul>
 *        <li>{{ageHours}} &rarr; {{ageHours | rxAge}}</li>
 *      </ul>
 *    </div>
 *  </pre>
 *  `Tue Sep 22 2015 00:44:00 GMT-0500 (CDT) → 10h 30m`
 *
 * ## Full Word Representation
 * 2. You can also pass in a second value of `true` and have it expand the units
 *  from the first letter to their full word representation.
 *
 *  <pre>
 *    <div ng-controller="rxAgeCtrl">
 *      <ul>
 *        <li>{{ageHours}} &rarr; {{ageHours | rxAge:true}}</li>
 *      </ul>
 *    </div>
 *  </pre>
 *  `Tue Sep 22 2015 00:35:30 GMT-0500 (CDT) → 10 hours, 33 minutes`
 *
 * ## Mulitple Digits
 * 3. Or you can pass in a number from `1` to `3` as the second value to allow for
 *  different amounts of units.
 *
 *  <pre>
 *    <div ng-controller="rxAgeCtrl">
 *      <ul>
 *        <li>{{ageYears}} &rarr; {{ageYears | rxAge:3}}</li>
 *      </ul>
 *    </div>
 *  </pre>
 *  `Sun Sep 07 2014 08:46:05 GMT-0500 (CDT) → 380d 2h 27m`
 *
 * ## Multiple Argument Usage
 * 4. **OR** you can pass in a number as the second argument and `true` as the
 *    third argument to combine these two effects.
 *
 *  <pre>
 *    <div ng-controller="rxAgeCtrl">
 *      <ul>
 *        <li>{{ageMonths}} &rarr; {{ageMonths | rxAge:3:true}}</li>
 *      </ul>
 *    </div>
 *  </pre>
 *  `Thu Aug 13 2015 06:22:05 GMT-0500 (CDT) → 40 days, 4 hours, 49 minutes`
 *
 *
 * **NOTE:** This component requires [moment.js](http://momentjs.com/) to parse, manipulate, and
 * display dates which is provided by Encore Framework.
 */
.filter('rxAge', function () {
    return function (dateString, maxUnits, verbose) {
        if (!dateString) {
            return 'Unavailable';
        } else if (dateString === 'z') {
            return '--';
        }

        var now = moment();
        var date = moment(new Date(dateString));
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

/**
 * @ngdoc overview
 * @name rxApp
 * @description
 * # rxApp Component
 *
 * This component is responsible for creating the HTML necessary for a common
 * Encore layout. It builds out the main navigation, plus breadcrumbs and page
 * titles.
 *
 * # Usage
 *
 * For apps that want to use the default Encore navigation, usage is pretty simple.
 * In your index.html file, add the `rx-app` directive inside your app:
 *
 * <pre>
 * <body ng-app="myApp">
 *     <rx-app>
 *         <ng-view></ng-view>
 *     </rx-app>
 * </body>
 * </pre>
 *
 * By including `ng-view`, your view content will be added inside the directive.
 * This makes setting up views for each page much simpler, since you don't have
 * to include `rx-app` in each view.
 *
 * Inside your view, you'll likely want to use `rx-page` to wrap your content.
 * See the `rx-page` docs for more information on this.
 *
 * # rxApp Navigation
 *
 * By default, the EncoreUI left-hand navigation is loaded at runtime from a
 * separate resource. This source can be changed, and there are many options to
 * control the navigation from an app level.
 *
 * ## Accessing route information
 *
 * Sometimes it's helpful to have the current route information available for
 * menu items. For example, re-using the current params for path building.
 *
 * To help with this, $route is exposed on the scope of all menu items.
 * [`$route` provides many details on the current view](http://goo.gl/IsIscD),
 * including the ability to access the current controller and scope for the view.
 *
 * To see this in action, check out the 'childVisibility' property for
 * Account-level Tool in `encoreNav`.
 *
 * ## Accessing properties on $rootScope
 *
 * If you have a property available on the `$rootScope` of your app that the
 * menu data needs to access,
 * [you can reference `$rootScope` via `$root`](http://goo.gl/8vHlsN).
 * See the demo for an example of this.
 *
 * ## Dynamically updating the menu
 *
 * By default, rxApp will create the navigation menu based on the routes defined
 * in the 'encoreNav' value. This menu is built using the {@link utilities.service:rxAppRoutes rxAppRoutes} service.
 *
 * To update a route, use the `setRouteByKey` function on the `rxAppRoutes` service:
 *
 * <pre>
 * rxAppRoutes.setRouteByKey('myKey', {
 *     linkText: 'myUpdatedRoute'
 * });
 * </pre>
 *
 * You would normally either set this in your app's `.run` function, or in a
 * specific controller.
 *
 * ## Custom Menus
 *
 * If you'd like to create an entirely custom menu, you can pass that data in to
 * the `rx-app` directive via the `menu` attribute. View the demo for an example
 * of this.
 *
 * # Common Styling
 *
 * The rxApp common.less file defines many base CSS rules and classes for app use.
 * Included in this is [normalize.css](http://necolas.github.io/normalize.css/).
 * This helps create a consistent starting point for styles across all browsers.
 *
 * ## Fonts
 *
 * The EncoreUI default font is Roboto. This is used for all text on the page
 * and is loaded via Google Fonts. Be sure your app includes the following line:
 *
 * <pre>
 * <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,700,700italic"
 *       rel="stylesheet" type="text/css" />
 * </pre>
 *
 * ## Directives
 * * {@link rxApp.directive:rxAccountSearch rxAccountSearch}
 * * {@link rxApp.directive:rxAccountUsers rxAccountUsers}
 * * {@link rxApp.directive:rxApp rxApp}
 * * {@link rxApp.directive:rxAppNav rxAppNav}
 * * {@link rxApp.directive:rxAppNavItem rxAppNavItem}
 * * {@link rxApp.directive:rxAppSearch rxAppSearch}
 * * {@link rxApp.directive:rxAtlasSearch rxAtlasSearch}
 * * {@link rxApp.directive:rxBillingSearch rxBillingSearch}
 * * {@link rxApp.directive:rxPage rxPage}
 * * {@link rxApp.directive:rxStatusTag rxStatusTag}
 * * {@link rxApp.directive:rxTicketSearch rxTicketSearch}
 */
angular.module('encore.ui.rxApp', [
    'cfp.hotkeys',
    'encore.ui.utilities',
    'encore.ui.rxEnvironment',
    'encore.ui.rxPermission',
    'ngRoute',
    'ngSanitize'
]);

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxAccountSearch
 * @restrict E
 * @description [TBD]
 */
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
}]);

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxAccountUsers
 * @restrict E
 * @description
 * Provides the ability to switch between account users. This directive is specific to Rackspace
 */
.directive('rxAccountUsers', ["$location", "$route", "Encore", "$rootScope", "encoreRoutes", function ($location, $route, Encore, $rootScope, encoreRoutes) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxAccountUsers.html',
        link: function (scope, element) {
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
            function loadUsers () {
                var success = function (account) {

                    // Sort the list so admins are at the top of the array
                    account.users = _.sortBy(account.users, 'admin');

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

                var accountNumber = parseInt($route.current.params.accountNumber, 10);
                if (accountNumber) {
                    Encore.getAccountUsers({ id: accountNumber }, success);
                }
            }

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

            var unregisterCheckCloud = $rootScope.$on('$routeChangeSuccess', checkCloud);

            // We need to register a function to cleanup the watcher, this avoids multiple calls
            //Ecore.getAccountUsers every time we load a page in cloud.
            element.on('$destroy', function () {
                unregisterCheckCloud();
            });
        }
    };
}]);

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxApp
 * @restrict E
 * @scope
 * @description
 * Responsible for creating the HTML necessary for a common Encore layout.
 *
 * @param {string} [siteTitle] Title of site to use in upper right hand corner
 * @param {array} [menu] Menu items used for left-hand navigation
 * @param {string} [collapsibleNav] Set to 'true' if the navigation menu should be collapsible
 * @param {string} [collapsedNav] Binding for the collapsed state of the menu.
 * @param {boolean} [newInstance] Whether the menu items should be a new instance of `rxAppRoutes`
 * @param {boolean} [hideFeeback] Whether to hide the 'feedback' link or not (defaults to show it)
 * @param {string} [logoutUrl] URL to pass to rx-logout
 *
 * @example
 * <pre>
 * <rx-app site-title="Custom Title"></rx-app>
 * </pre>
 */
.directive('rxApp', ["encoreRoutes", "rxAppRoutes", "hotkeys", "Environment", "routesCdnPath", "Session", "$window", function (encoreRoutes, rxAppRoutes, hotkeys,
                              Environment, routesCdnPath, Session, $window) {
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

            scope.isEmbedded = $window.self !== $window.top;

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
}]);

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxAppNav
 * @restrict E
 * @scope
 * @description
 * Creates a menu based on items passed in.
 *
 * # Navigation Menu JSON Structure
 * EncoreUI applications, by default, load the navigation menu from JSON defined
 * in the [encore-ui-nav project](https://github.com/rackerlabs/encore-ui-nav).
 * You can specify that a different JSON file be used (see the demo below), but
 * a certain structure is expected for the JSON.
 *
 * ## Outer structure/Sections
 * The JSON consists of an array of objects, with each object representing a
 * "section" in the nav. The two demos at the bottom of this page each only have
 * one section, `"All Tools"` and `"Example Menu"`, respectively. As such, the
 * JSON for each of them is an array with one object in it. The default EncoreUI
 * nav menu only has one section `"All Tools"`, and individual products should
 * not be expecting to add their own sections.
 *
 * The application that this documentation lives in has three sections, which you
 * can see if you look at the current left nav menu.
 * They are `EncoreUI`, `Design Styleguide` and `All Components`.
 *
 * ### `title` (required)
 *
 * Each section specified in this array is required to have a `title`
 * attribute, i.e.
 *
 * <pre>
 * navJSON = [
 *     {
 *         "title": "Section 1"
 *     }, {
 *         "title": "Section 2"
 *     }
 * ]
 * </pre>
 *
 * ### `type` (optional)
 * Each section can optionally have a `type` attribute. If present, a class with
 * the value `nav-section-TYPE` will be applied in the nav, otherwise
 * `nav-section-all` will be applied.
 *
 * <pre>
 * navJSON = [
 *     {
 *         "title": "Section 1",
 *         "type": "highlight"
 *     }, {
 *         "title": "Section 2"
 *     }
 * ]
 * </pre>
 *
 * In this example, `Section 1` will have a `nav-section-highlight` class applied
 * to it, while `Section 2` will receive the default `nav-section-all` class.
 *
 * The default Encore nav menu does not currently use the `type` property, and
 * products being added to Encore should avoid it. This attribute is reserved
 * for future use by the EncoreUI designers.
 *
 * ### `children` (optional)
 *
 * A section's `children` attribute details the first level of navigation items
 * that live within the section. This is defined as an array of objects, where
 * each object represents an "item" to be displayed in the nav (and the structure
 * of the objects/items themselves will be defined in the Navigation Items
 * section below). As an example, this could look like:
 *
 *<pre>
 * navJSON = [
 *     {
 *         "title": "Section 1",
 *         "type": "highlight",
 *         "children": [
 *             {
 *                 "href": "/overview",
 *                 "key": "overview",
 *                 "linkText": "Overview"
 *             }, {
 *                 "href": "/about",
 *                 "key": "about",
 *                 "linkText": "About"
 *             },
 *         ]
 *     }, {
 *         "title": "Section 2",
 *         "children": [
 *             {
 *                 "href": "/overview2",
 *                 "linkText": "Section 2 Overview"
 *             }
 *         ]
 *     }
 * ]
 * </pre>
 *
 * These `children` will be able to have further `children` nested inside them,
 * accessible via an expand/collapse chevron, but it is important to note that
 * the top level `children` in each section will _always_ be displayed.
 *
 * ## Navigation Items
 * A Navigation Item is an object that exists in a `children` array, and
 * represents a clickable item. These items have many optional attributes,
 * and can themselves contain `children` attributes.
 *
 * Their only required attribute is `linkText`. The object will also need _one_
 * of the `href` or `children` attributes, but these two should be mutually exclusive.
 *
 * ### `linkText` (required)
 *
 * The `linkText` attribute defines what text will be shown for the item in the
 * nav menu. This was shown in the example above,
 *
 * <pre>
 * {
 *        "title": "Section 1",
 *        "type": "highlight",
 *        "children": [
 *            {
 *                 "href": "/overview",
 *                 "key": "overview",
 *                 "linkText": "Overview"
 *           }, {
 *                 "href": "/about",
 *                 "key": "about",
 *                 "linkText": "About"
 *           },
 *       ]
 * }
 * </pre>
 *
 * These items will be displayed in the nav with `Overview` and `About` text.
 *
 * ### `key` (required for top-level items)
 * The `key` attribute is used to provide an unique identifier for individual
 * navigation items. If you are introducing a new top-level item into the nav
 * menu, then the `key` is required. It is optional for any nested items. There
 * are two possible reasons you would want to provide this for nested items:
 *
 * 1. A nav item with a `key` will have the class `rx-app-key-{{ item.key }}`
 * applied to it
 * 2. `rxAppRoutes` exposes a few methods for working with the key, including
 * `isActiveByKey()` and `setRouteByKey()`
 *
 * In general, you should not need to provide a `key` attribute for any nested
 * children. We try to avoid custom styling inside the nav, so the automatic
 * class application shouldn't be necessary. And the `rxAppRoutes` methods are
 * _generally_ only used internally by EncoreUI.
 *
 *
 * ### `href` (optional)
 *
 * The `href` attribute is used to assign a URL to the item, which will be
 * navigated to when clicked. If the item has a `children` attribute, you
 * normally would not include `href`, because you want the children to
 * expand/collapse when this item is clicked, rather than navigating away to
 * somewhere else.
 *
 * For Encore products within Rackspace, we keep the products on the same domain
 * (encore.rackspace.com), but give each product its own top-level path, i.e.
 * `encore.rackspace.com/foo`, `encore.rackspace.com/bar`. By doing this, the
 * `href` values can simply be entered as `/foo` and `/bar`. And more importantly,
 * `/foo` and `/bar` can be _completely separate Angular applications_. Both
 * applications are available in the nav, but clicking on `/foo` will load a new
 * Angular application, while clicking on `/bar` loads a brand new Angular
 * application.
 *
 * This allows applications to be developed and deployed independently from each
 * other. The nav is aware of all the applications, but they do not have to be
 * aware of each other.
 *
 * An extra feature of `href` is that you can put variables into it, that will be
 * interpolated with the current `$route.current.pathParams`. Thus, you can do
 * something like:
 *
 * <pre>
 * {
 *      "title": "Section 1",
 *     "type": "highlight",
 *     "children": [
 *         {
 *             "href": "/overview",
 *             "key": "overview",
 *             "linkText": "Overview"
 *         }, {
 *             "href": "/about/{{foobar}}",
 *             "key": "about",
 *             "linkText": "About"
 *         },
 *         ]
 * }
 * </pre>
 *
 * If `foobar` is currently in `$route.current.pathParams`, then its value will
 * automatically be inserted into the final URL.
 *
 *
 * ### `children` (optional)
 * If an item doesn't have an `href` attribute, it's probably because it has
 * child items via the `children` attribute.
 *
 * <pre>
 * {
 *      "title": "Section 1",
 *     "type": "highlight",
 *     "children": [
 *         {
 *             "href": "/overview",
 *             "key": "overview",
 *             "linkText": "Overview"
 *         }, {
 *             "href": "/about",
 *             "key": "about",
 *             "linkText": "About"
 *         }, {
 *             "linkText": "People",
 *             "children": [
 *                 {
 *                     "href": "/people/bob",
 *                     "linkText": "Bob",
 *                 }, {
 *                     "href": "/people/sue",
 *                     "linkText": "Sue"
 *                 }
 *
 *             ]
 *         }
 *     ]
 * }
 * </pre>
 *
 * This example shows a new item `People`, which has no `href` of its own, but
 * does have `children`, which contains two new items, each with their own unique `href`.
 *
 * By default, the `Bob` and `Sue` items will not be visible, and in the nav,
 * `People` will automatically have a chevron attached. When clicked, it will
 * expand to show the `children` items.
 *
 * As an aside, in this example, there will likely be one Angular application at
 * `/people`, which is resonsible for routing `/people/bob` and `/people/sue`,
 * while `/overview` and `/about` would probably be two different Angular
 * applications.
 *
 *
 * ### `visibility` and `childVisibility` (optional)
 * The `visibility` attribute is used to control whether or not an individual nav
 * item is visible to the user. If `visibility` is not specified, then by default
 * the item is always visible. The `childVisibility` attribute takes all the same
 * possible values as `visibility`, but is used to determine whether the items in
 * `children` should be visible.
 *
 * `visibility` can take a few types of values. The original form used in EncoreUI
 * was to pass an expression, filtering values with `rxEnvironmentMatch`, i.e.
 *
 * <pre>
 * "visibility": "('unified-preprod' | rxEnvironmentMatch) || ('local' | rxEnvironmentMatch)",
 * </pre>
 *
 * This expression would be evaluated, checking if the user is currently viewing
 * the app in the `unified-preprod` environment or the `local` environment, and
 * only display the item if one of those was true. (See {@link rxEnvironment}
 * for more details on environemnts). This was used to prevent items from being
 * displayed in a production environment if they were only currently available in
 * staging.
 *
 * *Note*: Using an expression for environment checking use has somewhat tailed off.
 * We now have different JSON files for each environment, so checking the current
 * environment is not necessary.
 *
 * Another technique for visibility is to use a predefined set of visibility
 * functions that exist in the framework. These include `rxPathParams` and
 * `rxHideIfUkAccount`.
 *
 * To use these, you pass an array to `visibility`, with the first argument being
 * the name of the function to use (as a string), and the second argument as an
 * optional object describing the parameters to pass to the function.
 *
 * For instance, `rxPathParams` is used to check if a particular parameter is
 * present in the current route. The syntax is as follows:
 *
 * <pre>
 * "visibility": ["rxPathParams", { "param": "accountNumber" }],
 * </pre>
 *
 * This means "only show this item if `accountNumber` is present in the current route.
 *
 * `rxPathParams` is typically used with `childVisibility`, not `visibility`. For
 * instance, the `Account` section in Encore will by default show a search directive
 * (discussed later), and none of its children are visible. After entering a search
 * term, an account number is found, and inserted into the route. At that point,
 * all of the children under `Account` will be visible, as they all require an
 * `accountNumber` to correctly operate.
 *
 * ### `childHeader` (optional)
 *
 * The `childHeader` attribute is used to specify an HTML header to be placed
 * above the `children` in an expanded area (and thus having a `childHeader`
 * attribute requires having a `children` attribute).
 *
 * `childHeader` receives HTML content as a string, and uses
 * {@link rxCompile} to compile and insert the content above
 * the `children` items. The compiled content will be linked against the current
 * scope, allowing you to do things like:
 *
 * <pre>
 * {
 *     "title": "Section 1",
 *     "type": "highlight",
 *     "childHeader": "<strong>Current Account:</strong>#{{route.current.pathParams.accountNumber}}",
 *     "children": [
 *         {
 *             "href": "/overview",
 *             "key": "overview",
 *             "linkText": "Overview"
 *         }, {
 *             "href": "/about",
 *             "key": "about",
 *             "linkText": "About"
 *         }, {
 *            "linkText": "People",
 *            "children": [
 *                 {
 *                     "href": "/people/bob",
 *                     "linkText": "Bob"
 *                 }, {
 *                     "href": "/people/sue",
 *                     "linkText": "Sue"
 *                 }
 *             ]
 *         }
 *     ]
 * }
 * </pre>
 *
 * This example will pull the `accountNumber` from the `pathParams`, and insert
 * `Current Account: 1234` above the children.
 *
 *
 *
 * ### `roles` (optional)
 *
 * *Note*: Support for `roles` requires at least version 1.19.0 of EncoreUI.
 *
 * In addition to the `visibility` criteria described above, you can also restrict
 * which items are shown to a user based on the LDAP roles of that user. This is
 * done via the `roles` attribute, which takes a single object as its value. This
 * object can be used to specify that a user requires _all_ roles from a certain
 * set, or _any_ role from a certain set, to see an item. For example:
 *
 * <pre>
 * {
 *     "title": "Section 1",
 *     "type": "highlight",
 *     "childHeader": "<strong>Current Account:</strong>#{{route.current.pathParams.accountNumber}}",
 *     "children": [
 *         {
 *             "href": "/overview",
 *             "key": "overview",
 *             "linkText": "Overview"
 *         }, {
 *             "href": "/about",
 *             "key": "about",
 *             "linkText": "About"
 *         }, {
 *             "linkText": "People",
 *             "children": [
 *                 {
 *                     "href": "/people/bob",
 *                     "linkText": "Bob",
 *                     "roles": { "all": ["role1", "role2"] }
 *                 }, {
 *                     "href": "/people/sue",
 *                     "linkText": "Sue",
 *                     "roles": { "any": ["role1", "role2", "role3"] }
 *                 }
 *
 *             ]
 *         }
 *     ]
 * }
 * </pre>
 *
 * In this example, the `Bob` item can only be seen by users who have _both_ `role1`
 * and `role2` in their LDAP roles, while the `Sue` item can only be seen by users
 * who have _at least one_ of `role1`, `role2`, or `role3`. Please keep in mind that you
 * [can't do real security in front-end JavaScript](https://goo.gl/wzuhxO).
 * Do not rely on `roles` as a security feature. `roles` is purely to enhance user
 * experience, to prevent them from seeing items that they won't have permissions
 * to access anyway. All the data is still sent to the browser. A user who knows
 * how to use the dev tools will be able to see the full list. LDAP role-based
 * security must still happen on the server-side.
 *
 *
 * ### `directive` (optional)
 * The optional `directive` attribute receives the name of a directive in its
 * dash-delimited format (i.e. uses `"rx-account-search"` instead of `"rxAccountSearch"`).
 * If this directive is available, then the navigation menu will have that directive
 * inserted and rendered directly under the `linkText` for the nav item.
 *
 * The most important line in the previous paragraph is `If this directive is
 * available...`. Let's say we add a new `Support` item to the nav, where each
 * of its children are supposed to render its own custom search directive:
 *
 * <pre>
 * {
 *     "linkText": "Support",
 *     "children": [
 *         {
 *             "linkText": "People Support",
 *             "directive": "people-search"
 *         }, {
 *             "linkText": "Machine Support",
 *             "directive": "machine-search"
 *         }
 *     ]
 * }
 * </pre>
 *
 * The _intent_ is that when the user clicks on "Support", the menu will expand
 * to show "People Support" and "Machine Support" child items, and each will
 * contain a search box, defined by the `people-search` and `machine-search`
 * directives, respectively.
 *
 * But where do those directives come from? `rxApp` provides some legacy
 * directives that are available to the nav, including `rxAppSearch`,
 * `rxAccountUsers`, etc. But `people-search` does not come from `rxApp`. And
 * recall from the `href` section that the nav might be defining multiple
 * different Angular applications. What if "Support" is defined in your
 * application, ad that's where `people-search` comes from, but the user is
 * currently in a different application? That different application won't have
 * `people-search` defined anywhere, so when the user clicks on "Support", the
 * directives won't be available.
 *
 * The solution to this is to ensure that these elements with directives _also_
 * have an `href`, and those URLs belong to Angular applications that define those
 * directives. i.e.
 *
 * <pre>
 * {
 *     "linkText": "Support",
 *     "key": "support",
 *     "children": [
 *         {
 *             "linkText": "People Support",
 *             "directive": "people-search",
 *             "href": "/support/people-support",
 *         }, {
 *             "linkText": "Machine Support",
 *             "directive": "machine-search",
 *             "href": "/support/machine-support",
 *         }
 *     ]
 * }
 * </pre>
 *
 * In fact, recall that we said all items _must_ have one of `href` or `children`,
 * so the `href` is necessary anyway. But they key here is that by having an `href`,
 * the browser will navigate to `/support/people-support` / `/support/machine-support`,
 * which should be defined in Angular apps that have `people-search` and `machine-search`
 * available as directives.
 *
 * With this configuration, clicking on `Support` will expand the `children`,
 * and the user will see `People Support` and `Machine Support`, but they will
 * not see the directives. But if they then click on one of `People Support` or
 * `Machine Support`, then the `/support` Angular application will be loaded,
 * the and the directives will become available.
 *
 * @param {object} items Menu items to display. See encoreNav for object definition
 * @param {string} level Level in heirarchy in page. Higher number is deeper nested
 *
 * @example
 * <pre>
 * <rx-app-nav level="1" items="menuItems"></rx-app-nav>
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
});

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxAppNavItem
 * @restrict E
 * @scope
 * @description
 * Creates a menu item. Recursively creates rx-app-nav if 'children' present.
 * 'Item' must be avialable via scope
 *
 * @example
 * <pre>
 * <rx-app-nav-item ng-repeat="item in items"></rx-app-nav-item>
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
        controller: ["$scope", "$location", "rxVisibility", "Permission", function ($scope, $location, rxVisibility, Permission) {
            // provide `route` as a scope property so that links can tie into them
            $scope.route = $route;

            var roleCheck = function (roles) {
                if (_.isUndefined(roles)) {
                    return true;
                }

                if (!_.isUndefined(roles.any)) {
                    return Permission.hasRole(roles.any);
                }

                if (!_.isUndefined(roles.all)) {
                    return Permission.hasAllRoles(roles.all);
                }

                return false;
            };

            /*
             * @description Determines whether or not a nav item should be displayed, based on `visibility`
             * criteria and `roles` criteria
             * @param [visibility] - Can be an expression, a function, an array (using format below) to
             *                     determine visibility
             * @param {object} [roles] - An object with a format { 'any': ['role1', 'role2'] } or
             *                           { 'all': ['role1', 'role2'] }
             */
            $scope.isVisible = function (visibility, roles) {
                var locals = {
                    location: $location
                };
                if (_.isUndefined(visibility) && _.isUndefined(roles)) {
                    // no visibility or role criteria specified, so default to true
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

                // If `visibility` isn't defined, then default it to `true` (i.e. visible)
                var visible = _.isUndefined(visibility) ? true : $scope.$eval(visibility, locals),
                    hasRole = true;

                // Only do a roleCheck() if `visible` is true. If we failed the visibility test,
                // then we must ensure the nav item is not displayed, regardless of the roles
                if (visible && _.isObject(roles)) {
                    hasRole = roleCheck(roles);
                }

                return visible && hasRole;
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
}]);

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxAppSearch
 * @restrict E
 * @scope
 * @description
 * Creates a search input form for navigation
 *
 * @param {string} [placeholder] Title of page
 * @param {*} [model] Model to tie input form to (via ng-model)
 * @param {function} [submit] Function to run on submit (model is passed as only argument to function)
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
});

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxAtlasSearch
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
}]);

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxBillingSearch
 * @restrict E
 * @description [TBD]
 */
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
}]);

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxPage
 * @restrict E
 * @scope
 * @description
 *
 * Responsible for creating the HTML necessary for a page (including breadcrumbs and page title)
 * You can pass in a `title` attribute or an `unsafeHtmlTitle` attribute, but not both. Use the former
 * if your title is a plain string, use the latter if your title contains embedded HTML tags AND you
 * trust the source of this title. Arbitrary javascript can be executed, so ensure you trust your source.
 *
 * The document title will be set to either `title` or a stripped version of `unsafeHtmlTitle`, depending
 * on which you provide.
 *
 * You'll likely want to use the {@link rxApp.directive:rxPage rxPage} directive
 * inside your template view. For example, inside a 'myView.html' file:
 *
 * <pre>
 * <rx-page title="'Example Page'">
 *    Here is my content
 * </rx-page>
 * </pre>
 *
 * `rx-page` is used to create a common wrapper for specific page views. It
 * automatically adds the breadcrumbs and page title/subtitle (if specified),
 * along with the correct styling.
 *
 * Both the `title` and `subtitle` attributes accept an Angular expression,
 * which can be a string (shown in the previous example) or a scope property.
 * This string/property can accept other expressions, enabling you to build custom
 * titles. The demo has an example of this usage.
 *
 * If you wish to use arbitrary HTML in your title, you can use the
 * `unsafe-html-title` attribute instead of `title`. This is considered "unsafe"
 * because it is capable of executing arbitrary Javascript, so you must ensure
 * that you trust the source of the title. The "Customized Page Title" in the
 * demo shows the use of HTML tags.
 *
 * In either case (`title` or `unsafe-html-title`), the document title
 * (i.e. visible in the browser tab) will be set to your chosen title. If you use
 * `unsafe-html-title`, all HTML tags will be stripped before setting the document
 * title.
 *
 * ### Account Info below Breadcrumbs
 *
 * `rxPage` integrates with the {@link rxAccountInfo} component,
 * to draw the Account Info box directly underneath the `rxBreadcrumbs`.
 * This is opt-in. By default, it will not appear. To enable it, pass the
 * `account-number="..."` attribute to `<rx-page>` in your template, i.e
 *
 * <pre>
 * <rx-page account-number="{{ accountNumber }}">
 * </pre>
 *
 * As noted in {@link rxAccountInfo}, this
 * directive requires that `SupportAccount`, `Encore` and `Teams` services are
 * available to the Angular Dependency Injection system. These are *not* provided
 * by EncoreUI, but are available in an internal Rackspace repository.
 *
 *
 * ### Status tags
 *
 * A final attribute that `rx-page` accepts is `status`. This takes a string,
 * and has the effect of drawing a status "tag" beside the page title.
 * The "Customized rxApp" demo shows the use of this with the `"alpha"` tag.
 *
 * The framework currently provides `"alpha"` and `"beta"` tags, but any product
 * can specify their own custom tags using the `rxStatusTagsProvider`. It currently
 * has one method, `addStatus`, which takes an unique `key` for the new tag, the
 * `class` it should use in the HTML, and the `text` that will be drawn. All custom
 * tags are drawn inside of a `<span>`, essentially as:
 *
 * <pre>
 * <span class="status-tag {{ class }}">{{ text }}</span>
 * </pre>
 *
 * To use this, do the following in your application's `.config()` method:
 *
 * <pre>
 * rxStatusTagsProvider.addStatus({
 *     key: 'gamma',
 *     class: 'alpha-status',
 *     text: 'Hello World!'
 * });
 * </pre>
 *
 * This will create a new status tag called `"gamma"`, which you can pass to `rx-page` as:
 *
 * <pre>
 * <rx-page title="'Some Title'" status="gamma">
 * </pre>
 *
 * And the title will appear with a `Hello World!` tag beside it, styled the
 * same way as our `"alpha"` status tag is styled. You can also define your own
 * CSS style in your application and use those instead, passing it as the `class`
 * value to `addStatus()`.
 *
 * All the tags are accessible inside of {@link rxBreadcrumbs}
 * as well. Any breadcrumb that was created with `useStatusTag: true` will automatically
 * receive the same status tag as you passed to `<rx-page>`.
 *
 * ### .page-actions
 *
 * A `page-actions` class is provided by rx-app to easily add custom page actions
 * to the top right of a page. For example:
 *
 * <pre>
 * <rx-page title="'Servers Overview'">
 *    <div class="page-actions">
 *        <a href="/create" class="link-action msg-action">Create New Server</a>
 *    </div>
 *    <img src="http://cdn.memegenerator.net/instances/500x/48669250.jpg"
 *         alt="Look at all these servers there are so many" />
 * </rx-page>
 * </pre>
 *
 * @param {expression} [title] Title of page
 * @param {expression} [unsafeHtmlTitle] Title for the page, with embedded HTML tags
 * @param {expression} [subtitle] Subtitle of page
 *
 * @example
 * <pre>
 * <rx-page title="'Page Title'"></rx-page>
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

            var pageDiv = element[0];
            var pageBodyDiv = pageDiv.querySelector('.page-content');

            // Move the specified attribute from rxPage div to page-body div
            function moveLayoutAttrib (attr) {

                // Only apply to attributes that start with 'layout'
                if (!_.isString(attr.name) || !attr.name.match(/^layout/)) {
                    return;
                }

                pageBodyDiv.setAttribute(attr.name, pageDiv.getAttribute(attr.name));
                pageDiv.removeAttribute(attr.name);
            }

            // Relocate all layout attributes
            var i = pageDiv.attributes.length;
            while (i--) {
                moveLayoutAttrib(pageDiv.attributes[i]);
            }
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
});

angular.module('encore.ui.rxApp')
/**
* @ngdoc directive
* @name rxApp.directive:rxStatusTag
* @restrict E
* @scope
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

angular.module('encore.ui.rxApp')
/**
 * @ngdoc directive
 * @name rxApp.directive:rxTicketSearch
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxAppRoutes
 * @description
 * Manages page routes, building urls and marking them as active on route change.
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

            isActiveByKey: function (key) {
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

/**
 * @ngdoc overview
 * @name rxAttributes
 * @description
 * # rxAttributes Component
 *
 * This component allows you to add attributes based on a value in scope being defined or not.
 *
 * ## Example
 *
 * <pre>
 * <div rx-attributes="{'my-custom-attr': customAttrVal, 'ng-click': noFunc}"
 *      ng-controller="myCtrl">
 * </div>
 *</pre>
 *
 * <pre>
 * angular.module('demoApp')
 * .controller('myCtrl', function ($scope) {
 *     $scope.customAttrVal = 'some value';
 * });
 * </pre>
 *
 * Given this code, if the scope only had `$scope.customAttrVal` set, only
 * `my-custom-attr` would be added to the component. Since noFunc was never
 * defined, `ng-click` isn't added.
 *
 * The output of the above code is:
 *
 * <pre>
 * <div my-custom-attr="some value" ng-controller="myCtrl"></div>
 * </pre>
 *
 * ## Value Format
 *
 * The value of `rx-attributes` follows the same object convention as
 * `ng-class`, in that it takes in an object to parse through. The object
 * follows this pattern:
 *
 * <pre>
 * {
 *     'attribute-name': scopeValue,
 *     'another-attribute-name': anotherScopeValue,
 * }
 * </pre>
 *
 * ## Directives
 * * {@link rxAttributes.directive:rxAttributes rxAttributes}
 */
angular.module('encore.ui.rxAttributes', []);

angular.module('encore.ui.rxAttributes')
/**
 * @ngdoc directive
 * @name rxAttributes.directive:rxAttributes
 * @restrict A
 * @description
 *
 * This drective allows you to add attributes based on a value in scope being defined or not.
 *
 * @param {JSON} rxAttributes an attribute allows you to add custom attributes
 */
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxAutoSave
 * @description
 * A factory that controllers can use to help automatically save and load
 * form data (via rxLocalStorage) on any given page.
 *
 * `rxAutoSave` provides a way to store values in a form for later. For instance, if a user is entering values into a
 * form, then accidentally navigate to a new page, we likely want the values to be present again when they click the
 * "Back" button in their browser. By correctly setting up an `rxAutoSave` instance for the form, this can happen
 * automatically. By default, all saved values will be cleared after two days.
 *
 * `rxAutoSave` is a service intended to be used in controllers. No directives are provided. The intent is that the
 * HTML forms themselves will have no knowledge that their values are being saved. `rxAutoSave` operates by doing a
 * `$watch` on the model values for a given form, storing those model values whenever they change, and loading them
 * on instantation.
 *
 * The stored data is keyed on the page URL. This means you can track the form state for multiple pages simultaneously.
 * For example, say you have an "Edit" form. The user has gone to edit some values for "Server1", at
 * `"/servers/server1/edit"`, and for "Server2" at `"/servers/server2/edit"`. The edit progress for both servers will
 * be saved independently of each other. `rxAutoSave` will also let you independently store values for multiple forms
 * appearing on the same page.
 *
 * By default, all values are stored in {@link utilities.service:rxLocalStorage rxLocalStoage} which interfaces with the
 * browser's `LocalStorage` object. This means that if a user logs into a different computer, their stored values will
 * not be present.  Use of `SessionStorage` is also supported out-of-the-box. If you wish to save form states elsewhere
 * (for instance, to an API), see the "Storage Location" section below.
 *
 * ## Setting up your template
 *
 * Nothing explicit needs to be done in your templates to add support for `rxAutoSave`. The only requirement is that all
 * the `ng-model` values in a given form are stored within one object (`formData` below). For example, say you have the
 * following form in your template:
 *
 * <pre>
 *   <form name="demoForm" rx-form>
 *       <rx-form-section stacked>
 *           <rx-field>
 *               <rx-field-name>A checkbox field!:</rx-field-name>
 *               <rx-field-content>
 *                   <rx-input>
 *                       <input rx-checkbox id="chkCheckbox" ng-model="formData.checkbox" />
 *                       <label for="chkCheckbox">I likely don't disagree</label>
 *                   </rx-input>
 *               </rx-field-content>
 *           </rx-field>
 *
 *           <rx-field>
 *               <rx-field-name>Name:</rx-field-name>
 *               <rx-field-content>
 *                   <rx-input>
 *                       <input type="text" ng-model="formData.name" />
 *                   </rx-input>
 *               </rx-field-content>
 *           </rx-field>
 *
 *           <rx-field>
 *             <rx-field-name>Description:</rx-field-name>
 *             <rx-field-content>
 *                 <rx-input>
 *                     <textarea rows="10" ng-model="formData.description"></textarea>
 *                 </rx-input>
 *             </rx-field-content>
 *           </rx-field>
 *       </rx-form-section>
 *   </form>
 * </pre>
 *
 * **NOTE:** All the models for the form are attributes of the `formData` scope variable.
 *
 * ## Setting up your controller
 *
 * In your controller, you would have something like this in your initialization:
 *
 * <pre>
 *   $scope.formData = {
 *       checkbox: false,
 *       name: '',
 *       description: ''
 *   };
 * </pre>
 *
 * By default, every time this page was loaded, the form would be initialized with an unchecked checkbox, a blank
 * `Name` field and a blank `Description`.
 *
 * To have `rxAutoSave` automatically save values, first inject `rxAutoSave` into your controller, and modify
 * initialization as follows:
 *
 * <pre>
 *   $scope.formData = {
 *       checkbox: false,
 *       name: '',
 *       description: ''
 *   };
 *
 *   var autosave = rxAutoSave($scope, 'formData');
 * </pre>
 *
 * And that's it! Your `rxAutoSave` instance will watch for any change to `$scope.formData`, and will automatically
 * write those changes to `rxLocalStorage`.
 *
 * A third argument can be passed to `rxAutoSave`, specifying usage options. The default values for these options are:
 *
 * <pre>
 *   var autosave = rxAutoSave($scope, 'formData', {
 *     clearOnSuccess: null,        // Promise
 *     ttl: 172800,                 // Integer (seconds) - two days default
 *     load: true,                  // Boolean or Promise that will resolve with a Boolean
 *     save: true,                  // Boolean or Promise that will resolve with a Boolean
 *     exclude: [],                 // Array<String>
 *     storageBackend: rxLocalStorage // Object
 *   });
 * </pre>
 *
 * All of these options will be described below.
 *
 * ## Multiple Forms on one page
 *
 * `rxAutoSave` supports independently saving multiple forms on one page. To do this, have each form's model in its own
 * object, and create individual `rxAutoSave` instances for each. i.e.:
 *
 * <pre>
 *   $scope.form1Data = {
 *       checkbox: false,
 *       name: '',
 *       description: ''
 *   };
 *
 *   $scope.form2Data = {
 *       customerName: '',
 *       birthday: ''
 *   };
 *
 *   var autosave1 = rxAutoSave($scope, 'form1Data');
 *   var autosave2 = rxAutoSave($scope, 'form2Data');
 * </pre>
 *
 * ## Clearing values
 *
 * If you need to clear the stored values, you can call `autosave.clear()`. This will clear the values from
 * `rxLocalStorage`, but won't affect your `$scope.formData` values.
 *
 * More likely, rather than manually calling `autosave.clear()`, you'd like the values to be cleared on a "successful
 * submit". For example, if your user is editing the form described above, and they click a "Submit" button to send the
 * values to a server, `rxLocalStorage` should be cleared for this form if the server call is a success.
 *
 * To do this, pass an "options" parameter as the third argument to `rxAutoSave`, setting a promise on the
 * `clearOnSuccess` attribute, i.e.
 *
 * <pre>
 *   var autosave = rxAutoSave($scope, 'formData', { clearOnSuccess: serverSubmitPromise });
 * </pre>
 *
 * If the `serverSubmitPromise` resolves, then `rxAutoSave` will automatically clear the stored values for `formData` on
 * this page.
 *
 * When instantiating your controller, there's a good chance that the `clearOnSuccess` promise you are interested in
 * does not actually exist yet, i.e. if you want to clear on a successfull submit, you need the submit `promise`.
 * Instances of `rxAutoSave` provide a `clearOnSuccess()` method to accept this promise after instantiation:
 *
 * <pre>
 *   var autosave = rxAutoSave($scope, 'formData');
 *
 *   // Take some other actions
 *   ...
 *
 *   $scope.onSubmit = function () {
 *       // Server.save() is some $resource that returns a promise
 *       var promise = Server.save($scope.formData);
 *       autosave.clearOnSuccess(promise);
 *   }
 * </pre>
 *
 * ## Automatic expiry
 *
 * Another way to automatically clear values is to set an explict Time-To-Live (TTL) when instantiating your
 * `rxAutoSave` instance. This is done with the `ttl` property of the `opts` object,
 *
 * <pre>
 *   // Automatically expire after 24 hours
 *   var autosave = rxAutoSave($scope, 'formData', { ttl: 86400 });
 * </pre>
 *
 * By default, a `ttl` of `172800` (two days) is used.
 *
 * The `ttl` property takes a length of time in seconds. Whenever something in `formData` changes, the expiry time will
 * be freshly set. With the example above, whenever `formData` is changed, the new expiry time will be set to 24 hours
 * from the time of the change. In addition, we freshly set the expiry time whenever the data is loaded. If `formData`
 * is 12 hours away from expiring, and the user visits the page again, then the expiry will be freshly set to a new 24
 * hours, whether or not the user makes a change.
 *
 * If a user visits a page after the data has expired, the data will be cleared from storage and not automatically
 * loaded. (i.e. we're not running a continuous background process to look for expired data, we only check for
 * expiration the next time `rxAutoSave` tries to load the data).
 *
 * To turn off automatic expiry for a given form, pass a value of `{ ttl: 0 }`. In this case, the data will never
 * expire. You will have to clear it at an appropriate time by using one of the methods mentioned above.
 *
 * ## Preventing automatic loading
 *
 * If you need to prevent `rxAutoSave` from automatically loading stored values, you can again use the optional third
 * parameter, this time setting `load: false`, i.e.
 *
 * <pre>
 *   var autosave = rxAutoSave($scope, 'formData', { load: false });
 * </pre>
 *
 * `load:` will accept a boolean, or it can accept a promise that eventually resolves to a boolean. Accepting a promise
 * will let you delay your decision on whether or not to load (for example, asking a user if they want values loaded).
 * Note that if you use a promise, `rxAutoSave` will look at its resolved value. If the resolved value is `true`, then
 * the data will be loaded. If the resolved value is `false`, or the promise fails/rejects, then the data will not be
 * loaded.
 *
 * ## Excluding some values from loading/saving
 *
 * By default, `rxAutoSave` automatically loads and saves all the stored values for a form. If you want to prevent it
 * from loading/saving _some_ values, you can do:
 *
 * <pre>
 *   var autosave = rxAutoSave($scope, 'formData', { exclude: ['description'] });
 * </pre>
 *
 * This will tell `rxAutoSave` not to load from or save to the stored `description` value, but everything else in
 * `formData` will be loaded/saved.
 *
 * ## Manual saving
 *
 * It might be that you don't want your `rxAutoSave` instance to automatically save to the storage backend
 * automatically. In some cases, you might want to disable automatic saving and instead manually tell your instance
 * when it should save. To turn off automatic saving, set up your instance as follows:
 *
 * <pre>
 *   var manualsave = rxAutoSave($scope, 'formData', { save: false });
 * </pre>
 *
 * Then, whenever you want your `autosave` instance to commit the current model values to storage, do
 *
 * <pre>
 *   manualsave.save();
 * </pre>
 *
 * As with the `load` parameter, you can pass either a boolean or a promise to `save`.
 *
 * ## Storage location
 *
 * All values for `rxAutoSave` are by default stored in the browser's `LocalStorage` through the `rxLocalStorage`
 * service, and keyed on the URL of the page, with a `rxAutoSave::` prefix. For example, if the above form were
 * present at the URL `'users/JonnyRocket/edit'`, then the form data would be saved into the browser's `LocalStorage`
 * at location `'rxAutoSave::users/JonnyRocket/edit'`.
 *
 * If you wish to use a different storage backend (`SessionStorage`, for instance), use the `storageBackend` parameter:
 *
 * <pre>
 *    var autosave = rxAutoSave($scope, 'formData', { storageBackend: SessionStorage });
 * </pre>
 *
 * `storageBackend` requires that you pass it an object which has `getObject(key)` and `setObject(key, val)` methods.
 * `rxLocalStorage` and `SessionStorage` are both provided by EncoreUI, and support this interface.
 *
 * You can use your own custom backends as well, as long as it supports `getObject(key)` and `setObject(key, val)`.
 *
 * ## Custom Storage Key Values
 *
 * Sometimes, it may be necessary to change how a key is formed for the specified `storageBackend`. As previously
 * stated, these are calculated by prepending `'rxAutoSave::'` before the url. You can override this by passing in a
 * `keyShaping` function to the options object.
 *
 * An example one would be as follows:
 *
 * <pre>
 *   var autosave = rxAutoSave($scope, 'formData', {
 *       keyShaping: function (key) {
 *           return key.replace('?cache=false', '');
 *       }
 *   });
 * </pre>
 *
 * The above example could be used to have the current url ignore any caching flags passed in. The `keyShaping`
 * function will receive the default calculated key (`rxAutoSave::` + $location.url()). By default, `keyShaping`
 * just returns the original calculated key.
 *
 *
 * @param {Object} scope scope to apply a `$watch` expression
 * @param {String} variable
 * variable name corresponding to an object on the given scope
 * @param {Object=} options usage options
 * @param {Promise} [options.clearOnSuccess=null] *optional* -
 * Clear saved data on successful resolution of given promise.
 *
 * @param {Function} [options.keyShaping]
 * Sometimes, it may be necessary to change how a key is formed for the specified
 * `storageBackend`.  Keys are calculated by prepending `'rxAutoSave::'` before the
 * url. Your custom `keyShaping` function will take one parameter (`key`), to which
 * you may modify to your specific needs.
 *
 * The below example will ignore any caching flags in the url.
 * <pre>
 * var autosave = rxAutoSave($scope, 'formData', {
 *     keyShaping: function (key) {
 *         return key.replace('?cache=false', '');
 *     }
 * });
 * </pre>
 *
 * @param {Integer} [options.ttl=172800] *optional* -
 * Time to Live (in seconds) - defaults to 2 days
 *
 * Whenever data changes in the watched variable, the expiry time will be freshly set
 * In addition, we freshly set the expiry time whenever the data is loaded. If the data
 * is 12 hours away from expiring and a user visits the page again, the expiry will be
 * freshly set to a new 48 hours, whether or not the user makes a change.
 *
 * If a user visits a page after the data has expired, the data will be cleared from
 * storage and not automatically loaded.
 * * A continuous background process is not running to look for expired data.
 * * We only check for expiration the next time `rxAutoSave` tries to load the data.
 *
 * To turn off automatic expiry for a given form, pass a value of `{ ttl: 0 }`.
 * In this case, the data will never expire and you will have to clear it manually at
 * an appropriate time by using one of the following:
 *
 * * `clear()`
 * * `clearOnSuccess()`
 *
 * @param {Boolean|Promise} [options.load=true] *optional* -
 * If false, will prevent data from being automatically loaded onto the scope.
 *
 * You may use a promise that resolves to a boolean, if desired.
 * @param {Boolean|Promise} [options.save=true] *optional* -
 * If false, will prevent data from being automatically saved on change.
 *
 * You may use a promise that resolves to a boolean, if desired.
 * @param {String[]} [options.exclude] *optional* -
 * A string of property names to exclude from automatic save. This is useful to
 * exclude saving any sensitive information like passwords, credit card numbers, etc.
 *
 * <pre>
 * var autosave = rxAutoSave($scope, 'formData', { exclude: ['password'] });
 * </pr>
 *
 * @param {Object} [options.storageBackend=rxLocalStorage] *optional* -
 * Must be an object which has `getObject(key)` and `setObject(key, val)` methods.
 * `rxLocalStorage` and `SessionStorage` are both provided by EncoreUI, and support
 * this interface.
 *
 * You can use your own custom backends as well, as long as it supports `getObject(key)`
 * and `setObject(key, val)`.
 */
.factory('rxAutoSave', ["$location", "$q", "debounce", "rxLocalStorage", function ($location, $q, debounce, rxLocalStorage) {
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
    // rxLocalStorage.
    //
    // @param watchVar - the string name of the
    //                   object that's being watched, representing the model for the form.
    //                   StorageAPI is not publically exposed, it can only be used and accessed
    //                   by the rxAutoSave instance
    // @param [storageBackend] - Optional, defaults to rxLocalStorage. If you pass in a storage object,
    //                           it must support both getObject(key) and setObject(key, val), matching
    //                           the operations of rxLocalStorage and SessionStorage
    // @param [keyShaping] - Optional, defaults to just returning the originally defined key value.
    //                       It gets passed the original value defined ('rxAutoSave::' + $location.url())
    //                       and is expected to return the new key that you wish to have used.
    var StorageAPI = function (watchVar, storageBackend, keyShaping) {
        this.key = keyShaping('rxAutoSave::' + $location.url());
        this.watchVar = watchVar;
        this.storage = storageBackend ? storageBackend : rxLocalStorage;
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
    // `form` object from rxLocalStorage. This form object should include
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

    // Given a full form object, save it into rxLocalStorage,
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
    // into rxLocalStorage
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
    // data, into rxLocalStorage
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
            keyShaping: _.identity,
            storageBackend: rxLocalStorage
        });

        opts.ttl = opts.ttl * 1000; // convert back to milliseconds

        var api = new StorageAPI(watchVar, opts.storageBackend, opts.keyShaping);

        var updateExpiryTime = function () {
            if (opts.ttl > 0) {
                api.setExpiryTime(_.now() + opts.ttl);
            }
        };

        // Responsible for loading the data from the browser's LocalStorage into the form
        var load = function () {
            var expires = api.getExpires();
            if (expires > 0 && expires <= _.now()) {
                // This data has expired. Make sure we clear it out
                // of the browser's LocalStorage
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

        function update (newVal) {
            // Get the current data stored for this watchVar
            var data = api.getDataObject();

            // Overwrite all properties in allWatchVars[watchVar] with properties from
            // newVal, except for the properties in opts.exclude
            _.assign(data, _.omit(newVal, opts.exclude));

            // Store the newly changed data in rxLocalStorage
            api.setDataObject(data);

            // Update the expiry time whenever we modify data
            updateExpiryTime();
        }

        // We don't want to write to the browser's LocalStorage every time the model changes,
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
 * @ngdoc overview
 * @name rxBreadcrumbs
 * @description
 * # rxBreadcrumbs Component
 *
 * `rxBreadcrumbs` adds or updates page navigation breadcrumbs on a page.
 *
 * ## Directives
 * * {@link rxBreadcrumbs.directive:rxBreadcrumbs rxBreadcrumbs}
 */
angular.module('encore.ui.rxBreadcrumbs', [
    'ngSanitize'
]);

angular.module('encore.ui.rxBreadcrumbs')
/**
 * @ngdoc directive
 * @name rxBreadcrumbs.directive:rxBreadcrumbs
 * @restrict E
 * @scope
 * @description
 * Responsible for drawing the breadcrumbs for a page
 *
 *
 * By default, the first breadcrumb will always have an URL of `'/'` and a name of `'Home'`. This can be changed
 * with the `rxBreadcrumbsSvc.setHome` method (see {@link utilities.service:rxBreadcrumbsSvc rxBreadcrumbsSvc}).
 *
 * @param {String=} status
 * The tag to apply to any breadcrumbs with usePageStatusTag:true
 *
 * This leverages the tags defined in {@link rxApp} to display status tags directly inside of breadcrumbs.
 * For a given breadcrumb, `status` will take precedence over `usePageStatusTag`, i.e. it will use a tag defined in
 * `status` instead of checking for and using a tag for the page.
 *
 * @param {Boolean=} [usePageStatusTag=false]
 * If you set it to `true`,
 * then the breadcrumb will use whatever status tag was passed to page, i.e.:
 * <pre>
 * <rx-page status="alpha">
 * </pre>
 * This will cause any breadcrumb marked with `usePageStatusTag` on this page to receive the `"alpha"` status tag.
 *
 * @example
 * <pre>
 * <rx-app site-title="Custom Title"></rx-app>
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxBreadcrumbsSvc
 * @description
 * `rxBreadcrumbsSvc` provides various methods to manipulate breadcrumbs.
 *
 */
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

    /**
     * @ngdoc function
     * @name rxBreadcrumbsSvc.setHome
     * @methodOf utilities.service:rxBreadcrumbsSvc
     * @description
     * By default, the first breadcrumb will always have an URL of `'/'` and a name of `'Home'`.  This can be changed
     * with the `rxBreadcrumbsSvc.setHome` method.
     *
     * It takes the *new path* as the `first argument`, and an *optional name* as the `second argument`. If you don't
     * pass the `second argument`, it will reuse whatever name is already there (i.e. `'Home'`).
     * The breadcrumb name can contain HTML (ie. `'<strong>Home</strong>'`).
     *
     * @param {String} path This is the relative path within app.
     * @param {String=} name This will be the display name.
     *
     * @example
     * <pre>
     * breadcrumbsService.setHome = function (path, name) {
     *   breadcrumbs[0] = {
     *     path: path,
     *     name: name || breadcrumbs[0].name
     *   };
     * };
     * </pre>
     *
     */
    breadcrumbsService.setHome = function (path, name) {
        breadcrumbs[0] = {
            path: path,
            name: name || breadcrumbs[0].name
        };
    };

    return breadcrumbsService;
});

/**
 * @ngdoc overview
 * @name rxBulkSelect
 * @requires atoms.directive:rxCheckbox
 * @description
 * # rxBulkSelect Component
 *
 * A component used to perform an action on multiple items in a table.
 *
 * ## Directives
 * * {@link rxBulkSelect.directive:rxBatchActions rxBatchActions}
 * * {@link rxBulkSelect.directive:rxBulkSelect rxBulkSelect}
 * * {@link rxBulkSelect.directive:rxBulkSelectHeaderCheck rxBulkSelectHeaderCheck}
 * * {@link rxBulkSelect.directive:rxBulkSelectRow rxBulkSelectRow}
 * * {@link rxBulkSelect.directive:rxBulkSelectValidate rxBulkSelectValidate}
 */
angular.module('encore.ui.rxBulkSelect', [
    'encore.ui.utilities',
    'encore.ui.atoms'
]);

angular.module('encore.ui.rxBulkSelect')
/**
 * @ngdoc directive
 * @name rxBulkSelect.directive:rxBatchActions
 * @restrict E
 * @scope
 * @requires rxBulkSelect.directive:rxBulkSelect
 * @description
 *
 * This directive is responsible for adding the batch action menu link
 * inside a table header. It can only be used when rxBulkSelect is also
 * present. It should be placed in a `<th>` element.
 *
 * It will also transclude `<li>` items, each representing a modal bulk
 * select action. You don't need to include the correctly styled `<ul>`, it
 * will do this for you.
 *
 * @example
 * <pre>
 * <th colspan="10">
 *     <rx-batch-actions>
 *         <li>
 *             <rx-modal-action
 *                 template-url="templates/suspend-modal.html"
 *                 controller="SuspendServersCtrl"
 *                 classes="msg-info">
 *                 <i class="fa fa-fw fa-power-off msg-info"></i>
 *                 Suspend Selected Servers
 *             </rx-modal-action>
 *         </li>
 *     </rx-batch-actions>
 * </th>
 * </pre>
 */
.directive('rxBatchActions', ["rxDOMHelper", function (rxDOMHelper) {
    return {
        restrict: 'E',
        require: ['^rxBulkSelect', '?^rxFloatingHeader'],
        templateUrl: 'templates/rxBatchActions.html',
        transclude: true,
        link: function (scope, element, attrs, controllers) {

            var rxBulkSelectCtrl = controllers[0],
                rxFloatingHeaderCtrl = controllers[1];

            // We need to add the class onto the parent <tr>, so rxFloatingHeader can
            // easily identify this <tr>
            element.parent().parent().addClass('rx-table-filter-row');

            scope.displayed = false;

            scope.toggleBulkActions = function () {
                scope.displayed = !scope.displayed;
            };

            var numSelectedChange = function (numSelected) {
                scope.rowsSelected = numSelected > 0;
                if (numSelected === 0) {
                    scope.displayed = false;
                }
            };
            rxBulkSelectCtrl.registerForNumSelected(numSelectedChange);

            if (_.isObject(rxFloatingHeaderCtrl)) {
                // When rxBatchActions lives inside of an rxFloatingHeader enabled table,
                // the element will be cloned by rxFloatingHeader. The issue is that a normal
                // .clone() does not clone Angular bindings, and thus the cloned element doesn't
                // have `ng-show="displayed"` on it. We can manually add `ng-hide` on startup, to
                // ensure that class is present in the clone. After that, everything will work as expected.
                if (!scope.displayed) {
                    rxDOMHelper.find(element, '.batch-action-menu-container').addClass('ng-hide');
                }
                rxFloatingHeaderCtrl.update();
            }

        }
    };
}]);

angular.module('encore.ui.rxBulkSelect')
/**
 * @ngdoc directive
 * @name rxBulkSelect.directive:rxBulkSelect
 * @restrict A
 * @scope
 * @description
 *
 * A directive you place on your `<table>` element to enable bulk select.
 * This directive will automatically add `<tr bulk-select-message>` into your <thead>,
 * which will appear whenever items are selected, and disappear when none are selected.
 * The main responsibility of this directive is to provide a controller for other
 * bulk-select-related directives to interact with.
 *
 * <pre>
 * <table rx-bulk-select
 *        bulk-source="servers"
 *        selectedKey="rowIsSelected">
 * </table>
 * </pre>
 *
 * The directive is also responsible for adding a row to the table header that
 * indicates how many rows are selected and contains buttons to select or deselect
 * all the rows at once.
 *
 * @param {Object} bulkSource The source list that the table ng-repeats over.
 * @param {String} selectedKey The attribute on items in bulkSource that will be used to track
 *                             if the user has clicked the checkbox for that item.
 * @param {String=} [resourceName=bulkSource] The name of the resource being iterated over.
 */
.directive('rxBulkSelect', function () {
    var elemString = '<tr rx-bulk-select-message></tr>';
    return {
        restrict: 'A',
        scope: {
            bulkSource: '=',
            selectedKey: '@'
        },
        compile: function (elem, attrs) {

            // We add the `<tr rx-bulk-select-message>` row to the header here to save the devs
            // from having to do it themselves.
            var thead = elem.find('thead').eq(0);
            var messageElem = angular.element(elemString);
            messageElem.attr('resource-name', attrs.resourceName || attrs.bulkSource.replace(/s$/, ''));
            thead.append(messageElem);

            return function (scope, element) {
                scope.tableElement = element;
            };
        },
        controller: 'rxBulkSelectController'
    };
});

angular.module('encore.ui.rxBulkSelect')
/**
 * @ngdoc directive
 * @name rxBulkSelect.directive:rxBulkSelectHeaderCheck
 * @restrict A
 * @scope
 * @requires rxBulkSelect.directive:rxBulkSelect
 * @description
 *
 * A directive you place on your `<th>` element representing the checkbox column.
 * This places a checkbox in the header, which will select all items on the current
 * page when clicked.
 *
 * @example
 * <pre>
 * <th rx-bulk-select-header-check></th>
 * </pre>
 */
.directive('rxBulkSelectHeaderCheck', ["$compile", function ($compile) {
    var selectAllCheckbox = '<input ng-model="allSelected" ng-change="selectAll()" rx-checkbox>';
    return {
        restrict: 'A',
        scope: true,
        require: '^rxBulkSelect',
        link: function (scope, element, attrs, rxBulkSelectCtrl) {
            scope.allSelected = false;
            scope.selectAll = function () {
                if (scope.allSelected) {
                    rxBulkSelectCtrl.selectAllVisibleRows();
                } else {
                    rxBulkSelectCtrl.deselectAllVisibleRows();
                }
            };
            element.append($compile(selectAllCheckbox)(scope).parent());

            var testAllSelected = function () {
                var stats = rxBulkSelectCtrl.messageStats;
                scope.allSelected = stats.numSelected === stats.total;
            };
            rxBulkSelectCtrl.registerForNumSelected(testAllSelected);
            rxBulkSelectCtrl.registerForTotal(testAllSelected);

            var uncheck = function () {
                scope.allSelected = false;
            };
            rxBulkSelectCtrl.registerHeader(uncheck);
        }
    };
}]);

angular.module('encore.ui.rxBulkSelect')
/**
 * @ngdoc directive
 * @name rxBulkSelect.directive:rxBulkSelectMessage
 * @restrict A
 * @scope
 * @requires rxBulkSelect.directive:rxBulkSelect
 * @description
 *
 * This directive is responsible for drawing the appearing/disappearing
 * "message" row in the table header. This row shows how many items have
 * been selected, and gives buttons for "Select All" and "Clear All"
 *
 * You should not use this directive directly. It will be drawn automatically
 * by rxBulkSelect.
 *
 * If the table also has rxFloatingHeader available, this directive will
 * communicate with the controller from rxFloatingHeader, to correctly
 * support the appearing/disappearing of this header row.
 *
 * @param {String} resourceName The singular form of the name of the resource, e.g. 'server'.
 *
 */
.directive('rxBulkSelectMessage', function () {
    return {
        restrict: 'A',
        require: ['^rxBulkSelect', '?^rxFloatingHeader'],
        scope: {
            resourceName: '@'
        },
        templateUrl: 'templates/rxBulkSelectMessage.html',
        link: function (scope, element, attr, controllers) {
            element.addClass('ng-hide');

            var rxBulkSelectCtrl = controllers[0],
                // Optional controller, so mock it out if it's not present
                // https://github.com/eslint/eslint/issues/5537
                // eslint-disable-next-line object-curly-spacing
                rxFloatingHeaderCtrl = controllers[1] || { update: function () {} };

            scope.selectAll = function () {
                rxBulkSelectCtrl.selectEverything();
            };

            scope.deselectAll = function () {
                rxBulkSelectCtrl.deselectEverything();
            };

            scope.numSelected = 0;
            scope.total = rxBulkSelectCtrl.messageStats.total;

            var numSelectedChange = function (numSelected, oldNumSelected) {
                scope.numSelected = numSelected;
                var multiple = numSelected > 1;
                scope.plural = multiple ? 's' : '';
                scope.isOrAre = multiple ? 'are' : 'is';

                // We could use `ng-show` directly on the directive, rather
                // than manually adding/removing the `.ng-hide` class here. The issue
                // that causes is that ng-show will run before rxFloatingHeader
                // runs its stuff, and it causes it to not see when `.ng-hide`
                // has been removed. That causes it to clone the message row
                // with `.ng-hide` on it, which results in jumpiness at the top
                // of the table
                if (numSelected === 0) {
                    element.addClass('ng-hide');
                    rxFloatingHeaderCtrl.update();
                } else if (numSelected > 0 && oldNumSelected === 0) {
                    // Only explicitly do this work if we're transitioning from
                    // numSelected=0 to numSelected>0
                    element.removeClass('ng-hide');
                    rxFloatingHeaderCtrl.update();
                }
            };
            rxBulkSelectCtrl.registerForNumSelected(numSelectedChange);

            rxBulkSelectCtrl.registerForTotal(function (newTotal) {
                scope.total = newTotal;
            });
            rxFloatingHeaderCtrl.update();
        }
    };
});

angular.module('encore.ui.rxBulkSelect')
/**
 * @ngdoc directive
 * @name rxBulkSelect.directive:rxBulkSelectRow
 * @restrict A
 * @scope
 * @requires rxBulkSelect.directive:rxBulkSelect
 * @description
 *
 * A directive you place on your `<td>` element which will contain the bulk-select
 * checkbox. This directive draws the checkbox itself. This directive takes
 * `row` as an attribute, pointing to the object representing this row.
 *
 * @param {Object} row The object representing this row, i.e. the left side of the ng-repeat
 *
 * @example
 * <pre>
 * <td rx-bulk-select-row row="server"></td>
 * </pre>
 */
.directive('rxBulkSelectRow', function () {
    return {
        restrict: 'A',
        scope: {
            row: '='
        },
        require: '^rxBulkSelect',
        template: '<input ng-change="onChange()" ng-model="row[key]"' +
                  ' rx-checkbox class="rx-bulk-select-row" />',
        link: function (scope, element, attrs, rxBulkSelectCtrl) {
            scope.key = rxBulkSelectCtrl.key();
            scope.onChange = function () {
                if (scope.row[scope.key]) {
                    rxBulkSelectCtrl.increment();
                } else {
                    rxBulkSelectCtrl.decrement();
                }
            };
        }
    };
});

angular.module('encore.ui.rxBulkSelect')
/**
 * @ngdoc directive
 * @name rxBulkSelect.directive:rxBulkSelectValidate
 * @restrict A
 * @requires rxBulkSelect.directive:rxBulkSelect
 * @description
 *
 * A directive used to validate rxBulkSelect in a form. The directive should be placed
 * on the same element as rxBulkSelect. The form will be invalid when no items are selected
 * and valid when at least one item is selected.
 */
.directive('rxBulkSelectValidate', function () {
    return {
        require: ['^form', 'rxBulkSelect'],
        restrict: 'A',
        link: function (scope, elm, attrs, controllers) {
            var formCtrl = controllers[0];
            var bulkSelectCtrl = controllers[1];
            var setValidity = function () {
                var stats = bulkSelectCtrl.messageStats;
                formCtrl.$setValidity('selected', stats.numSelected > 0);
            };

            bulkSelectCtrl.registerForNumSelected(setValidity);
            formCtrl.$setValidity('selected', false);
        }
    };
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc controller
 * @name utilities.controller:rxBulkSelectController
 * @scope
 * @description
 * Provides controller logic for {@link rxBulkSelect}.
 */
.controller('rxBulkSelectController', ["$scope", "NotifyProperties", "rxBulkSelectUtils", function ($scope, NotifyProperties, rxBulkSelectUtils) {
    $scope.showMessage = false;

    var uncheckHeaderFn = _.noop,
        messageStats = {
            // jscs:disable disallowDanglingUnderscores
            _numSelected: 0,
            _total: 0
        };

    this.registerForNumSelected = NotifyProperties.registrationFn(messageStats, 'numSelected', '_numSelected');
    this.registerForTotal = NotifyProperties.registrationFn(messageStats, 'total', '_total');

    this.messageStats = messageStats;

    var numSelected = function () {
        var selected = _.where($scope.bulkSource, $scope.selectedKey);
        return selected.length;
    };

    var updateMessageStats = function () {
        messageStats.numSelected = numSelected();
        messageStats.total = $scope.bulkSource.length;
    };

    this.key = function () {
        return $scope.selectedKey;
    };

    var setAllVisibleRows = function (state) {
        rxBulkSelectUtils.setAllVisibleRows(state, $scope.tableElement, $scope.selectedKey);
    };

    var setAllRows = function (state) {
        _.each($scope.bulkSource, function (item) {
            item[$scope.selectedKey] = state;
        });
    };

    this.selectAllVisibleRows = function () {
        setAllVisibleRows(true);
        updateMessageStats();
    };

    this.deselectAllVisibleRows = function () {
        setAllVisibleRows(false);
        updateMessageStats();
        uncheckHeaderFn();
    };

    this.selectEverything = function () {
        setAllRows(true);
        updateMessageStats();
    };

    this.deselectEverything = function () {
        setAllRows(false);
        updateMessageStats();
        uncheckHeaderFn();
    };

    $scope.$watch('bulkSource.length', function (newTotal) {
        if (newTotal !== messageStats.total) {
            updateMessageStats();
        }
    });

    this.increment = function () {
        messageStats.numSelected += 1;
    };

    this.decrement = function () {
        messageStats.numSelected -= 1;
    };

    this.registerHeader = function (uncheck) {
        if (_.isFunction(uncheck)) {
            uncheckHeaderFn = uncheck;
        }
    };
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxBulkSelectUtils
 * @description
 * Selects or deselects all visible rows. Support function for `rxBulkSelect`.
 */
.factory('rxBulkSelectUtils', function () {
    var rxBulkSelectUtils = {};

    var allVisibleRows = function (tableElement) {
        return _.map(tableElement[0].querySelectorAll('td .rx-bulk-select-row'), angular.element);
    };

    // state is true or false, indicating whether the rows should be selected or deselected
    rxBulkSelectUtils.setAllVisibleRows = function (state, tableElement, rowKey) {
        _.each(allVisibleRows(tableElement), function (row) {
            row.scope().row[rowKey] = state;
        });
    };

    return rxBulkSelectUtils;
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:rxCapitalize
 * @description
 * The `rxCapitalize` filter capitalizes the first word in a string via an Angular filter.
 */
.filter('rxCapitalize', function () {
    return function (input) {
        if (!_.isString(input)) {
            return '';
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
});

/**
 * @ngdoc overview
 * @name rxCharacterCount
 * @description
 * # rxCharacterCount Component
 *
 * A component designed for `<textarea>` elements that provides character count
 * functionality.
 *
 * ## Directives
 * * {@link rxCharacterCount.directive:rxCharacterCount rxCharacterCount}
 */
angular.module('encore.ui.rxCharacterCount', []);

angular.module('encore.ui.rxCharacterCount')
/**
 * @ngdoc directive
 * @name rxCharacterCount.directive:rxCharacterCount
 * @restrict A
 * @scope
 * @description
 *
 * A component provides an attribute directive intended for adding to `<textarea>`
 * elements. Place the `rx-character-count` attribute into your `<textarea>`, and
 * a new `<div>` will be added directly underneath it. This directive requires
 * that you're using `ng-model` with your `<textarea>`
 *
 * This `<div>` will watch the content of the `<textarea>`, and display how many
 * characters are remaining. By default, 254 characters are "allowed". If there
 * are less than 10 characters remaining, the counter will go orange. If the user
 * enters more than 254 characters, the counter will go red.
 *
 * ### Leading and Trailing characters ###
 * By default, any text field using `ng-model` has `ng-trim="true"` applied to it.
 * This means that any leading and trailing spaces/blanks in your text field will
 * be ignored. They will not count towards the remaining character count. If you
 * want it to count leading/trailing spaces, then just add `ng-trim="false"` to
 * your `<textarea>`.
 *
 * ### Styling ###
 * When specifying a width other than the default, you should style some built-in
 * classes in addition to the text field itself. As in the demo, the
 * `.input-highlighting` class should have the same width as the text field
 * (if highlighting is used), and the `.counted-input-wrapper` should be used to
 * correctly position the counter.
 *
 * ### ngShow/ngHide/ngIf/ngSwitch/etc. ###
 * If you wish to show/hide your `textarea` element, we recommend placing the
 * element inside of a `<div>` or `<span>`, and doing the

 * `ng-show` / `ng-hide` / etc. on that `div` / `span`. For example,
 *
 * <pre>
 * <span ng-show="isShown">
 *     <textarea rx-character-count>{{someValue}}</textarea>
 * </span>
 * </pre>
 *
 * We _do_ have preliminary support for putting these directives directly inside
 * the `textarea`, i.e.
 *
 * <pre>
 * <textarea rx-character-count ng-show="isShown">{{someValue}}</textarea>
 * </pre>
 *
 * But this support should be considered experimental. If you choose to take
 * advantage of it, please ensure you've extensively tested that it performs
 * correctly for your uses.
 *
 * ### Highlighting ###
 * Characters that are over the limit will be highlighted in red if the
 * `highlight="true"` attribute is on the directive's element. Because this
 * functionality is currently unstable, it has been left off by default. Please
 * test your use case heavily before shipping with this feature enabled.
 *
 * Known failure cases:
 * * Content that causes a scrollbar in the textarea
 * * Initial text (coming from the model) that is over the limit
 *
 * @param {Number=} [low-boundary=10] How far from the maximum to enter a warning state
 * @param {Number=} [max-characters=254] The maximum number of characters allowed
 * @param {Boolean=} [highlight=false] Whether or not characters over the limit are highlighted
 *
 * @example
 * <pre>
 * <textarea ng-model="model" rx-character-count></textarea>
 * </pre>
 */
.directive('rxCharacterCount', ["$compile", "$timeout", function ($compile, $timeout) {
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
                element.off('input');
                $timeout(function () {
                    // When the element containing the rx-character-count is removed, we have to
                    // ensure we also remove the `wrapper`, which we created. We have to manually
                    // destroy its scope and remove the element itself. All of this has to happen
                    // in a $timeout() to ensure it occurs on the next $digest cycle, otherwise
                    // we go into an infinite loop
                    wrapper.scope().$destroy();
                    wrapper.remove();
                });
            });

        }
    };
}]);

angular.module('encore.ui.atoms')
/**
 * @name atoms.directive:rxCheckbox
 * @ngdoc directive
 * @restrict A
 * @scope
 * @description
 * Attribute directive that wraps a native checkbox element in markup required for styling purposes.
 *
 * ## Styling
 *
 * Directive results in an **inline-block element**
 * You can style the output against decendents of the **`.rxCheckbox`** CSS class.
 *
 * ## Show/Hide
 *
 * If you wish to show/hide your `rxCheckbox` element (and its label), we recommend
 * placing the element (and its label) inside of a `<div>` or `<span>` wrapper,
 * and performing the show/hide logic on the wrapper.
 *
 * <pre>
 * <span ng-show="isShown">
 *     <input rx-checkbox id="chkDemo" ng-model="chkDemo" />
 *     <label for="chkDemo">Label for Demo Checkbox</label>
 * </span>
 * </pre>
 *
 * It is highly recommended that you use `ng-show` and `ng-hide` for purposes of
 * display logic. Because of the way that `ng-if` and `ng-switch` directives behave
 * with scope, they may introduce unnecessary complexity in your code.
 *
 * @example
 * <pre>
 * <input rx-checkbox ng-model="demoValue" />
 * </pre>
 *
 * @param {Boolean=} [ng-disabled=false] Determines if the control is disabled.
 */
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
                var wrapper = '<div class="rxCheckbox"></div>';
                var fakeCheckbox = '<div class="fake-checkbox">' +
                        '<div class="tick fa fa-check"></div>' +
                    '</div>';

                element.wrap(wrapper);
                element.after(fakeCheckbox);
                // must be defined AFTER the element is wrapped
                var parent = element.parent();

                // apply/remove disabled attribute so we can
                // apply a CSS selector to style sibling elements
                if (attrs.disabled) {
                    parent.addClass(disabledClass);
                }
                if (_.has(attrs, 'ngDisabled')) {
                    scope.$watch('ngDisabled', function (newVal) {
                        if (newVal === true) {
                            parent.addClass(disabledClass);
                        } else {
                            parent.removeClass(disabledClass);
                        }
                    });
                }

                var removeParent = function () {
                    parent.remove();
                };

                // remove stylistic markup when element is destroyed
                element.on('$destroy', function () {
                    scope.$evalAsync(removeParent);
                });
            };
        }//compile
    };
});//rxCheckbox

/**
 * @ngdoc overview
 * @name rxCollapse
 * @description
 * # rxCollapse Component
 *
 * `rxCollapse` component is used to display and hide content on a page.
 *
 * ## Directives
 * * {@link rxCollapse.directive:rxCollapse rxCollapse}
 */
angular.module('encore.ui.rxCollapse', []);

angular.module('encore.ui.rxCollapse')
/**
 * @ngdoc directive
 * @name rxCollapse.directive:rxCollapse
 * @restrict E
 * @scope
 * @description
 * `rxCollapse` directive hides and shows an element with a transition.  It can be configured to show as either expanded
 * or collapsed on page load.  A double chevron(**>>**) is used to toggle between show and hide contents, while keeping
 * the header and border visible.
 *
 * ## Hide/Show Content
 *
 * * This pattern was developed for areas displaying metadata that may be short on screen real estate, as a way to hide
 *  data on load that is not as important to the user in the context where they are presented.  `rxCollapse` toggles
 *  between the *optional* `title` parameter with "*See More*" or "*See Less*".
 * * This pattern is not very responsive-friendly, since as browser width decreases, columns will wrap. As columns wrap,
 *  the "*See More*" `rxCollapse` elements get lost in the new context, which is bad for user experience.
 * * To avoid the problem described above, "*See More*" `rxCollapse` elements should only be used at the end of the
 * final column present on the page, so that when the columns wrap via flexbox, "*See More*" is always last and doesn't
 * get lost in between metadata key/value pairs.
 *
 *
 * @param {String=} [title="See More/See Less"]
 * The title to display next to the toggle button. Default is "See More/See Less" toggle.
 * @param {Boolean=} [expanded='true']
 * Initially expanded or collapsed. Default is expanded.
 *
 * @example
 * <pre>
 * <rx-collapse title="Filter results" expanded="true">Text Here</rx-collapse>
 * <rx-collapse expanded="true">Text Here</rx-collapse>
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

            scope.toggleExpanded = function () {
                scope.isExpanded = !scope.isExpanded;
            };
        }
    };
});

/**
 * @ngdoc overview
 * @name rxCompile
 * @description
 * # rxCompile Component
 *
 * A component that allows compilation of expressions inside of other expressions.
 *
 * ## Directives
 * * {@link rxCompile.directive:rxCompile rxCompile}
 */
angular.module('encore.ui.rxCompile', []);

angular.module('encore.ui.rxCompile')
/**
 * @ngdoc directive
 * @name rxCompile.directive:rxCompile
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

angular.module('encore.ui.molecules')
/**
 * @name molecules.directive:rxDatePicker
 * @ngdoc directive
 * @restrict E
 * @scope
 * @description
 * Basic date picker.
 *
 * ## Notice
 * This molecule is designed to be used in conjunction with other picker
 * molecules to compose a valid ISO 8601 DateTime string in the format of
 * <code>YYYY-MM-DDTHH:mmZ</code>.
 *
 * `rxDatePicker` provides the user a 10-year range before and after the selected date,
 * if present.  Otherwise, the range is calculated from today's date.
 *
 * * This molecule will generate a **String** in the format of `YYYY-MM-DD`
 *   to be used as the date portion of the ISO 8601 standard DateTime string
 *   mentioned above.
 * * This molecule will never generate anything other than a String.
 *
 * @param {expression} ngModel
 * Expression that evaluates to a date string in `YYYY-MM-DD` format
 *
 * @return {String} **IMPORTANT** returns an ISO 8601 standard date string in the
 * format of `YYYY-MM-DD`.
 */
.directive('rxDatePicker', function () {
    var isoFormat = 'YYYY-MM-DD';
    const YEAR_RANGE = 10;

    /**
     * @param {Moment} firstOfMonth
     * @return {Array<Moment>}
     * @description
     * Generate an array of Moment objects representing the visible
     * days on the calendar. This will automatically pad the calendar
     * with dates from previous/next month to fill out the weeks.
     */
    function buildCalendarDays (firstOfMonth) {
        var dateToken = firstOfMonth.clone().startOf('day');
        var currentMonth = dateToken.month();
        var days = [];
        var prependDay, appendDay;

        // add calendar month's days
        while (dateToken.month() === currentMonth) {
            days.push(dateToken.clone());
            dateToken.add(1, 'day');
        }

        // until first item of array is Sunday, prepend earlier days to array
        while (_.first(days).day() > 0) {
            prependDay = _.first(days).clone();
            days.unshift(prependDay.subtract(1, 'day'));
        }

        // until last item of array is Saturday, append later days to array
        while (_.last(days).day() < 6) {
            appendDay = _.last(days).clone();
            days.push(appendDay.add(1, 'day'));
        }

        return days;
    }//buildCalendarDays

    /**
     * @param {Moment} midpoint
     * @return {Array<ISO 8601 Year> }
     * @description
     * Generate an array of ISO 8601 Year (format "YYYY") years.
     */
    function generateCalendarYears (midpoint) {
        var calendarYears = [];
        var iterator = midpoint.clone().subtract(YEAR_RANGE, 'years');
        var limit = midpoint.clone().add(YEAR_RANGE, 'years');

        while (iterator.year() <= limit.year()) {
            calendarYears.push(iterator.year());

            iterator.add(1, 'year');
        }

        return calendarYears;
    }//generateCalendarYears

    return {
        templateUrl: 'templates/rxDatePicker.html',
        restrict: 'E',
        require: 'ngModel',
        scope: {
            selected: '=ngModel'
        },
        link: function (scope, element, attrs, ngModelCtrl) {
            var today = moment(new Date());

            scope.calendarVisible = false;
            // keep track of which month we're viewing in the popup (default to 1st of this month)
            scope.calendarMonth = today.clone().startOf('month');

            /* ===== "Public" Functions ===== */
            scope.toggleCalendar = function () {
                if (_.isUndefined(attrs.disabled)) {
                    scope.calendarVisible = !scope.calendarVisible;
                }
            };//toggleCalendar()

            scope.closeCalendar = function () {
                scope.calendarVisible = false;
            };

            /**
             * @param {String} destination
             * @description Modifies `scope.calendarMonth` to regenerate calendar
             */
            scope.navigate = function (destination) {
                var newCalendarMonth = scope.calendarMonth.clone();
                switch (destination) {
                    case 'nextMonth': {
                        newCalendarMonth.add(1, 'month');
                        break;
                    }
                    case 'prevMonth': {
                        newCalendarMonth.subtract(1, 'month');
                        break;
                    }
                }
                scope.calendarMonth = newCalendarMonth;
            };//navigate

            /**
             * @param {Moment} date
             */
            scope.selectDate = function (date) {
                scope.selected = date.format(isoFormat);
                scope.calendarVisible = false;
            };//selectDate()

            /**
             * @param {Moment} day
             * @return {Boolean}
             */
            scope.isToday = function (day) {
                return moment(day).isSame(today, 'day');
            };//isToday()

            /**
             * @param {Moment} day
             * @return {Boolean}
             */
            scope.isMonth = function (day) {
                return moment(day).isSame(scope.calendarMonth, 'month');
            };//isMonth()

            /**
             * @param {Moment} day
             * @return {Boolean}
             */
            scope.isSelected = function (day) {
                if (_.isUndefined(scope.selected)) {
                    return false;
                } else {
                    return moment(day).isSame(scope.selected, 'day');
                }
            };//isSelected()

            /* ===== OBSERVERS ===== */

            // Set calendar month on change of selected date
            scope.$watch('selected', function (newVal) {
                if (_.isEmpty(newVal)) {
                    scope.calendarMonth = today.clone().startOf('month');
                } else {
                    var parsed = moment(newVal, isoFormat);

                    if (parsed.isValid()) {
                        scope.calendarMonth = parsed.startOf('month');
                    }
                }
            });

            // Regenerate calendar if month changes
            scope.$watch('calendarMonth', function (newVal) {
                scope.calendarDays = buildCalendarDays(newVal);
                scope.currentMonth = newVal.format('MM');
                scope.currentYear = newVal.format('YYYY');
                scope.calendarYears = generateCalendarYears(newVal);
            });

            scope.$watch('currentMonth', function (newVal) {
                if (!_.isEmpty(newVal)) {
                    var dateString = [scope.currentYear, newVal, '01'].join('-');
                    var parsed = moment(dateString, isoFormat);

                    if (parsed.isValid()) {
                        scope.calendarMonth = parsed;
                    }
                }
            });

            scope.$watch('currentYear', function (newVal) {
                if (!_.isEmpty(newVal)) {
                    var dateString = [newVal, scope.currentMonth, '01'].join('-');
                    var parsed = moment(dateString, isoFormat);

                    if (parsed.isValid()) {
                        scope.calendarMonth = parsed;
                    }
                }
            });

            ngModelCtrl.$formatters.push(function (modelVal) {
                var parsed = moment(modelVal, isoFormat);
                ngModelCtrl.$setValidity('date', parsed.isValid());

                if (parsed.isValid()) {
                    return parsed.format('MMMM DD, YYYY');
                } else {
                    return null;
                }
            });

            ngModelCtrl.$render = function () {
                scope.displayValue = ngModelCtrl.$viewValue;
            };
        }
    };
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:rxDiskSize
 * @description
 *
 * Converts GB disk size into a more readable format (e.g. GBs, TBs, PBs)
 *
 *
 * <pre>
 * 420 → 420 GB
 * 125000 → 125 TB
 * 171337000 → 171.337 PB
 * </pre>
 **/
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxDOMHelper
 * @description
 * A small set of functions to provide some functionality
 * that isn't present in [Angular's jQuery-lite](https://docs.angularjs.org/api/ng/function/angular.element),
 * and other DOM-related functions that are useful.
 *
 * **NOTE:** All methods take jQuery-lite wrapped elements as arguments.
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
        return { left: _x, top: _y };
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
}]);

/**
 * @ngdoc overview
 * @name rxEnvironment
 * @description
 * # rxEnvironment Component
 *
 * Component built to detect and provide the current environment (e.g. dev, staging, prod)
 *
 * ## Current Environments ##
 *
 * This service defines the following Encore specific environments:
 *
 * * **local** - http://localhost:port and http://server:port
 * * **preprod** - http://preprod.encore.rackspace.com
 * * **unified-preprod** - https://*.encore.rackspace.com
 * * **unified** - All environments including https://encore.rackspace.com
 * * **unified-prod** - Only https://encore.rackspace.com
 *
 * Please note that we've made an assumption that staging/preprod/prod environments
 * will all end with `encore.rackspace.com`. Try to avoid using
 * `staging.encore.myNewProduct.rackspace.com` for new products, and instead set
 * up your system as `encore.rackspace.com/myNewProduct`.
 *
 * ## Checking Current Environment ##
 *
 * The `Environment` service contains methods for checking if we are currently in
 * one of the five listed environments, namely:
 *
 * * `Environment.isLocal()`
 * * `Environment.isPreProd()`
 * * `Environment.isUnifiedPreProd()`
 * * `Environment.isUnified()`
 * * `Environment.isUnifiedProd()`
 *
 * The normal procedure is to assume that your code is running in local or staging,
 * and take special actions if `Environment.isPreProd()` or
 * `Environment.isUnifiedProd()` are `true`.
 *
 * ## Overlapping Environments ##
 *
 * Keep in mind that the environments we define are not mutually exclusive. For
 * instance, if we're at `http://preprod.encore.rackspace.com`, then we are in
 * the `preprod` environment, the `unified-preprod` environment, and `unified-prod`.
 *
 * When you want to check if you're in one of the custom environments, you can
 * use `envCheck()`, i.e.: `Environment.envCheck('ghPages')`
 *
 * ## A Warning About rxEnvironmentUrl ##
 * `rxEnvironmentUrl` can be used for building full URLs, based on the current
 * environment. For now, you should consider it as deprecated. It has problems
 * with overlapping environments, and could potentially generate the wrong URL.
 *
 * ## A Warning About `Environment.get().name` ##
 * You might find older Encore code that uses `Environment.get().name` to get
 * the name of the current environment. This pattern should be avoided,
 * specifically because of the overlapping environment issue discussed above.
 * If you call `Environment.get().name`, it will just return the first matching
 * environment in the list of environments, even if we're overlapping and have
 * multiple environments. Instead, check explicitly with
 * `Environment.isLocal()`, `Environment.isPreProd()`, etc., or
 * use `Environment.envCheck('local')`
 *
 * ## Directives
 * * {@link rxEnvironment.directive:rxEnvironment rxEnvironment}
 */
angular.module('encore.ui.rxEnvironment', [
    'ngSanitize',
    'encore.ui.utilities'
]);

angular.module('encore.ui.rxEnvironment')
/**
 * @ngdoc directive
 * @name rxEnvironment.directive:rxEnvironment
 * @restrict A
 * @requires utilities.service:Environment
 * @description
 * Show or hide content based on environment name
 *
 * @example
 * <pre>
 * <div rx-if-environment="unified-preprod">Show if staging</div>
 * <div rx-if-environment="!unified-prod">Show if not prod</div>
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:rxEnvironmentMatch
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:rxEnvironmentUrl
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc directive
 * @name utilities.directive:rxFavicon
 * @restrict A
 * @scope
 * @description
 * This updates the href of an element, and replaces it with the path to a different image based on the environment.
 *
 * @param {Object} rxFavicon
 * This is a congifuration object for each environment.
 * @param {String=} rxFavicon.staging This defines the favicon file for the staging environment.
 * @param {String=} rxFavicon.local This defines the favicon file for the local environment.
 * @example
 * <pre>
 * <link rel="icon"
 *       type="image/png"
 *       href="favicon.png"
 *       rx-favicon="{ staging: 'staging-favicon.png', local: 'local-favicon.png' }" />
 * </pre>
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

/* jshint maxlen: false */

/**
 * @ngdoc overview
 * @name rxFeedback
 * @description
 * # rxFeedback Component
 *
 * The rxFeedback component gathers and sends user feedback to a default or
 * specifiable email list.
 *
 * ## Default Submission Function
 *
 * The rxFeedback component sends feedback to `/api/encore/feedback`, which
 * routes details to `encoreui@lists`.
 *
 * This endpoint also supports a `product` parameter `/api/encore/feedback/:product`
 * for sending feedback to a product-specific mailing list.
 *
 * ## Feedback Redirect Integration
 *
 * To obtain the Feedback Redirect integration, please update `encore-ui-svcs`
 * to version `0.11.0` or above.  Once you have done so, include
 * "encore.svcs.feedback" in the list of dependencies for your application,
 * this will ensure that when a user selects a **Feedback Type** of "Feature
 * Request", the service will open up a new window redirecting the user to
 * the **GET Feedback** website,
 * which will now host all internal requests for features.
 *
 * <pre>
 * angular.module('myApplication', [
 *     'ngRoute',
 *     'ngResource',
 *     'encore.svcs.feedback'
 * ]);
 * </pre>
 *
 * By adding the `encore.svcs.feedback` dependency to your application, the
 * `Feedback` service will be available and automatically initialized by the
 * `rxFeedback` controller.  Once initialized, the default behaviour of the
 * `rxFeedback` controller will be altered to perform the GET feedback redirect.
 *
 * ### Production
 * To manually include the Feedback changes without updating your version of
 * Encore UI (but after updating `encore-ui-svcs`), please include the following:
 *
 * Add the following script in your `index.html` (after injected dependencies):
 *
 * http://3bea8551c95f45baa125-a22eac1892b2a6dcfdb36104c0e925de.r46.cf1.rackcdn.com/feedback-override.js
 *
 * <pre>
 * <!-- inject:js -->
 * <!-- endinject -->
 * <script src="https://6618f7541d71c1a404be-a22eac1892b2a6dcfdb36104c0e925de.ssl.cf1.rackcdn.com/feedback-override.js"></script>
 * </pre>
 *
 * ### Development
 * For development purposes, you may want to include one of the two following
 * configurations depending on which type of project you have:
 *
 * *The latest version of the [Encore generator](https://github.com/rackerlabs/generator-encore)
 * will include this proxy*
 *
 * **Gulp**: `gulp/util/prism.js`
 * <pre>
 * prism.create({
 *     name: 'encorefeedback',
 *     context: '/encore/feedback',
 *     host: 'staging.encore.rackspace.com',
 *     port: 443,
 *     https: true,
 *     changeOrigin: false
 * });
 * </pre>
 *
 * **Grunt**: `tasks/util/config`
 * <pre>
 * {
 *     context: '/encore/feedback',
 *     host: 'staging.encore.rackspace.com',
 *     port: 443,
 *     https: true,
 *     protocol: 'https',
 *     changeOrigin: false
 * }
 * </pre>
 *
 * ## Custom Endpoint
 *
 * Adding a custom endpoint is managed in `encore-service-pillar`. Once configured
 * you can override the default endpoint with `rxFeedbackSvc.setEndpoint`.
 *
 * <pre>
 * angular.module('MyApplication', [
 *     'ngRoute',
 *     'ngResource',
 *     'encore.svcs.feedback',
 *     // ...
 * ])
 * .run(function (rxFeedbackSvc) {
 *     // Set custom endpoint
 *     rxFeedbackSvc.setEndpoint('/api/encore/feedback/cloud');
 *
 *     // ...
 * });
 * </pre>
 *
 * ## Custom Submission Function
 *
 * The `rxFeedback` component allows you to define an `on-submit` attribute
 * that points to a custom function for the purposes of overriding the default
 * submission logic.  This function should accept a single argument for a
 * feedback object with the following definition:
 *
 * *Feedback Object Structure*:
 * <pre>
 * {
 *   "type": {
 *     "label": "(string)",
 *     "placeholder": "(string) placeholder text",
 *     "prompt": "(string) UI text used to describe the `description` field"
 *   },
 *   "description": "(string) user-submitted feedback"
 * }
 * </pre>
 *
 * ## Directives
 * * {@link rxFeedback.directive:rxFeedback rxFeedback}
 */
angular.module('encore.ui.rxFeedback', [
    'ngResource',
    'encore.ui.utilities'
]);

angular.module('encore.ui.rxFeedback')
/**
 * @ngdoc directive
 * @name rxFeedback.directive:rxFeedback
 * @restrict E
 * @scope
 * @description
 * ## Custom Submission Function
 *
 * The `rxFeedback` directive allows you to define an `on-submit` attribute that points to a custom function for the
 * purposes of overriding the default submission logic.  This function accepts a *single argument* for a
 * `feedback object` with the following definition:
 *
 * @example
 * <pre>
 * // feedback object structure
 * {
 *   "type": {
 *      "label": "(string)",
 *      "placeholder": "(string) placeholder text",
 *      "prompt": "(string) UI text used to describe the `description` field"
 *    },
 *    "description": "(string) user-submitted feedback"
 * }
 * </pre>
 *
 * @param {Object} type JSON object with `label` {String}, `placeholder` {String}, and `prompt` {String}
 * @param {String} description User-submitted feedback
 *
 */
.directive('rxFeedback', ["feedbackTypes", "$location", "rxFeedbackSvc", "rxScreenshotSvc", "rxNotify", "Session", function (feedbackTypes, $location, rxFeedbackSvc, rxScreenshotSvc, rxNotify, Session) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFeedback.html',
        scope: {
            sendFeedback: '=?onSubmit'
        },
        link: function (scope) {
            scope.feedbackTypes = feedbackTypes;

            scope.setCurrentUrl = function (modalScope) {
                modalScope.currentUrl = $location.url();
            };

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

angular.module('encore.ui.utilities')
/**
 * @ngdoc controller
 * @name utilities.controller:rxFeedbackController
 * @scope
 * @description
 * Allows the customization of the feedback modal via `$scope` and `$modalInstance`.
 */
.controller('rxFeedbackController', ["$scope", "$modalInstance", "$rootScope", "$injector", function ($scope, $modalInstance, $rootScope, $injector) {
    // define a controller for the modal to use
    $scope.submit = function () {
        $modalInstance.close($scope);
    };

    $scope.cancel = $modalInstance.dismiss;

    // cancel out of the modal if the route is changed
    $rootScope.$on('$routeChangeSuccess', $modalInstance.dismiss);

    // Allow external overrides of the form
    if ($injector.has('FeedbackService')) {
        $injector.get('FeedbackService').initialize($scope, $modalInstance);
    }
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxFeedbackSvc
 * @description
 * `rxFeedbackSvc` service supports `rxFeedback` directive functionality.  A `custom endpoint` may be set to override
 * the `default` endpoint.
 */
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
}]);

/**
 * @ngdoc overview
 * @name rxFloatingHeader
 * @description
 * # rxFloatingHeader Component
 *
 * `rxFloatingHeader` component turns a table header into floating persistent header so that names of columns are still
 *  visible, even as a user scrolls down the page.
 *
 * `rxFloatingHeader` is also fully compatible with {@link rxSortableColumn} and {@link rxPaginate}.
 * 
 * ## Directives
 * * {@link rxFloatingHeader.directive:rxFloatingHeader rxFloatingHeader}
 */
angular.module('encore.ui.rxFloatingHeader', [
    'encore.ui.rxMisc'
]);

angular.module('encore.ui.rxFloatingHeader')
/**
 * @ngdoc directive
 * @name rxFloatingHeader.directive:rxFloatingHeader
 * @restrict A
 * @description
 *
 *`rxFloatingHeader` is an attribute directive that turns a tableheader into a floating persistent header so that names
 * of columns are still visible, even as a user scrolls down the page. This is based off of the example at
 * http://css-tricks.com/persistent-headers/
 *
 * * To use it, add an `rx-floating-header` attribute to a `table` element.
 *
 * * A common pattern in our products is to place an `<input>` filter at the top of the table, to restrict the items
 * that are displayed. We support this as well, by placing the `<input>` directly inside of the `<thead>` in its
 * own `<tr><th></th></tr>`.
 *
 * * Make sure you set the `colspan` attribute on the filter's `<th>`, to match the number of columns you have.
 *
 * * `rxFloatingHeader` is also fully compatible with {@link rxSortableColumn} and {@link rxPaginate}.
 *
 * @example
 * <pre>
 * <table rx-floating-header>
 *   <thead>
 *     <tr>
 *       <td colspan="2">
 *         <rx-search-box
 *             ng-model="searchText"
 *             rx-placeholder="'Filter by any...'">
 *         </rx-search-box>
 *       </td>
 *     </tr>
 *     <tr>
 *       <th>Column One Header</th>
 *       <th>Column Two Header</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     ...
 *   </tbody>
 * </table>
 * </pre>
 *
 */
.directive('rxFloatingHeader', ["$document", "rxDOMHelper", function ($document, rxDOMHelper) {
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
                state = 'fixed';
                seenFirstScroll = false;

                // The original <tr> elements
                trs = [];

                // The original <th> elements
                ths = [];

                // All <th> elements that are the *only* <th> in their row
                singleThs = [];

                // The maximum width we could find for a <th>
                maxThWidth = 0;

                // Clones of the <tr> elements
                clones = [];

                // any <input> elements in the <thead>
                inputs = [];
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
                            if ($document[0].activeElement === input[0]) {
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

/**
 * @ngdoc overview
 * @name rxForm
 * @description
 * # rxForm Component
 *
 * The rxForm component contains a set of directives used to create forms throughout Encore.  These directives provide
 * a common HTML layout and style for all form elements, which helps ensure form accessibility and makes creating new
 *  forms easier.
 *
 * ## Directives Are Hierarchical
 *
 * To provide a standard layout of form fields (and so CSS rules can apply that layout), most of the new directives
 *  must be nested in a specific hierarchy.
 *  If you do not nest these elements properly, Angular will throw an error (this is by design). So, rule of thumb,
 *  aim for `0` console errors.
 *
 * These directives must be nested in the following hierarchy (*the ranges (e.g., 0..1) below denote how many items can
 *  be nested within its parent*):
 *
 * * {@link rxForm.directive:rxForm rxForm}
 *   * {@link rxForm.directive:rxFormSection rxFormSection} (0..N)
 *      * {@link rxSelectFilter.directive:rxSelectFilter rxSelectFilter} (0..N)
 *      * {@link rxForm.directive:rxField rxField} (0..N)
 *        * {@link rxForm.directive:rxFieldName rxFieldName} (0..1)
 *        * {@link rxForm.directive:rxFieldContent rxFieldContent} (0..1)
 *          * {@link rxForm.directive:rxInput rxInput} (0..N)
 *            * {@link rxForm.directive:rxPrefix rxPrefix} (0..1)
 *            * {@link rxForm.directive:rxInfix rxInfix} (0..1)
 *            * {@link rxForm.directive:rxSuffix rxSuffix} (0..1)
 *
 * ## Free-Range Directives
 * These directives are not limited to their placement and can be used anywhere:
 *
 * * {@link rxForm.directive:rxHelpText rxHelpText}
 *   * Designed to style form control help text.
 * * {@link rxForm.directive:rxInlineError rxInlineError}
 *   * Designed to style form control error messages.
 *
 * ## Compatible Modules
 * These modules work well with rxForm.
 *
 * * {@link elements.directive:rxButton rxButton}
 * * {@link rxCharacterCount}
 * * {@link atoms.directive:rxCheckbox rxCheckbox}
 * * {@link rxMultiSelect}
 * * {@link rxOptionTable}
 * * {@link rxRadio}
 * * {@link rxSearchBox}
 * * {@link rxSelect}
 * * {@link rxToggleSwitch}
 * * {@link typeahead}
 *
 * # Layout
 *
 * ## Stacked Field Arrangement
 * By default, `rx-form-section` will arrange its children inline, in a row.  To obtain a stacked, columnar layout
 * for a particular section, place the `stacked` attribute on the `rx-form-section` element.  This will arrange the
 * `rx-field`, `rx-select-filter`, and `div` children elements in a columnar fashion.  This can be used in conjunction
 * with sections taking the full width of the form.
 *
 *  *See "Advanced Inputs" in the {@link /encore-ui/#/components/rxForm demo} for an example.*
 *
 * ## Responsive
 * `rx-field` and `div` elements that are immediate children of `rx-form-section` will grow from 250px to full width of
 * the section.  As such, you will see that these elements will wrap in the section if there's not enough width to
 * accomodate more than one child.
 *
 * *You can see this in the {@link /encore-ui/#/components/rxForm demo} if you resize the width of your browser.*
 *
 * # Validation
 *
 * ## Required Fields
 * When displaying a field that should be required, please make use of the `ng-required` attribute for rxFieldName.
 * When the value evaluates to true, an asterisk will display to the left of the field name.  You can see an example
 * of this with the "Required Textarea" field name in the {@link /encore-ui/#/components/rxForm demo}.
 *
 * See {@link rxForm.directive:rxFieldName rxFieldName}
 * API Documentation for more information.
 *
 * ## Custom Validators
 *
 * Angular provides its own validator when you use `type="email"`, and you can use `<rx-inline-error>` to turn email
 * validation errors into a styled message.  You can also use this element if you define a custom validator.
 *
 * ### Foocheck validator
 * The example shown in the "Email Address" example, uses a custom `foocheck` validator. Note that it is enabled by
 * placing the `foocheck` attribute in the `<input>` element, and using it with
 * `ng-show="demoForm.userEmail.$error.foocheck"`.  Check out the Javascript tab in
 * the {@link /encore-ui/#/components/rxForm demo} to see how this validator is implemented.
 *
 * There are plenty of examples online showing the same thing.
 *
 * # Migrating Old Code
 *
 * ## Deprecated Directives
 * **The following directives have been deprecated and *will be removed* in a future release of the EncoreUI
 * framework.** They are still functional, but **WILL display a warning in the javascript console** to let you know
 * you should upgrade your code.
 *
 * ### **rxFormOptionTable**
 * Please use {@link rxOptionTable} as a stand-in replacement.
 *
 * ### **rxFormItem**
 * See "Before & After" below
 *
 * ### **rxFormFieldset**
 * Closest equivalent is to use `rxFormSection`. Your individual project requirements will vary, but the `legend`
 * attribute can be replaced with a heading variant where applicable.
 *
 * * If your legend pertains to at least one row, place a heading variant before the desired `rx-form-section`
 * element.
 * * If your legend pertains to controls in a single column, place a heading variant within the `rx-field`
 * element at the top.
 *
 * ## Before &amp; After
 * The `rxFormItem` has been found to be incredibly brittle and prone to breakage. The new markup may look a little
 * wordy, but it is designed to provide enough flexibility for advanced field inputs. To be explicit, the new directives
 * were designed based on feedback around:
 *
 * * applying custom HTML markup for `label`, `description`, `prefix`, and `suffix` properties
 * * standardizing form layout functionality
 * * eliminating unnecessary CSS class definitions
 *
 * The following are some examples comparing what code looked like using the old directives versus the new directives.
 *
 * ### Email Address
 * #### Before
 * <pre>
 * <form name="demoForm">
 *   <rx-form-item label="Email address" description="Must contain foo.">
 *     <input name="userEmail" type="email" ng-model="details.email" foocheck />
 *     <div ng-show="demoForm.userEmail.$error.email" class="inline-error">
 *         Invalid email
 *     </div>
 *     <div ng-show="demoForm.userEmail.$error.foocheck" class="inline-error">
 *         Your email address must contain 'foo'
 *     </div>
 *   </rx-form-item>
 * </form>
 * </pre>
 *
 * #### After
 * <pre>
 * <form name="demoForm" rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Email address:</rx-field-name>
 *       <rx-field-content>
 *         <rx-input>
 *           <input name="userEmail" type="email" ng-model="details.email" foocheck />
 *         </rx-input>
 *         <rx-help-text>Must contain foo.</rx-help-text>
 *         <rx-inline-error ng-show="demoForm.userEmail.$error.email">
 *             Invalid email
 *         </rx-inline-error>
 *         <rx-inline-error ng-show="demoForm.userEmail.$error.foocheck">
 *             Your email address must contain 'foo'
 *         </rx-inline-error>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * </pre>
 *
 * ### Monthly Cost
 * #### Before
 * <pre>
 * <form name="demoForm">
 *   <rx-form-item label="Monthly Cost" prefix="$" suffix="million">
 *     <input type="number" ng-model="volume.cost" />
 *   </rx-form-item>
 * </form>
 * </pre>
 * #### After
 * <pre>
 * <form name="demoForm" rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Monthly Cost:</rx-field-name>
 *       <rx-field-content>
 *         <rx-input>
 *           <rx-prefix>$</rx-prefix>
 *           <input type="number" ng-model="volume.cost" />
 *           <rx-suffix>million</rx-suffix>
 *         </rx-input>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * </pre>
 *
 * ## Hierarchical Directives
 * * {@link rxForm.directive:rxForm rxForm}
 * * {@link rxForm.directive:rxFormSection rxFormSection}
 * * {@link rxForm.directive:rxField rxField}
 * * {@link rxForm.directive:rxFieldName rxFieldName}
 * * {@link rxForm.directive:rxFieldContent rxFieldContent}
 * * {@link rxForm.directive:rxInput rxInput}
 * * {@link rxForm.directive:rxPrefix rxPrefix}
 * * {@link rxForm.directive:rxSuffix rxSuffix}
 *
 * ## Free-Range Directives
 * * {@link rxForm.directive:rxHelpText rxHelpText}
 * * {@link rxForm.directive:rxInlineError rxInlineError}
 *
 * ### Related Directives
 * * {@link elements.directive:rxButton rxButton}
 * * {@link rxCharacterCount.directive:rxCharacterCount rxCharacterCount}
 * * {@link atoms.directive:rxCheckbox rxCheckbox}
 * * {@link rxOptionTable.directive:rxOptionTable rxOptionTable}
 * * {@link rxRadio.directive:rxRadio rxRadio}
 * * {@link rxSelect.directive:rxSelect rxSelect}
 * * {@link rxToggleSwitch.directive:rxToggleSwitch rxToggleSwitch}
 *
 * ### Deprecated Directives
 * * {@link rxForm.directive:rxFormItem rxFormItem}
 * * {@link rxForm.directive:rxFormFieldset rxFormFieldset}
 *
 */
angular.module('encore.ui.rxForm', [
    'ngSanitize',
    'encore.ui.rxMisc'
]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxField
 * @ngdoc directive
 * @restrict E
 * @description
 * Structural element directive used for layout of sub-elements.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**block**
 *     <ul>
 *       <li>default: *shares width equally with sibling `rxField` and `div` elements*</li>
 *       <li>stacked: *max-width: 400px*</li>
 *     </ul>
 *   </dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>{@link rxForm.directive:rxFormSection rxFormSection}</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>Any HTML Element</dd>
 *
 *   <dt>Children:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxFieldName rxFieldName}</li>
 *       <li>{@link rxForm.directive:rxFieldContent rxFieldContent}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>...</rx-field-name>
 *       <rx-field-content>...</rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxField', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxFormSection'
    });
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxFieldContent
 * @ngdoc directive
 * @restrict E
 * @description
 * Structural element directive used for layout of sub-elements.
 * This element is used to wrap the actual content markup for your
 * controls, labels, help text, and error messages.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**block** *(full width of parent)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>{@link rxForm.directive:rxField rxField}</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxFieldName rxFieldName}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 *
 *   <dt>Children:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxInput rxInput}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>
 *          <i class="fa fa-exclamation"></i>
 *          Important Field Name
 *       </rx-field-name>
 *       <rx-field-content>
 *          <rx-input>...</rx-input>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxFieldContent', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxField'
    });
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxFieldName
 * @ngdoc directive
 * @restrict E
 * @scope
 * @description
 * Stylistic element directive that provides a standardized UI for
 * form field names.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**block** *(full width of parent)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>{@link rxForm.directive:rxField rxField}</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxFieldContent rxFieldContent}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 *
 *   <dt>Children:</dt>
 *   <dd>Any HTML Element</dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Salary</rx-field-name>
 *       <rx-field-content>...</rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 *
 * @param {Boolean=} [ng-required=false]
 * Is this field required? This will add/remove the required symbol to the left of the name.
 */
.directive('rxFieldName', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxField',
        transclude: true,
        scope: {
            ngRequired: '=?'
        },
        templateUrl: 'templates/rxFieldName.html'
    });
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxForm
 * @ngdoc directive
 * @restrict A
 * @description
 * The rxForm directive is an attribute directive meant to be used for
 * hierarchical validation of form-related elements. This directive may
 * be placed on ANY DOM element, not just `<form>`.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**block** *(full width of parent)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>Any HTML Element</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>Any HTML Element</dd>
 *
 *   <dt>Children:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxFormSection rxFormSection}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form><!-- you can use a DIV, if desired -->
 *   <rx-form-section>
 *     ...
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxForm', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        restrict: 'A'
    });
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxFormFieldset
 * @deprecated
 * @ngdoc directive
 * @restrict E
 * @scope
 * @description
 * **DEPRECATED** - This directive has been marked as deprecated and *will be removed* in a future
 * release of the EncoreUI framework.  Please see current rxForm documentation for updated
 * functionality.
 *
 * This directive is used to wrap a set of input fields in the proper HTML
 *
 * @param {String} legend - Text to use for <legend>
 * @param {String} description - Text to place below input
 */
.directive('rxFormFieldset', function () {
    var warnMsg = 'DEPRECATION WARNING: rxFormFieldset has been marked as deprecated ' +
        'and will be removed in a future release of the EncoreUI framework. ' +
        'Please see current rxForm documentation for updated functionality.';
    console.warn(warnMsg); // jshint ignore:line

    return {
        restrict: 'E',
        templateUrl: 'templates/rxFormFieldset.html',
        transclude: true,
        scope: {
            legend: '@',
            description: '@'
        }
    };
});

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxFormItem
 * @deprecated
 * @ngdoc directive
 * @restrict E
 * @scope
 * @description
 * **DEPRECATED** - This directive has been marked as deprecated and *will be removed* in a future
 * release of the EncoreUI framework.  Please see current rxForm documentation for updated
 * functionality.
 *
 * This directive is used to wrap input fields and select boxes in the proper HTML.
 * It will attach the `<label>` to a transcluded input using the `id` attribute of the input.
 * If no `id` attribute exists, it will create one.
 *
 * @param {String} label - Text to use for <label>
 * @param {String} prefix - Text to include to the left of content
 * @param {String} suffix - Text to include to the right of content
 * @param {String} description - Text to place below input
 */
.directive('rxFormItem', ["$document", "rxDOMHelper", function ($document, rxDOMHelper) {
    var warnMsg = 'DEPRECATION WARNING: rxFormItem has been marked as deprecated ' +
        'and will be removed in a future release of the EncoreUI framework. ' +
        'Please see current rxForm documentation for updated functionality.';
    console.warn(warnMsg); // jshint ignore:line

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

                scope.isTextArea = _.isObject(inputField) && inputField.type === 'textarea';

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
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxFormSection
 * @ngdoc directive
 * @restrict E
 * @description
 * Structural element directive used for layout of sub-elements.
 *
 * By default, all `rxField`, `rxSelectFilter`, and `<div>` elements will display inline (horizontally).
 * If you wish to display these elements in a stacked manner, you may
 * place the `stacked` attribute on `rx-form-section`.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**block** *(full width of parent)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>{@link rxForm.directive:rxForm rxForm}</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>Any HTML Element</dd>
 *
 *   <dt>Children:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxField rxField}</li>
 *       <li>{@link rxSelectFilter.directive:rxSelectFilter rxSelectFilter}</li>
 *       <li>HTML DIV Element</li>
 *     </ul>
 *   </dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form>
 *   <rx-form-section>
 *     <rx-field>...</rx-field>
 *     <rx-select-filter>...</rx-select-filter>
 *     <div>...</div>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 *
 * @param {*=} stacked
 * If present, `rxField` children will stack vertically rather than
 * display horizontally.
 */
.directive('rxFormSection', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxForm'
    });
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxHelpText
 * @ngdoc directive
 * @restrict E
 * @description
 * Stylistic element directive used to wrap form input help text.
 *
 * * **block** element *(full width of parent)*
 * * Best used as a sibling after {@link rxForm.directive:rxInput rxInput},
 *   but before {@link rxForm.directive:rxInlineError rxInlineError} elements.
 *
 * @example
 * <pre>
 * ...
 * <form rx-form name="demoForm">
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Salary:</rx-field-name>
 *       <rx-field-content>
 *         <rx-input>
 *           <rx-prefix>$</rx-prefix>
 *           <input type="number" name="salary" />
 *           <rx-suffix>Million</rx-suffix>
 *         </rx-input>
 *         <rx-help-text>Must be greater than $1,000,000</rx-help-text>
 *         <rx-inline-error ng-show="demoForm.salary.$errors.minimum">
 *           Salary must be above $1,000,000
 *         </rx-inline-error>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxHelpText', function () {
    return {
        restrict: 'E'
    };
});

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxInfix
 * @ngdoc directive
 * @restrict E
 * @description
 * Structural element directive used to wrap content to be placed
 * inline with a form control element.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**inline block** *(only as wide as necessary for content)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>{@link rxForm.directive:rxInput rxInput}</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxPrefix rxPrefix}</li>
 *       <li>{@link rxForm.directive:rxSuffix rxSuffix}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 *
 *   <dt>Children:</dt>
 *   <dd>Any HTML Element</dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Time of Day:</rx-field-name>
 *       <rx-field-content>
 *         <rx-input>
 *           <input type="number" name="hours" />
 *           <rx-infix>:</rx-infix>
 *           <input type="number" name="minutes" />
 *         </rx-input>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxInfix', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxInput'
    });
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxInlineError
 * @ngdoc directive
 * @restrict E
 * @description
 * Stylistic element directive used to wrap an error message.
 *
 * * **block** element *(full width of parent)*
 * * Best used as a sibling after {@link rxForm.directive:rxInput rxInput},
 *   and {@link rxForm.directive:rxHelpText rxHelpText} elements.
 *
 * @example
 * <pre>
 * ...
 * <form rx-form name="demoForm">
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Salary:</rx-field-name>
 *       <rx-field-content>
 *         <rx-input>
 *           <rx-prefix>$</rx-prefix>
 *           <input type="number" name="salary" min="1000000" ng-model="salary" />
 *           <rx-suffix>Million</rx-suffix>
 *         </rx-input>
 *         <rx-inline-error ng-show="demoForm.salary.$errors.min">
 *           Salary must be above $1,000,000
 *         </rx-inline-error>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxInlineError', function () {
    return {
        restrict: 'E'
    };
});

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxInput
 * @ngdoc directive
 * @restrict E
 * @description
 * Structural element directive used for layout of sub-elements.
 * Place your HTML control elements within this directive.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**block** *(full width of parent)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>{@link rxForm.directive:rxFieldContent rxFieldContent}</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>Any HTML Element</dd>
 *
 *   <dt>Children:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxPrefix rxPrefix}</li>
 *       <li>{@link rxForm.directive:rxSuffix rxSuffix}</li>
 *       <li>{@link atoms.directive:rxCheckbox rxCheckbox}</li>
 *       <li>{@link rxRadio.directive:rxRadio rxRadio}</li>
 *       <li>{@link rxSelect.directive:rxSelect rxSelect}</li>
 *       <li>{@link rxToggleSwitch.directive:rxToggleSwitch rxToggleSwitch}</li>
 *       <li>{@link rxOptionTable.directive:rxOptionTable rxOptionTable}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Salary:</rx-field-name>
 *       <rx-field-content>
 *         <rx-input>
 *           <input type="number" />
 *         </rx-input>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxInput', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxFieldContent'
    });
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxPrefix
 * @ngdoc directive
 * @restrict E
 * @description
 * Structural element directive used to wrap content to be placed
 * inline with a form control element.
 *
 * * Best placed before a form control element.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**inline block** *(only as wide as necessary for content)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>{@link rxForm.directive:rxInput rxInput}</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxInfix rxInfix}</li>
 *       <li>{@link rxForm.directive:rxSuffix rxSuffix}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 *
 *   <dt>Children:</dt>
 *   <dd>Any HTML Element</dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Salary:</rx-field-name>
 *       <rx-field-content>
 *         <rx-input>
 *           <rx-prefix>$</rx-prefix>
 *           <input type="number" />
 *           <rx-suffix>Million</rx-suffix>
 *         </rx-input>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxPrefix', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxInput'
    });
}]);

angular.module('encore.ui.rxForm')
/**
 * @name rxForm.directive:rxSuffix
 * @ngdoc directive
 * @restrict E
 * @description
 * Structural element directive used to wrap content to be placed
 * inline with a form control element.
 *
 * * Best placed after a form control element.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**inline block** *(only as wide as necessary for content)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>{@link rxForm.directive:rxInput rxInput}</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxForm.directive:rxPrefix rxPrefix}</li>
 *       <li>{@link rxForm.directive:rxInfix rxInfix}</li>
 *       <li>Any HTML Element</li>
 *     </ul>
 *   </dd>
 *
 *   <dt>Children:</dt>
 *   <dd>Any HTML Element</dd>
 * </dl>
 *
 * @example
 * <pre>
 * ...
 * <form rx-form>
 *   <rx-form-section>
 *     <rx-field>
 *       <rx-field-name>Salary:</rx-field-name>
 *       <rx-field-content>
 *         <rx-input>
 *           <rx-prefix>$</rx-prefix>
 *           <input type="number" />
 *           <rx-suffix>Million</rx-suffix>
 *         </rx-input>
 *       </rx-field-content>
 *     </rx-field>
 *   </rx-form-section>
 * </form>
 * ...
 * </pre>
 */
.directive('rxSuffix', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxInput'
    });
}]);

angular.module('encore.ui.utilities')
/**
 * @name utilities.service:rxFormUtils
 * @ngdoc service
 *
 * @description
 * Set of utility functions used by rxForm to access form data.
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
.factory('rxFormUtils', ["$document", function ($document) {
    var rxFormUtils = {};

    // Returns the selected option for the rxFormOptionTable with id: tableId
    // and fieldId: fieldId (optional)
    // @param {String} tableId - The id of the table
    // @returns {object} The rowId of the selected option
    rxFormUtils.getSelectedOptionForTable = function (tableId) {
        var selectedRow;
        var row = $document[0].querySelector('rx-form-option-table#' + tableId + ' .selected input');

        if (_.isObject(row) && 'value' in row) {
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
        var result = $document[0].evaluate(xpathToTable, $document[0], null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (result.singleNodeValue) {
            var table = result.singleNodeValue;
            var fieldId = table.getAttribute('field-id');
            var rowId = rxFormUtils.getSelectedOptionForTable(table.id).rowId;
            selectedOption = { tableId: table.id, fieldId: fieldId, rowId: rowId };
        }
        return selectedOption;
    };

    return rxFormUtils;
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxHideIfUkAccount
 * @description
 * Check if account number in the URL is of UK origin.
 *
 * @return {Boolean} false if account number matches UK pattern
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
}]);

/**
 * @ngdoc overview
 * @name rxInfoPanel
 * @description
 * # rxInfoPanel Component
 *
 * This is a generic info panel intended for use at the top of pages.
 *
 * ## Directives
 * * {@link rxInfoPanel.directive:rxInfoPanel rxInfoPanel}
 */
angular.module('encore.ui.rxInfoPanel', []);

angular.module('encore.ui.rxInfoPanel')
/**
 * @ngdoc directive
 * @name rxInfoPanel.directive:rxInfoPanel
 * @restrict E
 * @scope
 * @description
 * This renders a generic, pre-styled, info panel, with an optional title.
 *
 * @param {String} title - Text to be displayed in the title area of the info panel
 * @example
 * <pre>
 *  <rx-info-panel panel-title="My title!">
 *        You can put whatever you like in here.
 *  </rx-info-panel>
 * </pre>
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:LocalStorage
 * @deprecated
 * @description
 * **NOTICE:** This service has be deprecated in favor of the
 * {@link utilities.service:rxLocalStorage rxLocalStorage} service.
 */
.service('LocalStorage', ["rxLocalStorage", function (rxLocalStorage) {
    return rxLocalStorage;
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxLocalStorage
 * @description
 * A simple wrapper for injecting the global variable `localStorage`
 * for storing values in the browser's local storage object. This service is similar to Angular's
 * `$window` and `$document` services.  The API works the same as the W3C's
 * specification provided at: https://html.spec.whatwg.org/multipage/webstorage.html.
 * This service also includes helper functions for getting and setting objects.
 *
 * @example
 * <pre>
 * rxLocalStorage.setItem('Batman', 'Robin'); // no return value
 * rxLocalStorage.key(0); // returns 'Batman'
 * rxLocalStorage.getItem('Batman'); // returns 'Robin'
 * rxLocalStorage.removeItem('Batman'); // no return value
 * rxLocalStorage.setObject('hero', {name:'Batman'}); // no return value
 * rxLocalStorage.getObject('hero'); // returns { name: 'Batman'}
 * rxLocalStorage.clear(); // no return value
 * </pre>
 */
.service('rxLocalStorage', ["$window", function ($window) {
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

/**
 * @ngdoc overview
 * @name rxLogout
 * @description
 * # rxLogout Component
 *
 * The rxLogout component provides logic to apply logout functionality to an element.
 *
 * ## Directives
 * * {@link rxLogout.directive:rxLogout rxLogout}
 */
angular.module('encore.ui.rxLogout', [
    'encore.ui.utilities'
]);

angular.module('encore.ui.rxLogout')
/**
 * @ngdoc directive
 * @name rxLogout.directive:rxLogout
 * @restrict A
 * @scope
 * @description
 * Adds logout functionality to an element.
 *
 * @param {String=} [rxLogout='/login'] URL to redirect to after logging out
 *
 * @example
 * <pre>
 * <button rx-logout>Logout</button>
 * <button rx-logout="/custom">Logout (w/ custom location)</button>
 * </pre>
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

/**
 * @ngdoc overview
 * @name rxMetadata
 * @description
 * # rxMetadata Component
 *
 * rxMetadata contains directives to provide consistent styling for
 * the display of metadata information.
 *
 * ## Organizing Metadata into Columns
 * It is highly recommended that you make use of `<section>` elements to separate metadata information into columns.
 * The `<section>` elements will be set to a fixed width and will wrap/stack if the container cannot fit all columns
 * in a single row.
 *
 * <pre>
 * <rx-metadata>
 *   <section>
 *     <rx-meta label="Status" id="metaStatus">Active</rx-meta>
 *     <rx-meta label="RCN">RCN-555-555-555</rx-meta>
 *     <rx-meta label="Type">Cloud</rx-meta>
 *     <rx-meta label="Service Level">Managed &rarr; Intensive</rx-meta>
 *     <rx-meta label="Service Type">DevOps &rarr; SysOps</rx-meta>
 *   </section>
 * </rx-metadata>
 * </pre>
 *
 * ## Long Data Values
 *
 * For data values that do not naturally break to fit the width of the column, a `.force-word-break` CSS class is
 * available on the `<rx-meta>` element to prevent the value from overflowing to adjacent content.
 *
 * <pre>
 *   <rx-meta label="Super Long Value" class="force-word-break">
 *     A super long data value with anunseeminglyunbreakablewordthatcouldoverflowtothenextcolumn
 *   </rx-meta>
 * </pre>
 *
 * ## Directives
 * * {@link rxMetadata.directive:rxMetadata rxMetadata}
 * * {@link rxMetadata.directive:rxMeta rxMeta}
 */
angular.module('encore.ui.rxMetadata', []);

angular.module('encore.ui.rxMetadata')
/**
 * @ngdoc directive
 * @name rxMetadata.directive:rxMeta
 * @scope
 * @restrict E
 * @description
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**block** *(full width of parent)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxMetadata.directive:rxMetadata rxMetadata}</li>
 *       <li>SECTION element</li>
 *     </ul>
 *   </dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>Any HTML Element</dd>
 *
 *   <dt>Children:</dt>
 *   <dd>Any HTML Element</dd>
 * </dl>
 *
 * @example
 * <pre>
 * <rx-metadata>
 *   <section>
 *     <rx-meta label="Status">
 *       degraded; system maintenance
 *     </rx-meta>
 *   </section>
 * </rx-metadata>
 * </pre>
 *
 * @param {String=} label Label for metadata definition/value
 */
.directive('rxMeta', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/rxMeta.html',
        scope: {
            label: '@'
        }
    };
});

angular.module('encore.ui.rxMetadata')
/**
 * @ngdoc directive
 * @name rxMetadata.directive:rxMetadata
 * @restrict E
 * @description
 * Parent directive used for styling and arranging metadata information.
 *
 * <dl>
 *   <dt>Display:</dt>
 *   <dd>**block** *(full width of parent)*</dd>
 *
 *   <dt>Parent:</dt>
 *   <dd>Any HTML Element</dd>
 *
 *   <dt>Siblings:</dt>
 *   <dd>Any HTML Element</dd>
 *
 *   <dt>Children:</dt>
 *   <dd>
 *     <ul>
 *       <li>{@link rxMetadata.directive:rxMeta rxMeta}</li>
 *       <li>SECTION element</li>
 *     </ul>
 *   </dd>
 * </dl>
 *
 * It is highly recommended to use `<section>` blocks for purposes
 * of arranging information into columns.
 *
 * Each `<section>` will be 300px wide and will wrap and stack vertically
 * if the container isn't wide enought to accommodate all sections in a
 * single row.
 *
 * @example
 * <pre>
 * <rx-metadata>
 *   <section>
 *     <rx-meta label="Status">
 *       degraded; system maintenance
 *     </rx-meta>
 *   </section>
 *   <section>
 *     <rx-meta label="Field Name">Field Value Example</rx-meta>
 *   </section>
 *   <section>
 *     <rx-meta label="Another Field Name">Another Field Value Example</rx-meta>
 *   </section>
 * </rx-metadata>
 * </pre>
 */
.directive('rxMetadata', function () {
    return {
        restrict: 'E'
    };
});

/**
 * @ngdoc overview
 * @name rxMisc
 * @description
 * # rxMisc Component
 *
 * **NOTE:** Marked for DEPRECATION.  All `rxMisc` components refactored to `Utilities`.
 */
angular.module('encore.ui.rxMisc', [
    'debounce',
    'encore.ui.utilities'
]);

/**
 * @ngdoc overview
 * @name rxModalAction
 * @description
 * # rxModalAction Component
 *
 * The rxModalAction component provides a hook to open and perform operations on a modal window.
 *
 * This provides a hook into Angular-UI Bootstrap's modal directive. It's used as a link to open a modal window. The
 * content inside the window is blank, however you can tie this with `<rx-modal-form>` to build a modal form window
 * (including the modal title and submit/cancel buttons).
 *
 * **NOTE:** This module has a dependency on [Angular-UI Bootstrap](http://angular-ui.github.io/bootstrap/), so if
 * it is going to be used, Bootstrap needs to be included in your webpage.
 *
 * ## Directives
 * * {@link rxModalAction.directive:rxModalAction rxModalAction}
 * * {@link rxModalAction.directive:rxModalFooter rxModalFooter}
 * * {@link rxModalAction.directive:rxModalForm rxModalForm}
 */
angular.module('encore.ui.rxModalAction', [
    'ui.bootstrap'
])
.run(["$compile", "$templateCache", function ($compile, $templateCache) {
    $compile($templateCache.get('templates/rxModalFooters.html'));
}]);

angular.module('encore.ui.rxModalAction')
/**
 * @ngdoc directive
 * @name rxModalAction.directive:rxModalAction
 * @restrict E
 * @scope
 * @description
 * Link which will show a modal window on click, and handle callbacks for pre/post modal actions
 *
 * # Template URL
 *
 * Due to the complex nature of the information passed into modal windows, HTML is handled via a template (versus
 * transcluding the content).
 *
 * One benefit is that this allows for multiple actions to re-use the same template. It also allows modal content to
 * live in a separate file, which can be helpful for maintainability if the modal HTML is complex. While this can be
 * done via `ng-include`, it would be a little extra work for a common scenario.
 *
 * # Hooks
 *
 * `rxModalAction` allows you to define functions to be called at different points of the modal lifecycle.  These hooks
 * are optional and the modal window is fully functional without any being defined.
 *
 * ## Pre-hook
 *
 * The `pre-hook` function is called before the modal window is shown.  Use a this to populate field information inside
 * of the modal.  This is useful when you have information you don't want loaded when the page is first opened, but do
 * need for the modal.  It is also useful for dynamic information that is based on actions taken.
 *
 * ## Post-hook
 *
 * The `post-hook` function is called after the modal is submitted.  A `post-hook` is useful to take actions based upon
 * input in the modal.  For example, you can use the user input that gets entered to send API requests with specific
 * JSON data.  Or you can simply run a pre-defined API call (assuming the modal is a simple confirmation dialog).
 *
 * ## Dismiss-hook
 *
 * The `dismiss-hook` function is called after the modal is closed without submitting.  This may happen via any of the
 * following scenarios:
 *
 * * Clicking the "Cancel" button
 * * Clicking the "X" button in the top right
 * * Pressing `ESC`
 * * Explicitly calling `$modalInstance.dismiss()` in your javascript logic
 *
 * This hook is useful for making changes to UI state when the user wants to cancel the given action.  For example, you
 * may use this to return an indeterminate component to a previous state (e.g. toggle switches).
 *
 * @param {Function=} [preHook] Function to call when a modal is opened
 * @param {Function=} [postHook] Function to call when a modal is submitted (not called when cancelled out of)
 * @param {Function=} [dismissHook] Function to call when a modal is dismissed (not called when submitted)
 * @param {String=} [templateUrl] URL of template to use for modal content
 * @param {*=} [disable-esc] If the `disable-esc` attribute is present, then "Press Esc to close" will be disabled
 *                           for the modal. This attribute takes no values.
 * @param {Expression=} [disabled=false] the `disabled` attribute takes an expression. If expression is present,
 *                      then link for opening modal will be disabled.
 *
 * @example
 * <pre>
 * <rx-modal-action
 *     pre-hook="myPreHook(this)"
 *     post-hook="myPostHook(fields)"
 *     template-url="modalContent.html"
 *     disable-esc>
 *         My Link Text
 * </rx-modal-action>
 * </pre>
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
            scope.isDisabled = false;

            // add any class passed in to scope
            scope.classes = attrs.classes;

            attrs.$observe('disabled', function (newValue) {
                scope.isDisabled = scope.$eval(newValue);
            });

            var focusLink = function () {
                element.find('a')[0].focus();
            };

            var handleDismiss = function () {
                focusLink();

                // Since we don't want to isolate the scope, we have to eval our attr instead of using `&`
                // The eval will execute function (if it exists)
                scope.$eval(attrs.dismissHook);
            };

            var handleSubmit = function () {
                focusLink();

                // Since we don't want to isolate the scope, we have to eval our attr instead of using `&`
                // The eval will execute function
                scope.$eval(attrs.postHook);
            };

            scope.showModal = function (evt) {
                evt.preventDefault();

                if (scope.isDisabled) {
                    return false;
                }

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

                modal.result.then(handleSubmit, handleDismiss);
            };
        }
    };
}]);

angular.module('encore.ui.rxModalAction')
/**
 * @ngdoc directive
 * @name rxModalAction.directive:rxModalFooter
 * @restrict E
 * @scope
 * @description
 * Define a footer for the next modal.
 *
 * When a modal has multiple views or kicks off a process that should be tracked within the modal, the
 * `<rx-modal-footer>` directive should be used.
 *
 * Modal Footers should be defined in the same template as the Modal Form unless the footer is global, in which case it
 * should be loaded in `module.run()`.  Global footers can be used in any subsequent modal by changing to the state
 * they were defined with.
 *
 * The modal's controller also inherits the `setState()` method on the scope, which should be used to toggle different
 * views or footers. See the *Multi-View Example* in the component {@link /encore-ui/#/components/rxModalAction demo}
 * for an example of this design pattern's usage.
 *
 * The default `editing` state shows the standard submit and cancel buttons, and the only other state provided by the
 * framework is `complete` (showing the return button).
 *
 * @param {String} state The content will be shown in the footer when this state is activated.
 * @param {String=} [global] If the global attribute is present, then this footer can be used
 *                          in other modals. This attribute takes no values.
 *
 * @example
 * <pre>
 * <rx-modal-footer state="confirm">
 *     <button class="button" ng-click="setState('pending')">I understand the risks.</button>
 * </rx-modal-footer>
 * </pre>
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
}]);

angular.module('encore.ui.rxModalAction')
/**
 * @ngdoc directive
 * @name rxModalAction.directive:rxModalForm
 * @restrict E
 * @scope
 * @description
 * Responsible for creating the HTML necessary for modal form
 *
 * The `<rx-modal-form>` directive is helpful for providing a common format to forms inside modals (hence the name).
 *
 * This directive also provides an 'autofocus' mechanism, which will move the keyboard focus cursor to the first
 * 'tabbable' input available in the form.
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
 * <pre>
 * <rx-modal-form title="My Form" is-loading="true" submit-text="Yes!"></rx-modal-form>
 * </pre>
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc controller
 * @name utilities.controller:rxModalCtrl
 * @scope
 * @description
 * Provides a controller for `rxModalAction` to use.
 */
.controller('rxModalCtrl', ["$scope", "$modalInstance", "$rootScope", function ($scope, $modalInstance, $rootScope) {
    // define a controller for the modal to use
    $scope.submit = function () {
        $modalInstance.close($scope);
    };

    $scope.cancel = $modalInstance.dismiss;

    // cancel out of the modal if the route is changed
    $rootScope.$on('$routeChangeSuccess', $modalInstance.dismiss);
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxModalFooterTemplates
 * @description
 * A cache for storing the modal footer templates
 * This is used internally by rxModalFooter, which is preferred
 * for registering templates over direct calling of this api.
 *
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
         * @returns {string} The concatenated templates wrapped in an `ng-switch`.
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
         * @param {string} The template associated with the state.
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
});

/**
 * @ngdoc overview
 * @name rxMultiSelect
 * @description
 * # rxMultiSelect Component
 * This component is a multi-select dropdown with checkboxes for each option.
 * It is a replacement for `<select multiple>` when space is an issue, such as
 * in the header of a table.
 *
 * ## Directives
 * * {@link rxMultiSelect.directive:rxMultiSelect rxMultiSelect}
 * * {@link rxMultiSelect.directive:rxSelectOption rxSelectOption}
 *
 */
angular.module('encore.ui.rxMultiSelect', [
    'encore.ui.utilities'
]);

angular.module('encore.ui.rxMultiSelect')
/**
 * @ngdoc directive
 * @name rxMultiSelect.directive:rxMultiSelect
 * @restrict E
 * @scope
 * @requires rxMultiSelect.directive:rxSelectOption
 * @description
 * This component is a multi-select dropdown with checkboxes for each option.
 * It is a replacement for `<select multiple>` when space is an issue, such as
 * in the header of a table.
 * The options for the control can be specified by passing an array of strings
 * (corresponding to the options' values) to the `options` attribute of the
 * directive, or using `<rx-select-option>`s. An 'All' option is automatically
 * set as the first option for the dropdown, which allows all options to be
 * toggled at once.
 *
 * The following two dropdowns are equivalent:
 * <pre>
 * <!-- $scope.available = [2014, 2015] -->
 * <rx-multi-select ng-model="selected" options="available"></rx-multi-select>
 *</pre>
 *<pre>
 * <rx-multi-select ng-model="selected">
 *   <rx-select-option value="2014"></rx-select-option>
 *   <rx-select-option value="2015"></rx-select-option>
 * </rx-multi-select>
 * </pre>
 *
 * This component requires the `ng-model` attribute and binds the model to an
 * array of the selected options.
 *
 *
 * The preview text (what is shown when the element is not active) follows the following rules:
 * * If no items are selected, show "None".
 * * If only one item is selected from the dropdown, its label will display.
 * * If > 1 but < n-1 items are selected, show "[#] Selected".
 * * If all but one item is selected, show "All except [x]"
 * * If all items are selected, show "All Selected".
 *
 * @param {String} ng-model The scope property that stores the value of the input
 * @param {Array=} options A list of the options for the dropdown
 */
.directive('rxMultiSelect', ["$document", "rxDOMHelper", function ($document, rxDOMHelper) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxMultiSelect.html',
        transclude: true,
        require: [
            'rxMultiSelect',
            'ngModel'
        ],
        scope: {
            selected: '=ngModel',
            options: '=?',
            isDisabled: '=ngDisabled',
        },
        controller: ["$scope", function ($scope) {
            if (_.isUndefined($scope.selected)) {
                $scope.selected = [];
            }

            this.options = [];
            this.addOption = function (option) {
                if (option !== 'all') {
                    this.options = _.union(this.options, [option]);
                    this.render();
                }
            };
            this.removeOption = function (option) {
                if (option !== 'all') {
                    this.options = _.without(this.options, option);
                    this.unselect(option);
                    this.render();
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
            scope.listDisplayed = false;

            scope.toggleMenu = function () {
                if (!scope.isDisabled) {
                    scope.listDisplayed = !scope.listDisplayed;
                }
            };

            scope.closeMenu = function () {
                scope.listDisplayed = false;
            };

            var selectCtrl = controllers[0];
            var ngModelCtrl = controllers[1];

            ngModelCtrl.$render = function () {
                scope.$evalAsync(function () {
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
                });
            };

            selectCtrl.ngModelCtrl = ngModelCtrl;
        }
    };
}]);

angular.module('encore.ui.rxMultiSelect')
/**
 * @ngdoc directive
 * @name rxMultiSelect.directive:rxSelectOption
 * @restrict E
 * @requires atoms.directive:rxCheckbox
 * @description
 * A single option for use within rxMultiSelect.
 *
 * `<rx-select-option>` is to `<rx-multi-select>` as `<option>` is to `<select>`.
 *
 * Just like `<option>`, it has a `value` attribute and uses the element's
 * content for the label. If the label is not provided, it defaults to a
 * titleized version of `value`.
 *
 * <pre>
 * <rx-select-option value="DISABLED">Disabled</rx-select-option>
 * </pre>
 *
 * @param {String} value The value of the option. If no transcluded content is provided,
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

            scope.$on('$destroy', function () {
                selectCtrl.removeOption(scope.value);
            });
        }
    };
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxNestedElement
 * @description
 * Helper function to aid in the creation of boilerplate DDO definitions
 * required to validate nested custom elements.
 *
 * @param {Object=} opts - Options to merge with default DDO definitions
 * @param {String} opts.parent - Parent directive name
 * (i.e. defined NestedElement is an immediate child of this parent element)
 *
 * @return {Object} Directive Definition Object for a rxNestedElement
 *
 * @example
 * <pre>
 * angular.module('myApp', [])
 * .directive('parentElement', function (rxNestedElement) {
 *   return rxNestedElement();
 * })
 * .directive('childElement', function (rxNestedElement) {
 *   return rxNestedElement({
 *      parent: 'parentElement'
 *   });
 * });
 * </pre>
 */
.factory('rxNestedElement', function () {
    return function (opts) {
        opts = opts || {};

        var defaults = {
            restrict: 'E',
            /*
             * must be defined for a child element to verify
             * correct hierarchy
             */
            controller: angular.noop
        };

        if (angular.isDefined(opts.parent)) {
            opts.require = '^' + opts.parent;
            /*
             * bare minimum function definition needed for "require"
             * validation logic
             *
             * NOTE: `angular.noop` and `_.noop` WILL NOT trigger validation
             */
            opts.link = function () {};
        }

        return _.defaults(opts, defaults);
    };
});

/**
 * @ngdoc overview
 * @name rxNotify
 * @description
 * # rxNotify Component
 *
 * The rxNotify component provides status message notifications on a page.
 *
 * There may be situations where you will need to use the styling/markup of
 * rxNotify's messaging queue in status messages of your own - for example,
 * a modal window which asks if you want to delete an object, with the
 * appropriate warning or error flags. If this is the case, we recommend using
 * the {@link rxNotify.directive:rxNotification rxNotification} directive in your views.  Please note, this
 * differs from {@link rxNotify.directive:rxNotifications rxNotifications} (plural).
 *
 * The type attribute can be any type supported by `options.type` for the `rxNotify.add()` function in
 * the {@link utilities.service:rxNotify rxNotify} service.
 *
 * ## Directives
 * * {@link rxNotify.directive:rxNotification rxNotification}
 * * {@link rxNotify.directive:rxNotifications rxNotifications}
 *
 * # Use Cases
 *
 * ## Add Notification in Loading State
 * <pre>
 * rxNotify.add('Loading', {
 *     loading: true,
 *     dismiss: [$scope, 'loaded']
 * });
 * var apiCallback = function (data) {
 *     $scope.loaded = true;
 *     // do something with the data
 * };
 * </pre>
 *
 * ## Show Notification on Variable Change
 * <pre>
 * $scope.loaded = false;
 * rxNotify.add('Content Loaded', {
 *     show: [$scope, 'loaded']
 * });
 * $timeout(function () {
 *     $scope.loaded = true;
 * }, 1500);
 * </pre>
 *
 *
 * ## Dismiss Notification on Variable Change
 * <pre>
 * $scope.loaded = false;
 * rxNotify.add('Content Loaded', {
 *     dismiss: [$scope, 'loaded']
 * });
 * $timeout(function () {
 *     $scope.loaded = true;
 * }, 1500);
 * </pre>
 *
 *
 * ## Using a Custom Stack
 * Say you want to create a stack for a login form.
 * Let's call the stack 'loginForm' to reference in our code.
 *
 * **Controller**
 * <pre>
 * rxNotify.add('Username required', {
 *     type: 'error',
 *     stack: 'loginForm'
 * });
 * </pre>
 *
 * **View**
 * <pre>
 * <rx-notifications stack="loginForm"></rx-notifications>
 * </pre>
 */
angular.module('encore.ui.rxNotify', [
    'ngSanitize',
    'ngAnimate',
    'encore.ui.utilities'
]);

angular.module('encore.ui.rxNotify')
/**
 * @ngdoc directive
 * @name rxNotify.directive:rxNotification
 * @restrict E
 * @scope
 * @description
 * Display a static message with styling taken from `rx-notifications`.
 *
 * @param {String=} [type='info'] The type of notification (e.g. 'warning', 'error')
 *
 * @example
 * <pre>
 * <rx-notification type="warning">This is a message!</rx-notification>
 * </pre>
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
                     * el                           -> [<rx-notification stack="demo-stack" type="info">
                     *                                  <div class="rx-notifications">...template...</div>
                     *                                  </rx-notification>]
                     *
                     * transclude()                 -> [<span class="ng-scope">Hello, world in demo-stack stack!</span>]
                     *
                     * transclude().parent()        -> [<rx-notification stack="demo-stack" type="info">
                     *                                  <span class="ng-scope">Hello, world in demo-stack stack!</span>
                     *                                  </rx-notification>]
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
}]);

angular.module('encore.ui.rxNotify')
/**
 * @ngdoc directive
 * @name rxNotify.directive:rxNotifications
 * @restrict E
 * @scope
 * @description
 * Displays all messages in a stack.
 *
 * @param {String=} [stack='page'] The message stack to associate with
 *
 * @example
 * <pre>
 * <rx-notifications stack="myCustomStack"></rx-notifications>
 * </pre>
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxNotify
 * @description
 * Manages page messages for an application.
 *
 * # Stacks
 *
 * Stacks are just separate notification areas. Normally, all messages created will go to the `page` stack, which
 * should be displayed at the top of the page. The `page` stack is used for page-level messages.
 *
 * ## Using the Page Stack
 *
 * The default notification stack is added by default to the `rxPage` template (see {@link rxApp}), so it should be
 * ready to use without any work (unless your app uses a custom template).  The
 * {@link rxNotify.directive:rxNotifications rxNotifications} directive will gather all notifications for a particular
 * stack into a single point on the page.  By default, this directive will collect all notifications in the `page`
 * stack.
 *
 * <pre>
 * <rx-notifications></rx-notifications>
 * </pre>
 *
 * See {@link rxNotify.directive:rxNotification rxNotification} for more details.
 *
 * ## Using a Custom Stack
 *
 * You can also create custom stacks for specific notification areas. Say you have a form on your page that you want to
 * add error messages to. You can create a custom stack for this form and send form-specific messages to it.
 *
 * Please see the *Custom Stack* usage example in the `rxNotify` {@link /encore-ui/#/components/rxForm demo}.
 *
 * ## Adding an `rxNotification` to the Default Stack
 *
 * If you need to add a notification via your Angular template, just set the `stack` parameter on the opening
 * `<rx-notification>` tag.  This will allow the notification to be added via the `rxNotify.add()` function.
 *
 * <pre>
 * <rx-notification type="error" stack="page">
 *   This is an error message being added to the "page" stack with <strong>Custom</strong> html.
 * </rx-notification>
 * </pre>
 *
 * ## Adding a New Message Queue via `rxNotify`
 *
 * To add a new message to a stack, inject `rxNotify` into your Angular function and run:
 *
 * <pre>
 * rxNotify.add('My Message Text');
 * </pre>
 *
 * This will add a new message to the default stack (`page`) with all default options set.  To customize options, pass
 * in an `object` as the second argument with your specific options set:
 *
 * <pre>
 * rxNotify.add('My Message Text', {
 *   stack: 'custom',
 *   type: 'warning'
 * });
 * </pre>
 *
 * ## Dismissing a message programatically
 *
 * Most messages are dismissed either by the user, a route change or using the custom `dismiss` property.  If you need
 * to dismiss a message programmaticaly, you can run `rxNotify.dismiss(message)`, where *message* is the `object`
 * returned from `rxNotify.add()`.
 *
 * ## Clearing all messages in a stack
 *
 * You can clear all messages in a specific stack programmatically via the `rxNotify.clear()` function. Simply pass in
 * the name of the stack to clear:
 *
 * <pre>
 * rxNotify.clear('page');
 * </pre>
 *
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
        loading: false,
        show: 'immediate',
        dismiss: 'next',
        ondismiss: _.noop(),
        stack: 'page',
        repeat: true
    };

    /**
     * @function
     * @private
     * @description Adds a message to a stack
     *
     * @param {Object} message The message object to add.
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
    };//addToStack

    /**
     * @function
     * @private
     * @description
     * Sets a timeout to wait a specific time then dismiss message
     *
     * @param {Object} message The message object to remove.
     */
    function dismissAfterTimeout (message) {
        // convert seconds to milliseconds
        var timeoutMs = message.timeout * 1000;

        $interval(function () {
            dismiss(message);
        }, timeoutMs, 1);
    }

    /**
     * @function
     * @private
     * @description
     * Shows/dismisses message after scope.prop change to true
     *
     * @param {Object} message The message object to show/dismiss
     * @param {String} changeType Whether to 'show' or 'dismiss' the message
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
    };//changeOnWatch

    /**
     * @function
     * @private
     * @description removes all messages that are shown
     */
    var clearAllShown = function () {
        _.forOwn(stacks, function (index, key) {
            stacks[key] = _.reject(stacks[key], {
                'dismiss': messageDefaults.dismiss
            });
        });
    };

    /**
     * @function
     * @private
     * @description adds messages marked as 'next' to relevant queues
     */
    var addAllNext = function () {
        _.each(nextQueue, function (message) {
            // add to appropriate stack
            addToStack(message);
        });

        // empty nextQueue of messages
        nextQueue.length = 0;
    };

    /**
     * @name clear
     * @ngdoc method
     * @methodOf utilities.service:rxNotify
     * @description deletes all messages in a stack
     *
     * @param {String} stack The name of the stack to clear
     */
    var clear = function (stack) {
        if (stacks.hasOwnProperty(stack)) {
            // @see http://davidwalsh.name/empty-array
            stacks[stack].length = 0;
        }
    };

    /**
     * @name dismiss
     * @ngdoc method
     * @methodOf utilities.service:rxNotify
     * @description removes a specific message from a stack
     *
     * @param {Object} msg Message object to remove
     */
    function dismiss (msg) {
        // remove message by id
        stacks[msg.stack] = _.reject(stacks[msg.stack], { 'id': msg.id });

        if (_.isFunction(msg.ondismiss)) {
            $interval(function () {
                msg.ondismiss(msg);
            }, 0, 1);
        }
    }//dismiss()

    /**
     * @name add
     * @ngdoc method
     * @methodOf utilities.service:rxNotify
     * @description adds a message to a stack
     *
     * @param {String} text Message text
     * @param {Object=} options Message options
     * @param {String=} [options.type='info'] Message Type
     *
     * Values:
     * * 'info'
     * * 'warning'
     * * 'error'
     * * 'success'
     * @param {Integer=} [options.timeout=-1]
     * Time (in seconds) for message to appear. A value of -1 will display
     * the message until it is dismissed or the user navigates away from the
     * page.
     *
     * Values:
     * * -1
     * * Any positive integer
     * @param {Boolean=} [options.repeat=true]
     * Whether the message should be allowed to appear more than once in the stack.
     * @param {Boolean=} [options.loading=false]
     * Replaces type icon with spinner. Removes option for use to dismiss message.
     *
     * You usually want to associate this with a 'dismiss' property.
     * @param {String|Array=} [options.show='immediate']
     * When to have the message appear.
     *
     * Values:
     * * 'immediate'
     * * 'next'
     * * [scope, 'property']
     *   * Pass in a property on a scope to watch for a change.
     *     When the property equals true, the message is shown.
     * @param {String|Array=} [options.dismiss='next']
     * When to have the message disappear.
     *
     * Values:
     * * 'next'
     * * [scope, 'property']
     *     * Pass in a property on a scope to watch for a change.
     *       When the property equals true, the message is dismissed.
     * @param {Function=} [options.ondismiss=_.noop]
     * Function that should be run when message is dismissed.
     * @param {String=} [options.stack='page']
     * Which message stack the message gets added to.
     *
     * Values:
     * * 'page'
     * * Any String *(results in a custom stack)*
     *
     * @returns {Object} message object
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
    };//add()

    // add a listener to root scope which listens for the event that gets fired when the route successfully changes
    $rootScope.$on('$routeChangeSuccess', function processRouteChange () {
        clearAllShown();
        addAllNext();
    });

    // expose public API
    return {
        add: add,
        clear: clear,
        dismiss: dismiss,
        stacks: stacks
    };
}]);

/**
 * @ngdoc overview
 * @name rxOptionTable
 * @description
 * # rxOptionTable Component
 *
 * The rxOptionTable component provides functionality to create a series of radio or checkbox inputs within a table.
 *
 * ## Directives
 * * {@link rxOptionTable.directive:rxOptionTable rxOptionTable}
 * * {@link rxOptionTable.directive:rxFormOptionTable rxFormOptionTable} (*deprecated*)
 */
angular.module('encore.ui.rxOptionTable', [
    'encore.ui.atoms',
    'ngSanitize'
]);

angular.module('encore.ui.rxOptionTable')
/**
 * @deprecated
 * @ngdoc directive
 * @restrict E
 * @name rxOptionTable.directive:rxFormOptionTable
 * @description
 * **DEPRECATED**: Please use **{@link rxOptionTable.directive:rxOptionTable rxOptionTable}**
 * as a stand-in-replacement.
 */
.directive('rxFormOptionTable', ["rxOptionTableDirective", function (rxOptionTableDirective) {
    var warnMsg = 'DEPRECATION WARNING: rxFormOptionTable has been marked as deprecated ' +
        'and will be removed in a future release of the EncoreUI framework. ' +
        'Please use rxOptionTable as a stand-in replacement.';
    console.warn(warnMsg); // jshint ignore:line
    return rxOptionTableDirective[0];
}]);

angular.module('encore.ui.rxOptionTable')
/**
 * @ngdoc directive
 * @name rxOptionTable.directive:rxOptionTable
 * @restrict E
 * @scope
 * @description
 * This directive is used to build a table of radio/checkbox inputs.
 *
 * @param {String} field-id - Used as the base for unique identifiers within the generated markup.
 * @param {Object} model - The AngularJS model to tie all radios/checkboxes together.
 * @param {String} type - (`radio` | `checkbox`) Type of input to be used.
 * @param {String} empty-message - A default message if the data attribute is empty.
 * @param {Array} data - Array of objects used to populate table. Properties must match column keys.
 * For checkboxes, checked values default to true unless `value` and `falseValue` attributes are given.
 *
 * Example:
 * <pre>
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
 * </pre>
 * @param {Object} columns - Array of column data to match against data objects.
 * Each object may include the following properties.
 * * **label** - Column display value
 * * **key** - object key used to display data from the data object
 * * *selectedLabel* - (optional) Label to display alongside preseleted-values. Expressions are allowed; see
 *   demonstration samples.
 *
 * Example:
 *
 * <pre>
 * [{
 *     'label': 'Name',
 *     'key': 'name'
 * }]
 * </pre>
 * @param {String=} selected - Array of objects to match against data for preselection on page load.
 * If excluded, no values will be preselected on initial load.
 * @param {Boolean=} required - Value passed to input's `ng-required` attribute.
 * For checkboxes, a `true` value means that there must be at least one checkbox selected.
 * @param {Function=} disable-fn - Optional callback function to determine if option should be disabled.
 * Parameters `tableId`, `fieldId`, and `rowId` will be passed to the function.
 *
 * Example:
 *
 * <pre>
 *  <rx-option-table disable-fn="disableOption(tableId, fieldId, rowId)"></rx-option-table>
 * </pre>
 */
.directive('rxOptionTable', ["$interpolate", function ($interpolate) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxOptionTable.html',
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
        link: function (scope, element) {
            var boxesChecked = 0;
            scope.selectAllModel = false;

            scope.$watchCollection('modelProxy', function (newValue) {
                scope.selectAllModel = !_.any(newValue, function (val) {
                    return val === false;
                });
            });

            var determineMatch = function (val1, val2) {
                if (_.isUndefined(val1) || _.isUndefined(val2)) {
                    return false;
                }

                return (val1 == val2);
            };

            scope.selectAll = function (currentVal) {
                scope.selectAllModel = !currentVal;
                scope.modelProxy.forEach(function (model, index) {
                    // assigning the value to `model` variable caused the
                    // select all functionality to not select checkboxes
                    // so using `modelProxy[index]` is workaround
                    scope.modelProxy[index] = scope.selectAllModel;
                    scope.updateCheckboxes(scope.selectAllModel, index);
                });
            };

            scope.checkDisabled = function (row) {
                return scope.disableFn({
                    tableId: element.attr('id'),
                    fieldId: scope.fieldId,
                    rowId: row.id
                });
            };

            // Determines whether the row is the initial choice
            scope.isCurrent = function (val) {
                return determineMatch(val, scope.selected);
            };

            // Determines whether the row is selected
            scope.isSelected = function (val, idx) {
                // row can only be 'selected' if it's not the 'current' value
                if (!scope.isCurrent(val)) {
                    if (scope.type == 'radio') {
                        return (val == scope.model);
                    } else if (scope.type == 'checkbox') {
                        if (!_.isUndefined(val)) {
                            // if 'val' is defined, run it through our custom matcher
                            return determineMatch(val, scope.model[idx]);
                        } else {
                            // otherwise, just return the value of the model and angular can decide
                            return scope.modelProxy[idx];
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
            scope.checkRequired = function () {
                if (_.isBoolean(scope.required)) {
                    return scope.required && boxesChecked === 0;
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
            scope.modelProxy = _.map(scope.model, function (val, index) {
                var data = scope.data[index];
                var trueValue = _.has(data, 'value') ? data.value : true;
                return val === trueValue;
            });

            // If we are using checkboxes and the required attribute is set, then we
            // need an array to store the indexes of checked boxes. ng-required is
            // specifically set if required is true and the array is empty.
            _.forEach(scope.modelProxy, function (el) {
                if (el) {
                    boxesChecked += 1;
                }
            });

            /*
             * Updates $scope.values when a checkbox is clicked.
             * @param {String|boolean} val - The checkbox value (Boolean, ng-true-value or ng-false-value per row)
             * @param {Integer} index - Array index of the checkbox element marked true
             */
            scope.updateCheckboxes = function (val, index) {
                var data = scope.data[index];
                var trueValue = _.has(data, 'value') ? data.value : true;
                var falseValue = _.has(data, 'falseValue') ? data.falseValue : false;

                scope.model[index] = val ? trueValue : falseValue;

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
            scope.getContent = function (column, row) {
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
        }
    };
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxPageTitle
 * @description
 *  `rxPageTitle` service manages page titles.
 *
 * Two methods are available for setting the page title:
 *
 * First, `setTitle()` simply sets the title to whatever raw string is passed in.
 *
 * Second, `setTitleUnsafeStripHTML()` strips any HTML tags from the string, and sets the title to
 * the result. This uses the
 * [technique found here](http://stackoverflow.com/questions/5002111/javascript-how-to-strip-html-tags-from-string).
 * Note the caveats listed there, namely:
 *
 * 1. Only tags valid within `<div>` will be correctly stripped out
 * 2. You should not have  any `<script>` tags within the title
 * 3. You should not pass `null` as the title
 * 4. The title must come from a trusted source, i.e. danger danger danger
 *    `<img onerror="alert('could run arbitrary JS here')" src=bogus />`
 */
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
}]);

/**
 * @ngdoc overview
 * @name rxPaginate
 * @description
 * # rxPaginate Component
 *
 * The rxPaginate component adds pagination to a table.
 *
 * Two different forms of pagination are supported:
 *
 * 1. UI-based pagination, where all items are retrieved at once, and paginated in the UI
 * 2. Server-side pagination, where the pagination directive works with a paginated API
 *
 * # UI-Based Pagination
 * With UI-Based pagination, the entire set of data is looped over via an `ngRepeat` in the table's
 * `<tbody>`, with the data passed into the `Paginate` filter. This filter does the work of paginating
 * the set of data and communicating with the `<rx-paginate>` to draw the page selection buttons at the
 * bottom of the table.
 *
 * As shown in the first example below, the `ngRepeat` will usually look like this:
 *
 * <pre>
 * <tr ng-repeat="server in servers |
 *                orderBy: sorter.predicate:sorter.reverse |
 *                Paginate:pager ">
 * </pre>
 *
 * In this case,
 *
 * 1. `servers` is a variable bound to your page `$scope`, and contains the full set of servers.
 * 2. This is then passed to `orderBy`, to perform column sorting with `rxSortableColumn`.
 * 3. The sorted results are then passed to `Paginate:pager`, where `Paginate` is a filter from the
 * `rxPaginate` module, and `pager` is a variable on your scope created like
 * `$scope.pager = PageTracking.createInstance();`.
 *
 * This `pager` is responsible for tracking pagination state (i.e. "which page are we on", "how many
 * items per page", "total number of items tracked", etc.
 *
 * To add the pagination buttons to your table, do the following in your `<tfoot>`:
 * <pre>
 * <tfoot>
 *     <tr class="paginate-area">
 *         <td colspan="2">
 *             <rx-paginate page-tracking="pager"></rx-paginate>
 *         </td>
 *     </tr>
 * </tfoot>
 * </pre>
 *
 * Here we are using the `<rx-paginate>` directive to draw the buttons, passing it the same `pager`
 * instance described above.
 *
 * Because all of the `servers` get passed via `ng-repeat`, it means you don't need to take explicit
 * action if the set of data changes. You can change `$scope.servers` at any time, and `<rx-paginate>`
 * will automatically re-process it.
 *
 * ## Persistence
 *
 * The user's preference for the number of items to display per page will be persisted across applications
 * using {@link utilities.service:rxLocalStorage rxLocalStorage}. This preference is set whenever the user selects
 * a new number to show.
 *
 * This applies to both UI-based pagination and API-based pagination.
 *
 * *NOTE*: If `itemsPerPage` is explicitly specified in the `opts` you pass to `PageTracking.createInstance()`,
 * then that pager instance will load using the `itemsPerPage` you specified, and _not_ the globally persisted value.
 *
 * *NOTE*: If you don't want a specific pager to have its `itemsPerPage` persisted to other pagers,
 * pass `persistItemsPerPage: false` with the `opts` to `createInstance()`.
 *
 * ## Hiding the pagination
 *
 * In some instances, the pagination should be hidden if there isn't enough data to require it. For example,
 * if you have `itemsPerPage` set to 10, but only have 7 items of data (so only one page). Hiding the
 * pagination is pretty simple:
 *
 * <pre>
 * <rx-paginate page-tracking="pager" ng-hide="pager.totalPages === 1"></rx-paginate>
 * </pre>
 *
 * You can use this code on any part of your view. For example, if you have pagination in your table
 * footer, it's a good idea to hide the entire footer:
 *
 * <pre>
 * <tfoot ng-hide="pager.totalPages === 1">
 *     <tr class="paginate-area">
 *         <td colspan="12">
 *             <rx-paginate page-tracking="pager"></rx-paginate>
 *         </td>
 *     </tr>
 * </tfoot>
 * </pre>
 *
 * See the rxPaginate compoent {@link /encore-ui/#/components/rxPaginate demo} for more examples of this.
 *
 * This applies to both UI-based pagination and API-based pagination.
 *
 * # API-Based Pagination
 * Many APIs support pagination on their own. Previously, we would have to grab _all_ the data at once,
 * and use the UI-Based Pagination described above. Now we have support for paginated APIs, such that we
 * only retrieve data for given pages when necessary.
 *
 * With API-based pagination, the `ngRepeat` for your table will instead look like this:
 * <pre>
 * <tr ng-repeat="server in pagedServers.items">
 * </pre>
 *
 * Note a few things here:
 *
 * 1. We now loop over a variable provided by the pager.
 * 2. We no longer pass the values through _any_ filters. Not a search text filter, not sorting filter,
 * and not the `Paginate` filter.
 *
 * ** BEGIN WARNING **
 *
 * You should _never_ access `pagedServers.items` from anywhere other than the `ng-repeat`. Do not touch
 * it in your controller. It is a dynamic value that can change at anytime. It is only intended for use
 * by `ng-repeat`.
 *
 * ** END WARNING **
 *
 * The `<tfoot>` will look like this:
 *
 * <pre>
 * <tfoot>
 *     <tr class="paginate-area">
 *         <td colspan="2">
 *             <rx-paginate
 *                 page-tracking="pagedServers"
 *                 server-interface="serverInterface"
 *                 filter-text="searchText"
 *                 selections="selectFilter.selected"
 *                 sort-column="sort.predicate"
 *                 sort-direction="sort.reverse">
 *             </rx-paginate>
 *         </td>
 *     </tr>
 * </tfoot>
 * </pre>
 *
 *  * `page-tracking` still receives the pager (`pagedServers` in this case) as an argument. What's
 *  new are the next four parameters.
 *  * `server-interface` _must_ be present. It has to be passed an object with a `getItems()` method
 *  on it. This method is what `<rx-paginate>` will use to request data from the paginated API.
 *  * `filter-text`, `selections`, `sort-column` and `sort-direction` are all optional. If present,
 *  `<rx-paginate>` will watch the variables for changes, and will call `getItems()` for updates whenever
 *  the values change.
 *
 * *Note:* If using `<rx-select-filter>` in the table, the `available` option passed to the `SelectFilter`
 * constructor **must** be provided and include every property.  This is because the filter cannot reliably
 * determine all available options from a paginated API.
 *
 * You will still create a `PageTracking` instance on your scope, just like in UI-based pagination:
 *
 * <pre>
 * $scope.pagedServers = PageTracking.createInstance();
 * </pre>
 *
 * ## getItems()
 * The `getItems()` method is one you write on your own, and lives as an interface between `<rx-paginate>`
 * and the server-side paginated API that you will be calling. The framework will make calls to `getItems()`
 * when appropriate. Rather than have to teach `<rx-paginate>` about how to call and parse a multitude of
 * different paginated APIs, it is your responsibility to implement this generic method.
 *
 * `getItems()` takes two required parameters, and one optional parameter object. When the framework calls it,
 * it looks like:
 *
 * <pre>
 * getItems(pageNumber, itemsPerPage, {
 *     filterText: some_filter_search_text,
 *     selections: selected_options_from_filters,
 *     sortColumn: the_selected_sort_column,
 *     sortDirection: the_direction_of_the_sort_column
 * });
 * </pre>
 *
 * where:
 *
 * * `pageNumber`: the 0-based page of data that the user has clicked on/requested
 * * `itemsPerPage`: the value the user currently has selected for how many items per page they wish to see
 * * `filterText`: the filter search string entered by the user, if any
 * * `selections`: an object containing the item properties and their selected options
 * * `sortColumn`: the name of the selected sort column, if any
 * * `sortDirection`: either `'ASCENDING'` or `'DESCENDING'`
 *
 * When the framework calls `getItems()`, you **_must_ return a promise**. When this promise resolves,
 * the resolved object must have the following properties on it:
 *
 * * `items`: An array containing the actual items/rows of the table returned for the request. This should at
 * least contain `itemsPerPage` items, if that many items exist on the given page
 * * `pageNumber`: The 0-based page number that these items belong to. Normally this should be the same as the
 * `pageNumber` value passed to `getItems()`
 * * `totalNumberOfItems`: The total number of items available, given the `filterText` parameter.
 *
 * Examples are below.
 *
 * ## `totalNumberOfItems`
 *
 * If you could get all items from the API in _one call_, `totalNumberOfItems` would reflect the number of items
 * returned (given necessary search parameters). For example, say the following request was made:
 *
 * <pre>
 * var pageNumber = 0;
 * var itemsPerPage = 50;
 *
 * getItems(pageNumber, itemsPerPage);
 * </pre>
 *
 * This is asking for all the items on page 0, with the user currently viewing 50 items per page. A valid response
 * would return 50 items. However, the _total_ number of items available might be 1000 (i.e. 20 pages of results).
 * Your response must then have `totalNumberOfItems: 1000`. This data is needed so we can display to the
 * user "Showing 1-50 of 1000 items" in the footer of the table.
 *
 * If `filterText` is present, then the total number of items might change. Say the request became:
 *
 * <pre>
 * var pageNumber = 0;
 * var itemsPerPage = 50;
 * var opts = {
 *         filterText: "Ubuntu"
 *     };
 *
 * getItems(pageNumber, itemsPerPage, opts);
 * </pre>
 *
 * This means "Filter all your items by the search term 'Ubuntu', then return page 0".
 * If the total number of items matching "Ubuntu" is 200, then your response would have
 * `totalNumberOfItems: 200`. You might only return 50 items in `.items`, but the framework
 * needs to know how many total items are available.
 *
 * ## Forcing a Refresh
 *
 * When using API-based pagination, there might be instances where you want to force a reload of
 * the current items. For example, if the user takes an action to delete an item. Normally, the
 * items in the view are only updated when the user clicks to change the page. To force a refresh, a
 * `refresh()` method is available on the `pagedServers`. Calling this will tell `<rx-paginate>` to
 * refresh itself. You can also pass it a `stayOnPage = true` to tell it to make a fresh request for
 * the current page, i.e.:
 * <pre>
 * var stayOnPage = true;
 * pagedServers.refresh(stayOnPage);
 * </pre>
 *
 * Internally, calling `refresh()` equates to `<rx-paginate>` doing a new `getItems()` call, with
 * the current filter/sort criteria. But the point is that you can't just call `getItems()` yourself
 * to cause an update. The framework has to call that method, so it knows to wait on the returned promise.
 *
 * This is shown in the rxPaginate component {@link /encore-ui/#/components/rxPaginate demo} with a "Refresh" button
 * above the API-paginated example.
 *
 * ## Error Handling
 *
 *
 * `<rx-paginate>` includes a simple way to show error messages when `getItems()` rejects instead of
 * resolves. By passing `error-message="Some error text!"` to `<rx-paginate>`, the string entered
 * there will be shown in an rxNotification whenever `getItems()` fails. If `error-message` is
 * not specified, then nothing will be shown on errors. In either case, on a failure, the table will
 * stay on the page it was on before the request went out.
 *
 * If you wish to show more complicated error messages (and it is highly recommended that you do!),
 * then you'll have to do that yourself. Either put error handling code directly into your `getItems()`,
 * or have something else wait on the `getItems()` promise whenever it's called, and perform the handling there.
 *
 * One way to do this is as so:
 *
 * Let's say that you had defined your `getItems()` method on an object called `pageRequest`,
 *
 * <pre>
 * var pageRequest = {
 *         getItems: function (pageNumber, itemsPerPage, opts) {
 *             var defer = $q.deferred();
 *             ...
 *         }
 *     };
 * </pre>
 *
 * You want your `getItems()` to be unaware of the UI, i.e. you don't want to mix API and UI logic into one method.
 *
 * Instead, you could do something like this:
 *
 * <pre>
 * var pageRequest = {
 *         getItemsFromAPI: function (pageNumber, itemsPerPage, opts) {
 *             var defer = $q.deferred();
 *                ...
 *         }
 *
 *         getItems: function (pageNumber, itemsPerPage, opts) {
 *             var promise = this.getItemsFromAPI(pageNumber, itemsPerPage, opts);
 *
 *             rxPromiseNotifications.add(promise, {
 *                 error: 'Error loading page ' + pageNumber
 *             }
 *
 *             return promise;
 *         }
 *     };
 * </pre>
 *
 * Thus we've moved the API logic into `getItemsFromAPI`, and handled the UI logic separately.
 *
 * ## Extra Filtering Parameters
 *
 * By default, `<rx-paginate>` can automatically work with a search text field (using `search-text=`).
 * If you need to filter by additional criteria (maybe some dropdowns/radiobox, extra filter boxes, etc),
 * you'll need to do a bit more work on your own.
 *
 * To filter by some element X, set a `$watch` on X's model. Whenever it changes, call
 * `pagedServers.refresh()` to force `<rx-paginate>` to do a new `getItems()` call. Then, in your
 * `getItems()`, grab the current value of X and send it out along with the normal criteria that are passed
 * into `getItems()`. Something like:
 *
 * <pre>
 * $scope.watch('extraSearch', $scope.pagedServers.refresh);
 *
 * var serverInterface = {
 *         getItems: function (pageNumber, itemsPerPage, opts) {
 *             var extraSearch = $scope.extraSearch;
 *             return callServerApi(pageNumber, itemsPerPage, opts, extraSearch);
 *         }
 *     };
 *
 *    ...
 *
 * <rx-paginate server-interface="serverInterface" ... ></rx-paginate>
 * </pre>
 *
 * Remember that calling `refresh()` without arguments will tell `rx-paginate` to make a fresh request for
 * page 0. If you call it with `true` as the first argument, the request will be made with whatever the current
 * page is, i.e. `getItems(currentPage, ...)`. If you have your own search criteria, and they've changed since the
 * last time this was called, note that the page number might now be different. i.e. If the user was on page 10,
 * they entered some new filter text, and you call `refresh(true)`, there might not even be 10 pages of results
 * with that filter applied.
 *
 * In general, if you call `refresh(true)`, you should check if _any_ of the filter criteria have changed since
 * the last call. If they have, you should ask for page 0 from the server, not the page number passed in to
 * `getItems()`. If you call `refresh()` without arguments, then you don't have to worry about comparing to the
 * last-used filter criteria.
 *
 * ## Local Caching
 *
 * **If you are ok with a call to your API every time the user goes to a new page in the table, then you can ignore
 * this section. If you want to reduce the total number of calls to your API, please read on.**
 *
 * When a `getItems()` request is made, the framework passes in the user's `itemsPerPage` value. If it is 50, and
 * there are 50 results available for the requested page, then you should return _at least_ 50 results. However, you
 * may also return _more_ than 50 items.
 *
 * Initially, `<rx-paginate>` will call `getItems()`, wait for a response, and then update items in the table.  If
 * your `getItems()` returned exactly `itemsPerPage` results in its `items` array, and the user navigates to a
 * different page of data, `getItems()` will be called again to fetch new information from the API.  The user will
 * then need to wait before they see new data in the table. This remains true for every interaction with page data
 * navigation.
 *
 * For example, say the following request is made when the page first loads:
 *
 * <pre>
 * var pageNumber = 0;
 * var itemsPerPage = 50;
 *
 * getItems(pageNumber, itemsPerPage);
 * </pre>
 *
 * Because no data is available yet, `<rx-paginate>` will call `getItems()`, wait for the response, and then draw
 * the items in the table. If you returned exactly 50 items, and the user then clicks "Next" or 2 (to go to the
 * second page), then `getItems()` will have to be called again (`getItems(1, 50)`), and the user will have to wait
 * for the results to come in.
 *
 * However, if your `getItems()` were to pull more than `itemsPerPage` of data from the API, `<rx-paginate>` is
 * smart enough to navigate through the saved data without needing to make an API request every time the page is
 * changed.
 *
 * There are some caveats, though.
 *
 * 1. Your returned `items.length` must be a multiple of `itemsPerPage` (if `itemsPerPage = 50`, `items.length`
 * must be 50, 100, 150, etc.)
 * 2. You will need to calculate the page number sent to the API based on requested values in the UI.
 * 3. If the user enters any search text, and you've passed the search field to `<rx-paginate>` via `search-text`,
 * then the cache will be immediately flushed and a new request made.
 * 4. If you've turned on column-sorting, and passed `sort-column` to `<rx-paginate>`, then the cache will be
 * flushed whenever the user changes the sort, and a new request will be made to `getItems()`
 * 5. If you've passed `sort-direction` to `<rx-paginate>, and the user changes the sort
 * direction, then the cache will be flushed and a new request will be made to `getItems()`
 *
 * Details on this are below.
 *
 * ### Local Caching Formula
 *
 * You have to be careful with grabbing more items than `itemsPerPage`, as you'll need to modify the values
 * you send to your server. If you want to be careful, then **don't ever request more than `itemsPerPage`
 * from your API.**
 *
 * Let's say that `itemsPerPage` is 50, but you want to grab 200 items at a time from the server, to reduce
 * the round-trips to your API. We'll call this 200 the `serverItemsPerPage`. First, ensure that your
 * `serverItemsPerPage` meets this requirement:
 *
 * <pre>
 * (serverItemsPerPage >= itemsPerPage) && (serverItemsPerPage % itemsPerPage === 0)
 * </pre>
 *
 * If you're asking for 200 items at a time, the page number on the server won't match the page number
 * requested by the user. Before, a user call for `pageNumber = 4` and `itemsPerPage = 50` means
 * "Give me items 200-249". But if you're telling your API that each page is 200 items long, then
 * `pageNumber = 4` is not what you want to ask your API for (it would return items 800-999!). You'll need to
 * send a custom page number to the server. In this case, you'd need `serverPageNumber` to be `1`, i.e.
 * the second page of results from the server.
 *
 * We have written a utility function do these calculations for you, `rxPaginateUtils.calculateApiVals`. It
 * returns an object with `serverPageNumber` and `offset` properties. To use it, your `getItems()` might
 * look something like this.
 *
 * <pre>
 * var getItems = function (pageNumber, itemsPerPage) {
 *         var deferred = $q.defer();
 *         var serverItemsPerPage = 200;
 *         var vals = rxPaginateUtils.calculateApiVals(pageNumber, itemsPerPage, serverItemsPerPage);
 *
 *         yourRequestToAPI(vals.serverPageNumber, serverItemsPerPage)
 *         .then(function (items) {
 *             deferred.resolve({
 *                 items: items.slice(vals.offset),
 *                 pageNumber: pageNumber,
 *                 totalNumberOfItems: items.totalNumberOfItems
 *             });
 *
 *         });
 *
 *         return deferred.promise;
 *     };
 * </pre>
 *
 * The following tables should help illustrate what we mean with these conversions. In all three cases,
 * there are a total of 120 items available from the API.
 *
 *
 * | pageNumber | itemsPerPage | Items   | Action     | serverPageNumber | serverItemsPerPage | Items  |
 * |------------|--------------|---------|------------|------------------|--------------------|--------|
 * | 0          | 50           | 1-50    | getItems() | 0                | 50                 | 1-50   |
 * | 1          | 50           | 51-100  | getItems() | 1                | 50                 | 51-100 |
 * | 2          | 50           | 101-120 | getItems() | 2                | 50                 | 101-120|
 *
 *
 * This first table is where you don't want to do any local caching. You send the `pageNumber` and
 * `itemsPerPage` to your API, unchanged from what the user requested. Every time the user clicks to go to
 * a new page, an API request will take place.
 *
 * ***
 *
 *
 * |pageNumber   | itemsPerPage | Items   | Action     | serverPageNumber | serverItemsPerPage | Items |
 * |-------------|--------------|---------|------------|------------------|--------------------|-------|
 * | 0           | 50           | 1-50    | getItems() | 0                | 100                | 1-100 |
 * | 1           | 50           | 51-100  | use cached |                  |                    |       |
 * | 2           | 50           | 101-120 | getItems() | 1                | 100                |101-120|
 *
 *
 * This second example shows the case where the user is still looking at 50 `itemsPerPage`, but you want to
 * grab 100 items at a time from your API.
 *
 * When the table loads (i.e. the user wants to look at the first page of results), an "Action" of
 * `getItems(0, 50)` will take place. Using `calculateApiVals`, the `serverPageNumber` will be 0 when you
 * provide `serverItemsPerPage=100`. When you resolve the `getItems()` promise, you'll return items 1-100.
 *
 * When the user clicks on the second page (page 1), `getItems()` will not be called, `<rx-paginate>` will
 * instead use the values it has cached.
 *
 * When the user clicks on the third page (page 2), `getItems(2, 50)` will be called. You'll use
 * `rxPaginateutils.calculateApiVals` to calculate that `serverPageNumber` now needs to be `1`. Because
 * only 120 items in total are available, you'll eventually resolve the promise with `items` containing
 * items 101-120.
 *
 * ***
 *
 * | pageNumber | itemsPerPage | Items   | Action     | serverPageNumber | serverItemsPerPage | Items |
 * |------------|--------------|---------|------------|------------------|--------------------|-------|
 * | 0          | 50           | 1-50    | getItems() | 0                | 200                | 1-120 |
 * | 1          | 50           | 51-100  | use cached |                  |                    |  &nbsp;     |
 * | 2          | 50           | 101-120 | use cached |                  |                    |  &nbsp;     |
 *
 * In this final example, there are still only 120 items available, but you're asking your API for 200 items
 * at a time. This will cause an API request on the first page, but the next two pages will be cached, and
 * `<rx-paginate>` will use the cached values.
 *
 * ## Directives
 * * {@link rxPaginate.directive:rxLoadingOverlay rxLoadingOverlay}
 * * {@link rxPaginate.directive:rxPaginate rxPaginate}
 */
angular.module('encore.ui.rxPaginate', [
    'encore.ui.utilities',
    'debounce'
]);

angular.module('encore.ui.rxPaginate')
/**
 * @ngdoc directive
 * @name rxPaginate.directive:rxLoadingOverlay
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
.directive('rxLoadingOverlay', ["$compile", function ($compile) {
    var loadingBlockHTML = '<div ng-show="_rxLoadingOverlayVisible" class="loading-overlay">' +
                                '<div class="loading-text-wrapper">' +
                                    '<i class="fa fa-fw fa-lg fa-spin fa-circle-o-notch"></i>' +
                                    '<div class="loading-text">Loading...</div>' +
                                '</div>' +
                            '</div>';

    return {
        restrict: 'A',
        controller: ["$scope", function ($scope) {
            this.show = function () {
                $scope._rxLoadingOverlayVisible = true;
            };

            this.hide = function () {
                $scope._rxLoadingOverlayVisible = false;
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
            scope._rxLoadingOverlayVisible = false;

            $compile(loadingBlockHTML)(scope, function (clone) {
                element.append(clone);
            });
        }
    };
}]);

angular.module('encore.ui.rxPaginate')
/**
 * @ngdoc directive
 * @name rxPaginate.directive:rxPaginate
 * @restrict E
 * @description
 * Directive that takes in the page tracking object and outputs a page
 * switching controller. It can be used in conjunction with the Paginate
 * filter for UI-based pagination, or can take an optional serverInterface
 * object if you instead intend to use a paginated server-side API
 *
 * @param {Object} pageTracking This is the page tracking service instance to
 * be used for this directive. See {@link utilities.service:PageTracking}
 * @param {Number} numberOfPages This is the maximum number of pages that the
 * page object will display at a time.
 * @param {Object} [serverInterface] An object with a `getItems()` method. The requirements
 * of this method are described in the rxPaginate module documentation
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
                    var response = scope.serverInterface.getItems(pageNumber,
                                                   itemsPerPage,
                                                   params());
                    rxLoadingOverlayCtrl.showAndHide(response);

                    if (errorMessage) {
                        rxPromiseNotifications.add(response, {
                            error: errorMessage
                        });
                    }
                    return response;
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxPaginateUtils
 * @description
 * A few utilities to calculate first, last, and number of items.
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
});

/**
 * @ngdoc overview
 * @name rxPermission
 * @description
 * # rxPermission Component
 * The rxPermission component provides functionality to perform checks against existing user permissions in
 * EncoreUI.  It provides a {@link utilities.service:Permission Permission} service for working with roles, and
 * a {@link rxPermission.directive:rxPermission rxPermission} directive for excluding DOM content based on roles.
 *
 * ## Directives
 * * {@link rxPermission.directive:rxPermission rxPermission}
 */
angular.module('encore.ui.rxPermission', [
    'encore.ui.utilities',
]);

angular.module('encore.ui.rxPermission')
/**
 * @ngdoc directive
 * @name rxPermission.directive:rxPermission
 * @restrict E
 * @scope
 * @description
 * Simple directive which will show or hide content based on whether or not the user has the specified role. See
 * the `rxPermission` component {@link /encore-ui/#/components/rxPermission demo} for an example.
 *
 * @requires rxPermission.service:Permission
 *
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxPromiseNotifications
 * @description Manages displaying messages for a promise.
 *
 * It is a common pattern with API requests that you show a loading message when an action is requested, followed
 * by either a _success_ or _failure_ message depending on the result of the call.  `rxPromiseNotifications` is the
 * service created for this pattern.
 *
 * @example
 * <pre>
 * rxPromiseNotifications.add($scope.deferred.promise, {
 *     loading: 'Loading Message',
 *     success: 'Success Message',
 *     error: 'Error Message'
 * });
 * </pre>
 */
.factory('rxPromiseNotifications', ["rxNotify", "$rootScope", "$q", "$interpolate", function (rxNotify, $rootScope, $q, $interpolate) {
    var scope = $rootScope.$new();

    /**
     * Removes 'loading' message from stack
     * @private
     * @this Scope used for storing messages data
     */
    var dismissLoading = function () {
        if (this.loadingMsg) {
            rxNotify.dismiss(this.loadingMsg);
        }
    };

    /**
     * Shows either a success or error message
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

    /**
     * Cancels all messages from displaying
     * @private
     * @this Scope used for storing messages data
     */
    var cancelMessages = function () {
        this.isCancelled = true;
        this.deferred.reject();
    };

    /**
     * @name add
     * @ngdoc method
     * @methodOf utilities.service:rxPromiseNotifications
     * @description
     * @param {Object} promise
     * The promise to attach to for showing success/error messages
     * @param {Object} msgs
     * The messages to display. Can take in HTML/expressions
     * @param {String} msgs.loading
     * Loading message to show while promise is unresolved
     * @param {String=} msgs.success
     * Success message to show on successful promise resolve
     * @param {String=} msgs.error
     * Error message to show on promise rejection
     * @param {String=} [stack='page']
     * What stack to add to
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

/**
 * @ngdoc overview
 * @name rxRadio
 * @description
 * # rxRadio Component
 *
 * The rxRadio component wraps a native radio element in markup required for styling purposes.
 *
 * ## Directives
 * * {@link rxRadio.directive:rxRadio rxRadio}
 */
angular.module('encore.ui.rxRadio', []);

angular.module('encore.ui.rxRadio')
/**
 * @name rxRadio.directive:rxRadio
 * @ngdoc directive
 * @restrict A
 * @scope
 * @description
 * rxRadio is an attribute directive that wraps a native radio element in markup required for styling purposes.
 * To use the directive, you can replace `type="radio"` with `rx-radio`. The directive is smart enough to set
 * the correct input type.
 *
 * # Styling
 * Directive results in an inline-block element.
 * You can style the output against decendents of the **`.rxRadio`** CSS class.
 *
 * # Show/Hide
 * If you wish to show/hide your `rxRadio` element (and its label), we recommend placing the element (and its label)
 * inside of a `<div>` or `<span>` wrapper, and performing the show/hide logic on the wrapper.
 * <pre>
 * <span ng-show="isShown">
 *   <input rx-radio id="radDemo" ng-model="radDemo" />
 *   <label for="radDemo">Label for Demo Radio</label>
 * </span>
 * </pre>
 *
 * It is highly recommended that you use `ng-show` and `ng-hide` for display logic.
 * Because of the way that `ng-if` and `ng-switch` directives behave with scope, they may
 * introduce unnecessary complexity in your code.
 *
 * @example
 * <pre>
 * <input rx-radio id="radDemo" ng-model="radDemo" />
 * <label for="radDemo">Label for Demo Radio</label>
 * </pre>
 *
 * @param {Boolean=} [ng-disabled=false] Determines if control is disabled.
 */
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
                var wrapper = '<div class="rxRadio"></div>';
                var fakeRadio = '<div class="fake-radio">' +
                        '<div class="tick"></div>' +
                    '</div>';

                element.wrap(wrapper);
                element.after(fakeRadio);
                // must be defined AFTER the element is wrapped
                var parent = element.parent();

                // apply/remove disabled attribute so we can
                // apply a CSS selector to style sibling elements
                if (attrs.disabled) {
                    parent.addClass(disabledClass);
                }
                if (_.has(attrs, 'ngDisabled')) {
                    scope.$watch('ngDisabled', function (newVal) {
                        if (newVal === true) {
                            parent.addClass(disabledClass);
                        } else {
                            parent.removeClass(disabledClass);
                        }
                    });
                }

                var removeParent = function () {
                    parent.remove();
                };

                // remove stylistic markup when element is destroyed
                element.on('$destroy', function () {
                    scope.$evalAsync(removeParent);
                });
            };
        }//compile
    };
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxScreenshotSvc
 * @description
 * Captures a screenshot for `rxFeedback` submission form.
 *
 * **NOTE:** [html2canvas](https://github.com/niklasvh/html2canvas) is required by `rxScreenshotSvc`.
 * `EncoreUI Framework` provides it by default.
 */
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
}]);

/**
 * @ngdoc overview
 * @name rxSearchBox
 * @description
 * # rxSearchBox Component
 *
 * The rxSearchBox component provides functionality around creating a search
 * input box.
 *
 * ## Directives
 * * {@link rxSearchBox.directive:rxSearchBox rxSearchBox}
 */
angular.module('encore.ui.rxSearchBox', []);

angular.module('encore.ui.rxSearchBox')
/**
 * @name rxSearchBox.directive:rxSearchBox
 * @ngdoc directive
 * @restrict E
 * @description
 * The rxSearchBox directive behaves similar to the HTML "Search" input type.
 * When the search box is not empty, an "X" button within the element will
 * allow you to clear the value. Once clear, the "X" will disappear. A disabled
 * search box cannot be cleared of its value via the "X" button because the
 * button will not display.
 *
 * Though it is described as a search box, you can also use it for filtering
 * capabilities (as seen by the placeholder text in the "Customized"
 * {@link /encore-ui/#/components/rxSearchBox demo}).
 *
 * # Styling
 * You can style the `<rx-search-box>` element via custom CSS classes the same
 * way you would any HTML element. See the customized search box in the
 * {@link /encore-ui/#/components/rxSearchBox demo} for an example.
 *
 * <pre>
 * <rx-search-box
 *      ng-model="customSearchModel"
 *      rx-placeholder="filterPlaceholder">
 * </rx-search-box>
 * </pre>
 * @param {String} ng-model Model value to bind the search value.
 * @param {Boolean=} ng-disabled Boolean value to enable/disable the search box.
 * @param {String=} [ng-placeholder='Search...'] String to override the
 * default placeholder.
 *
 * @example
 * <pre>
 * <rx-search-box ng-model="searchModel"></rx-search-box>
 * </pre>
 *
 */
.directive('rxSearchBox', function () {
    return {
        restrict: 'E',
        require: ['ngModel', '?^rxFloatingHeader'],
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
                if (!newVal || $scope.isDisabled) {
                    $scope.isClearable = false;
                } else {
                    $scope.isClearable = newVal.toString() !== '';
                }
            });

            $scope.clearSearch = function () {
                $scope.searchVal = '';
            };
        }],
        link: function (scope, element, attrs, controllers) {
            var rxFloatingHeaderCtrl = controllers[1];
            if (_.isObject(rxFloatingHeaderCtrl)) {
                rxFloatingHeaderCtrl.update();
            }
        }
    };
});

/**
 * @ngdoc overview
 * @name rxSelect
 * @description
 * # rxSelect component
 *
 * A component that wraps a native `<select>` element in markup required for
 * styling purposes.
 *
 * ## Directives
 * * {@link rxSelect.directive:rxSelect rxSelect}
 */
angular.module('encore.ui.rxSelect', []);

angular.module('encore.ui.rxSelect')
/**
 * @ngdoc directive
 * @name rxSelect.directive:rxSelect
 * @restrict A
 * @scope
 * @description
 *
 * This directive is to apply styling to native `<select>` elements
 *
 * ## Styling
 *
 * Directive results in a **block element** that takes up the *full width of its
 * container*. You can style the output against decendents of the **`.rxSelect`**
 * CSS class.
 *
 * ## Show/Hide
 * If you wish to show/hide your `rxSelect` element, we recommend placing it
 * within a `<div>` or `<span>` wrapper, and performing the show/hide logic on
 * the wrapper.
 *
 * <pre>
 * <span ng-show="isShown">
 *     <select rx-select ng-model="selDemo">
 *         <option value="1">First</option>
 *         <option value="2">Second</option>
 *         <option value="3">Third</option>
 *     </select>
 * </span>
 * </pre>
 *
 * It is highly recommended that you use `ng-show` and `ng-hide` for display logic.
 * Because of the way that `ng-if` and `ng-switch` directives behave with scope,
 * they may introduce unnecessary complexity in your code.
 *
 * @example
 * <pre>
 * <select rx-select ng-model="demoItem">
 *   <option value="1">First</option>
 *   <option value="2">Second</option>
 *   <option value="3">Third</option>
 * </select>
 * </pre>
 *
 * @param {Boolean=} [ngDisabled=false] Determines if control is disabled.
 */
.directive('rxSelect', function () {
    return {
        restrict: 'A',
        scope: {
            ngDisabled: '=?'
        },
        link: function (scope, element, attrs) {
            var disabledClass = 'rx-disabled';
            var wrapper = '<div class="rxSelect"></div>';
            var fakeSelect = '<div class="fake-select">' +
                    '<div class="select-trigger">' +
                        '<i class="fa fa-fw fa-caret-down"></i>' +
                    '</div>' +
                '</div>';

            element.wrap(wrapper);
            element.after(fakeSelect);
            // must be defined AFTER the element is wrapped
            var parent = element.parent();

            // apply/remove disabled class so we have the ability to
            // apply a CSS selector for purposes of style sibling elements
            if (_.has(attrs, 'disabled')) {
                parent.addClass(disabledClass);
            }
            if (_.has(attrs, 'ngDisabled')) {
                scope.$watch('ngDisabled', function (newVal) {
                    if (newVal === true) {
                        parent.addClass(disabledClass);
                    } else {
                        parent.removeClass(disabledClass);
                    }
                });
            }

            var removeParent = function () {
                parent.remove();
            };

            // remove stylistic markup when element is destroyed
            element.on('$destroy', function () {
                scope.$evalAsync(removeParent);
            });
        }
    };
});

/**
 * @ngdoc overview
 * @name rxSelectFilter
 * @description
 * # rxSelectFilter component
 *
 * A component that provides a multi-select dropdown interface intended for
 * table filtering.
 *
 * ## Directives
 * * {@link rxSelectFilter.directive:rxSelectFilter rxSelectFilter}
 */
angular.module('encore.ui.rxSelectFilter', [
    'encore.ui.utilities',
    'encore.ui.rxMisc',
    'encore.ui.rxSelect'
]);

angular.module('encore.ui.rxSelectFilter')
/**
 * @ngdoc directive
 * @name rxSelectFilter.directive:rxSelectFilter
 * @restrict E
 * @scope
 * @description
 * Automatically creates the appropriate dropdowns to manage a filter object.
 *
 * **NOTE:** `rxSelectFilter` directive must be instaniated as a child of
 * {@link rxForm.directive:rxFormSection rxFormSection} directive.  The {@link rxForm} component
 * hierarchy validation enforces this relationship.
 *
 * ## rxSelectFilter
 * Uses an instance of `SelectFilter` to create a set of `<rx-multi-select>`'s
 * that modify the instance object.
 * <pre>
 * // In the controller
 * $scope.filter = SelectFilter.create({
 *   // options...
 * });
 * </pre>
 *
 * ## rxSelectFilter usage in rxForm
 * <pre>
 * // rxSelectFilter must be instantiated as a child of rxFormSection
 * <rx-form-section>
 *     <rx-select-filter filter="filter"></rx-select-filter>
 * </rx-form-section>
 * </pre>
 *
 * @param {Object} filter - An instance of SelectFilter
 *
 */
.directive('rxSelectFilter', ["rxNestedElement", function (rxNestedElement) {
    return rxNestedElement({
        parent: 'rxFormSection',
        restrict: 'E',
        templateUrl: 'templates/rxSelectFilter.html',
        scope: {
            filter: '='
        }
    });
}]);

/**
 * @ngdoc overview
 * @name rxSortableColumn
 * @description
 * # rxSortableColumn Component
 *
 * The rxSortableColumn component provides functionality to sort a table on a
 * single property value.
 *
 * ## Directives
 * * {@link rxSortableColumn.directive:rxSortableColumn rxSortableColumn}
 */
angular.module('encore.ui.rxSortableColumn', []);

angular.module('encore.ui.rxSortableColumn')
/**
 * @ngdoc directive
 * @name rxSortableColumn.directive:rxSortableColumn
 * @restrict E
 * @description
 * Renders a clickable link in a table heading which will sort the table by
 * the referenced property in ascending or descending order.
 *
 * @param {String} displayText - The text to be displayed in the link
 * @param {Function} sortMethod - The sort function to be called when the link is
 * clicked
 * @param {String} sortProperty - The property on the array to sort by when the
 * link is clicked.
 * @param {Object} predicate - The current property the collection is sorted by.
 * @param {Boolean} reverse - Indicates whether the collection should sort the
 * array in reverse order.
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
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:rxSortEmptyTop
 * @description
 *
 * Filter that moves rows with an empty predicate to the top of the column in
 * ascending order, and to the bottom in descending order.
 *
 * @example
 * ### Empty Sort
 * <pre>
 * var emptySort = [
 *     { name: { firstName: 'Adam' } },
 *     { }
 * ];
 * emptySort | rxSortEmptyTop 'name.firstName':false
 * </pre>
 * Will sort as [{}, { name: { firstName: 'Adam' } }].
 *
 * ### Null Sort
 * <pre>
 * var nullSort = [
 *     { name: { firstName: 'Adam' } },
 *     { name: { firstName: null }
 * ];
 * nullSort | rxSortEmptyTop 'name.firstName':true
 * </pre>
 * Will sort as [{ name: { firstName: 'Adam' } }, {}]
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxSortUtil
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
});

/**
 * @ngdoc overview
 * @name rxSpinner
 * @description
 * # rxSpinner Component
 *
 * A component adds a spinner icon to any element.
 *
 * ## Directives
 * * {@link rxSpinner.directive:rxSpinner rxSpinner}
 */
angular.module('encore.ui.rxSpinner', []);

angular.module('encore.ui.rxSpinner')
/**
 * @ngdoc directive
 * @name rxSpinner.directive:rxSpinner
 * @restrict A
 * @scope
 * @description
 * Renders a spinner animation on the provided element given the 'toggle' attribute is truthy
 *
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

/**
 * @ngdoc overview
 * @name rxStatusColumn
 * @description
 * # rxStatusColumn Component
 *
 * This component provides directives and styles for putting status columns
 * into tables.
 *
 * ## Directives
 * * {@link rxStatusColumn.directive:rxStatusColumn rxStatusColumn}
 * * {@link rxStatusColumn.directive:rxStatusHeader rxStatusHeader}
 */
angular.module('encore.ui.rxStatusColumn', [
    'encore.ui.utilities'
]);

angular.module('encore.ui.rxStatusColumn')
/**
 * @ngdoc directive
 * @name rxStatusColumn.directive:rxStatusColumn
 * @restrict A
 * @scope
 * @description
 *
 * A directive for drawing colored status columns in a table. This
 * takes the place of the <td></td> for the column it's in.
 *
 * For the corresponding `<td>`, you will need to add the `rx-status-column`
 * attribute, and set the `status` attribute appropriately. You can optionally
 * set `api` and `tooltip-content` attributes. `tooltip-content` sets the
 * tooltip that will be used. If not set, it will default to the value you
 * passed in for `status`. The `api` attribute will be explained below.
 *
 * We currently support six statuses, with corresponding CSS styles. Namely,
 * `"ACTIVE"`, `"DISABLED"`, `"WARNING"`, `"ERROR"`, `"INFO"` and `"PENDING"`.
 * If your code happens to already use those statuses, then you can simply pass
 * them to the `status` attribute as appropriate. However, it's likely that
 * internally you will be receiving a number of different statuses from your
 * APIs, and will need to map them to these six statuses.
 *
 * The example in the {@link /encore-ui/#/components/rxStatusColumn demo} shows a typical
 * use of this directive, such as:
 *
 * <pre>
 * <tbody>
 *     <tr ng-repeat="server in servers">
 *         <!-- Both `api` and `tooltip-content` are optional -->
 *         <td rx-status-column
 *             status="{{ server.status }}"
 *             api="{{ server.api }}"
 *             tooltip-content="{{ server.status }}"></td>
 *         <td>{{ server.title }}</td>
 *         <td>{{ server.value }}</td>
 *    </tr>
 * </tbody>
 * </pre>
 *
 * # A note about color usage for rxStatusColumn
 *
 * Encore uses the color red for destructive and "delete" actions, and the
 * color green for additive or "create" actions, and at first it may seem that
 * the styles of rxStatusColumn do not follow that same logic. However, the
 * distinction here is that when an action or status on an item is
 * "in progress" or "pending" (i.e. the user cannot take any additional action
 * on that item until a transition completes), it is given the yellow animated
 * `PENDING` treatment. This is true even for "create"/"add" actions or
 * "delete" actions. A general rule of thumb to follow is that if a status
 * ends in -`ING`, it should get the animated yellow stripes of `PENDING`.
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
}]);

angular.module('encore.ui.rxStatusColumn')
/**
 * @ngdoc directive
 * @name rxStatusColumn.directive:rxStatusHeader
 * @description
 *
 * Place this attribute directive on the `<th>` for the status columns. It
 * ensures correct styling.
 *
 * For the `<th>` component representing the status column, add the
 * `rx-status-header` attribute, i.e.
 *
 * <pre>
 * <th rx-status-header></th>
 * </pre>
 * Note that status columns are sortable with
 * {@link /encore-ui/#/components/rxSortableColumn rxSortableColumn}, just like any
 * other column. The demo below shows an example of this.
 *
 * One few things to note about the
 * {@link /encore-ui/#/components/rxStatusColumn demo}: The `<th>` is defined as:
 *
 * <pre>
 * <th rx-status-header>
 *     <rx-sortable-column
 *         sort-method="sortcol(property)"
 *         sort-property="status"
 *         predicate="sort.predicate"
 *         reverse="sort.reverse">
 *     </rx-sortable-column>
 * </th>
 * </pre>
 *
 * Note that `sort-property="status"` is referring to the `server.status`
 * property on each row. Thus the sorting is done in this example by the status
 * text coming from the API.
 */
.directive('rxStatusHeader', function () {
    return {
        link: function (scope, element) {
            element.addClass('rx-status-header');
        }
    };
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc object
 * @name utilities.object:rxStatusColumnIcons
 * @description
 *
 * Mapping of internal statuses to FontAwesome icons.
 * The keys map to the names defined in rxStatusColumn.less
 */
.value('rxStatusColumnIcons', {
    'ERROR': 'fa-ban',
    'WARNING': 'fa-exclamation-triangle',
    'INFO': 'fa-info-circle',
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxStatusMappings
 * @description
 *
 * A set of methods for creating mappings between a product's notion
 * of statuses, and the status identifiers used in EncoreUI
 *
 * To accommodate different statuses, the `rxStatusMappings` factory includes
 * methods for defining mappings from your own statuses to the six defined ones.
 * The basic methods for this are `rxStatusMappings.addGlobal()` and
 * `rxStatusMappings.addAPI()`.
 *
 * ## mapToActive()/mapToWarning()/mapToError()/mapToInfo()/mapToPending()
 *
 * While `.addGlobal()` and `.addAPI()` would be sufficient on their own,
 * they can be slightly cumbersome. If you have a list of statuses that all
 * need to get mapped to the same EncoreUI status, the mapping object will
 * be forced to have repetition, leaving room for errors. For example,
 * something like this:
 *
 * <pre>
 * rxStatusMappings.addGlobal({
 *     'BLOCKED': 'ERROR',
 *     'SHUTDOWN': 'ERROR',
 *     'FAILED': 'ERROR'
 * });
 * </pre>
 *
 * There is required repetition of `"ERROR"` in each pair, and there's always
 * the chance of misspelling `"ERROR"`. Instead, we provide a utility method
 * `mapToError` to help with this:
 *
 * <pre>
 * rxStatusMappings.mapToError(['BLOCKED', 'SHUTDOWN', 'FAILED']);
 * </pre>
 *
 * This has the advantage that it's shorter to type, eliminates the chance of
 * mistyping or misassigning `"ERROR"`, and keeps all `"ERROR"` mappings
 * physically grouped. With this, you could easily keep your mapping values
 * in an Angular `.value` or `.constant`, and just pass them to these methods
 * in your `.run()` method.
 *
 * There are equivalent `mapToWarning`, `mapToActive`, `mapToDisabled`,
 * `mapToPending` and `mapToInfo` methods.
 *
 * All six of these methods can take an array or a single string as the first
 * argument. The call above is equivalent to this group of individual calls:
 *
 * <pre>
 * rxStatusMappings.mapToError('BLOCKED');
 * rxStatusMappings.mapToError('SHUTDOWN');
 * rxStatusMappings.mapToError('FAILED');
 * </pre>
 *
 * All six can also take `api` as a second, optional parameter. Thus we could
 * define the `rxStatusMappings.addAPI({ 'FOO': 'ERROR' }, 'z')` example from
 * above as:
 *
 * <pre>
 * rxStatusMappings.mapToError('FOO', 'z');
 * </pre>
 *
 */
.factory('rxStatusMappings', function () {
    var globalMappings = {};
    var apiMappings = {};
    var rxStatusMappings = {};

    var upperCaseCallback = function (objectValue, sourceValue) {
        return sourceValue.toUpperCase();
    };
    /**
     * @ngdoc function
     * @name rxStatusMappings.addGlobal
     * @methodOf utilities.service:rxStatusMappings
     * @description
     *
     * Takes a full set of mappings to be used globally
     *
     * `rxStatusMappings.addGlobal()` takes an object as an argument, with the
     * keys being your own product's statuses, and the values being one of the six
     * internal statuses that it should map to. For example:
     *
     * <pre>
     * rxStatusMappings.addGlobal({
     *     'RUNNING': 'ACTIVE',
     *     'STANDBY': 'INFO',
     *     'SUSPENDED': 'WARNING',
     *     'FAILURE': 'ERROR'
     * });
     * </pre>
     *
     * These mappings will be used throughout all instances of `rx-status-column`
     * in your code.
     *
     * @param {String} mapping This is mapping with keys and values
     */
    rxStatusMappings.addGlobal = function (mapping) {
        _.assign(globalMappings, mapping, upperCaseCallback);
    };

    /**
     * @ngdoc function
     * @name rxStatusMappings.addAPI
     * @methodOf utilities.service:rxStatusMappings
     * @description
     *
     * Create a mapping specific to a particular API. This will
     * only be used when the directive receives the `api="..."`
     * attribute
     *
     * Say that you are using three APIs in your product, `X`, `Y` and `Z`. Both
     * `X` and `Y` define a status `"FOO"`, which you want to map to EncoreUI's
     * `"WARNING"`. You can declare this  mapping with
     * `rxStatusMappings.addGlobal({ 'FOO': 'WARNING' })`. But your API `Z` also
     * returns a `"FOO"` status, which you need mapped to EncoreUI's
     * `"ERROR"` status.
     *
     * You _could_ do a transformation in your product to convert the `"FOO"`
     * from `Z` into something else, or you can make use of
     * `rxStatusMappings.addAPI()`, as follows:
     *
     * <pre>
     * rxStatusMappings.addAPI('z', { 'FOO': 'ERROR' });
     * </pre>
     *
     * Then in your template code, you would use `rx-status-column` as:
     *
     * <pre>
     * <td rx-status-column status="{{ status }}" api="z"></td>
     * </pre>
     *
     * This will tell EncoreUI that it should first check if the passed in
     * `status` was defined separately for an api `"z"`, and if so, to use that
     * mapping. If `status` can't be found in the mappings defined for `"z"`,
     * then it will fall back to the mappings you defined in your `.addGlobal()`
     * call.
     *
     * @param {String} apiName This is api name of the mapping
     * @param {String} mapping This is mapping with keys and values
     */
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

    /**
     * @ngdoc function
     * @name rxStatusMappings.getInternalMapping
     * @methodOf utilities.service:rxStatusMappings
     * @description
     *
     * `rxStatusMappings` defines a `getInternalMapping(statusString, api)` method,
     * which the framework uses to map a provided `status` string based on the
     * mapping rules from all the methods above. It's intended for internal use,
     * but there's nothing stopping you from using it if you find a need.
     *
     * If you ask it to map a string that is not registered for a mapping, it will
     * return back that same string.
     *
     * @param {String} statusString This is status string based on mapping rules
     * @param {String} api This is an api based on mapping rules
     */
    rxStatusMappings.getInternalMapping = function (statusString, api) {
        if (_.has(apiMappings, api) && _.has(apiMappings[api], statusString)) {
            return apiMappings[api][statusString];
        }

        var mapped = globalMappings[statusString];

        return mapped ? mapped : statusString;
    };

    return rxStatusMappings;
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxStatusTags
 * @description
 * This provider is primarily used for applications to specify custom status
 * tags, for use with the `status` attributes of `rx-page` and of breadcrumb
 * objects.
 *
 * It also contains `getTag` and `hasTag` run time (vs. config time) methods, but
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
});

/**
 * @ngdoc overview
 * @name rxTags
 * @description
 * # rxTags component
 *
 * A component used to apply predetermined descriptions to an entity.
 *
 * ## Directives
 * * {@link rxTags.directive:rxTags rxTags}
 *
 */
angular.module('encore.ui.rxTags', [
    'encore.ui.utilities',
    'encore.ui.rxMisc',
    'ui.bootstrap'
]);

angular.module('encore.ui.rxTags')
/**
 * @ngdoc directive
 * @name rxTags.directive:rxTags
 * @description
 *
 * Like native form components, this directive uses `ng-model` to store
 * its value. The only other required attribute is `options` which accepts an
 * array of available tags that can be applied.  The tags are objects, each
 * with required `text` and `category` properties.  Any additional properties
 * will be ignored.
 * <pre>
 * $scope.colorOptions = [
 *   {
 *     "text": "blue",
 *     "category": "color"
 *   }
 *   // ...
 *  ]
 * </pre>
 *
 * By default, the model value is a subset of the options, meaning an new array
 * containing some of the same objects.  However, the `key` attribute can be
 * used to customize the model binding by selecting a single value to represent
 * the object, e.g.
 * <pre>
 * <rx-tags options="colorOptions" ng-model="colors" key="id"></rx-tags>
 * </pre>
 *
 * <pre>
 * $scope.colorOptions = [
 *  {
 *   "id": "tag0",
 *   "text": "blue",
 *   "category": "color"
 *  }
 * ]
 *
 * // $scope.colors === ["tag0"] when selected
 * </pre>
 *
 * This component can be disabled via the `disabled` attribute or `ng-disabled`
 * directive.
 * @param {Array} options - The list of available tags.
 * @param {String=} [key=undefined] - Determines a value of the tag object to
 * use when binding an option to the model.
 * If not provided, the tag object is used.
 */
.directive('rxTags', ["rxDOMHelper", function (rxDOMHelper) {
    return {
        templateUrl: 'templates/rxTags.html',
        restrict: 'E',
        require: 'ngModel',
        scope: {
            options: '=',
        },
        link: function (scope, element, attrs, ngModelCtrl) {
            var container = rxDOMHelper.find(element, '.rx-tags')[0];
            var input = element.find('input')[0];

            function changeFocus (event) {
                (event.target.previousElementSibling || input).focus();
            }

            attrs.$observe('disabled', function (disabled) {
                scope.disabled = (disabled === '') || disabled;
            });

            scope.focusInput = function (event) {
                if (event.target === container) {
                    input.focus();
                }
            };

            scope.removeIfBackspace = function (event, tag) {
                if (event.keyCode === 8) {
                    event.preventDefault();
                    scope.remove(tag);
                    changeFocus(event);
                }
            };

            scope.focusTag = function (event, value) {
                if (event.keyCode === 8 && _.isEmpty(value)) {
                    changeFocus(event);
                }
            };

            scope.add = function (tag) {
                scope.tags.push(tag);
                ngModelCtrl.$setViewValue(scope.tags);
                scope.newTag = '';
            };

            scope.remove = function (tag) {
                _.remove(scope.tags, tag);
                ngModelCtrl.$setViewValue(scope.tags);
                input.focus();
            };

            if (!_.isEmpty(attrs.key)) {
                ngModelCtrl.$parsers.push(function ($viewValue) {
                    return _.pluck($viewValue, attrs.key);
                });

                ngModelCtrl.$formatters.push(function ($modelValue) {
                    return scope.options.filter(function (option) {
                        return _.contains($modelValue, option[attrs.key]);
                    });
                });
            }

            ngModelCtrl.$render = function () {
                scope.tags = ngModelCtrl.$viewValue || [];
            };
        }
    };
}]);

angular.module('encore.ui.molecules')
/**
 * @name molecules.directive:rxTimePicker
 * @ngdoc directive
 * @restrict E
 * @scope
 * @requires utilities.service:rxTimePickerUtil
 * @requires utilities.constant:UtcOffsets
 * @requires elements.directive:rxButton
 * @description Time Picker
 *
 * ## Notice
 * This molecule is designed to be used in conjunction with other picker
 * molecules to compose a valid ISO 8601 DateTime string in the format of
 * <code>YYYY-MM-DDTHH:mmZ</code>.
 *
 * * This molecule will generate a **String** in the format of `HH:mmZ`
 *   to be used as the time portion of the ISO 8601 standard DateTime string
 *   mentioned above.
 * * This molecule will never generate anything other than a String.
 *
 * @param {expression} ngModel
 * Expression that evaluates to a time string in `HH:mmZ` format, where `Z`
 * should match `/[-+]\d{2}:\d{2}/`.
 *
 * @return {String} **IMPORTANT** returns an ISO 8601 standard time string in the
 * format of `HH:mmZ`.
 */
.directive('rxTimePicker', ["rxTimePickerUtil", "UtcOffsets", function (rxTimePickerUtil, UtcOffsets) {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            modelValue: '=ngModel',
            isDisabled: '=ngDisabled'
        },
        templateUrl: 'templates/rxTimePicker.html',
        link: function (scope, el, attrs, ngModelCtrl) {
            var pickerUtil = rxTimePickerUtil;

            scope.availableUtcOffsets = UtcOffsets;

            scope.isPickerVisible = false;

            scope.openPopup = function () {
                scope.isPickerVisible = true;

                // default
                scope.hour = '';
                scope.minutes = '';
                scope.period = 'AM';
                scope.offset = '+00:00';

                if (!_.isEmpty(scope.modelValue)) {
                    var parsed = pickerUtil.modelToObject(scope.modelValue);
                    scope.hour = parsed.hour;
                    scope.minutes = parsed.minutes;
                    scope.period = parsed.period;
                    scope.offset = parsed.offset;
                }
            };//openPopup

            scope.closePopup = function () {
                scope.isPickerVisible = false;
            };

            /**
             * Toggle the popup and initialize form values.
             */
            scope.togglePopup = function () {
                if (!scope.isDisabled) {
                    if (scope.isPickerVisible) {
                        scope.closePopup();
                    } else {
                        scope.openPopup();
                    }
                }
            };//togglePopup()

            /**
             * Apply the popup selections to the $viewValue.
             */
            scope.submitPopup = function () {
                var time = moment([
                    (scope.hour + ':' + scope.minutes),
                    scope.period,
                    scope.offset
                ].join(' '), 'hh:mm A Z');

                // ensure moment is in expected timezone
                time.utcOffset(scope.offset);

                ngModelCtrl.$setViewValue(time.format(pickerUtil.viewFormat));

                // update the view
                ngModelCtrl.$render();

                scope.closePopup();
            };//submitPopup()

            /* Model -> View */
            ngModelCtrl.$formatters.push(function (modelVal) {
                var momentValue = moment(modelVal, pickerUtil.modelFormat);

                if (momentValue.isValid()) {
                    var offset = pickerUtil.parseUtcOffset(modelVal);

                    // change offset of moment to that of model value
                    // without this, moment will default to local offset
                    // (CST = -06:00) and the formatted output will be incorrect
                    momentValue.utcOffset(offset);

                    // Ensure that display value is in proper format
                    return momentValue.format(pickerUtil.viewFormat);
                } else {
                    return modelVal;
                }
            });

            /* View -> Model */
            ngModelCtrl.$parsers.push(function (viewVal) {
                var momentValue = moment(viewVal, pickerUtil.viewFormat);

                if (momentValue.isValid()) {
                    var offset = pickerUtil.parseUtcOffset(viewVal);

                    // change offset of moment to that of view value
                    // without this, moment will default to local offset
                    // (CST = -06:00) and the formatted output will be incorrect
                    momentValue.utcOffset(offset);

                    // Ensure that model value is in proper format
                    return momentValue.format(pickerUtil.modelFormat);
                } else {
                    return viewVal;
                }
            });

            ngModelCtrl.$render = function () {
                scope.displayValue = ngModelCtrl.$viewValue || '';
            };
        }//link
    };
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxTimePickerUtil
 *
 * @description
 * Utility service used by {@link molecules.directive:rxTimePicker rxTimePicker}.
 */
.factory('rxTimePickerUtil', function () {
    /**
     * @ngdoc property
     * @propertyOf utilities.service:rxTimePickerUtil
     * @name modelFormat
     * @description formatting mask for Time model/data values
     */
    var modelFormat = 'HH:mmZ';

    /**
     * @ngdoc property
     * @propertyOf utilities.service:rxTimePickerUtil
     * @name viewFormat
     * @description formatting mask for Time view/display values
     */
    var viewFormat = 'HH:mm (UTCZZ)';

    /**
     * @ngdoc method
     * @methodOf utilities.service:rxTimePickerUtil
     * @name parseUtcOffset
     * @param {String} stringValue string containing UTC offset
     * @return {String} UTC Offset value
     *
     * @description parse offset value from given string, if present
     *
     * **NOTE:** Logic in this function must match the logic in
     * the page object.
     */
    function parseUtcOffset (stringValue) {
        var regex = /([-+]\d{2}:?\d{2})/;
        var matched = stringValue.match(regex);
        return (matched ? matched[0] : '');
    }//parseUtcOffset()

    /**
     * @ngdoc method
     * @methodOf utilities.service:rxTimePickerUtil
     * @name modelToObject
     * @param {String} stringValue time in `HH:mmZ` format
     * @return {Object} parsed data object
     *
     * @description
     * Parse the model value to fetch hour, minutes, period, and offset
     * to populate the picker form with appropriate values.
     */
    function modelToObject (stringValue) {
        var momentValue = moment(stringValue, modelFormat);
        var offset = parseUtcOffset(stringValue);
        var parsed = {
            hour: '',
            minutes: '',
            period: 'AM',
            offset: (_.isEmpty(offset) ? '+0000' : offset)
        };

        if (!_.isEmpty(offset)) {
            momentValue.utcOffset(offset);
        }

        if (momentValue.isValid()) {
            parsed.hour = momentValue.format('h');
            parsed.minutes = momentValue.format('mm');
            parsed.period = momentValue.format('A');
        }

        return parsed;
    }//modelToObject()

    return {
        parseUtcOffset: parseUtcOffset,
        modelToObject: modelToObject,
        modelFormat: modelFormat,
        viewFormat: viewFormat,
    };
});//rxTimePickerUtil

/**
 * @ngdoc overview
 * @name rxToggle
 * @description
 * # rxToggle Component
 *
 * This component provides an attribute directive to handle toggling a boolean
 * scope property for show/hide purposes (normally used in conjunction with
 * ng-show to toggle hidden content).
 *
 * ## Directives
 * * {@link rxToggle.directive:rxToggle rxToggle}
 */
angular.module('encore.ui.rxToggle', []);

angular.module('encore.ui.rxToggle', [])
/**
 * @ngdoc directive
 * @name rxToggle.directive:rxToggle
 * @restrict A
 * @description
 *
 * Adds a 'click' listener to an element that, when fired, toggles the boolean
 * scope property defined
 *
 * @param {String} rxToggle Boolean property to toggle true/false state
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

/**
 * @ngdoc overview
 * @name rxToggleSwitch
 * @description
 * # rxToggleSwitch Component
 *
 * A component that creates a boolean toggle switch
 *
 * ## Directives
 * {@link rxToggleSwitch.directive:rxToggleSwitch rxToggleSwitch}
 */
angular.module('encore.ui.rxToggleSwitch', []);

angular.module('encore.ui.rxToggleSwitch')
/**
 * @ngdoc directive
 * @name rxToggleSwitch.directive:rxToggleSwitch
 * @restrict E
 * @description
 *
 * Displays an on/off switch toggle
 *
 * The switch shows the states of 'ON' and 'OFF', which evaluate to `true` and
 * `false`, respectively.  The model values are configurable with the
 * `true-value` and `false-value` attributes.
 *
 * ** Note: If the value of the model is not defined at the time of
 * initialization, it will be automatically set to the false value. **
 *
 * The expression passed to the `post-hook` attribute will be evaluated every
 * time the switch is toggled (after the model property is written on the
 * scope).  It takes one argument, `value`, which is the new value of the model.
 * This can be used instead of a `$scope.$watch` on the `ng-model` property.
 * As shown in the {@link /encore-ui/#/components/rxToggleSwitch demo}, the `disabled`
 * attribute can be used to prevent further toggles if the `post-hook` performs
 * an asynchronous operation.
 *
 * @param {String} [ng-model] The scope property to bind to
 * @param {Boolean} [disabled] Indicates if the input is disabled
 * @param {Function} [postHook] A function to run when the switch is toggled
 * @param {Expression} [trueValue=true] The value of the scope property when the switch is on
 * @param {Expression} [falseValue=false] The value of the scope property when the switch is off
 *
 * @example
 * <pre>
 * <rx-toggle-switch ng-model="foo"></rx-toggle-switch>
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:rxUnsafeRemoveHTML
 * @description
 * Given a string, it removes all HTML tags from the string, using the
 * browser's own parsing engine. Any content inside of tags will be kept.
 *
 * **NOTE:** You must only use this with **trusted text**. See this
 * {@link http://stackoverflow.com/a/5002618 StackOverflow} answer for more details.
 *
 * @param {String} htmlString The string to remove HTML from **trusted text**
 * @returns {String} Cleaned string
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxVisibility
 * @description
 * Provides an interface for adding new `visibility` methods for nav menus.  Methods added via `addMethod` should
 * have a `function (scope, args)` interface.
 *
 * When you do:
 * <pre>
 * visibility: [ "someMethodName", { foo: 1, bar: 2} ]
 * </pre>
 * in a nav menu definition, the (optional) object will be passed to your method as the
 * second argument `args`, i.e.:
 * <pre>
 * function (scope, args) {}
 * </pre>
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
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:rxVisibilityPathParams
 * @description
 * Returns an object with `name` and `method` params that can
 * be passed to
 * [rxVisibility.addMethod()](https://github.com/rackerlabs/encore-ui/blob/master/src/utilities/rxVisibility
 * /scripts/rxVisibility.js#L22).
 * We register this by default, as it's used by the nav menu we keep in
 * {@link utilities.service:routesCdnPath routesCdnPath}.
 *
 * The method is used to check if `{param: 'someParamName'}` is present in the current route.
 * Use it as:
 * <pre>
 * visibility: [ 'rxPathParams', { param: 'userName' } ]
 * </pre>
 */
.factory('rxVisibilityPathParams', ["$routeParams", function ($routeParams) {
    var pathParams = {
        name: 'rxPathParams',
        method: function (scope, args) {
            return !_.isUndefined($routeParams[args.param]);
        }
    };

    return pathParams;
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:SelectFilter
 * @description
 * A prototype for creating objects that can be used for filtering arrays.
 *
 * ## SelectFilter
 * This service exposes an object with single method, `create()`, used to
 * create instances of a `SelectFilter`. It is configurable via three options:
 * - `properties`: A list of the properties to create a filter control.
 * Assuming the source data is an array of objects, a property is equivalent to
 * an object's key.
 *
 * - `available` (optional): An object that tracks which options are available
 * for a property.
 * Note that the key of the object matches a value in the `properties` array.
 * - `selected` (optional): An object that tracks which options are selected
 * for a property. It has the same form as the `available` object, but the
 * arrays indicate which options are selected, and as such are strict subsets
 * of their `available` counterparts.
 *
 * ### Option Defaults
 * Every property that is listed in `properties` but not provided as a key
 * to `available` will be automatically populated the first time `applyTo()`
 * (see below) is called.
 * <pre>
 * var filter = SelectFilter.create({
 *   properties: ['year']
 * });
 *
 * filter.applyTo([{
 *   eventId: 1,
 *   year: 2013
 * }, {
 *   eventId: 2,
 *   year: 2014
 * }, {
 *   eventId: 3,
 *   year: 2013
 * }]);
 * // filter.available is { year: [2013, 2014] }
 * </pre>
 * **Note:** There is an implied requirement that, when relying on the
 * auto-populated filter, the input array will have at least one item for every
 * available option. For example, this may not be the case when used with
 * server-side pagination.
 *
 * Every property that is listed in `properties` but not provided as a key to
 * `selected` is initialized to have all options selected (by looking them up
 * in `available`).  If property is also not provided to `available`, its
 * initialization is delayed until the first call of `applyTo()`.
 *
 * <pre>
 * var filter = SelectFilter.create({
 *   properties: ['year'],
 *   available: {
 *       year: [2013, 2014, 2015]
 *   }
 * });
 * // filter.selected is { year: [2013, 2014, 2015] }
 * </pre>
 *
 * ### Instances
 * Instances of `SelectFilter` have an `applyTo()` method, which applies the
 * filter's internal state of selected options to the array. This will not
 * often be called directly, but instead used by the
 * {@link utilities.filter:Apply Apply} filter. As stated previously,
 * the first call of `applyTo()` will initialize any
 * `properties` that have not been defined in `available` or `selected`.
 * <pre>
 * var filter = SelectFilter.create({
 *   properties: ['year'],
 *   selected: {
 *      year: [2014]
 *     }
 * });
 *
 * var filteredArray = filter.applyTo([{
 *   eventId: 1,
 *   year: 2013
 * }, {
 *   eventId: 2,
 *   year: 2014
 * }, {
 *   eventId: 3,
 *   year: 2013
 * }]);
 * // filteredArray is [{ eventId: 2, year: 2014 }]
 * </pre>
 *
 * The instance will also have all of the constructor options as public
 * properties, so that they can be watched or changed.
 *
 */
.service('SelectFilter', function () {
    return {
       /**
        * @ngdoc method
        * @name create
        * @methodOf utilities.service:SelectFilter
        * @param {Object} options
        * Options object
        * @param {Object} options.properties
        * A list of the properties to create a filter control. Assuming the
        * source data is an array of objects, a property is equivalent to an
        * object's key.
        * <pre>
        * SelectFilter.create({
        *      properties: ['year']
        * });
        * </pre>
        * @param {Object=} options.available
        * An object that tracks which options are available for a property.
        * <pre>
        * SelectFilter.create({
        *     // other options...
        *     available: {
        *        year: [2013, 2014, 2015],
        *       }
        * });
        * </pre>
        * @param {Object=} options.selected
        * An object that tracks which options are selected for a property.
        * It has the same form as the `available` object, but the arrays indicate
        * which options are selected, and as such are strict subsets of their
        * `available` counterparts.
        * <pre>
        * SelectFilter.create({
        *     // other options...
        *     selected: {
        *         year: [2014],
        *       }
        * });
        * </pre>
        */
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
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:Session
 * @description
 *
 * Service for managing user session in encore-ui.
 *
 * @requires utilities.service:rxLocalStorage
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
.factory('Session', ["rxLocalStorage", function (rxLocalStorage) {
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
        return rxLocalStorage.getObject(TOKEN_ID);
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
        rxLocalStorage.setObject(TOKEN_ID, token);
    };

    session.logout = function () {
        rxLocalStorage.removeItem(TOKEN_ID);
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:SessionStorage
 * @description
 *
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:Status
 * @description
 *
 * Manages notifications for rxNotify with an abstracted set of functions for
 * ease of use.
 *
 * This service is provided as a compliment to {@link rxNotify}.  It abstracts out
 * some of the raw functionality provided by `rxNotify` to make the addition and
 * removal of single messages easier.
 *
 * ## Preparation
 *
 * In order to use the `Status` service, one has to instantiate it with a proper
 * `$scope` object to keep track of a running state. `rxNotify` indirectly makes
 * use of the `$scope` variable when a message can be auto-dismissed.  In order
 * to keep the interface for the wrapper functions coherent, the `$scope` variable
 * must be provided before use.  This can be accomplished as follows:
 *
 * <pre>
 * Status.setupScope($scope);
 * </pre>
 *
 * ## Success cases
 *
 * The `Status` service is provided as a wrapper to `rxNotify`.  As such, the
 * status types supported by `rxNotify` are still used and have been wrapped into
 * utility functions.  For example, on page load it is usually necessary to inform
 * the user of pending data retrieval.  This can be accomplished by:
 *
 * <pre>
 * Status.setLoading('Retrieving users');
 * </pre>
 *
 * This will call `rxNotify` in the following manner:
 *
 * <pre>
 * rxNotify.add('Retrieving users', {
 *     stack: 'page',
 *     dismiss: [scope, 'loaded'],
 *     loading: true
 * });
 * </pre>
 *
 * Similarly, the following call using the `Status` service:
 *
 * <pre>
 * Status.setSuccess('Successfully deleted questionable ' +
 *     'browsing history');
 * </pre>
 *
 * results in a call to `rxNotify` as such:
 *
 * <pre>
 * rxNotify.add('Successfully deleted questionable ' +
 *     'browsing history',
 *     {
 *         stack: 'page',
 *         show: 'next'
 *      }
 * );
 * </pre>
 *
 * Note: For `success` and `error` messages, the `repeat` attribute is set to
 * false. Messages of `success` will also automatically timeout after 5 seconds.
 * Both of these defaults were design decisions made at this level for usability
 * and consistency across all Encore products.
 *
 * Each of the wrapper functions to the different `rxNotify` message types support
 * receiving an `options:{}` parameter that can override defaults for the respective
 * wrapper. For example, instead of showing a success message on next route change,
 * it can be shown immediately:
 *
 * <pre>
 * Status.setSuccess('Please show immediately', {
 *     show: 'immediate'
 * });
 * </pre>
 *
 * Please note that the `options` are of the same type as one would provide to
 * `rxNotify`.  This should allow for maximum flexibility when necessary.
 * However, as a bonus, some common behaviours expected to be overriden have
 * been provided as their own wrapper functions.  For example:
 *
 * <pre>
 * Status.setSuccessImmediate('Please show immediately')
 * </pre>
 *
 * is the equivalent of calling `Status.setSuccess()` with the
 * `{ show: 'immediate' }` parameter.  Please note, there isn't much fault
 * checking in place, so the following behaviour although permitted, is not
 * advised:
 *
 * <pre>
 * Status.setSuccessImmediate('Please show immediately', {
 *     show: 'next'
 * });
 * </pre>
 *
 * ## Error cases
 *
 * The `{ type: 'error' }` wrapper is a unique one.  It allows for a string to be
 * passed as an error message, just like the wrappers before.  For example:
 *
 * <pre>
 * Status.setError('This is an error!');
 * </pre>
 *
 * It also allows for a specialized template to be specified as the error string
 * with an `object:{}` as the second parameter containing the replacements for
 * the template in the error string.  If in a proper format, the object can be
 * automatically parsed using an `ErrorFormatter` and displayed to the user.
 * For example:
 *
 * <pre>
 * Status.setError(
 *     'Failed loading browsing history: ${message}',
 *     {
 *         message: 'User has previously cleared their history!'
 *     }
 * );
 * </pre>
 *
 * Please note that the replacement variable `${message}` in the error string
 * maps one-to-one to the keys provided in the the error object.  One can specify
 * any number of template variables to replace.  Not providing a balanced list
 * of variables and their replacements will result in a
 * `ReferenceError: <replacement> is not defined`.
 *
 * The following wrapper functions are available today.  Their names should be
 * self explanatory:
 *
 * * setLoading
 * * setSuccess
 * * setSuccessNext
 * * setSuccessImmediate
 * * setWarning
 * * setInfo
 * * setError
 * * complete &rarr; setSuccessImmediate
 *
 * The following are used to programmatically remove notifications from the
 * screen:
 *
 * * dismiss
 * * clear
 *
 * # Utilities
 *
 * The `Status` service requires that one provide a `$scope` object to keep
 * tracking of state before any of the wrapper functions can be utilized. Since
 * it is expected that almost all pages will make use of notifications, one can
 * place the repeated setup of the `Status` service in a page load event handler.
 * This will allow all pages to gain an already setup `Status` service for
 * immediate use.  For example:
 *
 * <pre>
 * .run(function ($rootScope, StatusUtil) {
 *     $rootScope.$on('$routeChangeSuccess', function () {
 *         Status.setupScope($rootScope);
 *     });
 * });
 * </pre>
 *
 * Although hidden away in the app's bootstrap code, the above makes for a less
 * repetitive call to `Status.setScope()` at the beginning of each use.
 *
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:StatusUtil
 * @description
 * Manipulates required references to $scope input for proper notification functionality.
 *
 * @example
 * <pre>
 * $rootScope.$on('$routeChangeSuccess', function () {
 *     Status.setScope(); // no input results in $rootScope being used
 *     Status.setScope($rootScope); // forcibly set $rootScope as the scope to be used
 * });
 * </pre>
 */
.service('StatusUtil', ["$route", "$rootScope", "Status", function ($route, $rootScope, Status) {
    return {
        setupScope: function (scope) {
            Status.setScope(scope || $rootScope);
        }
    };
}]);

/**
 * @ngdoc overview
 * @name tabs
 * @description
 * # tabs Component
 *
 * This component provides styles and a demo for the [the Angular-UI Bootstrap
 * Tabs plugin](https://github.com/angular-ui/bootstrap/tree/master/src/tabs),
 * which is included as a dependency for EncoreUI.
 *
 * ## Usage
 *
 * Usage is the exact same as demoed on the Angular-UI Bootstrap site. See
 * [the Angular-UI Bootstrap Docs](http://angular-ui.github.io/bootstrap/) for
 * further guidance on usage and configuration of this component.
 *
 * ## Disclaimer
 *
 * Only the default horizontal tabs are supported by these styles. `Vertical`,
 * `Pills` and `Justified` tabs are currently unsupported.
 *
 */
angular.module('encore.ui.tabs', []);

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:titleize
 * @description
 * Convert a string to title case, stripping out underscores and capitalizing words.
 *
 * Credit where it's due: https://github.com/epeli/underscore.string/blob/master/titleize.js
 *
 * @param {String} inputString - The string to convert
 * @returns {String} The titleized version of the string
 *
 * @example
 * Both examples result in a string of `"A Simple String"`.
 * <pre>
 * {{ 'a simple_STRING' | titleize }}
 * </pre>
 *
 * <pre>
 * $filter('titleize')('a simple_STRING');
 * </pre>
 */
.filter('titleize', function () {
    return function (inputString) {
        return inputString
            .toLowerCase()
            .replace(/_/g, ' ')
            .replace(/(?:^|\s)\S/g, function (character) {
                return character.toUpperCase();
            });
    };
});

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:TokenInterceptor
 * @description
 * Simple $http injector which will intercept http request and inject the
 * Rackspace Identity's token into every http request.
 *
 * @requires rxSession.service:Session
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

    this.$get = ["Session", "$document", function (Session, $document) {
        var url = $document[0].createElement('a');
        return {
            request: function (config) {
                // Don't add the X-Auth-Token if the request URL matches
                // something in exclusionList
                // We're specifically looking at hostnames, so we have to
                // do the `createElement('a')` trick to turn the config.url
                // into something with a `.hostname`
                url.href = config.url;
                var exclude = _.some(exclusionList, function (item) {
                    if (_.contains(url.hostname, item)) {
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

/**
 * @ngdoc overview
 * @name tooltips
 * @description
 * # tooltips Component
 *
 * The tooltip component provides styles to raw HTML
 * elements and custom directive templates.
 *
 * ## Usage
 *
 * Usage is the exact same as shown in the
 * [Angular-UI Bootstrap Documentation](https://angular-ui.github.io/bootstrap/#/tooltip).
 * See for further guidance on usage and configuration of this component.
 *
 * **NOTE:**  The `tooltip` directive and its optional attributes can **_only_** be
 * applied to raw HTML elements. They can't be applied to directives like this:
 * <pre>
 * // DOES NOT WORK
 *
 * <rx-button tooltip="...">
 * </pre>
 *
 * If you're creating your own custom directive, it's fine to use the `tooltip` 
 * directive inside of your directive's template.  See the tooltips component
 * {@link /encore-ui/#/components/tooltips demo} for example usage.
 *
 * The [Angular-UI Bootstrap Tooltip](https://github.com/angular-ui/bootstrap/tree/master/src/tooltip)
 * plugin is included as a dependency for EncoreUI.
 */
angular.module('encore.ui.tooltips', []);

/**
 * @ngdoc overview
 * @name typeahead
 * @description
 * # typeahead Component
 *
 * This component provides styles and a demo for the
 * [the Angular-UI Bootstrap Typeahead plugin](https://goo.gl/EMGTTq),
 * which is included as a dependency for EncoreUI.
 *
 * ## Usage
 *
 * Usage is the exact same as demoed on the Angular-UI Bootstrap site. See
 * [the Angular-UI Bootstrap Docs](http://angular-ui.github.io/bootstrap/#/typeahead)
 * for further guidance on usage and configuration of this component.
 *
 * A feature has been added that shows the list of options when the input
 * receives focus.  This list is still filtered according to the input's value,
 * except when the input is empty.  In that case, all the options are shown.
 * To use this feature, add the `allowEmpty` parameter to the `filter` filter
 * in the `typeahead` attribute.  See the {@link /encore-ui/#/components/typeahead demo}
 * for an example.
 *
 */
angular.module('encore.ui.typeahead', [
    'ui.bootstrap'
]);

angular.module('encore.ui.typeahead')
.config(["$provide", function ($provide) {
    $provide.decorator('typeaheadDirective', ["$delegate", "$filter", function ($delegate, $filter) {
        var typeahead = $delegate[0];
        var link = typeahead.link;
        var lowercase = $filter('lowercase');

        typeahead.compile = function () {
            return function (scope, element, attrs, ngModelCtrl) {
                link.apply(this, arguments);

                if (/allowEmpty/.test(attrs.typeahead)) {
                    var EMPTY_KEY = '$EMPTY$';

                    // Wrap the directive's $parser such that the $viewValue
                    // is not empty when the function runs.
                    ngModelCtrl.$parsers.unshift(function ($viewValue) {
                        var value = _.isEmpty($viewValue) ? EMPTY_KEY : $viewValue;
                        // The directive will check this equality before populating the menu.
                        ngModelCtrl.$viewValue = value;
                        return value;
                    });

                    ngModelCtrl.$parsers.push(function ($viewValue) {
                        return $viewValue === EMPTY_KEY ? '' : $viewValue;
                    });

                    element.on('click', function () {
                        scope.$apply(function () {
                            ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                        });
                    });

                    scope.allowEmpty = function (actual, expected) {
                        if (expected === EMPTY_KEY) {
                            return true;
                        }
                        return lowercase(actual).indexOf(lowercase(expected)) !== -1;
                    };
                }
            };
        };

        return $delegate;
    }]);
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:UnauthorizedInterceptor
 * @description
 * Simple injector which will intercept HTTP responses. If a HTTP 401 response error code is returned,
 * the ui redirects to `/login`.
 *
 * @requires $q
 * @requires @window
 * @requires utilities.service:Session
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

angular.module('encore.ui.utilities')
/**
 * @ngdoc service
 * @name utilities.service:urlUtils
 * @description
 *
 * Set of utility functions to break apart/compare URLs.
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
}]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc parameters
 * @name utilities.constant:UtcOffsets
 *
 * @description
 * List of known UTC Offset Values
 * See https://en.wikipedia.org/wiki/List_of_UTC_time_offsets
 */
.constant('UtcOffsets', [
    '-12:00',
    '-11:00',
    '-10:00',
    '-09:30',
    '-09:00',
    '-08:00',
    '-07:00',
    '-06:00',
    '-05:00',
    '-04:30',
    '-04:00',
    '-03:30',
    '-03:00',
    '-02:00',
    '-01:00',
    '+00:00',
    '+01:00',
    '+02:00',
    '+03:00',
    '+03:30',
    '+04:00',
    '+04:30',
    '+05:00',
    '+05:30',
    '+05:45',
    '+06:00',
    '+06:30',
    '+07:00',
    '+08:00',
    '+08:30',
    '+08:45',
    '+09:00',
    '+09:30',
    '+10:00',
    '+10:30',
    '+11:00',
    '+12:00',
    '+12:45',
    '+13:00',
    '+14:00',
]);

angular.module('encore.ui.utilities')
/**
 * @ngdoc filter
 * @name utilities.filter:xor
 * @description
 * Returns the exclusive or of two arrays.
 *
 * @param {Array} array The first input array
 * @param {Array} excluded The second input array
 * @returns {Array} - A new array of the unique elements in each array.
 */
.filter('xor', function () {
    return function () {
        return _.xor.apply(_, arguments);
    };
});
