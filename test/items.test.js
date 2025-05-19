const request = require("supertest");
const express = require("express");
const itemsRouter = require("../routes/items");

const app = express();
app.use(express.json());
app.use("/items", itemsRouter);

describe("Items API", () => {
  it("should get all items", async () => {
    const response = await request(app).get("/items");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Get all items");
  });

  it("should get a specific item by ID", async () => {
    const itemId = 1;
    const response = await request(app).get(`/items/${itemId}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Get item with ID: ${itemId}`);
  });

  it("should create a new item", async () => {
    const newItem = { name: "Test Item", price: 100 };
    const response = await request(app).post("/items").send(newItem);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Create a new item: ${JSON.stringify(newItem)}`);
  });

  it("should update an item by ID", async () => {
    const itemId = 1;
    const updatedItem = { name: "Updated Item", price: 150 };
    const response = await request(app)
      .put(`/items/${itemId}`)
      .send(updatedItem);
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      `Update item with ID: ${itemId}, Data: ${JSON.stringify(updatedItem)}`
    );
  });

  it("should delete an item by ID", async () => {
    const itemId = 1;
    const response = await request(app).delete(`/items/${itemId}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Delete item with ID: ${itemId}`);
  });
});
