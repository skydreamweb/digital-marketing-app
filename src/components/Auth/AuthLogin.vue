<template>
  <form @submit.prevent="loginForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Please login to access
      </q-banner>
    </div>

    <!-- Username -->
    <div class="row q-mb-md">
      <q-input
        lazy-rules
        :rules="[
          val => emailValidation(val) || 'Please use a valid email address'
        ]"
        class="col"
        outlined
        v-model="formData.email"
        stack-label
        label="Username"
        ref="email"
      />
    </div>

    <!-- Password -->
    <div class="row q-mb-md">
      <q-input
        lazy-rules
        :rules="[val => val.length >= 6 || 'Please use minimum 6 characters']"
        type="password"
        class="col"
        outlined
        v-model="formData.password"
        stack-label
        label="Password"
        ref="password"
      />
    </div>

    <!-- Submit button -->
    <div class="row q-mb-md">
      <q-space />
      <q-btn color="primary" label="Login" type="submit" />
    </div>

  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  
  name: "AuthLogin",
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    
    ...mapActions('login', ['loginUser']),
    loginForm() {
        this.$refs.email.validate()
        this.$refs.password.validate()
        if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
            this.loginUser(this.formData)
        }
    },
    emailValidation(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>

<style lang="scss" scoped></style>
