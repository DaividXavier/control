import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView}
from "react-native";
 
import {SafeAreaView} from "react-native-safe-area-context";
 
export default function EntidadeScreen(){
 
    return(
 
        <SafeAreaView style={styles.safeArea}>
 
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            >
 
        <Text style={styles.title}>Cadastro de Entidade</Text>
 
        <TextInput
            placeholder="Nome"
            style={styles.input}/>
       
        <TextInput
        placeholder="CEP"
        keyboardType="numeric"
        style={styles.input}/>
 
        <TextInput
            placeholder="Endereço"
            style={styles.input}/>
 
        <TextInput
            placeholder="Número"
            keyboardType="numeric"
            style={styles.input}/>
 
        <TextInput
            placeholder="Bairro"
            style={styles.input}/>
 
        <TextInput
            placeholder="Cidade"
            style={styles.input}/>
 
        <TextInput
            placeholder="Estado"
            style={styles.input}/>
 
        <TextInput
            placeholder="Telefone"
            keyboardType="phone-pad"
            style={styles.input}/>
 
        <TextInput
            placeholder="Observações"
            multiline
            style={[styles.input, styles.textArea]}/>
 
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
 
    </ScrollView>
</SafeAreaView>
);
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
marginTop: 10,
},
buttonText: {
color: "#fff",
fontWeight: "bold",
},
});
 