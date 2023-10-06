<template>
  <div class="chat-window q-mx-md">
    <div class="messages">
      <MessageBox v-for="message in messagesStore.messages"
                  :key="message.id"
                  :message="message"
                  :isOwn="message.userId === messagesStore.userId"
                  @delete="deleteMessage" />
    </div>
    <ChatInput @send="content => addMessage(content, messagesStore.userId)"
               @deleteAll="deleteAllMessages" />
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import MessageBox from '@/components/MessageBox';
import ChatInput from '@/components/ChatInput';

import { useMessagesStore } from '@/store/messagesStore';

export default defineComponent({
  name: 'ChatWindow',
  components: {
    MessageBox,
    ChatInput
  },
  setup() {
    const messagesStore = useMessagesStore();

    const addMessage = (content, userId) => {
      messagesStore.addMessage(content, userId);
    };

    const deleteMessage = (id) => {
      messagesStore.deleteMessage(id);
    };

    const deleteAllMessages = () => {
      messagesStore.deleteAllMessages()
    };

    return {
      messagesStore,
      addMessage,
      deleteMessage,
      deleteAllMessages
    };
  }
});

</script>

<style>
.chat-window {
  max-width: 500px;
  width: 100%;
  margin: auto;
}
.messages {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

@media (max-width: 570px) {
  .chat-window {
    max-width: 350px;
  }
}
</style>
