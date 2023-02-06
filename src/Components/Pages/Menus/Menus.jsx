import React from 'react';
import './Menus.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Accordion, AccordionDetails, AccordionSummary, Paper } from '@mui/material';
import { mockDataMenus } from '../../Data/mockData';
import { MdExpandMore, MdOutlineAccessTimeFilled } from 'react-icons/md';
import { SiAirtable } from 'react-icons/si';
import { FaUser } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

const Menus = () => {
    const columns = [
        { field: 'meal', headerName: 'Meal', flex: 1, renderCell: ({row:{imgUrl, meal}})=>{
            return (
                <div className='meal'>
                    <img src={imgUrl} alt="" />
                    <span>{meal}</span>
                </div>
            )
        } },
        { field: 'time', headerName: 'Prep. Time', flex: 1 },
        { field: 'price', headerName: 'Price', flex: 1 },
    ]

    return (
        <div className='menus'>
            <div className="title">
                <h1>Menus</h1>
            </div>
            <Paper elevation={3} className='grid-content'>
                <DataGrid
                    rows={mockDataMenus}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Paper>
            {/* for mobile */}
            <div className="mobile-menu">
                <ul className='heading'>
                    <li>Meal</li>
                    <li>Time</li>
                    <li>Price</li>
                </ul>
                <div className='header'>
                {mockDataMenus.map((item) => (
                        <ul>
                            <li><img src={item.imgUrl} alt="" /><span >{item.meal}</span></li>
                            <li><MdOutlineAccessTimeFilled /><span>{item.time}</span></li>
                            <li><RiMoneyDollarCircleFill /><span>{item.price}</span></li>
                        </ul>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Menus;