<template>
<div id="goods-list">
	<div class="goods" v-for="(item,index) in goods" @click="goGoods(index)">
		<div class="goods-img goods-in">
			<img style="width:100%;height:100%" :src="item.src"/>
		</div>
		<div class="goods-content goods-in">
			<div class="goods-title">{{item.title}}</div>
			<div class="goods-classes">{{item.classes}}</div>
			<div class="goods-tip">{{item.tip}}</div>
			<div class="goods-price"><span style="font-size:18px;color:#f00;">{{item.price}}</span><span style="padding-left:15px;font-size:10px;color:#333333">{{item.sold}}</span></div>
		
		</div>
	</div>
</div>
</template>
<script>
export default
{
	data()
	{
		return{
			goods:[
				{
					title:'Oculus rift cv1 虚拟现实VR眼镜头盔',
					classes:'电子产品',
					tip:'促销',
					price:'¥3569',
					sold:'已售3件',
					src:'https://gd3.alicdn.com/imgextra/i1/1850331735/TB23oToietTMeFjSZFOXXaTiVXa_!!1850331735.jpg_400x400.jpg'
				},
				{
					title:'Oculus rift cv1 虚拟现实VR眼镜头盔',
					classes:'电子产品',
					tip:'促销',
					price:'¥3569',
					sold:'已售3件'
					,
					src:'https://gd3.alicdn.com/imgextra/i1/1850331735/TB23oToietTMeFjSZFOXXaTiVXa_!!1850331735.jpg_400x400.jpg'
				},
				{
					title:'Oculus rift cv1 虚拟现实VR眼镜头盔',
					classes:'电子产品',
					tip:'促销',
					price:'¥3569',
					sold:'已售3件',
					src:'https://gd3.alicdn.com/imgextra/i1/1850331735/TB23oToietTMeFjSZFOXXaTiVXa_!!1850331735.jpg_400x400.jpg'
				},
				{
					title:'Oculus rift cv1 虚拟现实VR眼镜头盔',
					classes:'电子产品',
					tip:'促销',
					price:'¥3569',
					sold:'已售3件',
					src:'https://gd3.alicdn.com/imgextra/i1/1850331735/TB23oToietTMeFjSZFOXXaTiVXa_!!1850331735.jpg_400x400.jpg'
				}
			]

		}
	},
	methods:
	{
		goGoods:function(index)
		{
			console.log(index);
			this.$router.push('/goods');
		}
	}
}
	
</script>
<style scoped>
#goods-list
{
	width: 100%;
	font-size:0px;
	background-color: #efefef;

}
.goods
{
	width: 100%;
	height: 120px;
	background-color: #ffffff;
	margin-bottom:5px;
}
.goods-in
{
	display: inline-block;
	vertical-align: middle;
}
.goods-img
{
	width: 40%;
	height: 100%;
}
.goods-content
{
	width: 60%;
	height: 100%;
	box-sizing: border-box;
	padding-left: 3px;
	padding-right: 1px;
}
.goods-title
{
	width: 100%;
	height: 50px;
	font-size: 15px;
	padding-left:5px;
	line-height: 25px;
	box-sizing: border-box;

}
.goods-classes
{
	width: 100%;
	height: 20px;
	font-size:12px;
	color:#99A9BF;
	padding-left:5px;
	box-sizing: border-box;
	line-height:20px;
}
.goods-tip
{
	width: 100%;
	height: 20px;
	font-size:10px;
	color:#f00;
	padding-left:5px;
	box-sizing: border-box;
	line-height:20px;
}
.goods-price
{
	width: 100%;
	height: 40px;
	padding-left:5px;
	box-sizing: border-box;
	line-height:40px;
}
</style>