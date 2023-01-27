import React, { useState } from 'react'
import axios from 'axios'


const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    // Error handling state
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8001/api/product/create", {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                setErrors({})
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorObj = {}
                // console.log(Object.keys(errorResponse))
                for (const key of Object.keys(errorResponse)) {
                    // console.log(errorResponse[key].message)
                    errorObj[key] = errorResponse[key].message
                    // errorArr.push(errorResponse[key].message)
                }
                // console.log(errorObj)
                setErrors(errorObj)
            })
        if (!errors) {
            setTitle('');
            setPrice('');
            setDescription('');
        }
    }

    return (
        <div>
            <h1>Product Manager</h1>
            {/* Container */}
            <div className='w-50 m-auto'>
                {/* Form Submission */}
                <form onSubmit={handleSubmit}>
                    {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                    {/* Form divisions */}
                    <p style={{ margin: 0, color: "red" }}>{errors.title}</p>
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
                    <p style={{ margin: 0, color: "red" }}>{errors.price}</p>
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
                    <p style={{ margin: 0, color: "red" }}>{errors.description}</p>
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
        </div>
    )
}

export default ProductForm