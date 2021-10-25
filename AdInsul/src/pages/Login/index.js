import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import images from '../../images/logoAdInsul125.png'
export default function Login({ navigation }){
    return(

        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.backgroundTextos}>

        <div>
        <img src={images} alt='' />
        </div>

                <Text style={styles.textoAdInsul}>AdInsul</Text>
                <Text style={styles.textoLogar}>Logar</Text>
            </View>
            <View>
                <TextInput style={styles.campo}
                placeholder = "código de acesso"
                autoCorrect={false}
                onChangeText={()=> {}}
                />
                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Aplicar')}>
                    <Text style={styles.textoBotao}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoSobre} onPress={()=>navigation.navigate('Sobre')}>
                    <Text style={styles.textoBotao}>?</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111112',
    },
    backgroundTextos: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoAdInsul: {
        color: '#fff',
        fontSize: 50,
        fontFamily: 'Arial'
    },
    textoLogar: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Arial'
    },
    textoBotao: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Arial'
    },
    campo: {
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    botao: {
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 35
    },
    botaoSobre: {
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 30,
        width: 30
    }
});