import { useState } from 'react';

export const PasswordValidator = ({ onPasswordChange }) => {
    const [password, setPassword] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const validatePassword = (password) => {
        let newSuggestions = [];
        if (password.length < 8) {
            newSuggestions.push('Password should be at least 8 characters long')
        }
        if (!/\d/.test(password)) {
            newSuggestions.push('Add at least one number')
        }
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            newSuggestions.push('Include both upper and lower case letters')
        }
        if (!/[^A-Za-z0-9]/.test(password)) {
            newSuggestions.push('Include at least one special character')
        }
        return newSuggestions;
    };

    const handleChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const newSuggestions = validatePassword(newPassword);
        setSuggestions(newSuggestions);
        onPasswordChange(newPassword, newSuggestions.length === 0);
    };

    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} style={{ color: 'red' }}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordValidator;