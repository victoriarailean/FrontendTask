import { Category } from 'models/category';
import { Product } from 'models/product';
import React, { useEffect, useState } from 'react';

export default function ProductsComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([])
  const [filterCategory, setFilterCategory] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((res) => res.json())
      .then((result) => setProducts(result));
    
    fetch('http://localhost:3001/api/product/categories')
      .then((res) => res.json())
      .then((result) => setCategories(result));
    
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

  const onFilterClick = (id :string) => {
    setFilterCategory(id)
  }

  const productsList = (): Product[] => {
    if (filterCategory != ''){
      return products.filter((product) => product.category.id == filterCategory)
    } else {
      return products
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col mt-4'>
          <div className="dropdown mb-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              FIlter by category
            </button>
            
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" onClick={() => onFilterClick('')}>All</a>
              {categories.map((category) => (
                <a key={category.id} className="dropdown-item" onClick={() => onFilterClick(category.id)}>{category.name}</a>
              ))}
            </div>

          </div>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th>Price</th>
                <th>Categories</th>
              </tr>
            </thead>
            <tbody>
              {productsList().map((product) => (
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

