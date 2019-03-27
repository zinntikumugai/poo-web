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
        <b-list-group>
            <b-list-group-item>
                <h3>Bellcoin</h3>
            <b-table striped  hover responsive footClone :items="blocks[0].data">
                <template slot="block" slot-scope="data">{{data.item.block}}</template>
                <template slot="miner" slot-scope="data">
                    <b-link :to="'workers'/data.item.miner.split('.')[0]">{{data.item.miner}}</b-link>
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
console.log(luckFormat());
export default {
  asyncData(conntext) {
    return {
      luckFormat: luckFormat,
      hashFormat: hashFormat
    };
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
          name: "Bellcoin",
          miner: 3,
          worker: 19,
          hash: 131700,
          luck: 0.125
        },
        {
          name: "Bellcoin",
          miner: 3,
          worker: 19,
          hash: 131700,
          luck: 0.987
        },
        {
          name: "Bellcoin",
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
          name: "Bellcoin",
          block: 256626,
          hash: 960700,
          difficulty: 0.00138768,
          node: 30
        },
        {
          name: "Bellcoin",
          block: 256626,
          hash: 960700,
          difficulty: 0.00138768,
          node: 30
        },
        {
          name: "Bellcoin",
          block: 256626,
          hash: 960700,
          difficulty: 0.00138768,
          node: 30
        }
      ],
      blocks: [
          {
              name: "bellcoin",
              data: [
                  {
                      block: 162105,
                      miner: "SVWTNpu8mr5cQC1FEGPGdJ1MAfdmkokDzp.NH",
                      date: 123456789789,
                      status: true
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
