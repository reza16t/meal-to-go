import { useQuery } from "@tanstack/react-query";
import { restaurantsRequest } from "../../API/Api";

export default function UseRestaurant(locations) {
   const location = locations
      ? locations
      : { lat: "37.7749295", lng: "-122.4194155" };
   const {
      isLoading,
      data: Mocks,
      error,
   } = useQuery({
      queryKey: ["mocks", `${location?.lat},${location?.lng}`],
      queryFn: () => restaurantsRequest(`${location?.lat},${location?.lng}`),
   });
   return { isLoading, Mocks, error };
}
