<template>
  <div>
    <div>
        <router-view></router-view> <!--主视图-->
    </div>
    <div class="bottom_btns" v-show="btmShow"> <!--底部按钮组-->
       <mybtns style="height:50px;"></mybtns>
    </div>
  </div>
</template>
<script>
import Btns from "./components/btns.vue"
export default {
  data(){
    return {
     
     
           }
        },
  components: {
    'mybtns':Btns
      
    },

  computed:
  {
    btmShow:function()
            {
              return this.$store.getters.getAppBtmShow;
            }
    },
  methods:{
    

    }
 
  }

</script>
<style>
body
{
padding: 0px;
margin: 0px;
width: 100%;
height: 100%;

}

.bottom_btns
{
  position: fixed;
  bottom: 0px;
  left:0px;
  right: 0px; 
  
}

@font-face {font-family: "hcfont";
  src: url('//at.alicdn.com/t/font_xdzu9jsz5dlmzpvi.eot?t=1498205874059'); /* IE9*/
  src: url('//at.alicdn.com/t/font_xdzu9jsz5dlmzpvi.eot?t=1498205874059#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/font_xdzu9jsz5dlmzpvi.woff?t=1498205874059') format('woff'), /* chrome, firefox */
  url('//at.alicdn.com/t/font_xdzu9jsz5dlmzpvi.ttf?t=1498205874059') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_xdzu9jsz5dlmzpvi.svg?t=1498205874059#hcfont') format('svg'); /* iOS 4.1- */
}

.hcfont {
  font-family:"hcfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.hc-book:before { content: "\e600"; }

.hc-form:before { content: "\e699"; }

.hc-pic1:before { content: "\e69c"; }

.hc-all:before { content: "\e696"; }

.hc-cart:before { content: "\e698"; }

.hc-close:before { content: "\e69a"; }

.hc-comments:before { content: "\e69b"; }

.hc-delete:before { content: "\e69d"; }

.hc-edit:before { content: "\e69e"; }

.hc-email:before { content: "\e69f"; }

.hc-favorite:before { content: "\e6a0"; }

.hc-less:before { content: "\e6a5"; }

.hc-moreunfold:before { content: "\e6a6"; }

.hc-more:before { content: "\e6a7"; }

.hc-pic:before { content: "\e6a8"; }

.hc-refresh:before { content: "\e6aa"; }

.hc-search:before { content: "\e6ac"; }

.hc-selected:before { content: "\e6ad"; }

.hc-set:before { content: "\e6ae"; }

.hc-success:before { content: "\e6b1"; }

.hc-survey:before { content: "\e6b2"; }

.hc-account:before { content: "\e6b8"; }

.hc-phone:before { content: "\e606"; }

.hc-process:before { content: "\e6ce"; }

.hc-store:before { content: "\e722"; }

.hc-jifen:before { content: "\e6fe"; }

.hc-iconfontxuexi:before { content: "\e601"; }

.hc-yule2:before { content: "\e723"; }

.hc-xiangshangjiantou:before { content: "\e65d"; }

.hc-xiangxiajiantou:before { content: "\e65e"; }

.hc-xiangyoujiantou:before { content: "\e65f"; }

.hc-xiangzuojiantou:before { content: "\e660"; }

.hc-huo:before { content: "\e66c"; }

.hc-shuiguo:before { content: "\e648"; }

.hc-cloth:before { content: "\e727"; }

.hc-hot:before { content: "\e756"; }

.hc-changpian_player:before { content: "\e64f"; }

.hc-fangzi:before { content: "\e732"; }

.hc-canyin:before { content: "\e6af"; }




</style>



 

