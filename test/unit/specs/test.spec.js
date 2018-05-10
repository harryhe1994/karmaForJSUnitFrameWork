var he = require('@/hello');
var t = require('@/test');

describe('hello', function () {
    it('# hello word', function () {
        var c = he.hello(1,2);
        expect(c).to.eq(3);
    });

    it('# should return testing', function () {
        expect(he.testing('hehe')).to.eq('hehe');
    });

    it('# test callHello', function () {
        expect(t.callHello(1, 2)).to.eq(3);
    });
});