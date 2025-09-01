import { Stack } from 'expo-router';
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="start-journey" options={{ title: "Start New Journey" }} />
      <Stack.Screen name="view-journeys" options={{ title: "View Journeys" }} />
    </Stack>
  );
}
