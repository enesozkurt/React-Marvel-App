import React, {Component} from 'react';
import {Grid, Card, Icon, Image, Button} from 'semantic-ui-react'
import Loader from "../Loader/Loader";
import List from "./List/List";

class CharacterDetail extends Component {
    render() {
        return (
            <>
            {!this.props.loading ? <Grid columns={4}>
                <Grid.Row style={{margin: "1em"}}>
                    <Button primary href="/" content="Anasayfa" />
                </Grid.Row>
                <Grid.Row style={{margin: "3em"}}>
                    <Grid.Column>
                        <Card>
                            <Image src={this.props.data[0].thumbnail.path + "." + this.props.data[0].thumbnail.extension} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{this.props.data[0].name}</Card.Header>
                                <Card.Description>
                                    {this.props.data[0].description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='hashtag' />
                                    {this.props.data[0].id}
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                   <Grid.Column style={{width: "75%"}}>
                       <List data={this.props.data[0]}/>
                   </Grid.Column>
                </Grid.Row>
            </Grid> : <Loader />}
            </>
        );
    }
}

export default CharacterDetail;
