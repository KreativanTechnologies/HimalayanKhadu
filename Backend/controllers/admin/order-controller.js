import Order from "../../models/order.js"

export const getAllOrdersOfAllUsers = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("userId", "name email")
      .populate("tourPackageId", "title");

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
    console.error("Error fetching all orders:", e);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching orders.",
    });
  }
};

export const getOrderDetailsForAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id)
      .populate("userId", "name email")
      .populate("tourPackageId", "title");
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
    console.error("Error fetching order details:", e);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the order details.",
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;
    const validStatuses = ["Processing", "Confirmed", "Cancelled"];
    if (!validStatuses.includes(orderStatus)) {
      return res.status(400).json({
        success: false,
        message: `Invalid orderStatus. Allowed values: ${validStatuses.join(", ")}`,
      });
    }
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }
    order.orderStatus = orderStatus;
    await order.save();
    res.status(200).json({
      success: true,
      message: "Order status updated successfully!",
      updatedStatus: order.orderStatus,
    });
  } catch (e) {
    console.error("Error updating order status:", e);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the order status.",
    });
  }
};