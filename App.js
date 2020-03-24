import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const[lembrete, setLembrete] = useState ('')

  const capturarLembrete = (textoDigitado) => {
    setLembrete(textoDigitado)
  }

  const [lembretes, setLembretes] = useState([]);

  const [contadorLembretes, setContadorLembretes] = useState(0);

  const adicionarLembrete = () => {
    //spread
    setLembretes (lembretes => {
      console.log (lembretes);
      setContadorLembretes(contadorLembretes + 1);
      return [{key: contadorLembretes.toString(), value: lembrete}, ...lembretes];
    });
    
    //console.log (lembrete);
  }
  

  return (
    <View style={styles.telaPrincipalView}>
      <View style={styles.lembreteView}>
        {/*Usuário irá inserir lembretes aqui*/}
        <TextInput 
          placeholder="Lembrar..."
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button
          title="+"
          onPress={adicionarLembrete}
        />
      </View>
      <FlatList
        data={lembretes}
        renderItem={
          lembrete => (
            <View style={styles.itemNaLista}>
              <Text>{lembrete.item.value}</Text>
            </View>
          )          
        }
      />
      {/*<ScrollView>
        {Aqui será exibida a lista de lembretes}
        {
          lembretes.map((lembrete) => 
            <View 
              key={lembrete}
              style={styles.itemNaLista}>
                <Text>{lembrete}</Text>
            </View>
          )         
        }
      </ScrollView>*/}
    </View>
   
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 4
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});
