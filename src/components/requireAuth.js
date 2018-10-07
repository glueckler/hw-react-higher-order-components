// notice this file begins with a lower case "r"

import React, { Component } from 'react'

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />
    }
  }

  return ComposedComponent
}
