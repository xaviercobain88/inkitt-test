import { Actions } from 'react-native-router-flux'
import * as storyActions from '../actions/storyActions'
import * as discoverActions from '../actions/discoverActions'
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'


export const getStoryEpic = action$ =>
    action$.ofType(discoverActions.GO_TO_STORY)
        .mergeMap(action => {
            // return ajax.getJSON(`https://cap_america.inkitt.de/1/stories/${action.id}/chapters/1`)
            return ajax.getJSON(`https://cap_america.inkitt.de/1/stories/106766/chapters/1`)
                .map(response => { console.log(response); return { type: storyActions.STORY_DATA_GOT, data: response } })
        }
        );