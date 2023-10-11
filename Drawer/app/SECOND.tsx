import React from 'react';
import { View, Text } from 'react-native';

const ListaJogadoresScreen: React.FC<{ route: any }> = ({ route }) => {
  const { nomeTecnico, time } = route.params;

  const footballPlayers = [
      {
      name: "Cristiano Ronaldo",
      position: "Forward",
      age: 36,
      },
      {
      name: "Lionel Messi",
      position: "Attacking Midfielder",
      age: 34,
      },
      {
      name: "Neymar Jr.",
      position: "Forward",
      age: 29,
      },
      {
      name: "Kylian Mbappé",
      position: "Forward",
      age: 23,
      },
      {
      name: "Sergio Ramos",
      position: "Defender",
      age: 35,
      },
      {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      age: 30,
      },
      {
      name: "Robert Lewandowski",
      position: "Forward",
      age: 32,
      },
      {
      name: "Virgil van Dijk",
      position: "Defender",
      age: 30,
      },
      {
      name: "Luka Modric",
      position: "Midfielder",
      age: 35,
      },
      {
      name: "Erling Haaland",
      position: "Forward",
      age: 21,
      },
  ];

  return (
    <View>
      <Text>Nome do Técnico: {nomeTecnico}</Text>
      <Text>Time: {time}</Text>

      <Text>Lista de Jogadores:</Text>
      {footballPlayers.map((jogador, index) => (
        <View key={index}>
          <Text>Nome: {jogador.name}</Text>
          <Text>Posição: {jogador.position}</Text>
        </View>
      ))}
    </View>
  );
};

export default ListaJogadoresScreen;
