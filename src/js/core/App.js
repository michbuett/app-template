module.exports = (function () {
    'use strict';

    var each = require('pro-singulis');
    var State = require('./State');
    var Applicatus = require('alchemy.js/lib/Applicatus');

    /**
     * @class
     * @name todo.app
     * @extends alchemy.web.Applicatus
     */
    return Applicatus.extend({
        /** @lends todo.app.prototype */

        /** @override */
        onLaunch: function () {

            each([
                // link controller here
            ], this.wireUp, this);

            this.ui.init(this.state);
        },

        /** @override */
        update: function (p) {
            var state = p.state
                .set('fps', p.fps)
                .set('windowWidth', window.innerWidth)
                .set('windowHeight', window.innerHeight);

            this.ui.update(state);

            return state;
        },

    }).whenBrewed(function () {
        this.state = State.getInitialState();
    });
}());
