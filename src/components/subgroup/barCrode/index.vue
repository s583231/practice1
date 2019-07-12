<template>
  <div>
    <barcode :value="barcodes">
    </barcode>
  </div>
</template>

<script>
import VueBarcode from 'vue-barcode'
export default {
  components: {
    'barcode': VueBarcode
  },
  data () {
    return {
      barcodes: '15925874596321'
    }
  }
}
</script>
