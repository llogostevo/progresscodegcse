import { createClient } from '@/utils/supabase/client';
import { login, signup } from './actions'
import { FaGithub } from 'react-icons/fa';

export default function LoginPage() {
  const signIn = async() => {
    'use server';
    console.log('signing in with github');

    // create supabase client
    const supabase = createClient;
  };

  return (
    <form action={signIn}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
      <FaGithub size={128} color="#000" />
    </form>
  )
}