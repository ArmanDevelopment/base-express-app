function mixin (mixins = []) {
    return mixins.reduce((A, B) => function (C) {
        return class extends A(B(C)) {}
    })(Object)
}

module.exports = {mixin}