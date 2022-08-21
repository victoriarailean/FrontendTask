import { Product } from 'models/product';
import React from 'react';

export default function CartComponent() {
    let products: Product[] = []

    let sum = 0;
    for (let [key, value] of Object.entries(localStorage)) {
      let product: Product = JSON.parse(value || '{}')
      products.push(product)
      sum += product.price;
    }

    const deleteForCart = (product: Product) => {
      localStorage.removeItem(product.name);
      window.location.reload()
    }

    return (
      <div className='row'>
        <div className='col'>
        <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th>Price</th>
                <th>Categories</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category.name}</td>
                  <td>
                    <button className="btn btn-outline-success" onClick={() => deleteForCart(product)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Total price:</td>
                <td>{sum.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col'></div>
      </div>
    )

}