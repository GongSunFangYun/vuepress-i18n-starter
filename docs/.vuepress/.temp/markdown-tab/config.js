import { CodeTabs } from "D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/JetbrainsProject/WebstormProjects/docs.sailforgestudio.com/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
