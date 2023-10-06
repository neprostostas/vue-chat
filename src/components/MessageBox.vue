<template>
  <div class="message-box" :class="{'own-message': isOwn}">
    <div class="q-badge--multi-line">{{ message.content }}</div>
    <q-btn class="button-delete" flat dense icon="delete" @click="deleteMessage" v-if="isOwn"/>
  </div>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
  name: 'MessageBox',
  props: {
    message: {
      type: Object,
      required: true
    },
    isOwn: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {

    const deleteMessage = () => {
      emit('delete', props.message.id);
    }

    return {
      deleteMessage
    }
  }
});

</script>

<style>
.message-box {
  width: fit-content;
  overflow: auto;
  display: grid;
  align-items: center;
  grid-template-columns: auto 30px;
  gap: 10px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  background-color: #e1e1e1;
}
.own-message {
  background-color: #a1d4ff;
  margin-left: auto;
}
.button-delete {
  margin: 0 10px;
}
</style>
