<template>
	<div id="marquee">
		<div class="mar" :style="{top:top1+'px'}">
			
			<div class="mar-in"><text-tip font-size="10px" border-color="#ff0000" color="#ff0000" text="最新消息"></text-tip>家长惠商城上线测试...</div>
			<div class="mar-in"><text-tip font-size="10px" border-color="#ff0000" color="#ff0000" text="特别提醒"></text-tip>测试期间，请随时关注本网址...</div>
		</div>
		<div class="mar" :style="{top:top2+'px'}">
			
			<div class="mar-in"><text-tip font-size="10px" border-color="#ff0000" color="#ff0000" text="热门"></text-tip>如需要修改，请微信联系...</div>
			<div class="mar-in"><text-tip font-size="10px" border-color="#ff0000" color="#ff0000" text="通知"></text-tip>谢谢关注....</div>
		</div>
	</div>
</template>
<script>
import TextTip from './text_tip.vue'
export default
{
	data(){
		return {
			top1:0,
			top2:32
		}
	},
	components:
	{
		'text-tip':TextTip
	},
	mounted:function()
	{	
		
		var me = this;
		var tick=0;
		function marqueeGo()
		{
			tick++;
			if(tick<=0)   //-3 ~0 执行移动
			{
				me.top1-=8;
				me.top2-=8;
				if(me.top1==0)
				{
					me.top2=32;
				}
				if(me.top2==0)
				{
					me.top1=32;
				}
				return;
			}
			if(tick>0 && tick<=4) //1～4 不动
			{
				
				return;
			}
			if(tick>4)//重制tick继续移动
			{
				tick=-4;
				return;
			}

			
			
		}
		var myInt = setInterval(marqueeGo,250);
	}
}
</script>
<style scoped>
#marquee
{
position: relative;
height: 32px;
overflow: hidden;

}
.mar
{
position: absolute;
height: 32px;
}
.mar-in
{
	font-size:12px; 
	height:16px;
	line-height:16px;

}

</style>