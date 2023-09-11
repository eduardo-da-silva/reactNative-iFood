import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Endereco() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuEndereco}>
        <Text style={styles.localizacao}>Próximo de minha casa...</Text>
        <MaterialIcons name="keyboard-arrow-down" size={20} color={'#FF5665'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuEndereco: {
    flexDirection: 'row',
  },
  localizacao: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
