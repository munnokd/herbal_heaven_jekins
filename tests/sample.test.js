
const request = require("supertest");
const express = require("express");
const app = require("../app.js"); // 

describe("API Endpoints", () => {

    describe("Product Routes", () => {
        test("Get all products", async () => {
            const res = await request(app).get("/api/products");
            expect(res.statusCode).toBe(200);
        });
    },10000);
    describe("Category Routes", () => {
        test("Get all categories", async () => {
            const res = await request(app).get("/api/categories");
            expect(res.statusCode).toBe(200);
        });
    },10000);

});



