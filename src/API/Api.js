import { locations } from "./locationData";
import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = async (
   location = "37.7749295,-122.4194155",
) => {
   try {
      // console.log(location);
      const mock = await camelize(mocks[location]?.results);
      const mappedResults = mock?.map((restaurant) => {
         return {
            ...restaurant,
            isOpenNow: restaurant.openingHours?.openNow,
            isClosedTemporarily:
               restaurant.businessStatus === "CLOSED_TEMPORARILY",
         };
      });
      return mappedResults;
   } catch (error) {
      console.log(error);
   }
};


export const LocationAPI = async (searchTerm) => {
   try {
      const key = [];
      Object.keys(locations).map((val) => key.push(val));
      const result = await locations[searchTerm];
      if (result) {
         const { geometry } = camelize(result.results[0]);
         const { lat, lng } = geometry.location;
         return { location: { lat, lng, viewport: geometry.viewport }, key };
      }
      return { key };
   } catch (error) {
      console.log("Location not found!");
   }
};
