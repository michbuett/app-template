/* global $ */
describe('web.UI (Viewport)', function () {
    'use strict';

    var uiHelper = require('../../../helper/ui.helper.js');

    beforeEach(function () {
        uiHelper.setUp(this);
    });

    afterEach(function () {
        uiHelper.tearDown(this);
    });

    it('is there', function () {
        // prepare
        // execute
        this.ui.update(this.state);

        // verify
        expect($('#viewport')).toExist();
    });
});
