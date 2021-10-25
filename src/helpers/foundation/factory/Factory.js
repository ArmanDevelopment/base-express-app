const factory = require('./faker-factory')

class Factory extends factory.FakerInstance {
    constructor(label, model) {
        super(model, function () {})
        this.callback = this.direction
        factory.registerFakerInstance(label, this)
    }

    direction (faker) {
        return {}
    }

    count(quantity = 1) {
        return (this.quantity = quantity) && this
    }

    make(attributes){
        return super.make(attributes)
    }
}

module.exports = Factory