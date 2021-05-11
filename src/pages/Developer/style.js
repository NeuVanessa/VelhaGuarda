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
    Dados: {
        justifyContent: 'center',
        alignSelf: 'center',
        
    },
    Botao: {
        backgroundColor: "#00abff",
        width: 160,
        height: 50,
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 4,
        textAlign: 'center',
        borderBottomRightRadius: 15,        
    },
    TextDev: {
        fontWeight: 300,
        color: "#000",
        marginLeft: 4,
        fontSize: 18,
    },
    BotaoTxt: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 25,
    },
    LinkedinLogo: {
        flexDirection: 'row'
    },
    Linkedin: {
        width: 30,
        height: 30,

    },
    GitHubLogo: {
        flexDirection: 'row',
    },
})

export default Style