const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        path: "", 
        component: () => import("pages/Index.vue") 
      },
      { 
        path: "/login", 
        component: () => import("pages/Login.vue") 
      },
      { 
        path: "/timeline", 
        component: () => import("pages/Timeline.vue") 
      },
      { 
        path: "/pricing", 
        component: () => import("pages/Pricing.vue") 
      },
      { 
        path: "/facebook", 
        component: () => import("pages/Facebook.vue") 
      },
      { 
        path: "/google", 
        component: () => import("pages/Google.vue") 
      },
      { 
        path: "/instagram", 
        component: () => import("pages/Instagram.vue") 
      },
      { 
        path: "/linkedin", 
        component: () => import("pages/Linkedin.vue") 
      },
      { 
        path: "/pinterest", 
        component: () => import("pages/Pinterest.vue") 
      },
      { 
        path: "/tiktok", 
        component: () => import("pages/Tiktok.vue") 
      },
      { 
        path: "/woo", 
        component: () => import("pages/Woo.vue") 
      },
      { 
        path: "/shopify", 
        component: () => import("pages/Shopify.vue") 
      },
      { 
        path: "/mailchimp", 
        component: () => import("pages/Mailchimp.vue") 
      },
      { 
        path: "/klaviyo", 
        component: () => import("pages/Klaviyo.vue") 
      },
      { 
        path: "/twitter", 
        component: () => import("pages/Twitter.vue") 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
