const
    optree = require('optree'),
    valtree = require('valtree'),
    nutol = require('nutol'),

    Optiopus = function(defaults) {
        return new OptiopusDefaults(defaults);
    },
    OptiopusDefaults = function(defaults) {
        this.__mixin = {};
        this.defaults = defaults;
    },
    OptiopusOptions = function(defaults, options) {
        this.__mixin = {};
        this.defaults = defaults;
        this.options = options;
    };

    Optiopus.defaults = function(defaults) {
        return new OptiopusDefaults(defaults);
    };

    Optiopus.options = function(defaults, options) {
        return new OptiopusOptions(defaults, options);
    };

    Optiopus.extend = function() {

        var options, paths, path, iarr = true;
        var i = 0;
        var length = arguments.length;

        if (typeof target === 'boolean')
            (iarr = target) && i++;

        target = arguments[i] || {};

        for (; i < length; ++i) {
            paths = arguments[i];
            if (paths != null) {
                paths = optree(paths, iarr);
                for (path in paths) {
                    valtree(target, path, paths[path]);
                }
            }
        }
        return target;
    };

    Optiopus.set = function(mixin, key, value) {
        var props = {};
            props[key] = value;
        Optiopus.extend((mixin = mixin || {}), nutol.isPlainObject(key) ? key : props);
        return mixin;
    };

    Optiopus.get = function(mixin, key) {
        return mixin && valtree(mixin, key);
    };

    OptiopusDefaults.prototype = Object.create(OptiopusDefaults.prototype, {
        constructor: {
            __proto__: null,
            value: OptiopusDefaults
        },
        defaults: {
            __proto__: null,
            set: function(defaults) {
                nutol.isPlainObject(defaults) && this.default(defaults);
            },
            get: function() {
                return this.__mixin;
            }
        },
        default: {
            __proto__: null,
            value: function(key, value) {
                if (typeof(key) === 'string' && value === undefined)
                    return Optiopus.get(this.__mixin, key);
                else
                    Optiopus.set(this.__mixin, key, value);
                return this;
            }
        },
        options: {
            __proto__: null,
            value: function(options) {
                return new OptiopusOptions(this, options);
            }
        },
        __mixin: {
            writable: true,
            value: {}
        }
    });

    OptiopusOptions.prototype = Object.create(OptiopusOptions.prototype, {
        constructor: {
            value: OptiopusOptions,
            enumerable: false,
            writable: false,
            configurable: false
        },
        defaults: {
            __proto__: null,
            set: function(defaults) {
                defaults instanceof OptiopusDefaults && (this.__defaults = defaults) && this.option(this.defaults);
            },
            get: function() {
                return this.__defaults.defaults;
            }
        },
        options: {
            __proto__: null,
            set: function(options) {
                nutol.isPlainObject(options) && this.option(options);
            },
            get: function() {
                return this.__mixin;
            }
        },
        option: {
            __proto__: null,
            value: function(key, value) {
                if (typeof(key) === 'string' && value === undefined)
                    return Optiopus.get(this.__mixin, key);
                else
                    Optiopus.set(this.__mixin, key, value);
                return this;
            }
        },
        __defaults: {
            enumerable: false,
            configurable: false,
            writable: true,
            value: null
        },
        __mixin: {
            enumerable: false,
            configurable: false,
            writable: true,
            value: {}
        }
    });

module.exports = Optiopus;
