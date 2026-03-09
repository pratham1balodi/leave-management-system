<script setup>
import { reactive } from "vue"
import axios from "axios"

const form = reactive({
  leaveType: "",
  startDate: "",
  endDate: "",
  reason: ""
})

const applyLeave = async () => {
  try {

    const token = localStorage.getItem("token")

    const res = await axios.post(
      "http://localhost:5000/api/leaves",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    alert("Leave applied successfully")

    form.leaveType = ""
    form.startDate = ""
    form.endDate = ""
    form.reason = ""

  } catch (error) {

    console.error(error)
    alert("Error applying leave")

  }
}
</script>

<template>

<div style="width:300px;margin:40px auto;display:flex;flex-direction:column;gap:10px">

<h2>Apply Leave</h2>

<input
v-model="form.leaveType"
placeholder="Leave Type"
/>

<input
type="date"
v-model="form.startDate"
/>

<input
type="date"
v-model="form.endDate"
/>

<input
v-model="form.reason"
placeholder="Reason"
/>

<button
@click="applyLeave"
style="background:green;color:white;padding:8px;border:none"
>
Submit
</button>

</div>

</template>