import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Text } from '../../App.style';
import { styles, validarEmail } from './label.style';

const Label = () => {
    const [Email, onChangeEmail] = React.useState('');
    const [Senha, onChangeSenha] = React.useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const EmailValido = validarEmail(Email);

    return (
        <View style={styles.centerLabel}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
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
            {EmailValido && <Text style={styles.Text}>Endereço de e-mail válido</Text>}
            {!EmailValido && <Text style={styles.errorText}>Endereço de e-mail inválido</Text>}
        </View>
    );
};

export { Label };