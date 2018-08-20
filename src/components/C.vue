<template>
  <v-card>
    <v-card-title class="headline primary white--text">Component C</v-card-title>

    <v-container>
      <v-layout row wrap>
        <v-flex xs6 pa-2>
          <v-text-field
            label="First name"
            outline
          ></v-text-field>
        </v-flex>
        <v-flex xs6 pa-2>
          <v-text-field
            label="Last name"
            outline
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="info">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'C'
}
</script>
