import { Link, useParams } from "react-router-dom"
// import axios from "../Utils/Axios"
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { productContext } from "../Utils/Context";

function Details() {
 
   const [products] = useContext(productContext)
   const [sinPro,setsinPro] = useState(null)
   const {id} = useParams();
   console.log(id);

//    const getSingleProducts = async () => {

//     try{
//          const singleproduct = await axios.get(`/products/${id}`);
//          console.log(singleproduct);
//          setsinPro(singleproduct.data);
//     }
//     catch(error){
//         console.log(error);
//     }
//    }

   useEffect(()=>{
       if(!sinPro){
        setsinPro(products.filter((p)=>p.id == id)[0]);
       }
   }, []);


    return ( sinPro ? 
        <div className="w-[70%] h-full m-auto flex justify-between items-center p-[10%]">
            
           <img className="w-[40%] h-[80%] object-contain" src={`${sinPro.image}`}></img>
           <div className="content w-[50%] ">

               <h1 className="text-3xl">{sinPro.title}</h1>
               <h3 className="text-zinc-400 my-5">{sinPro.category}</h3>
               <h2 className="text-red-300 mb-3"> $ {sinPro.price}</h2>
               <p className="mb-[5%]">{sinPro.description}</p>
               <Link className="py-2 px-5 border border-blue-300 text-blue-500 rounded">Edit</Link>
               <Link className="mx-1 py-2 px-5 border border-red-300 text-red-500 rounded">Delete</Link>
           </div>

        </div> : ( <Loading/>)
    )
}

export default Details
