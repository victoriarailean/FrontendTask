import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

interface Product{
    name: string
    price: number
    category: Category
}

interface Category{
    id: string
    name: string
}


render(<div><MyComponent></MyComponent></div>, document.getElementById('root'));

function MyComponent(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(
            (result) => {
                setProducts(result)
            }
        )
    })

    return (

        <table>
            
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Categories</th>
  </tr>
  {products.map(product => (
  <tr>
  <td>{product.name}</td>
  <td>{product.price}</td>
  <td>{product.category.name}</td>
</tr>




        // <ul>
        //   {products.map(product => (
        //     <li>
        //       {product.name}
        //       {product.category.id}
        //       {product.category.name}
        //     </li>
          ))}
      </table>
    );
}
