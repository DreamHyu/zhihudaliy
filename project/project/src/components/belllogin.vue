<template>
	<div class="loginpage">
		<div class="loginback">
			<router-link to="/home"><button></button></router-link>
			<p>登陆</p>
		</div>
		<div class="loginshow">
			<div class="logo"></div>
		</div>
	</div>	
</template>

<script type="text/javascript">
	
</script>

<style type="text/css" scoped="">
	.loginshow{
		background-image: url('../../static/img/logo.png');
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
	.loginback p{
		float: left;
		line-height: 0.9rem;
		margin-left: 2rem;
		color: #fff;
		padding: 0;
	}
</style>
