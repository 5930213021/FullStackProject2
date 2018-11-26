  <template>
  <div>
    <h1>Product List</h1>
    <b-table striped hover :items="products" :fields="fields"></b-table>
   
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
      fields: [ 'id', 'title', 'price' ]
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
