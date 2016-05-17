var expect = require("chai").expect;
var optiopus = require("..");

describe('Optiopus', function() {
  var defaults, options;

    beforeEach(function() {
        defaults = {
            'color': '#EFEFEF',
            'font': {
                'size': '10px',
                'family': 'Arial'
            },
            'background': {
                'color': ['rgba', 0, 0, 0, 1]
            }
        };
        //def = valtree(json);
    });

    it('should get the new value of the property keeping default structure', function() {
      
      var defs = optiopus(defaults),
          opts = defs.options({
              'color': '#FF0000'
          });

        expect(opts.option('color')).to.be.equal('#FF0000');
        expect(opts.options['color']).to.be.equal('#FF0000');
        expect(opts.options['font']['family']).to.be.equal('Arial');
        expect(opts.option('font.size')).to.be.equal('10px');
        expect(opts.option('background')).to.has.property('color');
    });
});
