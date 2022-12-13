import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Box, LinearProgress, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import clsx from 'clsx';


export default function OptionData_Table() {
  const { getOptionChain: optionchaindata } = useSelector(x => x.seDerivative); //Local storage from get *Option Table*
  console.log(optionchaindata)


  const [oi, setoi] = useState({
    ceImpliedVolatility: false,
    ceLastPrice: false,
    ceChange: false,
    peImpliedVolatility: false,
    peLastPrice: false,
    peChange: false,
    ceBidQty: false,
    ceBidprice: false,
    ceAskPrice: false,
    ceAskQty: false,
    peBidQty: false,
    peBidprice: false,
    peAskPrice: false,
    peAskQty: false
  })
  const [ltp, setltp] = useState({
    ceOpenInterest: false,
    cePchangeinOpenInterest: false,
    ceTotalTradedVolume: false,
    peOpenInterest: false,
    peChangeinOpenInterest: false,
    peTotalTradedVolume: false,
    ceBidQty: false,
    ceBidprice: false,
    ceAskPrice: false,
    ceAskQty: false,
    peBidQty: false,
    peBidprice: false,
    peAskPrice: false,
    peAskQty: false
  })
  const [bid, setbid] = useState({
    ceImpliedVolatility: false,
    ceLastPrice: false,
    ceChange: false,
    peImpliedVolatility: false,
    peLastPrice: false,
    peChange: false,
    ceOpenInterest: false,
    cePchangeinOpenInterest: false,
    ceTotalTradedVolume: false,
    peOpenInterest: false,
    peChangeinOpenInterest: false,
    peTotalTradedVolume: false
  })
  const [columnVisibilityModel, setColumnVisibilityModel] = useState(oi);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setColumnVisibilityModel(newAlignment);
    }
  };

  const columns = [

    {
      field: 'ceOpenInterest',
      headerName: 'OI',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1

    },
    {
      field: 'cePchangeinOpenInterest',
      headerName: 'CHNG IN OI',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'ceTotalTradedVolume',
      headerName: 'VOLUME',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'ceImpliedVolatility',
      headerName: 'IV',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'ceLastPrice',
      headerName: 'LTP',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'ceChange',
      headerName: 'CHNG',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'ceBidprice',
      headerName: 'BID',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'ceBidQty',
      headerName: 'BID QTY',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'ceAskPrice',
      headerName: 'ASK',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'ceAskQty',
      headerName: 'ASK QTY',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1,
      // cellClassName: (params) => {
      //   return clsx('super-app', {
      //     calls : params.value > 76
        
       
      //    } )
      // }
    
  },

    {
      field: 'strikePrice',
      headerName: 'STRIKE',
      headerAlign:'center',
      align:'center',
      sortable: false,
      headerClassName: 'super-app-theme--header',
      cellClassName: (params) => {
        // if (params.value === strikePrice_Underline_val) {
        //   return {
        //    onclick :  Underline_val,
          
        //   }
        // } 
        return clsx('super-app', {
          strike_undervale: params.value === strikePrice_Underline_val,
          strikePrice: params.value,
          textAlign: 'center',
        });
      },
    },

    {
      field: 'peBidQty',
      headerName: 'BID QTY',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'peBidprice',
      headerName: 'BID',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1

    },
    {
      field: 'peAskPrice',
      headerName: 'ASK',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'peAskQty',
      headerName: 'ASK QTY',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'peChange',
      headerName: 'CHNG',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'peLastPrice',
      headerName: 'LTP',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex :1
    },
    {
      field: 'peImpliedVolatility',
      headerName: 'IV',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex :1
    },
    {
      field: 'peTotalTradedVolume',
      headerName: 'VOLUME',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex :1
    },
    {
      field: 'peChangeinOpenInterest',
      headerName: 'CHNG IN OI',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex :1
    },
    {
      field: 'peOpenInterest',
      headerName: 'OI',
      headerAlign:'center',
      align:'center',
      sortable: false,
      flex :1
    }
  ];
  const [row, setrow] = useState(optionchaindata.optionChain.map((item, index) => ({ ...item, id: index + 0 }))) //Table row insert ID...
  const [Underline_val, setUnderline_val] = useState(optionchaindata.underlyingValue) //OptionChain Underline value get api
  console.log("under_value_api", Underline_val)
  const [strikePrice_Underline_val, setstrikeprice_Underline_val] = useState()
  const [Center_Val, setCenter_Val] = useState()


  useEffect(() => {
    const getvalue = () => {
      const optionChainValue = optionchaindata.optionChain
      const optionchain_strikePrice = optionChainValue.map((x) => x.strikePrice)

      var Under_Line_value = optionchain_strikePrice.reduce((prev, curr) => {
        return (Math.abs(curr - Underline_val) < Math.abs(prev - Underline_val) ? curr : prev);
      });
      setstrikeprice_Underline_val(Under_Line_value) //Find the underLine value from stiker price
      const Center_Array= row.find((x) => x.strikePrice === Under_Line_value);
      const Centervalue = Center_Array.id   //find table center index value
      setCenter_Val(Centervalue)
  

    }  
    getvalue();
  }, [optionchaindata])


console.log("strike",strikePrice_Underline_val)
console.log("center value",Center_Val)






  return (
    <>
    <ToggleButtonGroup sx={{justifyContent :'flex-end'}}
    value={columnVisibilityModel}
    exclusive
    onChange={handleAlignment}
    aria-label="text alignment"
    
  >
    <ToggleButton value={oi} aria-label="Option Chain PE and CE">
      <p>OI</p>
    </ToggleButton>
    <ToggleButton value={ltp} aria-label="Last price, volume, Change Price">
      <p>VOLUME</p>
    </ToggleButton>
    <ToggleButton value={bid} aria-label="ASK price, BID price">
      <p>BID</p>
    </ToggleButton>
  </ToggleButtonGroup>
  <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
>
    <div style={{ height: 1200, width: '80%' }}>
      
        <DataGrid rowHeight={20} align='center'
          sx={{
            boxShadow: 4,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: '#f78da7',
            },
            '& .super-app-theme--header': {
              backgroundColor: '#7bdcb5',
              color: '#000000',
              fontWeight: '600',
            },
            '& .super-app.strikePrice': {
              backgroundColor: '#ff943975',
              color: '#1a3e72',
            },
            '& .super-app.strike_undervale': {
              backgroundColor: '#7bdcb5',
              color: '#000000',
              fontWeight: '600',
              "&:hover":{
                border:"1px solid#00FF00",
                textDecorationLine:strikePrice_Underline_val,
                color:'red'
              }

            },
            '& .super-app--puts': {
              backgroundColor: '#b9d5ff91',
              color: '#1a3e72',
            },
            '& .super-app--calls': {
              backgroundColor: '#ff943975',
              color: '#1a3e72',
            },
            '& .super-app--white': {
              backgroundColor: '#abb8c3',
              color: '#333333',
            },
          }
          }
          experimentalFeatures={{ columnGrouping: true }}
          rows={row} columns={columns}
          const columnGroupingModel={[
            {
              groupId: 'CALLS',
              description: 'OPTION CHAIN CALLS',
              headerAlign: 'center',
              headerClassName: 'super-app--puts',
              children: [
                { field: 'ceOpenInterest'  }, { field: 'cePchangeinOpenInterest' },
                { field: 'ceTotalTradedVolume' }, { field: 'ceImpliedVolatility' },
                { field: 'ceLastPrice' }, { field: 'ceChange' },
                { field: 'ceBidQty' }, { field: 'ceBidprice' },
                { field: 'ceAskPrice' }, { field: 'ceAskQty' }
              ],
            }, {
              groupId: 'PUTS',
              description: 'OPTION CHAIN CALLS',
              headerAlign: 'center',
              headerClassName: 'super-app--calls',
              children: [
                { field: 'peOpenInterest' }, { field: 'peBidQty' },
                { field: 'peBidprice' }, { field: 'peAskPrice' },
                { field: 'peAskQty' }, { field: 'peChange' },
                { field: 'peLastPrice' }, { field: 'peImpliedVolatility' },
                { field: 'peTotalTradedVolume' }, { field: 'peChangeinOpenInterest' },

              ]
            }
          ]}

          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
          disableColumnMenu={true}
          hideFooter={true}
          hideFooterSelectedRowCount={true}
          columnBuffer={2} columnThreshold={2}
          // getRowClassName={(params) =>{
          //   if (params.row === 'ceAskQty') {
          //     return '';
          //   }
          //  return params.indexRelativeToCurrentPage > 75  ? 'super-app--puts' : 'super-app--white'
          // }}
          getCellClassName={(params) =>{
            if (params.field === 'ceAskQty' || params.field ==='ceAskPrice' || params.field === 'ceBidprice' || params.field === 'ceBidQty'|| params.field === 'ceChange' || params.field === 'ceLastPrice' ||  params.field === 'ceImpliedVolatility' ||  params.field === 'ceTotalTradedVolume' ||  params.field === 'cePchangeinOpenInterest' ||  params.field === 'ceOpenInterest' ) 
            {
              return params.id > Center_Val-1  ? 'super-app--puts' : 'super-app--white';
            }
           return params.id < Center_Val+1  ? 'super-app--puts' : 'super-app--white'
          }}
        />

      
    </div>
    </Stack>
    </>
  );
}
