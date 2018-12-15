  <template>
  <div>
    <h1>Product List</h1>

  <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
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
          sortable:true
        },
        {
          key:'title',
          sortable:true
        },
        {
          key:'price',
          sortable:true,
          variant:'info'
        },
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
