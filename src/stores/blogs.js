import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'https://63fb5c154e024687bf77009c.mockapi.io/api/blogs';

export const useBlogsStore = defineStore('blogs', {
  state: () => ({ blogs: [] }),
  actions: {
    async fetchBlogs() {
      try {
        const response = await axios.get(`${API_URL}`);
        this.blogs = response.data;
      } catch (err) {
        console.error(err);
      }
    },
    async addBlog(payload) {
      try {
        const response = await axios.post(`${API_URL}`, payload);
        this.blogs = response.data;
      } catch (error) {
        console.error(err);
      }
    },
    async deleteBlog(id) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        this.fetchBlogs();
      } catch (error) {
        console.error(err);
      }
    },
  },
});
