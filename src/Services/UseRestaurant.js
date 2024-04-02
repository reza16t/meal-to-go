import { useQuery } from "@tanstack/react-query";
import { restaurantsRequest } from "../API/Api";

export default function UseRestaurant(val) {
   const {
      isLoading,
      data: Mocks,
      error,
   } = useQuery({
      queryKey: ["mocks", val],
      queryFn: () => restaurantsRequest(val),
   });
   return { isLoading, Mocks, error };
}
