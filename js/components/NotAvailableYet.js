import React, { PureComponent } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from './Header'
import { Font } from 'expo'


class NotAvailableYet extends PureComponent {
    render() {
        return <View style={styles.container}>
            <Header />
            <Text style={styles.icon}>4</Text>
            <Text>Not available yet</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 100
    },
    icon: {
        fontFamily: "icons",
        fontSize: 100,
    }
})

export default NotAvailableYet