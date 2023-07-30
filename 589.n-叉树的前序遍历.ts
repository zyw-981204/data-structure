/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
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

function preorder(root: Node | null): number[] {

    const res: number[] = [];
    const dfs = (node) => {
        if (!node) {
            return node
        }
        res.push(node.val);
        if (node.children.length) {
            for (let child of node.children.slice()) { dfs(child) }
        }
    }
    dfs(root)
    return res
};
// @lc code=end

