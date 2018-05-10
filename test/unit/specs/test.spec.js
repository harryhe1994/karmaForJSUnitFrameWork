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

    it('# test sinon spy', function () {
        sinon.spy(he, 'testing');
        he.testing('hehe');
        var spyCall = he.testing.getCall(0);
        expect('hehe').to.eq(spyCall.args[0]);
    });

    it('# test sinon stub', function () {
        var st = sinon.stub;
        st(he, 'hello').callsFake(function () {
            return 1;
        });
        expect(he.hello(1, 2)).to.be.eq(1);
        he.hello.restore();
        expect(he.hello(1, 2)).to.be.eq(3);
    });
});