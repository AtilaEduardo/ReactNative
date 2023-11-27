import React, { useState } from 'react';
import { Pressable, View, Modal as RNModal } from 'react-native';
import { Text } from '../../App.style';
import { styles } from './modal.style';
import { Label } from '../Label';

const LayoutModal = () => {
    const [mostrarModal, setMostrarModal] = useState(false);

    return (
        <View>
            <Pressable onPress={() => setMostrarModal(!mostrarModal)}>
                <Text style={styles.buttonAbrirModal}>Abrir Modal</Text>
            </Pressable>
            <RNModal 
                animationType='slide'
                visible={mostrarModal}
                onRequestClose={() => setMostrarModal(!mostrarModal)}>
                <View>
                    <Label />
                    <View style={[styles.centerModal, styles.fixedButton]}>
                        <Pressable onPress={() => setMostrarModal(!mostrarModal)}>
                            <Text style={styles.buttonFecharModal}>Fechar Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </RNModal>
        </View>
    );
};

export { LayoutModal };