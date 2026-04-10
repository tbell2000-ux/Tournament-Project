const db = require("../../models");
const bcrypt = require("bcryptjs");

async function seedDatabase() {
  try {
    await db.sequelize.sync({ force: true });

    console.log("Database reset.");

    // USERS
    const hashedPassword = await bcrypt.hash("1234", 10);

    await db.User.create({
      username: "admin@test.com",
      password: hashedPassword,
      role: "admin"
    });

    // TOURNAMENTS
    const tournament = await db.Tournament.create({
      name: "Spring Cup"
    });

    // TEAMS
    const teamA = await db.Team.create({ name: "Team A" });
    const teamB = await db.Team.create({ name: "Team B" });

    // MATCHES (ONLY USE FIELDS YOU ACTUALLY HAVE)
    await db.Match.create({
      round: 1,
      scoreA: 2,
      scoreB: 1,
      teamAId: teamA.id,
      teamBId: teamB.id
    });

    console.log("Database seeded successfully.");
    process.exit();
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seedDatabase();