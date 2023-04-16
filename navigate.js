import { NavigationContainer, Link } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from './screens/mainPage'
import Supplies from './screens/addSupplies'
import Data from './screens/addDataSupplies'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Mytab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Main}
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen name="status" component={Supplies}
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen name="chat" component={Supplies}
                options={{
                    headerShown: false,
                }} />
            <Tab.Screen name="advice" component={Supplies}
                options={{
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}
const navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="main" component={Mytab}
                    options={{
                        headerShown: false,
                        // headerStyle: { backgroundColor: "#937DC2" },
                        // headerTintColor: "white",

                    }}
                />
                <Stack.Screen name="supplies" component={Supplies}
                    options={{
                        title: "Back",
                        // headerShown: false,
                        headerStyle: { backgroundColor: "#fff" },
                        headerTintColor: "gray",

                    }}
                />
                <Stack.Screen name="data" component={Data}
                    options={{
                        title: "Back",
                        headerStyle: { backgroundColor: "#B2A4FF" },
                        headerTintColor: "white",

                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default navigator
