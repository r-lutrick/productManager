import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductShowAll from './ProductShowAll'


const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8001/api/product/create", {
            title: title,
            price: price,
            description: description
        })
            .then(res => navigate("/"))
            .catch(err => console.log(`Create Page error: ${err}`))

        setTitle('');
        setPrice('');
        setDescription('');
    }

    return (
        <div>
            <h1>Product Manager</h1>
            {/* Container */}
            <div className='w-50 m-auto'>
                {/* Form Submission */}
                <form onSubmit={handleSubmit}>
                    {/* Form divisions */}
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        {/* Title */}
                        <label className="col-sm-4 col-form-label">Title</label>
                        <div className='col-sm-8'>
                            <input
                                className='form-control'
                                type="text"
                                onChange={(e) => { setTitle(e.target.value) }}
                                value={title} />
                        </div>
                    </div>
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        {/* Price */}
                        <label className="col-sm-4 col-form-label">Price</label>
                        <div className='col-sm-8'>
                            <input
                                className='form-control'
                                type="text"
                                onChange={(e) => { setPrice(e.target.value) }}
                                value={price} />
                        </div>
                    </div>
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        {/* Description */}
                        <label className="col-sm-4 col-form-label">Description</label>
                        <div className='col-sm-8'>
                            <input
                                className='form-control'
                                type="text"
                                onChange={(e) => { setDescription(e.target.value) }}
                                value={description} />
                        </div>
                    </div>
                    <button className='btn btn-dark w-50' type='submit'>Create</button>
                </form>
            </div>
            <hr />
            <ProductShowAll handleSubmit={handleSubmit} />
        </div>
    )
}

export default ProductForm