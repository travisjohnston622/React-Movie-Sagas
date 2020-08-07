import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_HOMEPAGE'
        })
    }
    //Dispatches selected movie id to getDetailsSaga
    goToDetails = (id) => {
        this.props.dispatch({
            type: 'GET_DETAILS',
            payload: id
        })
        //Navigates to DetailsPage
        this.props.history.push('/details/')
    }
    render() {
        const movieList = this.props.reduxState.getHomePageReducer.map((item, index) => {
            return (
                <div key={index}
                    className="clickable"
                    onClick={(event) => this.goToDetails(item.id)}>
                    <img src={item.poster} alt="Poster" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            )
        })
        return (
            <div>
                {movieList}
            </div>
        );
    }
}
export default connect(mapStateToProps)(Home);