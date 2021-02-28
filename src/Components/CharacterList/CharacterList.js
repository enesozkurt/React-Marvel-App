import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Card,
    CardWrapper,
    CardHeader,
    CardImage,
    CardHeading,
    CardBody,
    CardFieldset,
} from "./Card";

class CharacterList extends Component {
    render() {
        return (
            <Link to={`/${this.props.id}`}>
                <Card>
                    <CardWrapper>
                        <CardHeader>
                            <CardHeading>{this.props.name}</CardHeading>
                        </CardHeader>
                        <CardBody>
                            <CardFieldset>
                                <CardImage src={this.props.thumbnail.path + "." + this.props.thumbnail.extension} />
                            </CardFieldset>
                        </CardBody>
                    </CardWrapper>
                </Card>
            </Link>
        );
    }
}

CharacterList.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default CharacterList;
