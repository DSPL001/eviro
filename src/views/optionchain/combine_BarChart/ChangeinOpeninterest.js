import * as React from 'react';
import { useState, useEffect } from 'react'
import Barcharts from 'react-apexcharts'
import { useSelector } from 'react-redux';


const ChangeinOpeninterest = () => {
  const { getOptionChain: optionchaindata } = useSelector(x => x.seDerivative);
   console.log("optionchaindata",optionchaindata)


  const [Object, setObject] = useState({    //x-Axis
    Option: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      },
 
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
       // borderRadius: 10,

      }
    },
    dataLabels:
    {
      enabled: false,
      position: 'top',
      colors:'black'
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
   annotations: {
    
      xaxis: [
        {
          x: 'Oct 06',
          borderColor: '#00E396',
          opacity: 0.3,
          strokeDashArray: 100,
        
          label: {
            borderColor: '#00E396',
            fillColor: '#c2c2c2',
            orientation: 'horizontal',
            text: 'X Annotation',
            style: {
              background: '#fff',
              color: '#777',
              fontSize: '12px',
              fontWeight: 400,
              fontFamily: undefined,
              cssClass: 'apexcharts-xaxis-annotation-label',
          },
          }
        }
      ]
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'],
        crosshairs: {
          show: true,
          position: 'back',
          stroke: {
              color: '#b6b6b6',
              width: 1,
              dashArray: 0,
          },
      }, tooltip: {
          enabled: true,
          offsetX: 0,
      },
    },


  })

  const [Series, setSeries] = useState([{     //y-Axis

    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 44, 55, 57, 56, 61, 58, 63, 60, 66]
  }])

  useEffect(() => {
    const underlyingValue =   optionchaindata.underlyingValue
    const optionChainValue = optionchaindata.optionChain

    const optionchain_strikePrice = optionChainValue.map((x) => x.strikePrice)
    const Right_side = optionchain_strikePrice.filter((x) => x < underlyingValue)
    const Left_side = optionchain_strikePrice.filter((x) => x > underlyingValue)
    const left = Left_side.slice(0, 10)
    const right = Right_side.reverse().slice(0, 10).reverse();
    const value = right.concat(left)
    const ceOpenInterest = value.map((data) => optionChainValue.find(o => o.strikePrice === data));
    const optionChain_CEChangeinOpen_interest = ceOpenInterest.map((x) => x.ceChangeinOpenInterest)
    const optionChain_PEChangeinOpen_interest = ceOpenInterest.map((x) => x.peChangeinOpenInterest)
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
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
        }
      },
      dataLabels:
      {
        enabled: false,
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

        categories: value,
        crosshairs: {
          show: true,
          position: 'back',
          stroke: {
              color: '#b6b6b6',
              width: 1,
              dashArray: 0,
          },
      },
        tooltip: {
          enabled: true,
          offsetX: 0,
      },

      },
     
    
     
 
 
  
      


    })
    setSeries([{     //y-Axis

      name: 'CEChangeinOpeninterest',
      data: optionChain_CEChangeinOpen_interest
    }, {
      name: 'PEChangeinOpeninterest',
      data: optionChain_PEChangeinOpen_interest
    }

    ])
  }, [optionchaindata])


  return (
    <Barcharts series={Series} options={Object} height='600' width='1200' type='bar'  />

  )
}
export default ChangeinOpeninterest


