import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import * as colorConstants from '../constants/colorConstants'
import Swiper from 'react-native-swiper'
import StoryList from './StoryList'
const { width } = Dimensions.get('window')


class FeaturedFeed extends PureComponent {

    componentDidMount() {

    }

    getLoadingPlaceholder() {
        return <View style={styles.container}>
            <View style={styles.loadingCarousel}></View>
            <View style={styles.loadingStoryListTitle}></View>
            <View style={styles.loadingStoryListCarouse}>
                <View style={{
                    backgroundColor: colorConstants.LOADING_COLOR,
                    height: 200, width: 125, marginRight: 15
                }}></View>
                <View style={{
                    backgroundColor: colorConstants.LOADING_COLOR,
                    height: 170, width: 105, marginRight: 20
                }}></View>
                <View style={{
                    backgroundColor: colorConstants.LOADING_COLOR,
                    height: 170, width: 105, marginRight: 10
                }}></View>
            </View>
            <View style={styles.loadingStoryTitle}></View>
            <View style={styles.loadingStoryDescription}></View>

        </View>
    }

    getDot() {
        return <View style={styles.dot} />
    }

    getActiveDot() {
        return <View style={styles.activeDot} />
    }

    getImagesForCarouse() {
        return this.props.carouselImages.map((carouselImage) => <TouchableOpacity
            style={styles.slide} key={carouselImage.id} onPress={this.props.onPressFactory(carouselImage.id)}>
            <Image style={styles.image}
                defaultSource={{ uri: "data:image/png;base64," + carouselImage.base64 }}
                source={{ uri: carouselImage.url }} />
        </TouchableOpacity>)
    }
    getStoryListFeed() {

        return this.props.storyListFeed.map(storyList => <StoryList key={storyList.id} title={storyList.title}
            stories={storyList.stories} onPressFactory={this.props.onPressFactory} />)
    }

    render() {

        if (this.props.isLoading) {
            return this.getLoadingPlaceholder()
        }
        return <ScrollView><Swiper style={styles.wrapper} height={155}
            dot={this.getDot()}
            activeDot={this.getActiveDot()}
            paginationStyle={styles.pagination} autoplay>
            {this.getImagesForCarouse()}
        </Swiper>
            {this.getStoryListFeed()}
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    loadingCarousel: {
        backgroundColor: colorConstants.LOADING_COLOR,
        height: 155
    },
    loadingStoryListTitle: {
        backgroundColor: colorConstants.LOADING_COLOR,
        height: 18,
        width: 120,
        margin: 20,
    },
    loadingStoryTitle: {
        backgroundColor: colorConstants.LOADING_COLOR,
        height: 18,
        width: 240,
        margin: 20,
    },
    loadingStoryDescription: {
        backgroundColor: colorConstants.LOADING_COLOR,
        height: 200,
        marginHorizontal: 20,
    },
    loadingStoryListCarouse: {
        flexDirection: "row",
        height: 155,
        margin: 20,
        alignItems: "center"
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width,
        flex: 1
    },
    dot: {
        backgroundColor: '#999',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    pagination: {
        bottom: 10
    }

})


FeaturedFeed.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    carouselImages: PropTypes.arrayOf(PropTypes.shape({
        base64: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })),
    storyListFeed: PropTypes.array.isRequired,
    onPressFactory: PropTypes.func.isRequired


    // loadingCarousel: 
}

export default FeaturedFeed