<script setup>
import { useBlogsStore } from '../stores/blogs.js';
import { Trash } from 'lucide-vue-next';

const store = useBlogsStore();

const props = defineProps({
  id: String,
  author: String,
  title: String,
  body: String,
  createdAt: String,
});

const date = new Date(props.createdAt);
const formattedDate = date.toLocaleDateString('id-ID');

const handleDelete = async (id) => {
  await store.deleteBlog(id);
};
</script>

<template>
  <div class="flex bg-white rounded-lg justify-between items-center gap-10 p-5">
    <div>
      <h1 class="font-semibold text-xl capitalize mb-1">{{ title }}</h1>
      <p class="text-gray-500 mb-3">
        Created by <span class="capitalize">{{ author }}</span> on
        {{ formattedDate }}
      </p>
      <p class="text-lg">
        {{ body }}
      </p>
    </div>
    <div class="flex gap-2">
      <button
        @click="handleDelete(id)"
        :disabled="store.loading"
        class="bg-red-500 h-fit p-2 rounded-full text-white"
      >
        <Trash :size="20" />
      </button>
    </div>
  </div>
</template>
