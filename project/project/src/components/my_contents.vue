<template>
    <div class="mycontents">
        <div v-for='obj in objs'>
            <h1>{{obj.date}}</h1>
            <ul>
                <li v-for="item in obj.items">
                    <router-link :to="{ name: 'detail', params: { id: item.id}}">
                        <h2>{{item.title}}</h2>
                        <img :src="item.images">            
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data: function () {
        return {
            objs: [{date: '', items: [{p: '', images: '', id: ''}]}],
            date: Date,
            dateStr: '',
            test: ''
        }
    },
    methods: {
        changeImageUrl: function (srcUrl) {
            if (srcUrl !== undefined) {
                srcUrl = srcUrl + ''
                return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
        },
        changedateType: function () {
            let month = this.date.getMonth() + 1
            month = month < 10 ? '0' + month : '' + month
            let day = this.date.getDate()
            day = day < 10 ? '0' + day : '' + day
            let year = this.date.getFullYear()
            this.dateStr = year + month + day
            return this.dateStr
        },
        initTime: function () {
            this.date = new Date()
            this.changedateType()
        },
        setNewsTime: function () {
            this.date.setDate(this.date.getDate() - 1)
            this.changedateType()
        },
        dateTitle: function () {
            this.dateStr
            let a = this.dateStr.slice(4, 6) + '月'
            let b = this.dateStr.slice(6) + '日'
            let x = this.dateStr
            let c = new Date()
            c.setFullYear(x.slice(0, 4), x.slice(4, 6) - 1, x.slice(6))
            let e = c.getDay()
            let d = ''
            switch (e) {
            case 0:
                d = '星期日'
                break
            case 1:
                d = '星期一'
                break
            case 2:
                d = '星期二'
                break
            case 3:
                d = '星期三'
                break
            case 4:
                d = '星期四'
                break
            case 5:
                d = '星期五'
                break
            case 6:
                d = '星期六'
                break
            }
            this.test = a + b + d
        },
        addNews: function () {
            this.objs
            this.test
            this.date
            let sTop = document.body.scrollTop + document.documentElement.scrollTop
            if (document.documentElement.clientHeight + sTop >= document.documentElement.scrollHeight) {
                this.setNewsTime()
                let self = this
                self.$http.get('api/news/before/' + self.dateStr)
                .then(function (newRes) {
                    for (let i = 0; i < newRes.data.stories.length; i++) {
                        newRes.data.stories[i].images = self.changeImageUrl(newRes.data.stories[i].images)
                    }
                    let a = self.objs.length
                    self.objs[a] = [{date: '', items: [{p: '', images: '', id: ''}]}]
                    self.dateTitle()
                    self.objs[a].date = self.test
                    self.objs[a].items = newRes.data.stories
                    self.objs = self.objs.concat(self.objs[a])
                })
            }
        },
        changeTopTitle: function () {
            this.objs
            let str = ''
            let b = []
            let a = this.objs.length
            for (let x = 0; x < a; x++) {
                b.push(this.objs[x].items.lenght)
            }
            let sTop = document.body.scrollTop + document.documentElement.scrollTop
            let h1 = document.getElementsByTagName('h1')[0]
            let stanrdPx = h1.offsetHeight / 2.5
            if (sTop >= 3 * stanrdPx && sTop <= 5.5 * stanrdPx) {
                str = '首页'
                this.$store.commit('setTopTitle', str)
            }
            if (sTop >= 5.5 * stanrdPx && sTop <= (b[0] + 5.5) * stanrdPx) {
                str = this.objs[0].date
                this.$store.commit('setTopTitle', str)
            }
        }
    },
    created: function () {
        this.initTime()
        this.objs
        let self = this
        this.$http.get('api/news/latest')
        .then(function (res) {
            for (let i = 0; i < res.data.stories.length; i++) {
                res.data.stories[i].images = self.changeImageUrl(res.data.stories[i].images)
            }
            self.objs[0].date = '今日热闻'
            self.objs[0].items = res.data.stories
        })
        setInterval(self.addNews, 5000)
    },
    mounted: function () {
        // this.changeTopTitle()
    }
}
</script>

<style type="text/css" scoped>
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
    ul li h2 {
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
</style>
