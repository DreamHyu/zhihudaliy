<template>
    <div>	
        <router-link to="/home"></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import navTop from '../../components/nav_top.vue'
import showPic from '../../components/show_pic.vue'
import myContents from '../../components/my_contents.vue'
export default {
    components: {
        navTop,
        showPic,
        myContents
    }
}
</script>

<style>
</style>

