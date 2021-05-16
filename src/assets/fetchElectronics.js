import { useState, useEffect } from "react";
import axios from "axios";

export function FetchElectronics() {

  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);

async function fetchElectronic() {
    try{
        setLoading(true)
        let products = await axios.get('https://fakestoreapi.com/products/')
        console.log("products",products.data);
        setProducts(products.data)
    }
    catch(err){
     console.log("error", err)
    }
    finally{
        setLoading(false)
    }
}

useEffect(() => {
    fetchElectronic()
    }, [])
    return [products,loading]
}