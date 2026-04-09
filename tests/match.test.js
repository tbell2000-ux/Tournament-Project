const request = require("supertest");
const app = require("../app"); // goes up one folder from tests/
const { sequelize, Team, Tournament, Match } = require("../models"); // goes up one folder from tests/

let teamA, teamB;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  teamA = await Team.create({ name: "Team A" });
  teamB = await Team.create({ name: "Team B" });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Match API", () => {
  test("should create a new match", async () => {
    const res = await request(app)
      .post("/matches")
      .send({ round: 1, scoreA: 2, scoreB: 1, teamAId: teamA.id, teamBId: teamB.id });
    expect(res.statusCode).toBe(201);
    expect(res.body.round).toBe(1);
  });

  test("should get all matches with teams", async () => {
    const res = await request(app).get("/matches");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].teamA.name).toBe("Team A");
    expect(res.body[0].teamB.name).toBe("Team B");
  });
});