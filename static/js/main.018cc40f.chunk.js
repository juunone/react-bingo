(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(15),i=n.n(r),c=n(1),u=n(2),s=n(5),o=n(3),d=n(6),f=(n(22),n(4)),h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"_selectPlate",value:function(e,t,n,l){if(!0===l)return alert("\uc774\ubbf8 \uc120\ud0dd\ub41c \uc601\uc5ed\uc785\ub2c8\ub2e4.");if("leftCount"===n){if(this.props.leftCount>this.props.rightCount)return alert("\uc798\ubabb\ub41c \ucc28\ub840\uc785\ub2c8\ub2e4.")}else if("rightCount"===n&&this.props.leftCount<this.props.rightCount)return alert("\uc798\ubabb\ub41c \ucc28\ub840\uc785\ub2c8\ub2e4.");this.props._handleSelectPlate(e,t,n)}},{key:"_makePlate",value:function(e,t){var n=this;if(e.length){for(var l=[],r=[],i=function(i){(i+1)%5===0?(r.push(a.a.createElement("li",{className:e[i].is_selected?"selected":void 0,key:e[i].value,onClick:function(){e[i].is_selected?n._selectPlate(i,e[i].value,t,!0):n._selectPlate(i,e[i].value,t,!1)}},e[i].value)),l.push(a.a.createElement("ul",{key:i},r)),r=[]):r.push(a.a.createElement("li",{className:e[i].is_selected?"selected":void 0,key:e[i].value,onClick:function(){e[i].is_selected?n._selectPlate(i,e[i].value,t,!0):n._selectPlate(i,e[i].value,t,!1)}},e[i].value))},c=0;c<e.length;c++)i(c);return l}}},{key:"render",value:function(){return a.a.createElement(l.Fragment,null,a.a.createElement("main",null,!1===this.props.is_start?a.a.createElement("section",null,a.a.createElement("p",null,"\uac8c\uc784\uc744 \uc2dc\uc791\ud574\uc8fc\uc138\uc694")):a.a.createElement(l.Fragment,null,a.a.createElement("section",{className:"plate"},a.a.createElement("h3",null,"Left"),this._makePlate(this.props.left,"leftCount")),a.a.createElement("section",{className:"plate"},a.a.createElement("h3",null,"Right"),this._makePlate(this.props.right,"rightCount")))))}}]),t}(l.Component),v=Object(f.b)(function(e){var t={};for(var n in e.bingoReducer)e.bingoReducer.hasOwnProperty(n)&&(Object.keys(e.bingoReducer[n]).length?t[n]=e.bingoReducer[n]?e.bingoReducer[n]:{}:t[n]=e.bingoReducer[n]);return t},function(e){return{_handleSelectPlate:function(t,n,l){e(function(e,t,n){return{type:"SELECT",idx:e,value:t,key:n}}(t,n,l))}}})(h),_=function(e){function t(){var e,n;Object(c.a)(this,t);for(var l=arguments.length,a=new Array(l),r=0;r<l;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a))))._startGame=function(e){n.props._handleStartGame(e)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(l.Fragment,null,a.a.createElement("header",null,a.a.createElement("button",{className:!0!==this.props.is_start?"game__start":"game__restart",onClick:function(){e._startGame(!0)}},!0!==this.props.is_start?"\uac8c\uc784 \uc2dc\uc791":"\uac8c\uc784 \uc7ac\uc2dc\uc791")))}}]),t}(l.Component),p=Object(f.b)(function(e){var t={};for(var n in e.bingoReducer)e.bingoReducer.hasOwnProperty(n)&&(Object.keys(e.bingoReducer[n]).length?t[n]=e.bingoReducer[n]?e.bingoReducer[n]:{}:t[n]=e.bingoReducer[n]);return t},function(e){return{_handleStartGame:function(t){e(function(e){return{type:"START",is_start:e}}(t))}}})(_),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(l.Fragment,null,a.a.createElement(p,null),a.a.createElement(v,null))}}]),t}(l.Component),b=Object(f.b)(function(e){var t={};for(var n in e.bingoReducer)e.bingoReducer.hasOwnProperty(n)&&(Object.keys(e.bingoReducer[n]).length?t[n]=e.bingoReducer[n]?e.bingoReducer[n]:{}:t[n]=e.bingoReducer[n]);return t},function(e){return{}})(g),m=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(l.Fragment,null,a.a.createElement(b,null))}}]),t}(l.Component),O=n(7),y={is_start:!1,left:[],leftCount:0,right:[],rightCount:0,origin:[{value:0,is_selected:!1},{value:1,is_selected:!1},{value:2,is_selected:!1},{value:3,is_selected:!1},{value:4,is_selected:!1},{value:5,is_selected:!1},{value:6,is_selected:!1},{value:7,is_selected:!1},{value:8,is_selected:!1},{value:9,is_selected:!1},{value:10,is_selected:!1},{value:11,is_selected:!1},{value:12,is_selected:!1},{value:13,is_selected:!1},{value:14,is_selected:!1},{value:15,is_selected:!1},{value:16,is_selected:!1},{value:17,is_selected:!1},{value:18,is_selected:!1},{value:19,is_selected:!1},{value:20,is_selected:!1},{value:21,is_selected:!1},{value:22,is_selected:!1},{value:23,is_selected:!1},{value:24,is_selected:!1}]},E=function(e){return void 0!==e&&null!==e?JSON.parse(JSON.stringify(e)):null},j=Object(O.c)({bingoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT":var n=E(e);return-1!==t.key.indexOf("left")?(n.left[t.idx].is_selected=!0,n.right.forEach(function(e){e.value===t.value&&(e.is_selected=!0)})):(n.right[t.idx].is_selected=!0,n.left.forEach(function(e){e.value===t.value&&(e.is_selected=!0)})),n[t.key]=n[t.key]+1,n;case"START":var l=E(e),a=function(e){var t=function(e){if(e<=1)return 0;for(var t=1,n=0;;)if(t*=2,n=2*n+Math.floor(2*Math.random()),t>=e){if(n<e)return n;t-=e,n-=e}}(e.length),n=[],l=[],a=[];return l=l.concat(e.slice(t,e.length),e.slice(0,t)),a=a.concat(l.slice(t,l.length),l.slice(0,t)),n.push(l,a),n}(l.origin);return l.is_start=t.is_start,l.left=a[0],l.right=a[1],l.leftCount=0,l.rightCount=0,l;default:return e}}});i.a.render(a.a.createElement(f.a,{store:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=[];if(window.location&&window.location.host&&-1!==window.location.host.indexOf("localhost")){var t=n(27).logger;e.push(t)}return Object(O.d)(j,O.a.apply(void 0,e))}()},a.a.createElement(m,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.018cc40f.chunk.js.map