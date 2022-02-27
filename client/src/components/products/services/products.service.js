import axios from "axios";
const PORT = process.env.PORT || 4000;
axios.defaults.baseURL = `http://localhost:${PORT}`;

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
const editProduct = async (id,product)=> {
    console.log("editing product : ",id,product);
    return await axios.patch(`/products/${id}`,product);
}
export 
{
    createProduct,
    listProducts,
    deleteProduct,
    editProduct,
    getProduct
}