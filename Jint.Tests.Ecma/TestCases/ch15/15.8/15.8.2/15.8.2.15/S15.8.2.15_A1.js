// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If x is NaN, Math.round(x) is NaN
 *
 * @path ch15/15.8/15.8.2/15.8.2.15/S15.8.2.15_A1.js
 * @description Checking if Math.round(x) is NaN, where x is NaN
 */

// CHECK#1
var x = NaN;
if (!isNaN(Math.round(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.round(x)) === false'");
}

