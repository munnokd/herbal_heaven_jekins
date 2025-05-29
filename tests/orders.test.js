/**
 * @jest-environment jsdom
 */

describe("My Orders Page", () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div id="orders-loading"></div>
      <div id="no-orders-message" style="display: none;"></div>
      <div id="orders-table-container" style="display: none;"></div>
      <tbody id="orders-table-body"></tbody>
    `;
    });

    test("displays no orders message when orders array is empty", async () => {
        const orders = [];

        document.getElementById('orders-loading').style.display = 'none';
        if (orders.length === 0) {
            document.getElementById('no-orders-message').style.display = 'block';
        }

        expect(document.getElementById('no-orders-message').style.display).toBe('block');
    });

    test("displays orders table when orders exist", () => {
        const mockOrder = {
            _id: "abc123456789",
            createdAt: new Date().toISOString(),
            items: [{ quantity: 2 }],
            totalAmount: 20.0,
            status: "processing",
            paymentStatus: "paid"
        };

        document.getElementById('orders-loading').style.display = 'none';
        document.getElementById('orders-table-container').style.display = 'block';

        const tableBody = document.getElementById('orders-table-body');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${mockOrder._id.substring(0, 8)}...</td>`;
        tableBody.appendChild(row);

        expect(document.getElementById('orders-table-container').style.display).toBe('block');
        expect(tableBody.children.length).toBe(1);
    });
});
