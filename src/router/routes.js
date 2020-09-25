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
