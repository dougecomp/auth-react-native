import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})

const Dashboard: React.FC = () => {
    const {signOut} = useAuth();
    
    async function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Button title="Sign out" onPress={handleSignOut}></Button>
        </View>
    )
}

export default Dashboard;
