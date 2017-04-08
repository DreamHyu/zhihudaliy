<template>
    <div>	
        <router-link to="/home"></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import navtop from '../../components/navtop.vue'
import hello from './hello'
import showPic from '../../components/showPic.vue'
import contents from '../../components/contents.vue'
export default {
    components: {
        hello,
        navtop,
        showPic,
        contents
    }
}
</script>

<style>
</style>

