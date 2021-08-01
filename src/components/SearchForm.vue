<template>

  <form id='car-search' @submit.prevent="search">

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
  import axios from 'axios'

  export default{
    data: () => ({
      form: {
        make: '',
        model: '',
        budget: '',
        year: '',
      },
      results: []
    }),
    methods: {
      async search(ev){
        ev.preventDefault()
        console.log(this.form)
        const results = await axios.put('/api/Search', this.form )
        this.results= results.data
        console.log(results.data)
      }
    }
  }
</script>
