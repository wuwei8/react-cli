(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{507:function(t,e,a){"use strict";a.r(e);var n=a(121),l=a(66),c=a(67),r=a(69),i=a(68),o=a(70),s=a(1),u=a.n(s),b=a(50),h=a(88),m=a(671),p=a(119),E=m.a.TabPane,d=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(r.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).state={date:new Date,tabList:[{label:"tab1",content:"aaaa"},{label:"tab2",content:"bbb"},{label:"tab3",content:"ccc"}]},a.TabPanes=a.state.tabList.map(function(t,e){return u.a.createElement(E,{tab:t.label,key:e+1},t.content)}),a.button=a.state.tabList.length>4?u.a.createElement("p",null,"\u5927\u4e8e4\u6761"):3===a.state.tabList.length?u.a.createElement("p",null,"3\u6761\u6570\u636e"):u.a.createElement("p",null,"3\u6761\u4ee5\u5185"),a}return Object(o.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props),this.timerID=setInterval(function(){return t.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return u.a.createElement("div",{id:"test-container"},"\u5f53\u524d\u8def\u7531\uff1a",this.props.location.pathname,u.a.createElement("h2",null,"It is ",this.state.date.toLocaleTimeString(),"."),this.button,this.state.tabList.length>4&&u.a.createElement("h2",null,"You have ",this.state.tabList.length," unread messages."),this.state.tabList.length>4?u.a.createElement("p",null,"\u5927\u4e8e4\u6761"):u.a.createElement("p",null,"4\u6761\u4ee5\u5185"),u.a.createElement("div",null,u.a.createElement("h1",null,"doc\u7ec4\u4ef6"),u.a.createElement(b.a,{message:function(t){return"Are you sure you want to go to ".concat(t.pathname)}})),u.a.createElement("li",null,u.a.createElement(h.b,{to:"/"},"\u6587\u6863\u4e2d\u5fc3")),u.a.createElement(m.a,{type:"card"},this.TabPanes))}}]),e}(s.Component);e.default=Object(p.b)(function(t){return Object(n.a)({},t.pageTitle)})(d)}}]);
//# sourceMappingURL=10.1d6df184.chunk.js.map