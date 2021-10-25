function mixin (mixins = [], SupperParent = Object) {
    return mixins.reduce((A, B) => function (C) {
        return class extends A(B(C)) {}
    })(SupperParent)
}

module.exports = {mixin}