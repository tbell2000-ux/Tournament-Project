const request = require("supertest");
const app = require("../app");
const db = require("../models");

let token;
let teamA;
let teamB;

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

  teamA = await db.Team.create({ name: "Team A" });
  teamB = await db.Team.create({ name: "Team B" });
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("Match API", () => {
  test("should create match (admin only)", async () => {
    const res = await request(app)
      .post("/api/matches")
      .set("Authorization", `Bearer ${token}`)
      .send({
        round: 1,
        scoreA: 2,
        scoreB: 1,
        teamAId: teamA.id,
        teamBId: teamB.id
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.round).toBe(1);
  });

  test("should get matches", async () => {
    const res = await request(app)
      .get("/api/matches")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});