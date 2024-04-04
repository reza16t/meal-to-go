import { createContext, useState, useContext, useEffect } from "react";
// import { LocationAPI } from "../API/Api";
import { UseLocation } from "./UseLocation";

const LocationContext = createContext();

function LocationProvider({ children }) {
   const [KeyWord, setKeyWord] = useState("antwerp");
   const [Location, setLocation] = useState();
   const { data } = UseLocation(KeyWord);
   useEffect(() => {
      if (data?.location) {
         setLocation(data.location);
      }
   }, [data]);

   async function OnSubmit(val) {
      setKeyWord(val);
   }
   return (
      <LocationContext.Provider
         value={{
            KeyWord,
            data,
            OnSubmit,
            Location,
         }}
      >
         {children}
      </LocationContext.Provider>
   );
}
function contextLocation() {
   const Context = useContext(LocationContext);
   if (Context == undefined)
      throw new Error("LocationContext was used outside the LocationProvider ");
   return Context;
}
export { contextLocation, LocationProvider };
