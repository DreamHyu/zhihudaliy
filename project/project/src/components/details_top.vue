<template>
    <div>
        <div class="top">
            <button class="back" @click='back()'></button>
            <div class="topright">
                <button class="share"  @click='isShow()'></button>
                <button class="collect"></button>
                <button class="discuss"></button>
                <span>{{extraDetail.short_comments}}</span>
                <button class="approve" @click='changePopularity'></button>
                <span>{{extraDetail.popularity}}</span>
            </div>
        </div>
        <div class="show-pic">
            <img :src="detailContent.image">
            <h1>{{detailContent.title}}</h1>
            <i>{{detailContent.image_source}}</i>
        </div>
        <div class="share-with" v-show='isShowWith'>
            <h1>分享</h1>
            <ul>
                <li>
                    <img src="../../static/img/weibo.png">
                    <h2>新浪微博</h2>
                </li>
                <li>
                    <img src="../../static/img/weixin.png">
                    <h2>微信</h2>
                </li>
                <li>
                    <img src="../../static/img/pengyouquan.png">
                    <h2>微信朋友圈</h2>
                </li>
                <li>
                    <img src="../../static/img/yinxiang.png">
                    <h2>印象笔记</h2>
                </li>
                <li>
                    <img src="../../static/img/youdao.png">
                    <h2>有道云笔记</h2>
                </li>
                <li>
                    <img src="../../static/img/qq.png">
                    <h2>QQ</h2>
                </li>
                <li>
                    <img src="../../static/img/more.png">
                    <h2>更多平台</h2>
                </li>
            </ul>
        </div>
        <div v-bind:class="{'zhezhao': isZhezhao}" @click='isShow()'></div>
    </div>
</template>

<script type="text/javascript">
import router from '../router/index.js'
export default{
    data: function () {
        return {
            detailId: '',
            detailContent: {body: '', image: '', title: '', image_source: ''},
            isShowWith: false,
            isCollect: false,
            isZhezhao: false,
            isDianzhan: false,
            extraDetail: {'long_comments': '', 'popularity': '', 'short_comments': '', 'comments': ''}
        }
    },
    methods: {
        back: function () {    // 返回主界面
            router.push('/home')
        },
        changeImageUrl: function (srcUrl) {
            if (srcUrl !== undefined) {
                srcUrl = srcUrl + ''
                return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
        },
        isShow: function () {    // 分享栏的显示
            this.isShowWith = !this.isShowWith
            this.isZhezhao = !this.isZhezhao
        },
        Collect: function () {    // 收藏与否，样式改变
            this.isCollect = !this.isCollect
        },
        changePopularity: function () {    // 点赞
            if (!this.isDianzhan) {
                this.extraDetail.popularity++
            } else {
                this.extraDetail.popularity--
            }
            this.isDianzhan = !this.isDianzhan
        }
    },
    created: function () {
        this.detailContent
        this.extraDetail
        this.detailId = this.$route.path.slice(8)
        let self = this
        self.$http.get('api/news/' + self.detailId)
        .then(function (res) {
            res.data.image = self.changeImageUrl(res.data.image)
            self.detailContent = res.data
        })
        self.$http.get('api/story-extra/' + self.detailId)
        .then(function (extraRes) {
            self.extraDetail = extraRes.data
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
    .show-pic h1{
        font-weight: normal;
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
    .share-with{
        position: absolute;
        z-index: 100;
        width: 17.3rem;
        height: 19rem;
        background-color: #fff;
        top:50%;
        left: 50%;
        margin-left: -8.65rem;
        margin-top: -9.5rem;
    }
    .share-with h1{
        font-weight: normal;
        font-family: "Microsoft Yahei", Arial;
        margin-top: 1.2rem;
        margin-left: 1.5rem;
        line-height: 1.1rem;
    }
    .share-with ul{
        padding-left:0.8rem;
    }
    .share-with ul li {
        margin:0 0.95rem;
        float: left;
        margin-bottom: 1.1rem;
    }
    .share-with ul li img{
        padding-left: 0.15rem;
        padding-right: 0.15rem;
        width: 3.1rem;
        height: 2.9rem;
        margin: 0 auto；
    }
    .share-with ul li h2{
        width: 3.4rem;
        font-size: 0.65rem;
        text-align: center;
        font-weight: normal;
        margin-top: 0.4rem;
        font-family: "Microsoft Yahei", Arial;
        color:#8f8f8f;
    }
    .zhezhao {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        z-index: 7;
        background-color: black;
        opacity:0.5;
    }
</style>
