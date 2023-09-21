// styled components
import { Btn, Error } from '../../globalStyles';
import { LoginDiv, TextLogin } from "./style";

// hooks
import { useAuthentication } from '../../hooks/useAuthentication';

// react
import { useState, useEffect } from 'react';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const response = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <LoginDiv>
      <h2>Log in</h2>
      <TextLogin>Log in to be able to use the system</TextLogin>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="User email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="User password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!loading ? <Btn>Log In</Btn> : <Btn disabled>Wait...</Btn>}

        {error && <Error>{error}</Error>}
      </form>
    </LoginDiv>
  );
};

export default Login;
