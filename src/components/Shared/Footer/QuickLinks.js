
import { faCar, faCommentDots, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
    return (
        
        <ul className="list-unstyled">
        <li className="mt-5">
            <Link to="/" style={{textDecoration:'none'}} className="text-white">
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </Link>
        </li>
        <li className="mt-5" >
            <Link to="/" style={{textDecoration:'none'}} className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Book Ride</span>
            </Link>
        </li>
        <li className="mt-5">
            <Link to="/" style={{textDecoration:'none'}} className="text-white">
                <FontAwesomeIcon icon={faCar} /> <span>Vehicles</span>
            </Link>
        </li>
        <li className="mt-5">
            <Link to="/" style={{textDecoration:'none'}} className="text-white">
                <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
            </Link>
        </li>
    </ul>

); 
           
       
    
};

export default QuickLinks;;