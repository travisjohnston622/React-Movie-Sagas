import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
//Get call for full list of movies
function* getHomePage() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/getMovies'
        });
        yield put({
            type: 'SET_HOMEPAGE',
            payload: response.data
        });
    } catch (err) {
        console.log('error fetching home page', err);
    }
}

function* getDetailsSaga() {
    yield takeLatest('GET_HOMEPAGE', getHomePage);
}

export default getHomePageSaga;