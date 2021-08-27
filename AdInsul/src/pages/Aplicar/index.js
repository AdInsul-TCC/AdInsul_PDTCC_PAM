import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import images from '../../images/logoAdInsul125.png'

export default function Aplicar({ navigation }){
    return(
        <KeyboardAvoidingView style={styles.background}>
            <View>

                <div><center><img src={images} alt='' /></center><br></br><br></br></div>

            <Text style={styles.texto}>UNIDADES</Text>

            <TextInput style={styles.campo}
                placeholder = "0"
                autoCorrect={false}
                onChangeText={()=> {}}
            />

            <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>AGENDAR APLICAÇÃO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoDois}>
                    <Text style={styles.textoBotao}>APLICAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoDois} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.textoBotao}>LOGOUT</Text>
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
        backgroundColor: '#111112'
    },
    campo: {
        color: '#fff',
        padding: 10,
        backgroundColor: '#272727',
        height: 25
    },
    texto: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Arial'
    },
    textoBotao: {
        color: '#fff',
        fontFamily: 'Arial'
    },
    botao: {
        marginTop: 30,
        marginBottom: 50,
        backgroundColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 35
    },
    botaoDois: {
        marginTop: 10,
        backgroundColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 35
    }
});
