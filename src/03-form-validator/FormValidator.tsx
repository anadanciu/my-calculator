import { useState } from "react";

export function validateEmail(email: string) {
  let atOccurrences: any = email.match(/\@/g);

  if (!atOccurrences || (atOccurrences && atOccurrences.length > 1)) {
    return false;
  }
  return true;
}

export function validatePassword(password: string) {
  if (password.length < 8) {
    return false;
  }
  return true;
}

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [messages, setMessages] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    if (validateEmail(email)) {
      if (validatePassword(password)) {
        if (passwordConfirm === password) {
          setMessages("Account created!");
        } else {
          setMessages("The passwords don't match!");
        }
      } else {
        setMessages("Please provide a password of minimum 8 characters! ");
      }
    } else {
      setMessages("Please provide a valid email!");
    }
  };

  return (
    <form>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        required
        type="text"
        name="email"
        data-testid="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        data-testid="password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        required
        data-testid="password-confirm"
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <div>{messages}</div>
      <input
        type="submit"
        value="Submit"
        data-testid="submit"
        onClick={submitForm}
      />
    </form>
  );
}
