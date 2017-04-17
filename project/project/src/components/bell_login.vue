<template>
	<div class="loginpage">
		<div class="loginback">
			<button @click="back"></button>
			<h2>登陆</h2>
		</div>
		<div class="loginshow">
			<div class="line"></div>
			<div class="logo"></div>
			<h1>使用微博登陆</h1>
			<div class="weibologin">
				<button class="xinlang">新浪微博</button>
				<button class="tenxun">腾讯微博</button>
			</div>
		</div>
	</div>	
</template>

<script type="text/javascript">
import router from '../router'
export default{
    methods: {
        back: function () {
            router.push('/home')
        }
    },
    created: function () {
        this.$http.get('api/news/9356369')
        .then(function (res) {
            console.log(res.data)
        })
    }
}
</script>

<style type="text/css" scoped>
	.weibologin button{
		font-size: 1rem;
		font-family: "Microsoft Yahei",Arial;
		width: 14.6rem;
		height: 2.6rem;
		margin-top: 1.3rem;
		border-radius: 0.3rem;
		background-color: #fff;
	}
	.weibologin{
		width: 14.6rem;
		height: 7.9rem;
		margin: 0 auto;
	}
	.loginshow h1{
		font-weight: normal;
		color: #def9ff;
		width: 6rem;
		height: 1rem;
		margin: 0 auto;
		margin-top: 4.5rem;
		font-size: 1rem;
	}
	.logo{
		width: 6.8rem;
		height: 2.1rem;
		background-image: url('../../static/img/logo1.png');
		background-size: 6.8rem 2.1rem;
		margin:0 auto;
		margin-top: 6.1rem;
	}
	.line{
		border-top: 1px solid black;
	}
	.loginshow{
		background-size: 20rem 29.5rem;
		width: 20rem;
		height: 29.6rem;
		text-align: center;
		background-color: #1484dc;
	}
	.loginpage{
		position: absolute;
		top:0;
		z-index: 10;
		width: 20rem;
		height: 32.5rem;
		background-color: yellow;
	}
	.loginback{
		width: 20rem;
		height: 1.9rem;
		background-color: #00a2ed;
		padding-top: 1rem;
	}
	.loginback button{
		background-image: url('../../static/img/loginback.gif');
		width: 0.9rem;
		height: 0.9rem;
		float: left;
		margin-left: 1.1rem;
	}
	.loginback h2{
		font-weight: normal;
		float: left;
		line-height: 0.9rem;
		margin-left: 2rem;
		color: #fff;
		padding: 0;
	}
</style>
