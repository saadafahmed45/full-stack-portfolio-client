import React from 'react';
import error from '../../Images/icons/error.svg'
const Error = () => {
    return (
        <div>
            <section>
                <div className="error text-center">
                    <h1>This Page is Not Found!</h1>
                    <img style={{ width:"35%"}} src={error} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Error;