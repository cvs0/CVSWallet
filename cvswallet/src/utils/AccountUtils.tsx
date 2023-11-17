import { ethers } from 'ethers';

const generateKeys = (seedPhrase?: string) => {
    let wallet: ethers.HDNodeWallet;

    if (seedPhrase) {
        wallet = ethers.Wallet.frinW(seedPhrase);
    } else {
        wallet = ethers.Wallet.createRandom();
        seedPhrase = wallet.mnemonic?.phrase || undefined;
    }

    // Rest of your code...

    return wallet; // Add any additional return statements as needed
};
