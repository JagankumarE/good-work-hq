import React from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';

class Welcome extends React.Component{
  
    render(){
    return(
     <div class= "row">
             <div class= "col-md-6">
                  <h2>Welcome</h2>
                 <img src ="Assets/images/Banner1.png" ></img>
             </div>


              <div class ="col-md-6 disp">

<TextField id="outlined-uncontrolled" label="Username" margin="normal" variant="outlined" />

<TextField id="outlined-password-input" label="Password"  type="password" autoComplete="current-password"  margin="normal"  variant="outlined"
              />
              </div>

</div>



    );
  }
}export default Welcome;
