import React from 'react';
import _ from 'lodash';

//import loadSpecificSection from 'index';

export default (props) => {
  return (
    <ul>
      {
           _.map(props.sections, (section, i) => <li onClick={props.onClick.bind(this, section.id)} className="list-group-item" key={i}>{section.name}</li>)

      }
    </ul>
  )
}

//<Link to="/:id"></Link>
//onClick={props.onClick.bind(this, section.id)}
//onClick={yourfunc.bind(this, item.id)}