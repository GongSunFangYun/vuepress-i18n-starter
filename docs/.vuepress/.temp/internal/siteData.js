export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"meta\",{\"charset\":\"UTF-8\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Documentation\",\"description\":\"Multi-language documentation\"},\"/localization/chs/\":{\"lang\":\"zh-CN\",\"title\":\"文档中心\",\"description\":\"多语言文档中心\"},\"/localization/cht/\":{\"lang\":\"zh-TW\",\"title\":\"文件中心\",\"description\":\"多語言文件中心\"},\"/localization/jap/\":{\"lang\":\"ja-JP\",\"title\":\"ドキュメント\",\"description\":\"多言語ドキュメント\"},\"/localization/kor/\":{\"lang\":\"ko-KR\",\"title\":\"문서\",\"description\":\"다국어 문서\"},\"/localization/rus/\":{\"lang\":\"ru-RU\",\"title\":\"Документация\",\"description\":\"Многоязычная документация\"},\"/localization/spa/\":{\"lang\":\"es-ES\",\"title\":\"Documentación\",\"description\":\"Documentación multilingüe\"},\"/localization/por/\":{\"lang\":\"pt-BR\",\"title\":\"Documentação\",\"description\":\"Documentação multilíngue\"},\"/localization/ger/\":{\"lang\":\"de-DE\",\"title\":\"Dokumentation\",\"description\":\"Mehrsprachige Dokumentation\"},\"/localization/fra/\":{\"lang\":\"fr-FR\",\"title\":\"Documentation\",\"description\":\"Documentation multilingue\"},\"/localization/pol/\":{\"lang\":\"pl-PL\",\"title\":\"Dokumentacja\",\"description\":\"Wielojęzyczna dokumentacja\"},\"/localization/tur/\":{\"lang\":\"tr-TR\",\"title\":\"Dokümantasyon\",\"description\":\"Çok dilli dokümantasyon\"},\"/localization/ita/\":{\"lang\":\"it-IT\",\"title\":\"Documentazione\",\"description\":\"Documentazione multilingue\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
