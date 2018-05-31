import React from 'react'
import ReactDom from 'react-dom'
//import React from '/node_modules/react/index.js'
//import React from 'bower_components/react'
//import ReactDom from '/node_modules/react-dom'
//import MermGraph from 'es6!./MermGraph'

export class Vocab extends React.Component {
	constructor(props) {
		super(props);
		console.log('in Vocab w/ props:', props)
		this.state = {
			statuses: this.props.status ? [this.props.status] : [],
			showSemGraph: false,
		}
	}
	componentDidMount() {
		$("#voc-modal")
					.draggable({
							handle: ".modal-header",
					})
		/*

				//let vm = $('#voc-modal')
				//$('#test-drag').
					// .dialog({ autoOpen: true, //modal: true, })
				$("#myAlert").click(function(){
					alert("Alert's working");
				});
				*/
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.status !== nextProps.status) {
			this.setState({ statuses: this.state.statuses
												.concat(nextProps.status)
			});
		}
	}

	render() {
		let { status, concepts, query } = this.props;
		console.log('in Vocab render w/ props:', this.props)

		return (
			<div>
				<button className={ `btn btn-xs ${this.state.showSemGraph ? 'btn-default' : 'btn-primary'}` }
					onClick={
										()=>{
											this.setState({showSemGraph: !this.state.showSemGraph})
											return false
										}
					}
					data-junk={ '' /* href="#voc-modal" data-backdrop="false" data-toggle="modal" */ }
				>
					Sem Graph
				</button>
				<div id="voc-modal" className="modal"
				 style={{
					 display: this.state.showSemGraph ? 'block' : 'none',
						overflow: 'visible',
						top:'10%',
						left:'50%',
						bottom:'auto',
						right:'auto',
						marginLeft:'-300px',
				 }}
				>
				<div style={{marginLeft: 0, marginRight: 0}} className={ /*modal-dialog*/ ''} >
							<div className="modal-content">
									<div className="modal-header">
										<button type="button" className="close" 
											onClick={ ()=>this.setState({showSemGraph:false}) }
										>&times;</button>
											<h4 className="modal-title">Settings</h4>
									</div>
									<div className="modal-body">
											<p>Settings</p>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-default" 
													onClick={ ()=>this.setState({showSemGraph:false}) }
										>Close</button>
										<button type="button" className="btn btn-primary"
													onClick={ ()=>this.setState({saveDoesNothing: !this.state.saveDoesNothing}) }
										>{this.state.saveDoesNothing ? 'Save does nothing yet' : 'Save changes'}</button>
									</div>
							</div>
					</div>
				</div>

				<pre className="heading" style={{whiteSpace: 'pre-wrap'}}> 
					model keys might care about: 
          {JSON.stringify(this.props.model.vocabExperiment.currentConceptInfo() )}
        </pre>
			</div>)
	}
}
