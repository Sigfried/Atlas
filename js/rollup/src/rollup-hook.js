// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

// Import the components.
// import { DummyComponent } from './components/dummy-component.jsx'

export default function renderStuff (domEl, props) {
  ReactDOM.render(
    React.createElement(DummyComponent, props),
    domEl
    // function(a,b,c) { console.log('reactCB', {a,b,c}); }
  )
}
//console.log(HI, renderStuff)

class DummyComponent extends React.Component {
  render () {
    return (
      <article>
        <h1>Hi from DummyComponent.</h1>
        <em>Now let's play with React!</em>
        <pre>
					{
						JSON.stringify(Object.keys(this.props), null, 2)
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
