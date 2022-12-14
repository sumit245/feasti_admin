const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AdminCoupon = new Schema({
    promo_id: { type: String },
    promo_code: { type: String },
    promo_text: { type: String },
    price: { type: String },
    discount: { type: String },
    orders: { type: String },
    isAdmin: { type: Boolean, default: true },
    discount_type: { type: String },
    isDelivery: { type: Boolean },
    status: { type: String, default: "Active" },
});

module.exports = mongoose.model("AdminCoupon", AdminCoupon);
