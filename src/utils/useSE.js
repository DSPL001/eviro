import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stockCodes } from "slices/se-Basic";

const useSE = () => {
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);
    const { stockCodes: currentstockCodes } = useSelector((state) => state.seBasic);  
    useEffect(() => {
        if (authUser) {
            if (!currentstockCodes) {
                dispatch(stockCodes()).unwrap()
                    .then(succ => {
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }, [authUser, currentstockCodes, dispatch]);
};

export default useSE;