<template lang="html">
	<div class="table-content">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>作者信息</span>
				<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
			</div>
			<el-table border :data="item" style="width: 100%">
				<el-table-column prop="name" label="姓名">
				</el-table-column>
				<el-table-column prop="address" label="地址">
				</el-table-column>
				<el-table-column prop="occupation" label="职业">
				</el-table-column>
				<el-table-column prop="WX" label="WX">
				</el-table-column>
				<el-table-column prop="QQ" label="QQ">
				</el-table-column>
				<el-table-column prop="github" label="github">
					<template slot-scope="scope">
          <a :href="scope.row.github"
            target="_blank"
            class="buttonText">{{scope.row.github}}</a>
        </template>
				</el-table-column>
			</el-table>
		</el-card>
	</div>
</template>

<script>
	import pagination from "common/pagination";
	export default {
		data() {
			return {
				item: [{
					name: "周焯辉",
					address: "广州天河区",
					occupation: "WEB前端开发工程师",
					WX: "z13189396369",
					QQ: "413102663",
					github: "https://github.com/ZZH-13189396369/element-admin"
				}]
			};
		},
		methods: {
			github:function(){
				window.location.href="https://github.com/ZZH-13189396369/element-admin"
			}
		}
	};
</script>

<style scoped lang="scss">
	.table-content {
		margin: 50px 20px
	}
</style>
