import AuthService from "../services/AuthService"

const Constants= {
    token: "?token=" + !AuthService.getCurrentUser().result ? null : AuthService.getCurrentUser().result
}

export {Constants}