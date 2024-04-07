import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignIn } from "../../API/Auth";

export default function useSignIn() {
   const queryClient = useQueryClient();
   const { isPending, mutateAsync, error } = useMutation({
      mutationFn: ({ email, password }) => SignIn(email, password),
      onSuccess: () => {
         console.log("");
         queryClient.invalidateQueries({
            queryKey: ["user"],
         });
      },
      onError: (err) => console.error(err.message),
   });
   return { isPending, mutate: mutateAsync, error };
}
