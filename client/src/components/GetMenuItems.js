import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import MenuCard from './MenuCard';


function GetMenuItems() {

    const [data, setData] = useState([]); 

    const instance = axios.create({
      // .. where we make our configurations
          baseURL: 'http://localhost:6600/api/items'
      });

    useEffect(() => {
        axios
        .get(instance, { headers: {"Access-Control-Allow-Origin": "*"}} )
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

            <div className="col-md-11">
              <Link to="/create-item" className="btn btn-outline-warning float-right">
                + Add New Menu Item
              </Link>
              <br />
              <br />
              <hr />
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
