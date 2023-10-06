import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
    state: () => ({
        messages: JSON.parse(localStorage.getItem('messages')) || []
    }),
    actions: {
        addMessage(content) {
            this.messages.push({
                id: Date.now(),
                content: content,
                isOwn: true
            });
            this.saveToLocalStorage();
        },
        deleteMessage(id) {
            this.messages = this.messages.filter(m => m.id !== id);
            this.saveToLocalStorage();
        },
        deleteAllMessages() {
            this.messages = [];
            this.clearLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('messages', JSON.stringify(this.messages));
        },
        clearLocalStorage() {
            localStorage.removeItem('messages');
        }
    }
})
