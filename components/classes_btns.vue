<template>
<div>
	<div id="classes_btns">
		<div class="scroll-classes" @>
		<span :id="'sp'+index" style="font-size:15px;padding:0px 10px;color:#ffffff;" v-for="(item,index) in classes" @click="sel(index)" >{{item.name}}</span>
		</div>
		
	</div>
	<div class="subclasses" v-if="sub_show">
			<span v-for="(subitem,index) in sel_classes" style="width:50px;">{{subitem.name}}</span>
	</div>
</div>
</template>
<script>
export default
{
	data(){
		return{
			sub_show:false,
			sel_classes:[],
			classes:[{
				name:'票务',
				subclass:[{
					name:'test1'

				},
				{
					name:'test2'
				}

				]
			},
			{
				name:'图书',
				subclass:[{
					name:'test3'
					
				},
				{
					name:'test4'
				}

				]
			},
			{
				name:'娱乐',
				subclass:[{
					
				}

				]
			},
			{
				name:'餐饮',
				subclass:[{
					
				}

				]
			},
			{
				name:'生鲜',
				subclass:[{
					
				}

				]
			},
			{
				name:'有声读物',
				subclass:[{
					
				}

				]
			},
			{
				name:'学习用品',
				subclass:[{
					
				}

				]
			},
			{
				name:'服装',
				subclass:[{
					
				}

				]
			},
			{
				name:'营地',
				subclass:[{
					
				}

				]
			},
			{
				name:'积分兑换',
				subclass:[{
					
				}

				]
			}
			]


		}
	},
	methods:
	{
		sel:function(index)
		{
			this.sel_classes=this.classes[index].subclass;
			this.sub_show=true;
			var xxx = document.getElementById("sp"+index).offsetWidth;
			console.log(xxx);	
		}
	}
}

</script>
<style>
#classes_btns
{
	width: 100%;
	height: 45px;
	background-color: #FF4949;
	overflow-y: hidden;
	overflow-x: auto;
	
}
.scroll-classes
{
white-space:nowrap;
height: 45px;
line-height: 45px;
}
.subclasses
{
	width: 100%;

	background-color: #efefef;

}
</style>