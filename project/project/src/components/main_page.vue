<template>
    <div>	
        <navTop></navTop>
        <showPic></showPic>
        <myContents></myContents>
    </div>
</template>

<script>
import navTop from './nav_top.vue'
import showPic from './show_pic.vue'
import myContents from './my_contents.vue'
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
