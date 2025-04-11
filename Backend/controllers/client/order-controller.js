import razorpay from "../../helpers/razorpay.js";
import Order from "../../models/order.js";
import crypto from "crypto";

export const createOrder = async (req, res) => {
  try {
    const { userId, tourPackageId, quantity, travelers, totalPrice } = req.body;

    const options = {
      amount: totalPrice * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    const order = await Order.create({
      userId,
      tourPackageId,
      quantity,
      travelers,
      totalPrice,
      razorpayOrderId: razorpayOrder.id,
    });

    const razorpayOrderId = "order_NxZ12v4Fnr3p9M";
    const razorpayPaymentId = "pay_NxZP7Fsn0A0gPq"; // Mock ID

    const key_secret = "YOUR_RAZORPAY_KEY_SECRET";
    const body = `${razorpayOrderId}|${razorpayPaymentId}`;

    const expectedSignature = crypto
      .createHmac("sha256", key_secret)
      .update(body)
      .digest("hex");

    console.log(expectedSignature);

    res.status(201).json({ success: true, order, razorpayOrder });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const capturePayment = async (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    const body = `${razorpayOrderId}|${razorpayPaymentId}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpaySignature) {
      return res
        .status(400)
        .json({ success: false, message: "Payment verification failed" });
    }

    const order = await Order.findOneAndUpdate(
      { razorpayOrderId },
      {
        razorpayPaymentId,
        razorpaySignature,
        paymentStatus: "Paid",
        orderStatus: "Confirmed",
      },
      { new: true }
    );

    res.status(200).json({ success: true, message: "Payment verified", order });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

export const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};
