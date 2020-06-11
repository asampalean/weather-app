// import React from 'react'

// const Form = (props) => {
//     return (
//         <form onSubmit={props.getWeather}>
//             <input
//             type='text'
//             placeholder='city'
//             name='city'
//             />
          
//             <button>Submit</button>
//         </form>
//     )
// }

// export default Form;


import React, {Fragment} from 'react';

// import {
  
//   EuiFlexGroup,
  
//   EuiButton,
//   EuiFormControlLayout,
//   EuiSpacer
// } from '@elastic/eui';

const Form = (props) => {
//     return(
//   <Fragment>
//     <EuiFlexGroup>
//     <EuiFormControlLayout icon="search" onSubmit={props.getWeather}>
//       <input
//         type="text"
//         className="euiFieldText"
//         name="city"
//         aria-label="Use aria labels when no actual label is in use"
        
//       />
    
//     </EuiFormControlLayout>

   
  
      
        
    
//         <EuiButton >Search</EuiButton>
     
     
//     </EuiFlexGroup>
//     </Fragment>
//     );
// }
return (
<div>
<form onSubmit={props.getWeather}>
      <input placeholder="find your city" type="text" name="city" />

      <button>submit</button>
    </form>
</div>
);
}


export default Form;

