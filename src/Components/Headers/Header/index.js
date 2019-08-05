import React from 'react';
import  './index.css';
import LeftHeader from '../LeftHeader';
import RightHeader from '../RightHeader';
class Header extends React.Component{
  render(){
    return (
      <div class="container-fluid">
          <div className="col-md-6">
          <LeftHeader />

         </div>

         <div className="col-md-6">
         <RightHeader />

        </div>

  </div>
/*  <div class="container-fluid">
      <div class = "col-md-6">

                    <div class="col-md-4">
                    <img class="img1" src="../Assets/Images/Header1.png"></img>
                    </div>

                   <div class="col-md-4">
                  <p class="head-para">Deliver to: </p>
                  </div>

                  <div class= "col-md-2">
                  <a href="#"> <img class= "notify" src="../Assets/Images/Header4.png"></img></a>
                  </div>
      </div>

<div class="col-md-6">
<div class="col-md-8">
</div>
<div class="col-md-2">
      <a href="#" ><img class="notify" src="../Assets/Images/Header2.png"></img></a>
      </div>

      <div class="col-md-2">
      <a href="#" ><img class="notify" src="../Assets/Images/Header3.png"></img></a>
      </div>
</div>


      </div>*/
    );
  }
}
export default Header;
