import React from 'react'
//import React from 'bower_components/react'
//import mermaid from 'mermaid'
	
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
		mermaid.initialize({
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
