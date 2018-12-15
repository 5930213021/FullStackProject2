  <template>
  <div>
    <h1>Product List</h1>

  <b-row>
    
      <b-col md="6" class="my-1">
        <b-form-group horizontal class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
  </b-row>   

    <b-table striped hover 
      :items="products" 
      :fields="fields" 
      :filter="filter"
      :per-page="pageSize"
      :current-page="pageIndex">

      <template slot="show_details" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
      
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
    </b-table>


   <b-pagination align="center" size="md" :total-rows="products.length" v-model="pageIndex" :per-page="pageSize"></b-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'products',
  data(){
    return{
      message:'Product List',
      products:[],
      pageSize :10,
      pageIndex:1,
      filter: null,
      fields: [ 
        {
          key:'product_id',
          sortable:true,
          variant:'success'
        },
        {
          key:'product_name',
          sortable:true
        },
        {
          key:'unit_price',
          sortable:true,
          variant:'info'
        },
        {
          key:"show_details",
          variant:'primary'
             
        }
      ]
    }
  },
    computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  mounted() {
    var instace = this
     axios
      .get('https://shielded-ridge-17839.herokuapp.com/api/products')
      .then(function(respone){
        console.log(respone.data)
        instace.products = respone.data.data
      })
  }
}
</script>
