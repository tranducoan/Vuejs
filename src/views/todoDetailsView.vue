<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute(); // Lấy thông tin route hiện tại
const user = ref(null); // Khởi tạo biến user

const handleDelete = () => {
  // Logic để xóa todo item
  console.log(`Deleting todo with ID: ${route.params.id}`);
};

onMounted(async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);
  const data = await res.json();
  user.value = data; // Gán dữ liệu vào user
});
</script>

<template>
  <main style="color: white; padding: 2rem;">
    <div class="card-item">
      <h2>{{ user?.name }}</h2>
      <h2>{{ user?.email }}</h2> <!-- Sửa thành email -->
      <h2>{{ user?.username }}</h2> <!-- Sửa thành username -->
      <h2>{{ user?.website }}</h2>
      <button @click="handleDelete" class="delete-button">Delete</button>
    </div>
  </main>
</template>


<style scoped>
.card-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative; /* Để định vị nút Delete */
}

.delete-button {
  background-color: #09ae88; /* Màu nền cho nút Delete */
  color: white; /* Màu chữ */
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  position: absolute; /* Định vị nút trong card-item */
  bottom: 15px;
  right: 15px;
  transition: background 0.3s; /* Hiệu ứng chuyển tiếp */
}

.delete-button:hover {
  background-color: #ff1a1a; /* Thay đổi màu khi hover */
}

.card-item:hover {
  background: #09ae88;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
