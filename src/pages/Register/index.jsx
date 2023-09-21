// styled components
import { Btn, Error } from '../../globalStyles';
import { RegisterStyled, TextRegister } from './styled';

// hooks
import { useAuthentication } from '../../hooks/useAuthentication';

// react
import { useState, useEffect } from 'react';

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("Passwords must be the same")
            return
        }

        const response = await createUser(user)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])


    return (
        <RegisterStyled>
            <h2>Register to post</h2>
            <TextRegister>Create your username and share your stories</TextRegister>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Username"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>

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

                <label>
                    <span>Password confirmation:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setconfirmPassword(e.target.value)}
                    />
                </label>

                {!loading ? (<Btn>Register</Btn>) : (<Btn disabled>Wait...</Btn>)}

                {error && <Error>{error}</Error>}
            </form>
        </RegisterStyled>
    )
}

export default Register