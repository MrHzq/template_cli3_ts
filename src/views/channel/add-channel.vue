<template>
    <div class="add-channel">我是新建渠道页面</div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'

    @Component
    export default class AddChannel extends Vue {}
</script>

<style scoped lang="scss">
    .add-channel {
        height: 200px;
        color: aqua;
    }
</style>
