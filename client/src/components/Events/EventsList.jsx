import React from 'react';

export const EventsList = props => (
    <ul className="list-group">{props.children}</ul>
  );
  
export default EventsList;