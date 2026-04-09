const db = require('./models');

async function seed() {
  await db.sequelize.sync({ force: true });

  await db.Team.bulkCreate([
    { name: 'Team A' },
    { name: 'Team B' },
    { name: 'Team C' },
  ]);

  await db.Tournament.bulkCreate([
    { name: 'Spring Cup' },
    { name: 'Summer Cup' },
  ]);

  console.log('Database seeded!');
  process.exit();
}

seed();