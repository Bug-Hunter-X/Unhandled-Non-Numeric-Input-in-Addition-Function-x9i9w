# Unhandled Non-Numeric Input in JavaScript Addition Function

This repository demonstrates a common error in JavaScript: performing arithmetic operations without sufficient input validation.  The `foo` function adds two inputs, but doesn't handle cases where the inputs are not numbers, leading to potential runtime errors or unexpected results.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version with proper input validation.

## Bug Description

The primary issue is the lack of a check to ensure that both `a` and `b` are numbers before the addition operation (`a + b`).  If either variable is a string, boolean, or other non-numeric type, JavaScript's type coercion might produce unexpected results or throw an error.

## Solution

The corrected code in `bugSolution.js` explicitly checks if both `a` and `b` can be converted to numbers using `isNaN()`. If either is not a number, it returns `NaN` (Not a Number) to indicate the invalid input.  Alternatively, more specific error handling could be implemented.