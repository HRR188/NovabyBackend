webpackJsonp([22],{243:function(n,t,i){i(573);var e=i(6)(i(489),i(682),null,null);n.exports=e.exports},403:function(n,t,i){n.exports=i.p+"static/img/links-sprite.c526398.png"},489:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"personalSocial",created:function(){var n=this;!function(n,t,i){var e,o=n.getElementsByTagName(t)[0];n.getElementById(i)||(e=n.createElement(t),e.id=i,e.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(e,o))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){FB.init({appId:"171866643244371",xfbml:!0,version:"v2.8"}),FB.getLoginStatus(function(t){"connected"==t.status&&n.$store.dispatch("facebookLinkAc",userId).then(function(t){200==t.code&&200==t.code&&(n.facebookLink.status=!0,n.facebookLink.text="Disconnect")})})}},data:function(){return{facebookLink:{text:"Link",status:!1},twitterLink:{text:"Link",status:!1},linkedinLink:{text:"Link",status:!1},pinterestLink:{text:"Link",status:!1},fbSignInParams:{scope:"email,user_likes",return_scopes:!0}}},mounted:function(){var n=this,t=this.$store.state.user.userId;this.$store.dispatch("linkStatusAc",t).then(function(t){t.data.status.user_facebook&&(n.facebookLink.status=!0,n.facebookLink.text="Disconnect"),t.data.status.user_linkedin&&(n.linkedinLink.status=!0,n.linkedinLink.text="Disconnect"),t.data.status.user_pinterest&&(n.pinterestLink.status=!0,n.pinterestLink.text="Disconnect"),t.data.status.user_twitter&&(n.twitterLink.status=!0,n.twitterLink.text="Disconnect")})},methods:{onSignInSuccess:function(){},onSignInError:function(){},facebook:function(){var n=this;this.facebookLink.status&&this.$store.dispatch("facebookDisconnectAc").then(function(t){console.log(t),200==t.code&&(n.facebookLink.status=!1,n.facebookLink.text="Link")})},linkedin:function(){var n=this;if(this.linkedinLink.status)this.$store.dispatch("linkedinDisconnectAc").then(function(t){console.log(t),200==t.code&&(n.linkedinLink.status=!1,n.linkedinLink.text="Link")});else{var t=localStorage.getItem("token"),i=" https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=75ijmpkvri5gc3&state=123&redirect_uri=https://www.novaby.com/oauth/linkedincb?token="+t;window.open(i)}},twitter:function(){this.twitterLink.status?this.$store.dispatch("twitterDisconnectAc").then(function(n){200==n.code&&(_this.twitterLink.status=!1,_this.twitterLink.text="Link")}):this.$store.dispatch("twitterLinkAc").then(function(n){200==n.code&&window.open(n.url)})},pinterest:function(){this.pinterestLink.status?this.$store.dispatch("pinterestDisconnectAc").then(function(n){200==n.code&&(_this.pinterestLink.status=!1,_this.pinterestLink.text="Link")}):window.open("https://accounts-oauth.pinterest.com/login/?next=https://api.pinterest.com/oauth/?client_id=4902905476527698490&redirect_uri=https://www.novaby.com/oauth/pinconnect&response_type=code&scope=read_public")}}}},518:function(n,t,i){t=n.exports=i(204)(!0),t.push([n.i,'.personal-warp .social-container{margin-top:20px;background-color:#fff;padding:30px 42px}.personal-warp .social-container>p{font-size:18px;color:#515254}.personal-warp .social-container .networks-link li{float:left;width:100%;margin-top:30px}.personal-warp .social-container .networks-link li span{font-size:20px;color:#4a4a4a;line-height:40px;float:left}.personal-warp .social-container .networks-link li span:before{content:"";display:inline-block;vertical-align:middle;width:40px;height:40px;background-image:url('+i(403)+");background-repeat:no-repeat;margin-right:15px}.personal-warp .social-container .networks-link li .btn{float:right;width:90px;height:34px;line-height:34px;font-size:14px}.personal-warp .social-container .networks-link li .btn.disconnect{background-color:#d5d9df;color:#fff}.personal-warp .social-container .networks-link .facebook span:before{background-position:-57px 0}.personal-warp .social-container .networks-link .facebook.openlinks span:before{background-position:0 0}.personal-warp .social-container .networks-link .twitter span:before{background-position:-57px -50px}.personal-warp .social-container .networks-link .twitter.openlinks span:before{background-position:0 -50px}.personal-warp .social-container .networks-link .instagram span:before{background-position:-57px -101px}.personal-warp .social-container .networks-link .instagram.openlinks span:before{background-position:0 -101px}.personal-warp .social-container .networks-link .pinterest span:before{background-position:-57px -155px}.personal-warp .social-container .networks-link .pinterest.openlinks span:before{background-position:0 -155px}","",{version:3,sources:["/Users/work/Desktop/modules/src/pages/profile/social.vue"],names:[],mappings:"AACA,iCACE,gBAAiB,AACjB,sBAAuB,AACvB,iBAAmB,CACpB,AACD,mCACI,eAAgB,AAChB,aAAe,CAClB,AACD,mDACI,WAAY,AACZ,WAAY,AACZ,eAAiB,CACpB,AACD,wDACM,eAAgB,AAChB,cAAe,AACf,iBAAkB,AAClB,UAAY,CACjB,AACD,+DACQ,WAAY,AACZ,qBAAsB,AACtB,sBAAuB,AACvB,WAAY,AACZ,YAAa,AACb,+CAA4D,AAC5D,4BAA6B,AAC7B,iBAAmB,CAC1B,AACD,wDACM,YAAa,AACb,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACrB,AACD,mEACQ,yBAA0B,AAC1B,UAAY,CACnB,AACD,sEACI,2BAA6B,CAChC,AACD,gFACI,uBAAyB,CAC5B,AACD,qEACI,+BAAiC,CACpC,AACD,+EACI,2BAA6B,CAChC,AACD,uEACI,gCAAkC,CACrC,AACD,iFACI,4BAA8B,CACjC,AACD,uEACI,gCAAkC,CACrC,AACD,iFACI,4BAA8B,CACjC",file:"social.vue",sourcesContent:["\n.personal-warp .social-container {\n  margin-top: 20px;\n  background-color: #fff;\n  padding: 30px 42px;\n}\n.personal-warp .social-container > p {\n    font-size: 18px;\n    color: #515254;\n}\n.personal-warp .social-container .networks-link li {\n    float: left;\n    width: 100%;\n    margin-top: 30px;\n}\n.personal-warp .social-container .networks-link li span {\n      font-size: 20px;\n      color: #4A4A4A;\n      line-height: 40px;\n      float: left;\n}\n.personal-warp .social-container .networks-link li span:before {\n        content: '';\n        display: inline-block;\n        vertical-align: middle;\n        width: 40px;\n        height: 40px;\n        background-image: url(../../assets/images/links-sprite.png);\n        background-repeat: no-repeat;\n        margin-right: 15px;\n}\n.personal-warp .social-container .networks-link li .btn {\n      float: right;\n      width: 90px;\n      height: 34px;\n      line-height: 34px;\n      font-size: 14px;\n}\n.personal-warp .social-container .networks-link li .btn.disconnect {\n        background-color: #D5D9DF;\n        color: #fff;\n}\n.personal-warp .social-container .networks-link .facebook span:before {\n    background-position: -57px 0;\n}\n.personal-warp .social-container .networks-link .facebook.openlinks span:before {\n    background-position: 0 0;\n}\n.personal-warp .social-container .networks-link .twitter span:before {\n    background-position: -57px -50px;\n}\n.personal-warp .social-container .networks-link .twitter.openlinks span:before {\n    background-position: 0 -50px;\n}\n.personal-warp .social-container .networks-link .instagram span:before {\n    background-position: -57px -101px;\n}\n.personal-warp .social-container .networks-link .instagram.openlinks span:before {\n    background-position: 0 -101px;\n}\n.personal-warp .social-container .networks-link .pinterest span:before {\n    background-position: -57px -155px;\n}\n.personal-warp .social-container .networks-link .pinterest.openlinks span:before {\n    background-position: 0 -155px;\n}\n"],sourceRoot:""}])},573:function(n,t,i){var e=i(518);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);i(205)("bf0126c4",e,!0)},682:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"social-container"},[i("p",[n._v("Social")]),n._v(" "),i("ul",{staticClass:"networks-link auto clearfix"},[i("li",{staticClass:"facebook",class:{openlinks:n.facebookLink.status}},[i("span",[n._v("Facebook")]),n._v(" "),i("fb-signin-button",{staticClass:"btn btn-default",attrs:{params:n.fbSignInParams},on:{success:n.onSignInSuccess,error:n.onSignInError}},[n._v("\n            "+n._s(n.facebookLink.text)+"\n        ")])],1),n._v(" "),i("li",{staticClass:"twitter",class:{openlinks:n.twitterLink.status}},[i("span",[n._v("Twitter")]),n._v(" "),i("button",{staticClass:"btn btn-default",class:{disconnect:n.twitterLink.status},on:{click:n.twitter}},[n._v(n._s(n.twitterLink.text))])]),n._v(" "),i("li",{staticClass:"instagram",class:{openlinks:n.linkedinLink.status}},[i("span",[n._v("Linkedin")]),n._v(" "),i("button",{staticClass:"btn btn-default",class:{disconnect:n.linkedinLink.status},on:{click:n.linkedin}},[n._v(n._s(n.linkedinLink.text))])]),n._v(" "),i("li",{staticClass:"pinterest",class:{openlinks:n.pinterestLink.status}},[i("span",[n._v("Pinterest")]),n._v(" "),i("button",{staticClass:"btn btn-default",class:{disconnect:n.pinterestLink.status},on:{click:n.pinterest}},[n._v(n._s(n.pinterestLink.text))])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=22.67e451dcd5ea28c24661.js.map