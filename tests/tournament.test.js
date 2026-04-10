const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Tournament API", () => {
  test("should create a new tournament", async () => {
    const res = await request(app)
      .post("/api/tournaments")
      .send({ name: "Spring Cup" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Spring Cup");
  });

  test("should get all tournaments", async () => {
    const res = await request(app).get("/api/tournaments");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});