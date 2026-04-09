const db = require("../models");

const seedDatabase = async () => {
  try {
    // Reset tables first (optional)
    await db.sequelize.sync({ force: true });
    console.log("Database reset.");

    // 1. Create a Tournament
    const tournament = await db.Tournament.create({
      name: "Spring Championship",
      status: "active",
    });

    // 2. Add Teams
    const teams = await Promise.all([
      db.Team.create({ name: "Red Raptors", tournamentId: tournament.id }),
      db.Team.create({ name: "Blue Bulls", tournamentId: tournament.id }),
      db.Team.create({ name: "Green Giants", tournamentId: tournament.id }),
      db.Team.create({ name: "Yellow Yaks", tournamentId: tournament.id }),
    ]);

    // 3. Create Matches (Round 1)
    const match1 = await db.Match.create({
      tournamentId: tournament.id,
      teamAId: teams[0].id,
      teamBId: teams[1].id,
      scoreA: 3,
      scoreB: 1,
      winnerId: teams[0].id,
      round: 1,
    });

    const match2 = await db.Match.create({
      tournamentId: tournament.id,
      teamAId: teams[2].id,
      teamBId: teams[3].id,
      scoreA: 2,
      scoreB: 2,
      winnerId: null, // tie, or leave null
      round: 1,
    });

    console.log("Database seeded successfully.");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();