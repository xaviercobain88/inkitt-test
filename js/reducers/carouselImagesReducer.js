import * as discoverActions from '../actions/discoverActions'
import * as apiConstants from '../constants/apiConstants'

export default carouselImagesReducer = (state = [], action) => {

    switch (action.type) {
        case discoverActions.DISCOVER_DATA_GOT:
            return [
                ...action.data.find(item => item.id = apiConstants.TOP_BANNER_LIST).items
            ] 

        default:
            return state
    }

};
