import React, { PureComponent } from 'react'
import { Text, Image, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { Font } from 'expo'
import * as colorConstants from '../constants/colorConstants'
import Carousel from 'react-native-snap-carousel'
import range from 'lodash/range';

const sliderWidth = Dimensions.get('window').width
const itemWidth = 133
const itemMargin = 4
const itemHeight = 200


class StoryList extends PureComponent {

    state = {
        id: null,
        title: "",
        teaser: "",
        rating: 0,
        genres: [],
        onPress: null,
        fontLoaded: false,
    }

    async componentDidMount() {
        if (this.props.stories.length > 0) {
            const story = this.props.stories[0]
            this.setState({
                id: story.id,
                title: story.title,
                teaser: story.teaser,
                rating: Math.floor(story.rating),
                genres: story.genres,
                onPress: story.onPress,
            });
        }
        this.changeStoryState = this.changeStoryState.bind(this)
        await Font.loadAsync({
            'raleway-semibold': require('../../assets/fonts/Raleway-SemiBold.ttf'),
        });
        this.setState({ fontLoaded: true });

    }

    getSlides() {
        return this.props.stories.filter(story => story.url != null)
            .map(story => <Image key={story.id} source={{ uri: story.url }} style={{
                width: itemWidth - 2 * itemMargin,
                height: itemHeight,
                margin: itemMargin
            }}></Image>)
    }

    getRating() {
        return <View style={styles.rating}>
            <Text style={styles.filledStar}>{range(this.state.rating).map(num => "r").join("")}</Text>
            <Text style={styles.star}>{range(5 - this.state.rating).map(num => "r").join("")}</Text>
        </View>
    }

    changeStoryState(slideIndex) {
        const story = this.props.stories[slideIndex]
        this.setState({
            id: story.id,
            title: story.title,
            teaser: story.teaser,
            rating: Math.floor(story.rating),
            genres: story.genres,
            onPress: this.props.onPressFactory(story.id),
        });
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Carousel sliderWidth={sliderWidth + sliderWidth / 2 + 40}
                itemWidth={itemWidth}
                containerCustomStyle={{ marginLeft: -sliderWidth / 2 - 51 }}
                enableMomentum={false}
                autoplay autoplayInterval={3000} autoplayDelay={0}
                onSnapToItem={this.changeStoryState}>
                {this.getSlides()}
            </Carousel>
            <TouchableOpacity onPress={this.props.onPressFactory(this.state.id)}>
                <View>
                    {this.state.fontLoaded && <Text style={styles.bookTitle}>{this.state.title}</Text>}
                    <Text style={styles.teaser}>{this.state.teaser}</Text>
                    {this.getRating()}
                    <View style={styles.lastContainer}>
                        <View style={styles.genresContainer}>
                            {this.state.genres.map(item => <TouchableOpacity key={item} style={styles.buttonContainer}><Text style={styles.button} >{item}</Text></TouchableOpacity>)}
                        </View>
                        <TouchableOpacity style={styles.readNowContainer}><Text style={styles.readNow}>Read now</Text></TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        paddingTop: 21,
        paddingBottom: 15,
        flexDirection: "column",
        borderBottomColor: "#ddd",
        borderBottomWidth: 0.5
    },
    title: {
        fontFamily: 'raleway',
        fontSize: 13,
        color: "#222",
        marginBottom: 14

    },
    bookTitle: {
        fontFamily: 'raleway-semibold',
        fontSize: 14,
        marginVertical: 10
    },
    teaser: {
        fontFamily: 'raleway',
        fontSize: 15,
        color: "#222"
    },
    rating: {
        marginVertical: 10,
        flexDirection: "row"
    },
    filledStar: {
        fontFamily: "icons",
        color: "#E3C343",
        fontSize: 12
    },
    star: {
        fontFamily: "icons",
        color: "#F5E9B8",
        fontSize: 12
    },
    lastContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    genresContainer: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    readNowContainer: {
        padding: 6,
        paddingHorizontal: 12,
        // borderWidth: 1,
        // borderColor: "black",
        borderRadius: 5,
        backgroundColor: "#000"
    },
    readNow: {
        fontFamily: 'raleway',
        fontSize: 12,
        color: "#fff"
    },
    buttonContainer: {
        paddingRight: 10
    },
    button: {
        padding: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        fontFamily: 'raleway',
        fontSize: 12,
        color: "#b5b5b5",
    }
})


StoryList.propTypes = {
    title: PropTypes.string.isRequired,
    stories: PropTypes.arrayOf(PropTypes.shape({
        base64: PropTypes.string,
        url: PropTypes.string,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired,
        rating: PropTypes.number,
        genres: PropTypes.array.isRequired
    })),
    onPressFactory: PropTypes.func.isRequired

}
StoryList.defaultProps = {

}
export default StoryList