import axios from "axios";
import { useEffect ,useState} from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";

import { ProductsGrid } from "./ProductsGrid";
// import { products } from "../../staring_code/data/products";

export function HomePage({cart}) {
  const [products,setProducts] =useState([]);
 

  // axios.get() sends a GET request to the backend server URL
  useEffect(() => {
    // lets us control when some code runs
    axios
      .get("/api/products")
      // .then() runs only when the server successfully sends back a response
      .then((response) => {
        // response.data contains the actual data returned by the backend API
        setProducts(response.data);
      });

     
      


  },[]); // Dependency Array lets us control when useEffect runs when we empty [] it only reun once 
        // StrictMode call useEffect tow time to catch bug 


  // fetch('http://localhost:3000/api/products')
  // .then((response)=>{
  //     return response.json();
  //     }).then((data)=>{
  //       console.log(data);
  // });

  return (
    <>
      <title>Ecommeerce Project</title>
      <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}
