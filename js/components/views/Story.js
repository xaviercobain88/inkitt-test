import React, { PureComponent } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import range from 'lodash/'
import he from 'he'
var DOMParser = require('xmldom').DOMParser;

const replacementArray = [
    { tag: "p", component: Text, props: { style: { margin: 10, flexDirection: "row", flexWrap: 'wrap' } } },
    { tag: "br", component: View, props: { style: { margin: 10 } } },
    { tag: "b", component: Text, props: { style: { fontWeight: 'bold' } } },
    { tag: "i", component: Text, props: { style: { fontStyle: 'italic' } } }]

export default class Story extends PureComponent {


    createElement(childNode, key) {

        if (!childNode.hasChildNodes()) {

            return React.createElement(Text, { key }, childNode.nodeValue)
        } else {
            const children = Object.keys(childNode.childNodes).filter(key => key !== "length").map(key => childNode.childNodes[key])
            const replacement = replacementArray.find(item => item.tag == childNode.nodeName)

            return React.createElement(replacement ? replacement.component : View, replacement ? { ...replacement.props, key } : { key },
                children.map((childNode, index) => this.createElement(childNode, index)))
        }

    }

    sanetizeString(str) {
        return he.decode(this.props.currentStory.text.replace(/<br>/g, "<br/>"))
    }

    render() {

        return <ScrollView style={styles.container}>{this.createElement(
            new DOMParser().parseFromString(this.sanetizeString()), "")}</ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70
    }
})