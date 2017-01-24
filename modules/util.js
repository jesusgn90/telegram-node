/* jshint esversion: 6 */
'use strict';
(function () {
    function foo() {
        console.log('Foo function');
        return null;
    }

    module.exports = {
        foo: foo
    };
})();
