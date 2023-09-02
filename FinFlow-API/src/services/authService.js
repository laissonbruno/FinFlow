import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";


async function signup(body) {
    const hasPassword = bcrypt.hashSync(body.password, 10)
    const userExistis = await authRepository.findByEmail(body.email)
    if (userExistis) throw new Error("user already exists!")

    return await authRepository.create({ ...body, password: hasPassword })
}

async function signin(body) {
    const userOk = await authRepository.findByEmail(body.email);
    const passwordOK = bcrypt.compareSync(body.password, userOk.password)

    if (!userOk) throw new Error("Email or password incorrect!")

    if (!passwordOK) throw new Error("Email or password incorrect!")



    return authRepository.generateToken(user._id);
}


async function userLogged(id) {
    const user = await authRepository.findById(id)

    if (!user) throw new Error("User not found")
    return user
}

export default { signup, signin, userLogged }