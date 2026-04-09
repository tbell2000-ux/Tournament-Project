const request = require("supertest");
const app = require("../app"); // goes up one folder from tests/
const { sequelize, Team, Tournament, Match } = require("../models"); // goes up one folder from tests/

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Tournament API", () => {
  test("should create a new tournament", async () => {
    const res = await request(app).post("/tournaments").send({ name: "Spring Cup" });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Spring Cup");
  });

  test("should get all tournaments", async () => {
    const res = await request(app).get("/tournaments");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});