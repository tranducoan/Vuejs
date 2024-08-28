<script setup>
import { ref } from 'vue';

const email = ref('');
const name = ref('');
const phone = ref('');

const createTodo = async () => {
  const todoData = {
    email: email.value,
    name: name.value,
    phone: phone.value,
  };

  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Xử lý phản hồi từ API nếu cần
    const result = await response.json();
    console.log('Todo created:', result);

    // Reset các trường nhập
    email.value = '';
    name.value = '';
    phone.value = '';
  } catch (error) {
    console.error('Error creating todo:', error);
  }
};
</script>

<template>
  <main style="color: white; padding: 2rem; display: flex; flex-direction: column; align-items: center;">
    <h1>Create Todo</h1>
    <div style="margin-top: 2rem; width: 100%; max-width: 400px;">
      <div style="margin-bottom: 1rem;">
        <label>Email:</label>
        <input type="text" v-model="email" placeholder="Enter your email" required style="width: 100%; padding: 0.5rem;"/>
      </div>
      <div style="margin-bottom: 1rem;">
        <label>Name:</label>
        <input type="text" v-model="name" placeholder="Enter your name" required style="width: 100%; padding: 0.5rem;"/>
      </div>
      <div style="margin-bottom: 1rem;">
        <label>Phone:</label>
        <input type="text" v-model="phone" placeholder="Enter your phone" required style="width: 100%; padding: 0.5rem;"/>
      </div>
      <div class="btn-main" @click="createTodo" style="display: flex; justify-content: center; align-items: center; width: 150px; height: 40px; background-color: #007BFF; color: white; border-radius: 5px; cursor: pointer; margin-top: 1rem;">
        Create New
      </div>
    </div>
  </main>
</template>
