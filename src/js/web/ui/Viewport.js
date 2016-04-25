module.exports = (function () {
    'use strict';

    return {
        /** @lends core.entities.Viewport.prototype */

        globalToLocal: {
            windowWidth: 'width',
            windowHeight: 'height',
        },

        state: {
            width: 800,
            height: 600,
        },

        vdom: {
            root: document.getElementById('viewport'),

            renderer: function renderViewportVdom(context) {
                var h = context.h;
                var state = context.state;
                var height = state.val('height');
                var width = state.val('width');
                var isLandscape = (width > height);
                var orientation = isLandscape ? 'landscape' : 'portrait';

                return h('div', {
                    id: context.entityId,
                    className: 'viewport ' + orientation
                }, context.renderAllChildren());
            },
        },

        css: {
            entityRules: function (state) {
                return {
                    overflow: 'hidden',
                    width: state.val('width') + 'px',
                    height: state.val('height') + 'px',
                };
            },
        },

        children: {
        },
    };
}());
