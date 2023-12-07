<!-- <template>

    <q-page class="flex flex-center">
      <iframe src="../html/Histoire_du_Blue_Lobster.html" frameborder="0" width="100%" height="100%"></iframe>
    </q-page>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LobsterFront',
});
</script> -->

<script>
export default {
  setup () {
    return {
      expanded: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<template>
  <div id="q-app" style="min-height: 100vh;">
  <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <div class="text-overline text-orange-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="primary" label="Share"></q-btn>
          <q-btn flat color="secondary" label="Book"></q-btn>

          <q-space></q-space>

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          ></q-btn>
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator></q-separator>
            <q-card-section class="text-subtitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>
</template>

<style>
  .my-card{
    width: 100%;
    max-width: 350px
  }
</style>