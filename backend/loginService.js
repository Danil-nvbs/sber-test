const createHttpError = require("http-errors")

module.exports = ({ username, password }) => {
    if (username === 'login1' && password == 'pass1') return { ok: true }
    else throw new createHttpError(401, 'Некорректый логин или пароль')
}