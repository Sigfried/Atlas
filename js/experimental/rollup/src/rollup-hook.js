// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'
import { Vocab } from '../../reactFiles/vocab'
// const Vocab = require('vocab')
// import { Vocab } from 'vocab'

const components = {
  Vocab
}

// Import the components.
// import { DummyComponent } from './components/dummy-component.jsx'

function renderStuff (componentName, domEl, props) {
  const Component = components[componentName] || DummyComponent
  console.log('hi!')
  ReactDOM.render(
    React.createElement(Component, props),
    domEl
    // function(a,b,c) { console.log('reactCB', {a,b,c}); }
  )
}
export default renderStuff

// console.log(HI, renderStuff)

class DummyComponent extends React.Component {
  render () {
    return (
      <article>
        <h1>Hi from DummyComponent.</h1>
        <em>Now let's play with React!</em>
        <pre>
          {
            JSON.stringify(Object.keys(this.props.self), null, 2)
          }
        </pre>
      </article>
    )
  }
}

/*
// Define the root element.
const root = document.querySelector('main')

export default function(root, props) {
  ReactDOM.render(<DummyComponent />, root)
}

// Append the DummyComponent to the root element.
ReactDOM.render(<DummyComponent />, root)
*/
