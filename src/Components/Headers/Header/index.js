import React from 'react';
import  './index.css';
import LeftHeader from '../LeftHeader';
import RightHeader from '../RightHeader';
import Grid from "@material-ui/core/Grid";
class Header extends React.Component{
  render(){
    return (
  /*    <div class="container-fluid">
          <div className="col-md-6">
          <LeftHeader />

         </div>

         <div className="col-md-6">
         <RightHeader />

        </div>

  </div>
*/

<Grid container>
         <Grid item md={6} >
           <LeftHeader />
           </Grid>
           <Grid item md={6} >
             <RightHeader />
             </Grid>
         </Grid>
    );
  }
}
export default Header;
