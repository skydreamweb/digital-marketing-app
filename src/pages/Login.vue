<template>
  <div class="login">
    <q-page>
      <q-card class="auth-tabs q-ma-sm">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <div class="text-h6">
              <auth-login />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-page>
  </div>
</template>

<script>
import AuthLogin from "../components/Auth/AuthLogin";
export default {
  name: "Login",
  components: {
    AuthLogin
  },
  data() {
    return {
      tab: "login"
    };
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin: 20vh auto;
}
.auth-tabs {
  max-width: 500px;
  margin: 0 auto;
}
</style>
