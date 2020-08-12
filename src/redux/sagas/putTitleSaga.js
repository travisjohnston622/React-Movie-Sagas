import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* putTitle(action) {
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/putMovies/title/' + action.payload.id,
            data: action.payload
        });
        yield put({
            type: 'SET_TITLE',
            payload: action.payload.id,
        });
    } catch (err) {
        console.log('PUT title error', err);
    }
}

function* getDetailsSaga() {
    yield takeLatest('PUT_TITLE', putTitle);
}

export default putTitleSaga;