<template>
  <div class="w-full h-screen bg-gradient-to-b from-blue-100 to-blue-300">
    <div v-if="loading" class="loader" />
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12">
          <h1 class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 py-4">
            Celestia PayForBlob Transactions
          </h1>
        </div>
        <div class="col-span-6 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <form @submit.prevent="submitPfb">
            <fieldset :disabled="loading">
              <p class="paragraph hidden sm:block pt-2 pb-6">
                Use this UI to either submit a PFB transaction or retrieve some data at a specific block height.
              </p>
              <div v-if="errors.length" class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                <ul>
                  <li v-for="error in errors" :key="error">
                    {{ error }}
                  </li>
                </ul>
              </div>
              <label for="endpoint" class="block font-medium text-gray-700">Endpoint</label>
              <div class="mt-1 flex rounded-md shadow-sm pt-1 pb-3">
                <input id="endpoint" v-model="endpoint" type="text" class="bg-gray-200 px-4 w-full border rounded text-gray-700" readonly>
              </div>
              <label for="namespaceId" class="block font-medium text-gray-700">Namespace</label>
              <div class="mt-1 flex rounded-md shadow-sm pt-1 pb-3">
                <input id="namespaceId" v-model="namespaceId" type="text" placeholder="Namespace ID" class="px-4 w-full border rounded text-gray-700">
              </div>
              <hr class="pb-6">
              <label for="data" class="block font-medium text-gray-700">Data</label>
              <div class="mt-1 flex rounded-md shadow-sm pt-1 pb-3">
                <input id="data" v-model="data" type="text" placeholder="Data" class="px-4 w-full border rounded text-gray-700">
              </div>
              <BaseButton class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
                Submit PFB Transaction
              </BaseButton>
            </fieldset>
          </form>

          <form @submit.prevent="getShares">
            <fieldset :disabled="loading">
              <hr class="pt-6">
              <label for="namespaceId" class="block font-medium text-gray-700">Height</label>
              <div class="mt-1 flex rounded-md shadow-sm pt-1 pb-3">
                <input id="userHeight" v-model="userHeight" type="text" placeholder="Block Height" class="px-4 w-full border rounded text-gray-700">
              </div>
              <BaseButton class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
                Get Shares
              </BaseButton>
            </fieldset>
          </form>
        </div>

        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <div v-if="success" class="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
            <p class="font-bold">
              {{ success }}
            </p>
          </div>
          <div v-if="error" class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
            <p class="font-bold">
              Error! There was an error sending your request.
            </p>
          </div>
          <div>
            <label for="tx" class="block font-medium text-gray-700">TX Hash</label>
            <div class="mt-1 flex rounded-md shadow-sm pt-1 pb-3">
              <input id="tx" v-model="tx" type="text" class="bg-gray-200 px-4 w-full border rounded text-gray-700" readonly>
            </div>
            <label for="height" class="block font-medium text-gray-700">Height</label>
            <div class="mt-1 flex rounded-md shadow-sm pt-1 pb-3">
              <input id="height" v-model="height" type="text" class="bg-gray-200 px-4 w-full border rounded text-gray-700" readonly>
            </div>
          </div>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Response
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <textarea id="response" v-model="response" class="border rounded text-gray-700 block p-2.5 w-full" />
          </div>
        </div>
      </BaseSection>
    </section>
  </div>
</template>

<script>
import crypto from 'crypto'
import axios from 'axios'

export default {
  name: 'IndexPage',
  data () {
    return {
      endpoint: '',
      namespaceId: '',
      data: '',
      tx: '',
      height: '',
      userHeight: '',
      response: '',
      loading: false,
      success: '',
      error: false,
      errors: []
    }
  },
  created () {
    if (this.namespaceId === '') {
      this.namespaceId = crypto.randomBytes(8).toString('hex')
    }
    if (this.data === '') {
      const length = Math.floor(Math.random() * 100) + 11
      this.data = crypto.randomBytes(length).toString('hex')
    }
    this.endpoint = process.env.ENDPOINT
  },
  methods: {
    getShares () {
      this.errors = []
      if (!this.endpoint) {
        this.errors.push('Please enter an endpoint')
      }
      if (!this.namespaceId) {
        this.errors.push('Please enter a namespace')
      }
      if (!this.userHeight) {
        this.errors.push('Please enter a height')
      }
      if (this.errors.length) {
        return
      }
      this.loading = true
      axios.get(`/namespaced_shares/${this.namespaceId}/height/${this.userHeight}`).then((response) => {
        this.response = JSON.stringify(response.data, null, 2)
        this.height = response.data.height
        this.loading = false
        this.success = 'Shares retrieved!'
      }).catch((error) => {
        this.response = 'Error: ' + error.response.status
        this.loading = false
      })
    },
    submitPfb () {
      this.errors = []
      if (!this.endpoint) {
        this.errors.push('Please enter an endpoint')
      }
      if (!this.namespaceId) {
        this.errors.push('Please enter a namespace')
      }
      if (!this.data) {
        this.errors.push('Please enter some data')
      }
      if (this.errors.length) {
        return
      }
      this.loading = true
      axios.post('/submit_pfb', {
        namespace_id: this.namespaceId,
        data: this.data,
        gas_limit: 80000,
        fee: 2000
      }).then((response) => {
        this.response = JSON.stringify(response.data, null, 2)
        this.height = response.data.height
        this.tx = response.data.txhash
        this.success = 'Transaction succesfully submited!'
        this.loading = false

        setInterval((function fn () {
          this.success = false
          return fn
        })(), 10000)
      }).catch((error) => {
        this.response = 'Error: ' + error.response.status
        this.loading = false
      })
    }
  }
}
// var crypto = require("crypto");
</script>
<style scoped>

.loader{  /* Loader Div Class */
    position: absolute;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    background-color:#eceaea;
    background-image: url('../assets/img/spinner.gif');
    background-size: 50px;
    background-repeat:no-repeat;
    background-position:center;
    z-index:10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}
</style>
