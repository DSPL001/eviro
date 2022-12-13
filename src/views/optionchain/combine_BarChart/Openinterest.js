import * as React from 'react';
import { useState,useEffect} from 'react'
import Barcharts from 'react-apexcharts'
import { useSelector } from 'react-redux';


const Openinterest =()=>{
  const { getOptionChain: optionchaindata} = useSelector(x => x.seDerivative); 

    
const [Object,setObject] =useState({    //x-Axis
    Option: {
        // id: 'bar-chart',
        // stacked: false,
        // // toolbar: {
        // //     show: true
        // // },
        // zoom: {
        //     enabled: true
        // }
      
    },
    crosshairs: {
      show: true,
      width: 1,
      position: 'back',
      opacity: 0.9,        
      stroke: {
          color: '#b6b6b6',
          width: 0,
          dashArray: 0,
      }
    },
    plotOptions: {
                  bar: {
                    horizontal: false,
                     columnWidth: '50%',
        
                  },
                  crosshairs: {
                    show: true,
                    width: 1,
                    position: 'top',
                    opacity: 0.9,        
                    stroke: {
                        color: '#b6b6b6',
                        width: 0,
                        dashArray: 0,
                    }
                  }

                },
                dataLabels: {
                    enabled: true
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                  },
                  stripLines:{
                      value : [20000]
                  },
                  annotations: {
                    xaxis: [
                      {
                        x: 'Oct 06',
                        borderColor: '#00E396',
                        strokeDashArray: 25,
                        label: {
                          borderColor: '#00E396',
                          orientation: 'horizontal',
                          text: 'X Annotation'
                        }
                      }
                    ]
                  },
                  
                xaxis:{
                
                    categories :['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany']
                },

    })

  const [Series,setSeries] = useState({
          series:[{     //y-Axis
      
            name: 'CEChangeinOpeninterest',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66,76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'CEOpeninterest',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94,44, 55, 57, 56, 61, 58, 63, 60, 66]
          }],
          crosshairs: {
            show: true,
            position: 'back',
            stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 0,
            },
        },

})

   useEffect(()=>{
    const underlyingValue = optionchaindata.underlyingValue
    const optionChainValue=optionchaindata.optionChain
    const optionchain_strikePrice =optionChainValue.map((x)=>x.strikePrice)
    const Right_side=optionchain_strikePrice.filter((x)=>x < underlyingValue)
    const Left_side=optionchain_strikePrice.filter((x)=>x > underlyingValue)
    const left= Left_side.slice(0,10)
    const right=Right_side.reverse().slice(0,10).reverse();
    const value =right.concat(left)
    const ceOpenInterest = value.map((data) => optionChainValue.find(o => o.strikePrice === data)) ;
    const optionChain_CEOpen_interest=ceOpenInterest.map((x)=>x.ceOpenInterest)
    const optionChain_PEOpen_interest=ceOpenInterest.map((x)=>x.peOpenInterest)
    var Under_Line_value = value.reduce((prev, curr)=> {
      return (Math.abs(curr - underlyingValue) < Math.abs(prev - underlyingValue) ? curr : prev);
    });

    setObject({
         //x-Axis
    Option: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
          show: true
      },
      zoom: {
          enabled: true
      }
 
   },
   crosshairs: {
    show: true,
    width: 1,
    position: 'back',
    opacity: 0.9,        
    stroke: {
        color: '#b6b6b6',
        width: 0,
        dashArray: 0,
    }
  },

  plotOptions: {
                bar: {
                  horizontal: false,
                   columnWidth: '70%',
                      },
              },
              dataLabels: {
                  enabled: false
                },
                stroke: {
                  show: true,

                  width: 2,
                  colors: ['transparent']
                },
              annotations: {
                xaxis: [
                  {
                    x: Under_Line_value,
                    borderColor: '#ff00e7',
                    fillColor: '#ff00e7',
                    strokeDashArray: 10000,
                    columnWidth: '70%',
                    label: {
                      borderColor: '#ff00e7',
                      orientation: 'horizontal',
                      text: underlyingValue,
                      style: {
                        background: '#fff',
                        color: '#ooo',
                        fontSize: '12px',
                        fontWeight: 400,
                        fontFamily: undefined,
                        cssClass: 'apexcharts-xaxis-annotation-label',
                    },
                    }
                  }
                ]
              },
              xaxis:
             {
              
                categories : value
            },


    })
    setSeries({
      series: [{     //y-Axis
      
      name: 'CEOpeninterest',
      data: optionChain_CEOpen_interest
    }, {
      name: 'PEOpeninterest',
      data:  optionChain_PEOpen_interest
    }],
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
          color: '#b6b6b6',
          width: 1,
          dashArray: 0,
      },
  },
})



   },[optionchaindata])    



return(
    <Barcharts series={Series.series}   options={Object}    height= '600' width='1200' type="bar"  /> 

)
}
export default Openinterest


