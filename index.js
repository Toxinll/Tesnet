def addBlock(self, block):
 block.prevHash = self.getLastBlock().hash
 block.hash = block.getHash()
 self.chain.append(block)
