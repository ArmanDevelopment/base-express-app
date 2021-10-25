
const ControllerParentMixin = mix => class ControllerParent extends mix{
    _parent;
    get parent () {
        return this._parent
    }
    set _setParent(parent) {
        if(new parent instanceof ControllerParentMixin)
            return  this._parent = parent;

        throw new TypeError('the parent must inherit from the ControllerParentMixin or its descendants')
    }
    static buildController(... args) {
        let controller = new this(... args)
        controller._setParent = this

        return controller
    }
}

module.exports = ControllerParentMixin