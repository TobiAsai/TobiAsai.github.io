<script setup>
import {ref, watchEffect} from "vue";
import router from "../router/index.js";

const email = ref("")
const password = ref("")
const rePassword = ref("")
const emailInputStyle = ref("")
const passwordInputStyle = ref("")
const rePasswordInputStyle = ref("")
const emailIsEmpty = ref(false)
const passwordIsEmpty = ref(false)
const rePasswordIsEmpty = ref(false)
const passwordFlag = ref(false)
const rePasswordFlag = ref(false)
const equalPassword = ref(false)

const passwordReg = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/



const submit = (() => {
  if (email.value.trim() === "") {
    emailInputStyle.value = "empty"
    emailIsEmpty.value = true
  } else {
    emailInputStyle.value = ""
    emailIsEmpty.value = false
  }
  if (password.value.trim() === "") {
    passwordInputStyle.value = "empty"
    passwordIsEmpty.value = true
  } else {
    passwordInputStyle.value = ""
    passwordIsEmpty.value = false
  }
  if (rePassword.value.trim() === "") {
    rePasswordInputStyle.value = "empty"
    rePasswordIsEmpty.value = true
  } else {
    rePasswordInputStyle.value = ""
    rePasswordIsEmpty.value = false
  }
  equalPassword.value = password.value !== rePassword.value;
  if (email.value.trim() !== "" && password.value.trim() !== ""){
    if (passwordReg.test(password.value) === true) {
      passwordFlag.value = false
      if (passwordReg.test(rePassword.value) === true) {
        rePasswordFlag.value = false
        if (passwordReg.test(rePassword.value) === true) {
          rePasswordFlag.value = false
          if (password.value === rePassword.value) {
            router.push("/login")
          }
        }
      } else {
        rePasswordFlag.value = true
        rePasswordInputStyle.value = "empty"
      }
    } else {
      if (passwordReg.test(rePassword.value) === true) {
        rePasswordFlag.value = false
      } else {
        rePasswordFlag.value = true
        rePasswordInputStyle.value = "empty"
      }
      passwordFlag.value = true
      passwordInputStyle.value = "empty"
    }
  }
})

watchEffect(() => {
  if (email.value.trim() !== "") {
    emailInputStyle.value = ""
    emailIsEmpty.value = false
  }
  if (password.value.trim() !== "") {
    passwordInputStyle.value = ""
    passwordIsEmpty.value = false
  }
  if (rePassword.value.trim() !== "") {
    rePasswordInputStyle.value = ""
    rePasswordIsEmpty.value = false
  }
  if (passwordReg.test(password.value) === true) {
    passwordFlag.value = false
    passwordInputStyle.value = ""
  }
  if (passwordReg.test(rePassword.value) === true) {
    rePasswordFlag.value = false
    rePasswordInputStyle.value = ""
  }
  if (password.value === rePassword.value) {
    equalPassword.value = false
  }
})
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}


.nav {
  margin-left: 20%;
  margin-top: 1%;
  font-size: 16px;

  ul {
    list-style: none;
    display: flex;

    li {
      margin: 0 5px;
    }
  }

  .superLink {
    text-decoration: none;
    color: rgba(119, 113, 99, 0.64);
    font-weight: bold;

    &:hover {
      transition: 0.2s;
      color: #e4dab8;
    }
  }
}

.main {
  width: 25%;
  margin-top: 2%;
  margin-left: 35%;

  h2 {
    color: #666;
    margin-left: 2%;
  }
}

.login {
  border: 1px solid rgba(92, 92, 92, 0.2);
  border-radius: 10px;
  padding: 2%;
  margin: 2%;
  .login-form {
    input {
      margin: 10px 0;
      width: 100%;
      height: 40px;
      &:focus {
        outline: none;
      }
    }
    button {
      width: 50px;
      height: 30px;
      border: solid 1px #e4dab8;
      border-radius: 20px;
      background-color: #e4dab8;
      font-size: 12px;
      color: #666;
      margin-left: 90%;
    }
    .error {
      font-size: 12px;
      color: red;
    }
  }
}

.empty {
  border-color: red;
}

</style>

<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/" class="superLink">首頁</router-link>
      </li>
      <li>/</li>
      <li>註冊</li>
    </ul>
  </div>
  <div class="main">
    <h2>註冊</h2>
    <div class="login">
      <form class="login-form" @submit.prevent="submit">
        <span>Email*</span><br />
        <input type="email" placeholder="Email" v-model="email" :class="emailInputStyle" /><br />
        <span v-if="emailIsEmpty" class="error">輸入框為空</span><br />
        <span>密碼*</span><br />
        <input type="password" placeholder="Password" v-model="password" :class="passwordInputStyle" /><br />
        <span v-if="passwordIsEmpty" class="error">輸入框為空</span><br />
        <span v-if="passwordFlag" class="error">至少有一个字母和一個數字且長度大於8</span><br />
        <span>再輸一次密碼*</span><br />
        <input type="password" placeholder="Password" v-model="rePassword" :class="rePasswordInputStyle" /><br />
        <span v-if="rePasswordIsEmpty" class="error">輸入框為空</span><br />
        <span v-if="rePasswordFlag" class="error">至少有一个字母和一個數字且長度大於8</span><br />
        <span v-if="equalPassword" class="error">兩次密碼需要相等</span>
        <button type="submit" @click="submit">註冊</button>
      </form>
    </div>
  </div>
</template>