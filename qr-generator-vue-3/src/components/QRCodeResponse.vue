<template>
  <div class="flex justify-center;">
    <vue-qrcode :value="this.qrCodeText" margin="10" scale="7" />
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode'

export default {
  name: 'QrCodeResponse',
  components: {
    VueQrcode
  },
  props: {
    qrCodeText: String
  }
}
</script>
