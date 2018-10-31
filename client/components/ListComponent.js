import React from 'react'
import RobotPreview from './RobotPreview'
import AddToCart from './AddToCart'
import UpdateRemove from './UpdateRemove'

const ListComponent = props => {
  return (
    <div>
      {props.robots.map(robot => (
        <div key={robot.id}>
          <RobotPreview {...robot} />
          {!!props.addToCart ? (
            <AddToCart
              robotId={robot.id}
              addToCart={props.addToCart}
              userId={props.user.id}
            />
          ) : (
            <UpdateRemove
              robotId={robot.id}
              userId={props.user.id}
              removeFromCart={props.removeFromCart}
              updateCart={props.updateCart}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ListComponent
