import gql from 'graphql-tag';
export const createPost = gql`
	mutation PostMutation($description: String!, $url: String!) {
		post(description: $description, url: $url) {
			id
			createdAt
			url
			description
		}
	}
`;
