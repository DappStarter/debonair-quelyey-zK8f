require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind concert grace glow flock version'; 
let testAccounts = [
"0xb0cc577548cfcf90f1145bec880bfe86b5ee6b3ff535c87d72f0e9c88070280f",
"0x4b9200bcb46c51a9faff7d46f4cae3c36a26c6b4a2e58bf607b6e36d301b013f",
"0xd7e9e1c59dd6f9e42f36aabbcc018b9e67539f28fbecf55ae3ff15dee0d4dfc4",
"0x56f8e850df556b8b06d2929d2bb00ccb247e2e1990e8b43f4ea7922f7bb98d42",
"0xd6e0e1555efe8c10a3b7e01330095c896a339ddee3c18aa21e69a8d1eb29bf4e",
"0x91bb57b68cbf370cacb7201ee6525c82c10b73ae21378d293b200a36d78e1296",
"0x9d422412249213421df82de5bfe0ad7bc57398b825a3675b8439b35e152dcba0",
"0xbfa3906cac223b31b468f71134cb8d754956c47c5b62144cae6df93edc5f8954",
"0x0a1906f6b57e10fee41f874246d5f52beaefb7dceda8b84ce54711f92ef0aac7",
"0xfaebe7910e1a1ef7b04ddbbfc1f5cfb51472647fb3c39f7da4c0c3f64a37323f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

