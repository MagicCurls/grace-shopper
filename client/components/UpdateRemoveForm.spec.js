/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UpdateRemoveForm} from './UpdateRemoveForm'
const sinon = require('sinon')

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UpdateRemoveForm', () => {
  let renderedUpdateRemoveForm
  let updateRemoveFormInstance

  // beforeEach(() => {
  //   renderedUpdateRemoveForm = shallow(<UpdateRemoveForm />)
  //   updateRemoveFormInstance = renderedUpdateRemoveForm.instance()
  // })

  xit('should be a dummy component that is passed various props', () => {
    expect(updateRemoveFormInstance).to.exist
    expect(updateRemoveFormInstance.props.userId).to.exist
    expect(updateRemoveFormInstance.props.robotId).to.exist
    expect(updateRemoveFormInstance.props.cartQuantity).to.exist
    expect(updateRemoveFormInstance.props.stateQuantity).to.exist
    expect(updateRemoveFormInstance.props.handleSubmit).to.exist
    expect(updateRemoveFormInstance.props.handleChange).to.exist
    expect(updateRemoveFormInstance.props.removeFromCart).to.exist
  })

  xit('should render an <input /> element', () => {
    expect(renderedUpdateRemoveForm.find('input').node).to.exist
  })

  xit('should have a method called handleChange that is invoked when there is a change event triggered by the <input /> element', () => {
    expect(typeof updateRemoveFormInstance.handleChange).to.equal('function')
    const handleChangeSpy = sinon.spy()
    updateRemoveFormInstance.props.handleChange = handleChangeSpy
    renderedUpdateRemoveForm.setState({})
    renderedUpdateRemoveForm.find('input').simulate('change', {
      target: {value: '10'}
    })
    expect(handleChangeSpy.calledOnce).to.equal(true)
  })
})
