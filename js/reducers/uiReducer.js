import * as discoverActions from '../actions/discoverActions'
import * as storyActions from '../actions/storyActions'
import * as apiConstants from '../constants/apiConstants'

export default uiReducer = (state = { isLoading: false, isLoadingStory: false }, action) => {

    switch (action.type) {
        case discoverActions.GET_DISCOVER_DATA:
            return {
                ...state, isLoading: true
            }
        case discoverActions.DISCOVER_DATA_GOT:
            return {
                ...state, isLoading: false
            }
        case discoverActions.GO_TO_STORY:
            return {
                ...state, isLoadingStory: true
            }
        case storyActions.STORY_DATA_GOT:
            return {
                ...state, isLoadingStory: false
            }
        default:
            return state
    }

};
