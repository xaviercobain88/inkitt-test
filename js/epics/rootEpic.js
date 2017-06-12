import { combineEpics } from 'redux-observable'
import * as navigationsEpics from './navigationsEpics'
import * as discoverEpics from './discoverEpics'
import * as storyEpics from './storyEpics'

const rootEpic = combineEpics(
    navigationsEpics.goToSearchEpic,
    navigationsEpics.goToStoryEpic,
    storyEpics.getStoryEpic,
    discoverEpics.getDiscoverDataEpic,
);


export default rootEpic