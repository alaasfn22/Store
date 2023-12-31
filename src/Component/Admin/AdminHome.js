import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faChartLine, faDollarSign, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Sales Line Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const AdminHome = () => {

    return (
        <div className="m-auto px-2">
            <Row className='py-2 g-3 admin-home-content'>
                <Col sm={6} md={3} >
                    <div className='details-card rounded-3 p-3  w-100 shadow d-flex justify-content-between align-items-center'>
                        <div className='info'>
                            <h3 className='number'>2500</h3>
                            <p className='title'>products</p>
                        </div>
                        <FontAwesomeIcon icon={faCartPlus} className='icons' />
                    </div>
                </Col>
                <Col sm={6} md={3} >
                    <div className='details-card rounded-3 p-3  w-100 shadow d-flex justify-content-between align-items-center'>
                        <div>
                            <h3 className='number'>2500</h3>
                            <p className='title'>Sales</p>
                        </div>
                        <FontAwesomeIcon icon={faDollarSign} className='icons' />
                    </div>
                </Col>
                <Col sm={6} md={3} >
                    <div className='details-card rounded-3 p-3  w-100 shadow d-flex justify-content-between align-items-center'>
                        <div>
                            <h3 className='number'>2500</h3>
                            <p className='title'>Delivery</p>
                        </div>
                        <FontAwesomeIcon icon={faTruckMoving} className='icons' />
                    </div>
                </Col>
                <Col sm={6} md={3} >
                    <div className='details-card rounded-3 p-3  w-100 shadow d-flex justify-content-between align-items-center'>
                        <div>
                            <h3 className='number'>2500</h3>
                            <p className='title'>incress</p>
                        </div>
                        <FontAwesomeIcon icon={faChartLine} className='icons' />
                    </div>
                </Col>
            </Row>
            <Row className='mx-auto justify-content-center align-items-center   py-5'>
                <Col> <Line height="240px" options={options} data={data} /></Col>
                <Col> <Line height="240px" options={options} data={data} /></Col>
            </Row>
        </ div>

    )
}

export default AdminHome