var rotate = function (nums, k) {
  let ans = nums.splice(nums.length - k);
  for (let i = 0; i < ans.length; i++) {
    nums.splice(i, 0, ans[i]);
  }
  return nums
};
 console.log(rotate([1,2],5))