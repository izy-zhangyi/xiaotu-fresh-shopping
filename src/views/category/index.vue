<script setup>
import { useCategoryStore } from '@/stores/categoryStore.js'
import { onBeforeRouteUpdate } from 'vue-router'
import { useHomeStore } from '@/stores/homeStore.js'
import GoodsItem from '@/views/home/components/GoodsItem.vue'
// 轮播图数据
const homeStore = useHomeStore()
homeStore.getBannerList({ distributionSite: '2' })

// 分类数据
const categoryStore = useCategoryStore()
// 首次渲染，并不会监听路由变化，id为默认id
categoryStore.getTopCateGoryList()
// 引入 onBeforeRouteUpdate 解决路由缓存问题-防止路由组件重复使用
// 监听路由变化 onBeforeRouteUpdate
onBeforeRouteUpdate((to) => {
  console.log('路由发生了变化', to.params.id)
  categoryStore.getTopCateGoryList(to.params.id)
})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{
            categoryStore.topCateGoryList.name
          }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图区域 -->
      <div class="home-banner">
        <el-carousel :interval="4000" type="card" height="500px">
          <el-carousel-item v-for="item in homeStore.bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" srcset="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryStore.topCateGoryList.children" :key="i.id">
            <!-- 二级分类路由跳转 -->
            <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div
        class="ref-goods"
        v-for="item in categoryStore.topCateGoryList.children"
        :key="item.id"
      >
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :item="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
}
img {
  width: 100%;
  height: 500px;
}
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>
