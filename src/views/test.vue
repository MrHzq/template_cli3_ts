<template>
    <div class="test">我是：Cli 3 + TypeScript</div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class Text extends Vue {
        created() {
            this.$api
                .login({
                    password: 'qwer1234',
                    userNo: '13402318457'
                })
                .then(res => console.log(res))
        }
    }
</script>

<style scoped lang="scss">
    .test {
        color: red;
    }
</style>
