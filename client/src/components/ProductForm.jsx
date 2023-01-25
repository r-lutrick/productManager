import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, detDescription] = useState("")

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
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <div className='w-50 m-auto'>
                <form onClick={handleSubmit}>
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        <label className="col-sm-4 col-form-label">Title</label>
                        <div className='col-sm-8'>
                            <input className='form-control' type="text" onChange={(e) => {setTitle(e.target.value)}} />
                        </div>
                    </div>
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        <label className="col-sm-4 col-form-label">Price</label>
                        <div className='col-sm-8'>
                            <input className='form-control' type="text" onChange={(e) => {setPrice(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        <label className="col-sm-4 col-form-label">Description</label>
                        <div className='col-sm-8'>
                            <input className='form-control' type="text" onChange={(e) => {detDescription(e.target.value)}}/>
                        </div>
                    </div>
                    <button className='btn btn-outline-dark w-50' type='submit'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default ProductForm