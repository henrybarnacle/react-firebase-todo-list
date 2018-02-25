import React from 'react';
import _ from 'lodash';
//import loadSpecificSection from 'index';

export default (props) => {
  return (
    <ul>
      {
           _.map(props.sections, (section, id) => <li key={id}>{section.name}</li>)

      }
    </ul>
  )
}


