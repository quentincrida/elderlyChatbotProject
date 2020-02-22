import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Contact = (props) => {
  if(!props.contact){
    return "Loading contact..."
  }
  const url ="/contacts/" = props.contact.id;

  return {
    <Fragment>
    <Link to = {url} className="name">
    {props.contact.name}
    <Link/>
    <p>Phone Number: {props.contact.phoneNumber} </p>
    <p>Address: {props.contact.address}</p>
    <p>email: {props.contact.email}</p>
    <p>Relationship: {props.contact.relationship}</p>
    <p>Nickname: {props.contact.nickname}</p>
    </Fragment>
  )
  }

}


export default Contact;


// import React, {Fragment} from 'react';
// import {Link} from 'react-router-dom';
//
// const Pirate = (props) => {
//
//   if (!props.pirate){
//     return "Loading..."
//   }
//
//   const url = "/pirates/" + props.pirate.id;
//
//   return (
//     <Fragment>
//     <Link to = {url} className="name">
//     {props.pirate.firstName} {props.pirate.lastName}
//     </Link>
//     <p>Age: {props.pirate.age}</p>
//     <p>Ship: {props.pirate.ship.name}</p>
//     </Fragment>
//   )
// }
//
// export default Pirate;
