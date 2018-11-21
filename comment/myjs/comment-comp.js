import commentInput from './comment-input.js';
import commentList from './comment-list.js';

export default {
	template: `
		<div>
			// 这里的@woyaobaocun可以绑定方法
			<cinput @woyaobaocun="zhendeyaobaocuna"></cinput>
			<clist @shanchuwo='zhendeyaoshanchu' v-bind:comments="comments"></clist>
		</div>
	`,
	// 实体数据
	data() {
		return {
			comments: []
		}
	},
	// 方法
	methods: {
		updateLocal() {
			localStorage.setItem('vvv-comments', JSON.stringify(this.comments));
		},
		zhendeyaobaocuna(res) {
			this.comments.push(res);
			this.updateLocal();
		},
		// 通过id来删除
		zhendeyaoshanchu(id) {
			this.comments = this.comments.filter((c) => c.id != id);
			this.updateLocal();
		}
	},
	// 	组件
	// 	前面自己定义的名字要记住两点:
	// 	1)首字母不能大写
	// 	2)如果有多个英文拼接要使用'-'来表示,但是一定要注意,要用引号引起来,例如：'splicing-combination''
	components: {
		cinput: commentInput,
		clist: commentList
	},
	// 创建时调用
	created() {
		const cs = localStorage.getItem('vvv-comments');
		if (cs) {
			this.comments = JSON.parse(cs);
		}
	}
};
