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
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
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
    const ws = ref(null);  // WebSocket reference

    onMounted(() => {
      ws.value = new WebSocket('ws://localhost:3000');

      ws.value.onopen = () => {
        console.log('Connected to the WebSocket');
      };

      // When a message is received from the server
      ws.value.onmessage = (event) => {
        const message = JSON.parse(event.data);
        messagesStore.addMessage(message.content, message.userId);  // Add to local messages
      };
    });

    const addMessage = (content, userId) => {
      const message = {
        id: Date.now(),
        content: content,
        userId: userId
      };

      if (ws.value && ws.value.readyState === WebSocket.OPEN) {
        ws.value.send(JSON.stringify(message));  // Send the message to the WebSocket server
      }

      messagesStore.addMessage(content, userId);  // Add to local messages as well
    };

    const deleteMessage = (id) => {
      messagesStore.deleteMessage(id);
    };

    const deleteAllMessages = () => {
      messagesStore.deleteAllMessages();
    };

    onUnmounted(() => {
      if (ws.value) {
        ws.value.close();
      }
    });

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
