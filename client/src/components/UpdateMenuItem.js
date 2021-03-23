import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


function UpdateMenuItem(props) {

      const initialTutorialState = {
        name: "",
        description: "",
        price: null
      };
      const [menu, setMenu] = useState(initialTutorialState);   
      const id = props.match.params.id;
      const history = useHistory();


      useEffect(() => {
        const getMenuItem = async () => {
          const url = `/api/items/${id}`;
          const result = await axios.get(url);

          setMenu(result.data);
          console.log("test: success");
        };
        getMenuItem();

      }, []);

      const handleChange = (event) => {
        setMenu({...menu, [event.target.name]: event.target.value})
    }

      const postData = e => {
          e.preventDefault();

        axios
        .put(`/api/items/${id}`, menu)
        .then(function (response) {
            history.push(`/show-item/${id}`);
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        }) 
      };
  
    return (
        <div className="UpdateBookInfo">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <Link to='/menu-list'>
                {/* <Link to="/" className="btn btn-outline-warning float-left"> */}
                    Show Menu List
                </Link>
              </div>
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Edit Menu Item</h1>
                <p className="lead text-center">
                    Update Menu's Info
                </p>
              </div>
            </div>
  
            <div className="col-md-8 m-auto">
            <form  >
              <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input
                  type='text'
                  placeholder='name of menu item'
                  name='title'
                  className='form-control'
                  value={menu.name}
                  onChange={handleChange}
                />
              </div>
              <br />
  
              <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Description'
                        name='description'
                        className='form-control'
                        value={menu.description}
                        onChange={handleChange}
                        required
                        />                  
                    </div>
  

              <div className='form-group'>
              <label htmlFor="price">Price</label>
                <input
                  type='text'
                  placeholder='price'
                  name='isbn'
                  className='form-control'
                  value={menu.price}
                  onChange={handleChange}
                />
              </div>  
  
              <button type="submit" className="btn btn-outline-info btn-lg btn-block" onClick={postData} >Update Menu</button>
              </form>
            </div>
  
          </div>
        </div>
      );
}

export default UpdateMenuItem
