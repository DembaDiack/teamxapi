import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

const createUser = async (user)=>{
    console.log(user);
    return await axios.post("/users",user);
}
const listUsers = async ()=>{
    return await axios.get("/users");
}
const deleteUser = async (id)=>{
    console.log("deleting user",id);
    return await axios.delete(`/users/${id}`);
}
const getUser = async (id)=>{
    return await axios.get(`/users/${id}`);
}
const editUser = async (user)=> {
    return await axios.patch(`/users/${user._id}`,user);
}

export 
{
    createUser,
    listUsers,
    deleteUser,
    getUser,
    editUser
}