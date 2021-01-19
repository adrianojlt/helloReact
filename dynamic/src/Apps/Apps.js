import React from 'react';
import { Link } from 'react-router-dom';

const Apps = () => {

    return (
        <>
            <div className="row">
                <h2> Apps </h2>
            </div>
            <div className="row">
                <ul>
                    <li>
                        <Link to="/Stars"> Stars </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Apps