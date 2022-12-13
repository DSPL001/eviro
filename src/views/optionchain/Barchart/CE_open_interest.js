import React, { useEffect, useState} from 'react'
import Barcharts from 'react-apexcharts'
import { useSelector } from 'react-redux';





const CE_open_interest  =()=> {
 
    const { getStockdata: gsds} = useSelector(x => x.seDerivative); 


    // console.log('api data',gsds) 
    const [apivalue,setapivalue]= useState([])

    


    const [Object,setObject] =useState({    //x-Axis
        chart: {
            id: 'bar-chart',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: '50%'
            }
        },
        xaxis:{
         
            categories :['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany']
           
            
            
        }
    })
    const [Series,setSeries] = useState([{     //y-Axis
        name:'cEopeninterest',
        //data:yvalue
         data: [100, 91, 84, 75, 66, 58, 50, 42, 33, 25, 17, 9]
    }])

               
        
  

   useEffect(() => {

        const  ceOpenInterest=[]
        const  strikePrice=[]
   
        const getData = async () => {
        const value = gsds.cEopeninterest;
        setapivalue(value)
      //  console.log('url',value)
        
            if(value!=apivalue){
                value.map(x=>{
                    ceOpenInterest.push(x.ceOpenInterest);
                    strikePrice.push(x.strikePrice);
        
                })
                setObject({
                    //x-Axis
                    chart: {
                     id: 'bar-chart',
                     stacked: true,
                     toolbar: {
                         show: true
                     },
                     zoom: {
                         enabled: true
                     }
                 },
                 responsive: [
                     {
                         breakpoint: 480,
                         options: {
                             legend: {
                                 position: 'bottom',
                                 offsetX: -10,
                                 offsetY: 0
                             }
                         }
                     }
                 ],
                 plotOptions: {
                     bar: {
                         horizontal: true,
                         columnWidth: '50%'
                     }
                 },
                 xaxis:{
                  
                     categories : strikePrice
                    
                     
                     
                 }
               })
               setSeries([{
                 name:'cEopeninterest',
                  data: ceOpenInterest
         
               }])
        
            }
            else{
                console.log("error")
            }
    
  

    

      };

 
        getData();
       
    
        // console.log("ceprice",ceChangeinOpenInterest)
        // console.log("strikePrice",strikePrice)

   

      },[gsds]);
 
  // console.log("apivalue",apivalue)


   


  return (
   <>
    <Barcharts series={Series}  options={Object}   height= '480' type='bar' /> 
</>
        
  )

  }


 
export default CE_open_interest
