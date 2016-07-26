const
    optree = require('optree'),
    valtree = require('valtree'),
    JScope = require('jscope'),
    Optiopus = function(defaults) {
        return new OptiopusDefaults(defaults);
    },
    OptiopusDefaults = function(defaults) {
        if (!(this instanceof OptiopusDefaults))
            return new OptiopusDefaults(defaults);
        JScope.call(this);
        Optiopus.extend(this, defaults)
    },
    OptiopusOptions = function(defaults, options) {
        return Optiopus.extend(defaults.$new(), options);
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
        Optiopus.extend(mixin, typeof(key) === 'object' ? key : props);
        return mixin;
    };

    Optiopus.get = function(mixin, key) {
        return mixin && valtree(mixin, key);
    };

    Optiopus.mixin = function(mixin, key, value) {
        if (typeof(key) === 'string' && value === undefined)
            return Optiopus.get(mixin, key);
        return key ? Optiopus.set(mixin, key, value) : mixin;
    };

    OptiopusDefaults.prototype = Object.create(JScope.prototype, {
        constructor: {
            __proto__: null,
            value: OptiopusDefaults,
            enumerable: false,
            writable: false,
            configurable: false
        },
        option: {
            __proto__: null,
            value: function(key, value) {
                return Optiopus.mixin(this, key, value);
            }
        },
        options: {
            __proto__: null,
            value: function(key, value) {
                return OptiopusOptions(this.$$root, key);
            }
        }
    });

module.exports = Optiopus;
