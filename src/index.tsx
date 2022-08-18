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
        .then((result) => setProducts(result))
    }, [])

    const addToCart = (product: Product) => {
        localStorage.setItem(product.name, JSON.stringify(product));

        let p: Product = JSON.parse(localStorage.getItem("as") || '{}');
    }

    return (
        <div className='row'>
            <div className='col-6 mt-4 ms-4'>
                <table className='table table-striped table-bordered table-hover'>  
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th>Price</th>
                            <th>Categories</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {products.map(product => (
                            <tr key={product.name}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category.name}</td>
                                <td><button className="btn btn-outline-success" onClick={() => addToCart(product)} >Add in cart</button></td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
            </div>
            <div className='col-6'> </div>
        </div>
    );
    
}


