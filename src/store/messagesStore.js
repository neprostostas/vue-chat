import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
    state: () => ({
        messages: []
    }),
    actions: {
        addMessage(content) {
            this.messages.push({
                id: Date.now(),
                content: content,
                isOwn: true
            });
        },
        deleteMessage(id) {
            this.messages = this.messages.filter(m => m.id !== id);
        },
        deleteAllMessages() {
            this.messages = []
        }
    }
})
