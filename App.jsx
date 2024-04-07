import { Platform, SafeAreaView, StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NativeWindStyleSheet } from "nativewind";
import { UseFont } from "./src/utils/UseFont";
import { LocationProvider } from "./src/Services/context/LocationContext";
import AppNavigation from "./src/Navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";

NativeWindStyleSheet.setOutput({
   default: "native",
});

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         // staleTime: 60 * 1000,
         staleTime: 10,
      },
   },
});

export default function App() {
   return (
      <>
         <SafeAreaView className="flex-1 ">
            <QueryClientProvider client={queryClient}>
               <LocationProvider>
                  <UseFont>
                     <NavigationContainer>
                        <AppNavigation></AppNavigation>
                     </NavigationContainer>
                  </UseFont>
                  {Platform.OS === "web" && (
                     <ReactQueryDevtools initialIsOpen={true} />
                  )}
               </LocationProvider>
            </QueryClientProvider>
         </SafeAreaView>
         <StatusBar style="auto" />
      </>
   );
}
