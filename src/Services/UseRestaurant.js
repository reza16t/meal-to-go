import { useQuery } from "@tanstack/react-query";
import { restaurantsRequest } from "../API/Api";

export default function UseRestaurant() {
   const {
      isLoading,
      data: Mocks,
      error,
   } = useQuery({
      queryKey: ["mocks"],
      queryFn: () => restaurantsRequest(),
   });
   return { isLoading, Mocks, error };
}
