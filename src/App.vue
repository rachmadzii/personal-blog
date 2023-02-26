<script setup>
import CardBlog from './components/CardBlog.vue';
import MainHeader from './components/MainHeader.vue';

import { onMounted } from 'vue';
import { useBlogsStore } from './stores/blogs.js';
import { storeToRefs } from 'pinia';

const store = useBlogsStore();
const { blogs } = storeToRefs(store);
const { fetchBlogs } = store;

onMounted(() => {
  fetchBlogs();
});
</script>

<template>
  <header>
    <MainHeader />
  </header>

  <main>
    <div class="flex flex-col gap-5 pb-16">
      <div v-for="blog in blogs" :key="blog.id">
        <CardBlog
          :id="blog.id"
          :author="blog.author"
          :title="blog.title"
          :body="blog.body"
          :createdAt="blog.createdAt"
        />
      </div>
    </div>
  </main>
</template>
