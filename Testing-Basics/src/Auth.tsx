type AuthProps = {
  isLoggedIn: boolean;
};

const Auth = ({ isLoggedIn }: AuthProps) => {
  return <h1>{isLoggedIn ? "Welcome" : "Login Please"}</h1>;
  
};

export default Auth;
