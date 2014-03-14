/*
 * EncoreUI
 * https://github.com/rackerlabs/encore-ui

 * Version: 0.3.0 - 2014-03-14
 * License: Apache License, Version 2.0
 */
angular.module('encore.ui', ['encore.ui.tpls', 'encore.ui.configs','encore.ui.rxActiveUrl','encore.ui.rxAge','encore.ui.rxBreadcrumbs','encore.ui.rxButton','encore.ui.rxCapitalize','encore.ui.rxDiskSize','encore.ui.rxDropdown','encore.ui.rxForm','encore.ui.rxLogout','encore.ui.rxModalAction','encore.ui.rxNav','encore.ui.rxNotify','encore.ui.rxPageTitle','encore.ui.rxPaginate','encore.ui.rxRelatedMenu','encore.ui.rxProductResources','encore.ui.rxSortableColumn','encore.ui.rxSpinner']);
angular.module('encore.ui.tpls', ['templates/rxActiveUrl.html','templates/rxBreadcrumbs.html','templates/rxButton.html','templates/rxDropdown.html','templates/rxFormInput.html','templates/rxFormItem.html','templates/rxFormOptionTable.html','templates/rxFormRadio.html','templates/rxFormSelect.html','templates/rxModalAction.html','templates/rxModalActionForm.html','templates/rxNav.html','templates/rxNotification.html','templates/rxNotifications.html','templates/rxItemsPerPage.html','templates/rxPaginate.html','templates/rxRelatedMenu.html','templates/rxProductResources.html','templates/rxSortableColumn.html']);
angular.module('encore.ui.configs', [])
.constant('ROUTE_PATHS', {
    'login': '/login'
})
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
            age.push({ value: days, suffix: 'd' });
        }

        if (hours > 0) {
            age.push({ value: hours - (24 * days), suffix: 'h' });
        }

        age.push({ value: mins - (60 * hours), suffix: 'm' });

        return _.map(age.slice(0, maxUnits), function (dateUnit, index, listOfAges) {
            if (index == listOfAges.length - 1) {
                return Math.round(dateUnit.value) + dateUnit.suffix;
            } else {
                return Math.floor(dateUnit.value) + dateUnit.suffix;
            }
        }).join(' ');
    };
});

angular.module('encore.ui.rxBreadcrumbs', [])
.factory('rxBreadcrumbsSvc', function () {
    // default will always be home
    var breadcrumbs = [{
        path: '',
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
angular.module('encore.ui.rxDiskSize', [])
.filter('rxDiskSize', function () {
    return function (size) {
        var units = ['GB', 'TB', 'PB'];
        var unit = Math.floor(Math.log(size) / Math.log(1000));

        return size / Math.pow(1000, Math.floor(unit)).toFixed(1) + ' ' + units[unit];
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
angular.module('encore.ui.rxForm', ['ngSanitize'])
// used to wrap input fields and select boxes in the proper HTML
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
 * @name encore.ui.rxForm:rxFormRadioTable
 * @restrict E
 * @description
 * This directive is used to build a table of radio inputs
 * @scope
 * @param {Array} data - Array of objects used to populate table. Should have properties that match columns
 * key. Example:
 * [
 *     {
 *         'name': 'asv',
 *         'id': 0
 *     }, {
 *         'name': 'asdf',
 *         'id': 1
 *     }, {
 *         'name': 'av',
 *         'id': 2
 *     }
 * ]
 * @param {array} columns - Array of objects with label/key values. Example:
 * ```
 * [{
 *     'label': 'Name',
 *     'key': 'name'
 * }]
 * @param {String=} selected - Key of item that's selected (and therefore will have input disabled)
 * @param {String} type - Type of input to be used
 * @param {Object} model - Value to bind input to using ng-model
 * @param {String} fieldId - Used for label and input 'id' attribute
 */
.directive('rxFormOptionTable', function () {
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
        }
    };
});
angular.module('encore.ui.rxLogout', [])
.directive('rxLogout', function ($rootScope, Auth) {
    return {
        restrict: 'A',
        controller: function ($scope) {
            var success = function () {
                // fire event to notify auth service about logout
                $rootScope.$broadcast('event:auth-loginRequired');
            };

            // TODO: Handle failure
            $scope.logout = function () {
                Auth.logout(success);
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
        }
    };
})
.controller('rxModalCtrl', function ($scope, $modalInstance) {
    // define a controller for the modal to use
    $scope.submit = function () {
        $modalInstance.close($scope);
    };

    $scope.cancel = $modalInstance.dismiss;
})
.directive('rxModalAction', function ($modal) {
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

                // once we're done with the scope, reset the fields
                scope.fields = {};
            };

            scope.showModal = function (evt) {
                evt.preventDefault();

                // TODO don't like having to create a 'fields' property in here,
                // but we need it so that the child input fields can bind to the modalScope
                scope.fields = scope.fields || {};

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
            'placeholderText': '@'
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
                    { title: 'Ticket Queues', path: '/#/ticketqueues/', className: '' }
                ]
            };
        }
    };
});

/*jshint undef:false*/
angular.module('encore.ui.rxNotify', ['ngSanitize'])
/*
 * Displays all messages in a stack
 * @ngdoc directive
 * @example <rx-notifications stack="myStack"></rx-notifications>
 * @scope
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
        link: function ($scope) {
            var stack = $scope.stack || 'page';

            // watch the stack for updates
            $scope.$watch(function () {
                return rxNotify.stacks[stack];
            }, function (data) {
                $scope.messages = data;
            });

            $scope.loading = true;
        }
    };
})
.factory('rxNotify', function ($timeout, $rootScope) {
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
.factory('rxPromiseNotifications', function (rxNotify, $rootScope, $q, $interpolate) {
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

        scope[uid].loadingMsg = rxNotify.add(msgs.loading, loadingOpts);

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
 * @name encore.components.paginate:rxPaginate
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
* @name encore.components.paginate:PageTracking
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
* @name encore.components.paginate:Paginate
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
* @name encore.components.paginate:Page
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
angular.module('encore.ui.rxSortableColumn', [])
/**
* @ngdoc directive
* @name encore.ui.rxSortableColumn
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
            sortMethod: '=',
            sortProperty: '@',
            predicate: '=',
            reverse: '='
        }
    };
})
/**
* @ngdoc service
* @name encore.ui.rxSortUtil
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

angular.module("templates/rxActiveUrl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxActiveUrl.html",
    "<li ng-class=\"{ selected: navActive }\" ng-transclude=\"\"></li>");
}]);

angular.module("templates/rxBreadcrumbs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxBreadcrumbs.html",
    "<ol class=\"rx-breadcrumbs\"><li ng-repeat=\"breadcrumb in breadcrumbs.getAll()\" class=\"breadcrumb\"><ng-switch on=\"$last\"><span ng-switch-when=\"true\" class=\"breadcrumb-name last\" ng-bind=\"breadcrumb.name\"></span> <span ng-switch-default=\"\"><a href=\"/#/{{breadcrumb.path}}\" ng-class=\"{first: $first}\" class=\"breadcrumb-name\" ng-bind=\"breadcrumb.name\"></a></span> {{user}}</ng-switch></li></ol>");
}]);

angular.module("templates/rxButton.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxButton.html",
    "<button type=\"submit\" class=\"button primary rx-button\" ng-disabled=\"toggle\">{{ toggle ? toggleMsg : defaultMsg }}<div class=\"spinner\" ng-show=\"toggle\"><i class=\"pos1\"></i> <i class=\"pos2\"></i> <i class=\"pos3\"></i></div></button>");
}]);

angular.module("templates/rxDropdown.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxDropdown.html",
    "<div class=\"dropdown\"><a href=\"#\" ng-click=\"toggle($event)\" class=\"nav-link\">{{menu.linkText}} <b class=\"caret\"></b></a><ol class=\"nav-dropdown group\" ng-show=\"visible\"><li ng-repeat=\"item in menu.items\" class=\"item {{item.className}}\"><a href=\"{{item.path}}\" class=\"item-target\">{{item.title}}</a><ul class=\"dropdown-menu\" ng-show=\"item.sub\"><li ng-repeat=\"subItem in item.sub\"><a href=\"{{subItem.path}}\">{{subItem.title}}</a></li></ul></li></ol></div>");
}]);

angular.module("templates/rxFormInput.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxFormInput.html",
    "<div class=\"form-item\"><label for=\"{{fieldId}}\" class=\"field-label\">{{label}}:</label><div><input type=\"{{type}}\" ng-required=\"{{required}}\" id=\"{{fieldId}}\" ng-min-length=\"{{minLength}}\" ng-max-length=\"{{maxLength}}\" max=\"{{max}}\" min=\"{{min}}\" name=\"{{name}}\" ng-model=\"model\" value=\"{{value}}\" class=\"field-input\"><span class=\"field-suffix\" ng-if=\"suffix\">{{suffix}}</span></div><label ng-if=\"description\" class=\"field-description\" for=\"{{fieldId}}\">{{description}}</label></div>");
}]);

angular.module("templates/rxFormItem.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxFormItem.html",
    "<div class=\"form-item\"><label><span class=\"field-label\">{{label}}:</span> <span class=\"field-prefix\" ng-if=\"prefix\">{{prefix}}</span>  <span class=\"field-input\" ng-transclude=\"\"></span> <span class=\"field-suffix\" ng-if=\"suffix\">{{suffix}}</span> <span ng-if=\"description\" class=\"field-description\" ng-bind-html=\"description\"></span></label></div>");
}]);

angular.module("templates/rxFormOptionTable.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxFormOptionTable.html",
    "<div class=\"form-item\"><table class=\"table-striped option-table\" ng-show=\"data.length > 0\"><thead ng-hide=\"hideHeaders\"><tr><th></th><th ng-repeat=\"column in columns\" scope=\"col\">{{column.label}}</th></tr></thead><tr ng-repeat=\"row in data\" ng-class=\"{current: row.id === selected, selected: row.id == $parent.model}\"><th scope=\"row\" class=\"option-table-input\"><input type=\"{{type}}\" id=\"{{fieldId}}_{{row.id}}\" ng-model=\"$parent.model\" value=\"{{row.id}}\" name=\"{{fieldId}}\" ng-disabled=\"row.id === selected\"></th><td ng-repeat=\"column in columns\"><label for=\"{{fieldId}}_{{row.id}}\">{{row[column.key]}} <span ng-show=\"row.id === selected\">{{column.selectedLabel}}</span></label></td></tr></table></div>");
}]);

angular.module("templates/rxFormRadio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxFormRadio.html",
    "<fieldset><div ng-repeat=\"option in options\" class=\"form-item\"><label for=\"{{fieldId}}_{{$index}}\" class=\"field-label\">{{option.label}}:</label><input type=\"radio\" id=\"{{fieldId}}_{{$index}}\" ng-model=\"$parent.model\" value=\"{{option.value}}\" name=\"{{fieldId}}\" class=\"field-input\"><p class=\"field-description\">{{option.description}}</p></div></fieldset>");
}]);

angular.module("templates/rxFormSelect.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxFormSelect.html",
    "<fieldset class=\"form-item\"><label for=\"{{fieldId}}\" class=\"field-label\">{{label}}:</label><div class=\"field-select\"><select name=\"{{fieldId}}\" id=\"{{fieldId}}\" ng-model=\"model\" ng-required=\"required\"><option ng-repeat=\"option in options\" value=\"{{option.value}}\" ng-disabled=\"option.disabled\" ng-selected=\"{{option.value == model}}\">{{option.label}}</option></select></div></fieldset>");
}]);

angular.module("templates/rxModalAction.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxModalAction.html",
    "<span class=\"modal-link-container rx-modal-action\"><a href=\"#\" class=\"modal-link {{classes}}\" ng-click=\"showModal($event)\" ng-transclude=\"\"></a></span>");
}]);

angular.module("templates/rxModalActionForm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxModalActionForm.html",
    "<div class=\"modal-header\"><h3 class=\"modal-title\">{{title}}</h3><h4 class=\"modal-subtitle\" ng-if=\"subtitle\">{{subtitle}}</h4></div><div class=\"modal-body\"><div ng-show=\"$parent.isLoading\" class=\"loading\"><i class=\"spinner gray\"></i></div><form ng-hide=\"$parent.isLoading\" name=\"modalActionForm\" class=\"modal-form rx-form\" ng-transclude=\"\"></form></div><div class=\"modal-footer\"><button class=\"submit form-action\" ng-click=\"$parent.submit()\" type=\"submit\" ng-disabled=\"modalActionForm.$invalid\">{{submitText || \"Submit\"}}</button> <button class=\"cancel form-action\" ng-click=\"$parent.cancel()\">{{cancelText || \"Cancel\"}}</button></div>");
}]);

angular.module("templates/rxNav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxNav.html",
    "<header class=\"site-header\"><h1 class=\"logo\"><a href=\"/\">Encore</a></h1><rx-global-search placeholder-text=\"{{ placeholderText }}\" search-function=\"searchFunction()\"></rx-global-search><nav class=\"main-nav\"><ul><li class=\"nav-item\"><rx-dropdown menu=\"bookmarks\"></rx-dropdown></li><li class=\"nav-item\"><rx-dropdown menu=\"internalTools\"></rx-dropdown></li></ul></nav><nav class=\"user-nav\"><ul><li class=\"nav-item\"><a href=\"/login\" rx-logout=\"\" class=\"nav-link\">Log out</a></li></ul></nav><div class=\"sub-header\"><nav class=\"site-breadcrumbs\"><rx-breadcrumbs></rx-breadcrumbs></nav><a class=\"bookmark\" href=\"#\"><i class=\"fa fa-bookmark\"></i> &nbsp;Bookmark this page</a></div></header>");
}]);

angular.module("templates/rxNotification.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxNotification.html",
    "<div class=\"rx-notification notification-{{message.type}}\">{{message.text}} <button ng-click=\"dismiss()\" class=\"notification-dismiss btn-link\" ng-if=\"message.dismissable\">&times; <span class=\"visually-hidden\">Dismiss Message</span></button></div>");
}]);

angular.module("templates/rxNotifications.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxNotifications.html",
    "<div class=\"rx-notifications\" ng-show=\"messages.length > 0\"><div ng-repeat=\"message in messages\" class=\"rx-notification notification-{{message.type}}\" ng-class=\"{'notification-loading': message.loading}\" rx-spinner=\"\" ng-init=\"loading = message.loading\"><span class=\"notification-text\" ng-bind-html=\"message.text\"></span> <button ng-click=\"dismiss(message)\" class=\"notification-dismiss btn-link\" ng-if=\"message.dismissable && !message.loading\">&times; <span class=\"visually-hidden\">Dismiss Message</span></button></div></div>");
}]);

angular.module("templates/rxItemsPerPage.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxItemsPerPage.html",
    "<form id=\"itemsPerPageForm\" class=\"itemsPerPage\"><label for=\"itemsPerPageSelector\">{{ label }}</label><select name=\"itemsPerPageSelector\" id=\"itemsPerPageSelector\" ng-model=\"pager.itemsPerPage\" ng-change=\"updatePaging()\"><option ng-repeat=\"i in pager.itemSizeList\">{{ i }}</option></select></form>");
}]);

angular.module("templates/rxPaginate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxPaginate.html",
    "<div class=\"rx-paginate\"><ul class=\"pagination\"><li ng-class=\"{disabled: pageTracking.pageNumber == 0}\" class=\"pagination-first\"><a ng-click=\"pageTracking.pageNumber = 0\" ng-hide=\"pageTracking.pageNumber == 0\">First</a> <span ng-show=\"pageTracking.pageNumber == 0\">First</span></li><li ng-class=\"{disabled: pageTracking.pageNumber == 0}\" class=\"pagination-prev\"><a ng-click=\"pageTracking.pageNumber = (pageTracking.pageNumber - 1)\" ng-hide=\"pageTracking.pageNumber == 0\">« Prev</a> <span ng-show=\"pageTracking.pageNumber == 0\">« Prev</span></li><li ng-repeat=\"n in pageTracking | Page\" ng-class=\"{active: n == pageTracking.pageNumber, 'page-number-last': n == pageTracking.totalPages - 1}\" class=\"pagination-page\"><a ng-click=\"pageTracking.pageNumber = n\">{{n + 1}}</a></li><li ng-class=\"{disabled: pageTracking.pageNumber == pageTracking.totalPages - 1 || pageTracking.total == 0}\" class=\"pagination-next\"><a ng-click=\"pageTracking.pageNumber = (pageTracking.pageNumber + 1)\" ng-hide=\"pageTracking.pageNumber == pageTracking.totalPages - 1 || pageTracking.total == 0\">Next »</a> <span ng-show=\"pageTracking.pageNumber == pageTracking.totalPages - 1\">Next »</span></li><li ng-class=\"{disabled: pageTracking.pageNumber == pageTracking.totalPages - 1}\" class=\"pagination-last\"><a ng-click=\"pageTracking.pageNumber = pageTracking.totalPages - 1\" ng-hide=\"pageTracking.pageNumber == pageTracking.totalPages - 1\">Last</a> <span ng-show=\"pageTracking.pageNumber == pageTracking.totalPages - 1\">Last</span></li></ul></div>");
}]);

angular.module("templates/rxRelatedMenu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxRelatedMenu.html",
    "<div class=\"related-menu\" ng-class=\"{'menu-left': menuPosition == 'left', 'menu-right': menuPosition == 'right', 'collapsable': isCollapsable, 'menu-shown': state}\"><div ng-if=\"isCollapsable\" class=\"menu-toggle\" ng-click=\"toggleRelatedMenu()\"><i class=\"fa\" ng-class=\"{'fa-angle-double-left': (state&&(menuPosition == 'left'))||(!state&&(menuPosition == 'right')), 'fa-angle-double-right': (!state&&(menuPosition == 'left'))||(state&&(menuPosition == 'right'))} \"></i></div><div class=\"menu-content\" ng-transclude=\"\"></div></div>");
}]);

angular.module("templates/rxProductResources.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxProductResources.html",
    "<h5>Available Product Resources</h5><ul class=\"product-resources\"><rx-active-url url=\"/servers\"><a href=\"#/{{user}}/servers/\" class=\"ico-servers\">Cloud Servers <span>OpenStack / Nova</span></a></rx-active-url><rx-active-url url=\"/cbs/\"><a href=\"#/{{user}}/cbs/volumes/\" class=\"ico-block-storage\">Block Storage <span>OpenStack / Cinder</span></a><ul class=\"sub-products\"><rx-active-url url=\"/cbs/volumes\"><a href=\"#/{{user}}/cbs/volumes/\">Volumes</a></rx-active-url><rx-active-url url=\"/cbs/snapshots\"><a href=\"#/{{user}}/cbs/snapshots/\">Snapshots</a></rx-active-url></ul></rx-active-url><rx-active-url url=\"/databases/instances\"><a href=\"#/{{user}}/databases/instances/\" class=\"ico-databases\">Databases <span>OpenStack / Trove</span></a></rx-active-url></ul>");
}]);

angular.module("templates/rxSortableColumn.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/rxSortableColumn.html",
    "<div class=\"rx-sortable-column\"><button class=\"sort-action btn-link\" ng-click=\"sortMethod(sortProperty)\"><span class=\"visually-hidden\">Sort by&nbsp;</span> <span ng-transclude=\"\"></span></button> <i class=\"sort-icon\" ng-style=\"{visibility: predicate === '{{sortProperty}}' && 'visibile' || 'hidden'}\" ng-class=\"{'desc': !reverse, 'asc': reverse}\"><span class=\"visually-hidden\">Sorted {{reverse ? 'ascending' : 'descending'}}</span></i></div>");
}]);
