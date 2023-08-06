import axios from "axios";

const API = "https://www.pre-onboarding-selection-task.shop";
const TODO_URL = "/todos";

const ACCESS_TOKEN = localStorage.getItem("access_token");

export async function createTodo(data) {
  try {
    const res = await axios.post(API + TODO_URL, data, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    res.status === 201 && console.log(res);
  } catch (e) {
    console.log(e);
  }
}

export async function getTodo() {
  try {
    const res = await axios.get(API + TODO_URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    if (res.status === 200) return res.data;
  } catch (e) {
    console.log(e);
  }
}

export async function updateTodo(id, data) {
  try {
    const res = await axios.put(API + TODO_URL + `/${id}`, data, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    if (res.status === 200) return res.data;
  } catch (e) {
    console.log(e);
  }
}
