/*!
 * jQuery RESTful plugin
 * @author: @walkeralencar
 * Licensed under the MIT license
 */
(function ($) {
    "use strict";
    var restful = 'RESTful',
        defaults = {
            dataType: 'json',
            accepts: 'application/json',
            crossBrowser: true,
            headers: {
                Accept: 'application/json'
            }
        },
        actions = {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        RESTful = function () {
            this.request = function (options) {
                // $.extend(true,...) is a recursive extend;
                this.options = $.extend(true, {}, defaults, options);
                this.defaults = defaults;
                this.name = restful;
                this.action = actions;

                switch (options.type) {
                case this.action.read:
                case this.action.create:
                    break;
                case this.action.update:
                case this.action.destroy:
                    var xHttpMethodOverride = {
                        headers: {
                            'X-HTTP-Method-Override': options.type
                        }
                    };
                    $.extend(true, this.options, xHttpMethodOverride);
                    break;
                }
                return $.ajax(this.options);
            };

            this.post = function (options) {
                return this.request(
                    $.extend(true, {}, options, { type: actions.create })
                );
            };

            this.get = function (options) {
                return this.request(
                    $.extend(true, {}, options, { type: actions.read })
                );
            };

            this.put = function (options) {
                return this.request(
                    $.extend(true, {}, options, { type: actions.update })
                );
            };

            this.delete = function (options) {
                return this.request(
                    $.extend(true, {}, options, { type: actions.destroy })
                );
            };

            this.create = this.post;
            this.read = this.get;
            this.update = this.put;
            this.destroy = this.delete;
        };
    $.restful = new RESTful();
})(jQuery);
