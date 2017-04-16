<template>
    <div>
        <div class="top">
            <button class="back" @click='back()'></button>
            <div class="topright">
                <button class="share"></button>
                <button class="collect"></button>
                <button class="discuss"></button>
                <span>4</span>
                <button class="approve"></button>
                <span>88</span>
            </div>
        </div>
        <div class="show-pic">
            <img src="https://pic3.zhimg.com/v2-b6010e8f6b6654349c4c52c2e579a426.jpg">
            <p>呃……周星驰电影的某些桥段是不是有点「低俗」？</p>
            <i>《功夫》</i>
        </div>
    </div>
</template>

<script type="text/javascript">
import router from '../router/index.js'
export default{
    methods: {
        back: function () {
            router.push('home')
        }
    },
    created: function () {
        this.$http.get('api/news/9358710')
        .then(function (res) {
            console.log(res.data)
        })
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
        margin-left: 1.1rem;
        background-image: url(../../static/img/loginback.gif);
        background-size: 0.9rem 0.9rem;
        width: 0.9rem;
        height: 1rem;
    }
    .topright{
        float: right;
        width: 12.1rem;
    }
    .topright span{
        float: left;
        padding-left: 0.4rem;
        width: 1.3rem;
        line-height: 1.1rem;
        font-family: "Microsoft Yahei",Arial;
        color:#fff;
    }
    .share{
        background-image: url('../../static/img/share.png');
        background-size: 1rem 1.1rem;
        width: 1rem;
        height: 1.1rem;
        float: left;
        margin-right: 2rem;
    }
    .collect{
        background-image: url('../../static/img/collet.png');
        background-size: 1.1rem 1.1rem;
        width: 1.1rem;
        height: 1.1rem;
        float: left;
        margin-right: 1.7rem;
    }
    .discuss{
        background-image: url('../../static/img/dicuss.png');
        background-size: 1.1rem 1.1rem;
        width: 1.1rem;
        height: 1.1rem;
        float: left;
    }
    .approve{
        background-image: url('../../static/img/approve.png');
        background-size: 1.25rem 1.1rem;
        width: 1.25rem;
        height: 1.1rem;
        float: left;
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
    .show-pic p{
        position: absolute;
        top:6.5rem;
        left:0.8rem;
        font-family: "Microsoft Yahei",Arial;
        font-size: 1.2rem;
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
</style>
