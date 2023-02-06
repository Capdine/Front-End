import React from 'react';
import './Orders.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Accordion, AccordionDetails, AccordionSummary, Paper } from '@mui/material';
import { mockDataOrder } from '../../Data/mockData';
import { MdExpandMore, MdOutlineAccessTimeFilled } from 'react-icons/md';
import { SiAirtable } from 'react-icons/si';
import { FaUser } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';


const Orders = () => {
    const columns = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'meal', headerName: 'Meal', flex: 2 },
        { field: 'table', headerName: 'Table N' },
        { field: 'time', headerName: 'Time', flex: 1 },
        { field: 'price', headerName: 'Price', flex: 1 },
    ]
    return (
        <section className='orders'>
            <div className="title">
                <h1>Latest Orders</h1>
            </div>
            <Paper elevation={3} className='grid-content'>
                <DataGrid
                    rows={mockDataOrder}
                    columns={columns}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Paper>
            {/* for mobile */}
            <div className="mobile-order">
                <ul className='heading'>
                    <li>Table No</li>
                    <li>Time</li>
                    <li>Price</li>
                </ul>
                {mockDataOrder.map((item) => (
                    <Accordion>
                        <AccordionSummary expandIcon={<MdExpandMore className='header-icon' />} className='header'>
                            <ul>
                                <li><SiAirtable /><span>{item.table}</span></li>
                                <li><MdOutlineAccessTimeFilled /><span>{item.time}</span></li>
                                <li><RiMoneyDollarCircleFill /><span>{item.price}</span></li>
                            </ul>
                        </AccordionSummary>
                        <AccordionDetails className='details'>
                            <span className='user'><FaUser />{item.name}</span>
                            <ul>
                                <li><span><GiMeal />Burger</span><small>x2</small></li>
                                <li><span><GiMeal />Pizza | Family size</span><small>x1</small></li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </section>
    );
};

export default Orders;