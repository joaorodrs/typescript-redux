import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { loadFailure, loadSuccess } from './actions'

export function* load() {
  try {
    const response = yield call(api.get, 'users/joaorodrs/repos')

    console.log(response.data)

    yield put(loadSuccess(response.data))
  } catch(err) {
    yield put(loadFailure())
  }
}