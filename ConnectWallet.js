import './App.css';
import { useState } from 'react';
import Web3Modal from "web3modal";
// import {ethers} from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

//https://goerli.infura.io/v3/8f20084a87d143fe91461f60bd67979e

const providerOptions = {
    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options : {
        appName: "Luster",
        infuraId: { 5: "https://goerli.infura.io/v3/8f20084a87d143fe91461f60bd67979e" }
      }
    }

}

function App() {
  const [web3Provider, setWeb3Provider] =useState(null);
  
  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      // const web3ModalProvider = new ethers.providers.web3Provider(web3ModalInstance)
      setWeb3Provider(web3ModalInstance)
      
      console.log(web3ModalInstance);
      
    } catch(error) {
      console.log(error);
    }

  }


  // async function discWallet() {
  //   let web3Modal = new Web3Modal()
  //   const clear = await web3Modal.clearCachedProvider();
  //   console.log(clear);
    
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Wallet Connection</h2>

        {
          web3Provider == null?(<button onClick={connectWallet}>Connect Wallet</button>):
          (<button >Disconnect Wallet</button>)
          
          


        }
        
        {/* <button onClick={discWallet}>Disconnect Wallet</button> */}


      </header>
    </div>
  );
  }


export default App;
