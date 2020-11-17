const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const ropsten = require('./tokens/ropsten.json');

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
    'logoURI': 'https://eliteswap.io/static/media/logo.f4a2a2f5.png',
    'keywords': [
      'eliteswap',
      'default'
    ],
    tokens: [
      ...mainnet,
      ...ropsten
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
