import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import api from '../../services/api';
import { formatNumber } from '../../helpers/formatNumber';

export default function Ofertas({ navigation }) {
  const [ofertas, setOfertas] = useState([]);
  useEffect(() => {
    async function carregarOfertas() {
      const response = await api.get('offers');
      const data = response.data.map((offer) => ({
        id: offer.id,
        image: offer.image,
        title: offer.title,
        newPrice: formatNumber(offer.newPrice),
        price: formatNumber(offer.price),
        ingredients: offer.ingredients,
        delivery: offer.delivery,
        delay: offer.delay,
        icon: offer.icon,
      }));
      setOfertas(data);
    }
    carregarOfertas();
  }, []);

  // function irParaItem(item) {
  //   navigation.navigate('Item', { item });
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Comida boa e barata!</Text>
          <Text style={styles.subTitulo}>Pratos com frete grátis.</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.vejaMais}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {ofertas.map((oferta) => (
          <TouchableOpacity
            style={styles.item}
            key={oferta.id}
            onPress={() => navigation.navigate('Item', { item: oferta })}
          >
            <Image source={{ uri: oferta.image }} style={styles.imagem} />
            <View style={styles.info}>
              <Text numberOfLines={2} style={styles.titulo}>
                {oferta.title}
              </Text>
              <View style={styles.itemPreco}>
                <Text style={styles.preco}>{oferta.newPrice}</Text>
                <Text style={styles.precoAntigo}>{oferta.price}</Text>
                <MaterialIcons name="local-offer" size={15} color="#000" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
    marginRight: 10,
    marginBottom: 15,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  subTitulo: {
    color: '#999',
  },
  vejaMais: {
    color: 'red',
  },
  lista: {
    paddingLeft: 20,
  },
  item: {
    width: 200,
    marginRight: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rbga(0,0,0, 0.06)',
    borderRadius: 4,
  },
  imagem: {
    height: 120,
    width: 200,
    backgroundColor: '#000',
  },
  info: {
    marginTop: 'auto',
    padding: 10,
  },
  itemPreco: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  preco: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
  precoAntigo: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#999',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});
