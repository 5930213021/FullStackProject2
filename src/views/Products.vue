  <template>
  <div>
    <h1>Product List</h1>
    <b-table striped hover 
      :items="products" 
      :fields="fields" 
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
      fields: [ 
        {
          key:'id',
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
  mounted() {
    var instace = this
     axios
      .get('https://shielded-spire-43023.herokuapp.com/api/products')
      .then(function(respone){
        console.log(respone.data)
        instace.products = respone.data.data
      })
  }
}
</script>
