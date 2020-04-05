import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
	render() {

		const { success } = this.props;
		const contents = success ? null
			: (
				<form className="form-inline">
					<input
						data-test="input-box"
						className="mb-2 mx-sm-3"
						placeholder="enter guess"
					/>
					<button data-test="submit-button"
						type="submit"
						className="btn btn-primary"
						type="submit"
					/>
					Submit
					<button />
				</form>
			)
		return (
			<div data-test="component-input">
				{contents}
			</div>
		);
	}
}

const mapStateToProps = ({ success }) => {
	return { success };
}

export default connect(mapStateToProps)(Input);