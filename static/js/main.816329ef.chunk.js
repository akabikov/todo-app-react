(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),s=(a(17),a(5)),c=a(11),d=a(1),l=a(2),u=a(4),m=a(3),p=a(10),f=(a(20),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={editedTask:e.props.task,isEditMode:!1},e.handleComplete=function(){e.props.completeHandler(e.props.id)},e.handleRemove=function(t){t.preventDefault(),e.props.removeHandler(e.props.id)},e.handleEditMode=function(t){t.preventDefault(),e.setState({isEditMode:!0})},e.handleEdited=function(t){t.preventDefault();var a=e.state.editedTask;e.props.editHandler(e.props.id,a),e.setState({isEditMode:!1})},e.handleChange=function(t){e.setState({editedTask:t.target.value})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.task,n=e.isCompleted,r=this.state,i=r.isEditMode,s=r.editedTask,c=o.a.createElement("form",{className:"todo edit",onSubmit:this.handleEdited},o.a.createElement("input",{type:"text",name:"TaskEdit",value:s,autoFocus:!0,onChange:this.handleChange}),o.a.createElement("button",{type:"submit",title:"Save"},o.a.createElement("i",{className:"far fa-save"}))),d=o.a.createElement("div",{className:"todo"},o.a.createElement("input",{type:"checkbox",id:t,checked:n,onChange:this.handleComplete}),o.a.createElement("label",{htmlFor:t},a),o.a.createElement("button",{title:"Edit",onClick:this.handleEditMode},o.a.createElement("i",{className:"far fa-edit"})),o.a.createElement("button",{title:"Remove",onClick:this.handleRemove},o.a.createElement("i",{className:"far fa-trash-alt"})));return o.a.createElement("li",null,i?c:d)}}]),a}(o.a.Component)),h=(a(21),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={task:""},e.handleSubmit=function(t){t.preventDefault();var a=e.state.task;""!==a&&(e.props.submitHandler(a),e.setState({task:""}))},e.handleChange=function(t){e.setState({task:t.target.value})},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",id:"newTodo",placeholder:"New ToDo...",value:this.state.task,onChange:this.handleChange}),o.a.createElement("button",{type:"submit",title:"Add new ToDo"},o.a.createElement("i",{className:"fas fa-plus"})))}}]),a}(o.a.Component)),v=(a(22),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:e.readStorage()||[]},e.updateStorage=function(){localStorage.setItem("todos",JSON.stringify(e.state.todos))},e.addTodo=function(t){var a={id:Object(p.v4)(),task:t,isCompleted:!1};e.setState((function(e){return{todos:[].concat(Object(c.a)(e.todos),[a])}}),e.updateStorage)},e.compliteTodo=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(s.a)({},e,{isCompleted:!e.isCompleted}):e}))}}),e.updateStorage)},e.editTodo=function(t,a){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(s.a)({},e,{task:a}):e}))}}),e.updateStorage)},e.removeTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}),e.updateStorage)},e}return Object(l.a)(a,[{key:"readStorage",value:function(){return JSON.parse(localStorage.getItem("todos"))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){var a=t.id,n=t.task,r=t.isCompleted;return o.a.createElement(f,{key:a,id:a,task:n,isCompleted:r,completeHandler:e.compliteTodo,editHandler:e.editTodo,removeHandler:e.removeTodo})}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("ul",{className:"list"},t),o.a.createElement(h,{submitHandler:this.addTodo}))}}]),a}(o.a.Component));a(23);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.816329ef.chunk.js.map