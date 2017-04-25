<template>
	<div>    
	    <div class="navtop" v-bind:class="{'box':isOut}">
	        <button class="siderbtn" v-on:click="side(isIn, isOut)"></button>
	        <h1>{{this.$store.state.topTitle}}</h1>
	        <button class="morebtn" v-on:click="more(isShow)"></button>
	        <div class="more" v-show="isShow" v-on:click="backmore(isShow)">
	            <h3>夜间模式</h3>
	            <h3>设置选项</h3>
	        </div>
	        <router-link to='/login'><button class="bellbtn"></button></router-link>
	    </div>
	    <div v-bind:class = "{'leftSider':isIn,'outleftSider':isOut}">
            <div class="sidetop">
            	<div class="sidetopFix">
	                <div class="login"> 
	                    <img src="../../static/img/sidepic.jpg">
	                    <router-link to='/login'><h1>请登录</h1></router-link>
	                </div>
	                <div class="collect">
	                    <img src="../../static/img/collect.gif">
	                    <h1>我的收藏</h1>
	                    <img src="../../static/img/download.gif">
	                    <h1>离线下载</h1>
	                </div>
	                <div class="back">
	                    <button class="backbtn" v-on:click="back(isIn, isOut)"></button>
	                    <h2 v-on:click="back(isIn, isOut)">首页</h2>
	                </div>
                </div>
                <div class="moudlelist">
                    <li v-for='item in themesDetail'>
	                    <router-link :to="{name: 'theme', params: {theme: item.id}}">
	                        <div class="one-theme">	
	                        	<h2>{{item.name}}</h2>
	                        	<h2 class="biaoji">+</h2>
	                        </div>
                    	</router-link>
                    </li>
                </div>
            </div>
        </div>
        <div v-bind:class="{'zhezhao': isZhezhao}" v-on:click="back(isIn, isOut)"></div>
	</div>    
</template>

<script type="text/javascript">
export default{
    data: function () {
        return {
            isIn: true,
            isOut: false,
            isShow: false,
            isZhezhao: false,
            themesDetail: [{
                id: '',
                name: ''
            }]
        }
    },
    methods: {
        side: function (isOut, isIn) {    /* 控制侧边栏 */
            this.isIn = true
            this.isOut = true
            this.isZhezhao = true
        },
        back: function (isOut, isIn) {    /* 侧边栏返回首页 */
            this.isIn = true
            this.isOut = false
            this.isZhezhao = false
        },
        more: function (isShow) {    /* 跳到登陆界面 */
            this.isShow = !this.isShow
        },
        backmore: function (isShow) {    /* 更多 */
            this.isShow = !this.isShow
        }
    },
    created: function () {
        this.themesDetail
        let self = this
        this.$http.get('api/themes')
        .then(function (res) {
            self.themesDetail = res.data.others
        })
    }
}
</script>

<style type="text/css" scoped>
	.zhezhao {
        position: fixed;    /* 使用fixed布局，不使用abusolute才能覆盖完全*/
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        z-index: 7;
        background-color: black;
        opacity:0.5;
    }
	.sidetopFix {
	    position: fixed;
	    top: 0;
	    background-color: #00a2ed;
	}
    template {
        position: relative;
    }
    .navtop .more h3 {
        font-family: "Microsoft Yahei";
        color: #000;
        line-height: 2.5rem;
        margin: 0;
        font-size:1rem;
        font-weight: normal;
        margin-left: 0.9rem;
    }
    .more {
        position: absolute;
        right:0.2rem;
        top:0.2rem;
        width: 11rem;
        height: 5rem;
        z-index: 10;
        background-color: #fff;
    }
    .moudlelist .biaoji {
        float: right;
        margin-right: 3rem;
        color:#eeeeee;
        font-size: 1.6rem;
    }
    .moudlelist h2 {
        font-weight: normal;
        margin-top: 1rem;
        margin-left: 0.8rem;
        float: left;
        line-height: 0.6rem;
        font-size: 1rem;
        color: #000;
        font-family: "Microsoft Yahei";
    }
    .moudlelist li {
        height: 2.6rem;
    }
    .one-theme {
    	height: 2.6rem;
    }
    .moudlelist {
    	padding-top: 8.5rem;
        width: 16.9rem;
        background-color: #fff;
    }
    .back h2 {
        font-weight: normal;
        font-family: "Microsoft Yahei",Arial;
        float: left;
        line-height: 1rem;
        margin-top: 0.9rem;
        margin-left: 0.9rem;
        color: #00a2ed;
        padding: 0;
        font-size: 0.9rem;
    }
    .back button {
        float: left;
        background-image: url('../../static/img/back.gif') ;
        width: 1.1rem;
        height: 1rem;
        margin-top: 0.9rem;
        margin-left: 1.2rem;
    }
    .back {
        width: 16.9rem;
        height: 2.6rem;
        background-color: #f0f0f0;
    }
    .collect h1 {
    	font-weight: normal;
    	font-family: "Microsoft yahei",arial;
        float: left;
        color:#fff;
        margin-left: 1.4rem;
        margin-right: 1.4rem;
        padding: 0;
        margin-top: 0;
        line-height: 0.6rem; 
    }
    .collect img {
        float: left;
        margin-left: 1.4rem;
    }
    .collect {
        width: 16.9rem;
        height: 0.7rem;
        margin-top: 1.8rem;
        margin-bottom: 1rem;
    }
    .login h1 {
        margin-left: 2.6rem;
        margin-top: 0;
        padding-top: 1rem;
        color:#fff;
    }
    .login img {
        float: left;
        margin-top: 0.5rem;
        height: 1.9rem;
        width: 1.9rem;
    }
    .login {
        height: 2.4rem;
        margin-left: 0.9rem;
        width: 16rem;
    }
    .sidetop {
        width: 16.9rem;
        height: 35rem;
        background-color: #00a2ed;
    }
    .navtop {
        position: fixed;
        z-index: 6;
        top:0;
        width: 20rem;
        height: 3rem;
        background-color: #00a2ed;
    }
    .siderbtn {
        background-image: url('../../static/img/siderbtn.gif') ;
        background-size: 1rem 0.7rem;
        width: 1rem;
        height: 0.65rem;
        float: left;
        margin-top: 1.1rem;
        margin-left: 1.05rem;
    }
    .leftSider {
        position: absolute;
        top:0;
        left:-16.9rem;
        width: 16.9rem;
        background-color: grey;
        z-index: 100;
        transition: left 1s;
        -moz-transition: left 1s; /* Firefox 4 */
        -webkit-transition: left 1s; /* Safari and Chrome */
        -o-transition: left 1s; /* Opera */
    }
    .outleftSider {
        left:0;
    }
    .navtop h1 {
        font-weight: normal;
        float: left;
        margin-top: 0.9rem;
        margin-left: 2rem;
        font-family: "Microsoft Yahei",Arial;
        color: #fff;
        font-size: 0.8rem;
        line-height: 1rem;
        text-align: center;
    }
    .bellbtn {
        background-image: url('../../static/img/bell.gif');
        background-size: 1rem 1rem;
        width: 1rem;
        height: 1rem;
        margin-top: 1rem;
        margin-right: 2rem;
        float: right;
    }   
    .morebtn {
        background-image: url('../../static/img/more.gif') ;
        background-size: 0.3rem 1rem;
        width: 0.25rem;
        height: 0.9rem;
        margin-top: 1rem;
        margin-right: 1.1rem;
        float: right;
    }
</style>
