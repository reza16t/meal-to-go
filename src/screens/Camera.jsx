import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";

export default function CameraScreen() {
   const [type, setType] = useState(CameraType.front);
   const [permission, requestPermission] = Camera.useCameraPermissions();
   const cameraRef = useRef();
   if (!permission) return null;

   if (!permission.granted) {
      Linking.openSettings();
   }

   const Snap = async () => {
      if (cameraRef) {
         const photo = await cameraRef?.current.takePictureAsync();
         console.log(photo);
      }
   };

   return (
      <View className="flex-1 justify-center bg-black">
         <Camera
            type={type}
            ref={(camera) => (cameraRef.current = camera || false)}
            className="h-[90%] items-center justify-end"
         >
            <TouchableOpacity
               onPress={Snap}
               className="h-screen w-screen"
            ></TouchableOpacity>
         </Camera>
      </View>
   );
}
