<template>

  <form id='car-search' v-on:submit="search">

    <div class='form-field'>
      <label for='make'>Make: </label>
      <input type='text' name='make' v-model='form.make'/>
    </div>

    <div class='form-field'>
      <label for='model'>Model: </label>
      <input type='text' name='model' v-model='form.model'/>
    </div>

    <div class='form-field'>
      <label for='year'>Year: </label>
      <input type='text' name='year' v-model='form.year'/>
    </div>

    <div class='form-field'>
      <label for='budget'>Budget: </label>
      <input type='text' name='budget' v-model='form.budget'/>
    </div>

    <button type="submit">Search</button>

  </form>
  
</template>

<script>

  export default{
    data: () => ({
      form: {
        make: '',
        model: '',
        budget: '',
        year: ''
      }
    }),
    methods: {
      search(){

      }
    }
  }
</script>
