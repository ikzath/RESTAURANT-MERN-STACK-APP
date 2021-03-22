import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


function ShowMenuItem(props) {

  const initialTutorialState = {
    name: "",
    description: "",
    price: ''
  };
  const [menu, setMenu] = useState(initialTutorialState);   
  const id = props.match.params.id;
  const history = useHistory();


  useEffect(() => {
    const getMenuItem = async () => {
      const url = `http://localhost:6600/api/items/${id}`;
      const result = await axios.get(url);

      setMenu(result.data);
      console.log("test: success");
    };
    getMenuItem();

  }, []);


// delete selected item

  const onDeleteClick=(e)=> {
    e.preventDefault();

    axios
      .delete(`http://localhost:6600/api/items/${id}`)
      .then(res => {
      history.push("/menu-items");
      })
      .catch(err => {
        console.log("Error form ShowMenuDetails_deleteClick");
      })
  };

  let menuItem = <div>
  <table className="table table-hover table-dark">
    {/* <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead> */}
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Title</td>
        <td>{ menu.name }</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Desription</td>
        <td>{ menu.description }</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Price</td>
        <td>{ menu.price }</td>
      </tr>      
    </tbody>
  </table>
</div>


    return (
        <div className="ShowBookDetails">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <br /> <br />
                <Link to="/menu-items" className="btn btn-outline-warning float-left">
                    Show Menu List
                </Link>
              </div>
              <br />
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Menu Item List</h1>
                <p className="lead text-center">
                    View Menu Item's Info
                </p>
                <hr /> <br />
              </div>
            </div>
            <div>
              { menuItem }
            </div>
  
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-outline-danger btn-lg btn-block"  onClick={onDeleteClick} >Delete Menu Item</button><br />
              </div>
  
              <div className="col-md-6">
                <Link to={`/update-item/${id}`} className="btn btn-outline-info btn-lg btn-block">
                      Edit Menu Item
                </Link>
                <br />
              </div>
  
            </div>
              {/* <br />
              <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
              <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}
  
          </div>
        </div>
      );
    }



export default ShowMenuItem
