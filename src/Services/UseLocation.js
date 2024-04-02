import { LocationAPI } from "../API/Api";
import { useQuery } from "@tanstack/react-query";

export function UseLocation(val) {
   const { isLoading, data, error } = useQuery({
      queryKey: ["location", val],
      queryFn: () => LocationAPI(val),
   });

   return { isLoading, error, data };
}
// export function UseUpdateLocation() {
//    const queryClient = useQueryClient();
//    const { isPending, mutate } = useMutation({
//       mutationFn: (el) => LocationAPI(el),
//       onSuccess: () => {
//          queryClient.invalidateQueries({
//             queryKey: ["location"],
//          });
//       },
//       onError: (err) => console.error(err.message),
//    });
//    return { isPending, UpdateLocation: mutate };
// }
