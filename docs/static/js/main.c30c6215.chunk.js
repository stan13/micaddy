(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(40),o=n.n(l),c=(n(79),n(6)),s=n(12),i=n(11),u=n(9),d=n(10),m=(n(81),n(72)),h=n(26),p=n(73),E=n(41),f=n.n(E),b=n(65),v=n(66),g=n.n(v),w=n(67),y=n(70),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).sendAudioAndReset=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.sendAudio(n.props.transcript);case 2:n.props.resetTranscript();case 3:case"end":return e.stop()}},e,this)})),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.transcript;e.resetTranscript;return e.browserSupportsSpeechRecognition?r.a.createElement("div",null,r.a.createElement(w.a,{bsStyle:"primary",onClick:this.sendAudioAndReset},r.a.createElement(y.a,{glyph:"arrow-right"})),r.a.createElement("div",null,r.a.createElement("span",null,t))):null}}]),t}(a.Component),O=g()(x),j=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).sendToDialogFlow=function(e){n.state.client.textRequest(e).then(function(e){if(console.log(e),"Enter Score"===e.result.metadata.intentName){var t=e.result.parameters.holeNumber;t||(t=n.getNextIndex()+1,console.log(t));var a=e.result.parameters.shots,r=e.result.parameters.ScorePhrase;n.setScore(Number(t),a,r)}}).catch(function(e){console.log(e)})},n.getNextIndex=function(){return n.state.holes.indexOf(n.state.holes.find(function(e){return!e.score}))},n.setScore=function(e,t,a){var r=n.state.holes.slice(0,e-1),l=n.state.holes.slice(e-1,e),o=n.state.holes.slice(e,n.state.holes.length);a?l[0].score=l[0].par+Number(a):t&&(l[0].score=t);var c=r.concat(l).concat(o);console.log(c),n.setState({holes:c})},n.shotTotal=function(){return n.state.holes.map(function(e){return e.score}).reduce(function(e,t){return Number(e)+Number(t)})};for(var a=[9,3,4,5,8,7,1,6,2],r=[],l=0;l<9;l++)r.push({hole:l+1,score:null,par:0===l||5===l?3:6===l||2===l?5:4,idx:a[l]});var o=new p.a({accessToken:"7b63687e42d648798dc229503c1e8b2b"});return console.log(o.getApiVersion()),n.state={holes:r,client:o},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{height:"100%",width:"100%",display:"table",position:"absolute",top:0,left:0}},r.a.createElement("div",{style:{display:"table-cell",verticalAlign:"middle"}},r.a.createElement(h.a,{bsStyle:"primary",style:{maxWidth:"400px",verticalAlign:"middle",margin:"auto"}},r.a.createElement(h.a.Heading,null,r.a.createElement(h.a.Title,{componentClass:"h3"},"Scorecard")),r.a.createElement(h.a.Body,null,r.a.createElement(m.a,{striped:!0,bordered:!0,condensed:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Hole"),r.a.createElement("th",null,"Par"),r.a.createElement("th",null,"Index"),r.a.createElement("th",null,"Player 1"))),r.a.createElement("tbody",null,this.state.holes.map(function(e){return r.a.createElement("tr",{key:e.hole},r.a.createElement("td",null,e.hole),r.a.createElement("td",null,e.par),r.a.createElement("td",null,e.idx),r.a.createElement("td",null,e.score))}),r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,this.shotTotal())))))),r.a.createElement(O,{sendAudio:this.sendToDialogFlow})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,n){e.exports=n(154)},79:function(e,t,n){},81:function(e,t,n){}},[[74,2,1]]]);
//# sourceMappingURL=main.c30c6215.chunk.js.map