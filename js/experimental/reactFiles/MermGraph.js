import React from 'react'
import ReactDom from 'react-dom'
//import React from '../node_modules/react/index.js'
//import React from 'bower_components/react'
//import mermaid from 'mermaid'
//import mermaid from 'es6!/node_modules/mermaid/src/mermaid'
//import mermaidAPI from 'mermaidAPI'
//import mermaidAPI from 'es6!/node_modules/mermaid/src/mermaidAPI'
//const mermaid = require("/node_modules/mermaid/dist/mermaid.core")
//import mermaid from "/node_modules/mermaid/dist/mermaid.core.js"
	
/*
export default () => {
	throw new Error("whatever")
}
*/
class Foo extends React.Component {
	render() {
		return <h2>bar</h2>
	}
}
export default class MermGraph extends React.Component {
	constructor(props) {
		super(props);
		console.log('in MermGraph w/ props:', props)
			/*
		mermaidAPI.initialize({
			theme: 'forest',
			gantt: { axisFormatter: [
				['%Y-%m-%d', (d) => {
					return d.getDay() === 1
				}]
			] }
		})
		*/
	}

	render() {
		let { foo } = this.props;
		console.log('in MermGraph render w/ props:', this.props)
		return (
			<div>
				<Foo />
				<pre style={{whiteSpace: 'pre-wrap'}}> 
						this is some MermGraph stuff
						foo = {foo}
						<br/>
				</pre>
			</div>
		)
	}
}
/*
*/
