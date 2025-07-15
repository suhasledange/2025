// export const usernameController = (req,res)=>{
//     const username = req.params.username;
//     res.send(`Welcome ${username}`)
// }
// export const searchController = (req,res)=>{
//     const keyword = req.query.keyword;
//     res.send(`Searching for ${keyword}`)
// }

export const userLogin = (req,res)=>{
    res.send('this is user login route')
}
export const userSingup = (req,res)=>{
    res.send('this is user Signup route')
}