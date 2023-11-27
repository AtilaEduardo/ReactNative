import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Text } from '../../App.style';
import { styles } from './label.style';

const Label = () => {
    const [Email, onChangeTexto] = React.useState('');
    const [Senha, onChangeSenha] = React.useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <View style={styles.centerLabel}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTexto}
                value={Email}
                placeholder='Teste@delabel.com'
                maxLength={25}
                inputMode='email'
            />

            <View style={styles.input}>
                <TextInput
                    onChangeText={onChangeSenha}
                    value={Senha}
                    placeholder='Senha'
                    secureTextEntry={!mostrarSenha}
                />
                <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
                    <Text style={styles.button}>{mostrarSenha ? 'Ocultar' : 'Mostrar'}</Text>
                </Pressable>
            </View>
        </View>
    );
};

export { Label };