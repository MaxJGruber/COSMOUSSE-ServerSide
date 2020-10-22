(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,t,a){},136:function(e,t,a){},155:function(e,t,a){e.exports=a(194)},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),c=a.n(o),i=a(7),l=a(11),s=a(12),m=a(15),u=a(14),p=a(49),d=a.n(p),h=d.a.create({baseURL:"https://cosmousse.herokuapp.com/api",withCredentials:!0});function g(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var f=function(e){return h.post("/auth/signup",e).then((function(e){return e.data})).catch(g)},E=function(e){return h.post("/auth/signin",e).then((function(e){return e.data})).catch(g)},b=function(){return h.get("/auth/isLoggedIn").then((function(e){return e.data})).catch(g)},v=function(){return h.get("/auth/logout").then((function(e){return e.data})).catch(g)},y=function(e){return h.get(e).then((function(e){return e.data})).catch(g)},C=function(e){return h.get(e).then((function(e){return e.data})).catch(g)},N=function(e,t){return h.patch(e,t).then((function(e){return e.data})).catch(g)},j=function(e){return h.delete(e).then((function(e){return e.data})).catch(g)},k=function(e,t){return h.post(e,t).then((function(e){return e.data})).catch(g)},I=function(e){return h.delete(e).then((function(e){return e.data})).catch(g)},O=function(e,t){return h.patch(e,t).then((function(e){return e.data})).catch(g)},x=r.a.createContext(),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return r.a.createElement(x.Provider,{value:e},this.props.children)}}]),a}(n.Component),w=a(16),F=a(75),L=a(72),A=a(220),M=a(145),P=a(221);a(130);var D=function(e){return r.a.createElement("div",{className:"Popup"},r.a.createElement(A.a,{className:"Popup-card"},r.a.createElement(A.a.Content,null,r.a.createElement(M.a,{floated:"right",size:"mini",src:e.properties.image,alt:e.properties.name}),r.a.createElement(A.a.Header,null,e.properties.name),r.a.createElement(A.a.Meta,null,e.properties.location.formattedAddress),r.a.createElement(A.a.Description,null,"Added: ",new Date(e.properties.createdAt).toString().substring(0,15))),r.a.createElement(A.a.Content,{extra:!0},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement(P.a,{basic:!0,color:"green"},r.a.createElement(i.b,{to:"item/".concat(e.properties._id,"/editpage")},"View")),r.a.createElement(P.a,{basic:!0,color:"red",onClick:function(){return e.onCancel()}},"Close")))))},U=Object(L.c)({accessToken:"pk.eyJ1IjoibWF4amdydWJlciIsImEiOiJja2c2a2x4Y3owMzFvMzJtbmd1cG9iMnNyIn0.LyK0wr5U6x5ad2FP5WlhnA"}),J=new Image(30,30);J.src="../.././pint.svg";var H=new Image(30,30);H.src="../.././Pin.png";var W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={lng:2.349014,lat:48.864716,zoom:12,selectedCoordinates:{selectedLat:null,selectedLng:null},selectedBeer:null,open:!1},e.open=function(t){console.log("open"),e.setState({open:!0,selectedBeer:t})},e.close=function(){return e.setState({open:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(){}),(function(){})),navigator.geolocation?(console.log("Geolocation permitted"),navigator.geolocation.getCurrentPosition((function(t){console.log("success!");var a=t.coords.latitude,n=t.coords.longitude;e.setState({selectedCoordinates:{selectedLng:n,selectedLat:a}})}),(function(){console.log("An error occured geolocating user")}),{enableHighAccuracy:!0,timeout:1e4})):console.log("Geolocation not supported")}},{key:"render",value:function(){var e=this,t=r.a.createElement(L.b,{type:"symbol",id:"beers",images:["beer-icon",J],layout:{"icon-image":"beer-icon"}},this.props.items.map((function(t,a){return r.a.createElement(L.a,{key:a,properties:Object(F.a)({},t),id:t._id,coordinates:t.location.coordinates,onClick:function(){return e.open(t)}})}))),a=r.a.createElement(L.b,{type:"symbol",id:"user",images:["user-icon",H],layout:{"icon-image":"user-icon"}},r.a.createElement(L.a,{coordinates:[this.state.selectedCoordinates.selectedLng,this.state.selectedCoordinates.selectedLat]}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{style:"mapbox://styles/mapbox/streets-v11",zoom:[12],containerStyle:{width:"100%",height:"100%"},center:[this.state.lng,this.state.lat],onClick:function(t,a){return e.props.onClickMap(t,a)}},t,a,this.state.open&&r.a.createElement(D,{properties:Object(F.a)({},this.state.selectedBeer),onCancel:this.close})))}}]),a}(r.a.PureComponent),_=Object(w.g)(W),z=function(e){return function(t){return r.a.createElement(x.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{context:a}))}))}},T=a(13),V=a(10),R=a(218),B=(a(188),z((function(e){var t=e.context;switch(e.page){case"loglist":return r.a.createElement("nav",{className:"NavMain"},r.a.createElement(i.c,{exact:!0,to:"/about"},r.a.createElement("h3",{className:"logo"},"About")),r.a.createElement(i.c,{to:"/"},r.a.createElement(T.a,{icon:V.c})),t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{to:"/profile"},r.a.createElement(R.a,{alt:"User",src:t.user.profileImage}))),!t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{to:"/signin"},r.a.createElement(T.a,{icon:V.d}))));case"about":return r.a.createElement("nav",{className:"NavMain about-page"},t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{to:"/profile"},r.a.createElement(R.a,{alt:"User",src:t.user.profileImage}))),!t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{to:"/signin"},r.a.createElement(T.a,{icon:V.d}))),r.a.createElement(i.c,{to:"/"},r.a.createElement(T.a,{icon:V.c})),r.a.createElement(i.c,{to:"/loglist"},r.a.createElement(T.a,{icon:V.a})));case"item":return r.a.createElement("nav",{className:"NavMain"},t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{to:"/profile"},r.a.createElement(R.a,{alt:"User",src:t.user.profileImage}))),!t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{to:"/signin"},r.a.createElement(T.a,{icon:V.d}))),r.a.createElement(i.c,{to:"/"},r.a.createElement(T.a,{icon:V.c})),r.a.createElement(i.c,{to:"/loglist"},r.a.createElement(T.a,{icon:V.a})));case"edit-profile":case"signin":case"signup":return r.a.createElement("nav",{className:"NavMain"},r.a.createElement(i.c,{exact:!0,to:"/about"},r.a.createElement("h3",{className:"logo"},"About")),r.a.createElement(i.c,{to:"/"},r.a.createElement(T.a,{icon:V.c})),r.a.createElement(i.c,{to:"/loglist"},r.a.createElement(T.a,{icon:V.a})));default:return r.a.createElement("nav",{className:"NavMain"},r.a.createElement(i.c,{exact:!0,to:"/about"},r.a.createElement("h3",{className:"logo"},"About")),t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{to:"/profile"},r.a.createElement(R.a,{alt:"User",src:t.user.profileImage}))),!t.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,{to:"/signin"},r.a.createElement(T.a,{icon:V.d}))),r.a.createElement(i.c,{to:"/loglist"},r.a.createElement(T.a,{icon:V.a})))}}))),Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={items:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;y("/items").then((function(t){e.setState({items:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"upperScreen"},r.a.createElement(_,{items:this.state.items,onClickMap:this.props.onClickMap})),r.a.createElement(B,{page:"home"}))}}]),a}(r.a.Component),G=a(32),K=a(67),q=a(103),Q=(a(80),function(e){e.errors;var t=Object(K.a)(e,["errors"]),a={};for(var n in t)""===t[n]&&(a[n]=!0);return a}),X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",errors:{}},e.handleChange=function(t){var a=t.target.name,n="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(G.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault();var a=Q(e.state);Object.keys(a).length?e.setState({errors:a}):E(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"background-form signin"},r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:this.handleChange}),(this.state.errors.email||this.state.errors.password)&&r.a.createElement(q.a,{basic:!0,color:"red"},"Your email or password is invalid"),r.a.createElement("button",null,"Sign In"),r.a.createElement("p",{className:"question"},"Don't have an account?"," ",r.a.createElement(i.b,{className:"link",to:"/signup"},"Sign Up")))))}}]),a}(n.Component);X.contextType=x;var Z=Object(w.g)(X),$=function(e){return r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(B,{page:"signin"}))},ee=function(e){e.errors;var t=Object(K.a)(e,["errors"]),a={};for(var n in t)(""===t[n]||te(t[n])<18)&&(a[n]=!0);return a},te=function(e){return Math.floor((new Date-new Date(e).getTime())/315576e5)},ae=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:"",birthday:"",errors:{}},e.handleChange=function(t){var a="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,n=t.target.name;e.setState(Object(G.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var a=ee(e.state);if(Object.keys(a).length)e.setState({errors:a});else{var n=new FormData;for(var r in e.state)n.append(r,e.state[r]);f(n).then((function(t){e.context.setUser(t),e.props.history.push("/")})).catch((function(e){console.log(e)}))}},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"background-form"},r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"profileImage"},"Profile Image"),r.a.createElement("input",{type:"file",id:"profileImage",name:"profileImage",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:this.handleChange}),this.state.errors.firstName&&r.a.createElement(q.a,{basic:!0,color:"red",pointing:!0},"Please enter your first name"),r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:this.handleChange}),this.state.errors.lastName&&r.a.createElement(q.a,{basic:!0,color:"red",pointing:!0},"Please enter your last name"),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",onChange:this.handleChange}),this.state.errors.email&&r.a.createElement(q.a,{basic:!0,color:"red",pointing:!0},"Please enter an email address"),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:this.handleChange}),this.state.errors.password&&r.a.createElement(q.a,{basic:!0,color:"red",pointing:!0},"Please enter a password"),r.a.createElement("label",{htmlFor:"birthday"},"Birthday"),r.a.createElement("input",{type:"date",id:"birthday",name:"birthday",onChange:this.handleChange}),this.state.errors.birthday&&r.a.createElement(q.a,{basic:!0,color:"red",pointing:!0},"You must be 18 or over to create an account"),r.a.createElement("button",null,"Create Account"),r.a.createElement("p",{className:"question"},"Already have an account ?"," ",r.a.createElement(i.b,{className:"link",to:"/signin"},"Signin")))))}}]),a}(n.Component);ae.contextType=x;var ne=Object(w.g)(ae),re=function(e){return r.a.createElement("div",null,r.a.createElement(ne,null)," ",r.a.createElement(B,{page:"signin"}))},oe=z((function(e){var t=e.component,a=e.context,n=Object(K.a)(e,["component","context"]);return a.isLoading?null:a.isLoggedIn?r.a.createElement(w.b,Object.assign({},n,{render:function(e){return r.a.createElement(t,e)}})):r.a.createElement(w.a,{to:"/"})})),ce=a(219),ie=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",profileImage:"",open:!1},e.open=function(){return e.setState({open:!0})},e.close=function(){return e.setState({open:!1})},e.handlePlace=function(t){var a=t.geometry;a.formattedAddress=t.place_name,e.setState({location:a})},e.sessionLogout=function(){v("/api/auth/logout").then((function(t){return e.context.removeUser()})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var a="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,n=t.target.name;e.setState(Object(G.a)({},n,a))},e.handleEdit=function(t){t.preventDefault();var a=new FormData;for(var n in e.state)a.append(n,e.state[n]);N("/user/edit",a).then((function(t){console.log(t),e.props.history.push("/")})).catch((function(e){return console.log(e)}))},e.deleteAccount=function(t){t.preventDefault(),j("/user/delete").then((function(t){return e.context.removeUser()})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({firstName:this.context.user.firstName,lastName:this.context.user.lastName,profileImage:this.context.user.profileImage})}},{key:"render",value:function(){return r.a.createElement("div",{className:"background-form edit"},r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"Form"},r.a.createElement("img",{src:this.state.profileImage,alt:"profile-pic",className:"profile-photo"}),r.a.createElement("label",{htmlFor:"profileImage"},"Profile Image"),r.a.createElement("input",{type:"file",id:"profileImage",name:"profileImage",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",name:"firstName",defaultValue:this.state.firstName,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",name:"lastName",defaultValue:this.state.lastName,onChange:this.handleChange}),r.a.createElement(i.b,{to:"/loglist",id:"logs"},r.a.createElement("button",null,"Check Logs")),r.a.createElement("br",null),r.a.createElement("div",{className:"option-btns"},r.a.createElement(P.a,{type:"button",id:"delete",className:"button",onClick:this.open},r.a.createElement(T.a,{icon:V.f})),r.a.createElement(ce.a,{open:this.state.open,onCancel:this.close,onConfirm:this.deleteAccount})," ",r.a.createElement("button",{id:"save",onClick:this.handleEdit},"Save Changes")," ",r.a.createElement(P.a,{type:"button",id:"logout",className:"button",onClick:this.open},r.a.createElement(T.a,{icon:V.e})),r.a.createElement(ce.a,{open:this.state.open,onCancel:this.close,onConfirm:this.sessionLogout})))),r.a.createElement(B,{page:"edit-profile"}))}}]),a}(r.a.Component);ie.contextType=x;var le=Object(w.g)(ie);a(136);var se=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.open=function(){return e.setState({open:!0})},e.close=function(){return e.setState({open:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(A.a,{className:"LogElementCard"},r.a.createElement(A.a.Content,null,r.a.createElement(M.a,{floated:"right",size:"mini",src:this.props.properties.image,alt:this.props.properties.name}),r.a.createElement(A.a.Header,null,this.props.properties.name),r.a.createElement(A.a.Description,null,"Type: ",this.props.properties.type.toUpperCase()),r.a.createElement(A.a.Meta,null,this.props.properties.location.formattedAddress),r.a.createElement(A.a.Description,null,"Added: ",new Date(this.props.properties.createdAt).toString().substring(0,15))),r.a.createElement(A.a.Content,{extra:!0},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement(P.a,{basic:!0,color:"green"},r.a.createElement(i.b,{to:"item/".concat(this.props.properties._id,"/editpage")}," ",r.a.createElement(T.a,{icon:V.b}))),r.a.createElement(P.a,{basic:!0,color:"red",onClick:this.open},r.a.createElement(T.a,{icon:V.f})),r.a.createElement(ce.a,{open:this.state.open,onCancel:this.close,onClick:this.close,onConfirm:function(){return e.props.deleteItem(e.props.id)}}))))}}]),a}(r.a.Component),me=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={items:[],itemToDelete:null},e.componentDidMount=function(){y("/items").then((function(t){e.setState({items:t})})).catch((function(e){return console.log(e)}))},e.deleteItem=function(t){console.log(t),I("/item/".concat(t,"/delete")).then(e.componentDidMount).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"upperScreen LogList"},this.state.items.map((function(t,a){return r.a.createElement(se,{key:a,properties:Object(F.a)({},t),id:t._id,deleteItem:e.deleteItem})}))),r.a.createElement(B,{page:"loglist"}))}}]),a}(r.a.Component),ue=a(83),pe=(a(189),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){void 0!==n.props.coordinates&&d.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(n.props.coordinates[0],",").concat(n.props.coordinates[1],".json?access_token=").concat("pk.eyJ1IjoibWF4amdydWJlciIsImEiOiJja2c2a2x4Y3owMzFvMzJtbmd1cG9iMnNyIn0.LyK0wr5U6x5ad2FP5WlhnA")).then((function(e){n.setState({search:e.data.features[0].place_name,isLoading:!1})}))},n.state={search:"",results:[],isLoading:!1},n.handleSearchChange=n.handleSearchChange.bind(Object(ue.a)(n)),n}return Object(s.a)(a,[{key:"handleSearchChange",value:function(e){var t=this;this.setState({search:e.target.value,isLoading:!0}),clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){t.performSearch()}),1e3)}},{key:"performSearch",value:function(){var e=this;""!==this.state.search?d.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(this.state.search,".json?access_token=").concat("pk.eyJ1IjoibWF4amdydWJlciIsImEiOiJja2c2a2x4Y3owMzFvMzJtbmd1cG9iMnNyIn0.LyK0wr5U6x5ad2FP5WlhnA")).then((function(t){e.setState({results:t.data.features,isLoading:!1})})):this.setState({results:[],isLoading:!1})}},{key:"handleItemClicked",value:function(e){this.setState({search:e.place_name,results:[]}),this.props.onSelect(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.results,n=t.isLoading;return r.a.createElement("div",{className:"AutocompletePlace"},r.a.createElement("input",{className:"input",type:"text",value:this.props.defaultValue||this.state.search,onChange:this.handleSearchChange,placeholder:"Type an address"}),r.a.createElement("ul",{className:"AutocompletePlace-results"},a.map((function(t){return r.a.createElement("li",{key:t.id,className:"AutocompletePlace-items",onClick:function(){return e.handleItemClicked(t)}},t.place_name)})),n&&r.a.createElement("li",{className:"AutocompletePlace-items"},"Loading...")))}}]),a}(n.Component));function de(e,t,a){if(!t||"object"!==typeof t||t instanceof Date||t instanceof File){var n=null==t?"":t;e.append(a,n)}else Object.keys(t).forEach((function(n){de(e,t[n],a?"".concat(a,"[").concat(n,"]"):n)}))}var he=a(223),ge=a(225),fe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",brand:"",type:"",rating:null,location:"",description:"",isCraft:!1,added_by:"",price:null,priceHH:null,open:!1},e.handlePlace=function(t){var a=t.geometry;a.formattedAddress=t.place_name,e.setState({location:a})},e.handleChange=function(t){var a="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,n=t.target.name;e.setState(Object(G.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),"edit"===e.props.action?e.updateItem():e.createItem()},e.handleRate=function(t,a){e.setState({rating:a.rating})},e.open=function(){return e.setState({open:!0})},e.close=function(){return e.setState({open:!1})},e.createItem=function(){if(e.state.type){var t=new FormData;de(t,e.state),k("/item/create",t).then((function(t){e.props.history.push("/")})).catch((function(e){return console.log(e)}))}else e.setState({error:"No type selected !"},(function(){e.timeoutId=setTimeout((function(){e.setState({error:null})}),1e3)}))},e.updateItem=function(){var t=new FormData;de(t,e.state),O("/item/".concat(e.props.id,"/edit"),t).then((function(t){e.props.history.push("/")})).catch((function(e){console.log(e)}))},e.deleteItem=function(){I("/item/".concat(e.props.id,"/delete")).then((function(t){console.log(t),e.props.history.push("/")})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;if("edit"===this.props.action)C("/item/".concat(this.props.id)).then((function(t){var a=t;d.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(a.location.coordinates[0],",").concat(a.location.coordinates[1],".json?access_token=").concat("pk.eyJ1IjoibWF4amdydWJlciIsImEiOiJja2c2a2x4Y3owMzFvMzJtbmd1cG9iMnNyIn0.LyK0wr5U6x5ad2FP5WlhnA")).then((function(t){console.log(t.data),console.log(t.data.features),e.setState({location:{formattedAddress:t.data.features[0].place_name,coordinates:a.location.coordinates,type:"Point"},isLoading:!1})})),e.setState({name:a.name,brand:a.brand,type:a.type,rating:a.rating,description:a.description,isCraft:a.isCraft,image:a.image,price:a.price,priceHH:a.priceHH})})).catch((function(e){console.log(e)}));else{if(void 0===this.props.coordinates)return;d.a.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(this.props.coordinates[0],",").concat(this.props.coordinates[1],".json?access_token=").concat("pk.eyJ1IjoibWF4amdydWJlciIsImEiOiJja2c2a2x4Y3owMzFvMzJtbmd1cG9iMnNyIn0.LyK0wr5U6x5ad2FP5WlhnA")).then((function(t){e.setState({location:{formattedAddress:t.data.features[0].place_name,coordinates:e.props.coordinates,type:"Point"}})}))}}},{key:"render",value:function(){var e=this;return console.log(">>>>>",this.props.id),r.a.createElement("div",{className:"background-item-form"},r.a.createElement("div",{className:"item-form-container "},r.a.createElement("form",{className:"Form",onChange:this.handleChange},this.state.image&&r.a.createElement("img",{src:this.state.image,alt:"",className:"profile-photo"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{type:"file",id:"image",name:"image"}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",name:"name",defaultValue:this.state.name}),r.a.createElement("label",{htmlFor:"brand"},"Brand"),r.a.createElement("input",{type:"text",id:"brand",name:"brand",defaultValue:this.state.brand}),r.a.createElement("label",{className:"label",htmlFor:"type"},"Type","  "),r.a.createElement("select",{name:"type",id:"type",value:this.state.type||"-1",onChange:this.handleChange},r.a.createElement("option",{value:"-1",disabled:!0},"Select a type"),r.a.createElement("option",{value:"blonde",onChange:this.handleChange},"Blonde"),r.a.createElement("option",{value:"stout",onChange:this.handleChange},"Stout"),r.a.createElement("option",{value:"pale ale",onChange:this.handleChange},"Pale Ale"),r.a.createElement("option",{value:"ipa",onChange:this.handleChange},"IPA"),r.a.createElement("option",{value:"cider",onChange:this.handleChange},"Cider"),r.a.createElement("option",{value:"wheat beer"},"Wheat"),r.a.createElement("option",{value:"other",onChange:this.handleChange},"Other")),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"isCraft"},"Is it a Craft Beer?"),r.a.createElement("br",null),r.a.createElement(ge.a,{toggle:!0,name:"isCraft",id:"isCraft",checked:this.state.isCraft}),r.a.createElement("br",null),r.a.createElement("label",{className:"label",htmlFor:"location"},"Address"),r.a.createElement(pe,{onSelect:this.handlePlace,coordinates:this.props.coordinates,defaultValue:this.state.location.formattedAddress}),r.a.createElement("div",{className:"price-over-container"},r.a.createElement("div",{className:"price-container"},r.a.createElement("label",{htmlFor:"price"},"Normal Price"),r.a.createElement("input",{type:"number",id:"price",className:"price",name:"price",defaultValue:this.state.price})),r.a.createElement("div",{className:"price-container"},r.a.createElement("label",{htmlFor:"priceHH"},"Happy Hour Price"),r.a.createElement("input",{type:"number",id:"priceHH",className:"price",name:"priceHH",defaultValue:this.state.priceHH}))),r.a.createElement("label",{className:"label",htmlFor:"rating"},"Rating"),r.a.createElement("div",null,r.a.createElement(he.a,{icon:"star",size:"massive",rating:this.state.rating,value:this.state.rating,onRate:function(t,a){return e.handleRate(t,a)},maxRating:5})),r.a.createElement("br",null),r.a.createElement("label",{className:"label",htmlFor:"description"},"Description"),r.a.createElement("textarea",{type:"text",id:"description",name:"description",defaultValue:this.state.description})),r.a.createElement("div",{className:"option-btns"},r.a.createElement(P.a,{type:"button",id:"delete",className:"button",onClick:this.open},r.a.createElement(T.a,{icon:V.f}))," ",r.a.createElement(ce.a,{open:this.state.open,onCancel:this.close,onConfirm:this.deleteItem}),r.a.createElement("button",{id:"save",onClick:this.handleSubmit},"Save Changes")))))}}]),a}(n.Component);fe.contextType=x;var Ee=Object(w.g)(fe),be=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"upperScreen"},r.a.createElement(Ee,{coordinates:e.coordinates})),r.a.createElement(B,{page:"item"}))},ve=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"upperScreen"},r.a.createElement(Ee,{action:"edit",id:e.match.params.id})),r.a.createElement(B,{page:"item"}))},ye=(a(190),z((function(e){var t=e.context;return r.a.createElement("div",{className:"About uppperScreen"},r.a.createElement("div",{className:"introduction"},!t.user.firstName&&r.a.createElement("h1",null,"Hey User!"),t.user.firstName&&r.a.createElement("h1",null,"Hey ",t.user.firstName,"!"),r.a.createElement("h3",null,"Welcome to CosMousse!"),r.a.createElement("p",null,"Where every beer-lover can keep track of their fun times!")),r.a.createElement("div",{className:"values-container"},r.a.createElement("h4",{className:"title"},"Record!"),r.a.createElement("p",{className:"value-description"},"Pin the Map with every beer you enjoy."),r.a.createElement("h4",{className:"title"},"Remember!"),r.a.createElement("p",{className:"value-description"},"Keep track of past times by checking a beer you might have had somewhere and check if it's worth having it again."),r.a.createElement("h4",{className:"title"},"Update!"),r.a.createElement("p",{className:"value-description"},"Update your logs if your tastes change or if your favourite pint is no longer available.")),r.a.createElement("div",{className:"hook"},r.a.createElement(i.b,{to:"/signup"},r.a.createElement("h4",{className:"question-link"},"Ready to start your CosMousse adventure?"))),r.a.createElement(B,{page:"about"}))}))),Ce=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={coordinates:[],selectedItem:"",error:!1},e._onClickMap=function(t,a){var n=t.queryRenderedFeatures(a.point);null===e.context.user?e.props.history.push("/signup"):void 0===n[0]?console.log("You can't place anything here!"):"composite"===n[0].source&&(console.log("MAP!"),console.log("EVENT!!!!!",a.lngLat),e.setState({coordinates:[a.lngLat.lng,a.lngLat.lat]}),e.props.history.push("/item/create"))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/signin",component:$}),r.a.createElement(w.b,{exact:!0,path:"/signup",component:re}),r.a.createElement(w.b,{exact:!0,path:"/about",component:ye}),r.a.createElement(oe,{exact:!0,path:"/profile",component:le}),r.a.createElement(w.b,{exact:!0,path:"/loglist",component:me}),r.a.createElement(w.b,{exact:!0,path:"/",component:function(){return r.a.createElement(Y,{onClickMap:e._onClickMap})}}),r.a.createElement(w.b,{exact:!0,path:"/item/:id/editpage",component:ve,id:this.state.selectedItem}),r.a.createElement(w.b,{exact:!0,path:"/item/create",component:function(){return r.a.createElement(be,{coordinates:e.state.coordinates})}})))}}]),a}(r.a.Component);Ce.contextType=x;var Ne=z(Object(w.g)(Ce));a(191),a(192),a(193);c.a.render(r.a.createElement(i.a,null,r.a.createElement(S,null,r.a.createElement(Ne,null))),document.getElementById("root"))},80:function(e,t,a){}},[[155,1,2]]]);
//# sourceMappingURL=main.164f508d.chunk.js.map