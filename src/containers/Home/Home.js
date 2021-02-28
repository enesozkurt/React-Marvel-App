import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCharacter } from "../../redux/actions";
import CharacterList from "../../Components/CharacterList/CharacterList";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            page_size: 30,
            loading: false,
            more: true,
            error: false
        };
    }
    checkScrollPosition = () => {
        const { error, loading, more } = this.state;
        if (error || loading || !more) return;
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight
        ) {
            this.getScrollData();
        }
    };
    componentDidMount() {
        if (this.state.page === this.props.page) {
            this.getScrollData();
        }
        window.addEventListener('scroll', this.checkScrollPosition);
        window.addEventListener('resize', this.checkScrollPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScrollPosition);
        window.removeEventListener('resize', this.checkScrollPosition);
    }

    getScrollData = () => {
        this.setState(
            {
                loading: true
            },
            () => {
                this.props
                    .getCharacter({ offset: this.props.page })
                    .then(response => {
                        this.setState({
                            loading: false,
                            more: (!response.data.count <= this.props.page * this.state.page_size)
                        });
                    })
                    .catch(err => {
                        this.setState({ error: true, loading: false });
                    });
            }
        );
    };

    render() {
        const { error, loading, more } = this.state;
        const { results } = this.props;
        return (
            <>
                <div>
                    <div className="App">
                        {results.length > 0 && results.map((res, index) => <CharacterList {...res} key={index} />)}
                    </div>
                </div>
                {loading && (
                    <div style={{textAlign: "center"}}>
                        <Loader />
                    </div>
                )}
                {!more && <div style={{textAlign: "center"}}>The end!</div>}
                {error && (
                   <Error/>
                )}
            </>
        );
    }
}
Home.propTypes = {
    results: PropTypes.array.isRequired
};
const mapDispatchToProps = {
    getCharacter
};

const mapStateToProps = state => ({
    results: state.marvelCharacters.data,
    page: state.marvelCharacters.page
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);
