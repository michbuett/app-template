module.exports = (function () {
    'use strict';

    var Utils = require('alchemy.js/lib/Utils');

    var CoreUI = require('../core/UI');
    var Viewport = require('./ui/Viewport');

    return CoreUI.extend({

        /** @private */
        initEntities: function (state) {
            this.admin.initEntities([Utils.melt(Viewport, {
                id: 'viewport',
            })], state);
        },
    });
}());
