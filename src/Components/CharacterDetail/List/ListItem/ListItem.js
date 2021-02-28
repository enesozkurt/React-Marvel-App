import React, {Component} from 'react';
import {Header, List, Segment} from "semantic-ui-react";

class ListItem extends Component {
    render() {
        return (
            <div style={{width: "100%"}}>
                <List selection verticalAlign='middle'>
                    <Header style={{color: "#fff"}} as='h2'>{this.props.header}</Header>
                    {this.props.data.items.map(item => <List.Item>
                        <Segment>
                            <List.Content>
                                <List.Header>{item.name}</List.Header>
                            </List.Content>
                        </Segment>
                    </List.Item>)}
                </List>
            </div>
        );
    }
}

export default ListItem;
