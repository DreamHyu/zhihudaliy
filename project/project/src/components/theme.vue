<template>
    <div>
        <div class="top">
            <button class="back" @click='back()'></button>
            <h2>{{name}}</h2>
            <div class="circle">
                <i>+</i>
            </div>
        </div>
        <div class="show-pic">
            <img :src="image">
            <h1>{{description}}</h1>
            <i>{{image_source}}</i>
        </div>
        <div class="mycontents">
            <h1 class="dateTitle">00</h1>
            <ul class="news-list">
                <li v-for="item in stories">
                    <div v-bind:class="{'no-pic':!item.images}">
                        <router-link :to="{ name: 'detail', params: { id: item.id}}">
                            <h2>{{item.title}}</h2>
                            <img :src="item.images">            
                        </router-link>
                    </div>                
                </li>
            </ul>
        </div>   
    </div>
</template>

<script type="text/javascript">
import router from '../router/index.js'
export default {
    data: function () {
        return {
            id: '',
            image: '',
            description: '',
            name: '',
            image_source: '',
            stories: [{
                id: '',
                title: '',
                images: '',
                ifImage: false
            }]
        }
    },
    created: function () {
        this.id = this.$route.path.slice(8)
        let self = this
        this.$http.get('api/theme/' + this.id)
        .then(function (res) {
            self.image = self.changeImageUrl(res.data.image)
            self.description = res.data.description
            self.name = res.data.name
            let i = res.data.stories.length
            for (let a = 0; a < i; a++) {
                if (res.data.stories[a].images instanceof Array) {
                    res.data.stories[a].images = self.changeImageUrl(res.data.stories[a].images)
                } else {
                    res.data.stories[a].images = false
                }
            }
            self.stories = res.data.stories
        })
    },
    methods: {
        changeImageUrl: function (srcUrl) {
            if (srcUrl !== undefined) {
                srcUrl = srcUrl + ''
                return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
        },
        back: function () {    // 返回主界面
            router.push('/home')
        }
    }
}
</script>

<style type="text/css" scoped>
    .top{
        padding-top: 1rem;
        padding-bottom: 0.9rem;
        width: 20rem;
        height: 1.1rem;
        background-color: #00a2ed;
    }
    .back{
        float: left;
        margin-left: 1rem;
        background-image: url(../../static/img/siderbtn.gif);
        background-size: 1.1rem 0.8rem;
        width: 1.1rem;
        height: 0.8rem;
    }
    .top h2 {
        float: left;
        color: #fff;
        font-family: "Microsoft Yahei", Arial;
        line-height: 0.9rem;
        margin-left: 1rem;
    }
    .circle {
        position: relative;
        float: right;
        width: 1.3rem;
        height: 1.3rem;
        -webkit-border-radius: 0.65rem;
        background-color: #fff;
        margin-right: 0.8rem;
    }
    .circle i{
        position: absolute;
        top:-0.3rem;
        color: #00a2ed;
        font-size: 1.8rem;
    }
    .show-pic{
        position: relative;
        width: 20rem;
        height: 10.5rem;
    }
    .show-pic img{
        width: 20rem;
        height: 10.5rem;
    }
    .show-pic h1{
        font-weight: normal;
        position: absolute;
        top:6.5rem;
        left:0.8rem;
        width: 16.9rem;
        font-family: "Microsoft Yahei",Arial;
        font-size: 1rem;
        color: #fff;
        line-height: 1.3rem;
    }
    .show-pic i{
        position: absolute;
        top:9.2rem;
        right: 0.9rem;
        font-family: "Microsoft Yahei",Arial;
        font-size: 0.6rem;
        color:#b2b2af;
    }
        .mycontents{
        background-color: #f3f3f3;
        width: 20rem;
    }
    h1{
        margin: 0;
        font-weight: normal;
        line-height: 2.5rem;
        padding-left: 0.9rem;
        color: #a5a5a5;
        font-family: "Microsoft Yahei",Arial;
        font-size: 0.7rem;
    }
    .mycontents ul{
        padding-left: 0;
    }
    ul li div{
        width: 19.1rem;
        height: 5.2rem;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 0.2rem;
        margin-top: 0.1rem;
        margin-bottom: 0.2rem;
        border-bottom: 0.05rem solid #c9c9c9;
    }
    ul li div img{
        width: 4.5rem;
        height: 3.8rem;
        float: right;
        margin-top: 0.7rem;
        margin-right: 0.9rem;
    }
    ul li div h2 {
        font-weight: normal;
        margin-top: 0.7rem;
        line-height: 1.1rem;
        color: #000;
        font-family: "Microsoft Yahei",Arial;
        font-size: 1rem;
        float: left;
        width: 12rem;
        padding-left: 0.9rem;
    }
    .no-pic {
        width: 19.1rem;
        height: 3.9rem;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 0.2rem;
        margin-top: 0.1rem;
        margin-bottom: 0.2rem;
        border-bottom: 0.05rem solid #c9c9c9;
    }
    .no-pic img{
        width: 0rem;
        height: 0rem;
    }
    .no-pic h2 {
        font-weight: normal;
        margin-top: 0.7rem;
        line-height: 1.1rem;
        color: #000;
        font-family: "Microsoft Yahei",Arial;
        font-size: 1rem;
        float: left;
        width: 17rem;
        padding-left: 0.9rem;
    }
</style>
