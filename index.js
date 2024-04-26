'use strict';

var globals =
{
    after:      false,
    afterEach:  false,
    before:     false,
    beforeEach: false,
    context:    false,
    describe:   false,
    it:         false,
    only:       false,
    run:        false,
    skip:       false,
    specify:    false,
    when:       false,
    xcontext:   false,
    xdescribe:  false,
    xit:        false,
    xspecify:   false,
};

exports.environments    = { ebdd: { globals: globals } };
exports.globals         = globals;
