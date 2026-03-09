<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

const leaves = ref([])

const fetchLeaves = async () => {
  try {

    const res = await axios.get(
      "http://localhost:5000/api/leaves"
    )

    leaves.value = res.data

  } catch (error) {

    console.error(error)

  }
}

const updateStatus = async (id, status) => {

  try {

    await axios.put(
      `http://localhost:5000/api/leaves/${id}`,
      { status }
    )

    alert("Status updated")

    fetchLeaves()

  } catch (error) {

    console.error(error)

  }

}

onMounted(() => {

  fetchLeaves()

})
</script>

<template>

<div style="width:600px;margin:40px auto">

<h2>Employer Dashboard</h2>

<div
v-for="leave in leaves"
:key="leave._id"
style="border:1px solid #ccc;padding:10px;margin-bottom:10px"
>

<p><b>Leave Type:</b> {{leave.leaveType}}</p>
<p><b>Start:</b> {{leave.startDate}}</p>
<p><b>End:</b> {{leave.endDate}}</p>
<p><b>Reason:</b> {{leave.reason}}</p>
<p><b>Status:</b> {{leave.status}}</p>

<button
@click="updateStatus(leave._id,'Approved')"
style="background:green;color:white;margin-right:10px"
>
Approve
</button>

<button
@click="updateStatus(leave._id,'Rejected')"
style="background:red;color:white"
>
Reject
</button>

</div>

</div>

</template>