module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('roles').insertMany([
      {name: 'User', slug: 'user', description: 'the user with the rights to use the social network'},
      {name: 'Guest', slug: 'guest', description: 'a user who has not yet been reviewed by the administrator'},
      {name: 'Admin', slug: 'admin', description: 'social network administrator'}
    ])
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('roles').drop()
  }
};
