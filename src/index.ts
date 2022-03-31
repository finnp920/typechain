class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "2020202", "", "hello", 1234567);

let blockchain: [Block] = [genesisBlock];

// [error] Argument of type 'string' is not assignable to parameter of type 'Block'.
// blockchain.push("dddd")

console.log(blockchain);

export {};