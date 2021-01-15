import React from 'react'
import Card4 from './Card4'
import Sdata from './Sdata';
const Service = () => {
        return (
                <>
                        <div className="mt-5">
                                <h1 className="text-center">Our Service</h1>
                        </div>
                        <div className="container-fluid ">
       <div className="row mx-auto">
                        {Sdata.map((val, index) => {
                                return (
                                        <Card4
                                                key={index}
                                                imgsrc={val.imgsrc}
                                                title={val.title}
                                        />

                                )
                        })
                        }
                        </div>
                        </div>
                </>
        )
};
export default Service;