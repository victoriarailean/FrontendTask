import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Table from 'react-bootstrap/Table';

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
        <div className='row'>
            <div className='col-6 mt-4 ms-4'>
            <Table striped bordered hover size="sm" mt-4 bg-danger>    
            <tr>
                <th scope="col">Name</th>
                <th>Price</th>
                <th>Categories</th>
            </tr>
            {products.map(product => (
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category.name}</td>
                </tr>
            ))}
        </Table>
            </div>
            <div className='col-6'> </div>
        </div>
    );



    
}
