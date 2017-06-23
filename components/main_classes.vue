<template>
<div id="main-classes">
	<div class="box2" >
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#FF1493" icon="hcfont hc-form" label="票务"></icon-button>
		</div>
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#13CE66" label="图书" icon="hcfont hc-book" ></icon-button>
		</div>
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#20A0FF" label="娱乐" icon="hcfont hc-yule2" ></icon-button>
		</div>
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#9400D3" label="餐饮" icon="hcfont hc-canyin" ></icon-button>
		</div>
		<div style="display:inline-block; width:20%;height:100%" align="center">
				<icon-button iconcolor="#1E90FF" label="生鲜" icon="hcfont hc-shuiguo" ></icon-button>
		</div>	
		
	</div>
	<div class="box2" >
		
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#F08080" label="有声读物" icon="hcfont hc-changpian_player" ></icon-button>
		</div>
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#F7BA2A" label="学习用品" icon="hcfont hc-iconfontxuexi" ></icon-button>
		</div>
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#F08080" label="服装" icon="hcfont hc-cloth" ></icon-button>
		</div>
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#800000" label="营地"icon="hcfont hc-fangzi" ></icon-button>
		</div>
		<div style="display:inline-block; width:20%;height:100%" align="center">
			<icon-button iconcolor="#F7BA2A" label="积分兑换" icon="hcfont hc-jifen" ></icon-button>
		</div>
	</div>
</div>
</template>
<script>
import IconButton from "./icon_btn.vue"
export default {
	data(){
		return {}
	},
	components:{
		'icon-button':IconButton
	}
}
</script>
<style>
#main-classes
{
	height: 120px;
	width: 100%;
	margin-top:3px;
	margin-bottom:3px;
	background-color: #ffffff;
}
.box2
{
	font-size:0;
	height: 50%;
}
.box2>div
{
	box-sizing: border-box;
	
	background-color: #ffffff;
	vertical-align: middle;
}
</style>