
const request = require("supertest");
const express = require("express");
const app = require("../app.js"); // Adjust the path to your app entry point
const jwt = require("jsonwebtoken");

describe("API Endpoints", () => {
    // Replace with a valid JWT for testing authorized endpoints
    const userToken = jwt.sign({ id: "kalp2002prajapati@gmail.com", role: "customer" }, "86260fdbfddda9a87053810e4b1123b00902a786310963c223f168983a8c04ee8a90eb87f4008a0527472cfbbabb22e88e2ae763a7c0090a8834da5755ee5793", { expiresIn: "1h" });
    const adminToken = jwt.sign({ id: "admin@gmail.com", role: "admin" }, "86260fdbfddda9a87053810e4b1123b00902a786310963c223f168983a8c04ee8a90eb87f4008a0527472cfbbabb22e88e2ae763a7c0090a8834da5755ee5793", { expiresIn: "1h" });

    describe("Product Routes", () => {
        test("Get all products", async () => {
            const res = await request(app).get("/api/products");
            expect(res.statusCode).toBe(200);
        });

        // test("Create a product (admin only)", async () => {
        //     const res = await request(app)
        //         .post("/api/products")
        //         .set("Authorization", `Bearer ${adminToken}`)
        //         .send({ name: "Herbal Tea", price: 10.99 });
        //     expect(res.statusCode).toBe(201);
        // });
    });

    // describe("Order Routes", () => {
    //     test("Create an order", async () => {
    //         const res = await request(app)
    //             .post("/api/orders")
    //             .set("Authorization", `Bearer ${userToken}`)
    //             .send({ items: [{ productId: "abc123", quantity: 1 }] });
    //         expect(res.statusCode).toBe(201);
    //     });

    //     test("Get user's orders", async () => {
    //         const res = await request(app)
    //             .get("/api/orders")
    //             .set("Authorization", `Bearer ${userToken}`);
    //         expect(res.statusCode).toBe(200);
    //     });

    //     test("Admin get all orders", async () => {
    //         const res = await request(app)
    //             .get("/api/orders/admin/all")
    //             .set("Authorization", `Bearer ${adminToken}`);
    //         expect(res.statusCode).toBe(200);
    //     });
    // });
});
