
const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
const BigNumber       = require('bignumber.js')
const BigNumberSchema = require('mongoose-bignumber')
const {Types: {Long}} = mongoose;
 

const TipWalletSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },

    balance: {
        type: Number,
        required: true
    },
    defaultTipAmount:{
        type: Number,
        required: true
    }
},{timestamps: true});

const TipWallet= mongoose.model('TipWallet',TipWalletSchema);
module.exports = TipWallet;