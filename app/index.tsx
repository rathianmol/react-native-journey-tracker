import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 32,
    }}>
      <Text style={{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2563eb',
        marginBottom: 64,
      }}>
        JourneyTracker
      </Text>
      
      <View style={{
        width: '100%',
        maxWidth: 300,
      }}>
        <Link href="/start-journey" asChild>
          <Pressable style={{
            paddingVertical: 16,
            paddingHorizontal: 32,
            borderRadius: 8,
            marginBottom: 16,
            backgroundColor: '#3b82f6',
          }}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}>
              Start New Journey
            </Text>
          </Pressable>
        </Link>
        
        <Link href="/view-journeys" asChild>
          <Pressable style={{
            paddingVertical: 16,
            paddingHorizontal: 32,
            borderRadius: 8,
            backgroundColor: '#10b981',
          }}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}>
              View Journeys
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}