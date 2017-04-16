<template>
	<div class="navtop" v-bind:class="{'box':isB}">
		<button class="siderbtn" v-on:click="side(isA, isB)"></button>
		<div v-bind:class = "{'leftSider':isA,'outleftSider':isB}">
			<div class="sidetop">
				<div class="login">	
					<img src="../../static/img/sidepic.jpg">
					<p>请登录</p>
				</div>
				<div class="collect">
					<img src="../../static/img/collect.gif">
					<p>我的收藏</p>
					<img src="../../static/img/download.gif">
					<p>离线下载</p>
				</div>
				<div class="back">
					<button class="backbtn" v-on:click="back(isA, isB)"></button>
					<p v-on:click="back(isA, isB)">首页</p>
				</div>
				<div class="moudlelist">
					<li>
						<h2>日常心理学</h2>
						<h2 class="biaoji">+</h2>
					</li>
				</div>
			</div>
		</div>
		<p>{{point}}</p>
		<button class="morebtn" v-on:click="more(isShow)"></button>
		<div class="more" v-show="isShow" v-on:click="backmore(isShow)">
			<h3>夜间模式</h3>
			<h3>设置选项</h3>
		</div>
		<router-link to='/login'><button class="bellbtn"></button></router-link>
	</div>
</template>

<script type="text/javascript">
export default{
    data: function () {
        return {
            point: '首页',
            isA: true,
            isB: false,
            isShow: false
        }
    },
    methods: {
        side: function (isB, isA) {
            this.isA = true
            this.isB = true
        },
        back: function (isB, isA) {
            this.isA = true
            this.isB = false
        },
        more: function (isShow) {
            this.isShow = !this.isShow
        },
        backmore: function (isShow) {
            this.isShow = !this.isShow
        }
    }
}
</script>

<style type="text/css" scoped>
	.navtop .more h3{
		font-family: "Microsoft Yahei";
		color: #000;
		line-height: 2.5rem;
		margin: 0;
		font-size:1rem;
		font-weight: normal;
		margin-left: 0.9rem;
	}
	.more{
		position: absolute;
		right:0.2rem;
		top:0.2rem;
		width: 11rem;
		height: 5rem;
		z-index: 10;
		background-color: #fff;
	}
	.navtop .moudlelist .biaoji{
		float: right;
		margin-right: 3rem;
		color:#eeeeee;
		font-size: 1.6rem;
	}
	.navtop .moudlelist h2{
		font-weight: normal;
		margin-top: 1rem;
		margin-left: 0.8rem;
		float: left;
		line-height: 0.6rem;
		font-size: 1rem;
		color: #000;
		font-family: "Microsoft Yahei";
	}
	.navtop .moudlelist li{
		height: 2.8px;
	}
	.navtop .moudlelist{
		width: 16.9rem;
		height: 24.1rem;
		background-color: #fff;
	}
	.navtop .back p{
		float: left;
		line-height: 1rem;
		margin-top: 0.9rem;
		margin-left: 0.9rem;
		color: #00a2ed;
		padding: 0;
		font-size: 0.9rem;
	}
	.navtop .back button{
		float: left;
		background-image: url('../../static/img/back.gif') ;
		width: 1.1rem;
		height: 1rem;
		margin-top: 0.9rem;
		margin-left: 1.2rem;
	}
	.navtop .back{
		width: 16.9rem;
		height: 2.6rem;
		background-color: #f0f0f0;
	}
	.navtop .collect p{
		float: left;
		margin-left: 1.4rem;
		margin-right: 1.4rem;
		padding: 0;
		margin-top: 0;
		line-height: 0.7rem; 
	}
	.navtop .collect img{
		float: left;
		margin-left: 1.4rem;
	}
	.collect{
		width: 16.9rem;
		height: 0.7rem;
		margin-top: 1.8rem;
		margin-bottom: 1rem;
	}
	.navtop .login p{
		margin-left: 0.7rem;
	}
	.login img{
		float: left;
		margin-top: 0.5rem;
		height: 1.9rem;
		width: 1.9rem;
	}
	.login{
		height: 2.4rem;
		margin-left: 0.9rem;
		width: 16rem;
	}
	.sidetop{
		width: 16.9rem;
		height: 5.9rem;
		background-color: #00a2ed;
	}
	.navtop {
		position: relative;
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
		height: 32.5rem;
		background-color: grey;
		z-index: 3;
		transition: left 1s;
        -moz-transition: left 1s; /* Firefox 4 */
        -webkit-transition: left 1s; /* Safari and Chrome */
        -o-transition: left 1s; /* Opera */
	}
	.outleftSider {
		left:0;
	}
	.navtop p{
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
