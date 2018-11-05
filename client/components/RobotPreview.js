import React from 'react'
// import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const RobotPreview = props => {
  let robot
  if (props.robot.robotInfo) {
    robot = props.robot.robotInfo
  } else {
    robot = props.robot
  }

  return (
    <Typography component="div">
      <CardMedia
        style={{height: 0, paddingTop: '56.25%'}}
        image={robot.imageUrl}
      />
      <CardContent>
        <div>
          <Typography gutterBottom variant="headline" component="h1">
            {robot.name}
          </Typography>
          <h3>{robot.brand}</h3>
        </div>
        <div>
          <p>Price: ${robot.price}</p>
          <p>Rating: {robot.customerReviews}</p>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={`/robots/${robot.id}`}>
          See More
        </Button>
      </CardActions>
    </Typography>
  )
}

export default RobotPreview
