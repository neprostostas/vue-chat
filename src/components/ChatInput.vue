<template>
  <div class="chat-input q-mt-sm">
    <q-input v-model="messageContent" @keyup.enter="sendMessage" placeholder="Type a message..." outlined dense clearable />

    <div class="buttons-wrap q-mt-sm">
      <q-btn label="Send" @click="sendMessage" />
      <q-btn label="Delete All" @click="deleteAllMessages" />
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'ChatInput',
  setup(props, { emit }) {
    const messageContent = ref('');

    const sendMessage = () => {
      if (messageContent.value) {
        emit('send', messageContent.value);
        messageContent.value = '';
      }
    };

    const deleteAllMessages = () => {
        emit('deleteAll');
    };

    return {
      messageContent,
      sendMessage,
      deleteAllMessages
    };
  }
})

</script>

<style>
.buttons-wrap {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 20px;
}
</style>