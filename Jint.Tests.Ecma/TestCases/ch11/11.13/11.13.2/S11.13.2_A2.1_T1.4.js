// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator uses GetValue
 *
 * @path ch11/11.13/11.13.2/S11.13.2_A2.1_T1.4.js
 * @description Either Type is not Reference or GetBase is not null, check opeartor is "x += y"
 */

//CHECK#1
var x = 1;
var z = (x += 1);
if (z !== 2) {
  $ERROR('#1: var x = 1; var z = (x += 1); z === 2. Actual: ' + (z));
}

//CHECK#2
var x = 1;
var y = 1;
var z = (x += y);
if (z !== 2) {
  $ERROR('#2: var x = 1; var y = 1; var z = (x += y); z === 2. Actual: ' + (z));
}


