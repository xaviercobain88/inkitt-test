import * as discoverActions from '../actions/discoverActions'
import * as apiConstants from '../constants/apiConstants'

export default storyListFeedReducer = (state = [], action) => {

    switch (action.type) {
        case discoverActions.DISCOVER_DATA_GOT:
            return [
                ...action.data.filter(item => item.type ==apiConstants.STORY_LIST)
            ] 
        default:
            return state
    }

};
