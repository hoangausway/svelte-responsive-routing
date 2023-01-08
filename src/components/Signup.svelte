<script>
  import page from 'page';
  import {useSignup} from '../states/useRemoteStates';

  // credentials
  const name = 'ABC 100';
  const email = 'abc100@gmail.com';
  const password = 'Hoang123';
  const location = 'PR01';
  const role = 'SELLER';

  const signup = () => {
    useSignup({email, password, location, name, role})
      .then(() => page.redirect('/login'))
      .catch(console.log);
  };
</script>

<p>Name: {name}</p>
<p>Email: {email}</p>
<p>Password: {password}</p>
<p>Location Id: {location}</p>
<p>Role: {role}</p>

<button on:click={signup}>Signup</button>
