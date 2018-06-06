<template>
<div>
	<div class="li" v-for="value in els">
		<router-link :to="{path:value.pathLocation}" class="font"><i class="iconfont" :class="value.iconClass"></i><i class="iconfont1"></i> <p>{{value.fontName}}</p><p>{{value.secondName}}</p></router-link>
	</div>
</div>
</template>
<script>
	export default{
	data(){
		return {
			
		}
	},
	props:['els']
	}
</script>
<style scoped>
	@import url("../assets/css/iconfont.css");
</style>