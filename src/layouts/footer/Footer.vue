<template>
  <div>
    <q-footer  v-if="loggedIn" class="custom-bg text-white custom-border">
        <q-tabs>
          <q-route-tab name="profile" icon="face" label="Profile" to="/" />
          <q-route-tab name="settings" icon="settings" label="Settings" to="/" />
          <q-route-tab name="feed" icon="dynamic_feed" label="Feed" to="/timeline" />
        </q-tabs>
    </q-footer>

    <q-footer v-else elevated class="custom-gray position-relative">
      <div class="custom-footer row q-pa-sm">
        <div class="q-pa-md col">
          <q-list dense padding class="rounded-borders">
            <div>
              <div class="text-center">
                <img
                  width="300"
                  height="180"
                  src="https://www.thesocialformula.net/wp-content/uploads/2020/01/The-Social-Formula.svg"
                  class="image wp-image-311  attachment-full size-full"
                  alt="The Social Formula Logo"
                  loading="lazy"
                  style="max-width: 100%; height: auto; padding: 1rem;"
                />
              </div>
              <div>
                <div class="padding-2">
                  <p class="text-dark">
                    With HQ in Belgrade, The Social Formula is an ever growing
                    team of marketing, digital and design strategists set on
                    executing goals and getting you to a success you can
                    measure.
                  </p>
                </div>
              </div>
              <div class="ct-widget ct-socials-widget">
                <p class="text-center text-dark">Follow us on social</p>
                <div class="ct-social-box">
                  <a
                    href="https://www.instagram.com/social_formula/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-network="instagram"
                    aria-label="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3.3"></circle>
                      <path
                        d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"
                      ></path>
                    </svg>

                    <span class="ct-label" hidden=""> Instagram </span>
                  </a>

                  <a
                    href="https://www.facebook.com/TheSocialFormula101/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-network="facebook"
                    aria-label="Facebook"
                  >
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path
                        d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"
                      ></path>
                    </svg>

                    <span class="ct-label" hidden=""> Facebook </span>
                  </a>

                  <a
                    href="https://twitter.com/Social_Formula1"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-network="twitter"
                    aria-label="Twitter"
                  >
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path
                        d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z"
                      ></path>
                    </svg>

                    <span class="ct-label" hidden=""> Twitter </span>
                  </a>

                  <a
                    href="https://www.pinterest.co.uk/thesocialformula/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-network="pinterest"
                    aria-label="Pinterest"
                  >
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path
                        d="M10,0C4.5,0,0,4.5,0,10c0,4.1,2.5,7.6,6,9.2c0-0.7,0-1.5,0.2-2.3c0.2-0.8,1.3-5.4,1.3-5.4s-0.3-0.6-0.3-1.6c0-1.5,0.9-2.6,1.9-2.6c0.9,0,1.3,0.7,1.3,1.5c0,0.9-0.6,2.3-0.9,3.5c-0.3,1.1,0.5,1.9,1.6,1.9c1.9,0,3.2-2.4,3.2-5.3c0-2.2-1.5-3.8-4.2-3.8c-3,0-4.9,2.3-4.9,4.8c0,0.9,0.3,1.5,0.7,2C6,12,6.1,12.1,6,12.4c0,0.2-0.2,0.6-0.2,0.8c-0.1,0.3-0.3,0.3-0.5,0.3c-1.4-0.6-2-2.1-2-3.8c0-2.8,2.4-6.2,7.1-6.2c3.8,0,6.3,2.8,6.3,5.7c0,3.9-2.2,6.9-5.4,6.9c-1.1,0-2.1-0.6-2.4-1.2c0,0-0.6,2.3-0.7,2.7c-0.2,0.8-0.6,1.5-1,2.1C8.1,19.9,9,20,10,20c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z"
                      ></path>
                    </svg>

                    <span class="ct-label" hidden=""> Pinterest </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/the-social-formula/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-network="linkedin"
                    aria-label="LinkedIn"
                  >
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path
                        d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z"
                      ></path>
                    </svg>

                    <span class="ct-label" hidden=""> LinkedIn </span>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCgpKERT46yQlOC4ewBwMpEg"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-network="youtube"
                    aria-label="YouTube"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path
                        d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z"
                      ></path>
                    </svg>

                    <span class="ct-label" hidden=""> YouTube </span>
                  </a>
                </div>
              </div>
            </div>
          </q-list>
        </div>
        <div class="q-pa-md col">
          <q-list dense padding class="rounded-borders">
            <div class="text-dark">
              <div class="text-h4 q-py-sm">Contact</div>
              <div class="textwidget entry-content">
                <p>
                  <strong>Address:</strong> Science Technology Park Belgrade,<br />
                  Veljka Dugoševića 54,<br />
                  Belgrade, Serbia
                </p>
                <p><strong>Email:</strong> hello@thesocialformula.net</p>
                <p><strong>Open:</strong> Mon-Fri 9 AM – 5 PM CET / UTC+1</p>
              </div>
            </div>
          </q-list>
        </div>
        <div class="q-pa-md col">
          <q-list dense padding class="rounded-borders">
            <div class="ct-widget widget_nav_menu text-dark">
              <div class="text-h4 q-py-sm">Services</div>
              <div class="menu-services-container">
                <ul id="menu-services" class="widget-menu">
                  <li class="menu-item">
                    <a
                      href="https://www.thesocialformula.net/services/website-development/"
                      >Website Development</a
                    >
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://www.thesocialformula.net/services/social-media/"
                      >Social Media</a
                    >
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://www.thesocialformula.net/services/search-engine-optimization/"
                      >Search Engine Optimization</a
                    >
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://www.thesocialformula.net/services/digital-marketing-strategy-development/"
                      >Digital Marketing Strategy</a
                    >
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://www.thesocialformula.net/services/branding-graphic-web-design/"
                      >Branding – Graphic &amp; Web Design</a
                    >
                  </li>
                  <li class="menu-item">
                    <a
                      href="https://www.thesocialformula.net/services/online-ads/"
                      >Online Ads</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </q-list>
        </div>
      </div>
      <div>
        <div class="ct-container text-dark text-center q-pa-md">
          <div data-column="copyright">
            <div class="ct-footer-copyright">
              <p>Copyright © 2020 The Social Formula - Powered by TSF</p>
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      login: "/login"
    };
  },
  computed: {
   ...mapGetters(
      {
        loggedIn: 'login/loggedIn',
        drawerLinks: 'drawer/drawerLinks'
      })
  }
};
</script>

<style lang="scss" scoped>
.position-relative {
  position: relative!important;
}
.custom-width {
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
}
.custom-bg {
  background-color: $bg-tsf;
}
.custom-gray {
  background-color: #f4f5f8;
}
.padding-1 {
  padding: 1rem;
}
.padding-2 {
  padding: 2rem;
}
.ct-social-box {
  display: flex;
  justify-content: space-evenly;
}
.menu-item {
  list-style-type: none;
  a {
    color: #000;
    text-decoration: none;
  }
}
@media only screen and (max-width: 768px) {
  .padding-2 {
    padding: 1rem;
  }
}
</style>
