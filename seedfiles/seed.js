const { db, Run, User } = require('../server/db/models');
const users = require('./seedusers');
const runs = require('./seedruns');

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    await Promise.all(
      runs.map((run) => {
        return Run.create(run);
      })
    );

    console.log('seeding done!');
    // seed your database here!
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
