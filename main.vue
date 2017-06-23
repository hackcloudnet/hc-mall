<template>
  <div style="background-color:#efefef;"> 
    <div class="main-research" align="center"><!--头部搜索栏 开始-->
      <div class="main-top-intput" align="left">
      <span style="font-size:13px;color:#E5E9F2;padding-left:5px;">搜索想查找的商品</span>
      </div>
      <i class="el-icon-search" style="vertical-align:middle;color:#ffffff;"></i>
      <i v-show="msgShow" class="hcfont hc-comments" style="color:#ffffff;position:absolute;right:8px;top:8px;font-size:20px;" @click="haveMessage"></i>
    </div><!--头部搜索栏 结束-->
    <div style="width:100%;height:40px"></div><!--占位-->
    <el-carousel :interval="2000" arrow="hover" height="150px" trigger="click"><!--走马灯 开始-->
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item.src" style="width:100%;"> 
      </el-carousel-item>
    </el-carousel><!--走马灯 结束-->
    <!-- 首页内容-->
      <main-classes></main-classes><!--分类图标 -->
      <div style="width:100%;height:35px; margin-top:5px;margin-bottom:3px;background-color:#ffffff; border-radius:5px; overflow:hidden;">
      <div style="width:20%;height:100%;display:inline-block; vertical-align:middle; font-size:12px; line-height:35px; color:#ffffff; background-color:#FF4949;" align="center">今日头条</div><div style="height:100%;width:80%;display:inline-block;vertical-align:middle; margin-top:2px;"><marquee-div></marquee-div><!--滚动文字--></div>
      </div>
      <main-groupb></main-groupb>
      <main-groupa bgcolor="#ff0000" fontcolor="#ffffff" iconpic="hcfont hc-huo" text="限时秒杀"></main-groupa><!--展示区块-->
      
      <main-groupa bgcolor="#13CE66" fontcolor="#ffffff" iconpic="hcfont hc-huo" text="热销商品"></main-groupa>

      <main-groupa bgcolor="#F7BA2A" fontcolor="#ffffff" iconpic="hcfont hc-huo" text="搜索热门"></main-groupa>
      
      <main-groupa bgcolor="#20A0FF" fontcolor="#ffffff" iconpic="hcfont hc-huo" text="商家推荐"></main-groupa>

    <div style="height:50px;"><!--占位-->
    </div>

  </div>
</template>
<script>
import MainGroupA from './components/main_groupA.vue'
import MainGroupB from './components/main_groupB.vue'
import MainClasses from './components/main_classes.vue'
import Marquee from './components/marquee.vue'

  export default{
    components:{
      'main-groupa':MainGroupA,
      'main-groupb':MainGroupB,
      'main-classes':MainClasses,
      'marquee-div':Marquee
    },
    data(){
      return{
        msgShow:true,
        msgFlash:false,
        msgTime:0,
        items:[{
         src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497790350923&di=95a3d649bb29eb8847bdb86eacff7e7c&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3424226810%2C3788025634%26fm%3D214%26gp%3D0.jpg' 
        },
        {
          src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497790348489&di=fd02ca8284f5d556419c068a9588731c&imgtype=0&src=http%3A%2F%2Fwww.bz55.com%2Fuploads%2Fallimg%2F150701%2F140-150F1142638.jpg'
        },
        
        {
          src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497790637259&di=917347b36f05d2d3993bec64614ed8e8&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D227953490%2C3054069314%26fm%3D214%26gp%3D0.jpg'
        },
        {
        src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497790796608&di=b05138cacd611c3418d535123fd0f08c&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3078918761%2C3936782346%26fm%3D214%26gp%3D0.jpg'
        }
        ]

      }
    },
    mounted:function()
      {
        this.$store.commit('setAppBtmShow',true);
      
      },
    methods:{
      haveMessage:function()
      {
        
        if (this.msgFlash)
        {
          console.log(this.msgFlash)
          clearInterval(this.msgTime);
          this.msgFlash=!this.msgFlash;
          return;
        }

        this.msgFlash=!this.msgFlash;
         function s1(me)
         {
          me.msgShow=!me.msgShow;
         }
         var me = this;
        this.msgTime = setInterval(s1,500,me);
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .main-research
  {
    height: 40px;
    width:100%;
    background-color: #FF4949;
    position: fixed;
    z-index: 1000; 
   
  }
  .main-top-intput
  {
    display: inline-block;
    height: 30px;
    width: 70%;
    margin-top:5px;
    border-bottom: 1px solid #ffffff; 
    vertical-align: middle;
    line-height: 35px;
  }
 
  .box-border
  {
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
  }
</style>