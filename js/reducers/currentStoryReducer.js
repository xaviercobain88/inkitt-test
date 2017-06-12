import * as storyActions from '../actions/storyActions'
import * as apiConstants from '../constants/apiConstants'

export default currentStoryReducer = (state = {
    chapterNumber: "",
    name: "",
    text: "<p></p>",
    wordsCount: "",
}, action) => {

    switch (action.type) {
        case storyActions.STORY_DATA_GOT:
            // console.log(action.data, "///")
            return {
                chapterNumber: action.data.response[apiConstants.CHAPTER_NUMBER],
                name: action.data.response[apiConstants.NAME],
                text: action.data.response[apiConstants.TEXT],
                wordsCount: action.data.response[apiConstants.WORDS_COUNT],
            }
        default:
            return state
    }

};
