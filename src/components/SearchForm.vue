<template>
<div id="body-stuff">
  <strong class="mobile_view_txt">iPhone X (Mobile View):</strong>

    <div class="wrap">

      <header>
        <a class="logo">
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 45">
            <path
              d="M28.5 19.1l5.3 10H20.1l-4.7-11L12.8 29H0L6.6 0h19.5c7.4 0 12.3 4 12.3 9.3 0 5.2-3.9 8.7-9.9 9.8zm-1.9-8.7c0-1.7-1-2.8-3.4-2.8h-5.8l-1.3 6.5h5.2c2.6 0 5.2-1 5.3-3.6v-.1z">
            </path>
            <path
              d="M52.6 8.5c9.8 0 17.8 8 17.8 18s-8 18-17.8 18-17.8-8-17.8-18 8-18 17.8-18zm0 24.5c3.6 0 6.4-2.9 6.4-6.5S56.1 20 52.6 20c-3.6 0-6.4 2.9-6.4 6.5-.1 3.6 2.8 6.5 6.4 6.5z">
            </path>
            <path
              d="M78.5 0h13.8c12.6 0 18 5.6 18 12.1 0 10-10.7 16.9-24.5 16.9h-14l6.7-29zm10.4 20c5.9 0 8.7-3.2 8.7-6.2v-.2c0-2-1.1-4.6-5.1-4.6h-3.4l-2.5 11h2.3z">
            </path>
            <path
              d="M126.1 8.5c9.8 0 17.8 8 17.8 18s-8 18-17.8 18-17.8-8-17.8-18 8-18 17.8-18zm0 24.5c3.6 0 6.4-2.9 6.4-6.5s-2.9-6.5-6.4-6.5c-3.6 0-6.4 2.9-6.4 6.5s2.9 6.5 6.4 6.5z">
            </path>
          </svg>
        </a>
      </header>


      <div class="search_container">
        <form @submit.prevent="search">
        <div class="search_group">
          <div class="select_field">
            <label>Make</label>
            <select id="makes" v-model="form.make">
              <option value="">All makes</option>
              <optgroup label="Popular makes">
                <option value="acura">Acura</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="buick">Buick</option>
                <option value="cadillac">Cadillac</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="chrysler">Chrysler</option>
                <option value="dodge">Dodge</option>
                <option value="ford">Ford</option>
                <option value="gmc">GMC</option>
                <option value="honda">Honda</option>
                <option value="hyundai">Hyundai</option>
                <option value="infiniti">INFINITI</option>
                <option value="jaguar">Jaguar</option>
                <option value="jeep">Jeep</option>
                <option value="kia">Kia</option>
                <option value="land_rover">Land Rover</option>
                <option value="lexus">Lexus</option>
                <option value="lincoln">Lincoln</option>
                <option value="mazda">Mazda</option>
                <option value="mercedes_benz">Mercedes-Benz</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
                <option value="porsche">Porsche</option>
                <option value="ram">RAM</option>
                <option value="subaru">Subaru</option>
                <option value="tesla">Tesla</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="volvo">Volvo</option>
              </optgroup>
              <optgroup label="Other makes">
                <option value="ac">AC</option>
                <option value="alfa_romeo">Alfa Romeo</option>
                <option value="am_general">Am General</option>
                <option value="american_motors">American Motors</option>
                <option value="aston_martin">Aston Martin</option>
                <option value="austin_healey">Austin-Healey</option>
                <option value="bentley">Bentley</option>
                <option value="bugatti">Bugatti</option>
                <option value="datsun">Datsun</option>
                <option value="detomaso">DeTomaso</option>
                <option value="delorean">Delorean</option>
                <option value="eagle">Eagle</option>
                <option value="fiat">FIAT</option>
                <option value="ferrari">Ferrari</option>
                <option value="fisker">Fisker</option>
                <option value="genesis">Genesis</option>
                <option value="geo">Geo</option>
                <option value="hudson">Hudson</option>
                <option value="hummer">Hummer</option>
                <option value="international">International</option>
                <option value="isuzu">Isuzu</option>
                <option value="jensen">Jensen</option>
                <option value="kaiser">Kaiser</option>
                <option value="karma">Karma</option>
                <option value="koenigsegg">Koenigsegg</option>
                <option value="lamborghini">Lamborghini</option>
                <option value="lotus">Lotus</option>
                <option value="mg">MG</option>
                <option value="mini">MINI</option>
                <option value="maserati">Maserati</option>
                <option value="maybach">Maybach</option>
                <option value="mclaren">McLaren</option>
                <option value="mercury">Mercury</option>
                <option value="nash">Nash</option>
                <option value="oldsmobile">Oldsmobile</option>
                <option value="opel">Opel</option>
                <option value="packard">Packard</option>
                <option value="pagani">Pagani</option>
                <option value="panoz">Panoz</option>
                <option value="plymouth">Plymouth</option>
                <option value="polestar">Polestar</option>
                <option value="pontiac">Pontiac</option>
                <option value="rolls_royce">Rolls-Royce</option>
                <option value="saab">Saab</option>
                <option value="saturn">Saturn</option>
                <option value="scion">Scion</option>
                <option value="studebaker">Studebaker</option>
                <option value="sunbeam">Sunbeam</option>
                <option value="suzuki">Suzuki</option>
                <option value="triumph">Triumph</option>
                <option value="willys">Willys</option>
                <option value="smart">smart</option>
              </optgroup>
            </select>
          </div>

          <div class="select_field">
            <label>Model</label>
            <select id="models" name="models[]" v-model="form.model">
              <option value="">All models</option>
            </select>
          </div>

          <div class="select_field">
            <label>Year</label>
            <select id="year" name="year[]" v-model="form.year">
              <option value="">Any</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
            </select>
          </div>

          <div class="select_field">
            <label>Price</label>
            <select id="make-model-max-price" name="list_price_max" v-model="form.budget">
              <option value="">No max price</option>
              <option value="2000">$2,000</option>
              <option value="4000">$4,000</option>
              <option value="6000">$6,000</option>
              <option value="8000">$8,000</option>
              <option value="10000">$10,000</option>
              <option value="15000">$15,000</option>
              <option value="20000">$20,000</option>
              <option value="25000">$25,000</option>
              <option value="30000">$30,000</option>
              <option value="35000">$35,000</option>
              <option value="40000">$40,000</option>
              <option value="45000">$45,000</option>
              <option value="50000">$50,000</option>
              <option value="60000">$60,000</option>
              <option value="70000">$70,000</option>
              <option value="80000">$80,000</option>
              <option value="90000">$90,000</option>
              <option value="100000">$100,000</option>
              <option value="125000">$125,000</option>
              <option value="150000">$150,000</option>
              <option value="175000">$175,000</option>
            </select>
          </div>


        </div>

        <button class="search_btn">Search</button>
        </form>
        <table v-if="results">
          <thead>
            <tr>
              <th>Total Vehicles Matched</th>
              <th>{{ results.total.vehicles }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w">Lowest Price</td>
              <td>{{ results.priceData.minP }}</td>
            </tr>
            <tr>
              <td>Median Price</td>
              <td>{{ results.priceData.medianP }}</td>
            </tr>
            <tr>
              <td>Highest Price</td>
              <td>{{ results.priceData.maxP }}</td>
            </tr>
          </tbody>
        </table>

        <table v-if="results">
          <thead>
            <tr>
              <th colspan="2">Matches by Make and Model </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w"><span class="make-sub-grp">Toyota</span> <span class="model-sub-grp">Highlander</span></td>
              <td>316</td>
            </tr>
            <tr>
              <td><span class="make-sub-grp">Toyota</span> <span class="model-sub-grp">HIGHLANDER 4X4</span></td>
              <td>10</td>
            </tr>
            <tr>
              <td><span class="make-sub-grp">Toyota</span> <span class="model-sub-grp">Hybrid</span></td>
              <td>779</td>
            </tr>
            <tr>
              <td><span class="make-sub-grp">Toyota</span> <span class="model-sub-grp">Highlander</span></td>
              <td>794</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>

</div>
  
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
      results: null
    }),
    methods: {
      async search(ev){
        ev.preventDefault()
        const results = await axios.put('/api/Search', this.form )
        this.results= results.data
        console.log(this.results)
      }
    }
  }
</script>
<style scoped>
body {
      padding: 0;
      margin: 0;
      background: #F1F1F1;
      font-family: sans-serif;
    }

    header {
      background: #1A3035;
      padding: 20px 0 15px;
      border-bottom: 1px solid #dedede;
    }

    .mobile_view_txt {
      text-align: center;
      display: block;
      margin: 50px 0 14px;
      color: #1A3035;
    }

    .logo {
      display: block;
      width: 120px;
      margin: auto;
    }

    .logo svg {
      fill: #0c6;
    }

    .wrap {
      max-width: 500px;
      margin: 0 auto 60px;
      box-shadow: 0px 4px 0px hsl(0deg 0% 90%);
      background: #fff;
      min-height: 600px;
      border-radius: 10px;
      overflow: hidden;
      width: 92%;
    }

    .search_container {
      padding: 19px 19px;
    }

    .select_field {
      position: relative;
    }

    .w {
      width: 300px;
    }

    .select_field label {
      color: #555;
      font-size: 12px;
      position: absolute;
      left: 17px;
      top: 9px;
    }

    ol.search_results,
    .req_items {
      list-style: decimal outside;
      margin: 0;
      padding: 0;
    }

    .req_items {
      list-style: disc outside;
    }

    ol.search_results::before,
    .req_items::before {
      display: block;
      content: "Dataset search results:";
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 13px;
      margin-top: 19px;
    }

    ul.req_items li {
      margin-left: 15px;
      font-size: 13px;
      padding-bottom: 10px;
    }

    .req_items::before {
      content: "Dataset requirements:";
    }

    select {
      display: block;
      width: 100%;
      min-width: auto;
      appearance: none;
      padding: 26px 16px 11px;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 9' fill='none' stroke='%23666' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.8678 1L8.46425 7L1.96216 1' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 14px;
      background-position-x: calc(100% - 14px);
      font-size: 16px;
      min-width: auto;
      color: black;
      margin-bottom: -1px;
      border-color: #bdbdbd;
    }

    .search_group div:first-child select,
    .search_group div:last-child select {
      border-radius: 7px;
    }

    .search_group div:first-child select {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .search_group div:last-child select {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .search_btn {
      background: #0c6;
      border-radius: 30px;
      display: block;
      color: #fff;
      border: 0;
      padding: 14px 15px;
      width: 100%;
      font-size: 16px;
      cursor: pointer;
      margin-top: 20px;
      text-transform: uppercase;
      font-weight: bold;
    }

    .search_results li {
      padding-bottom: 16px;
      margin-left: 19px;
    }

    .search_results li span {
      display: block;
    }

    .search_results li span::before {
      display: inline-block;
      content: "make: ";
      font-weight: bold;
      font-size: 13px;
      margin-right: 5px;
    }

    .search_results li .make_result_span::before {
      content: "Make: ";
    }

    .search_results li .model_result_span::before {
      content: "Model: ";
    }

    .search_results li .year_result_span::before {
      content: "Year: ";
    }

    .search_results li .price_result_span::before {
      content: "Price: ";
    }


    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 25px;
      border: 1px solid #e8e8e8;
    }

    thead th {
      background-color: #1a3034;
      color: #fff;
      padding: 13px 20px 12px;
    }

    th {
      background-color: green;
    }

    th,
    td {
      text-align: left;
      padding: 16px 20px;
    }

    tr:nth-child(even) {
      background-color: #f7f7f7;
    }

    tr:nth-child(odd) {
      background-color: #e8e8e8;
    }

</style>