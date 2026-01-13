import comp from "D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/localization/tutorial/tut.html.vue"
const data = JSON.parse("{\"path\":\"/localization/tutorial/tut.html\",\"title\":\"教程\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"教程\"},\"git\":{},\"filePathRelative\":\"localization/tutorial/tut.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
