



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