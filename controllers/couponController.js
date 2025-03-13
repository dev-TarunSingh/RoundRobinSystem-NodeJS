const Coupon = require("../models/Coupon");
const moment = require("moment");
const requestIp = require("request-ip");

exports.claimCoupon = async (req, res) => {
  const ip = requestIp.getClientIp(req);
  const cookieClaim = req.cookies.claimed;

  const lastClaimed = cookieClaim ? moment(cookieClaim) : null;
  const now = moment();
  const timeLimit = moment().subtract(1, "hours");

  if (lastClaimed && lastClaimed.isAfter(timeLimit)) {
    return res.render("coupon", {
      message: `Wait ${lastClaimed.diff(
        timeLimit,
        "minutes"
      )} more minutes to claim again.`,
      coupon: null,
    });
  }

  const coupon = await Coupon.findOneAndUpdate(
    {},
    { $set: { claimedBy: ip, claimedAt: now } }, 
    { new: true, sort: { claimedAt: 1 } } 
  );

  if (!coupon)
    return res.render("coupon", {
      message: "No coupons available",
      coupon: null,
    });

  res.cookie("claimed", now.toISOString(), { maxAge: 3600000, httpOnly: true });
  res.render("coupon", { message: "Coupon claimed!", coupon: coupon.code });
};
