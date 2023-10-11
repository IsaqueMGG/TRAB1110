import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

interface InfoItem {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [input3, setInput3] = useState<string>('');
  const [input4, setInput4] = useState<string>('');
  const [infoList, setInfoList] = useState<InfoItem[]>([]);

  const handleButtonPress = () => {
    const newInfo = [input1, input2, input3, input4].filter(Boolean);
    setInfoList((prevList) => [
      ...prevList,
      ...newInfo.map((text, index) => ({ id: `${index}`, text })),
    ]);
    setInput1('');
    setInput2('');
    setInput3('');
    setInput4('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={input1}
        onChangeText={(text) => setInput1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={input2}
        onChangeText={(text) => setInput2(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nacionalidade"
        value={input3}
        onChangeText={(text) => setInput3(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Anos de experiencia"
        value={input4}
        onChangeText={(text) => setInput4(text)}
      />
      <Button title="Cadastrar" onPress={handleButtonPress} />
      <FlatList
        data={infoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.infoText}>{item.text}</Text>
        )}/>
        <View>
        <Link href="/index"><Button title="Primeira Pagina"/></Link>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    flexDirection: 'row',
    color: '#8c8c8c',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default App;
