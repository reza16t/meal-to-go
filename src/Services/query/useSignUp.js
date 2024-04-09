import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignUp } from "../../API/Auth";

export default function useSignUp() {
   const queryClient = useQueryClient();
   const { isPending, mutateAsync, error } = useMutation({
      mutationFn: ({ email, password }) => SignUp(email, password),
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
