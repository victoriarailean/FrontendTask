import { Product } from 'models/product';
import React, { useEffect, useState } from 'react';

export default function ProductsComponent() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

  const addToCart = (product: Product) => {
    localStorage.setItem(product.name, JSON.stringify(product));
    window.location.reload()
  };

  const removeFromCart = (product: Product) => {
    localStorage.removeItem(product.name)
    window.location.reload()
  }

  const AddRemoveButton = (product: Product) => {
    if (!localStorage.getItem(product.name)){
      return (<button className="btn btn-outline-success" onClick={() => addToCart(product)}>Add in cart</button>)
    } else {
      return (<button className="btn btn-outline-danger" onClick={() => removeFromCart(product)}>Remove</button>)
    }
  } 

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col mt-4'>
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
                  <td>{AddRemoveButton(product)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='col'>
          <a href="/cart"><button className="btn btn-secondary mt-4" name="button 1">View cart product</button></a>
        </div>
      </div>
    </div>
  );
}
function setClickedButton(name: string) {
  throw new Error('Function not implemented.');
}

