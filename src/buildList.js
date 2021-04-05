const { version } = require('../package.json');
const bscMainnet = require('./tokens/bsc_mainnet.json');
const bscTestnet = require('./tokens/bsc_testnet.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Default Token List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://raw.githubusercontent.com/EthereumEliteswap/default-token-list/master/src/assets/bsc/0x380291A9A8593B39f123cF39cc1cc47463330b1F/ELTB_logo.png',
    'keywords': [
      'eliteswap',
      'default'
    ],
    tokens: [
      ...bscMainnet,
      ...bscTestnet
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
