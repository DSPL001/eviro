
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
// project imports
import MainCard from 'ui-component/cards/MainCard';
// project imports
import { openModal } from 'slices/modal';
import { clearMessage } from 'slices/message';
import AddTier from './addTier';
import Tierplans from './tierplans';

// ==============================|| SAMPLE PAGE ||============================== //

const TierPage = () => {    
    const { isOpen } = useSelector((store) => store.modal);
    const dispatch = useDispatch();
    const handleClickOpen = () => {        
        dispatch(openModal());
    };    

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    return (        
        <MainCard title="Tier">
            {isOpen && <AddTier />}
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Tier
                </Button>                
            </div>
            <Tierplans />
        </MainCard>
    )
}
export default TierPage;