import React from "react";
import Electronics from './electronics/electronics'
import Jewelery from './jewelery/jewelery.js'
import Clothes from './clothes/clothes'

export default function Products() {
  return (
  <React.Fragment>
    <h1>Electronics</h1>
    <Electronics />
    <br />
    <h1>Jewelery</h1>
    <Jewelery />
    <br />
    <h1>Clothes</h1>
    <Clothes />
    <br />
  </React.Fragment>
  );
}

// function Products() {
//     const [products, loading] = FetchProducts();
//     if (loading) {
//         return <div>Loading...</div>
//     }
//     return (
//         <div>
//         {products.map((product, index) => {
//             return (
//                 <div>
//                     <img style={{width: 50}} src={product.image} alt={product.category} />
//                     <p>No. {index}</p>
//                     <p>Category: {product.category}</p>
//                     <p>Description: {product.description}</p>
//                     <p>ID: {product.id}</p>
//                     <p>Price: {product.price}</p>
//                     <p>Title: {product.title}</p>
//                     <hr />
//                 </div>
//             )
//         })}
//     </div>
//     );
// }
// export default Products;