<template>
	<div class="mycontents">
		<p>今日热闻</p>
		<ul>
			<li v-for="item in items">
				<router-link to='/detail'>
                    <p>{{item.title}}</p>
                    <img :src="item.images">            
                </router-link>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
    data: function () {
        return {
            items: [{p: '', images: ''}]
        }
    },
    methods: {
        changeImageUrl: function (srcUrl) {
            if (srcUrl !== undefined) {
                srcUrl = srcUrl + ''
                return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
        }
    },
    created: function () {
        this.items
        let self = this
        this.$http.get('api/news/latest')
        .then(function (res) {
            for (let i = 0; i < res.data.stories.length; i++) {
                res.data.stories[i].images = self.changeImageUrl(res.data.stories[i].images)
            }
            self.items = res.data.stories
        })
    }
}
</script>

<style type="text/css" scoped>
	.mycontents{
		background-color: #f3f3f3;
		width: 20rem;
	}
	p{
		line-height: 2.5rem;
		padding-left: 0.9rem;
		color: #a5a5a5;
		font-family: "Microsoft Yahei",Arial;
		font-size: 0.7rem;
	}
	ul li{
		width: 19.1rem;
		height: 5.2rem;
		background-color: #fff;
		margin: 0 auto;
		border-radius: 0.2rem;
		margin-top: 0.1rem;
		margin-bottom: 0.2rem;
		border-bottom: 0.05rem solid #c9c9c9;
	}
	ul li img{
		width: 4.5rem;
		height: 3.8rem;
		float: right;
		margin-top: 0.7rem;
		margin-right: 0.9rem;
	}
	ul li p {
		margin-top: 0.7rem;
		line-height: 1.1rem;
		color: #000;
		font-family: "Microsoft Yahei",Arial;
		font-size: 1rem;
		float: left;
		width: 12rem;
		padding-left: 0.9rem;
	}
</style>
