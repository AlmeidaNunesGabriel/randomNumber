import {View, Text, Image} from 'react-native';
import styles from './styles';
import { useState } from 'react';
import MyButton from '../../components/button';

export default function Home (){

    const [numero, setNumero] = useState(null);

    const gerarNumero = () => {
        const aleatorio = Math.floor(Math.random() * 11);
        setNumero(aleatorio); 
    }
   return(

   
   <View style={styles.container}>
        <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/dice.png')} style={styles.image}/> 
        </View>
        
        <Text style={styles.mensagem}>Pense em um nº de 0 a 10</Text>
        <Text style={styles.numero}>{numero !== null ? numero : ''}</Text>
        <View style={styles.linha}></View>
        <MyButton title="Descobrir" onPress={gerarNumero} color='green'/>
    </View>
   )
}