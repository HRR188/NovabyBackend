webpackJsonp([18],{209:function(n,t,e){e(572);var o=e(6)(e(455),e(680),"data-v-2496ee33",null);n.exports=o.exports},373:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loading",props:{percent:{required:!0,default:0,type:Number}}}},375:function(n,t,e){"use strict";var o=e(0),a=e.n(o);t.a={data:function(){return{loadPercent:0,loadCom:!1,jsList:[{id:"objLoader",src:"//model-static.oss-cn-shanghai.aliyuncs.com/dev/js/OBJLoader.js"},{id:"oribitControl",src:"//model-static.oss-cn-shanghai.aliyuncs.com/dev/js/OrbitControls.js"},{id:"mtlLoder",src:"//model-static.oss-cn-shanghai.aliyuncs.com/dev/js/MTLLoder.js"}],model:null,scene:null,controls:null,renderer:null,camera:null}},methods:{init:function(){var n=this;this.loadThree().then(function(t){if(t)return n.loadPercent+=25,n.loadJs(n.jsList)}).then(function(t){if(t)return n.loadPercent+=25,n.initScene(),n.loadModel()}).then(function(t){t&&(n.changeViewCenter(),n.hasAnnotation&&n.initCanvas())})},loadThree:function(){return new a.a(function(n,t){if(document.getElementById("three"))n(!0);else{var e=document.createElement("script");e.src="//model-static.oss-cn-shanghai.aliyuncs.com/dev/js/three.js",e.id="three",document.body.appendChild(e),e.onload=function(){n(!0)}}})},loadJs:function(n){var t=n.map(function(n){return new a.a(function(t,e){if(document.getElementById(n.id))t(!0);else{var o=document.createElement("script");o.src=n.src,o.id=n.id,document.body.appendChild(o),o.onload=function(){t(!0)}}})});return a.a.all(t).then(function(n){return!0})},fullScreen:function(){},changeViewCenter:function(){var n=this,t=void 0,e=void 0;e=new THREE.Raycaster,t=new THREE.Vector2;var o=this,a=function(a){a.preventDefault(),t.x=a.clientX/o.renderer.domElement.clientWidth*2-1,t.y=-a.clientY/o.renderer.domElement.clientHeight*2+1,e.setFromCamera(t,o.camera);var i=e.intersectObjects(o.model.children);i.length>0?(console.log(i[0].point),n.controls.target.set(i[0].point.x,i[0].point.y,i[0].point.z)):n.controls.target.set(0,0,0)};o.$refs.canvas.addEventListener("dblclick",a,!1)},loadManager:function(){var n=this,t=new THREE.LoadingManager;return t.onProgress=function(t,e,o){e===o&&(n.loadCom=!0,n.loadPercent+=50),console.log(t,e,o)},t},addLight:function(){var n=new THREE.AmbientLight(4210752,1);this.scene.add(n);var t=new THREE.DirectionalLight(16777215,.9);t.color.setHSL(.1,1,.95),t.position.set(-1,1.75,1),t.position.multiplyScalar(50),this.scene.add(t);var e=new THREE.DirectionalLight(16777215,.5);e.color.setHSL(.1,1,.95),e.position.set(1,-1.75,1),e.position.multiplyScalar(50),this.scene.add(e)},loadModel:function(){var n=this,t=this;return new a.a(function(e,o){var a=function(n){if(n.lengthComputable){var e=n.loaded/n.total*100;console.log(Math.round(e,2)+"% downloaded"),t.loadPercent=.25*Math.round(e,2)+75}},i=function(n){};if("json"===n.modelFile.model_format){new THREE.ObjectLoader(t.loadManager()).load(t.modelFile.modelPath+t.modelFile.modelUrl,function(n){t.model=n,t.scene.add(t.model),e(!0)},a,i)}else{var s=new THREE.OBJLoader(t.loadManager());s.setPath(t.modelFile.modelPath),s.load(t.modelFile.modelUrl,function(n){t.model=n,t.scene.add(t.model),e(!0)},a,i)}})},initScene:function(){function n(){requestAnimationFrame(n),a.model&&a.modelConfig&&(a.model.scale.x=a.model.scale.y=a.model.scale.z=Number(a.modelConfig.scale)?Number(a.modelConfig.scale):1,a.model.position.y=a.modelConfig.positionY||0,a.model.position.x=a.modelConfig.positionX||0,a.model.position.z=a.modelConfig.positionZ||0),a.renderer.render(a.scene,a.camera),a.controls.update()}var t=this;this.scene=new THREE.Scene;var e=this.$refs.container.offsetWidth,o=this.$refs.container.offsetHeight,a=this;document.getElementsByClassName("annotation")[0];this.renderer=new THREE.WebGLRenderer({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(e,o),this.renderer.setClearColor(2763318,1),this.$refs.canvas.appendChild(this.renderer.domElement),this.camera=new THREE.PerspectiveCamera(45,e/o,.1,2e4),this.camera.position.set(500,5,0),this.scene.add(this.camera),window.addEventListener("resize",function(){var n=a.$refs.container.offsetWidth,e=a.$refs.container.offsetHeight;t.renderer.setSize(n,e),t.camera.aspect=n/e,t.camera.updateProjectionMatrix()}),this.addLight(),this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),n()}}}},378:function(n,t,e){t=n.exports=e(204)(!0),t.push([n.i,".loading-container[data-v-204cd49b]{background:#212121;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.loading-container p[data-v-204cd49b]{font-size:16px;color:#fff;margin-bottom:22px;text-align:center}.loading-container .loading-border[data-v-204cd49b]{background:#fff;border:1px solid #e7e7e7;border-radius:100px;width:364px;height:8px}.loading-container .loading-content[data-v-204cd49b]{background:#ea6264;border-radius:100px;height:6px;transition:all .3s}","",{version:3,sources:["/Users/work/Desktop/modules/src/components/threeD/loading.vue"],names:[],mappings:"AACA,oCACI,mBAA6B,AAC7B,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,mBAAoB,AAChB,eAAgB,AACpB,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAClC,AACD,sCACI,eAAgB,AAChB,WAAe,AACf,mBAAoB,AACpB,iBAAmB,CACtB,AACD,oDACI,gBAAoB,AACpB,yBAA0B,AAC1B,oBAAqB,AACrB,YAAa,AACb,UAAY,CACf,AACD,qDACI,mBAAoB,AACpB,oBAAqB,AACrB,WAAY,AACZ,kBAAoB,CACvB",file:"loading.vue",sourcesContent:["\n.loading-container[data-v-204cd49b]{\n    background: rgba(33,33,33,1);\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.loading-container p[data-v-204cd49b]{\n    font-size: 16px;\n    color: #FFFFFF;\n    margin-bottom: 22px;\n    text-align: center;\n}\n.loading-container .loading-border[data-v-204cd49b]{\n    background: #FFFFFF;\n    border: 1px solid #E7E7E7;\n    border-radius: 100px;\n    width: 364px;\n    height: 8px;\n}\n.loading-container .loading-content[data-v-204cd49b]{\n    background: #EA6264;\n    border-radius: 100px;\n    height: 6px;\n    transition: all .3s;\n}\n"],sourceRoot:""}])},388:function(n,t,e){var o=e(378);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(205)("39b98a43",o,!0)},411:function(n,t,e){e(388);var o=e(6)(e(373),e(415),"data-v-204cd49b",null);n.exports=o.exports},415:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"loading-container"},[e("p",[n._v("Loading ... ")]),n._v(" "),e("div",{staticClass:"loading-border"},[e("div",{staticClass:"loading-content",style:{width:n.percent+"%"}})])])},staticRenderFns:[]}},423:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAQJJREFUOBFjZCABvH37lu/jx49r/v//z83JyekvJSX1hpFY/c+ePeP68ePHXqBmC5AeRkbGSxwcHM5MxBgA1MQmKSn5Haj2Ekw9UEzv+/fvG5lhArhokLNfvHixF+h0KUVFxbIPHz5IAtUag9QDXXEDrwFQP+8EORuIHYGG/IMZAtT8m5+f3w9nGCBrRnYdExNTvYKCQvPz5885gYH4DWsY4NIMMgjoEk8gxQrSDOJjGIBPM9DZJ4DOdgfSv0CaQQDFC8RoFhYW/gTRCiHhBpCjGe4CcjWDDaBEM8gAJmDcguMZxEEGsABD9zOyGhCbCZRI0AWJ1Qw2gBLNGAaQYjPMYgC96rI2S+m6hAAAAABJRU5ErkJggg=="},454:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(411),a=e.n(o),i=e(375),s=e(501);t.default={name:"three-d-annotation",props:{modelFile:{required:!0}},mixins:[i.a,s.a],components:{Loading:a.a},mounted:function(){this.init()}}},455:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(660),a=e.n(o);t.default={name:"annotation",components:{threeDAnnotation:a.a}}},501:function(n,t,e){"use strict";t.a={data:function(){return{hasAnnotation:!0,annotation:{showDesc:!1,showTools:!1,down:!1},AnCanvas:null,FaCanvas:null,points:[],colorList:[{hex:"#D1CDCD",selected:!0},{hex:"#D0021B",selected:!1},{hex:"#0096FF",selected:!1},{hex:" #7ED321",selected:!1},{hex:"#F5A623",selected:!1},{hex:"#000000",selected:!1}],sizeList:[{style:{width:"6px",height:"6px"},selected:!1},{style:{width:"10px",height:"10px"},selected:!1},{style:{width:"14px",height:"14px"},selected:!1}]}},methods:{select:function(n,t){"size"===t?this.sizeList.forEach(function(t){t.selected=t.style===n}):this.colorList.forEach(function(t){t.selected=t.hex===n})},overShow:function(){this.annotation.showTools||(this.annotation.showDesc=!0)},overHide:function(){this.annotation.showDesc=!1},show:function(){var n=this;if(!this.annotation.showTools){this.overHide(),this.clearCanvas();var t=new Image;t.onload=function(){n.AnCanvas.drawImage(t,0,0)},t.src=this.renderer.domElement.toDataURL()}this.annotation.showTools=!this.annotation.showTools},initCanvas:function(){var n=document.getElementById("AnCanvas");n.width=window.innerWidth,n.height=window.innerHeight,this.AnCanvas=n.getContext("2d");var t=document.getElementById("FaCanvas");t.width=window.innerWidth,t.height=window.innerHeight,this.FaCanvas=t.getContext("2d")},clearCanvas:function(){this.AnCanvas.clearRect(0,0,this.AnCanvas.canvas.width,this.AnCanvas.canvas.height)},mouseDown:function(n){this.annotation.down=!0,this.points.push({x:n.clientX,y:n.clientY})},mouseUp:function(){this.annotation.down=!1,this.AnCanvas.drawImage(this.FaCanvas.canvas,0,0),this.points=[]},mouseMove:function(n){if(this.annotation.down){this.FaCanvas.lineWidth=10,this.FaCanvas.lineJoin=this.FaCanvas.lineCap="round",this.points.push({x:n.clientX,y:n.clientY}),this.FaCanvas.clearRect(0,0,this.FaCanvas.canvas.width,this.FaCanvas.canvas.height);var t=this.points[0],e=this.points[1];this.FaCanvas.beginPath(),this.FaCanvas.moveTo(t.x,t.y);for(var o=1,a=this.points.length;o<a;o++){var i=midPointBtw(t,e);this.FaCanvas.quadraticCurveTo(t.x,t.y,i.x,i.y),t=this.points[o],e=this.points[o+1]}this.FaCanvas.lineTo(t.x,t.y),this.FaCanvas.stroke()}}}}},517:function(n,t,e){t=n.exports=e(204)(!0),t.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"annotation.vue",sourceRoot:""}])},527:function(n,t,e){t=n.exports=e(204)(!0),t.push([n.i,"canvas[data-v-4bff8f66]{display:block}.canvas-container[data-v-4bff8f66]{width:100%;height:100%}.canvas[data-v-4bff8f66]{width:100%;height:100%;position:absolute;top:0;left:0}.menu-bar[data-v-4bff8f66]{z-index:1;width:100%;height:50px;position:absolute;top:0;left:0;padding-top:10px}.menu-bar .btn[data-v-4bff8f66]{border-radius:4px;height:28px;padding:5px 10px;line-height:28px;color:#fff;float:right}.menu-bar .btn-exit[data-v-4bff8f66]{background:#838383}.menu-bar .btn-save[data-v-4bff8f66]{background:#ea6264;margin:0 14px}.annotation[data-v-4bff8f66]{position:absolute;width:40px;height:40px;top:78px;right:28px;background:#3e3e4d;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border:4px solid #3e3e4d;border-radius:2px;box-sizing:border-box}.annotation.active[data-v-4bff8f66]{border:4px solid #383838}.annotation img[data-v-4bff8f66]{width:16px;height:16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.annotation .annotation-desc[data-v-4bff8f66]{position:absolute;right:60px;height:26px;background:rgba(9,9,12,.8);border-radius:2px;color:#fff;white-space:nowrap;font-size:12px;line-height:26px;padding:0 8px}.annotation .annotation-tools[data-v-4bff8f66]{position:absolute;right:60px;height:26px;background:#666674;border-radius:2px;white-space:nowrap;padding:0 8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.annotation .annotation-tools .color-div[data-v-4bff8f66]{width:14px;height:14px;margin:0 3px;border-radius:2px;box-sizing:border-box}.annotation .annotation-tools .color-div.active[data-v-4bff8f66]{border:1px solid #fff}.annotation .annotation-tools .gry[data-v-4bff8f66]{background:#d1cdcd}.annotation .annotation-tools .red[data-v-4bff8f66]{background:#d0021b}.annotation .annotation-tools .blue[data-v-4bff8f66]{background:#0096ff}.annotation .annotation-tools .green[data-v-4bff8f66]{background:#7ed321}.annotation .annotation-tools .yellow[data-v-4bff8f66]{background:#f5a623}.annotation .annotation-tools .black[data-v-4bff8f66]{background:#000}.annotation .annotation-tools .circle-div[data-v-4bff8f66]{border-radius:100%;background:#9b9b9b;margin:0 3px}.annotation .annotation-tools .circle-div.small[data-v-4bff8f66]{width:6px;height:6px}.annotation .annotation-tools .circle-div.medium[data-v-4bff8f66]{width:10px;height:10px}.annotation .annotation-tools .circle-div.large[data-v-4bff8f66]{width:14px;height:14px}.annotation .annotation-tools .circle-div.active[data-v-4bff8f66]{background:#fff}.annotation .annotation-tools .border[data-v-4bff8f66]{height:20px;width:1px;margin:0 5px;background:#59596a}","",{version:3,sources:["/Users/work/Desktop/modules/src/components/threeD/threeDAnnotation.vue"],names:[],mappings:"AACA,wBACI,aAAe,CAClB,AACD,mCACI,WAAY,AACZ,WAAa,CAChB,AACD,yBACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,MAAM,AACN,MAAO,CACV,AACD,2BACI,UAAW,AACX,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,MAAM,AACN,OAAO,AACP,gBAAkB,CACrB,AACD,gCACI,kBAAmB,AACnB,YAAa,AACb,iBAAiB,AACjB,iBAAkB,AAClB,WAAY,AACZ,WAAY,CACf,AACD,qCACI,kBAAoB,CACvB,AACD,qCACI,mBAAoB,AACpB,aAAe,CAClB,AACD,6BACI,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,SAAS,AACT,WAAW,AACX,mBAAoB,AACpB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAAyB,AACzB,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,oCACI,wBAA0B,CAC7B,AACD,iCACI,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,sBAAuB,AACvB,qBAAsB,AAClB,gBAAkB,CACzB,AACD,8CACI,kBAAmB,AACnB,WAAW,AACX,YAAa,AACb,2BAA8B,AAC9B,kBAAmB,AACnB,WAAY,AACZ,mBAAoB,AACpB,eAAgB,AAChB,iBAAkB,AAClB,aAAc,CACjB,AACD,+CACI,kBAAmB,AACnB,WAAW,AACX,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,mBAAoB,AACpB,cAAc,AACd,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC/B,AACD,0DACI,WAAY,AACZ,YAAa,AACb,aAAa,AACb,kBAAmB,AACnB,qBAAuB,CAC1B,AACD,iEACI,qBAA0B,CAC7B,AACD,oDACI,kBAAoB,CACvB,AACD,oDACI,kBAAoB,CACvB,AACD,qDACI,kBAAoB,CACvB,AACD,sDACI,kBAAoB,CACvB,AACD,uDACI,kBAAoB,CACvB,AACD,sDACI,eAAoB,CACvB,AACD,2DACI,mBAAoB,AACpB,mBAAoB,AACpB,YAAa,CAChB,AACD,iEACI,UAAW,AACX,UAAY,CACf,AACD,kEACI,WAAY,AACZ,WAAa,CAChB,AACD,iEACI,WAAY,AACZ,WAAa,CAChB,AACD,kEACI,eAAoB,CACvB,AACD,uDACI,YAAa,AACb,UAAW,AACX,aAAa,AACb,kBAAoB,CACvB",file:"threeDAnnotation.vue",sourcesContent:["\ncanvas[data-v-4bff8f66] {\n    display: block;\n}\n.canvas-container[data-v-4bff8f66]{\n    width: 100%;\n    height: 100%;\n}\n.canvas[data-v-4bff8f66]{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top:0;\n    left:0;\n}\n.menu-bar[data-v-4bff8f66]{\n    z-index: 1;\n    width: 100%;\n    height: 50px;\n    position: absolute;\n    top:0;\n    left:0;\n    padding-top: 10px;\n}\n.menu-bar .btn[data-v-4bff8f66]{\n    border-radius: 4px;\n    height: 28px;\n    padding:5px 10px;\n    line-height: 28px;\n    color:white;\n    float:right;\n}\n.menu-bar .btn-exit[data-v-4bff8f66]{\n    background: #838383;\n}\n.menu-bar .btn-save[data-v-4bff8f66]{\n    background: #EA6264;\n    margin: 0 14px;\n}\n.annotation[data-v-4bff8f66]{\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    top:78px;\n    right:28px;\n    background: #3E3E4D;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border:4px solid #3E3E4D;\n    border-radius: 2px;\n    box-sizing: border-box;\n}\n.annotation.active[data-v-4bff8f66]{\n    border: 4px solid #383838;\n}\n.annotation img[data-v-4bff8f66]{\n    width: 16px;\n    height: 16px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n}\n.annotation .annotation-desc[data-v-4bff8f66]{\n    position: absolute;\n    right:60px;\n    height: 26px;\n    background: rgba(9,9,12,0.80);\n    border-radius: 2px;\n    color:white;\n    white-space: nowrap;\n    font-size: 12px;\n    line-height: 26px;\n    padding:0 8px;\n}\n.annotation .annotation-tools[data-v-4bff8f66]{\n    position: absolute;\n    right:60px;\n    height: 26px;\n    background: #666674;\n    border-radius: 2px;\n    white-space: nowrap;\n    padding:0 8px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.annotation .annotation-tools .color-div[data-v-4bff8f66]{\n    width: 14px;\n    height: 14px;\n    margin:0 3px;\n    border-radius: 2px;\n    box-sizing: border-box;\n}\n.annotation .annotation-tools .color-div.active[data-v-4bff8f66]{\n    border: 1px solid #FFFFFF;\n}\n.annotation .annotation-tools .gry[data-v-4bff8f66]{\n    background: #D1CDCD;\n}\n.annotation .annotation-tools .red[data-v-4bff8f66]{\n    background: #D0021B;\n}\n.annotation .annotation-tools .blue[data-v-4bff8f66]{\n    background: #0096FF;\n}\n.annotation .annotation-tools .green[data-v-4bff8f66]{\n    background: #7ED321;\n}\n.annotation .annotation-tools .yellow[data-v-4bff8f66]{\n    background: #F5A623;\n}\n.annotation .annotation-tools .black[data-v-4bff8f66]{\n    background: #000000;\n}\n.annotation .annotation-tools .circle-div[data-v-4bff8f66]{\n    border-radius: 100%;\n    background: #9B9B9B;\n    margin:0 3px;\n}\n.annotation .annotation-tools .circle-div.small[data-v-4bff8f66]{\n    width: 6px;\n    height: 6px;\n}\n.annotation .annotation-tools .circle-div.medium[data-v-4bff8f66]{\n    width: 10px;\n    height: 10px;\n}\n.annotation .annotation-tools .circle-div.large[data-v-4bff8f66]{\n    width: 14px;\n    height: 14px;\n}\n.annotation .annotation-tools .circle-div.active[data-v-4bff8f66]{\n    background: #FFFFFF;\n}\n.annotation .annotation-tools .border[data-v-4bff8f66]{\n    height: 20px;\n    width: 1px;\n    margin:0 5px;\n    background: #59596A;\n}\n"],sourceRoot:""}])},572:function(n,t,e){var o=e(517);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(205)("6185127f",o,!0)},582:function(n,t,e){var o=e(527);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(205)("25ec3a14",o,!0)},660:function(n,t,e){e(582);var o=e(6)(e(454),e(693),"data-v-4bff8f66",null);n.exports=o.exports},680:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",[n._v("\n    this is annotation\n")])},staticRenderFns:[]}},693:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{ref:"container",staticClass:"canvas-container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:n.loadCom,expression:"loadCom"}],ref:"canvas"}),n._v(" "),n.loadCom?n._e():o("loading",{attrs:{percent:n.loadPercent}}),n._v(" "),o("canvas",{directives:[{name:"show",rawName:"v-show",value:n.annotation.showTools,expression:"annotation.showTools"}],staticClass:"canvas annotation-canvas",attrs:{id:"AnCanvas"}}),n._v(" "),o("canvas",{directives:[{name:"show",rawName:"v-show",value:n.annotation.showTools,expression:"annotation.showTools"}],staticClass:"canvas annotation-fake-canvas",attrs:{id:"FaCanvas"},on:{mousedown:function(t){n.mouseDown(t)},mousemove:function(t){n.mouseMove(t)},mouseup:n.mouseUp}}),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),o("div",{staticClass:"annotation",class:{active:n.annotation.showTools},on:{mouseover:n.overShow,mouseout:n.overHide,click:n.show}},[o("img",{attrs:{src:e(423)}}),n._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:n.annotation.showDesc,expression:"annotation.showDesc"}],staticClass:"annotation-desc"},[n._v("\n            Start annotation\n        ")]),n._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:n.annotation.showTools,expression:"annotation.showTools"}],staticClass:"annotation-tools",on:{click:function(n){n.stopPropagation()}}},[n._l(n.sizeList,function(t){return o("div",{staticClass:"circle-div",class:{active:t.selected},style:t.style,on:{click:function(e){e.stopPropagation(),n.select(t.style,"size")}}})}),n._v(" "),o("div",{staticClass:"border"}),n._v(" "),n._l(n.colorList,function(t){return o("div",{staticClass:"color-div",class:{active:t.selected},style:{backgroundColor:t.hex},on:{click:function(e){e.stopPropagation(),n.select(t.hex,"color")}}})}),n._v(" "),o("div",{staticClass:"border"}),n._v(" "),o("div",{staticClass:"exit"}),n._v(" "),o("div",{staticClass:"save"})],2)])],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"menu-bar"},[e("p",[n._v("Feedback system")]),n._v(" "),e("div",{staticClass:"btn btn-save"},[n._v("Save and Send")]),n._v(" "),e("div",{staticClass:"btn btn-exit"},[n._v("Exit")])])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"tool-list"},[o("div",{staticClass:"tool-tabs"},[o("ul",[o("li",[o("img",{attrs:{src:e(423),alt:""}})])])]),n._v(" "),o("div",{staticClass:"annotation-list"},[o("div",{staticClass:"annotation-container"},[o("div",{staticClass:"annotation-title"},[o("p",[n._v("Feedback  No.1")]),n._v(" "),o("img",{attrs:{src:"",alt:""}})])])])])}]}}});
//# sourceMappingURL=18.f1211e30105c66ac948c.js.map