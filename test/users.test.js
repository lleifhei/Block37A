const request = require("supertest");
const express = require("express");
const usersRouter = require("../routes/users");

const app = express();
app.use(express.json());
app.use("/users", usersRouter);

describe("Users API", () => {
  it("should get all users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Get all users");
  });

  it("should get a specific user by ID", async () => {
    const userId = 1;
    const response = await request(app).get(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Get user with ID: ${userId}`);
  });

  it("should create a new user", async () => {
    const newUser = { name: "John Doe", email: "john.doe@example.com" };
    const response = await request(app).post("/users").send(newUser);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Create a new user: ${JSON.stringify(newUser)}`);
  });

  it("should update a user by ID", async () => {
    const userId = 1;
    const updatedUser = { name: "Jane Doe", email: "jane.doe@example.com" };
    const response = await request(app)
      .put(`/users/${userId}`)
      .send(updatedUser);
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      `Update user with ID: ${userId}, Data: ${JSON.stringify(updatedUser)}`
    );
  });

  it("should delete a user by ID", async () => {
    const userId = 1;
    const response = await request(app).delete(`/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Delete user with ID: ${userId}`);
  });
});
