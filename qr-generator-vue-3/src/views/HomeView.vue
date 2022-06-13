<template>
  <div id="home" class="justify-center" >
    <h1 class="text-3xl font-light justify-center p-6">Generador de Código QR</h1>
    <qr-code-input  @qrCodeInput="sendQRCode" margin-right margin-left />
    <qr-code-response :qrCodeText="qrCodeText" ></qr-code-response>
  </div>
</template>

<script>
import QrCodeInput from '../components/QRCodeInput'
import QrCodeResponse from '../components/QRCodeResponse'

export default {
  name: 'HomeView',

  components: {
    QrCodeInput,
    QrCodeResponse
  },

  data: function () {
    return {
      qrCodeText: ''
    }
  },

  methods: {
    sendQRCode (qrCode) {
      this.qrCodeText = qrCode
    }
  }
}
</script>

<style scoped lang="stylus">
#home
  text-align:center
</style>
