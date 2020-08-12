import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* putDescription(action) {
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/putMovies/description/' + action.payload.id,
        });
        yield put({
            type: 'SET_DESCRIPTION',
            payload: action.payload.id,
        });
    } catch (err) {
        console.log('PUT description error', err);
    }
}

function* getDetailsSaga() {
    yield takeLatest('PUT_DESCRIPTION', putDescription);
}

export default putDescriptionSaga;