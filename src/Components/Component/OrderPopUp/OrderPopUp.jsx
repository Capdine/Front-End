import { useState } from 'react';
import { Fade, Modal, Paper } from '@mui/material';
import { MdCelebration } from 'react-icons/md';
import { CiBurger } from 'react-icons/ci';
import './OrderPopUp.scss';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    minHeight: '80%',
    background: "#fff2cd",
    border: 'none',
    boxShadow: 24,
};

const OrderPopUp = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* <button onClick={handleOpen}>Open modal</button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Paper elevation={3} sx={style}>
                        <div className="modal-content">
                            <div className="top">
                                <MdCelebration className='icon1' />
                                <MdCelebration className='icon2' />
                                <span>new order</span>
                                <div className='head-icon'><CiBurger /></div>
                            </div>
                            <div className="bottom">
                                <span className='item-header'>Items</span>
                                <div className="items">
                                    <div className="item">
                                        <div className='name'>
                                            <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                            <h5>Burger</h5>
                                        </div>
                                        <span>x2</span>
                                    </div>
                                    <div className="item">
                                        <div className='name'>
                                            <img src="https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                            <h5>Sandwich</h5>
                                        </div>
                                        <span>x1</span>
                                    </div>
                                    <div className="item">
                                        <div className='name'>
                                            <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                            <h5>Pasta</h5>
                                        </div>
                                        <span>x3</span>
                                    </div>
                                </div>
                                <div className="decision">
                                    <button className='accept' onClick={handleClose}>Accept</button>
                                    <button className='forward' onClick={handleClose}>Forward</button>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
};

export default OrderPopUp;