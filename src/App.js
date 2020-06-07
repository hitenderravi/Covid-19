import React from 'react';
import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

import coronaImage from './images/corona.png'

 class App extends React.Component {

  state={
    data:{},
    country:''
  }
  



  async   componentDidMount(){
     const fetchedData = await fetchData();
    this.setState({data:fetchedData})
   }
   handleCountrychange= async(country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country })


     //fetch data
    
   }


  render() {

    const {data,country}=this.state;


    return (
      <div className={styles.container}>
        <img className={styles.image} alt="Covid-19" src={coronaImage}/>
        <Cards data={data}/>
        <CountryPicker handleCountrychange={this.handleCountrychange} />
        <Chart data={data} country={country}/>

      </div>
    )
  }
}




// function App() {


//   return (
// <div>

    
  
// <Firstchart/>
//    </div>


//   );

  
// }

export default App;
