import React from 'react'
// import { Link } from 'react-router-dom';

const RobotPreview = props => {
  let robot
  if (props.robot.robotInfo) {
    robot = props.robot.robotInfo
  } else {
    robot = props.robot
  }

  return (
    <div>
      <div>
        <img src={robot.imageUrl} />
      </div>
      <div>
        <div>
          <div>
            {/* <Link to={`/robots/${robot.id}`}>{robot.name}</Link> */}
            <h1>{robot.name}</h1>
            {/* <Link to={`/robots/${brand.id}`}>{robot.brand}</Link> */}
            <h3>{robot.brand}</h3>
          </div>
          <div>
            <h2>{robot.price}</h2>
            <p>{robot.customerReviews}</p>
          </div>
        </div>
        <div>
          <p>{robot.description}</p>
        </div>
        <div>
          {/* <Link to={`/robots/${robot.id}`}>See More</Link> */}
          <p>See More</p>
        </div>
      </div>
    </div>
  )
}

export default RobotPreview
