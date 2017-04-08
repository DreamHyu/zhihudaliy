<template>
	<div class="showpic">
		<img :src='dizhi'>
		<p></p>
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
	</div>
</template>

<script type="text/javascript">
export default{
    data: function () {
        return {
            imgofsrc: ['../../static/img/img1.png',
                '../../static/img/img2.png',
                '../../static/img/img3.png',
                '../../static/img/img4.png',
                '../../static/img/img5.png'],
            dizhi: '../../static/img/img1.png',
            lichange: [false, false, false, false, false],
            i: 0
        }
    },
    created: function () {
        this.lichange[0] = true
        this.dizhi = this.imgofsrc[0]
        let self = this
        setInterval(function () {
            for (let a = 0; a < 5; a++) {
                self.lichange[a] = false
            }
            self.i++
            if (self.i >= 5) {
                self.i = 0
                self.dizhi = self.imgofsrc[0]
                self.lichange[0] = true
            } else {
                self.dizhi = self.imgofsrc[self.i]
                self.lichange[self.i] = true
            }
        }, 10000)
    }
}
</script>

<style type="text/css" scoped>
	.circlechange{
		background-color: red;
	}
	.showpic{
		position: relative;
		width: 20rem;
		height: 11.9rem;
		background-color: red;
	}
	.showpic img{
		position: absolute;
		left:0;
		width: 20rem;
		height: 11.9rem;
	}
	.showpic p{
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
		margin-left: -1.25rem;
		width: 50rem;
	}
	ul li{
		margin-right: 0.1rem;
		float: left;
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 0.3rem;
		background-color: blue;
	}
</style>
