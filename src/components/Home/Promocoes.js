import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import api from '../../services/api';

export default function Promocoes({ navigation }) {
  const [promocoes, setPromocoes] = useState([]);

  useEffect(() => {
    async function carregarPromocoes() {
      const response = await api.get('promotions');
      setPromocoes(response.data);
    }
    carregarPromocoes();
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.lista}
    >
      {promocoes.map((promocao) => (
        <TouchableOpacity style={styles.item} key={promocao.id}>
          <Image source={{ uri: promocao.image }} style={styles.imagem} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: {
    marginVertical: 20,
    marginHorizontal: 0,
    paddingLeft: 5,
  },
  item: {
    marginLeft: 15,
  },
  imagem: {
    width: 300,
    height: 150,
  },
});
