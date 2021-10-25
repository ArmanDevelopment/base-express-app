const bcrypt = require('bcrypt')
const hashAccountPassword = require('../../database/plugins/hashAccountPassword')

const Account = require('./Account')
const {Schema/*, Types: DataType*/} = require('mongoose')

let intAccountSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

intAccountSchema.pre ('save', hashAccountPassword());

class intAccount extends Account.discriminator('int_account', intAccountSchema) {
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(this.password, salt);
    }

    async validatePassword(password) {
        return await bcrypt.compare(password, this.password)
    }
}

module.exports = intAccount