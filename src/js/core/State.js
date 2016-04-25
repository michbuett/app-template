module.exports = (function () {
    'use strict';

    var immutable = require('immutabilis');
    var Utils = require('alchemy.js/lib/Utils');

    var defaultValues = {
        fps: 60,
    };

    return {
        /** @lends core.State.prototype */

        /**
         * @return Immutable The initial application state
         */
        getInitialState: function () {
            var initialState = Utils.mix({}, defaultValues, {
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });

            return immutable.fromJS(initialState);
        },
    };
}());
