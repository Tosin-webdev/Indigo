import axios from "axios";

// The axios are used to make api calls
const API = axios.create({ baseUrl: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`);
// export const likePost = (id) => API.patch(`${url}/${id}/likePost`);
export const signIn = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
// note: the formData is the post payload
