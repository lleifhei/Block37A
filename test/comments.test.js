const request = require("supertest");
const express = require("express");
const commentsRouter = require("../routes/comments");

const app = express();
app.use(express.json());
app.use("/comments", commentsRouter);

describe("Comments API", () => {
  it("should retrieve all comments", async () => {
    const response = await request(app).get("/comments");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Retrieve all comments");
  });

  it("should retrieve a comment by ID", async () => {
    const commentId = "123";
    const response = await request(app).get(`/comments/${commentId}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Retrieve comment with ID: ${commentId}`);
  });

  it("should create a new comment", async () => {
    const newComment = { text: "This is a test comment" };
    const response = await request(app).post("/comments").send(newComment);
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      `Create a new comment: ${JSON.stringify(newComment)}`
    );
  });

  it("should update a comment by ID", async () => {
    const commentId = "123";
    const updatedComment = { text: "Updated comment text" };
    const response = await request(app)
      .put(`/comments/${commentId}`)
      .send(updatedComment);
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      `Update comment with ID: ${commentId}, Data: ${JSON.stringify(
        updatedComment
      )}`
    );
  });

  it("should delete a comment by ID", async () => {
    const commentId = "123";
    const response = await request(app).delete(`/comments/${commentId}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Delete comment with ID: ${commentId}`);
  });
});
