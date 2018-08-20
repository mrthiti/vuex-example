<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout justify-center row warp>
          <v-flex xs6>
            <A />
          </v-flex>
        </v-layout>
        <v-layout justify-center row warp>
          <v-flex xs5 ma-3>
            <B />
          </v-flex>
          <v-flex xs5 ma-3>
            <C />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import A from './components/A.vue'
import B from './components/B.vue'
import C from './components/C.vue'

export default {
  name: 'app',
  components: {
    A,
    B,
    C
  }
}
</script>
