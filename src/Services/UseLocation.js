import { LocationAPI } from "../API/Api";
import { useQuery } from "@tanstack/react-query";

export function UseLocation() {
   const { isLoading, data, error } = useQuery({
      queryKey: ["location"],
      queryFn: (el) => LocationAPI(el),
   });

   return { isLoading, error, data };
}
