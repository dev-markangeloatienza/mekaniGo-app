import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack >
        <Stack.Screen name="(app)" options={{
          headerShown: false
        }}/>
        <Stack.Screen name="+not-found" />
    </Stack>
  );
}
