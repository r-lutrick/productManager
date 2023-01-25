import React, { useState } from 'react'

const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, detDescription] = useState("")

    const handleSubmit = () => {
        
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <div className='w-50 m-auto'>
                <form onClick={handleSubmit}>
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className='col-sm-10'>
                            <input className='form-control' type="text" onChange={(e) => {setTitle(e.target.value)}} />
                        </div>
                    </div>
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        <label className="col-sm-2 col-form-label">Price</label>
                        <div className='col-sm-10'>
                            <input className='form-control' type="text" onChange={(e) => {setPrice(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="mb-3 row bg-dark bg-opacity-10 p-2 rounded">
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div className='col-sm-10'>
                            <input className='form-control' type="text" onChange={(e) => {detDescription(e.target.value)}}/>
                        </div>
                    </div>
                    <button className='btn btn-outline-dark w-50'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default ProductForm