import { useState } from "react";

export default function Register() {
    // state variables for username and mobile
    const [username, setUsername] = useState('')
    const [mobile, setMobile] = useState('')

    // separate state for username and mobile errors
    const [usernameError, setUsernameError] = useState('')
    const [mobileError, setMobileError] = useState('')
    const [success, setSuccess] = useState('')

    return (
        <form style={{ maxWidth: 400, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1>Register Page</h1>
            <label>
                Username
                <input type="text" name="username" required
                    value={username} onChange={(e) => {
                        const value = e.target.value
                        setUsername(value)
                        // validate username, must be at least 8 characters long, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character
                        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                        if (!regex.test(value)) {
                            setUsernameError('Username must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character')
                        } else {
                            setUsernameError('')
                        }
                    }}
                />
                {usernameError && <span style={{ color: 'red', fontSize: '0.9em' }}>{usernameError}</span>}
            </label>
            <label>
                UK Mobile Number
                <input type="tel" name="mobile" required
                    value={mobile} onChange={(e) => {
                        const value = e.target.value
                        setMobile(value)
                        // simple UK mobile validation: starts with 07 and 11 digits
                        const mobileRegex = /^07\d{9}$/
                        if (!mobileRegex.test(value)) {
                            setMobileError('Mobile number must start with 07 and be 11 digits long')
                        } else {
                            setMobileError('')
                        }
                    }}
                />
                {mobileError && <span style={{ color: 'red', fontSize: '0.9em' }}>{mobileError}</span>}
            </label>
            <button type="submit">Register</button>
        </form>
    );
}
