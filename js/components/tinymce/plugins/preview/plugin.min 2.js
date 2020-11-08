/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=tinymce.util.Tools.resolve("tinymce.util.Tools"),m=tinymce.util.Tools.resolve("tinymce.Env"),i=function(e){var t=function(t){var n="",i=t.dom.encode,e=t.getParam("content_style","");n+='<base href="'+i(t.documentBaseURI.getURI())+'">',e&&(n+='<style type="text/css">'+e+"</style>");var o=t.getParam("content_css_cors",!1,"boolean")?' crossorigin="anonymous"':"";l.each(t.contentCSS,function(e){n+='<link type="text/css" rel="stylesheet" href="'+i(t.documentBaseURI.toAbsolute(e))+'"'+o+">"});var r=t.settings.body_id||"tinymce";-1!==r.indexOf("=")&&(r=(r=t.getParam("body_id","","hash"))[t.id]||r);var a=t.settings.body_class||"";-1!==a.indexOf("=")&&(a=(a=t.getParam("body_class","","hash"))[t.id]||"");var c='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(m.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",s=t.getBody().dir,d=s?' dir="'+i(s)+'"':"";return"<!DOCTYPE html><html><head>"+n+'</head><body id="'+i(r)+'" class="mce-content-body '+i(a)+'"'+d+">"+t.getContent()+c+"</body></html>"}(e);e.windowManager.open({title:"Preview",size:"large",body:{type:"panel",items:[{name:"preview",type:"iframe",sandboxed:!0}]},buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{preview:t}}).focus("close")};!function t(){e.add("preview",function(e){var t,n;(t=e).addCommand("mcePreview",function(){i(t)}),(n=e).ui.registry.addButton("preview",{icon:"preview",tooltip:"Preview",onAction:function(){return n.execCommand("mcePreview")}}),n.ui.registry.addMenuItem("preview",{icon:"preview",text:"Preview",onAction:function(){return n.execCommand("mcePreview")}})})}()}();