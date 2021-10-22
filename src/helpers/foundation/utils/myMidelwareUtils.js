
function only (... methods) {
    return {only: methods}
}

function except(... methods) {
    return {except: methods}
}

module.exports = {only, except}