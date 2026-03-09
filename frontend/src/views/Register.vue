<script setup>
import { reactive } from "vue"
import axios from "axios"

const form = reactive({
  name: "",
  email: "",
  password: "",
  role: "employee"
})

const register = async () => {
  try {

    await axios.post(
      "http://localhost:5000/api/auth/register",
      form
    )

    alert("Registered successfully")

  } catch (error) {

    alert("Registration failed")

  }
}
</script>

<template>

<div style="width:300px;margin:auto">

<h2>Register</h2>

<input v-model="form.name" placeholder="Name" />
<br><br>

<input v-model="form.email" placeholder="Email" />
<br><br>

<input type="password" v-model="form.password" placeholder="Password" />
<br><br>

<select v-model="form.role">

<option value="employee">Employee</option>
<option value="employer">Employer</option>

</select>

<br><br>

<button @click="register">Register</button>

</div>

</template>