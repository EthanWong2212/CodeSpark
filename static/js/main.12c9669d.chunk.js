/*! For license information please see main.12c9669d.chunk.js.LICENSE.txt */
(this.webpackJsonpcodesparks=this.webpackJsonpcodesparks||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var _=a(0),n=a.n(_),r=a(20),l=a.n(r),c=a(19),o=(a(79),a(5)),s=a(6),i=a(8),u=a(7),m=a(40),E=a.n(m),p=a(55),d=a.n(p),b=a(56),h=a.n(b),O=(a(80),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var _=arguments.length,n=new Array(_),r=0;r<_;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={img:E.a},e.logostyle={width:"30%",height:"auto",display:"inline-block"},e.welcomestyle={width:"70%",height:"auto",display:"inline-block"},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Head",style:{backgroundColor:"#ff9d00"}},n.a.createElement(c.b,{to:"/"},n.a.createElement("img",{style:this.logostyle,src:this.state.img,onMouseEnter:function(){e.setState({img:d.a})},onMouseOut:function(){e.setState({img:E.a})}})),n.a.createElement("img",{style:this.welcomestyle,src:h.a}))}}]),a}(_.Component)),P=(a(85),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("ul",{className:"navbar"},n.a.createElement(c.b,{to:"/"},n.a.createElement("li",null,n.a.createElement("a",null,"Home"))),n.a.createElement(c.b,{to:"/curriculum"},n.a.createElement("li",null," ",n.a.createElement("a",null,"Curriculum"))),n.a.createElement(c.b,{to:"/overview"},n.a.createElement("li",null,n.a.createElement("a",null,"Overview"))),n.a.createElement(c.b,{to:"/about"},n.a.createElement("li",null,n.a.createElement("a",null,"About")))))}}]),a}(_.Component)),D=a(4),f=a(24),M=a(58),y=a.n(M),w=a(43),C=a.n(w),k=(a(86),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var _;return Object(o.a)(this,a),(_=t.call(this,e)).state={nextIcon:n.a.createElement("span",{className:"carousel-control-next-icon"}),prevIcon:n.a.createElement("span",{className:"carousel-control-prev-icon"}),interval:2e3},_}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(f.a,{className:"carousel_container",interval:this.state.interval,nextIcon:this.state.nextIcon,prevIcon:this.state.prevIcon},n.a.createElement(f.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:y.a}),n.a.createElement(f.a.Caption,null,n.a.createElement("h1",null," Games"))),n.a.createElement(f.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:C.a}),n.a.createElement(f.a.Caption,null,n.a.createElement("h1",null," Lessons"))),n.a.createElement(f.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:C.a}),n.a.createElement(f.a.Caption,null,n.a.createElement("h1",null," Projects"))))}}]),a}(_.Component)),g=a(60),v=a.n(g);a(87);var L=function(){return n.a.createElement("div",null,n.a.createElement("img",{className:"Headergif",src:v.a}),n.a.createElement("div",{className:"main_comp"},n.a.createElement(k,null)))},B=a(61),I=a.n(B);var U=function(){return n.a.createElement("img",{className:"Headergif",src:I.a})},T=a(62),W=a.n(T),R=a(39),A=a(23),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var _;return Object(o.a)(this,a),(_=t.call(this)).lesson=e,_}return Object(s.a)(a,[{key:"chooselink",value:function(){switch(this.lesson){case"Functions":return"https://www.youtube.com/watch?v=lDK9QqIzhwk";case"Loops":return"https://www.youtube.com/watch?v=1WMWw5iC3Tk";case"Conditions":return"https://www.youtube.com/watch?v=HK7SPnGSxLM";default:return"https://www.youtube.com/watch?v=bu7nU9Mhpyo"}}}]),a}(_.Component),j=a(64),x=a.n(j),q=a(65),S=a.n(q),N=a(66),G=a.n(N),H=a(67),F=a.n(H),J=a(68),X=a.n(J),z=a(44),Q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){switch(console.log(this.props.lesson),this.props.lesson){case"Intro":return n.a.createElement(z.a,null);case"Loops":return n.a.createElement(R.a,null);default:return n.a.createElement(z.a,null)}}}]),a}(_.Component),V=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var _=arguments.length,n=new Array(_),r=0;r<_;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedContent:"Intro",videoLink:""},e.handleSelect=function(t){e.setState({selectedContent:t})},e}return Object(s.a)(a,[{key:"render",value:function(){console.log(this.state.selectedContent);var e=new K(this.state.selectedContent);return n.a.createElement("div",null,n.a.createElement("img",{className:"Headergif",src:W.a}),n.a.createElement("h1",{className:"Intro"},"This is where you will start your coding journey!"),n.a.createElement("div",{className:"pick_chap_cont"},n.a.createElement("img",{src:G.a}),n.a.createElement("div",{className:"chap_dropdown"},n.a.createElement(A.a,{onSelect:this.handleSelect},n.a.createElement(A.a.Toggle,{variant:"success",id:"dropdown-basic"},this.state.selectedContent),n.a.createElement(A.a.Menu,null,n.a.createElement(A.a.Item,{eventKey:"Intro"},"Intro"),n.a.createElement(A.a.Item,{eventKey:"Functions"},"Functions"),n.a.createElement(A.a.Item,{eventKey:"Loops"},"Loops"),n.a.createElement(A.a.Item,{eventKey:"Conditions"},"Conditions"))))),n.a.createElement("img",{className:"curr_cont",src:F.a}),n.a.createElement("div",{className:"main_comp"},n.a.createElement("div",{className:"youtubebg_cont"},n.a.createElement("img",{src:S.a}),n.a.createElement("div",{className:"youtube_cont"},n.a.createElement(x.a,{className:"video",width:"100%",height:"100%",controls:!0,url:e.chooselink()}))),n.a.createElement("div",{classNaame:"gamebg_cont"},n.a.createElement("img",{className:"curr_cont",src:X.a})),n.a.createElement(Q,{lesson:this.state.selectedContent})))}}]),a}(_.Component),Y=a(70),Z=a.n(Y);var $=function(){return n.a.createElement("div",null,n.a.createElement("img",{className:"Headergif",src:Z.a}),n.a.createElement("h1",null,"Basic concepts"),n.a.createElement("h2",null,"What is Python?"),n.a.createElement("p",null,"Python is a high-level programming language with applications in numerous areas such as artificial intelligence. Basically, programming languages are ways to communicate with computers by giving them a set of instruction to follow.",n.a.createElement("br",null),"Python is one of them and given its easy-to-understand syntaxes, it makes it easier to pick it up."),n.a.createElement("h2",null,"Installing Python"),n.a.createElement("p",null,"Head over to https://www.python.org/downloads/ and download the latest version of Python. Next, head over to https://www.jetbrains.com/pycharm/ and download the latest version of PyCharm. PyCharm is a Integrated Development Environment (IDE) in short which is a space for you to edit and test your written code."),n.a.createElement("h2",null,"First Program"),n.a.createElement("p",null,"Let\u2019s start off by creating a short program that displays \u201cHello world!\u201d. In PyCharm,",n.a.createElement("br",null),"type >>>print(\u201cHello world!\u201d)",n.a.createElement("br",null),"Do note that you do not type >>> into the code and the >>> symbol is there for you to see what to type into PyCharm.",n.a.createElement("br",null),"The print statement is used to output lines of text back to the user.",n.a.createElement("br",null),"Run the program.",n.a.createElement("br",null),"Congratulations, you have written your first program."),n.a.createElement("h2",null,"Simple math operations"),n.a.createElement("p",null,"Python can carry out calculations. ",n.a.createElement("br",null),"Addition +",n.a.createElement("br",null),"Subtraction \u2013 ",n.a.createElement("br",null),"Multiply *",n.a.createElement("br",null),"Divide /",n.a.createElement("br",null),"Use () for the operation to carry out first",n.a.createElement("br",null),"Try these lines of codes. ",n.a.createElement("br",null),">>>2+2",n.a.createElement("br",null),"4",n.a.createElement("br",null),">>>5 + 4 \u2013 3",n.a.createElement("br",null),"6",n.a.createElement("br",null),">>>2*(1+4) ",n.a.createElement("br",null),"10",n.a.createElement("br",null),">>> 10/2",n.a.createElement("br",null),"5.0",n.a.createElement("br",null),"Putting minus sign in front of a number indicates that it is a negative number. Relevant operations are then performed on the negative numbers. ",n.a.createElement("br",null),">>> -2",n.a.createElement("br",null),"-2",n.a.createElement("br",null),">>>(-7 + 1) *(-4) ",n.a.createElement("br",null),"24",n.a.createElement("br",null)),n.a.createElement("h2",null,"Basic data types and variables"),n.a.createElement("p",null,"Variables are used store data in the form of an integer, float, string or Boolean data. ",n.a.createElement("br",null),"Integer (int) is used to represent whole numbers",n.a.createElement("br",null),"Float is used to represent numbers specified with a decimal point. ",n.a.createElement("br",null),"Strings (str) are sequences of character data. ",n.a.createElement("br",null),"Boolean(bool) can only hold two values, True or False",n.a.createElement("br",null)),n.a.createElement("h2",null,"Taking inputs from user"),n.a.createElement("p",null,"To get input from user in Python, you can use the built-in input function. The function will prompt the user for an input and return what the user has entered as a string. ",n.a.createElement("br",null),">>>input(\u201cEnter anything:\u201d) ",n.a.createElement("br",null),"Enter anything: This is what the user entered! ",n.a.createElement("br",null),"\u2018This is what the user entered!\u2019"),n.a.createElement("h3",null,"If statements"),n.a.createElement("p",null,"Python uses Boolean variables to evaluate conditions. Just like how a human make decision, the computer \u201cthinks\u201d and makes the decision. If the condition is true, the relevant code will run. ",n.a.createElement("br",null),">>> name = \u201cBryan\u201d ",n.a.createElement("br",null),">>> age = 12",n.a.createElement("br",null),">>>if name == \u201cBryan\u201d and age == 12: ",n.a.createElement("br",null),">>>  print(\u201cYour name is Bryan and your age is 12) ",n.a.createElement("br",null),"Note that the statement below will only run if the condition is true."),n.a.createElement("h2",null,"For loops"),n.a.createElement("p",null,"For loops repeats itself in a sequence. This is called iteration. ",n.a.createElement("br",null),">>>numbers = [1,2,3,4,5] ",n.a.createElement("br",null),">>>for number in numbers: ",n.a.createElement("br",null),">>>  Print(number) ",n.a.createElement("br",null),"The numbers 1,2,3,4,5 will then be printed in that order"),n.a.createElement("h2",null,"While loops"),n.a.createElement("p",null,"While loops repeat itself as long as the condition is met. ",n.a.createElement("br",null),">>> count = 0",n.a.createElement("br",null),">>>while count "," 5: ",n.a.createElement("br",null),">>>  print(Count) ",n.a.createElement("br",null),">>>  count = count + 1 //This will allow the count to increase from 0 to 4"),n.a.createElement("h2",null,"Functions"),n.a.createElement("p",null,"Functions are a way to make your code appear neater. It allows us to reuse this function when needed to as well. ",n.a.createElement("br",null),">>>def sayHello(name,age): ",n.a.createElement("br",null),">>>  print(\u201cHello\u201d + name + \u201c, you are \u201d + age) ",n.a.createElement("br",null),">>>sayHello(\u201cBryan\u201d,\u201d12\u201d) ",n.a.createElement("br",null),"Hello Bryan, you are 12 will be printed out."),n.a.createElement("h2",null,"List"),n.a.createElement("p",null,"The list is a useful to store data. It is created using square brackets with comma separating each item. ",n.a.createElement("br",null),">>> numbers = [1 , 3, 4, 10] ",n.a.createElement("br",null),">>>print(numbers[2]) ",n.a.createElement("br",null),"Do take note that the zeroth index refers to the first element in this case 1. Hence, the number four will be printed out."))},ee=a(71),te=function(e){var t=e.title;return n.a.createElement(ee.a,null,n.a.createElement("title",null,t||"Codespark"))},ae=function(e){var t=e.page,a=e.title;return function(e){Object(i.a)(r,e);var _=Object(u.a)(r);function r(){return Object(o.a)(this,r),_.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(te,{title:a}),n.a.createElement(t,this.props))}}]),r}(n.a.Component)},_e=ae({page:L,title:"CS-Home"}),ne=ae({page:U,title:"CS-About"}),re=ae({page:V,title:"CS-Curriculum"}),le=ae({page:$,title:"CS-Overview"});var ce=function(){return n.a.createElement(D.a,null,n.a.createElement(D.c,null,n.a.createElement(D.a,{path:"/",exact:!0,component:_e}),n.a.createElement(D.a,{path:"/about",component:ne}),n.a.createElement(D.a,{path:"/curriculum",component:re}),n.a.createElement(D.a,{path:"/overview",component:le})))};a(114);var oe=function(){return n.a.createElement("div",null,n.a.createElement(c.a,{basename:"/"},n.a.createElement("div",null,n.a.createElement(O,null)),n.a.createElement(P,null),n.a.createElement("div",{className:"rest"},n.a.createElement(ce,null))))};l.a.render(n.a.createElement(oe,null),document.getElementById("root"))},12:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"d",(function(){return h})),a.d(t,"b",(function(){return O})),a.d(t,"c",(function(){return P}));var _=a(22),n=a(0),r=a.n(n),l=a(73),c=a(5),o=a(6),s=a(8),i=a(7),u=(a(91),a(9)),m=a.n(u),E=a(63),p=a.n(E);a(93);m.a.setLocale(p.a);var d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var _;return Object(c.a)(this,a),(_=t.call(this,e)).blocklyDiv=r.a.createRef(),_.toolbox=r.a.createRef(),_}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialXml,a=(e.children,Object(_.a)(e,["initialXml","children"]));this.primaryWorkspace=m.a.inject(this.blocklyDiv.current,Object(l.a)({toolbox:this.toolbox.current},a)),t&&m.a.Xml.domToWorkspace(m.a.Xml.textToDom(t),this.primaryWorkspace)}},{key:"setXml",value:function(e){m.a.Xml.domToWorkspace(m.a.Xml.textToDom(e),this.primaryWorkspace)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:this.blocklyDiv,id:"blocklyDiv"}),r.a.createElement("xml",{xmlns:"https://developers.google.com/blockly/xml",is:"blockly",style:{display:"none"},ref:this.toolbox},e))}},{key:"workspace",get:function(){return this.primaryWorkspace}}]),a}(r.a.Component),b=(t.e=d,function(e){var t=e.children,a=Object(_.a)(e,["children"]);return a.is="blockly",r.a.createElement("block",a,t)}),h=function(e){var t=e.children,a=Object(_.a)(e,["children"]);return a.is="blockly",r.a.createElement("value",a,t)},O=function(e){var t=e.children,a=Object(_.a)(e,["children"]);return a.is="blockly",r.a.createElement("field",a,t)},P=function(e){var t=e.children,a=Object(_.a)(e,["children"]);return a.is="blockly",r.a.createElement("shadow",a,t)}},39:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(28),react_unity_webgl__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__),_Blockly__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(12),blockly_javascript__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(30),blockly_javascript__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(blockly_javascript__WEBPACK_IMPORTED_MODULE_7__),_customblocks_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(50),_JsGenerator_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(51),_Game_css__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(52),_Game_css__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_Game_css__WEBPACK_IMPORTED_MODULE_10__),Loop=function(_Component){Object(_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Loop,_Component);var _super=Object(_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Loop);function Loop(props){var _this;return Object(_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Loop),_this=_super.call(this,props),_this.runCode=function(){var code=blockly_javascript__WEBPACK_IMPORTED_MODULE_7___default.a.workspaceToCode(_this.simpleWorkspace.workspace);code+="this.unityContent.send('Player','ArrList_Arr');",eval(code)},_this.simpleWorkspace=react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(),_this.unityContent=new react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__.UnityContent("Games/Game_loop/Build/Game_loop.json","Games/Game_loop/Build/UnityLoader.js"),_this}return Object(_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Loop,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"GameWrapper"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.e,{ref:this.simpleWorkspace,readOnly:!1,trashcan:!0,media:"media/",move:{scrollbars:!0,drag:!0,wheel:!0},initialXml:'\n                        <xml xmlns="http://www.w3.org/1999/xhtml">\n                        </xml>\n                    '},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"controls_repeat_ext"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.d,{name:"TIMES"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.c,{type:"math_number"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.b,{name:"NUM"},"10")))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"controls_if"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"Up"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"Down"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"Left"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"Right"})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"game"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_unity_webgl__WEBPACK_IMPORTED_MODULE_5___default.a,{unityContent:this.unityContent,height:"300px",width:"400px"})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{onClick:this.runCode.bind(this)},"Run")))}}]),Loop}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Loop},40:function(e,t,a){e.exports=a.p+"static/media/Logo.106ee390.jpeg"},43:function(e,t,a){e.exports=a.p+"static/media/Lessons.6df1d1bd.png"},44:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(28),react_unity_webgl__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__),_Blockly__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(12),blockly_javascript__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(30),blockly_javascript__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(blockly_javascript__WEBPACK_IMPORTED_MODULE_7__),_customblocks_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(50),_JsGenerator_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(51),_Game_css__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(52),_Game_css__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_Game_css__WEBPACK_IMPORTED_MODULE_10__),Loop=function(_Component){Object(_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Loop,_Component);var _super=Object(_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Loop);function Loop(props){var _this;return Object(_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Loop),_this=_super.call(this,props),_this.runCode=function(){var code=blockly_javascript__WEBPACK_IMPORTED_MODULE_7___default.a.workspaceToCode(_this.simpleWorkspace.workspace);code+="this.unityContent.send('Player','ArrList_Arr');",eval(code)},_this.simpleWorkspace=react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef(),_this.unityContent=new react_unity_webgl__WEBPACK_IMPORTED_MODULE_5__.UnityContent("Games/Orbital_web3/Build/Orbital_web3.json","Games/Orbital_web3/Build/UnityLoader.js"),_this}return Object(_Users_wong_codesparks_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Loop,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"GameWrapper"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.e,{ref:this.simpleWorkspace,readOnly:!1,trashcan:!0,media:"media/",move:{scrollbars:!0,drag:!0,wheel:!0},initialXml:'\n                        <xml xmlns="http://www.w3.org/1999/xhtml">\n                        </xml>\n                    '},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"Up"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"Down"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"Left"}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blockly__WEBPACK_IMPORTED_MODULE_6__.a,{type:"Right"})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"game"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_unity_webgl__WEBPACK_IMPORTED_MODULE_5___default.a,{unityContent:this.unityContent,height:"300px",width:"400px"})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{onClick:this.runCode.bind(this)},"Run")))}}]),Loop}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Loop},50:function(e,t,a){"use strict";var _=a(9),n={type:"Up",message0:"Up",previousStatement:null,nextStatement:null,colour:230},r={type:"Down",message0:"Down",previousStatement:null,nextStatement:null,colour:230},l={type:"Left",message0:"Left",previousStatement:null,nextStatement:null,colour:230},c={type:"Right",message0:"Right",previousStatement:null,nextStatement:null,colour:230};_.Blocks.Up={init:function(){this.jsonInit(n)}},_.Blocks.Down={init:function(){this.jsonInit(r)}},_.Blocks.Left={init:function(){this.jsonInit(l)}},_.Blocks.Right={init:function(){this.jsonInit(c)}}},51:function(e,t,a){"use strict";var _=a(9);a(30);_.JavaScript.Up=function(){return"this.unityContent.send('Player','appendArrList', 'Up');\n"},_.JavaScript.Down=function(){return"this.unityContent.send('Player','appendArrList', 'Down');\n"},_.JavaScript.Left=function(){return"this.unityContent.send('Player','appendArrList', 'Left');\n"},_.JavaScript.Right=function(){return"this.unityContent.send('Player','appendArrList', 'Right');\n"}},52:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/Logo_light.855ad002.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/Welcome.2bb36a8a.png"},58:function(e,t,a){e.exports=a.p+"static/media/Games.922048f3.JPG"},60:function(e,t,a){e.exports=a.p+"static/media/Home.4c232f75.png"},61:function(e,t,a){e.exports=a.p+"static/media/About.2850ed08.gif"},62:function(e,t,a){e.exports=a.p+"static/media/Curriculum.db9648b4.png"},65:function(e,t,a){e.exports=a.p+"static/media/youtube_bg2.2bbe89dd.png"},66:function(e,t,a){e.exports=a.p+"static/media/Pick_chap.182460dd.png"},67:function(e,t,a){e.exports=a.p+"static/media/Lesson_head.ad443f3e.png"},68:function(e,t,a){e.exports=a.p+"static/media/Game_head.d9915599.png"},70:function(e,t,a){e.exports=a.p+"static/media/Overview.c910ff4f.gif"},74:function(e,t,a){e.exports=a(115)},80:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},91:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.12c9669d.chunk.js.map