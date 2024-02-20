import React, {useState} from "react";
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput,Button,Card, Title } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () =>{

    const [email,setEmail]=useState('');
    const [pass,setPass]= useState('');

    const handleLogin = ()=>{
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                password:pass
            })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('Success:',data);
        })
        .catch((error)=>{
            console.error('Error:',error);
            Alert.alert('Acceso denegado: ','Por favor revisa tus credenciales');
        });
    };

    return(

           <SafeAreaView>
                <Card>
                    <Card.Content>
                        <Title style={styles.title}>Login</Title>

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={pass}
                            secureTextEntry={true}
                            onChangeText={setPass}/>

                        <Button  style={styles.button} mode="contained" title="Login" onPress={handleLogin}> Login </Button>

                    </Card.Content>
                </Card>

                    
            </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1, // Fill the entire screen
      justifyContent: 'center', // Centers vertically in the container
      alignItems: 'center', // Centers horizontally in the container
      padding: 16, // Add some padding around the edges
    },
    card:{
        width: '100%',
        maxWidth: 400,
        padding: 16
    },
    title:{
        marginTop: 32,
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 16
    },
    input: {
      marginBottom: 16,
      marginTop: 6
    },
    button: {
      marginTop: 16
    }
  });

export default LoginScreen;