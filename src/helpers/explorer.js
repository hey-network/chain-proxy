async function getTransactionsByAccount(eth, account, startBlockNumber, endBlockNumber) {
  if (endBlockNumber == null) {
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for transactions to/from account \"" + account + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    let block = await eth.getBlock(i, true);
    console.log(block)
    // if (block != null && block.transactions != null) {
    //   block.transactions.forEach( function(e) {
    //     if (account == "*" || account == e.from || account == e.to) {
    //       console.log("  tx hash          : " + e.hash + "\n"
    //         + "   nonce           : " + e.nonce + "\n"
    //         + "   blockHash       : " + e.blockHash + "\n"
    //         + "   blockNumber     : " + e.blockNumber + "\n"
    //         + "   transactionIndex: " + e.transactionIndex + "\n"
    //         + "   from            : " + e.from + "\n"
    //         + "   to              : " + e.to + "\n"
    //         + "   value           : " + e.value + "\n"
    //         + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
    //         + "   gasPrice        : " + e.gasPrice + "\n"
    //         + "   gas             : " + e.gas + "\n"
    //         + "   input           : " + e.input);
    //     }
    //   })
    // }
  }
};

module.exports = {
  getTransactionsByAccount,
}
