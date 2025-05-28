
const request = require("supertest");
const express = require("express");
const app = require("../app"); // Adjust the path to your app entry point
const jwt = require("jsonwebtoken");

describe("API Endpoints", () => {
    // Replace with a valid JWT for testing authorized endpoints
    const userToken = jwt.sign({ id: "user123", role: "user" }, process.env.JWT_SECRET || "testsecret", { expiresIn: "1h" });
    const adminToken = jwt.sign({ id: "admin123", role: "admin" }, process.env.JWT_SECRET || "testsecret", { expiresIn: "1h" });

    describe("Auth Routes", () => {
        test("Register a new user", async () => {
            const res = await request(app)
                .post("/api/auth/register")
                .send({ email: "testuser@example.com", password: "Password123" });
            expect(res.statusCode).toBe(201);
        });

        test("Login an existing user", async () => {
            const res = await request(app)
                .post("/api/auth/login")
                .send({ email: "testuser@example.com", password: "Password123" });
            expect(res.statusCode).toBe(200);
        });

        test("Verify login token", async () => {
            const res = await request(app)
                .get("/api/auth/verify")
                .set("Authorization", `Bearer ${userToken}`);
            expect(res.statusCode).toBe(200);
        });
    });

    describe("Product Routes", () => {
        test("Get all products", async () => {
            const res = await request(app).get("/api/products");
            expect(res.statusCode).toBe(200);
        });

        test("Create a product (admin only)", async () => {
            const res = await request(app)
                .post("/api/products")
                .set("Authorization", `Bearer ${adminToken}`)
                .send({ name: "Herbal Tea", price: 10.99 });
            expect(res.statusCode).toBe(201);
        });
    });

    describe("Order Routes", () => {
        test("Create an order", async () => {
            const res = await request(app)
                .post("/api/orders")
                .set("Authorization", `Bearer ${userToken}`)
                .send({ items: [{ productId: "abc123", quantity: 1 }] });
            expect(res.statusCode).toBe(201);
        });

        test("Get user's orders", async () => {
            const res = await request(app)
                .get("/api/orders")
                .set("Authorization", `Bearer ${userToken}`);
            expect(res.statusCode).toBe(200);
        });

        test("Admin get all orders", async () => {
            const res = await request(app)
                .get("/api/orders/admin/all")
                .set("Authorization", `Bearer ${adminToken}`);
            expect(res.statusCode).toBe(200);
        });
    });
});
