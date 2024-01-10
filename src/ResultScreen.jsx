
// screens/Screen1.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ navigation }) => {
    
    const data = navigation.getParam("userData")

    useEffect(() => {
        const { height, weight } = data
        const bmiIndex = (weight)  / Math.pow(height/100, 2)
        setResultText(String(bmiIndex))
        if(bmiIndex < 16) {
            setResultDescription("Gầy độ III")
        } else if(bmiIndex >= 16 && bmiIndex < 17) {
            setResultDescription("Gầy độ II")
        }else if(bmiIndex >= 17 && bmiIndex < 18.5) {
            setResultDescription("Gầy độ I")
        }else if(bmiIndex >= 18.5 && bmiIndex < 25) {
            setResultDescription("Bình thường")
        }else if(bmiIndex >= 25 && bmiIndex < 30) {
            setResultDescription("Thừa cân")
        }else if(bmiIndex >= 30) {
            setResultDescription("Béo phì")
        }

    }, [ data ])

    const [resultText, setResultText] = useState<string>("")
    const [resultDescription, setResultDescription] = useState<string>("")
    
    return (<View style={styles.container}>
        <Text style={styles.title}>Kết quả BMI</Text>
        <Text style={styles.result}>{resultText}</Text>
        <Text style={styles.description}>{resultDescription}</Text>
        
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 20,
        fontWeight: "900",
        marginVertical: 30,
        textAlign: "center"
    },
    description: {

    },
    result: {

    }
})
export default ResultScreen