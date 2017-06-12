import { connect } from 'react-redux'
import Story from '../components/views/Story'
import * as discoverActions from '../actions/discoverActions'
import * as routeConstants from '../constants/routeConstants'

const mapStateToProps = (state) => {
    return {
        isLoadingStory: state.ui.isLoadingStory,

        currentStory: { ...state.currentStory },
    }
}

export default connect(mapStateToProps)(Story)



