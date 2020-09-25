const state = {
  linksData: [
    {
      title: "Google",
      caption: "Analytics",
      icon: "fab fa-google",
      link: "/Google"
    },
    {
      title: "Facebook",
      caption: "Stats",
      icon: "fab fa-facebook",
      link: "/facebook"
    },
    {
      title: "Instagram",
      caption: "Community",
      icon: "fab fa-instagram",
      link: "/instagram"
    },
    {
      title: "Linkedin",
      caption: "Community",
      icon: "fab fa-linkedin",
      link: "/linkedin"
    },
    {
      title: "Twitter",
      caption: "Stats",
      icon: "fab fa-twitter",
      link: "/twitter"
    },
    {
      title: "Pinterest",
      caption: "Stats",
      icon: "fab fa-pinterest",
      link: "/twitter"
    },
    {
      title: "Tiktok",
      caption: "Stats",
      icon: "fab fa-tiktok",
      link: "/tiktok"
    },
    {
      title: "Woocommerce",
      caption: "Stats",
      icon: "fab fa-wordpress",
      link: "/wordpress"
    },
    {
      title: "Shopify",
      caption: "Stats",
      icon: "fab fa-shopify",
      link: "/shopify"
    },
    {
      title: "MailChimp",
      caption: "Stats",
      icon: "fab fa-mailchimp",
      link: "/twitter"
    },
    {
      title: "Klaviyo",
      caption: "Stats",
      icon: "fas fa-paper-plane",
      link: "/klaviyo"
    }
  ]
};

const getters = {
  drawerLinks: state => {
    return state.linksData;
  }
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
