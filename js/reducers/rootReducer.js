import { combineReducers } from 'redux'
import carouselImagesReducer from './carouselImagesReducer'
import uiReducer from './uiReducer'
import storyListFeedReducer from './storyListFeedReducer'
import currentStoryReducer from './currentStoryReducer'

const rootReducer = combineReducers({
    carouselImages: carouselImagesReducer,
    ui: uiReducer,
    storyListFeed: storyListFeedReducer,
    currentStory: currentStoryReducer
});

export default rootReducer