import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})

const SignIn: React.FC = () => {
    const {signed, signIn} = useAuth();
    
    async function handleSignIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={handleSignIn}></Button>
        </View>
    )
}

export default SignIn;