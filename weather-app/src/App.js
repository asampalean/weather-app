import React from 'react';
import Card from './components/Card';
import Search from './components/Search';
import Cubes from './components/Cubes';



import '@elastic/eui/dist/eui_theme_light.css'
import {
 
  EuiTitle,
  EuiSpacer,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  
  
 
 
} from '@elastic/eui';




const App = () => {
  return (
    <div>
     <EuiPage>
    <EuiPageBody component="div">
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Weather app to die for</h1>
          </EuiTitle>
          <EuiTitle>
            <h2>It's always sunny in Barcelona</h2>
            </EuiTitle>
         
      <Search/>
    
        </EuiPageHeaderSection>
        
      </EuiPageHeader>
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Location</h2>
              
            </EuiTitle>
            <p>Date</p>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody> 
          <Card/>
          <Cubes/>
           </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
    
   


   
  
   
  </div>
  );
}

export default App;
