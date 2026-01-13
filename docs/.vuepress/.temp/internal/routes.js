export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/how.html", { loader: () => import(/* webpackChunkName: "how.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/how.html.js"), meta: {"title":"如何使用本软件"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"软件的索引"} }],
  ["/tutorial/example.html", { loader: () => import(/* webpackChunkName: "tutorial_example.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/tutorial/example.html.js"), meta: {"title":"Example"} }],
  ["/localization/chs/", { loader: () => import(/* webpackChunkName: "localization_chs_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/chs/index.html.js"), meta: {"title":"主索引"} }],
  ["/localization/cht/", { loader: () => import(/* webpackChunkName: "localization_cht_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/cht/index.html.js"), meta: {"title":"軟件索引"} }],
  ["/localization/fra/", { loader: () => import(/* webpackChunkName: "localization_fra_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/fra/index.html.js"), meta: {"title":"软件索引"} }],
  ["/localization/ger/", { loader: () => import(/* webpackChunkName: "localization_ger_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/ger/index.html.js"), meta: {"title":"软件索引"} }],
  ["/localization/ita/", { loader: () => import(/* webpackChunkName: "localization_ita_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/ita/index.html.js"), meta: {"title":"使用本软件"} }],
  ["/localization/jap/", { loader: () => import(/* webpackChunkName: "localization_jap_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/jap/index.html.js"), meta: {"title":"软件索引"} }],
  ["/localization/por/", { loader: () => import(/* webpackChunkName: "localization_por_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/por/index.html.js"), meta: {"title":"软件索引"} }],
  ["/localization/kor/", { loader: () => import(/* webpackChunkName: "localization_kor_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/kor/index.html.js"), meta: {"title":"软件索引"} }],
  ["/localization/pol/", { loader: () => import(/* webpackChunkName: "localization_pol_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/pol/index.html.js"), meta: {"title":"使用本软件"} }],
  ["/localization/rus/", { loader: () => import(/* webpackChunkName: "localization_rus_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/rus/index.html.js"), meta: {"title":"软件索引"} }],
  ["/localization/spa/", { loader: () => import(/* webpackChunkName: "localization_spa_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/spa/index.html.js"), meta: {"title":"软件索引"} }],
  ["/localization/chs/tutorial/tut.html", { loader: () => import(/* webpackChunkName: "localization_chs_tutorial_tut.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/chs/tutorial/tut.html.js"), meta: {"title":"教程"} }],
  ["/localization/tur/", { loader: () => import(/* webpackChunkName: "localization_tur_index.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/tur/index.html.js"), meta: {"title":"使用本软件"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
