import React, { PureComponent } from 'react'
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Font } from 'expo'
import * as colorConstants from '../constants/colorConstants'


class Header extends PureComponent {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'icons': require('../../assets/fonts/icons.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
            />

            {this.props.showSearch && this.state.fontLoaded ?
                <TouchableOpacity onPress={this.props.onPressSearch} style={styles.search}>
                    <Text style={styles.searchIcon}>s</Text>
                </TouchableOpacity>

                : null}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 28,
        flexDirection: "row",
        justifyContent: "center",
        height: 48
    },
    logo: {

    },
    search: {

        position: "absolute",
        right: 0,
        paddingRight: 12, 
        paddingTop: 2
    },
    searchIcon: {
        color: colorConstants.PRIMARY_COLOR,
        fontFamily: "icons",
        fontSize: 22,
    }
})


Header.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    onPressSearch: PropTypes.func.isRequired,
}
Header.defaultProps = {
    showSearch: false,
    onPressSearch: () => console.log("no handler set")
}
export default Header