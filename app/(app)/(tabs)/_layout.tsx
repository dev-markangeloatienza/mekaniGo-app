import { Tabs } from 'expo-router'


const TabLayout = () => {
    return (
        <Tabs  
            screenOptions={{
            tabBarActiveTintColor: 'red',
            headerShown: false,
          }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
            {/* <Tabs.Screen 
                name="user"
                options={{
                    title: "User Profile",
                    headerShown: false,
                    href: {
                        pathname: '/user/[userId]',
                        params: {
                          userId: '1',
                        },
                    },
                }}
            /> */}
        </Tabs>
    )
}



export default TabLayout