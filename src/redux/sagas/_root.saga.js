import { all } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
//Imported saga
import getHomePageSaga from './getHomePageSaga';
import getDetailsSaga from './getDetailsSaga';
import putTitleSaga from './putTitleSaga';
import putDescriptionSage from './putDescriptionSage';

//Watcher saga
function* rootSaga() {
    yield takeEvery('GET_DETAILS', getDetailsSaga);
    yield all(
        [
            getHomePageSaga(),
            getDetailsSaga(),
            putTitleSaga(),
            putDescriptionSage(),
        ]
    );
}

export default rootSaga;
