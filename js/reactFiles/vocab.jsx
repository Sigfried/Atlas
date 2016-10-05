"use strict";
define(['react', 'supergroup', 'ohdsi.util'], function (React, _, util) {
	class Test extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				statuses: this.props.status 
					? [this.props.status] : []
			}
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
			return (
				<div>
					<div className="heading">{query}</div>
					<div>{(concepts||[]).length} concepts</div>
					<div>related: {(concepts||[])
								.filter(d=>d.relatedConcepts)
								.map(d=>d.relatedConcepts.length)
								.join(',')}</div>
					<div>Status: {this.state.statuses.join(' -> ')}</div>
				</div>);
		}
	}
	return Test;
});

