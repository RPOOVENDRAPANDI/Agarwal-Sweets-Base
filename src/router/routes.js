const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },
  {
    path: "/",
    component: () => import("layouts/FrontLayout.vue"),
    name: "home",
    children: [
      {
        path: "AllProducts",
        component: () => import("pages/AllProductsPage.vue"),
        name: "all-products",
      },
      {
        path: "Sweets",
        component: () => import("pages/SweetsPage.vue"),
        name: "sweets",
      },
      {
        path: "Savouries",
        component: () => import("pages/SavouriesPage.vue"),
        name: "savouries",
      },
      {
        path: "AboutUs",
        component: () => import("pages/AboutUsPage.vue"),
        name: "about-us",
      },
      {
        path: "Blog",
        component: () => import("pages/BlogPage.vue"),
        name: "blog",
      },
      {
        path: "ContactUs",
        component: () => import("pages/ContactUsPage.vue"),
        name: "contact-us",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
