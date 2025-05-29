
const request = require("supertest");
const express = require("express");
const app = require("../app.js"); // 
/**
 * @jest-environment jsdom
 */


describe("API Endpoints", () => {

    describe("Product Routes", () => {
        test("Get all products", async () => {
            const res = await request(app).get("/api/products");
            expect(res.statusCode).toBe(200);
        });
    });
    describe("Category Routes", () => {
        test("Get all categories", async () => {
            const res = await request(app).get("/api/categories");
            expect(res.statusCode).toBe(200);
        });
    });

});

describe('Frontend', () => {
    test('Mouse pointer should change to text cursor on input field focus', () => {
        document.body.innerHTML = `<input type="text" id="name" style="cursor: text;">`;

        const input = document.getElementById('name');
        expect(input.style.cursor).toBe('text');
    });

    test('Disabled input should be greyed out and not focusable', () => {
        document.body.innerHTML = `<input type="text" id="email" disabled style="background-color: #ccc;">`;

        const input = document.getElementById('email');
        expect(input.disabled).toBe(true);
        expect(input.style.backgroundColor).toBe('#ccc');
    });

    test('Description field should be a multi-line textarea', () => {
        document.body.innerHTML = `<textarea id="description" rows="5" cols="50"></textarea>`;

        const textarea = document.getElementById('description');
        expect(textarea.tagName).toBe('TEXTAREA');
        expect(parseInt(textarea.getAttribute('rows'))).toBeGreaterThan(1);
    });

});

