<script lang="ts">

import { onMount } from 'svelte';
import { fetchData } from '$lib/api/server';

function handleClick() {

  var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
    keyboard: false
  });
  myModal.show();
  
  
  }

  onMount (() => {

    document.getElementById('insertData').addEventListener('click',() => {
      let name = document.getElementById('username').value;
      let email = document.getElementById('email').value;

      console.log('username and email ' ,name,email)
    })

  })





</script>



<ul>
<li on:click = {handleClick} style="cursor:pointer;"><i id='listItem' class="fa-solid fa-plus"></i>&ensp;Insert</li>
<li style="cursor:pointer;"><i id='listItem' class="fa-solid fa-pen"></i>&ensp;Update</li>
<li style="cursor:pointer;"><i id='listItem' class="fa-solid fa-trash"></i>&ensp;Delete</li>
<li style="cursor:pointer;"><i id='listItem' class="fa-solid fa-eye"></i>&ensp;View</li>
</ul>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Insert</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Name</label>
        <input type="text" class="form-control" id="username" placeholder = "Enter Username">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Enter Email</label>
        <input type="text" class="form-control" id="email" placeholder = "Enter Email">
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" id="insertData" class="btn btn-primary">Insert</button>
      </div>
    </div>
  </div>
</div>

