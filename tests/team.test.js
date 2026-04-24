const request = require("supertest");
const app = require("../app");
const db = require("../models");

let token;

beforeAll(async () => {
  await db.sequelize.sync({ force: true });

  await request(app)
    .post("/api/auth/register")
    .send({
      username: "admin",
      email: "admin@test.com",
      password: "123",
      role: "admin"
    });

  const login = await request(app)
    .post("/api/auth/login")
    .send({
      email: "admin@test.com",
      password: "123"
    });

  token = login.body.token;
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("Team API", () => {
  test("should create team (admin only)", async () => {
    const res = await request(app)
      .post("/api/teams")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Team Alpha" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Team Alpha");
  });

  test("should get all teams", async () => {
    const res = await request(app)
      .get("/api/teams")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});