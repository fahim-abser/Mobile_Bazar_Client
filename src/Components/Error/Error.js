import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <section className="flex">
                <div className=" ">
                    <div className=" text-center">
                        
                            <h2>Error <span className='oranged'>404</span></h2>
                        
                        <h3>Sorry, we couldn't find this page.</h3>
                        <p>But dont worry, you can find other things on our homepage.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;