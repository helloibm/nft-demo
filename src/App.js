import MetamaskConnect from './components/MetamaskConnect';
import { createContext, useMemo, useState } from 'react';
import NFTContainer from './components/NFTContainer';

import logo from './images/logo.svg';
import './css/App.css';

//create a wallet context to be shared accross components
export const WalletContext = createContext({
  walletAddress: '',
  setWalletAddress: () => {},
});

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const wallet = useMemo(
    () => ({ walletAddress, setWalletAddress }), 
    [walletAddress]
  );
  return (
    <WalletContext.Provider value={wallet}>
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <MetamaskConnect />
          </div>
          <div className="col-sm"></div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <NFTContainer />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </WalletContext.Provider> 
  );
}

export default App;
