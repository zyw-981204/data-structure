/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0
    }
    let pre = 1, cur = 1;
    while (pre < nums.length) {
        if (nums[pre] !== nums[pre - 1]) {
            nums[cur] = nums[pre]
            pre++;
            cur++;
        } else {
            pre++;
        }
    }
    return cur
};
// @lc code=end

