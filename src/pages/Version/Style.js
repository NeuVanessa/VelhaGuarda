import React from 'react'
import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    Header : {
        backgroundColor: "#009AED",
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    Background: {
        marginTop: 45,
        height: 350,
        resizeMode: 'stretch',
        justifyContent: 'center'
    },
    VersionSoft: {
        color: '#fff',
        fontSize: 30,
        marginRight: 8,
        marginTop: 35       
    },
    IconConfig: {
        resizeMode: 'stretch',
        height: 40,
        width: 40,
        borderRadius: 15,
        marginTop: 35
    },
    InfoSoft: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 75,
    },
    TxtVersion: {
        fontSize: 15,
        alignSelf: 'center'
    }
   

})

export default Style