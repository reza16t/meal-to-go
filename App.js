import { StatusBar, SafeAreaView } from "react-native";
import SearchBar from "./src/components/SearchBar";
import Card from "./src/components/Card";
import { UseFont } from "./src/utils/UseFont";

export default function App() {
   const { oswaldLoaded, latoLoaded } = UseFont();

   return (
      <>
         <SafeAreaView className="flex-1 ">
            <SearchBar></SearchBar>
            <Card></Card>
         </SafeAreaView>
         <StatusBar style="auto" />
      </>
   );
}
