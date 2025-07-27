import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import connectDB from "./config/db.js";
import User from "./models/user_model.js";
import Product from "./models/product_model.js";
import Order from "./models/order_model.js";
import users from "./data/users.js";
import products from "./data/products.js";
//import orders from "./data/orders.js";


connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    // Create sample users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    // Create sample products with admin user as creator
    const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser };
        }
    );
    await Product.insertMany(sampleProducts);
    console.log("Data Imported!".green.inverse);
    // Create sample orders
    // const sampleOrders = orders.map((order) => {
    //     return { ...order, user: adminUser };
    // });
    // await Order.insertMany(sampleOrders);
    process.exit();
    
    }
    catch (error) {
        console.error(`Error: ${error.message}`.red.inverse);
        process.exit(1);
    }
}
const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`.red.inverse);
        process.exit(1);
    }
}

console.log(process.argv);
if (process.argv[2] === "-d") {
    destroyData();
}  else {
    importData();
}


