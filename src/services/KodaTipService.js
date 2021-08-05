import { KODATIP_ABI } from "../abis/KODATIP";
import Web3 from "web3";
import TipWallet from "../models/TipWallet";
const { ADMIN_PRIVATE_KEY, ADMIN_ADDRESS } = process.env;
const TIP_CONTRACT_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const RPC_PROVIDER = "http://locahost:8545"; //TODO move this to infura for demo

const getBalances = async () => {
  const TipData = await TipWallet.findOne({ username });
  return {
    balance: TipData?.balance,
  };
};
const getBalance = async (username) => {
  const TipData = await TipWallet.findOne({ username });
  return {
    balance: TipData?.balance,
  };
};
const updateBalances = async () => {
  const web3 = new Web3(RPC_PROVIDER);
  const tipContractInstance = new web3.eth.Contract(
    KODATIP_ABI,
    TIP_CONTRACT_ADDRESS
  );
  const balances = await tipContractInstance.methods.wallets.call().call();
  //TODO update DB
};
const withdrawTip = async (username, amount) => {
  const web3 = new Web3(RPC_PROVIDER);
  const tipContractInstance = new web3.eth.Contract(
    KODATIP_ABI,
    TIP_CONTRACT_ADDRESS
  );
  //TODO sign the transaction
  const receipt = await tipContractInstance.methods.withdrawFunds(amount).send({
    from: ADMIN_ADDRESS,
  });
};
const getDefaultTipAmount = async (username) => {
  const TipData = await TipWallet.findOne({ username });
  return TipData.defaultTipAmount;
};

const tipUser = async (from, to, amount) => {
  const fromAccountUpdate = {balance:`${balance+=amount}`}
  const toAccountUpdate = {balance:`${balance-=amount}`}
  await TipWallet.findOneAndUpdate({ username:from },{fromAccountUpdate});
  await TipWallet.findOneAndUpdate({ username:to },{toAccountUpdate});


};

module.exports = {
  updateBalances,
  withdrawTip,
  getBalance,
  getBalances,
  tipUser,
  getDefaultTipAmount
};
