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
    });

    it('should get the new value of the property keeping default structure', function() {

      var defs = optiopus(defaults),
          opts = defs.options({
              'color': '#FF0000'
          });

          opts.option('font.size', '11px');

          opts.option({
            'background.color': 'hsla(100,10,1,1)',
            'padding.0': '10px',
            'padding.1': '15px'
          });


        expect(opts.option('color')).to.be.equal('#FF0000');
        expect(opts.options['color']).to.be.equal('#FF0000');
        expect(opts.options['font']['family']).to.be.equal('Arial');
        expect(opts.option('font.size')).to.be.equal('11px');
        expect(opts.option('background')).to.has.property('color');
        expect(opts.options['padding'][0]).to.be.equal('10px');
    });
});
