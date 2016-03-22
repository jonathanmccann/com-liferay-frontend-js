define("frontend-js-metal-web@1.0.2/metal-drag-drop/src/DragDrop-min", ["exports","metal/src/metal","metal-dom/src/all/dom","./Drag","metal-position/src/all/position","metal-events/src/events"], function(t,e,r,o,i){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(r),u=a(o),g=a(i),f=function(t){function r(e){s(this,r);var o=n(this,t.call(this,e));return (o.activeTargets_=[], o)}return (c(r,t), r.prototype.addTarget=function(t){this.targets.push(t),this.targets=this.targets}, r.prototype.buildEventObject_=function(){var e=t.prototype.buildEventObject_.call(this);return (e.target=this.activeTargets_[0], e.allActiveTargets=this.activeTargets_, e)}, r.prototype.cleanUpAfterDragging_=function(){t.prototype.cleanUpAfterDragging_.call(this),this.targets.forEach(function(t){return t.removeAttribute("aria-dropeffect")}),this.activeTargets_.length&&l["default"].removeClasses(this.activeTargets_[0],this.targetOverClass),this.activeTargets_=[]}, r.prototype.findAllActiveTargets_=function(){var t,e=[],r=this.getSourceRegion_(),o=this.targets;return (o.forEach(function(i,a){var s=g["default"].getRegion(i);o[a]!==this.activeDragPlaceholder_&&g["default"].intersectRegion(s,r)&&(!t||g["default"].insideRegion(t,s)?(e=[o[a]].concat(e),t=s):e.push(o[a]))}.bind(this)), e)}, r.prototype.getSourceRegion_=function(){if(e.core.isDefAndNotNull(this.mousePos_)){var t=this.mousePos_.x,r=this.mousePos_.y;return g["default"].makeRegion(r,0,t,t,r,0)}var o=e.object.mixin({},this.sourceRegion_);return (o.left-=document.body.scrollLeft, o.right-=document.body.scrollLeft, o.top-=document.body.scrollTop, o.bottom-=document.body.scrollTop, o)}, r.prototype.removeTarget=function(t){e.array.remove(this.targets,t),this.targets=this.targets}, r.prototype.startDragging_=function(){var e=this;this.ariaDropEffect&&this.targets.forEach(function(t){return t.setAttribute("aria-dropeffect",e.ariaDropEffect)}),t.prototype.startDragging_.call(this)}, r.prototype.updatePosition=function(e,o){t.prototype.updatePosition.call(this,e,o);var i=this.findAllActiveTargets_();i[0]!==this.activeTargets_[0]&&(this.activeTargets_[0]&&(l["default"].removeClasses(this.activeTargets_[0],this.targetOverClass),this.emit(r.Events.TARGET_LEAVE,this.buildEventObject_())),this.activeTargets_=i,this.activeTargets_[0]&&(l["default"].addClasses(this.activeTargets_[0],this.targetOverClass),this.emit(r.Events.TARGET_ENTER,this.buildEventObject_())))}, r)}(u["default"]);f.prototype.registerMetalComponent&&f.prototype.registerMetalComponent(f,"DragDrop"),f.ATTRS={ariaDropEffect:{validator:e.core.isString},targetOverClass:{validator:e.core.isString,value:"targetOver"},targets:{setter:"toElements_",validator:"validateElementOrString_"}},f.Events={DRAG:"drag",END:"end",TARGET_ENTER:"targetEnter",TARGET_LEAVE:"targetLeave"},t["default"]=f});