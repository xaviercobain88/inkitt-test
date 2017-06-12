import { Actions } from 'react-native-router-flux'
import * as discoverActions from '../actions/discoverActions'
import * as routeConstants from '../constants/routeConstants'


export const goToSearchEpic = action$ =>
    action$.ofType(discoverActions.GO_TO_SEARCH).forEach(action => Actions[routeConstants.SEARCH]())

export const goToStoryEpic = action$ =>
    action$.ofType(discoverActions.GO_TO_STORY).forEach(action => Actions[routeConstants.STORY]())