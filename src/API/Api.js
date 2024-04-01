import { locations } from "./locationData";
import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = async (
   location = "37.7749295,-122.4194155",
) => {
   try {
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

export async function LocationAPI(searchTerm = "san francisco") {
   try {
      const result = await locations[searchTerm];
      const { geometry } = camelize(result);
      const { lat, lng } = geometry.location;
      return [{ lat, lng }, result];
   } catch (error) {
      console.log(error);
   }
}
