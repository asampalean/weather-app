import React from "react";

import "@elastic/eui/dist/eui_theme_light.css";

import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  
} from "@elastic/eui";


const WeatherCard = ({city, temperature, rain }) => {
  
  
  return (
    
    <EuiFlexGroup gutterSize="s">
      <EuiFlexItem >
   
          
        <EuiCard
          layout="vertical"
          title={
          <span>{city}</span>
        }
      description={<span> {temperature} °C </span>}
         
      children={<span> {rain} % of rain</span>}
    
         
          
         
          
          
        />
      </EuiFlexItem>
    
    </EuiFlexGroup>
  );
};

export default WeatherCard
