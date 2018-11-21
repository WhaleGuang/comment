// 输出(导出)指令模板
export default{
	props:['comment'],
	methods:{
		deleteMe(){
			this.$emit('shanchuwo',this.comment.id);
		}
	},
	// 这个是已经发布出去的样式列表
	template:`
	<div class='comment'>
		<span class='comment-author'>{{comment.author}}:</span>
		<span class='comment-conten'>{{comment.content}}</span>
		<a href @click.prevent='deleteMe' class='comment-delete'>删除</a>
	</div>`
};