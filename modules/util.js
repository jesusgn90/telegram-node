/* jshint esversion: 6 */
'use strict';
(function () {
    const foo = () => {
        console.log('Foo function');
        return null;
    };

    module.exports = {
        foo: foo
    };
})();
