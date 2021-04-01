import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import MenuCard from './MenuCard';


function GetMenuItems() {

    const [data, setData] = useState([]); 

    useEffect(() => {
        axios
        .get('/api/items')
        .then(res => {
          setData(res.data)
          console.log(data);
        })
        .catch(err =>{
          console.log('Error from menuList');
        })
    }, [])
      
               
    return(

      <div className="getMenuDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Menu List</h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Link to="/" className="btn btn-outline-warning float-right">
                  Home Page
                </Link>
                <Link to="/create-item" className="btn btn-outline-warning float-right">
                  + Add New Menu Item 
                </Link>
                <br /><br /><hr />
              </div>
            </div>

          <div className="list">
                {data && data.map( (item, i)=> (
                  <MenuCard  
                  key={i}
                  id={item._id}
                  name= {item.name}
                  description= {item.description}
                  price={item.price}
                  />
                ))}
          </div>
        </div>
      </div>
      
       )
    }

export default GetMenuItems
