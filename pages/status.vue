<template>
  <div>
    <!-- チャート -->
    <!-- ステータス -->
    <div class="row">
      <b-card title="Mining Status" bg-variant="light" class="col-md">
        <b-card-text>
          <b-table striped fixed hover responsive footClone :items="mining" :fields="miningFields">
            <template slot="luck" slot-scope="data">{{luckFormat(data.item.luck)}}</template>
            <template slot="hash" slot-scope="data">{{hashFormat(data.item.hash)}}</template>
          </b-table>
        </b-card-text>
      </b-card>
      <b-card title="Network Status" bg-variant="light" class="col-md">
        <b-card-text>
          <b-table striped fixed hover responsive footClone :items="network">
            <template slot="hash" slot-scope="data">{{hashFormat(data.item.hash)}}</template>
          </b-table>
        </b-card-text>
      </b-card>
    </div>
    <!-- ブロック -->
    <div>
      <b-list-group v-for="coins in blocks" :key="coins">
        <b-list-group-item>
          <h3>{{coins.name}}</h3>
          <b-table striped hover responsive :items="coins.data" :fields="blocksFields">
            <template slot="block" slot-scope="data">
              <div v-if="blockLink(coins.name,data.item.hash)">
                <b-link :href="blockLink(coins.name,data.item.hash)">{{data.item.block}}</b-link>
              </div>
              <div v-else>{{data.item.block}}</div>
            </template>
            <template slot="miner" slot-scope="data">
              <b-link :to="'workers/'+data.item.miner.split('.')[0]">{{data.item.miner}}</b-link>
            </template>
          </b-table>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import luckFormat from "~/plugins/luckFormat";
import hashFormat from "~/plugins/hashFormat";
import blockLink from "~/plugins/blockLink";
import { mapMutations } from 'vuex'

console.log(luckFormat());
export default {
  asyncData(conntext) {
    return {
      luckFormat: luckFormat,
      hashFormat: hashFormat,
      blockLink: blockLink
    };
  },
  methods: {  
  ...mapMutations({
      get: "statusApi/get"
  })
  },
  data() {
    return {
      miningFields: ["name", "miner", "worker", "hash", "luck"],
      mining: [
        {
          name: "Bellcoin",
          miner: 3,
          worker: 19,
          hash: 131700,
          luck: 0.008
        },
        {
          name: "BitZeny",
          miner: 3,
          worker: 19,
          hash: 131700,
          luck: 0.125
        },
        {
          name: "Koto",
          miner: 3,
          worker: 19,
          hash: 131700,
          luck: 0.987
        },
        {
          name: "Monacoin",
          miner: 3,
          worker: 19,
          hash: 131700,
          luck: 5.3333
        },
        {
          name: "Susucoin",
          miner: 3,
          worker: 19,
          hash: 131700,
          luck: 5.3333
        }
      ],
      network: [
        {
          name: "Bellcoin",
          block: 256626,
          hash: 960700,
          difficulty: 0.00138768,
          node: 30
        },
        {
          name: "BitZeny",
          block: 256626,
          hash: 960700,
          difficulty: 0.00138768,
          node: 30
        },
        {
          name: "Koto",
          block: 256626,
          hash: 960700,
          difficulty: 0.00138768,
          node: 30
        },
        {
          name: "Monacoin",
          block: 256626,
          hash: 960700,
          difficulty: 0.00138768,
          node: 30
        },
        {
          name: "Susucoin",
          block: 256626,
          hash: 960700,
          difficulty: 0.00138768,
          node: 30
        }
      ],
      blocksFields: ["block","miner", "date", "status"],
      blocks: [
        {
          name: "Susucoin",
          data: [
            {
              block: 162105,
              hash: "",
              miner: "SVWTNpu8mr5cQC1FEGPGdJ1MAfdmkokDzp.NH",
              date: "Sun Mar 10 2019 09:45:31 GMT+0900 (JST)",
              status: 100
            }
          ]
        },
        {
          name: "Bellcoin",
          data: [
            {
              block: 256919,
              hash: "",
              miner: "B81BDwJTasemPgnHBxQ67wX2WV48b2XmEc.kanabou7",
              date: "Sun Mar 10 2019 09:45:31 GMT+0900 (JST)",
              status: 0
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>
