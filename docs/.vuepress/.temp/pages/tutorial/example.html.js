import comp from "D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/docs/.vuepress/.temp/pages/tutorial/example.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/example.html\",\"title\":\"Example\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Example\"},\"git\":{},\"filePathRelative\":\"tutorial/example.md\"}")
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
