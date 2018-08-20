<template>
  <v-card>
    <v-card-title class="headline primary white--text">Component B</v-card-title>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn color="info" @click="increaseCounter">Increase counter</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'B',
  methods: {
    ...mapActions({
      increaseCounter: 'counter/increaseCounter'
    })
    // handleClick () {
    //   this.$store.dispatch('counter/increaseCounter')
    // }
  }
}
</script>
