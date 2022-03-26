require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net pudding inflict permit bubble soda'; 
let testAccounts = [
"0x66be54cd0b3948c805d5dc621eb8f63aa5a38781d240969ff2df56cb11a38992",
"0x899ff954acc4f5444236941853ef5e07fc1c8bd0d011be52a875a49a63e6d975",
"0x033df0f1ff8d0576ae40839d1c87e995fb11ae4a83fc2b9df8486db16dadd344",
"0x927e3e3e21ad69add0a8eb7aa8689488fdc62562484dad50ebcca7f0d5011051",
"0x6b1e4785cc56cc17d36c069ee1bff60d260710c4435beda57456a509347c3cad",
"0x7ae041343e77d7c50b66f33aeedbaab7340b232e34410f1067ba6c866cc0886a",
"0x908bc375fa7258e1231d47d20b21946e1596826e3834a8ef31b01d4a31776ea2",
"0xb16441221add999fb1c2bf927ea95c62906eb71638c04a7189a8309c8fbe8483",
"0xe7f4819adc9535f4859c146105b1c75c0b61608a4b689d1328af7cc63cd457f1",
"0x8187a2bd191ddf657476b90acba9c000374ca548770b4eb104c76c8656ac4071"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


