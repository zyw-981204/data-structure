// 定义一个函数 longestPalindrome，输入一个字符串 s，返回 s 中最长的回文子串
function longestPalindrome(s: string): string {
    // 定义一个函数 centerExpand，输入左右两个索引，返回以这两个索引为中心的最长回文子串的长度
    const centerExpand = (left: number, right: number): number => {
      // 当左右两个索引在 s 的范围内，并且对应的字符相等时，向两边扩展
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      // 返回最长回文子串的长度
      return right - left - 1;
    }
  
    // 初始化最长回文子串 srt 和其长度 maxLength
    let srt = '', maxLength = 0;
    // 遍历 s 中的每个字符
    for (let i = 0; i < s.length; i++) {
      // 计算以 i 为中心的最长回文子串的长度
      const len = centerExpand(i, i);
      // 计算以 i 和 i+1 为中心的最长回文子串的长度
      const len1 = centerExpand(i, i + 1);
      // 取两者中的最大值
      const max = Math.max(len, len1);
      // 如果最大值大于等于当前最长回文子串的长度
      if (max > maxLength) {
        // 更新最长回文子串 srt 和其长度 maxLength
        const start = i - Math.floor((max - 1) / 2);
        const end = i + Math.floor(max / 2);
        srt = s.slice(start, end + 1);

        maxLength = max;
      }
    }
    // 返回最长回文子串
    return srt;
  };

