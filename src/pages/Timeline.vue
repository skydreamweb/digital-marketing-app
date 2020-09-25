<template>
  <div>
    <user-welcome></user-welcome>
    <q-page>
        <q-banner v-for="(notification, index) in notifications" :key="index" class="bg-grey-1 bordered-banners" outlined >
          <template v-slot:avatar>
            <q-icon :name="notification.mood" :color="notification.color" />
          </template>
          You have {{ notification.procent }}% more followers on your instangram account. Great job!
          <template v-slot:action>
            <q-btn flat color="primary" label="See more" :to="notification.link" />
          </template>
        </q-banner>
    </q-page>
  </div>
</template>

<script>
import UserWelcome from "../components/Timeline/UserWelcome";

export default {
  name: "Timeline",
  components: {
    UserWelcome
  },
  data() {
    return {
    notifications: [
      {
      id: '01',
      mood: 'thumb_up',
      color: 'positive',
      procent: 30,
      link: '/facebook'
    },
      {
      id: '02',
      mood: 'thumb_down',
      color: 'warning',
      procent: 5,
      link: '/instagram'
    },
      {
      id: '03',
      mood: 'thumb_up',
      color: 'positive',
      procent: 71,
      link: '/pinterest'
    },
      {
      id: '04',
      mood: 'sentiment_very_dissatisfied',
      color: 'negative',
      procent: 35,
      link: '/twitter'
    },
    ]
    }
  },
};
</script>

<style lang="scss" scoped>
.bordered-banners {
  border: 1px solid black;
}
</style>
