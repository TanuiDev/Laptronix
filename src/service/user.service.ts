import * as userRepositories from '../repository/user.repository'

export const fetchAllUsers = async ()=>{
    const results = await userRepositories.getAllUsers()
    return results
}

