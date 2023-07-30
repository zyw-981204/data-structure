/*
 * @lc app=leetcode.cn id=590 lang=typescript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */


function postorder(root: Node | null): number[] {
    const res: number[] = [];
    const dfs = (node) => {
        if (!node) {
            return node
        }
        if (node.children.length) {
            for (let child of node.children.slice()) { dfs(child) }
        }
        res.push(node.val);
    }
    dfs(root)
    return res
};
// @lc code=end

