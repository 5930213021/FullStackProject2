  <template>
  <div>
    <h1>Product List</h1>
    <HelloWorld :msg="message"></HelloWorld>
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'products',
  data(){
    return{
      message:'Product List'
    }
  },
   mounted () {
    axios
      .get('https://shielded-spire-43023.herokuapp.com/api/products')
      .then(function(respone){
        console.log(respone.data)
      })
  }
}
</script>
