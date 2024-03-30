import {
   useFonts as useOswald,
   Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
   useFonts as useLato,
   Lato_400Regular_Italic,
} from "@expo-google-fonts/lato";
export async function UseFont() {
   const [oswaldLoaded] = useOswald({
      Oswald_400Regular,
      Lato_400Regular_Italic,
   });
   const [latoLoaded] = useLato({
      Oswald_400Regular,
      Lato_400Regular_Italic,
   });

   return oswaldLoaded, latoLoaded;
}
