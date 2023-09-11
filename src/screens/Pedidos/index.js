import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Pedidos() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/no-itens.png')}
        style={styles.noItens}
      />
      <Text style={styles.aviso}>Você ainda não fez nenhum pedido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noItens: {
    width: 250,
    height: 250,
  },
  aviso: {
    marginTop: 25,
    fontSize: 18,
    color: '#333',
  },
});
