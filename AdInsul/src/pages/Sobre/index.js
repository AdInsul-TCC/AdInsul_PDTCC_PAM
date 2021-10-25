import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import images from '../../images/logoAdInsul125.png'
export default function Sobre({ navigation }){
    return(

        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.backgroundTextos}>

        <div>
        <img src={images} alt='' />
        </div>

                <Text style={styles.textoAdInsul}>     A diabetes é a quarta comorbidade que mais mata no mundo e que cada 10 segundos mais uma contrai a doença, segundo o Dr. Rodrigo Lamounier. 

                    O Brasil atualmente ocupa o 4º lugar como o país com maior número de pessoas diabéticas no mundo, o Ministério da Saúde no ano de 2013 apresentou dados onde nos últimos 6 anos houve um aumento de 40% da população que possuem diabetes.
                    
                    O projeto se estrutura a partir de uma placa Arduino uno r3 que será programada com as linguagens C++ (linguagem padrão do Arduino) e JavaScript, que dá suporte ao componente bluetooth module hc-06 que será necessária para a comunicação entre software-usuário tendo em vista que as configurações de dosagem e hora de aplicação serão feitas pelo próprio a partir de seu celular, o app será feito utilizando principalmente do React Native. Vale lembrar que as unidades de insulina são determinadas pelo médico.
</Text>
        
            </View>
            <View>
                
                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.textoBotao}>VOLTAR</Text>
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
        fontSize: 25,
        fontFamily: 'Arial',
        textAlign: 'justify',
        lineHeight: 30
    },
    textoBotao: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Arial'
    },
    botao: {
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 35
    }
});