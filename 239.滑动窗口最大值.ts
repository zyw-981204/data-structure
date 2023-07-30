/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
   // 边界条件
  if (k > nums.length || k <= 0) return []
  let deque = [], res = []
  for (let i = 0; i < nums.length; i++) {
      // 如果nums[i]比栈尾的数大，则弹出
      while (deque.length && deque[deque.length - 1] < nums[i])  deque.pop()
      // nums[i]入栈
      deque.push(nums[i])
      // 推入最大值
      if(deque[0] === nums[i - k]) deque.shift()
      if(i >= k - 1) res.push(deque[0]) 
  }
  return res
};

// maxSlidingWindow([1, -1]
//     , 1)
// @lc code=end

