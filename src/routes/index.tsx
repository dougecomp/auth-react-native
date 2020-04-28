import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
    const {signed, loading} = useAuth();

    if(loading) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
                <ActivityIndicator size="large" color="#999"></ActivityIndicator>
            </View>
        )
    }

    return signed ? <AppRoutes></AppRoutes> : <AuthRoutes></AuthRoutes>
}

export default Routes;