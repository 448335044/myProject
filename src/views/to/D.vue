<template>
    <div @click="re">DDD</div>
</template>

<script>
export default {
    methods: {
        re() {
         history.go(-3)
        }
    }
}
</script>