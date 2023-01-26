import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList"
// import ProductDetail from "../components/ProductDetail";
// import ProductEdit from '../components/ProductEdit';

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8001/api/product/get')
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(`Getting data error: ${err}`))
    })
    
    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList products={products} />}
        </div>
    )
}

export default Main