import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import api from '../../services/api';

export default function Sugestoes() {
  const [sugestoes, setSugestoes] = useState([]);
  useEffect(() => {
    async function carregarSugestoes() {
      const response = await api.get('suggestions');
      setSugestoes(response.data);
    }
    carregarSugestoes();
  }, []);
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.lista}>
      {sugestoes.map((sugestao) => (
        <TouchableOpacity style={styles.item} key={sugestao.id}>
          <Image source={{ uri: sugestao.image }} style={styles.imagem} />
          <Text style={styles.titulo}>{sugestao.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: {
    marginTop: 20,
    paddingLeft: 5,
  },
  item: {
    alignItems: 'center',
    marginLeft: 15,
  },
  imagem: {
    width: 100,
    height: 50,
    borderRadius: 5,
  },
  titulo: {
    marginTop: 3,
    color: '#999',
  },
});
