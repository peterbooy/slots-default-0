<template>
    <div>
        Product
        <common>
            <template v-slot:header="user">{{user}}</template>
            <div>我去你大爷</div>
            <template v-slot:footer>父组件的底部</template>
            <common>
                <template v-slot:header="user">{{user}}</template>
                <div>我去你大爷</div>
                <template v-slot:footer>父组件的底部</template>
            </common>
            <common>
                <template v-slot:header="user">{{user}}</template>
                <div>我去你大爷</div>
                <template v-slot:footer>父组件的底部</template>
            </common>
        </common>
    </div>
</template>
<script>
    import Common from './common';

    export default {
        name: 'product',
        data() {
            return {};
        },
        components: {
            Common
        }
    };
</script>
