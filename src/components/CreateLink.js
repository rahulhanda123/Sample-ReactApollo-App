import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import { createPost } from './../mutations.js';
class CreateLink extends Component {
	state = {
		description: '',
		url: ''
	};

	render() {
		const { description, url } = this.state;
		return (
			<div>
				<div classname="" flex flex-column mt3>
					<input
						classname="mb2"
						value={description}
						onChange={(e) => this.setState({ description: e.target.value })}
						type="text"
						placeholder="A description for the link"
					/>
				</div>
				<input
					className="mb2"
					value={url}
					onChange={(e) => this.setState({ url: e.target.value })}
					type="text"
					placeholder="The URL for the link"
				/>
				<Mutation mutation={createPost} variables={{ description, url }}>
					{(postMutation) => <button onClick={postMutation}>Submit</button>}
				</Mutation>
			</div>
		);
	}
}

export default CreateLink;
