import { takeLatest } from 'redux-saga/effects'

import { TOGGLE_DIALOG, ToggleDialogAction } from '../../types/Types'

function* doSomethingWhenDialogOpen(action: ToggleDialogAction) {
  yield console.log(action)
}

export default [takeLatest(TOGGLE_DIALOG, doSomethingWhenDialogOpen)]
