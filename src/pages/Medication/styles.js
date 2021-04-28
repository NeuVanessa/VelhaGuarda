import React from 'react'
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    Header: {
        paddingTop: 34,
        paddingBottom: 80,
        backgroundColor: '#009AED',
        height: 100,
        width: '100%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    Title: {
        fontSize: 24,
        fontFamily: 'serif',
        color: 'white',
        alignSelf: 'center',
        marginTop: 20,
    },
    ViewInput: {
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#009AED',
        width: 300,
        paddingBottom: 20,
        borderRadius: 15,
    },
    SubBlack: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'serif',
        alignSelf: 'center',
        position: 'relative',
        top: 15,

    },
    Inputs: {
        marginTop: 25,
        width: 280,
        borderWidth: 1,
        borderColor: '#009AED',
        alignSelf: 'center',
        paddingHorizontal: 15,
        color: '#009AED',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 20
        
    },
    Button: {
        marginTop: 25,
        padding: 15,
        width: 120,
        backgroundColor: 'white',
        borderRadius: 15,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#06f',

    },
    TextButton: {
        color: '#06f',
        fontSize: 18,
        fontFamily: 'serif',
        textAlign: 'center'
    },

    // RESULTADO DA PESQUISA
    Scroll: {
        width: '100%',
        height: 320,
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: '#06f',
        paddingHorizontal: 20,
        
    },
    TituloResultado: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'serif',
        alignSelf: 'center',
        position: 'relative',
        top: 15,

    },
    TextResultado: {
        fontWeight: 'bold',
        marginTop: 20,
        color: '#06f',
        fontSize: 25,
        alignSelf: 'center',
        borderColor: '#06f',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        paddingHorizontal: 10

    },
    Result: {
        width: 310,
        height: 200,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 10
                
    },
    ViewResult: {
        alignContent: 'center'
    },
    IconRemedio: {
        width: 120,
        height:120,
        marginTop: 20
    },
    InfoRemedio:{
       marginTop: 20
    },
    TituloRemedio: {
        fontSize: 20,
        color: '#0066ff',
        fontWeight: 'bold',
    },
    DescricaoRemedio: {
        color: '#666',
        flexWrap: 'wrap'
        
    },
    PrecoRemedio: {
        position: 'relative',
        bottom: 25,
        fontSize: 25,
        color: '#f80'

    },
    InfoScroll : {
        width: 180, 
                   
    },
    quantidadeView: {
        flexDirection: 'row',
        position: 'relative',
    },
    quant: {
        backgroundColor: '#0066ff',
        width: 20,
        textAlign: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        marginLeft: 3,
        position: 'relative',
        right: 75,
        top: 10
    },
    txtQuant: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    textoQuant : {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 3,
        position: 'relative',
        right: 75,
        top: 10
    },
    qntTxt : {
        position: 'relative',
        top: 28,
        right: 55,
        color: '#666',
        // fontWeight: 'bold',
        
    }



})

export default style