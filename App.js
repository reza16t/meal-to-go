import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Vibration,
  Touchable,
  TouchableOpacity
} from "react-native";
// const ONE_SECOND_IN_MS = 1000;

const PATTERN = [1000];
export default function App() {
  return (
    <SafeAreaView
      className={`flex-1 items-center pt-[${StatusBar.currentHeight}] bg-red-100`}
    >
      <TouchableOpacity
        className="bg-red-900"
        onPress={() => Vibration.vibrate([200, 200, 200, 200])}
      >
        <Text>Open up App.js to start app!</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
