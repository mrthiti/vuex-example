<template>
  <v-card>
    <v-card-title class="headline primary white--text">Component A</v-card-title>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <span class="headline">My name: xxx</span>
        </v-flex>
        <v-flex xs12>
          <span class="headline">Current count: xxx</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'A'
}
</script>
