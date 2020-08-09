import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Edit extends Component {
    state = {
        title: '',
        description: '',
    }

    componentDidMount(title, description) {
        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: {
                title,
                description,
            }
        });
    }

    handleChange = (event, inputKey) => {
        this.setState({
            [inputKey]: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.dispatch({
            type: 'PUT_EDIT',
            payload: this.state
        })
        //Navigates back to detail page
        this.props.history.push('/details');
    }
    render() {
        const movieArray = this.props.store.movies.map((item, index) => {
            return <tr key={index}>
                <td>
                    <h3>{item.title}</h3>
                    <td>{item.description}</td>
                </td>
            </tr>
        })
        return (
            <div>
                <button onClick={this.cancelNewInput}>Cancle</button>
                <button onClick={this.handleSubmit}>Save</button>
                <br />
                <input
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={(event) => this.handleChange(event, 'title')}
                />
                <br />
                <input
                    type="text"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={(event) => this.handleChange(event, 'description')}
                    required
                />
                {movieArray}
            </div>
        )
    }
};
export default connect(mapStateToProps)(Edit);