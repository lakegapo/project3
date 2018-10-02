import React from "react";
import { Container, Row, Col } from "../../Grid";

const PeopleJoinedItem = props => (
  <div>
      <div className="row justify-content-center">
          <div className="col-sm-12">
              <div className='joinedList joinedStyles'>{props.firstName}</div>
          </div>
      </div>
  </div>
);

export default PeopleJoinedItem;