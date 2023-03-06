import { useContext, useState, useEffect } from 'react';
import { WalletContext } from '../App';
import { Network, Alchemy } from "alchemy-sdk";
import NFTItem from './NFTItem';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "demo", // Replace with your Alchemy API Key.
  network: Network.ETH_GOERLI, // Replace with your network.
};

const alchemy = new Alchemy(settings);

function NFTContainer() {
    const { walletAddress } = useContext(WalletContext);
    const [ ownedNfts, setOnwnedNfts ] = useState([]);
    useEffect(() => {
        async function loadNFTs() {
            if(walletAddress) { //do not try to fetch if undefined
                const nftsForOwner = await alchemy.nft.getNftsForOwner(walletAddress);
                console.log("number of NFTs found:", nftsForOwner.totalCount);
                console.log("...");
                console.log(nftsForOwner.ownedNfts);                
                setOnwnedNfts(nftsForOwner.ownedNfts);                
            }            
        };
        loadNFTs();
    },[walletAddress]); //load NFTs everytime the wallet address changes

return(<div className='container'>
    {
        ownedNfts.map((item) => <NFTItem key={item.tokenId} nft={item}></NFTItem>)
    }
    </div>);
}

export default NFTContainer;