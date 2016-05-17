const
    nutol = require('nutol'),
    valtree = require('valtree'),
    Optiopus = function(defaults){
        return new OptiopusDefaults(defaults);
    },
    OptiopusDefaults = function(defaults) {
        this.defaults = defaults;
    },
    OptiopusOptions = function(defaults, options) {
        this.defaults = defaults;
        this.options = options;
    };

    Optiopus.defaults = function(defaults){
        return new OptiopusDefaults(defaults);
    };

    Optiopus.options = function(defaults, options){
        return new OptiopusOptions(defaults, options);
    };

OptiopusDefaults.prototype = Object.create(OptiopusDefaults.prototype, {
    // enumerable: false,
    // writable: false,
    // configurable: false
    constructor: {
        __proto__: null,
        value: OptiopusDefaults
    },
    defaults: {
        __proto__: null,
        set: function(defaults) {
            nutol.isPlainObject(defaults) && (this.__mixin = nutol.extend(true, this.__mixin || {}, defaults));
        },
        get: function(){
            return this.__mixin;
        }
    },
    default: {
        __proto__: null,
        value: function(key, value) {
            return valtree(this.__mixin, key, value);
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
        value: null
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
            defaults instanceof OptiopusDefaults && (this.__defaults = defaults);
        },
        get: function(){
            return this.__defaults.defaults;
        }
    },
    options: {
        __proto__: null,
        set: function(options) {
            nutol.isPlainObject(options) && (this.__mixin = nutol.extend(true, this.__mixin || {}, this.defaults, options));
        },
        get: function(){
            return this.__mixin;
        }
    },
    option: {
        __proto__: null,
        value: function(key, value) {
            return valtree(this.__mixin, key, value);
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
        value: null
    }
});

module.exports = Optiopus;
