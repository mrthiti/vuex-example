<template>
  <v-card>
    <v-card-title class="headline primary white--text">Component A</v-card-title>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <span class="headline">My name: {{fullName}}</span>
        </v-flex>
        <v-flex xs12>
          <span class="headline">Current count: {{ currentCounter }}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'A',
  computed: {
    ...mapState({
      currentCounter: store => store.counter.currentCounter
    }),
    ...mapGetters({
      fullName: 'name/fullName'
    })
  }
}
</script>
