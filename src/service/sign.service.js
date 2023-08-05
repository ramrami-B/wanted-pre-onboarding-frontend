import axios from "axios";

const API = "https://www.pre-onboarding-selection-task.shop";
const SIGN_URL = "/auth";
const SIGNUP_URL = "/signup";
const SIGNIN_URL = "/signin";
const TODO_URL = "/todo";

const MESSAGE = {
  SIGNUP_SUCCESS: "회원가입을 축하드립니다!",
  SIGNIN_SUCCESS: "로그인 되었습니다!",
  FAIL: "이메일 혹은 비밀번호를 확인하세요.",
};

export async function signUp(data) {
  try {
    const res = await axios.post(API + SIGN_URL + SIGNUP_URL, data);
    if (res.status === 201) {
      window.location.href = SIGNIN_URL;
      alert(`email: ${data.email}\n` + MESSAGE.SIGNUP_SUCCESS);
    }
  } catch (e) {
    console.log(e);
    alert(MESSAGE.FAIL);
  }
}

export async function signIn(data) {
  try {
    const res = await axios.post(API + SIGN_URL + SIGNIN_URL, data, {
      credentials: "include",
    });
    if (res.status === 200) {
      window.location.href = TODO_URL;
      localStorage.setItem("access_token", res.data.access_token);
      alert(`email: ${data.email}\n` + MESSAGE.SIGNIN_SUCCESS);
    }
  } catch (e) {
    console.log(e);
    alert(MESSAGE.FAIL);
  }
}
