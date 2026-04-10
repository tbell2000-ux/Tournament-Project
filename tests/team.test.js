const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Team API", () => {
  test("should create a new team", async () => {
    const res = await request(app)
      .post("/api/teams")
      .send({ name: "Team Alpha" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Team Alpha");
  });

  test("should get all teams", async () => {
    const res = await request(app).get("/api/teams");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});