<template>
    <div>	
        <navtop></navtop>
        <showPic></showPic>
        <contents></contents>
    </div>
</template>

<script>
import navtop from './navtop.vue'
import hello from '../pages/index/hello'
import showPic from './showPic.vue'
import contents from './contents.vue'
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
