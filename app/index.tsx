import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
    const [name, setName] = useState('');

    return (
        <><View style={styles.body}>
            <TextInput placeholder="Digite seu nome" onChangeText={setName} />
            <Text style={styles.title}>
                Olá, eu sou {name}</Text>
        </View><View style={styles.body}>
                <TextInput placeholder="Digite seu nome" onChangeText={setName} />
                <Text style={styles.title}>
                    Olá, eu sou {name}</Text>
        </View></>

     );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "red",
        padding: "auto"
    },
    title: {
        fontSize: 19
    }
})