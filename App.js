import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect, Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './js/epics/rootEpic'
import rootReducer from './js/reducers/rootReducer'
import { Scene, Router } from 'react-native-router-flux';
import * as routeConstants from './js/constants/routeConstants'
import OfflineLibrary from './js/components/views/OfflineLibrary'
import DiscoverContainer from './js/containers/DiscoverContainer'
import Notifications from './js/components/views/Notifications'
import More from './js/components/views/More'
import Search from './js/components/views/Search'
import StoryContainer from './js/containers/StoryContainer'
import TabIcon from './js/components/TabIcon'



const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);
const ConnectedRouter = connect()(Router);


export default class App extends PureComponent {


  render() {

    return <Provider store={store}>

      <ConnectedRouter>

        <Scene key={routeConstants.ROOT} hideNavBar tabs tabBarStyle={style.tabBarStyle}>
          <Scene key={routeConstants.OFFLINE_LIBRARY} title={routeConstants.OFFLINE_LIBRARY_TITLE}
            component={OfflineLibrary} icon={TabIcon} hideNavBar />
          <Scene key={routeConstants.DISCOVER} title={routeConstants.DISCOVER_TITLE}
            initial icon={TabIcon} hideNavBar >
            <Scene key={routeConstants.DISCOVER_FEED} title={routeConstants.DISCOVER_FEED_TITLE}
              component={DiscoverContainer} />
            <Scene key={routeConstants.SEARCH} title={routeConstants.SEARCH_TITLE} hideNavBar={false}
              component={Search} hideTabBar />
            <Scene key={routeConstants.STORY} title={routeConstants.STORY_TITLE} hideNavBar={false}
              component={StoryContainer} hideTabBar />
          </Scene>
          <Scene key={routeConstants.NOTIFICATIONS} title={routeConstants.NOTIFICATIONS_TITLE}
            component={Notifications} icon={TabIcon} hideNavBar />
          <Scene key={routeConstants.MORE} title={routeConstants.MORE_TITLE}
            component={More} icon={TabIcon} hideNavBar />
        </Scene>
      </ConnectedRouter>
    </Provider>

  }
}

const style = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: '#F8F8F8',
    opacity: 1
  }
});