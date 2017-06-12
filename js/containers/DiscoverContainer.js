import { connect } from 'react-redux'
import Discover from '../components/views/Discover'
import * as discoverActions from '../actions/discoverActions'
import * as routeConstants from '../constants/routeConstants'

const mapStateToProps = (state) => {
    return {
        isLoading: state.ui.isLoading,
        carouselImages: state.carouselImages.map(carouselImage => {
            return {
                id: carouselImage.story_id,
                base64: carouselImage.iphone_image_base64,
                url: carouselImage.iphone_image_url
            }
        }),
        storyListFeed: state.storyListFeed.map(storyList => {
            return {
                id: storyList.id,
                title: storyList.title,
                stories: storyList.items.map(story => {
                    return {
                        title: story.title,
                        base64: story.vertical_cover_base64,
                        url: story.vertical_cover.iphone.url,
                        id: story.id,
                        teaser: story.teaser,
                        rating: story.overall_rating_cache,
                        genres: story.genres
                    }
                })
            }
        })
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        onPressSearch: () => dispatch({ type: discoverActions.GO_TO_SEARCH }),
        init: () => dispatch({ type: discoverActions.GET_DISCOVER_DATA }),
        onPressFactory: (id) => () => dispatch({ type: discoverActions.GO_TO_STORY, id: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Discover)



