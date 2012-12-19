/*!
 * jQuery RESTful plugin
 * @author @walkeralencar
 * Licensed under the MIT license
 */
(function ($) {
    "use strict";
    var pluginName = 'jQuery RESTful Plugin',
        defaults = {
            dataType: 'json',
            accepts: 'application/json',
            crossBrowser: true,
            headers: {
                Accept: 'application/json'
            }
        },
        action = {
            post: 'POST',
            get: 'GET',
            put: 'PUT',
            delete: 'DELETE'
        },
        RESTful = function () {
            this.request = function (options) {
                // $.extend(true,...) is a recursive extend;
                this.options = $.extend(true, {}, defaults, options);
                this.defaults = defaults;
                this.name = pluginName;
                this.action = action;

                switch (options.type) {
                case this.action.get:
                case this.action.post:
                    break;
                case this.action.put:
                case this.action.delete:
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
                    $.extend(true, {}, options, { type: action.post })
                );
            };

            this.get = function (options) {
                return this.request(
                    $.extend(true, {}, options, { type: action.get })
                );
            };

            this.put = function (options) {
                return this.request(
                    $.extend(true, {}, options, { type: action.put })
                );
            };

            this.delete = function (options) {
                return this.request(
                    $.extend(true, {}, options, { type: action.delete })
                );
            };

            this.create = this.post;
            this.read = this.get;
            this.update = this.put;
        };
    $.restful = new RESTful();

    /**
     * CRUD aliases
     */
    $.create = function (options) {
        return $.restful.create(options);
    };
    $.read   = function (options) {
        return $.restful.read(options);
    };
    $.update = function (options) {
        return $.restful.update(options);
    };
    $.delete = function (options) {
        return $.restful.delete(options);
    };
})(jQuery);
