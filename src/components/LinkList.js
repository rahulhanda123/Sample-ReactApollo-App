import React, { Component } from 'react'
import Link from './Link'
import {FEED_QUERY} from './../queries';
import { Query } from 'react-apollo';

class LinkList extends Component {
  render() {
    

    return (
        <Query query={FEED_QUERY}>
        {({loading,error, data}) => {
        if(loading) return <div>fetching</div>;
        if (error) return <div>Error</div>;
        
        const linksToRender = data.feed.links;



        return(
        linksToRender.map(link => <Link key={link.id} link={link} />)
        )}}
      </Query>
    )
  }
}

export default LinkList