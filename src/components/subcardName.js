import React, { Component } from 'react';

class SubcardName extends Component {
	render() {
		return (
			<div className="SubcardName">
				<div className="left">
					<p>{this.props.carname} </p>
					<p>{this.props.customername} </p>
				</div>
				<div className="right">
					<p className="right">{this.props.time} </p>
				</div>
			</div>
		);
	}
}

export default SubcardName;
