import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCharacter } from "../../redux/actions";
import CharacterDetail from "../../Components/CharacterDetail/CharacterDetail";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true,
        }
    }
    goBack = () => this.props.history.goBack();

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getCharacter(id).then(res => {
            this.setState({
                data: res.data.results,
                loading: false
            });
        });
    }

    render() {
        return (
            <div style={{margin: "1em"}}>
               <CharacterDetail loading={this.state.loading} data={this.state.data}/>
            </div>
        );
    }
}

Details.defaultProps = {
    data: PropTypes.array.isRequired
};


const mapDispatchToProps = {
    getCharacter,
};

const mapStateToProps = state => ({
    results: state.marvelCharacters.data,
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Details)
);
