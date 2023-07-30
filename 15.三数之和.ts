/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(_nums: number[]): number[][] {
    if (_nums.length < 3) {
        return []
    }
    const nums = _nums.sort((a, b) => a - b);

    const res = [];
    for (let i = 0; i <= nums.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];
            if (total === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (total > 0) {
                right--;
            } else {
                left++
            }
        }
    }
    return res
};

// threeSum([-1, 0, 1, 2, -1, -4])
// @lc code=end

