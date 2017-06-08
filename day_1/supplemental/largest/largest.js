/*

Largest - Part 1

Write a function "largest". "largest" takes in one argument, an Array called "myArray". "myArray" contains three Arrays (it is an Array of Arrays!) Each of these three subArrays contains three Numbers. "largest" returns an Array comprised of the largest Number with in each subArray.

So running:

largest([[1,7,3], [500, 78, 133], [31, 99, 66]]);

Would return:

[7, 500, 99]

Largest - Part 2

Make your sure your "largest" function worka appropriately if the Array passed to "largest" has a variable number of Arrays in it and each subArray contains a variable amount of Numbers:

So running:

largest([ [9,5,34,88,66], [100, 200] ]);

Would return:

[88, 200]

*/

function largest(myArray) {
  return myArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}
