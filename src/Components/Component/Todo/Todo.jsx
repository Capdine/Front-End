import React, { useState } from 'react';
import { Paper } from '@mui/material';
import './Todo.scss';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import AddEvent from '../AddEvent/AddEvent';

const Todo = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Paper elevation={3} className='todo'>
                <div className="header">
                    <div>
                        <h4>Todo List</h4>
                    </div>
                    <span onClick={handleOpen}>Add Event<MdOutlineAddCircleOutline /></span>
                </div>
                <div className="content">
                    <div className="item">
                        <span>Lunch meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Partners' meeting</span>
                        <small>10:30 AM</small>
                    </div>
                    <div className="item">
                        <span>Dinner meeting</span>
                        <small>10:30 AM</small>
                    </div>
                </div>
            </Paper>
            <AddEvent open={open} handleClose={handleClose}/>
        </>
    );
};

export default Todo;