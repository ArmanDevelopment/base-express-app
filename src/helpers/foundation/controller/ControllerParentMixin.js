
const ControllerParent = mix => class ControllerParent extends mix{
    _parent;
    get parent () {
        return this._parent
    }
    set _setParent(parent) {
        if(new parent instanceof ControllerParent)
            return  this._parent = parent;

        throw new TypeError('the parent must inherit from the ControllerParent or its descendants')
    }
    static buildController(... args) {
        let controller = new this(... args)
        controller._setParent = this

        return controller
    }
}

module.exports = ControllerParent