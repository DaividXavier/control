import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { maskData, maskValor } from '../util/mask';
 
export default function ContasReceberScreen({ navigation }: any) {
 
    const [data, setData] = useState("");
    const [valor, setValor] = useState("");
    const [observacao, setObservacao] = useState("");
    const [entidade, setEntidade] = useState("");
 
    const entidades = [
        { id: 1, nome: "Cliente A"},
        { id: 2, nome: "Cliente B"},
        { id: 3, nome: "Cliente C"}
    ];
     
    function salvarConta() {
 
        const conta = {
            entidade,
            data,
            valor,
            observacao
 
        };
 
        console.log("Dados da conta");
        console.log(conta);
    }
return(
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Cadastrar Conta a Receber</Text>
            <TextInput placeholder="Data (DD/MM/AAAA)" style={styles.input} value={data} keyboardType='numeric'
            onChangeText={(text) => setData(maskData(text))}/>
            <Text style={styles.label}>Selecionar Entidade</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={entidade} onValueChange={(itemValue) => setEntidade(itemValue)}>
                    {entidades.map((entidade) => (
                        <Picker.Item key={entidade.id} label={entidade.nome} value={entidade.nome} />
                    ))}
                <Picker.Item label="Selecione..." value="" />
                {entidades.map((item) => (
                    <Picker.Item key={item.id} label={item.nome} value={item.id} />
                ))}
                </Picker>
            </View>

            <TextInput placeholder="Valor" style={styles.input} keyboardType={"numeric"} value={valor}
            onChangeText={(text) => setValor(maskValor(text))}/>
            <TextInput placeholder="Observação" multiline style={[styles.input, styles.textArea]} value={observacao}
            onChangeText={setObservacao}/>

            <TouchableOpacity style={styles.button} onPress={salvarConta}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>


        </ScrollView>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
safeArea: {
flex: 1,
backgroundColor: "#fff",
},
container: {
padding: 20,
paddingBottom: 80,
},
title: {
fontSize: 24,
fontWeight: "bold",
marginBottom: 20,
textAlign: "center",
},
pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
},
label: {
fontWeight: "bold",
marginBottom: 5,
},
input: {
borderWidth: 1,
borderColor: "#ccc",
borderRadius: 8,
padding: 12,
marginBottom: 15,
},
textArea: {
height: 100,
textAlignVertical: "top",
},
button: {
backgroundColor: "#1E88E5",
borderRadius: 8,
padding: 15,
alignItems: "center",
},
buttonText: {
color: "#fff",
fontWeight: "bold",
},
buttons:{
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
},
cancelText: {
    backgroundColor: "#ccc",
    fontWeight: "bold",
    padding: 15,
    alignItems: "center",
    flex: 1,
},
cancelButton:{
   fontWeight: "bold",
}
});