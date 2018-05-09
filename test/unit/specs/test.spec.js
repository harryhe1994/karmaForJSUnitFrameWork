var he = require('@/hello.js');

describe('hello', function () {
    it('# hello word', function () {
        var c = he.hello(1,2);
        expect(c).to.eq(3);
    });

    it('# should return testing', function () {
        expect(he.testing('hehe')).to.eq('hehe');
    });
});