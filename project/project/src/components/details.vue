<template>
    <div>
        <detailstop></detailstop>
        <detailscontent></detailscontent>
    </div>
</template>

<script type="text/javascript">
import detailstop from './details_top'
import detailscontent from './details_content'
export default{
    data: function () {
        return {
            detailId: ''
        }
    },
    components: {
        detailstop,
        detailscontent
    }
}
</script>
