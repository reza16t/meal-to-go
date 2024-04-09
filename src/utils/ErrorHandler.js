export const ErrorHandler = (error) => {
   if (
      error == "FirebaseError: Firebase: Error (auth/network-request-failed)."
   ) {
      return "connection error! please check your network.";
   } else {
      return "Something went very wrong!";
   }
};
