const Factory = require('../../helpers/foundation/factory/Factory')
const Profile = require('../../models/Profile')


class ProfileFactory extends Factory {
    constructor(label = 'profiles', model = Profile) {
        super(label, Profile);
    }

    direction(faker) {
        return {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            gender: faker.random.arrayElement(['male', 'female']),
            birth_date: faker.date.between('1900-01-01', '2021-10-25'),
        }
    }
}

module.exports = new ProfileFactory()