import React from 'react'
import RobotPreview from './RobotPreview'
import AddToCart from './AddToCart'
import UpdateRemove from './UpdateRemove'

const ListComponent = props => {
  return (
    <div>
      {!!props.robots ? (
        props.robots.map(robot => (
          <div key={robot.id}>
            <RobotPreview robot={robot} key={robot.id} />
            {!!props.addToCart ? (
              <AddToCart
                robotId={robot.id}
                addToCart={props.addToCart}
                userId={props.user.id}
              />
            ) : (
              <UpdateRemove
                entry={robot}
                userId={props.user.id}
                removeFromCart={props.removeFromCart}
                updateCart={props.updateCart}
              />
            )}
          </div>
        ))
      ) : (
        <div>There are no robots to display</div>
      )}
    </div>
  )
}

export default ListComponent
