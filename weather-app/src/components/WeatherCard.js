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
      description={<span>Temperature is {temperature}  </span>}
         
      children={<span>There are {rain} % of rain</span>}
         
          
          onClick={() => window.alert("Card clicked")}
          
          
        />
      </EuiFlexItem>
    
    </EuiFlexGroup>
  );
};

export default WeatherCard
