<template>
<div id="icon_btn">
	<div>
		<div style="margin:3px 5px;border-radius:5px;height:29px;width:30px;" :style="{'background-color':iconcolor}"><i :class="[icon]" style="line-height:29px;color:#ffffff;"></i></div>
		
	</div>
	<div align="center" style="line-height:15px;">
	<span style="font-size:10px">{{label}}</span>
	</div>
</div>
</template>
<script>
export default {
	date(){
		return {}
	},
	props:['icon','iconcolor','label']
}
</script>
<style>
#icon_btn
{
	width: 50px;
	height: 50px;
	margin-top:3px;

}
#icon_btn div
{
	box-sizing: border-box;
	overflow:hidden;
}
</style>