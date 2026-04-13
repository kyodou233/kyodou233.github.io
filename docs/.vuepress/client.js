import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

import './theme/styles/custom.css'

import MyProfile from './theme/components/MyProfile.vue'
import MyType from './theme/components/MyType.vue'
import MyHomeBg from './theme/components/MyHomeBg.vue'
import SiteInfo from './theme/components/SiteInfo.vue'
import BlogCounting from './theme/components/BlogCounting.vue'
import Typed from 'typed.js';

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)
    app.component('MyProfile', MyProfile)
    app.component('MyType', MyType)
    app.component('SiteInfo', SiteInfo)
    app.component('MyHomeBg', MyHomeBg)
    app.component('BlogCounting', BlogCounting)
    app.directive('typed', Typed)
  },
})
