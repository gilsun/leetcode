class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        result = []
        root = self.setTrie(words)
    
        for i in range(len(board)):
            for j in range(len(board[0])):
                self.dfs(root, i, j, result, board)
            
        return result
        
        
    def setTrie(self, words):
        root = {}
        for word in words:
            curr_node = root
            for char in word:
                if char not in curr_node:
                    curr_node[char] = {}
                curr_node = curr_node[char]
            curr_node['word'] = word
        return root


    def dfs(self, node, i, j, result, board):
        if 'word' in node:
            result.append(node['word'])
            del node['word']
        
        if i < 0 or j < 0 or i >= len(board) or j >= len(board[0]):
            return
        if board[i][j] not in node:
            return
    
        char = board[i][j]
        board[i][j] = '#'
        self.dfs(node[char], i + 1, j, result, board)
        self.dfs(node[char], i - 1, j, result, board)
        self.dfs(node[char], i, j + 1, result, board)
        self.dfs(node[char], i, j - 1, result, board)
        board[i][j] = char


