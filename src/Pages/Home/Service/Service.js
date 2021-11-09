import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, Price, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <h5> ${Price}</h5>
            <Link to={`/Ditail/${id}`}>
                <button className="btn btn-warning">Ditail{name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;