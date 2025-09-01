import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>
        JourneyTracker
      </Text>
      
      {/* Navigation Links */}
      <View style={styles.buttonContainer}>
        <Link href="/start-journey" asChild>
          {/* <Pressable style={[styles.button, styles.blueButton]}> */}
          <Pressable>
            <Text style={styles.buttonText}>
              Start New Journey
            </Text>
          </Pressable>
        </Link>
        
        <Link href="/view-journeys" asChild>
          {/* <Pressable style={[styles.button, styles.greenButton]}> */}
          <Pressable>
            <Text style={styles.buttonText}>
              View Journeys
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 32,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 64,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
  },
  blueButton: {
    backgroundColor: '#3b82f6',
  },
  greenButton: {
    backgroundColor: '#10b981',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});