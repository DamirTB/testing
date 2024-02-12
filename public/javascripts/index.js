// Initialise the page objects to interact with
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const showChainId = document.querySelector('.showChainId');
const showBalance = document.querySelector('.showBalance');

// Initialise the active account and chain id
let activeAccount;
let activeChainId;

// Update the account, chain id, and balance when user clicks on button
ethereumButton.addEventListener('click', async () => {
  await getAccount();
  await getChainId();
  await updateBalance();
});

// Get the account in the window object
async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask.');
  } else {
    activeAccount = accounts[0];
    console.log(accounts[0])
    showAccount.innerHTML = activeAccount;
  }
}

// Get the connected network chainId
async function getChainId() {
  activeChainId = await ethereum.request({ method: 'eth_chainId' });
  showChainId.innerHTML = activeChainId;
}

// Get the balance for the active accoun


ethereum.on('accountsChanged', async () => {
  await getAccount();
  await updateBalance();
});

ethereum.on('chainChanged', async () => {
  await getChainId();
  await updateBalance();
});
