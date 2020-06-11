// import React, { useState } from "react";
// import axios from "axios";

// //Components

// import Header from "./components/Header";
// import WeatherCard from "./components/WeatherCard";
// import Search from "./components/Search";

// import "@elastic/eui/dist/eui_theme_light.css";
// import { EuiPage, EuiPageBody } from "@elastic/eui";





// function App() {
//     const [weather,setWeather] = useState([])
    
  
//     async function fetchData() {
       
       
//       const apiData = await fetch(`https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019`)
//         .then( res => res.json())
//         .then(data => data)
//         setWeather(data)
//     }
  
//     return (
//       <div className="App">
//         <h3>WEATHER APP</h3>
//         <Search getWeather={fetchData} />
//         {console.log(weather.data)}
//         <Card city={weather.city}/>
//       </div>
//     );
//   }
  
  

// const App = () => {
//   const [weather, setWeather] = useState([])
//   const city = e.target.elements.city.value
//   const api_call = async (e) => {
//     e.preventDefault()
//     const url = `https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/${city}`;
//     const request = axios.get(url);
//     const response = await request;
//     setWeather(response);
//   };
 
//   return (
//     <div>
//     <EuiPage>
//       <EuiPageBody component="div">
//         <Header />

//         <Search getWeather={api_call} />
//         {console.log(weather.response)}

//         <Card />
//       </EuiPageBody>
//     </EuiPage>
//     </div>
//   );
// };

// export default App;



import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";


import "@elastic/eui/dist/eui_theme_light.css";
import { EuiPage, EuiPageBody, EuiSpacer } from "@elastic/eui";

function App() {
  const [results, setResults] = useState([]);

  async function fetchData(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const apiData = await fetch(
      `https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/${city}`
    )
      .then(res => res.json())
      .then(data => data);

    setResults({
      data: apiData,
      city: apiData.municipio.NOMBRE,
      temperature: apiData.temperatura_actual,
      rain: apiData.lluvia,
      date: apiData.fecha,
      error: ""
    });
  }

  return (
    
      <EuiPage>
        <EuiPageBody>
        <EuiSpacer></EuiSpacer>
        <Header/>
        
    <EuiSpacer></EuiSpacer>
      
      <Form getWeather={fetchData} />
     <EuiSpacer></EuiSpacer>
      <WeatherCard
        city={results.city}
        temperature={results.temperature}
        rain={results.rain}
        date={results.date}
        error={results.error}
      />
      
      </EuiPageBody>
      </EuiPage>
  
  );
}

export default App;