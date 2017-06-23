<template>
<div style="display:inline-block;vertical-align:middle;">
	<span :style="tip">{{text}}</span>
</div>
</template>
<script>
export default
{
	data()
	{
		return {
			tip:{
				fontSize:this.fontSize,
				border:'1px solid '+this.borderColor,
				color:this.color,
				borderRadius:'3px',
				padding:'1px',

				margin:'0px 3px'

			}
		}
	},
	props:['fontSize','borderColor','color','text']
}
</script>