<template>
	<div id="home">
	<my-header></my-header>
	<div class="asideMenu">
	<icon-btn :els='iconA'></icon-btn>
	</div>
	<div class="aside-menu-box1">
		<icon-btn :els='iconB'></icon-btn>
	</div>
	<div class="nav-slide" style="color:black">
    <div class="nav-iconback"></div>
    
    </div>
	</div>
</template>
<script>
	import Header from './header.vue'
	import Icon from './Iconbtn.vue'
	export default {
		data(){
			return {
				iconA:[{pathLocation:'/file',iconClass:'icon-wenjian',fontName:'文件'},
			{pathLocation:'/tree',iconClass:'icon-shu',fontName:'场景树'},
			{pathLocation:'/statistical',iconClass:'icon-leixing',fontName:'查询统计',secondName:'属性'},
			{pathLocation:'/shux',iconClass:'icon-shuxing',fontName:'查询统计',secondName:'类型'},
			{pathLocation:'/floor',iconClass:'icon-gaoceng',fontName:'查询统计',secondName:'楼层'},
			{pathLocation:'/search',iconClass:'icon-sousuo',fontName:'搜索'},
			{pathLocation:'/space',iconClass:'icon-zhuanti',fontName:'空间'}],
			iconB:[
			{pathLocation:'',iconClass:'icon-shipin',fontName:'安全管理',secondName:'视频监控'},
			{pathLocation:'',iconClass:'icon-xiaofangbaojing',fontName:'安全管理',secondName:'消防报警'},
			{pathLocation:'',iconClass:'icon-302',fontName:'运维管理',secondName:'故障派修'},
			{pathLocation:'',iconClass:'icon-weihubaoyang',fontName:'运维管理',secondName:'保养维护'},
			{pathLocation:'',iconClass:'icon-ziliaoguanli',fontName:'资料管理'},
			{pathLocation:'',iconClass:'icon-01',fontName:'查询',secondName:'部门人员'},
			]
			}
		},
		components:{
			'my-header':Header,
			'icon-btn':Icon
		}
		
	}
</script>
<style>
	@import '../assets/css/index.css';
	@import '../assets/css/format.css';
</style>