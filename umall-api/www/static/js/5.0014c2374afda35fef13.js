webpackJsonp([5],{"+vpc":function(t,e){},GFIO:function(t,e){},SDMS:function(t,e){},zFyg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),s=i("fUgm"),r=i("D/cR"),o=i("BGi1"),l={components:{},props:["info"],computed:n()({},Object(s.c)({list:"sort/list"})),data:function(){return{form:{pid:"",catename:"",img:null,status:1},rules:{pid:[{required:!0,message:"请选择分类",trigger:"change"}],catename:[{required:!0,message:"请输入名称",trigger:"change"}]},imageUrl:""}},methods:n()({cancel:function(){this.info.show=!1,this.info.isAdd||this.empty()},changImg:function(t){var e=t.raw;this.imageUrl=URL.createObjectURL(e),this.form.img=e}},Object(s.b)({requestList:"sort/requestList"}),{confirm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return Object(o.b)("请全部填写完毕"),!1;Object(r.L)(e.form).then(function(t){200==t.data.code?(Object(o.a)(t.data.msg),e.info.show=!1,e.empty(),e.cancel(),e.requestList()):Object(o.b)(t.data.msg)})})},getDetail:function(t){var e=this;Object(r.N)({id:t}).then(function(i){e.form=i.data.list,e.form.id=t,e.imageUrl=e.$preImg+e.form.img})},update:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return Object(o.b)("请全部填写完毕"),!1;Object(r.P)(e.form).then(function(t){200==t.data.code?(Object(o.a)(t.data.msg),e.empty(),e.cancel(),e.requestList()):Object(o.b)(t.data.msg)})})},empty:function(){this.form={catename:"",img:null,status:1},this.imageUrl=""}})},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add"},[i("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[i("el-form-item",{attrs:{label:"上级分类","label-width":"80px",prop:"pid"}},[i("el-select",{model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[i("el-option",{attrs:{label:"顶级分类",value:0}}),t._v(" "),t._l(t.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"分类名称","label-width":"80px",prop:"catename"}},[i("el-input",{attrs:{clearable:""},model:{value:t.form.catename,callback:function(e){t.$set(t.form,"catename",e)},expression:"form.catename"}})],1),t._v(" "),t.form.pid?i("div",{staticClass:"img-box"},[i("el-form-item",{attrs:{label:"图片","label-width":"80px"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"#","show-file-list":!1,"on-change":t.changImg}},[t.imageUrl?i("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1):t._e(),t._v(" "),i("el-form-item",{attrs:{label:"状态","label-width":"80px"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.confirm("form")}}},[t._v("确 定")]):i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.update("form")}}},[t._v("修改")])],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(t){i("GFIO")},"data-v-98966b3a",null).exports,d={components:{},data:function(){return{}},computed:n()({},Object(s.c)({list:"sort/list"})),methods:n()({},Object(s.b)({requestList:"sort/requestList"}),{edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;Object(r.M)({id:t}).then(function(t){200==t.data.code?(Object(o.a)(t.data.msg),e.requestList()):Object(o.b)(t.data.msg)})}}),mounted:function(){this.requestList()}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},[i("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:"","tree-props":{children:"children"}}},[i("el-table-column",{attrs:{prop:"id",label:"分类编号",sortable:"",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"catename",label:"分类名称",sortable:"",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"icon",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("img",{staticClass:"img",attrs:{src:t.$preImg+e.row.img,alt:""}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?i("el-button",{attrs:{type:"primary"}},[t._v("启用")]):i("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),i("del-btn",{on:{confirm:function(i){return t.del(e.row.id)}}})]}}])})],1)],1)},staticRenderFns:[]};var m={components:{vAdd:u,vList:i("VU/8")(d,f,!1,function(t){i("+vpc")},"data-v-72e18f36",null).exports},data:function(){return{info:{show:!1,title:"菜单添加",isAdd:!0}}},methods:{add:function(){this.info.show=!0,this.info.title="菜单添加",this.info.isAdd=!0},edit:function(t){this.info.show=!0,this.info.title="菜单修改",this.info.isAdd=!1,this.$refs.add.getDetail(t)}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu"},[e("el-button",{attrs:{type:"primary",round:""},on:{click:this.add}},[this._v("添加")]),this._v(" "),e("v-add",{ref:"add",attrs:{info:this.info}}),this._v(" "),e("v-list",{on:{edit:this.edit}})],1)},staticRenderFns:[]};var b=i("VU/8")(m,p,!1,function(t){i("SDMS")},"data-v-31dcf49c",null);e.default=b.exports}});
//# sourceMappingURL=5.0014c2374afda35fef13.js.map