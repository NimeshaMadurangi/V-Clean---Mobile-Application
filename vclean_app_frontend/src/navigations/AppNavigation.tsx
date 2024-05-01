import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Signup from "../screens/Signup.tsx";
import Login from "../screens/Login.tsx";
import Splash from "../screens/Splash.tsx";
import OptionSelection from "../screens/OptionSelection.tsx";
import Home from "../screens/Home.tsx";
import DustbinParent from "../screens/DustbinParent.jsx";

const AppNavigation =()=>{



    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Splash"
            screenOptions={
                {
                    headerShown:false,
                }
            }>
                 
                <Stack.Screen name="OptionSelection" component={OptionSelection} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="DustbinParent" component={DustbinParent} options={{ title: 'Dustbins' }} />
                
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default AppNavigation    