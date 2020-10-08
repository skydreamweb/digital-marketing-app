<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="white" elevated>
      <q-toolbar class="q-pa-md q-gutter-sm">
        <q-icon v-if="!loggedIn" name="pie_chart" style="font-size: 1.5em" />
        <q-btn
          v-else
          flat
          @click="leftDrawerOpen = !leftDrawerOpen"
          round
          dense
          icon="menu"
        />

        <q-toolbar-title>
          <q-btn to="/">TSF App</q-btn>
        </q-toolbar-title>
        <div class="absolute-center">
          <q-btn
            icon="eva-info-outline"
            class="q-ma-sm q-m-center"
            color="white"
            text-color="black"
            :label="$q.screen.gt.sm ? 'About' : void 0"
            href="https://thesocialformula.net"
          />

          <q-btn
            v-if="!loggedIn"
            icon="eva-pricetags-outline"
            color="white"
            text-color="black"
            :label="$q.screen.gt.sm ? 'Pricing' : void 0"
            to="/pricing"
          />
          <q-btn
            v-if="loggedIn"
            icon="eva-question-mark-circle-outline"
            color="white"
            text-color="black"
            :label="$q.screen.gt.sm ? 'Support' : void 0"
            href="https://thesocialformula.net"
          />
        </div>
        <q-btn
          v-if="!loggedIn"
          color="primary"
          glossy
          icon="eva-person-outline"
          to="/login"
          :label="$q.screen.gt.sm ? 'Login' : void 0"
        />
        <q-btn
          v-else
          @click="logoutUser"
          color="negative"
          glossy
          icon="eva-person-remove-outline"
          :label="$q.screen.gt.sm ? 'Logout' : void 0"
          to="/"
        />

        <q-btn
          v-if="!loggedIn"
          color="deep-orange"
          glossy
          icon="eva-person-add-outline"
          :label="$q.screen.gt.sm ? 'Sing Up' : void 0"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="loggedIn"
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Please select</q-item-label>

        <q-item
          v-for="nav in drawerLinks"
          :key="nav.label"
          :to="nav.link"
          class="text-grey-4"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.title }}</q-item-label>
            <q-item-label caption>{{ nav.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

      <page-footer></page-footer>
  </q-layout>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import EssentialLink from "components/EssentialLink.vue";
import PageFooter from "./footer/Footer.vue";

export default {
  name: "MainLayout",
  components: { EssentialLink, PageFooter },

  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    ...mapGetters(
      {
        loggedIn: 'login/loggedIn',
        drawerLinks: 'drawer/drawerLinks'
      })
  },
  methods: {
    ...mapActions("login", ["logoutUser"])
  }
};
</script>

<style lang="scss" scoped>
.footer {
  height: 20vh;
  background-color: transparent;
  background-image: linear-gradient(45deg, #e7b2a1 0%, #f7dfd7 100%);
}
.footer .col {
  border: 1px solid #eee;
}
.white {
  background-color: white;
  color: black;
}
.q-btn {
    padding: 2px 2px;
}
.q-page-container {
  max-width: 1000px;
  margin: 0 auto;
}

</style>
