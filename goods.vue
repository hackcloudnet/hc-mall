<template>
<div id="goods">
	<div id="float-icon" @click="goBack()"><i class="hcfont hc-xiangzuojiantou"></i></div> <!--漂浮按钮-->
	<el-carousel :interval="2000" arrow="hover" height="250px" trigger="click"><!--走马灯 开始-->
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item.src" style="width:100%;"> 
      </el-carousel-item>
    </el-carousel><!--走马灯 结束-->
    <div class="goods-title">Oculus rift cv1 虚拟现实VR眼镜头盔</div>
    <div class="goods-price"><span style="font-size:20px;color:#f00;">¥3576</span></div>
    
    <div class="goods-pre-price"><span style="font-size:12px;color:#888;">价格:</span><span style="font-size:12px;color:#888;text-decoration:line-through">¥4000</span></div>
	 <div style="width:100%;height:10px;"></div>
	 <div class="goods-remark" align="center"><span style="font-size:12px;color:#888;clear:both;">月销:3件</span><div style="position:absolute;left:5px;top:0px;"><span style="font-size:12px;color:#888;">快递:0.00</span></div></div>
	 
	<div id="goods-bottom" @click="test()" >
	<div class="btm-in" style="width:50px;border-right:1px solid #ddd;"></div>
	<div class="btm-in" style="width:50px;border-right:1px solid #ddd;"></div>
	<div class="btm-in" style="width:50px;"></div>
	<div class="btm-in" style="background-color:orange;color:#ffffff;font-size:15px;" align="center" :style="{width:fix_width+'px'}">加入购物车</div>
	<div class="btm-in" style="background-color:red;color:#ffffff;font-size:15px;" align="center" :style="{width:fix_width+'px'}">立即购买</div>
	</div>
</div>
</template>
<script>
export default
{
	data()
	{
		return {
			fix_width:0,
		items:[{
	         src:'https://gd3.alicdn.com/imgextra/i3/24851219/TB2CNyBX8YxQeBjSszeXXa0spXa_!!24851219.jpg' 
	        },
	        {
	          src:'https://gd4.alicdn.com/imgextra/i4/24851219/TB2apVMXr0kpuFjy0FjXXcBbVXa_!!24851219.jpg'
	        },
	        
	        {
	          src:'https://gd1.alicdn.com/imgextra/i1/24851219/TB2aWtsjpXXXXcvXXXXXXXXXXXX_!!24851219.jpg'
	        },
	        {
	        src:'https://gd1.alicdn.com/imgextra/i1/24851219/TB21esQrR0kpuFjSsziXXa.oVXa_!!24851219.jpg'
	        }
	        ]

		}
	},
	mounted:function()
			{
				this.$store.commit('setAppBtmShow',false);
				this.fix_width = (document.getElementById('goods-bottom').clientWidth-152)/2;
			},
	methods:{
		goBack:function()
		{
			this.$router.go(-1);
		}
		
	},
	computed:
	{
		
	}

}
</script>
<style scoped>
#goods
{
	width: 100%;
	padding: 0px;
	margin: 0px;

}
#goods-bottom
{
	position: fixed;
	bottom:0px;
	left: 0px;
	width: 100%;
	height: 50px;
	background-color: #efefef;
	border-top:1px solid #ddd;
	font-size:0;
}
#float-icon
{
	width: 35px;
	height: 35px;
	position: fixed;
	opacity: 0.5;
	border-radius: 35px;
	top:15px;
	left: 15px;
	font-size: 16px;
	background-color: #000000;
	line-height: 35px;
	color: #fff;
	text-align: center;
	z-index: 1000;

}
.goods-title
{
height: 40px;
width: 100%;
box-sizing: border-box;
font-size: 15px;
padding-left:5px;
line-height: 25px;
}
.goods-price
{
	width: 100%;
	height: 35px;
	padding-left:5px;
	box-sizing: border-box;
	line-height:35px;
}
.goods-pre-price
{
	width: 100%;
	height: 20px;
	padding-left:5px;
	box-sizing: border-box;
	line-height:20px;
}
.goods-remark
{
	width: 100%;
	height: 20px;
	padding-left:5px;
	box-sizing: border-box;
	line-height:20px;	
	position: relative;
}
.btm-in
{
	display: inline-block;
	height: 100%;
	vertical-align: middle;
	line-height: 50px;
	/*box-sizing: border-box;*/
}
</style>