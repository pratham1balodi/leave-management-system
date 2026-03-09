<script setup>
import { reactive } from "vue"
import axios from "axios"

const form = reactive({
  email: "",
  password: ""
})

const login = async () => {
  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email: form.email,
        password: form.password
      }
    )

    localStorage.setItem("token", res.data.token)
    localStorage.setItem("role", res.data.role)

    window.location.reload()

  } 
  catch (error) {

    alert("Login failed")

  }
}

const goRegister = () => {
  window.location.href = "/register"
}
</script>

<template>

<div style="width:300px;margin:40px auto">

<h2>Login</h2>

<input
v-model="form.email"
placeholder="Email"
/>

<br><br>

<input
type="password"
v-model="form.password"
placeholder="Password"
/>

<br><br>

<button @click="login">
Login
</button>

<br><br>

<button @click="goRegister">
Register New User
</button>

</div>

</template>