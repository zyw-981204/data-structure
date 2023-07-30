/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let needPlus = true, p = digits.length - 1;
    while (p >= 0) {
        const nextValue = digits[p] + (needPlus ? 1 : 0);
        needPlus = nextValue >= 10;
        digits[p--] = nextValue % 10;
    }
    if (needPlus) {
        digits.unshift(1)
    }
    return digits
};
// @lc code=end

