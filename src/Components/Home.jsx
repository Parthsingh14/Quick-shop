import { Link, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import { useContext, useEffect, useState } from "react"
import { productContext } from "../Utils/Context"
import Loading from "./Loading"
import axios from "../Utils/Axios"

function Home() {
    const [products] = useContext(productContext)
    const {search} = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);
    const [filteredproducts,setfilteredproducts] = useState(null)

    const getproductsCategory = async ()=>{

        try{
            const {data}= await axios.get(`/products/category/${category}`)
            setfilteredproducts(data);
        }catch(err){
            console.log(err);
        }
    }
    

    useEffect(()=>{
        if(!filteredproducts || category == "undefined") setfilteredproducts(products)
        if(category != "undefined") getproductsCategory();
    }, [category,products]);


    return products ? ( 

        <>

            <Navbar />

            <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto"> 


                {filteredproducts && filteredproducts.map((item,index)=> (
                      <Link key={index} to ={`/details/${item.id}`} className="mr-3 mb-3 card p-3 border shadow-xl rounded w-[18%] h-[30vh] flex-col flex justify-center items-center">

                      {/*Image Div*/}
                      <div className="hover:scale-110 mb-5 w-full h-[80%] bg-contain bg-no-repeat bg-center" style = {{backgroundImage: `url(${item.image})`}}></div>
                      {/*Paragraph Div*/}
                      <h1 className="hover:text-blue-300">{item.title}</h1>
                    </Link>
                ))}
        
                   
            </div>


        </> 
    ): (<Loading/>)
}

export default Home
