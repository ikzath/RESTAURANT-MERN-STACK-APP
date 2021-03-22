import React from "react";
import { Link } from 'react-router-dom';


function Content() {
    return (
        <div>
            <div className="header__body">
                <div className="row">
                    <div className="col-sm-3 talk">
                        <h1>Warm</h1>
                        <h1>Welcome to Space-X Grill and Takeaways</h1>
                        <br />
                        <h6 className="bold-four">
                            Welcome to your first Martian cuisine experience                                    
                          </h6>
                        <br />
                        <Link to='/menu-items' className="btn btn-dark start start-two" >Get Menu Items </Link>

                    </div>
                    <img 
                        className = 'headerBody__logo'
                        src='https://www.hotel-hafen-flensburg.de/fileadmin/_processed_/a/a/csm_columbus-hotel-hafen-flensburg-restaurant-genusswirtschaft_f6abcd94be.jpg'      
                        alt = ''
                     />                       
                </div>
            </div>

            <section className="features-icons bg-light text-center det-ails">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex  icon-bra-ails">
                                    <i className="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>View all menu items</h5>
                                <p class="lead mb-0">Click on Menu Items.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>View individual item and update</h5>
                                <p class="lead mb-0">Click on Update Menu after loggin in.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-check m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>View individual item and delete</h5>
                                <p class="lead mb-0">Login - then click on list item detail</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;