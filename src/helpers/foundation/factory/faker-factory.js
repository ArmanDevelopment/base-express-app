const faker = require('faker')
const registeredFakes = {}

class FakerInstance {
    /**
     * Constructor for the class.
     * @param  {class} model  The type of model to initialize.
     * @param  {object} attributes  The fake attributes.
     * @return {FakerInstance}
     */
    constructor (model, callback) {
        this.model = model
        this.callback = callback
        this.quantity = 1
    }

    /**
     * Make a new model.
     * @param  {object} attributes  Attributes to override the faker data.
     * @return {object|array}
     */
    create (attributes = {}) {
        let modelOrArray = this.make(attributes)
        return Array.isArray(modelOrArray) ? modelOrArray.map(model => model.create()) : modelOrArray.create()
    }

    /**
     * Make a new model.
     * @param  {object|function} attributes  Attributes to override the faker data.
     * @return {object|array}
     */
    make (attributes= {}) {
        // if(typeof attributes != 'function')
        //     attributes = () => attributes

        if (this.quantity === 1) {
            return this.createModel(attributes(faker))
        }

        const models = []
        for (let i = 0; i < this.quantity; i++) {
            models.push(this.createModel(attributes(faker)))
        }
        return models
    }

    /**
     * Create a new instance of the model.
     * @param  {object} attributes  The attributes to fill in the model.
     * @return {object}
     */
    createModel (attributes) {
        return new this.model(Object.assign(this.callback(faker), attributes))
    }
}

/**
 * A function for generating fake instances of models.
 * @param  {string} label  The type of fake to make.
 * @param  {integer} quantity  The number of fakes to make.
 * @return {FakerInstance}  A faker instance.
 */
function factory (label, quantity = 1) {
    let faker = registeredFakes[label]
    faker.quantity = quantity

    return faker
}

/**
 * Register a new factory.
 * @param  {string}  label  The label for the factory.
 * @param  {class}  model  The type of object to create.
 * @param  {Function}  callback  A callback that returns an array of faker data.
 */
factory.register = (label, model, callback) => {
    registeredFakes[label] = new FakerInstance(model, callback)
}

/**
 * Register a new factory by use FakerInstance.
 * @param  {string}  label  The label for the factory.
 * @param  {FakerInstance}  fakerInstance  The fake creating interface.
 */
factory.registerFakerInstance = (label, fakerInstance) => {
    if(fakerInstance instanceof FakerInstance)
        registeredFakes[label] = fakerInstance
}

/**
 * Get a registered faker instance with the factory.
 * @param  {string} label  The label of the faker instance.
 * @return {FakerInstance}  The faker instance.
 */
factory.getRegisteredFaker = (label) => {
    return registeredFakes[label]
}

factory.FakerInstance = FakerInstance
factory.faker = faker

module.exports = factory