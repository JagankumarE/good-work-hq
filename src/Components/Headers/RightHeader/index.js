import React from 'react';
import './index.css' ;

class RightHeader extends React.Component{
  render(){
    return(


  <div class="flex-container">

      <div class="dropdown custom btn-group dropleft">
       <button id="drop1" type="button" class="drop_btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
       <i class="material-icons  imageSize">
 notification_important
 </i>
      </button>

      <ul class="dropdown-menu" aria-labelledby="drop1">
        <li><a href="#">Notification 1</a></li>

      </ul>
      </div>
     <div class = "dropdown custom paddingBetweenIcons">
      <button id="prof2" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
      <i    class="material-icons imageSize ">
     perm_identity
     </i>

      </button>
      <ul class="dropdown-menu" aria-labelledby="prof2">
      <li><a href="#">Option 1</a></li>
             <li><a href="#">Option 2</a></li>


      </ul>
      </div>
      </div>




    );
  }

}
export default RightHeader;
