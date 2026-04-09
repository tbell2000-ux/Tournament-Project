const request = require("supertest");
const app = require("../app"); // goes up one folder from tests/
const { sequelize, Team, Tournament, Match } = require("../models"); // goes up one folder from tests/

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Team API", () => {
  test("should create a new team", async () => {
    const res = await request(app).post("/teams").send({ name: "Team Alpha" });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Team Alpha");
  });

  test("should get all teams", async () => {
    const res = await request(app).get("/teams");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});