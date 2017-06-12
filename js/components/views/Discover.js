import React, { PureComponent } from 'react'
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import CommunityFeed from '../CommunityFeed'
import FeaturedFeed from '../FeaturedFeed'
import PropTypes from 'prop-types'
import Header from '../Header'
import * as routeConstants from '../../constants/routeConstants'
import { Font } from 'expo'
import * as colorConstants from '../../constants/colorConstants'


export default class Discover extends PureComponent {
    state = {
        fontLoaded: false,
        activeTab: routeConstants.FEATURED_FEED_TITLE
    };

    async componentDidMount() {
        this.props.init()
        await Font.loadAsync({
            'raleway': require('../../../assets/fonts/Raleway-Medium.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return <View style={styles.container}>
            <Header showSearch onPressSearch={this.props.onPressSearch} />
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={[styles.tabContainer, this.state.activeTab == routeConstants.FEATURED_FEED_TITLE && styles.activeTabContainer]}>
                    {this.state.fontLoaded ? <Text style={[styles.tab, this.state.activeTab == routeConstants.FEATURED_FEED_TITLE && styles.active]}>
                        {routeConstants.FEATURED_FEED_TITLE}</Text> : null}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabContainer, this.state.activeTab == routeConstants.COMMUNITY_FEED_TITLE && styles.activeTabContainer]}>
                    {this.state.fontLoaded ? <Text style={[styles.tab, this.state.activeTab == routeConstants.COMMUNITY_FEED_TITLE && styles.active]}>
                        {routeConstants.COMMUNITY_FEED_TITLE}</Text> : null}
                </TouchableOpacity>
            </View>
            <FeaturedFeed isLoading={this.props.isLoading}
                carouselImages={this.props.carouselImages}
                storyListFeed={this.props.storyListFeed}
                onPressFactory={this.props.onPressFactory} />
        </View>
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "column"
    },
    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    tabContainer: {
        flex: 1,
        alignItems: "center",

    },
    activeTabContainer: {
        borderBottomWidth: 2.5,
        borderColor: colorConstants.PRIMARY_COLOR,

    },
    tab: {
        color: colorConstants.SECONDARY_COLOR,
        fontFamily: 'raleway',
        fontSize: 14,
        marginBottom: 13
    },
    active: {
        color: colorConstants.PRIMARY_COLOR
    }
})


Discover.propTypes = {
    onPressSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    carouselImages: PropTypes.arrayOf(PropTypes.shape({
        base64: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })),
    init: PropTypes.func.isRequired,
    storyListFeed: PropTypes.array.isRequired,
    onPressFactory: PropTypes.func.isRequired

};