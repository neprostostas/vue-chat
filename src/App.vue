<template>
  <MainLayout>
    <q-page class="flex flex-center">
      <ChatWindow />
    </q-page>
  </MainLayout>
</template>

<script>
import { defineComponent } from "vue";
import ChatWindow from '@/components/ChatWindow';
import MainLayout from '@/layouts/MainLayout';

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    ChatWindow
  },
  setup() {


    return {

    }
  }
});
</script>

<style>
* {
  font-family: 'Lexend', sans-serif;
}
</style>
