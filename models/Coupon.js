const mongoose = require('mongoose');
const CouponSchema = new mongoose.Schema({
    code: String,
    claimedBy: { type: String, default: null },
    claimedAt: { type: Date, default: null }
});
module.exports = mongoose.model('Coupon', CouponSchema);