import React, {Component} from 'react';

class MainContainer extends Component{

constructor(props) {
  super(props);
  this.state = {
    contacts: [],
    appointments: [],
    exercises: [],
    medicines: [],
    photos: [],
    listOfSites: String,
    userDetails: String
  }
}


  render(){
    return (
    <div className ="main-container">I am a Main Container</div>
  );
  }
}

export default MainContainer;
