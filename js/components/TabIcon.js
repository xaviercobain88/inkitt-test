import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Font } from 'expo'
import * as colorConstants from '../constants/colorConstants'

class TabIcon extends PureComponent {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'icons': require('../../assets/fonts/icons.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    getTabLetter() {
        return this.props.title.toLowerCase().charAt(0)
    }

    render() {
        return <View style={styles.container}>
            {this.state.fontLoaded ?
                <Text style={[styles.icon, this.props.selected && styles.active]}>{this.getTabLetter()}</Text> :
                null}
            <Text style={[styles.label, this.props.selected && styles.active]}>
                {this.props.title}
            </Text>
        </View >

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    label: {
        fontSize: 10,
        color: colorConstants.SECONDARY_COLOR
    },
    icon: {
        fontSize: 24,
        color: colorConstants.SECONDARY_COLOR,
        fontFamily: "icons"
    },
    active: {
        color: colorConstants.PRIMARY_COLOR
    }
})



export default TabIcon;