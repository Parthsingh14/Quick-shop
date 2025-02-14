import { useContext, useState } from "react"
import { productContext } from "../Utils/Context"
import { nanoid } from "nanoid"
import { useNavigate } from "react-router-dom"

function Create() {
    const navigate = useNavigate();
    const [products,setproducts] = useContext(productContext)
    const [title,setTitle] = useState("")
    const [image,setImage] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")


    const AddProductHandler = (e)=>{
        e.preventDefault();

        if(!title ||!image ||!category ||!price ||!description){
            alert("All fields are required")
            return
        }

        const Product = {
            id:nanoid(),
            title,
            image,
            category,
            price,
            description
        };

        setproducts([...products,Product])
        navigate("/")
    }


    return (
       <form onSubmit={AddProductHandler} className="p-[5%] w-screen h-screen flex flex-col items-center">
        <h1 className="text-2xl w-1/2 mb-5">Add new product</h1>
        <input type="text" placeholder="Title" className="text-1xl bg-zinc-300 rounded p-3 w-1/2 mb-3" onChange={(e)=> setTitle(e.target.value)} value={title}/>
        <input type="url" placeholder="Image-link" className="text-1xl bg-zinc-300 rounded p-3 w-1/2 mb-3" onChange={(e)=> setImage(e.target.value)} value={image}/>
        <div className="w-1/2 flex justify-between">
        <input type="text" placeholder="Category" className="text-1xl bg-zinc-300 rounded p-3 w-[48%] mb-3" onChange={(e)=> setCategory(e.target.value)} value={category}/>
        <input type="number" placeholder="Price" className="text-1xl bg-zinc-300 rounded p-3 w-[48%] mb-3" onChange={(e)=> setPrice(e.target.value)} value={price}/>
        </div>

        <textarea rows="10" className="text-1xl bg-zinc-300 rounded p-3 w-1/2 mb-3" placeholder="Enter product description" onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>

        <button className="py-3 px-5 border rounded border-blue-400 text-blue-600">Add new Product</button>

       </form>
    )
}

export default Create
