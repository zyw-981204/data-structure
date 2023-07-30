/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (m === 0 && n === 0) {
        return
    }
    let n1 = m - 1, n2 = n - 1;
    let cur = m + n - 1;

    while (n1 >= 0 || n2 >= 0) {
        if (n1 < 0) {
            nums1[cur] = nums2[n2--];
        } else if (n2 < 0) {
            nums1[cur] = nums1[n1--];
            
        } else if (nums1[n1] < nums2[n2]) {
            nums1[cur] = nums2[n2--];
        } else  {
            nums1[cur] = nums1[n1--];
        }
        cur--;
    }
};

// @lc code=end

