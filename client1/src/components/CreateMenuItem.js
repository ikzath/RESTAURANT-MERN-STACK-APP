import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import axios from 'axios';



function CreateMenuItem() {

    const history = useHistory();
    const [data, setData] = useState({ 
        name: '',
        description: '',
        price: ''
    });

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const postData = e => {
        e.preventDefault();

        axios
        .post('http://localhost:6600/api/items', data)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        }) 
      };
    
    
    return (
        
        <div className="CreateBook">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                    Back to your Menu
                </Link>
                </div>
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Add Menu Item</h1>
                <p className="lead text-center">
                    Create new menu item
                </p>

                <form onSubmit={postData}>
                    <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Title of the menu'
                        name='name'
                        className='form-control'
                        value={data.name}
                        onChange={handleChange}
                        required
                          />
                    </div>
                    <br />

                    <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Description'
                        name='description'
                        className='form-control'
                        value={data.description}
                        onChange={handleChange}
                        required
                        />                  
                    </div>

                    <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Price'
                        name='price'
                        className='form-control'
                        value={data.price}
                        onChange={handleChange}
                        required
                        />                  
                    </div>

                    <input
                        type="submit"
                        className="btn btn-outline-warning btn-block mt-4"
                    />
                </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateMenuItem;
