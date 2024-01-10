
// screens/Screen1.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {

    const [ height, setHeight ] = useState<number>(0)
    const [ weight, setWeight ] = useState<number>(0)
    
    const viewResult = () => {
        navigation.navigate('ResultScreen', { userData: {
            weight,
            height
        } })
    }

    return (<View style={styles.container}>
        <Text style={styles.title}>Tính BMI</Text>

        <Text style={styles.label}>Nhập chiều cao</Text>
        <TextInput onChangeText={(value) => {
            setHeight(Number(value))
        }} value={String(height)} placeholder={"Chiều cao (cm)"} style={styles.input}  />
        
        <Text style={styles.label}>Nhập cân nặng</Text>
        <TextInput onChangeText={(value) => {
            setWeight(Number(value))
        }} value={String(weight)} placeholder={"Cân nặng (Kg)"} style={styles.input}  />
        
        <View style={styles.buttons}>
            <TouchableOpacity onPress={viewResult} style={styles.button} >
                    <Text style={styles.buttonText}>Xem kết quả</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                setHeight(0)
                setWeight(0)
            }}>
                    <Text style={styles.buttonText}>Đặt lại</Text>
            </TouchableOpacity>
        </View>
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
    label: {
        fontSize: 15
    },
    input: {
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 5,
        padding: 5,
        marginVertical: 10
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    button: {
        width: "45%",
        borderWidth: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        padding: 10,
        borderColor: "#000",
        borderRadius: 5
    },
    buttonText: {
        textAlign: "center"
    }
})

export default HomeScreen