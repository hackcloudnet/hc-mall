<template>
<div id="main-groupa">
	<div class="main-classa" :style="{'background-color':bgcolor}">
	      <div :style="{color:fontcolor}">
	        <i :class="[iconpic]"></i>
	        <span style="font-size:14px;">{{text}}</span>
	      </div>
	      <div id="box1" style="height:200px;margin-left:5px;margin-right:5px;background-color:#ffffff;font-size:0; ">
	         <div style="height:100px;" align="center">
		        <div style="display:inline-block;width:25%; height:100%;border-bottom:1px solid #efefef;border-right:1px solid #efefef;">
		              
		        </div>
	          	<div style="display:inline-block;width:25%; height:100%;border-bottom:1px solid #efefef;border-right:1px solid #efefef;">
		              
		        </div>
		        <div style="display:inline-block;width:25%; height:100%;border-bottom:1px solid #efefef;border-right:1px solid #efefef;">
	             
	          	</div>
		        <div style="display:inline-block;width:25%; height:100%;border-bottom:1px solid #efefef;">
		             
		        </div>
	        </div>
	        <div style="height:100px;">
	          	<div  style="display:inline-block;width:50%; height:100px;border-right:1px solid #efefef;">
	            
	          
	          	</div>
	          	<div class="box-border" style="display:inline-block;width:50%; height:100px;">
	        
	          	</div>
	        </div>
	      </div>
	 </div>
</div>
</template>
<script>
export default {
	data(){
		return{

		}
	},
	props:['bgcolor','fontcolor','text','iconpic']
}
</script>
<style>
 .main-classa
  {
    margin-top:2px;
    height: 240px;
    width: 100%;
    border-radius:10px;
  }
  .main-classa>div:first-child
  {
  	height:35px;
  	width:100%;
    line-height:35px;
    text-align: center;
  }
  #box1 div
  {
  	box-sizing: border-box;
  }
</style>