<template>
<div id="classes">
	<div style="position:fixed;top:0px;left:0px;width:100%;" >
		<cls-btns></cls-btns>
	</div>
	<div style="width:100%;height:45px;"></div><!--占位 -->
	<div style="width:100%;height:45px;"></div>
	<div>
	<gds-lst></gds-lst>
	</div>
	<div style="height:50px;"></div><!--占位-->
</div>
</template>
<script>
import ClassesBtns from './components/classes_btns.vue'
import GoodsList from './components/goods_list.vue'
export default {
	data()
	{
		return {}
	},
	components:{
		'cls-btns':ClassesBtns,
		'gds-lst':GoodsList
	},
	mounted:function()
			{
				this.$store.commit('setAppBtmShow',true);
				
			},

}
</script>
<style scoped>
</style>