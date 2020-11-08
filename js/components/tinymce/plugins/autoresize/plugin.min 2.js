/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),h=tinymce.util.Tools.resolve("tinymce.Env"),r=tinymce.util.Tools.resolve("tinymce.util.Delay"),v=function(e){return e.getParam("min_height",e.getElement().offsetHeight,"number")},s=function(e,t,n,i,o){r.setEditorTimeout(e,function(){b(e,t),n--?s(e,t,n,i,o):o&&o()},i)},y=function(e,t){var n=e.getBody();n&&(n.style.overflowY=t?"":"hidden",t||(n.scrollTop=0))},p=function(e,t,n,i){var o=parseInt(e.getStyle(t,n,i),10);return isNaN(o)?0:o},b=function(e,t){var n,i,o,r=e.dom,a=e.getDoc();if(a)if((s=e).plugins.fullscreen&&s.plugins.fullscreen.isFullscreen())y(e,!0);else{var s,u=a.documentElement,g=e.getParam("autoresize_bottom_margin",50,"number");i=v(e);var l=p(r,u,"margin-top",!0),f=p(r,u,"margin-bottom",!0);(o=u.offsetHeight+l+f+g)<0&&(o=0);var c=e.getContainer().offsetHeight-e.getContentAreaContainer().offsetHeight;o+c>v(e)&&(i=o+c);var m=e.getParam("max_height",0,"number");if(m&&m<i?(i=m,y(e,!0)):y(e,!1),i!==t.get()){if(n=i-t.get(),r.setStyle(e.getContainer(),"height",i+"px"),t.set(i),e.fire("ResizeEditor"),h.browser.isSafari()&&h.mac){var d=e.getWin();d.scrollTo(d.pageXOffset,d.pageYOffset)}e.hasFocus()&&e.selection.scrollIntoView(e.selection.getNode()),h.webkit&&n<0&&b(e,t)}}};!function t(){e.add("autoresize",function(e){if(e.settings.hasOwnProperty("resize")||(e.settings.resize=!1),!e.inline){var t=(a=0,{get:function(){return a},set:function(e){a=e}});r=t,(o=e).addCommand("mceAutoResize",function(){b(o,r)}),i=t,(n=e).on("init",function(){var e=n.getParam("autoresize_overflow_padding",1,"number"),t=n.dom;t.setStyles(n.getDoc().documentElement,{height:"auto"}),t.setStyles(n.getBody(),{paddingLeft:e,paddingRight:e,"min-height":0})}),n.on("NodeChange SetContent keyup FullscreenStateChanged ResizeContent",function(){b(n,i)}),n.getParam("autoresize_on_init",!0,"boolean")&&n.on("init",function(){s(n,i,20,100,function(){s(n,i,5,1e3)})})}var n,i,o,r,a})}()}();