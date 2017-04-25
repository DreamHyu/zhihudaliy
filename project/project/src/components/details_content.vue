<template>
    <div class="detail-content" v-html='detailContent.body'></div>
</template>

<script type="text/javascript">
export default {
    data: function () {
        return {
            detailId: '',
            detailContent: {
                body: '',
                image: '',
                title: '',
                imageSource: ''
            }
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
        this.detailContent
        this.detailId = this.$route.path.slice(8)
        let self = this
        this.$http.get('api/news/' + this.detailId)
        .then(function (res) {
            res.data.body = self.changeImageUrl(res.data.body)
            self.detailContent = res.data
        })
    }
}
</script>

<style type="text/css" scoped>
    .detail-content {
        margin-top: -196px;
    }
    @import 'http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3'
</style>
