import {View,Text, StyleSheet} from "react-native";
import{SafeAreaView} from "react-native-safe-area-context";


export default function HomeScreen(){
    return(
       <SafeAreaView style={styles.container}>


        <Text style={styles.title}>Control</Text>


        <View style={styles.cardsContainer}>


        <View style={styles.cardsContainer}>
        <Text style={styles.cardReceber}>Constas a Receber</Text>
        <Text style={styles.cardValue}>R$ 0,00</Text>
        </View>
<View style={styles.cardPagar}>
            <Text style={styles.cardTitle}>Constas a Pagar</Text>
        <Text style={styles.cardValue}>R$ 0,00</Text>
</View>
</View>
</SafeAreaView>
    );
}


const styles=StyleSheet.create({


    container:{
        flex:1,
        padding:20,
        backgroundColor:"#fff"
    },


title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20,
    textAlign:"center"
},


cardsContainer:{
gap:20
},


cardReceber:{
backgroundColor:"#4CAF50",
padding:25,
borderRadius:10
},


cardValue:{
backgroundColor:"#fff",
padding:24,
marginTop:10
},


cardPagar:{
backgroundColor:"#E53935",
padding:25,
borderRadius:10
},


cardTitle:{
color:"#fff",
fontSize:18,
fontWeight:"bold"
}
})