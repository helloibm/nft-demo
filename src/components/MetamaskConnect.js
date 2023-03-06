import { useContext, useEffect } from 'react';
import { ethers } from "ethers";
import { WalletContext } from '../App';

//import mmlogo from '../images/metamask-logo.svg';
import '../css/App.css';

function MetamaskConnect() {
  const { walletAddress, setWalletAddress } = useContext(WalletContext);
  
  useEffect(() => {
    async function loadConnectedWallet() {
      const accounts = await window.ethereum.request({
        method: "eth_accounts"
      });
      if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
      };      
    };
    loadConnectedWallet(); 
  },[]);

  const onClickConnect = () => {
    if(!window.ethereum) {
      console.log("please install MetaMask")
      return
    }
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.send("eth_requestAccounts", [])
    .then((accounts)=>{
      if(accounts.length>0) setWalletAddress(accounts[0]);
    })
    .catch((e)=>console.log(e));
  };

  const onClickDisconnect = () => {
    setWalletAddress(undefined)
  };

  return (
    <header>
      {
          walletAddress  
          ? <button type="button" w='100%' onClick={onClickDisconnect}>
                Account:{walletAddress}
            </button>
          : <button type="button" w='100%' onClick={onClickConnect}>
                  Connect MetaMask
            </button>
      }
    </header>    
  );
}

export default MetamaskConnect;
