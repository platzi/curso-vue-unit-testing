<template>
  <div class="hello justify-center m-2">
    <input id="txt-qr-code" class="border py-2 px-3 text-grey-darkest" v-model="qrCodeInput"/>
    <button id="btn-generate" class= "bg-indigo-600 m-4 p-2 rounded-md text-white text-sm" v-on:click="sendQRCode()">Generar QR</button>
  </div>
</template>

<script>
export default {
  name: 'QrCodeInput',
  data: function () {
    return {
      qrCodeInput: ''
    }
  },
  methods: {
    sendQRCode: function () {
      this.$emit('qrCodeInput', this.qrCodeInput)
    }
  }
}
</script>
