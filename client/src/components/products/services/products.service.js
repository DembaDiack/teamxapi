import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

const createProduct = async (product)=>{
    console.log(product);
    return await axios.post("/products",product);
}
const listProducts = async ()=>{
    return await axios.get("/products");
}
const deleteProduct = async (id)=>{
    console.log("deleting prod",id);
    return await axios.delete(`/products/${id}`);
}
const getProduct = async (id)=>{
    return await axios.get(`/products/${id}`);
}
const editProduct = async (product)=> {
    return await axios.patch(`/products/${product._id}`,product);
}
export 
{
    createProduct,
    listProducts,
    deleteProduct,
    editProduct,
    getProduct
}