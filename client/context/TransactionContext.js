import React, { useEffect, useState } from 'react'
export const TransactionContext = React.createContext();


let eth;

if (typeof window !== 'undefined') {
    eth = window.ethereum;
}
export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState();
    const connectToWallet = async (metamask = eth) => {
        try {
            if (!metamask) {
                return alert('please install metamask');
            }
                const accounts = await metamask.request({ method: 'eth_requestAccounts' });
                setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error('No ethereum object');
        }
    }
      
    
    const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask ')

      const accounts = await metamask.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
          console.log("Wallet already connected");
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object.')
    }
    }
    
    useEffect(() => {
        checkIfWalletIsConnected();
    },[])

    return (<TransactionContext.Provider
            value={{currentAccount, connectToWallet}}
            >
                {children}
            </TransactionContext.Provider>)
    
}

