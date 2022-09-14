import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stockCodes } from "slices/se-Basic";
import { quoteData } from 'slices/se-derivative';

const useSE = () => {
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);
    const { stockCodes: currentstockCodes } = useSelector((state) => state.seBasic);  
    const { quotemaster: currentquotemaster } = useSelector((state) => state.seDerivative);  
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
            if (!currentquotemaster) {
                dispatch(quoteData()).unwrap()
                    .then(succ => {
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }            
        }
    }, [authUser, currentstockCodes,currentquotemaster, dispatch]);
};

export default useSE;