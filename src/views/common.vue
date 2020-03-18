<template>
    <div>
        <div class="new">
            <div>
                <slot name="header" :helloHeader="helloHeader">我是子组件头部</slot>
            </div>
            <div>
            </div>
            <div>
                <slot name="footer" :helloFooter="helloFooter">我是子组件底部</slot>
            </div>

        </div>
<div v-html="$slots.default[0]"></div>
    </div>
</template>
<script>
    // 搜索关键词this.$slots.default[0]
    //https://www.jianshu.com/p/7b0d437db9f6
    // https://blog.csdn.net/dongcehao/article/details/79528409
    // 已经获取到这些节点 ,现在的关键是怎么把这些节点插入
    export default {
        name: 'common',
        data() {
            return {
                helloHeader: {
                    name: 111
                },
                helloFooter: {
                    name: 222
                }
            };
        },
        created() {
            console.log(this);
            console.log(this.$slots.default[0], '----');
            console.log(this.$slots.default[1], '----');
            console.log(this.$slots.default[2], '----');
            console.log(this.$scopedSlots);
            console.log(this.$scopedSlots.header);
            console.log(this.$scopedSlots.footer);
        }
    };
</script>
