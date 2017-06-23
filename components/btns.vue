<template>
<div id="btns">
	<div v-for="(btn,index) in btns" class="btn" :style="{width:btn_width}" @click="btnSel(index)">
	<i style="display:block; font-size:18px; padding-top:5px;" :class="[btn.icon,btn.sel?'btn-sel':'btn-normal']"></i>
	<span style="display:block; font-size:13px;padding-top:5px;"  :class="[btn.sel?'btn-sel':'btn-normal']">{{btn.label}}</span>
	</div>
</div>
</template>
<script>
export default {
	data(){
		return {
			preBtn:0,
			btns:[
			{
				icon:'hcfont hc-store',
				label:'首页',
				sel:true
			},
			{
				icon:'hcfont hc-all',
				label:'分类',
				sel:false
				
			},
			{
				icon:'hcfont hc-cart',
				label:'购物车',
				sel:false
			},
			{
				icon:'hcfont hc-account',
				label:' 账户',
				sel:false
			},	
			
			{
				icon:'hcfont hc-process',
				label:'商务合作',
				sel:false
			}
			
			]

		}
	},
	computed:
	{
		btn_width:function(){
			return (100/(this.btns.length))+"%";
		}
	},
	methods:
	{
		btnSel:function(index)
		{
			this.btns[this.preBtn].sel = false;
			this.preBtn = index;
			this.btns[index].sel = true; 
			switch (index)
			{
				case 0:
				this.$router.push('/main');
				break;
				case 1:
				this.$router.push('/classes');
				break;

			}
		}
	}
}
</script>
<style>
#btns
{
  
  font-size:0;
  text-align: center;
  background-color: #efefef;
  border-bottom: 1px solid #cccccc;

}
.btn
{

  display: inline-block;
  height: 100%;

 
  padding: 0px;
  margin: 0px;
  text-align: center;
  vertical-align:middle;
}
.btn-normal
{
	color:#324057
}
.btn-sel
{
	color:#FF4949;
	font-weight:bold;
}

</style>