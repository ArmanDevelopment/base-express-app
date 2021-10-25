
function save (password, hashPassword) {
    return async function (next) {
        if(this.isModified('password') && !!this[hashPassword])
            this[password] = await this[hashPassword]()

        next()
    }
}

function autoHashPassword({password='password', hashPassword='hashPassword'} = {}) {
    return function (schema, {password=password, hashPassword=hashPassword}) {
        schema.pre ('save', save(password, hashPassword));
    }
}

module.exports = autoHashPassword