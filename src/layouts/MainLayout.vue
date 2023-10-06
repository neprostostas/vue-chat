<template>
  <q-layout view="hHh lpR fFf">

    <q-header>
      <div class="text-center q-my-xs text-subtitle1 text-bold">
        Vue Chat
      </div>
    </q-header>

    <q-page-container>
      <slot>
        <router-view />
      </slot>
    </q-page-container>

    <q-footer>
      <div class="text-center q-my-xs text-subtitle1 text-bold">
        Copyright (c) {{ currentYear }}
      </div>
    </q-footer>

  </q-layout>
</template>

<script>

import {computed, defineComponent} from "vue";

export default defineComponent({
  name: 'MainLayout',
  setup() {

    const currentYear = computed(() => new Date().getFullYear());

    return {
      currentYear
    }
  }
});
</script>
