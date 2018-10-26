<template>
 <div id="app">
    <top-bar :system-name="systemName"></top-bar>
    <side-bar :links="menu"></side-bar>
    <section id="main" class="main" :class="{'hide-sidebar': !sidebar.opened}">
        <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
    <back-top
        :height="200"
        :bottom="75"></back-top>
  </div>
</template>

<script>

import SideBar from 'library/components/SideBar.vue'
import TopBar from 'library/components/TopBar.vue'
import BackTop from 'library/components/BackTop.vue'
import menu from './common/config/menu'

export default {
    name: 'App',
    components: {
        TopBar,
        BackTop,
        SideBar
    },
    data() {
        return {
            menu,
            systemName: 'xx系统'
        }
    },
    computed: {
        cachedViews() {
            return this.$store.state.cachedViews || []
        },
        sidebar() {
            return this.$store.state.sidebar || {}
        }
    },
    created() {
        //
    }
}
</script>

<style lang="scss">
    @import './assets/scss/main.scss';
</style>
