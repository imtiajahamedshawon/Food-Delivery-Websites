
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices'
import './ServiceDitails.css'

const ServiceDitails = () => {
  const { serviceId } = useParams();
  const [services] = useServices();
  const { bokingDelivery } = useAuth()
  const [newSelected, setService] = useState({});
  useEffect(() => {
    const findService = services.find((ser) => ser.id == parseInt(serviceId));
    setService(findService);
  }, [services, serviceId]);

  return (
    <div className="my-5">
      <Row>
        <Col>
          <img width="100%" src={newSelected?.img} alt="" />
        </Col>
        <Col className="p-3">
          <h1>{newSelected?.name}</h1>
          <h4>{newSelected?.description}</h4>
          <Col className="p-3">
            <Row>
              <Col>
                <h1>Price: {newSelected?.Price}$</h1>

                <div className="container">
                  <Link to={`/AddService/`}>
                    <button className="btn btn-warning">Booking Delivery </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </div>
  );
};
export default ServiceDitails
