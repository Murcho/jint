/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-34.js
 * @description Object.defineProperty - 'Attributes' is an Array object that uses Object's [[Get]] method to access the 'enumerable' property (8.10.5 step 3.a)
 */


function testcase() {
        var obj = {};
        var accessed = false;

        var arrObj = [];
        arrObj.enumerable = true;

        Object.defineProperty(obj, "property", arrObj);

        for (var prop in obj) {
            if (prop === "property") {
                accessed = true;
            }
        }

        return accessed;
    }
runTestCase(testcase);
