/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const swap = (left, right) => {
        const leftValue = nums[left];
        nums[left] = nums[right]
        nums[right] = leftValue;
    }
    let left = 0, right = 0;
    while (right < nums.length) {
        if (nums[right] !==  0) {
            swap(left, right);
            left += 1;
            right += 1;
        } else {
            right += 1;
        }
    }
};
// @lc code=end

