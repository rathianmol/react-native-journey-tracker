import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-8">
      {/* Logo */}
      <Text className="text-4xl font-bold text-blue-600 mb-16">
        JourneyTracker
      </Text>
      
      {/* Navigation Links */}
      <View className="w-full space-y-6">
        <Link href="/start-journey" asChild>
          <Pressable className="bg-blue-500 py-4 px-8 rounded-lg shadow-md active:bg-blue-600">
            <Text className="text-white text-xl font-semibold text-center">
              Start New Journey
            </Text>
          </Pressable>
        </Link>
        
        <Link href="/view-journeys" asChild>
          <Pressable className="bg-green-500 py-4 px-8 rounded-lg shadow-md active:bg-green-600">
            <Text className="text-white text-xl font-semibold text-center">
              View Journeys
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

