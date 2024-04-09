export const ErrorHandler = (error) => {
   if (error == "Firebase: Error (auth/network-request-failed).") {
      return "connection error! please check your network.";
   } else if (error == "Firebase: Error (auth/email-already-in-use).") {
      return "This user is already exist";
   } else if (error == "Firebase: Error (auth/invalid-credential).") {
      return "Your email/password is not correct";
   } else {
      console.log(error);
      return "Something went very wrong!";
   }
};
