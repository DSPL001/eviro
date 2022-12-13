import React, { useEffect, useState} from 'react'
import Barcharts from 'react-apexcharts'
import { useSelector } from 'react-redux';





const PE_open_interest  =()=> {
 
    const { getStockdata: gsds} = useSelector(x => x.seDerivative); 
  //  console.log('api data',gsds) 
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
        name:'cechangeinOpenInterest',
         data: [100, 91, 84, 75, 66, 58, 50, 42, 33, 25, 17, 9]
    }])

               
        
  

   useEffect(() => {

        const  peOpenInterest=[]
        const  strikePrice=[]
   
        const getData = async () => {
        const value = gsds.pEopeninterest;
        setapivalue(value)
        // console.log('url',value)
        
            if(value!=apivalue){
                value.map(x=>{
                    peOpenInterest.push(x.peOpenInterest);
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
                 name:'peOpenInterest',
                  data: peOpenInterest
         
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


 
export default PE_open_interest
