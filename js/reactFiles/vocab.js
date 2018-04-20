import React from 'react'
//import React from 'bower_components/react'
import ReactDom from 'react-dom'
import MermGraph from 'es6!./MermGraph'

class Vocab extends React.Component {
	constructor(props) {
		super(props);
		console.log('in Vocab w/ props:', props)
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
		console.log('in Vocab render w/ props:', this.props)

		let selfModelKeysDontCareAbout = [
			"activeReportDrilldown",
			"analysisLookup",
			"applicationStatus",
			"authApi",
			"canDeleteCurrentConceptSet",
			"canEditCurrentCohortDefinition",
			"canEditCurrentConceptSet",
			"ccaCss",
			"ccaURL",
			"clearConceptSet",
			"cohortDefCss",
			"cohortDefURL",
			"cohortDefinitionSourceInfo",
			"cohortDefinitions",
			"conceptSetCss",
			"contextSensitiveLinkColor",
			"currentCohortComparison",
			"currentCohortComparisonDirtyFlag",
			"currentCohortComparisonId",
			"currentCohortDefinition",
			"currentCohortDefinitionDirtyFlag",
			"currentCohortDefinitionInfo",
			"currentCohortDefinitionMode",
			"currentCohortDefinitionSubscription",
			"currentConceptSetDirtyFlag",
			"hasUnsavedChanges",
			"includedConcepts",
			"includedSourcecodes",
			"initComplete",
			"initPromises",
			"initializationComplete",
			"initializationErrors",
			"irAnalysisURL",
			"irStatusCss",
			"jobs",
			"loadCohortConceptSet",
			"loadCohortDefinition",
		]
		let selfKeysDontCareAbout = [
			"dispose",
			"domEl",
			"model",
			"subscriptions",
			"metagorize",
			"relatedConceptsColumns",
			"relatedConceptsOptions",
			"loadRecordCounts",
		]
		let selfKeysMightCareAbout = [
			/*
			"loadingSourceCounts",
			"loadingRelated",
			"currentConceptArray",
			"currentConceptId",
			"hasRelationship",
			"loadConcept",
			"meetsRequirements",
			"metatrix",
			"sourceCounts",
			*/
		]
		let selfModelKeysMightCareAbout = [
			//"componentParams", // cicular
			/*
			"loadConceptSet",
			"loadIncluded",
			"loadRepositoryConceptSet",
			"loadSourcecodes",
			"createConceptSetItem",
			*/
			"conceptSetInclusionCount",
			"conceptSetInclusionIdentifiers",
			"conceptSetURL",
			"config",
			"criteriaContext",
			"currentConcept",
			"currentConceptId",
			"currentConceptIdentifierList",
			"currentConceptMode",
			"currentConceptSet",
			"currentConceptSetExpressionJson",
			"currentConceptSetMode",
			"currentConceptSetNegativeControls",
			"currentConceptSetSource",
			"currentConceptSetSubscription",
			"currentIncludedConceptIdentifierList",
			"currentReport",
			"currentSource",
			"currentView",
			"denseSiblings",
			"enableRecordCounts",
			"getSourceInfo",
			"hasCDM",
			"hasRelationship",
			"hasResults",
			/*

			"loadingEvidence",
			"loadingIncluded",
			"loadingReport",
			"loadingReportDrilldown",
			"loadingSourcecodes",
			"meetsRequirements",
			"metarchy",
			"metatrix",
			"pageTitle",
			"pendingSearch",
			"permissions",
			"plpCss",
			"plpURL",
			"recentConcept",
			"recentSearch",
			"relatedConcepts",
			"relatedConceptsColumns",
			"relatedConceptsOptions",
			"relatedSourcecodes",
			"relatedSourcecodesColumns",
			"relatedSourcecodesOptions",
			"renderBoundLink",
			"renderCheckbox",
			"renderConceptSelector",
			"renderConceptSetItemSelector",
			"renderCurrentConceptSelector",
			"renderHierarchyLink",
			"renderLink",
			"reportCohortDefinitionId",
			"reportReportName",
			"reportSourceKey",
			"reportTriggerRun",
			"reportValid",
			"resolveConceptSetExpression",
			"resolveConceptSetExpressionSimple",
			"resolvingConceptSetExpression",
			"resolvingSourcecodes",
			"roles",
			"routeToConceptSet",
			"router",
			"searchResultsConcepts",
			"selectedIRAnalysisId",
			"selectedSourceId",
			"setConceptSet",
			"sharedState",
			"sourceAnalysesStatus",
			"sourcecodeInclusionCount",
			"supportURL",
			"syntaxHighlight",
			"updateRoles",
			"users"
				*/
		]
		return (
			<div>
				<MermGraph foo="bar" />
				<pre className="heading" style={{whiteSpace: 'pre-wrap'}}> 
					model keys might care about: 
					{JSON.stringify(selfModelKeysMightCareAbout )}</pre>
				{
					selfModelKeysMightCareAbout.map(
						key => {
							console.log(key)
							let val = this.props.self.model[key]
							let type = typeof(val)
							if (type === 'function') {
								try {
									val = this.props.self.model[key]()
									type += `, ${typeof(val)}`
									if (typeof(val) === 'undefined') {
										val = `got undefined from ${this.props.self.model[key]}`
									}
								} catch(e) {
									val = `(${e}): ${val}`
								}
							}
							return <pre key={key} className="heading">
											{key} ({type}): {JSON.stringify(val, null, 2)}
											</pre>
						}
					)
				}
				{
					selfKeysMightCareAbout.map(
						key => {
							let val = this.props.self[key]
							let type = typeof(val)
							if (type === 'function') {
								try {
									val = this.props.self[key]()
									type += `, ${typeof(val)}`
									if (typeof(val) === 'undefined') {
										val = `got undefined from ${this.props.self[key]}`
									}
								} catch(e) {
									val = `(${e}): ${val}`
								}
							}
							return <pre key={key} className="heading">
											{key} ({type}): {JSON.stringify(val, null, 2)}
											</pre>
						}
					)
				}
			</div>);
			/*
				<pre className="heading" style={{whiteSpace: 'pre-wrap'}}> 
					model keys dont care about: <br/>
					{JSON.stringify(selfModelKeysDontCareAbout.sort() )}</pre>
				<pre className="heading" style={{whiteSpace: 'pre-wrap'}}> 
					self keys dont care about: <br/>
					{JSON.stringify(selfKeysDontCareAbout.sort() )}</pre>
				<pre className="heading" style={{whiteSpace: 'pre-wrap'}}> 
					self keys might care about: 
					{JSON.stringify(selfKeysMightCareAbout )}</pre>
				<h2>
				want loadingSourceCounts and loadingRelated to go to false
				</h2>
				<!--pre className="heading"> self keys might care about: {JSON.stringify(Object.keys(this.props.self).sort(), null, 2 )}</pre>
				<pre className="heading">currentConceptIdentifierList: 
					{JSON.stringify(this.props.self.model.currentConceptIdentifierList(), null, 2)}</pre-->
			*/
	}
}
export function renderStuff(self, props) {
	var comp = ReactDom.render(
							React.createElement(Vocab, props),
							self.domEl(),
							//function(a,b,c) { console.log('reactCB', {a,b,c}); }
	)
}
/*
					<div className="heading">{query}</div>
					<div>{(concepts||[]).length} concepts</div>
					<div>related: {(concepts||[])
								.filter(d=>d.relatedConcepts)
								.map(d=>d.relatedConcepts.length)
								.join(',')}</div>
					<div>Status: {this.state.statuses.join(' -> ')}</div>
*/
