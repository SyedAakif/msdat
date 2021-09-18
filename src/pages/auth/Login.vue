<template>
  <section>
    <h2 class="heading">Log in into your account.</h2>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="mail@example.com"
          v-model="email"
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="*******"
          v-model="password"
        />
        <p v-if="!formIsValid" style="color: red">
          Please enter a valid email and password(must be at least 6 characters
          long)
        </p>
        <button>Login</button>
        <h4>Don't have an account?</h4>
        <button disabled>Sign Up</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
      } else {
        this.$store.dispatch("registerUser", { email: this.email });
        this.$router.replace("/inputDetails");
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  margin: 1rem;
  border-radius: 12px;
  padding: 2rem;
  width: 70%;
  height: 40vh;
  justify-content: center;
  align-content: center;
  margin-left: 30px;
}

.form-control {
  width: 100%;
  align-items: center;
  justify-content: center;
}

section {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.heading {
  margin: auto;
  width: 50%;
  padding: 10px;
}

button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #004a61;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  margin: 6px;
  width: 25%;
  padding: 10px;
  margin-left: 200px;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

h4 {
  margin: auto;
  text-align: center;
  max-width: 500px;
  position: relative;
  color: gray;
}
h4:before {
  content: "";
  width: 150px;
  height: 2px;
  display: block;
  background: gray;
  position: absolute;
  top: 50%;
  left: 0;
}
h4:after {
  content: "";
  width: 150px;
  height: 2px;
  display: block;
  background: gray;
  position: absolute;
  top: 50%;
  right: 0;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input{
  display: block;
  width: 100%;
  font: inherit;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 0.6rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>