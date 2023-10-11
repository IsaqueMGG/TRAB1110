import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBarComponent: React.FC = () => {
  const [searchText, setSearchText] = useState<string>(''); // Estado para armazenar o texto da pesquisa

  const handleSearch = () => {
    // Faça algo com o valor da pesquisa, por exemplo, exiba-o no console
    console.log('Texto da Pesquisa:', searchText);
    // Você pode realizar outras ações com o valor aqui, como buscar resultados ou filtrar dados.
  };

  return (
    <View>
      <TextInput
        placeholder="Pesquisar..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)} // Atualiza o estado com o texto da pesquisa
      />
      <Button title="Pesquisar" onPress={handleSearch} />
    </View> 
  );
};

export default SearchBarComponent;
