<script setup>
import { useBlogsStore } from '../stores/blogs';
import { Plus } from 'lucide-vue-next';
import { ref } from 'vue';

const storeBlog = useBlogsStore();
const showModal = ref(false);

const onSubmit = async () => {
  e.preventDefault();

  const payload = {
    author: author.value,
    title: title.value,
    body: body.value,
  };

  await storeBlog.addBlog(payload);

  author.value = '';
  title.value = '';
  body.value = '';
  showModal.value = false;
};
</script>

<template>
  <button
    @click="showModal = true"
    class="mt-4 button-primary flex items-center gap-1 !pl-4"
  >
    <Plus :size="22" /> Add Blog
  </button>
  <div class="fixed inset-0 z-10 bg-black/[.5]" v-if="showModal">
    <div class="flex items-center justify-center h-screen z-50">
      <div
        class="text-left w-[1000px] h-fit bg-white rounded-lg p-5 lg:p-7 mx-4"
        v-if="showModal"
      >
        <h3 class="mb-5 text-xl font-semibold text-gray-900">Add New Blog</h3>
        <form @submit="onSubmit" class="space-y-4">
          <div>
            <label
              for="author"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Author
            </label>
            <input
              type="text"
              v-model="author"
              class="input-field"
              placeholder="Input author name"
              required
            />
          </div>
          <div>
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              v-model="title"
              placeholder="Input blog title"
              class="input-field"
              required
            />
          </div>
          <div>
            <label
              for="body"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Content
            </label>
            <textarea
              v-model="pengeluaran"
              placeholder="Input blog content"
              class="input-field"
              required
            />
          </div>
          <div class="flex justify-end gap-x-3 pt-2">
            <button class="button-disabled" @click="showModal = false">
              Cancel
            </button>
            <button type="submit" class="button-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
