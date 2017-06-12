import { Actions } from 'react-native-router-flux'
import * as discoverActions from '../actions/discoverActions'
import * as routeConstants from '../constants/routeConstants'
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'


export const getDiscoverDataEpic = action$ =>
    action$.ofType(discoverActions.GET_DISCOVER_DATA) 
        .mergeMap(action =>
            ajax.getJSON("https://cap_america.inkitt.de/2/discovery")
                .map(response => { return { type: discoverActions.DISCOVER_DATA_GOT, data: response } })
        );