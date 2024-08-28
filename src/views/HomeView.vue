<script setup>
import router from '@/router';
import path from 'path';
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const users = ref([]);
const txtSearch = ref('');

onMounted(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    users.value = data;
});
// khai báo Commented để tạo ra các thuộc tính để tính toán và nó sẽ cập nhật mỗi khi thay đổi .
//includes kiểm tra xem tên người dùng có chứa từ khóa tìm kiếm hay không.
// filter là một phương thức của mảng trong JavaScript, nó tạo ra một mảng mới chứa tất cả các phần tử thỏa mãn điều kiện trong hàm callback.
const filterUser = computed(() => {
    return users.value.filter(item => 
        item.name.toUpperCase().includes(txtSearch.value.toUpperCase()) || 
        item.email.toUpperCase().includes(txtSearch.value.toUpperCase())
    );
});
</script>

<template>
<main class="container">
    <div class="search-container">
        <input type="text" placeholder="Tìm kiếm tại đây" v-model="txtSearch" class="search-input" />
    </div>
    <div class="group-card">
      <div class="card-item" v-for="user in filterUser" :key="user.id">
    <div @click="router.push(`/todo/${user.id}`)">
      <h2 class="card-title">{{ user?.name }}</h2>
      <i class="card-email">{{ user?.email }}</i>
    </div>
  </div>
    </div>
</main>
</template>

<style >
/* Giao diện của phần tìm kiếm */
input {
  width: 300px; /* Đặt lại chiều rộng cho phù hợp */
  padding: 0.6rem 1.2rem; /* Tăng padding để tạo không gian */
  border-radius: 35px; /* Giảm độ cong để tạo sự hiện đại */
  border: none;
  outline: none;
  background: #ededed;
  transition: background 0.3s; /* Thêm hiệu ứng chuyển tiếp */
}

input:focus {
  background: #d3d3d3; /* Thay đổi màu nền khi input được chọn */
}

/* Giao diện của phần Group card */

.group-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px; /* Thêm khoảng cách 20px từ phần input */
}

/* Giao diện của phần Group-item */

.card-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  margin: 0 0 10px 0;
  font-size: 1.5em;
  color: #333;
}

i {
  color: #666;
  font-style: italic;
}

.input-container {
  margin-top: 40px;
}

.card-item:hover{
background: #09ae88;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

}
</style>