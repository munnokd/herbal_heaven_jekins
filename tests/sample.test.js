
const request = require("supertest");
const express = require("express");
const app = require("../app.js"); // 

describe("API Endpoints", () => {

    describe("Product Routes", () => {
        test("Get all products", async () => {
            const res = await request(app).get("/api/products");
            expect(res.statusCode).toBe(200);
        });
    });

});



