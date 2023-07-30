/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    const calc = (left, right) => {
        return Math.min(height[left], height[right]) * (right - left)
    }
    if (height.length === 0) {
        return 0
    }
    let res = -Infinity;
    let left = 0, right = height.length - 1;

    while (right >= left) {
        const current = calc(left, right);
        res = Math.max(res, current);
        if (height[left] <= height[right]) {
            left = left + 1;
        } else {
            right = right - 1
        }
    }

    return res
};
// @lc code=end

