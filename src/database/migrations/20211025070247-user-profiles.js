const profileFactory = require('../factories/ProfileFactory')
const fakerconst = require('faker')
module.exports = {
    async up(db, client) {
        // TODO write your migration here.
        const ROLES = await getRolesHashMap(db)

        let profiles = profileFactory.count(10).make(function (faker) {
            return {
                role: faker.random.arrayElement([ROLES.GUEST, ROLES.USER])
            }
        })

        await db.collection('profiles').insertMany(profiles)
    },

    async down(db, client) {
        // TODO write the statements to rollback your migration (if possible)

        db.collection('profiles').drop()
    }
};

async function getRolesHashMap (db) {
    return (await db.collection('roles').find().toArray()).reduce(function (acc, role) {
        return (acc[role.slug.toUpperCase()] = role._id) && acc
    }, {})
}
