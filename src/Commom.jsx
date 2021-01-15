import React from 'react'
import { NavLink } from 'react-router-dom';
const Commom=(props)=>{ 
        return(
                <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6  pt-lg-0 order-2 order-lg-1 header-text d-flex justify-content-center flex-column">
                                    <h1>
                                        Grow your business with <strong className="brand-name">Vitsol</strong>
                                    </h1>
                                    <h2 className='my-3'>
                                        {props.name}
                                </h2>
                                    <div className='mt-4'>
                                        <NavLink to={props.visit} className='btn-get-start '>{props.btnname}</NavLink>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2  header-img">
                                        <img src="15.png" className="img-fluid" width="500px" height='20px' />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
        };
export default Commom;