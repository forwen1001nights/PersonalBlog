<template>
    <div class="layout">
        <el-row :gutter="0">
            <el-col class="hidden-sm-and-down" :md="3" :lg="3" :xl="3">
                <div class="grid-content bg-purple">
                    <LeftNav :parentTag="parentTag" />
                    <Contact/>
                </div>
            </el-col>
            <el-col class="hidden-xs-only" :sm="6" :md="5" :lg="5" :xl="5">
                <div class="grid-content bg-purple-light">
                    <router-view name="catalog"/>
                </div>
            </el-col>
            <el-col :xs="24" :sm="18" :md="16" :lg="16" :xl="16">
                <div class="grid-content bg-purple">
                    <router-view/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import LeftNav from '../components/LeftNav';
import Contact from '../components/Contact';
export default {
    props: ['parentTag'],
    components: {
        LeftNav,
        Contact,
    },
}
</script>

<style scoped>
    .layout {
        height: 100%;
    }
    .el-row {
        height: 100%;
    }
    .el-col {
        border-radius: 4px;
        height: 100%;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        height: 100%;
        width: 100%;
        position: relative;
    }
</style>