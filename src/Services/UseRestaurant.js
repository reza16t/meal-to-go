import { useQuery } from "@tanstack/react-query";
import { restaurantsRequest } from "../API/Api";

export default function UseRestaurant(location) {
   const {
      isLoading,
      data: Mocks,
      error,
   } = useQuery({
      queryKey: ["mocks", `${location.lat},${location.lng}`],
      queryFn: () => restaurantsRequest(`${location.lat},${location.lng}`),
   });
   return { isLoading, Mocks, error };
}
