<template>
 <div class="skeleton">
    <div class="skeleton-head"></div>
    <div class="skeleton-body">
        <div class="skeleton-title"></div>
        <div class="skeleton-content"></div>
    </div>
</div>
</template>
 
<script>

export default {
 name: 'skeletonAbout',
}
</script>
 
<style scoped>
.skeleton {
    padding: 10px;
}

.skeleton .skeleton-head,
.skeleton .skeleton-title,
.skeleton .skeleton-content {
    background: rgb(194, 207, 214);
    background-image: linear-gradient(90deg,rgba(255, 255, 255, 0.15) 25%, transparent 25%);
    background-size: 20rem 20rem;
    animation: skeleton-stripes 1s linear infinite;
}

@keyframes skeleton-stripes {
    from {
        background-position: 0 0 ;
    }
    to {
        background-position: 20rem 0;
    }
}

.skeleton-head {
    width: 100px;
    height: 100px;
    float: left;
}

.skeleton-body {
    margin-left: 110px;
}

.skeleton-title {
    width: 500px;
    height: 60px;
}

.skeleton-content {
    width: 260px;
    height: 30px;
    margin-top: 10px;
} 
</style>