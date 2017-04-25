<template>
	<div class="showpic">
        <router-link :to="{ name: 'detail', params: { id: picId}}"><div class="showpicRouter">
            <img :src='dizhi'>
    		<h1>{{picTitle}}</h1>
    		<div class="circle">
    			<ul>
    				<li :class="{'circlechange':lichange[0]}"></li>
    				<li :class="{'circlechange':lichange[1]}"></li>
    				<li :class="{'circlechange':lichange[2]}"></li>
    				<li :class="{'circlechange':lichange[3]}"></li>
    				<li :class="{'circlechange':lichange[4]}"></li>
    				<div class="cleanfix"></div>
    			</ul>
    		</div>
	    </div></router-link>
    </div>
</template>

<script type="text/javascript">
export default{
    data: function () {
        return {
            dizhi: '',
            lichange: [false, false, false, false, false],
            i: 0,
            topStories: [{
                id: '',
                image: '',
                title: ''
            }],
            picTitle: '',
            picId: ''
        }
    },
    created: function () {
        this.topStories
        let self = this
        self.$http.get('api/news/latest')
        .then(function (res) {
            for (let a = 0; a < 5; a++) {
                res.data.top_stories[a].image = self.changeImageUrl(res.data.top_stories[a].image)
            }
            self.topStories = res.data.top_stories
            self.lichange[0] = true
            self.picTitle = self.topStories[0].title
            self.dizhi = self.topStories[0].image
            self.picId = self.topStories[0].id
            setInterval(self.topStoriesSort, 5000)
        })
    },
    methods: {
        topStoriesSort: function () {    // 轮播图
            this.lichange
            this.dizhi
            this.topStories
            this.picId
            for (let a = 0; a < 5; a++) {
                this.lichange[a] = false
            }
            this.i++
            if (this.i >= 5) {
                this.i = 0
                this.dizhi = this.topStories[this.i].image
                this.picId = this.topStories[this.i].id
                this.picTitle = this.topStories[this.i].title
                this.lichange[0] = true
            } else {
                this.dizhi = this.topStories[this.i].image
                this.picId = this.topStories[this.i].id
                this.picTitle = this.topStories[this.i].title
                this.lichange[this.i] = true
            }
        },
        changeImageUrl: function (srcUrl) {    // 改变图片链接
            if (srcUrl !== undefined) {
                srcUrl = srcUrl + ''
                return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
        }
    }
}
</script>

<style type="text/css" scoped>
    .showpicRouter{
        width: 20rem;
        height: 11.9rem;
    }
	.circlechange{
		background-color: #fff;
	}
	.showpic{
        margin-top: 3rem;
		position: relative;
		width: 20rem;
		height: 11.9rem;
		background-color: #fff;
	}
	.showpic img{
		position: absolute;
		left:0;
		width: 20rem;
		height: 11.9rem;
	}
	.showpic h1{
        font-weight: normal;
		width: 17.2rem;
		position: absolute;
		margin-top: 7.7rem;
		margin-left: 0.9rem;
		line-height: 1.5rem;
		font-size: 1.2rem;
		color: #fff;
		font-family: "Microsoft Yahei",Arial;
	}
	.circle{
		width: 20rem;
		text-align: center;	
	}
	.showpic ul{
		position: absolute;
		bottom: 0.5rem;
		left:50%;
		margin-left: -2.5rem;
		width: 2.5rem;
	}
	ul li{
		margin-right: 0.1rem;
		float: left;
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 0.3rem;
		background-color: #333;
	}
</style>
