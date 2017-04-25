<template>
    <div>
        <div class="top">
            <button class="back" @click='back'></button>
            <h1>{{number}}条评论</h1>
            <button class="edit"></button>
        </div>
        <div class="comments-number">
            <h2>{{number1}}条长评</h2>
        </div>
        <ul>
            <li v-for='item in comments'>
                <div class="author"><img :src='item.avatar'></div>
                <div class="commentd-content">
                    <h1 class="author-name">{{item.author}}</h1>
                    <h2>{{item.content}}</h2>
                    <h3>{{item.time}}</h3>
                </div>
                <div class="cleanfix"></div>
            </li>
        </ul>
        <div class="cleanfix"></div>
        <div class="short-comments" @click='isShow()'>
            <h1>{{number2}}条短评论</h1>
        </div>
        <div class="short" v-show='show'>
            <ul>
                <li v-for='item in shortComments'>
                    <div class="author"><img :src='item.avatar'></div>
                    <div class="commentd-content">
                        <h1 class="author-name">{{item.author}}</h1>
                        <h2>{{item.content}}</h2>
                        <h3>{{item.time}}</h3>
                    </div>
                    <div class="cleanfix"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
import router from '../router/index.js'
export default {
    data: function () {
        return {
            id: '',
            comments: [{
                author: '',
                avatar: '',
                content: '',
                likes: '',
                time: '',
                id: ''
            }],
            shortComments: [{
                author: '',
                avatar: '',
                content: '',
                likes: '',
                time: '',
                id: ''
            }],
            number: 0,
            number1: 0,
            number2: 0,
            dateStr: '',
            date: Date,
            show: false
        }
    },
    created: function () {
        this.id = this.$route.path.slice(10)
        let self = this
        this.$http.get('api/story/' + self.id + '/long-comments')
        .then(function (res) {
            let a = res.data.comments.length
            for (let b = 0; b < a; b++) {
                res.data.comments[b].avatar = self.changeImageUrl(res.data.comments[b].avatar)
                res.data.comments[b].time = self.changedateType(res.data.comments[b].time)
            }
            self.comments = res.data.comments
            self.number1 = self.comments.length
            self.number = self.number + self.number1
        })
        self.$http.get('api/story/' + self.id + '/short-comments')
        .then(function (res2) {
            let a = res2.data.comments.length
            for (let b = 0; b < a; b++) {
                res2.data.comments[b].avatar = self.changeImageUrl(res2.data.comments[b].avatar)
                res2.data.comments[b].time = self.changedateType(res2.data.comments[b].time)
            }
            self.shortComments = res2.data.comments
            self.number2 = self.shortComments.length
            self.number = self.number + self.number2
        })
    },
    methods: {
        back () {
            router.go(-1)
        },
        changeImageUrl: function (srcUrl) {
            if (srcUrl !== undefined) {
                srcUrl = srcUrl + ''
                return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
        },
        changedateType: function (timestamp) {
            this.date = new Date(parseInt(timestamp))
            let month = this.date.getMonth() + 1
            month = month < 10 ? '0' + month : '' + month
            let day = this.date.getDate()
            day = day < 10 ? '0' + day : '' + day
            let hour = this.date.getHours()
            let minutes = this.date.getMinutes()
            this.dateStr = month + '-' + day + ' ' + hour + ':' + minutes
            return this.dateStr
        },
        isShow: function () {
            this.show = !this.show
        }
    }
}
</script>

<style type="text/css" scoped>
    .top {
        height: 1.9rem;
        width: 20rem;
        background-color: #00a2ed;
        padding-top: 1.1rem;
    }
    .back {
        float: left;
        width: 0.9rem;
        height: 0.9rem;
        background-image: url('../../static/img/loginback.gif');
        background-size: 0.9rem 0.9rem;
        margin-left: 1rem;
    }
    .top h1 {
        line-height: 0.9rem;
        font-weight: normal;
        color: #fff;
        font-family: "Microsoft Yahei",arial;
        float: left;
        margin: 0;
        margin-left: 2rem;
    }
    .edit {
        float: right;
        height: 1.25rem;
        width: 1.25rem;
        background-image: url('../../static/img/edit.png');
        background-size: 1.25rem 1.25rem;
        margin-right: 0.8rem;
    }
    .comments-number {
        height: 2.5rem;
    }
    .comments-number h2 {
        line-height: 2.5rem;
        font-weight: normal;
        margin-left: 0.9rem;
    }
    ul {
        padding: 0;
    }
    ul li {
        padding-top: 0.9rem;
    }
    .author {
        float: left;
        margin-left: 0.9rem;
        width: 2rem;
        height: 2rem;
    }
    .author img {
        width: 2rem;
        height: 2rem;
    }
    .commentd-content {
        float: right;
        margin-right: 0.8rem;
        padding-left: 0.4rem;
        width: 15.9rem;
    }
    .author-name{
        line-height: 1.4rem;
        color: #000;
        margin: 0;
        margin-bottom: 0.3rem;
    }
    .commentd-content h2 {
        line-height: 1.2rem;
        font-weight: normal;
        font-family: "Microsoft Yahei", Arial;
        margin-bottom: 1.2rem;
    }
    .commentd-content h3 {
        line-height: 0.6rem;
        color: #bfbfbf;
        margin-bottom: 1rem;
    }
    .short-comments {
        border:1px solid #bfbfbf;
    }
    .short-comments h1{
        margin: 0;
        line-height: 2.5rem;
        font-weight: normal;
        margin-left: 0.9rem;
    }
    /*.short {
        display: ;
    }*/
</style>
