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

describe("Tournament API", () => {
  test("should create tournament (admin only)", async () => {
    const res = await request(app)
      .post("/api/tournaments")
      .set("Authorization", `Bearer ${token}`)
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