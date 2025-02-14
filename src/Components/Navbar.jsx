import { useContext } from "react"
import { productContext } from "../Utils/Context"
import { Link } from "react-router-dom"

function Navbar() {

    const [products]  =  useContext(productContext)
    let distinct_category = products && products.map(product => product.category)
    distinct_category = Array.from(new Set(distinct_category))
    

    const color = ()=> {
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.6)`
    }

    return (


        <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
               <Link className="py-3 px-5 border rounded border-blue-400 text-blue-600" to="/create">Add new Product</Link>
               <hr className="w-[80%] my-3" />
               <h1 className="text-2xl w-[80%] mb-2">Category Filter</h1>
               <div className="w-[80%]">

                  {distinct_category.map((item,index)=>(
                      <Link key={index} to={`/?category=${item}`} className="items-center flex mb-3">
                      <span style={{backgroundColor: color()}} className="rounded-full mr-2 w-[15px] h-[15px] text-xs"></span>{" "}
                       {item}
                  </Link>
                  ))}
                    
                </div>
        </nav>
    )
}

export default Navbar
