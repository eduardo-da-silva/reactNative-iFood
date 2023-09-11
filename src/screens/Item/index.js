import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';

export default function Item({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={styles.detalhe}></View>
      <Image style={styles.itemImage} source={{ uri: item.offer_url }} />
      <Text style={styles.itemTitulo}>{item.title}</Text>
      <Text style={styles.itemIngredientes}>{item.ingredients}</Text>
      <View style={styles.info}>
        <Text style={styles.itemPreco}>{item.newPrice}</Text>
        <Text style={styles.itemPrecoAntigo}>{item.price}</Text>
      </View>

      <View style={styles.entrega}>
        <View style={styles.wrapper}>
          <MaterialIcons name={item.icon} size={22} color="#F01" />
          <Text style={styles.entregaTitulo}>{item.delivery}</Text>
        </View>
        <Text style={styles.entregaAtraso}>{item.delay}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  detalhe: {
    marginTop: 10,
    marginBottom: 0,
    marginHorizontal: 20,
  },
  itemImage: {
    height: 180,
    borderRadius: 5,
  },
  itemTitulo: {
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemIngredientes: {
    fontSize: 18,
    color: '#999',
    marginTop: 10,
  },
  itemPreco: {
    color: 'green',
    fontSize: 22,
  },
  itemPrecoAntigo: {
    marginLeft: 5,
    color: '#999',
    fontSize: 22,
    textDecorationLine: 'line-through',
  },
  entrega: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 2,
    padding: 15,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entregaTitulo: {
    fontSize: 15,
    color: 'red',
  },
  entregaAtraso: {
    marginLeft: 10,
  },
});
