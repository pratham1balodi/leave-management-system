<script setup>
import { ref } from "vue"

import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import EmployeeDashboard from "./views/EmployeeDashboard.vue"
import EmployerDashboard from "./views/EmployerDashboard.vue"

const role = ref(localStorage.getItem("role"))

const logout = () => {
  localStorage.clear()
  location.reload()
}
</script>

<template>
<div style="text-align:center;margin-top:40px">

<div v-if="role==='employee'">
<button @click="logout">Logout</button>
<EmployeeDashboard />
</div>

<div v-if="role==='employer'">
<button @click="logout">Logout</button>
<EmployerDashboard />
</div>

<div v-if="!role">

<h1>Leave Management System</h1>

<div style="display:flex;justify-content:center;gap:60px;margin-top:40px">

<div>
<h2>Login</h2>
<Login />
</div>

<div>
<h2>Register</h2>
<Register />
</div>

</div>

</div>

</div>
</template>