import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Details extends Component {

    componentDidMount(title, description, name) {
        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: {
                title,
                description,
                name,
            }
        });
    }
    goBack = (event) => {
        this.props.history.push('/');
    }

    goToDetails = (event) => {
        this.props.history.push('/edit');
    }

    render() {
        const moviesArray = this.props.store.movies.map((item, index) => {
            return <tr key={index}>
                <td>
                    <td>
                        <h2>{item.title}</h2>
                        {item.description}
                    </td>
                    <h3>{item.name}</h3>
                </td>
            </tr>
        })
        return (
            <table className="App">
                <button onClick={this.goBack}>Go Back</button>
                <button onClick={this.goToDetails}>Edit</button>
                <tbody>{moviesArray}</tbody>
            </table>
        )
    }
};

export default connect(mapStateToProps)(Details);