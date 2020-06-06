<template>
    <div class="contact">
        <div class="flex_item">
            <i class="el-icon-user" @click="toAbout"></i>   
        </div>
        <div class="flex_item">
            <a href="mailto:easy2long@outlook.com">
                <i class="el-icon-message"></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toAbout () {
            const parentTag = this.$route.params.parentTag;
            if(parentTag) {
                this.$router.push(`/pages/${parentTag}/about`)
            }
            else {
                this.$router.push(`/pages/about`)
            }
        }
    }
}
</script>
<style scoped>
    .contact {
        height: 50px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #ccc;
        width: 100%;
        font-size: 35px;
        display: flex;
    }
    .contact .flex_item {
        flex: 1;
    }
    .contact .flex_item i {
        cursor: pointer;
    }
</style>