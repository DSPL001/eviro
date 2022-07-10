import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// project imports

// project imports
import { clearMessage } from 'slices/message';
import Tierplans from './tierplans';

// ==============================|| SAMPLE PAGE ||============================== //

const TierPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    return (
        <Tierplans />
    )
}
export default TierPage;