/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.18/15.4.4.18-7-c-ii-10.js
 * @description Array.prototype.forEach - callbackfn is called with 1 formal parameter
 */


function testcase() {

        var result = false;
        function callbackfn(val) {
            result = (val > 10);
        }

        [11].forEach(callbackfn); 
        return result;
    }
runTestCase(testcase);
