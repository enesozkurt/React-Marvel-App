import React, {Component} from 'react';
import ListItem from "./ListItem/ListItem";

class List extends Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                <ListItem header="Comics" data={this.props.data.comics}/>
                <ListItem header="Stories" data={this.props.data.stories}/>
                <ListItem header="Series" data={this.props.data.series}/>
            </div>
        );
    }
}

export default List;
