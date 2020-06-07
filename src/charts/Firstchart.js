import React ,{useState,useEffect}from 'react'
import data from '../alldata.json'
import { Chart } from "react-google-charts";

import {Line} from 'react-chartjs-2'
const Firstchart=() =>{

    const [chartData ,setChartdata]=useState({
        topic:"",
        newdata:[],
        intensity:""
    })
    const {topic,intensity,newdata}=chartData
    const chart=()=>{
        if(data?.error){
            setChartdata({...chartData,
            error:data.error})
        }else{
            setChartdata({...chartData,
            newdata:data ,
           
        formData:new  FormData()})
        console.log(newdata.topic)

        }
       
        setChartdata({
            ...chartData,
            intensity:"",
            topic:"",
            labels:[chartData.topic],
            
            datasets:[
                {
                    label:'level of thiccness',
                    data:[chartData.intensity],
                    backgroundColor:[
                        'rgba(75,192,192,0.6)'
                    ],
                    borderWidth:4
                }
            ]
        })
     
    }
    useEffect(() => {
        chart()
    }, [])

    return (
        <div>
            <div className="form-group">
    <select
     
      className="form-control"
      placeholder="Category"
    >
      <option>Select</option>
      {
      data.map((cate,index)=>(
        <option key={index} >{cate.topic}</option>
       
      ))}
    </select>
  </div>
     <div className="form-group">
     <select
      
       className="form-control"
       placeholder="Category"
     >
       <option>Select</option>
       {
       data.map((cate,index)=>(
         <option key={index} >{cate.sector}</option>
       ))}
     </select>
   </div>
        

{/* <Chart
  chartType="ScatterChart"
  spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
  options={{
    hAxis: {
      format: 'short',
    },
    vAxis: {
      format: 'decimal',
      // format:'scientific'
      // format:'long'
      // format:'percent'
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/> */}

<div style={{height:"500px",width:"700px"}}>
    <Line data={chartData}
    options={{
        responsive:true,
        title:{text:"Honey ",display:true},
        scales:{
            yAxes:[
                {
                    ticks:{
                        autoSkip:true,
                        maxTicksLimit:10,
                        beginAtZero:true
                    },
                    gridLines:{
                        display:false
                    }
                }
            ]
        }
    }}
    />
</div>

</div>
    )
}
export default Firstchart
