import * as userRepositories from '../repository/user.repository'

export const fetchAllUsers = async ()=>{
    const results = await userRepositories.getAllUsers()
    return results
}

export const getUserByEmail = async (emailAddress:string)=>{
    const user = await userRepositories.getUserByEmail(emailAddress)
    return user;

}
