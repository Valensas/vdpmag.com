/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
jquery.animate-enhanced plugin v0.99
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(c,I,J){function O(a,b,c,f,l,k,h,p,q){var t=!1,h=!0===h&&!0===p,b=b||{};b.original||(b.original={},t=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};for(var p=b.meta,m=b.original,g=b.properties,P=b.secondary,B=r.length-1;0<=B;B--){var D=r[B]+"transition-property",E=r[B]+"transition-duration",i=r[B]+"transition-timing-function",c=h?r[B]+"transform":c;t&&(m[D]=a.css(D)||"",m[E]=a.css(E)||"",m[i]=a.css(i)||"");P[c]=h?(!0===q||!0===y&&!1!==q)&&K?"translate3d("+p.left+"px, "+p.top+
"px, 0)":"translate("+p.left+"px,"+p.top+"px)":k;g[D]=(g[D]?g[D]+",":"")+c;g[E]=(g[E]?g[E]+",":"")+f+"ms";g[i]=(g[i]?g[i]+",":"")+l}return b}function z(a){for(var c in a)return!1;return!0}function G(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function L(a){var c=!0;a.each(function(a,f){return c=c&&f.ownerDocument});return c}var Q="top right bottom left opacity height width".split(" "),H=["top","right","bottom","left"],r=["-webkit-","-moz-","-o-",""],R=["avoidTransforms","useTranslate3d","leaveTransforms"],
S=/^([+-]=)?([\d+-.]+)(.*)$/,T=/([A-Z])/g,U={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},M=null,F=!1,A=(document.body||document.documentElement).style,N=void 0!==A.WebkitTransition||void 0!==A.MozTransition||void 0!==A.OTransition||void 0!==A.transition,K="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,y=K;c.expr&&c.expr.filters&&(M=c.expr.filters.animated,c.expr.filters.animated=function(a){return c(a).data("events")&&c(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?
!0:M.call(this,a)});c.extend({toggle3DByDefault:function(){return y=!y},toggleDisabledByDefault:function(){return F=!F}});c.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),c={x:0,y:0};if(a)for(var n=r.length-1;0<=n;n--){var f=a.getPropertyValue(r[n]+"transform");if(f&&/matrix/i.test(f)){a=f.replace(/^matrix\(/i,"").split(/, |\)$/g);c={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return c};c.fn.animate=function(a,b,n,f){var a=a||{},l=!("undefined"!==
typeof a.bottom||"undefined"!==typeof a.right),k=c.speed(b,n,f),h=this,p=0,q=function(){p--;0===p&&"function"===typeof k.complete&&k.complete.apply(h,arguments)},t;if(!(t=!0===("undefined"!==typeof a.avoidCSSTransitions?a.avoidCSSTransitions:F)))if(!(t=!N))if(!(t=z(a))){var m;a:{for(m in a)if(("width"==m||"height"==m)&&("show"==a[m]||"hide"==a[m]||"toggle"==a[m])){m=!0;break a}m=!1}t=m||0>=k.duration||!0===c.fn.animate.defaults.avoidTransforms&&!1!==a.avoidTransforms}return t?I.apply(this,arguments):
this[!0===k.queue?"queue":"each"](function(){var g=c(this),b=c.extend({},k),h=function(b){var f=g.data("jQe")||{original:{}},e={};if(2==b.eventPhase){if(!0!==a.leaveTransforms){for(b=r.length-1;0<=b;b--)e[r[b]+"transform"]="";if(l&&"undefined"!==typeof f.meta)for(var b=0,d;d=H[b];++b)e[d]=f.meta[d+"_o"]+"px",c(this).css(d,e[d])}g.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(f.original).css(e).data("jQe",null);"hide"===a.opacity&&g.css({display:"none",opacity:""});q.call(this)}},
f={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",
easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",
easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},m={},f=f[b.easing||"swing"]?f[b.easing||"swing"]:b.easing||"swing",i;for(i in a)if(-1===c.inArray(i,R)){var n=-1<c.inArray(i,H),j;var d=g,w=a[i],u=i,s=n&&!0!==
a.avoidTransforms;if("d"==u)j=void 0;else if(L(d)){var e=S.exec(w);j="auto"===d.css(u)?0:d.css(u);j="string"==typeof j?G(j):j;"string"==typeof w&&G(w);var s=!0===s?0:j,t=d.is(":hidden"),v=d.translation();"left"==u&&(s=parseInt(j,10)+v.x);"right"==u&&(s=parseInt(j,10)+v.x);"top"==u&&(s=parseInt(j,10)+v.y);"bottom"==u&&(s=parseInt(j,10)+v.y);!e&&"show"==w?(s=1,t&&d.css({display:"LI"==d.context.tagName?"list-item":"block",opacity:0})):!e&&"hide"==w&&(s=0);e?(d=parseFloat(e[2]),e[1]&&(d=("-="===e[1]?
-1:1)*d+parseInt(s,10)),j=d):j=s}else j=void 0;if(e=!0!==a.avoidTransforms)if(e=i,d=j,w=g,L(w)){u=-1<c.inArray(e,Q);if(("width"==e||"height"==e||"opacity"==e)&&parseFloat(d)===parseFloat(w.css(e)))u=!1;e=u}else e=!1;if(e){e=g;d=i;w=b.duration;u=f;j=n&&!0===a.avoidTransforms?j+"px":j;var n=n&&!0!==a.avoidTransforms,s=l,t=!0===a.useTranslate3d,v=(v=e.data("jQe"))&&!z(v)?v:c.extend(!0,{},U),x=j;if(-1<c.inArray(d,H)){var C=v.meta,A=G(e.css(d))||0,y=d+"_o",x=j-A;C[d]=x;C[y]="auto"==e.css(d)?0+x:A+x||0;
v.meta=C;s&&0===x&&(x=0-C[y],C[d]=x,C[y]=0)}e.data("jQe",O(e,v,d,w,u,x,n,s,t))}else m[i]=a[i]}g.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((i=g.data("jQe"))&&!z(i)&&!z(i.secondary)){p++;g.css(i.properties);var F=i.secondary;setTimeout(function(){g.bind("webkitTransitionEnd oTransitionEnd transitionend",h).css(F)})}else b.queue=!1;z(m)||(p++,I.apply(g,[m,{duration:b.duration,easing:c.easing[b.easing]?b.easing:c.easing.swing?"swing":"linear",complete:q,queue:b.queue}]));return!0})};
c.fn.animate.defaults={};c.fn.stop=function(a,b,n){if(!N)return J.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var f=c(this),l=f.data("jQe");if(l&&!z(l)){var k,h={};if(b){if(h=l.secondary,!n&&void 0!==typeof l.meta.left_o||void 0!==typeof l.meta.top_o){h.left=void 0!==typeof l.meta.left_o?l.meta.left_o:"auto";h.top=void 0!==typeof l.meta.top_o?l.meta.top_o:"auto";for(k=r.length-1;0<=k;k--)h[r[k]+"transform"]=""}}else if(!z(l.secondary)){var p=window.getComputedStyle(f[0],null);if(p)for(var q in l.secondary)if(l.secondary.hasOwnProperty(q)&&
(q=q.replace(T,"-$1").toLowerCase(),h[q]=p.getPropertyValue(q),!n&&/matrix/i.test(h[q]))){k=h[q].replace(/^matrix\(/i,"").split(/, |\)$/g);h.left=parseFloat(k[4])+parseFloat(f.css("left"))+"px"||"auto";h.top=parseFloat(k[5])+parseFloat(f.css("top"))+"px"||"auto";for(k=r.length-1;0<=k;k--)h[r[k]+"transform"]=""}}f.unbind("webkitTransitionEnd oTransitionEnd transitionend");f.css(l.original).css(h).data("jQe",null)}else J.apply(f,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);



/*
* $ lightbox_me
* By: Buck Wilson
* Version : 2.3
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


(function($) {

    $.fn.lightbox_me = function(options) {

        return this.each(function() {

            var
                opts = $.extend({}, $.fn.lightbox_me.defaults, options),
                $overlay = $(),
                $self = $(this),
                $iframe = $('<iframe id="foo" style="z-index: ' + (opts.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>'),
                ie6 = ($.browser.msie && $.browser.version < 7);

            if (opts.showOverlay) {
                //check if there's an existing overlay, if so, make subequent ones clear
               var $currentOverlays = $(".js_lb_overlay:visible");
                if ($currentOverlays.length > 0){
                    $overlay = $('<div class="lb_overlay_clear js_lb_overlay"/>');
                } else {
                    $overlay = $('<div class="' + opts.classPrefix + '_overlay js_lb_overlay"/>');
                }
            }

            /*----------------------------------------------------
               DOM Building
            ---------------------------------------------------- */
            if (ie6) {
                var src = /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank';
                $iframe.attr('src', src);
                $('body').append($iframe);
            } // iframe shim for ie6, to hide select elements
            $('body').append($self.hide()).append($overlay);


            /*----------------------------------------------------
               Overlay CSS stuffs
            ---------------------------------------------------- */

            // set css of the overlay
            if (opts.showOverlay) {
                setOverlayHeight(); // pulled this into a function because it is called on window resize.
                $overlay.css({ position: 'absolute', width: '100%', top: 0, left: 0, right: 0, bottom: 0, zIndex: (opts.zIndex + 2), display: 'none' });
				if (!$overlay.hasClass('lb_overlay_clear')){
                	$overlay.css(opts.overlayCSS);
                }
            }

            /*----------------------------------------------------
               Animate it in.
            ---------------------------------------------------- */
               //
            if (opts.showOverlay) {
                $overlay.fadeIn(opts.overlaySpeed, function() {
                    setSelfPosition();
                    $self[opts.appearEffect](opts.lightboxSpeed, function() { setOverlayHeight(); setSelfPosition(); opts.onLoad()});
                });
            } else {
                setSelfPosition();
                $self[opts.appearEffect](opts.lightboxSpeed, function() { opts.onLoad()});
            }

            /*----------------------------------------------------
               Hide parent if parent specified (parentLightbox should be jquery reference to any parent lightbox)
            ---------------------------------------------------- */
            if (opts.parentLightbox) {
                opts.parentLightbox.fadeOut(200);
            }


            /*----------------------------------------------------
               Bind Events
            ---------------------------------------------------- */

            $(window).resize(setOverlayHeight)
                     .resize(setSelfPosition)
                     .scroll(setSelfPosition);
                     
            $(window).bind('keyup.lightbox_me', observeKeyPress);
                     
            if (opts.closeClick) {
                $overlay.click(function(e) { closeLightbox(); e.preventDefault; });
            }
            $self.delegate(opts.closeSelector, "click", function(e) {
                closeLightbox(); e.preventDefault();
            });
            $self.bind('close', closeLightbox);
            $self.bind('reposition', setSelfPosition);

            

            /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


            /*----------------------------------------------------
               Private Functions
            ---------------------------------------------------- */

            /* Remove or hide all elements */
            function closeLightbox() {
                var s = $self[0].style;
                if (opts.destroyOnClose) {
                    $self.add($overlay).remove();
                } else {
                    $self.add($overlay).hide();
                }

                //show the hidden parent lightbox
                if (opts.parentLightbox) {
                    opts.parentLightbox.fadeIn(200);
                }

                $iframe.remove();
                
				// clean up events.
                $self.undelegate(opts.closeSelector, "click");

                $(window).unbind('reposition', setOverlayHeight);
                $(window).unbind('reposition', setSelfPosition);
                $(window).unbind('scroll', setSelfPosition);
                $(window).unbind('keyup.lightbox_me');
                if (ie6)
                    s.removeExpression('top');
                opts.onClose();
            }


            /* Function to bind to the window to observe the escape/enter key press */
            function observeKeyPress(e) {
                if((e.keyCode == 27 || (e.DOM_VK_ESCAPE == 27 && e.which==0)) && opts.closeEsc) closeLightbox();
            }


            /* Set the height of the overlay
                    : if the document height is taller than the window, then set the overlay height to the document height.
                    : otherwise, just set overlay height: 100%
            */
            function setOverlayHeight() {
                if ($(window).height() < $(document).height()) {
                    $overlay.css({height: $(document).height() + 'px'});
                     $iframe.css({height: $(document).height() + 'px'}); 
                } else {
                    $overlay.css({height: '100%'});
                    if (ie6) {
                        $('html,body').css('height','100%');
                        $iframe.css('height', '100%');
                    } // ie6 hack for height: 100%; TODO: handle this in IE7
                }
            }


            /* Set the position of the modal'd window ($self)
                    : if $self is taller than the window, then make it absolutely positioned
                    : otherwise fixed
            */
            function setSelfPosition() {
                var s = $self[0].style;

                // reset CSS so width is re-calculated for margin-left CSS
                $self.css({left: '50%', marginLeft: ($self.outerWidth() / 2) * -1,  zIndex: (opts.zIndex + 3) });


                /* we have to get a little fancy when dealing with height, because lightbox_me
                    is just so fancy.
                 */

                // if the height of $self is bigger than the window and self isn't already position absolute
                if (($self.height() + 80  >= $(window).height()) && ($self.css('position') != 'absolute' || ie6)) {

                    // we are going to make it positioned where the user can see it, but they can still scroll
                    // so the top offset is based on the user's scroll position.
                    var topOffset = $(document).scrollTop() + 40;
                    $self.css({position: 'absolute', top: topOffset + 'px', marginTop: 0})
                    if (ie6) {
                        s.removeExpression('top');
                    }
                } else if ($self.height()+ 80  < $(window).height()) {
                    //if the height is less than the window height, then we're gonna make this thing position: fixed.
                    // in ie6 we're gonna fake it.
                    if (ie6) {
                        s.position = 'absolute';
                        if (opts.centered) {
                            s.setExpression('top', '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')
                            s.marginTop = 0;
                        } else {
                            var top = (opts.modalCSS && opts.modalCSS.top) ? parseInt(opts.modalCSS.top) : 0;
                            s.setExpression('top', '((blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"')
                        }
                    } else {
                        if (opts.centered) {
                            $self.css({ position: 'fixed', top: '50%', marginTop: ($self.outerHeight() / 2) * -1})
                        } else {
                            $self.css({ position: 'fixed'}).css(opts.modalCSS);
                        }

                    }
                }
            }

        });



    };

    $.fn.lightbox_me.defaults = {

        // animation
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,

        // close
        closeSelector: ".close",
        closeClick: true,
        closeEsc: true,

        // behavior
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,

        // callbacks
        onLoad: function() {},
        onClose: function() {},

        // style
        classPrefix: 'lb',
        zIndex: 999,
        centered: false,
        modalCSS: {top: '40px'},
        overlayCSS: {background: 'black', opacity: .3}
    }
})(jQuery);


( function(window, undefined) {
"use strict";

var hash = (function() {
    
    var fromHash = function() {
        var params = window.location.hash ? window.location.hash.substr(1).split("&") : [],
            paramsObject = {};
        
        for(var i = 0; i < params.length; i++) {
            var a = params[i].split("=");
            paramsObject[a[0]] =  decodeURIComponent(a[1]);
        }
        return paramsObject;
    };
    
    var toHash = function(params) {
        var str = [];
        for(var p in params) {
            str.push(p + "=" + encodeURIComponent(params[p]));
        }
        window.location.hash = str.join("&");
    };
	
    return {
        get: function(param) {
            var params = fromHash();
            if (param) {
                return params[param];
            } else {
                return params;
            }
        },
        add: function(newParams) {
            var params = fromHash();
            for (var p in newParams) {
                params[p] = newParams[p];
            }
            toHash(params);
        },
        remove: function(removeParams) {
            removeParams = (typeof(removeParams)=='string') ? [removeParams] : removeParams;
            var params = fromHash();
            for (var i = 0; i < removeParams.length; i++) {
                delete params[removeParams[i]];   
            }
            toHash(params);
        },
        clear: function() {
            toHash({});
        }
    };
})();

window.hash = hash;
})(window);



/*
Sequence.js (http://www.sequencejs.com)
Version: 0.8.3 Beta
Author: Ian Lunn @IanLunn
Author URL: http://www.ianlunn.co.uk/
Github: https://github.com/IanLunn/Sequence

This is a FREE script and is available under a MIT License:
http://www.opensource.org/licenses/mit-license.php

Sequence.js and its dependencies are (c) Ian Lunn Design 2012 unless otherwise stated.

Sequence also relies on the following open source scripts:

- 	jQuery imagesLoaded 2.1.0 (http://github.com/desandro/imagesloaded)
	Paul Irish et al 
	Available under a MIT License: http://www.opensource.org/licenses/mit-license.php

- 	jQuery TouchWipe 1.1.1 (http://www.netcu.de/jquery-touchwipe-iphone-ipad-library)
	Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
	Available under a MIT License: http://www.opensource.org/licenses/mit-license.php

- 	Modernizr 2.6.1 Custom Build (http://modernizr.com/)
	Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
	Available under the BSD and MIT licenses: www.modernizr.com/license/
*/

(function($) {
	function Sequence(element, options, defaults, get) {
		var self = this;
		self.container = $(element),
		self.sequence = self.container.children("ul");
		
		try { //is Modernizr.prefixed installed?
			Modernizr.prefixed;
			if(Modernizr.prefixed === undefined){
				throw "undefined";
			}
		}
		catch(err) { //if not...get the custom build necessary for Sequence
			get.modernizr();
		}
		
		var prefixes = { //convert JS transition names to CSS names
		'WebkitTransition' : '-webkit-',
		'MozTransition'    : '-moz-',
		'OTransition'      : '-o-',
		'msTransition'     : '-ms-',
		'transition'       : ''
		},
		transitions = { //convert JS transition names to JS transition end and animation end event names
		'WebkitTransition' : 'webkitTransitionEnd webkitAnimationEnd',
		'MozTransition'    : 'transitionend animationend',
		'OTransition'      : 'otransitionend oanimationend',
		'msTransition'     : 'MSTransitionEnd MSAnimationEnd',
		'transition'       : 'transitionend animationend'
		};
		
		self.prefix = prefixes[Modernizr.prefixed('transition')], //work out the CSS prefix for the browser being used (-webkit- for example)
		self.transitionEnd = transitions[Modernizr.prefixed('transition')], //work out the JS transitionEnd name for the browser being used (webkitTransitionEnd webkitAnimationEnd for example)
		self.transitionProperties = {},
		self.numberOfFrames = self.sequence.children("li").length, //number of frames (<li>) Sequence consists of

		self.transitionsSupported = (self.prefix !== undefined) ? true : false, //determine if transitions are supported
		self.hasTouch = ("ontouchstart" in window) ? true : false, //determine if this is a touch enabled device
		self.active, //determines whether Sequence is animating
		self.navigationSkipThresholdActive = false, //when active, navigation is prevented (used to stop very fast navigation)
		self.autoPlayTimer, //the timer used for the autoPlay feature
		self.isPaused = false, //whether Sequence is paused via being hovered over
		self.isHardPaused = false, //whether Sequence is paused via a pause button
		self.mouseover = false,
		self.defaultPreloader,
		self.nextButton,
		self.prevButton,
		self.pauseButton,
		self.pauseIcon,
		self.delayUnpause,
		self.init = {
			/*functionality to initiate the preloader, next/previous buttons and so on
			
			devOption: true = the developer wants to use the default selector. false = don't use a uiElement. string = the developer defined selector to use for the UI element
			defaultOption: the default selector to use for the UI element, when the developer specifies false for devOption
			*/
			uiElements: function(devOption, defaultOption) { 
				switch(devOption) {
					case false: //don't set up a uiElement
						return undefined;

					case true: //use the default uiElement
					    if(defaultOption === ".sequence-preloader") { //if setting up the preloader...
					        get.defaultPreloader(self.container, self.transitionsSupported, self.prefix); //get the default preloader
					    };
						return $(defaultOption); //return the default element

					default: //if using a developer defined selector...
						return $(devOption); //return the developer defined element
				}
			}
		};

		//Callbacks
		self.paused = function() {},						//executes when Sequence is paused
		self.unpaused = function() {},						//executes when Sequence is unpaused
		
		self.beforeNextFrameAnimatesIn = function() {},		//executes before the next frame animates in
		self.afterNextFrameAnimatesIn = function() {},		//executes after the next frame animates in
		self.beforeCurrentFrameAnimatesOut = function() {},	//executes before the current frame animates out
		self.afterCurrentFrameAnimatesOut = function() {},	//executes after the current frame animates out

		self.afterLoaded = function() {};					//executes after Sequence is initiated
		
		//INIT
		self.settings = $.extend({}, defaults, options); //combine default options with developer defined ones
		self.settings.preloader = self.init.uiElements(self.settings.preloader, ".sequence-preloader"); //set up the preloader and save it
		self.firstFrame = (self.settings.animateStartingFrameIn) ? true : false; //determine if the first frame should animate in
		self.settings.unpauseDelay = (self.settings.unpauseDelay === null) ? self.settings.autoPlayDelay : self.settings.unpauseDelay; //if the unpauseDelay is not specified, make it the same as the autoPlayDelay speed
		self.currentHashTag; //the current hash tag taken from the URL
		self.getHashTagFrom = (self.settings.hashDataAttribute) ? "data-sequence-hashtag": "id"; //get the hashtag from the ID or data attribute?  
		self.frameHashID = []; //array that matches frames with has IDs
		self.direction = self.settings.autoPlayDirection;
		
		if(self.settings.hideFramesUntilPreloaded && self.settings.preloader) { //if using a preloader and hiding frames until preloading has completed...
		    self.sequence.children("li").hide(); //hide Sequence's frames
		}
		
		if(self.prefix === "-o-") { //if Opera prefixes are required...
		    self.transitionsSupported = get.operaTest(); //run a test to see if Opera correctly supports transitions (Opera 11 has bugs relating to transitions)
		}
        
        self.modifyElements(self.sequence.children("li"), "0s"); //reset transition time to 0s
		self.sequence.children("li").removeClass("animate-in"); //remove any instance of "animate-in", which should be used incase JS is disabled
		
		//functionality to run once Sequence has preloaded
		function oncePreloaded() {
		    self.afterLoaded(); //callback
		    if(self.settings.hideFramesUntilPreloaded && self.settings.preloader) {
		        self.sequence.children("li").show();
		    }
		    if(self.settings.preloader){
		    	if(self.settings.hidePreloaderUsingCSS && self.transitionsSupported) {
		    		self.prependPreloadingCompleteTo = (self.settings.prependPreloadingComplete == true) ? self.settings.preloader : $(self.settings.prependPreloadingComplete);
		    		self.prependPreloadingCompleteTo.addClass("preloading-complete");
		    		setTimeout(init, self.settings.hidePreloaderDelay);
		    	}else{

		    		self.settings.preloader.fadeOut(self.settings.hidePreloaderDelay, function() {
		    			clearInterval(self.defaultPreloader);
		    			init();
		    		});
		    	}
		    }else{
		    	init();
		    }
		}

		var preloadTheseFramesLength = self.settings.preloadTheseFrames.length; //how many frames to preload?
		var preloadTheseImagesLength = self.settings.preloadTheseImages.length; //how many single images to load?

		if(self.settings.preloader && (preloadTheseFramesLength !== 0 || preloadTheseImagesLength !== 0)) { //if using the preloader and the dev has specified some images should preload...
		    function saveImagesToArray(length, srcOnly) {
		    	var imagesToPreload = []; //saves the images that are to be preloaded
			    	if(!srcOnly){
			    		for(var i = length; i > 0; i--){ //for each frame to be preloaded...
			    			self.sequence.children("li:nth-child("+self.settings.preloadTheseFrames[i-1]+")").find("img").each(function() { //find <img>'s in specific frames, and for each found...
			    				imagesToPreload.push($(this)[0]); //add it to the array of images to be preloaded
			    			});
		            	}
			    	}else{
			    		for(var i = length; i > 0; i--) { //for each frame to be preloaded...
		            		imagesToPreload.push($("body").find('img[src="'+self.settings.preloadTheseImages[i-1]+'"]')[0]); //find any <img> with the given source and add it to the array of images to be preloaded
			    		}
			    	}			    
		        return imagesToPreload;
		    }
	
            var frameImagesToPreload = saveImagesToArray(preloadTheseFramesLength); //get images from particular Sequence frames to be preloaded
           	var individualImagesToPreload = saveImagesToArray(preloadTheseImagesLength, true); //get images with specific source values to be preloaded
            var imagesToPreload = $(frameImagesToPreload.concat(individualImagesToPreload)); //combine frame images and individual images
			var imagesToPreloadLength = imagesToPreload.length;

			imagesLoaded(imagesToPreload, oncePreloaded);
    	}else{ //if not using the preloader...
		    $(window).bind("load", function() { //when the window loads...
		    	oncePreloaded(); //run the init functionality when the preloader has finished
		    	$(this).unbind("load"); //unbind the load event as it's no longer needed
		    });
		}

		//jQuery imagesLoaded plugin v2.1.0 (http://github.com/desandro/imagesloaded)
		function imagesLoaded(imagesToPreload, callback) {
			BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
			var $this = imagesToPreload,
				deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
				hasNotify = $.isFunction(deferred.notify),
				$images = $this.find('img').add( $this.filter('img') ),
				loaded = [],
				proper = [],
				broken = [];

			//Register deferred callbacks
			if($.isPlainObject(callback)) {
				$.each(callback, function(key, value) {
					if(key === 'callback') {
						callback = value;
					}else if(deferred) {
						deferred[key](value);
					}
				});
			}

			function doneLoading() {
				var $proper = $(proper),
					$broken = $(broken);

				if(deferred) {
					if(broken.length) {
						deferred.reject($images, $proper, $broken);
					}else{
						deferred.resolve($images);
					}
				}

				if($.isFunction(callback)) {
					callback.call($this, $images, $proper, $broken);
				}
			}

			function imgLoaded( img, isBroken ) {	
				if(img.src === BLANK || $.inArray(img, loaded) !== -1) { // don't proceed if BLANK image, or image is already loaded
					return;
				}
				
				loaded.push(img); // store element in loaded images array

				if(isBroken) { // keep track of broken and properly loaded images
					broken.push(img);
				}else{
					proper.push(img);
				}

				$.data(img, 'imagesLoaded', {isBroken: isBroken, src: img.src }); // cache image and its state for future calls

				if(hasNotify) { // trigger deferred progress method if present
					deferred.notifyWith($(img), [isBroken, $images, $(proper), $(broken)]);
				}

				if($images.length === loaded.length) { // call doneLoading and clean listeners if all images are loaded
					setTimeout(doneLoading);
					$images.unbind('.imagesLoaded');
				}
			}

			if(!$images.length) { // if no images, trigger immediately
				doneLoading();
			}else{
				$images.bind('load.imagesLoaded error.imagesLoaded', function(event) {
					imgLoaded(event.target, event.type === 'error'); // trigger imgLoaded
				}).each(function(i, el) {
					var src = el.src;
					var cached = $.data(el, 'imagesLoaded'); // find out if this image has been already checked for status if it was, and src has not changed, call imgLoaded on it
					if(cached && cached.src === src) {
						imgLoaded(el, cached.isBroken);
						return;
					}

					if(el.complete && el.naturalWidth !== undefined) { // if complete is true and browser supports natural sizes, try to check for image status manually
						imgLoaded(el, el.naturalWidth === 0 || el.naturalHeight === 0);
						return;
					}

					// cached images don't fire load sometimes, so we reset src, but only when dealing with IE, or image is complete (loaded) and failed manual check webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
					if(el.readyState || el.complete) {
						el.src = BLANK;
						el.src = src;
					}
				});
			}
		};		
		
		function init() {
			$(self.settings.preloader).remove(); //remove the preloader element
			
			self.nextButton = self.init.uiElements(self.settings.nextButton, ".next"); //set up the next button
			self.prevButton = self.init.uiElements(self.settings.prevButton, ".prev"); //set up the previous button
			self.pauseButton = self.init.uiElements(self.settings.pauseButton, ".pause"); //set up the pause button
			
			if((self.nextButton !== undefined && self.nextButton !== false) && self.settings.showNextButtonOnInit){self.nextButton.show();} //if using a next button, show it
			if((self.prevButton !== undefined && self.prevButton !== false) && self.settings.showPrevButtonOnInit){self.prevButton.show();} //if using a previous button, show it			
			if((self.pauseButton !== undefined && self.pauseButton !== false)){self.pauseButton.show();} //if using a pause button, show it
						
			if(self.settings.pauseIcon !== false) {
				self.pauseIcon = self.init.uiElements(self.settings.pauseIcon, ".pause-icon");
				if(self.pauseIcon !== undefined) {
					self.pauseIcon.hide();
				}
			}else{
			    self.pauseIcon = undefined;
			}

			self.nextFrameID = self.settings.startingFrameID;
						
			if(self.settings.hashTags) { //if using hashtags...
			    self.sequence.children("li").each(function() { //for each frame...
			        self.frameHashID.push($(this).attr(self.getHashTagFrom)); //add the hashtag to an array
			    });
			    			    
			    self.currentHashTag = location.hash.replace("#", ""); //get the current hashtag
			    if(self.currentHashTag === undefined || self.currentHashTag === "") { //if there is no hashtag...
			        self.nextFrameID = self.settings.startingFrameID; //use the startingFrameID
			    }else{			        
			        self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
			        if(self.frameHashIndex !== -1){  //if the hashtag matches a Sequence frame ID...
			            self.nextFrameID = self.frameHashIndex + 1; //use the frame associated to the hashtag
			        }else{			            
			            self.nextFrameID = self.settings.startingFrameID; //use the startingFrameID
			        }
			    }
			}

			self.nextFrame = self.sequence.children("li:nth-child("+self.nextFrameID+")");
			self.nextFrameChildren = self.nextFrame.children();
			
			self.sequence.css({"width": "100%", "height": "100%", "position": "relative"}); //set the sequence list to 100% width/height just incase it hasn't been specified in the CSS
			self.sequence.children("li").css({"width": "100%", "height": "100%", "position": "absolute", "z-index": 1}); //do the same for the frames and make them absolute

			if(self.transitionsSupported) { //initiate the full featured Sequence if transitions are supported...
				if(!self.settings.animateStartingFrameIn) { //start first frame in animated in position
					self.currentFrameID = self.nextFrameID;

					if(self.settings.moveActiveFrameToTop) {
					    self.nextFrame.css("z-index", self.numberOfFrames);
					}
					self.modifyElements(self.nextFrameChildren, "0s");
					self.nextFrame.addClass("animate-in");
					if(self.settings.hashTags && self.settings.hashChangesOnFirstFrame) {
					    self.currentHashTag = self.nextFrame.attr(self.getHashTagFrom);
					    document.location.hash = "#"+self.currentHashTag;
					}
					
					setTimeout(function() {
						self.modifyElements(self.nextFrameChildren, "");
					}, 100);
					
					self.resetAutoPlay(true, self.settings.autoPlayDelay);
				}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.settings.autoPlayDirection -1 && self.settings.animateStartingFrameIn) { //animate in backwards
					self.modifyElements(self.nextFrameChildren, "0s");
					self.nextFrame.addClass("animate-out");
					self.goTo(self.nextFrameID, -1);
				}else{ //animate in forwards
					self.goTo(self.nextFrameID, 1);
				}
			}else{ //initiate a basic slider for browsers that don't support CSS3 transitions
    			self.container.addClass("sequence-fallback");
    			self.currentFrameID = self.nextFrameID;
    			if(self.settings.hashTags && self.settings.hashChangesOnFirstFrame){
    			    self.currentHashTag = self.nextFrame.attr(self.getHashTagFrom);
    			    document.location.hash = "#"+self.currentHashTag;
    			}

          self.sequence.children("li").addClass("animate-in");
          self.sequence.children(":not(li:nth-child("+self.nextFrameID+"))").css({"display": "none", "opacity": 0});
          self.resetAutoPlay(true, self.settings.autoPlayDelay);
			}
			//END INIT
			//EVENTS
			if(self.nextButton !== undefined) { //if a next button is defined...
				self.nextButton.click(function() { //when the next button is clicked...
					self.next(); //go to the next frame
				});
			}
									
			if(self.prevButton !== undefined) { //if a previous button is defined...
				self.prevButton.click(function() { //when the previous button is clicked...
					self.prev(); //go to the previous frame
				});
			}
						
			if(self.pauseButton !== undefined) { //if a pause button is defined...
				self.pauseButton.click(function() { //when the pause button is clicked...
					self.pause(true); //pause Sequence and set hardPause to true
				});
			}
			
			if(self.settings.keyNavigation) {
				var defaultKeys = {
					'left'	: 37,
					'right'	: 39
				};

				function keyEvents(keyPressed, keyDirections) {
						var keyCode;

						for(keyCodes in keyDirections) {
							if(keyCodes === "left" || keyCodes === "right") {
								keyCode = defaultKeys[keyCodes];
							}else{
								keyCode = keyCodes;
							}

							if(keyPressed === parseFloat(keyCode)) { //if the key pressed is associated with a function...
								self.initCustomKeyEvent(keyDirections[keyCodes]); //initiate the function
							}
						}
					}
				
				$(document).keydown(function(e) { //when a key is pressed...					
					var keyCodeChar = String.fromCharCode(e.keyCode);
					if((keyCodeChar > 0 && keyCodeChar <= self.numberOfFrames) && (self.settings.numericKeysGoToFrames)) {
						self.nextFrameID = keyCodeChar;
						self.goTo(self.nextFrameID); //go to specified frame
					}
					
					keyEvents(e.keyCode, self.settings.keyEvents); //run default keyevents
					keyEvents(e.keyCode, self.settings.customKeyEvents); //run custom keyevents
				});
			}

			if(self.settings.pauseOnHover && self.settings.autoPlay && !self.hasTouch) { //if using pauseOnHover and autoPlay on non touch devices
				self.sequence.on({
				    mouseenter: function() { //when the mouse enter the Sequence element...
				    	self.mouseover = true;
				        if(!self.isHardPaused) { //if Sequence is hard paused (via a pause button)...
				        	self.pause(); //pause autoPlay
				        }
				    },
				    mouseleave: function() { //when the mouse leaves the Sequence element...
				    	self.mouseover = false;
				        if(!self.isHardPaused) { //if Sequence is not hard paused (via a pause button)...
				        	self.unpause(); //unpause autoPlay
				        }
				    }
				});
			}
			
			if(self.settings.hashTags) { //if hashchange is enabled in the settings...
    			$(window).hashchange(function() { //when the hashtag changes...
    			    newTag = location.hash.replace("#", ""); //grab the new hashtag
    			    
    			    if(self.currentHashTag !== newTag) { //if the last hashtag is not the same as the current one...
    			        self.currentHashTag = newTag; //save the new tag
    			        self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
    			        if(self.frameHashIndex !== -1) { //if the hashtag matches a Sequence frame ID...
    			            self.nextFrameID = self.frameHashIndex + 1; //set that frame as the next one
                            self.goTo(self.nextFrameID); //go to the next frame
    			        }
    			    }
    			});
			}

			if(self.settings.swipeNavigation && self.hasTouch) { //if using swipeNavigation and the device has touch capabilities...
				//jQuery TouchWipe v1.1.1 (http://www.netcu.de/jquery-touchwipe-iphone-ipad-library)
				var startX;
				var startY;
				var isMoving = false;

				function cancelTouch() {
					self.sequence.on("touchmove", onTouchMove);
					startX = null;
					isMoving = false;
				}	

				function onTouchMove(e) {
					if(self.settings.swipePreventsDefault) {
						e.preventDefault();
					}
					if(isMoving) {
						var x = e.originalEvent.touches[0].pageX;
						var y = e.originalEvent.touches[0].pageY;
						var dx = startX - x;
						var dy = startY - y;
						if(Math.abs(dx) >= self.settings.swipeThreshold) {
							cancelTouch();
							if(dx > 0) {
								self.initCustomKeyEvent(self.settings.swipeEvents.left);
							}else{
								self.initCustomKeyEvent(self.settings.swipeEvents.right);
							}
					 	}else if(Math.abs(dy) >= self.settings.swipeThreshold) {
							cancelTouch();
							if(dy > 0) {
								self.initCustomKeyEvent(self.settings.swipeEvents.down);
							}else{
								self.initCustomKeyEvent(self.settings.swipeEvents.up);
							}
						}
					}
				}

				function onTouchStart(e) {
					if(e.originalEvent.touches.length == 1) {
						startX = e.originalEvent.touches[0].pageX;
						startY = e.originalEvent.touches[0].pageY;
						isMoving = true;
						self.sequence.on("touchmove", onTouchMove);
					}
				}

				self.sequence.on("touchstart", onTouchStart);
			}
			//END EVENTS
		}
	} //END CONSTRUCTOR
	
	Sequence.prototype = {
		//trigger keyEvents, customKeyEvents and swipeEvents
		initCustomKeyEvent: function(event) {
			var self = this;
			switch(event) {
				case "next":
					self.next();
					break;
				case "prev":
					self.prev();
					break;
				case "pause":
					self.pause(true);
					break;
			}
		},
		
		/*
		modify the transition-duration and transition-delay properties of an element
		
		elementToReset = the element that is to have it's properties modified
		cssValue = the value to be given to the transition-duration and transition-delay properties
		*/
		modifyElements: function(elementToReset, cssValue) {
			var self = this;
				elementToReset.css(
				self.prefixCSS(self.prefix, {
					"transition-duration": cssValue,
					"transition-delay": cssValue
				})
			);
		},
		
		/*
		adds the browser vendors prefix onto multiple CSS properties
		
		prefix = the prefix for the browser Sequence is being viewed in (-webkit- for example)
		properties = the properties to be prefixed (transition-duration for example)
		*/
		prefixCSS: function(prefix, properties) {
			var css = {};
			for(property in properties) { //for each property to be modified...
				css[prefix + property] = properties[property]; //add the prefix to the property name
			}
			return css; //return the prefixed CSS
		},
		
		setTransitionProperties: function(frameChildren) {
			var self = this;
			frameChildren.each(function() {
				self.transitionProperties["transition-duration"] = $(this).css(self.prefix + "transition-duration");
				self.transitionProperties["transition-delay"] = $(this).css(self.prefix + "transition-delay");

				$(this).css(
					self.prefixCSS(self.prefix, self.transitionProperties)
				);
			});
		},

		/*
		start autoPlay -- causing Sequence to automatically change frame every x amount of milliseconds
		
		delay: a time in ms before starting the autoPlay feature (if unspecified, the default will be used)
		*/
		startAutoPlay: function(delay) {
			var self = this;
			var delay = (delay === undefined) ? self.settings.autoPlayDelay : delay; //if a delay isn't specified, use the default
			self.unpause();

			self.resetAutoPlay(); //stop autoPlay before starting it again
			self.autoPlayTimer = setTimeout(function() { //start a new autoPlay timer and...
				self.settings.autoPlayDirection === 1 ? self.next(): self.prev(); //go to either the next or previous frame
			}, delay); //after a specified delay
		},
		
		//stop causing Sequence to automatically change frame every x amount of seconds
		stopAutoPlay: function() {
			var self = this;
			self.pause(true);
			clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
		},

		/*
		internal function used to start and stop autoPlay
		start: if true, autoPlay will be started, else it'll be stopped
		delay: a time in ms before starting the autoPlay feature (if unspecified, the default will be used)
		*/
		resetAutoPlay: function(start, delay) {
			var self = this;
			if(start === true) { //if starting autoPlay
				if(self.settings.autoPlay && !self.isPaused) { //if using autoPlay and Sequence isn't paused...
					clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
					self.autoPlayTimer = setTimeout(function() { //start a new autoPlay timer and...
						self.settings.autoPlayDirection === 1 ? self.next(): self.prev(); //go to either the next or previous frame
					}, delay); //after a specified delay
				}
			}else{ //if stopping autoPlay
				clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
			}
		},

		/*
		Toggle startAutoPlay (unpausing autoPlay) and stopAutoPlay (pausing autoPlay)

		hardPause: if true, Sequence's pauseOnHover will not execute. Useful for pause buttons.

		Note: Sequence 0.7.3 and below didn't have an .unpause() function -- .pause() would pause/unpause
		based on the current state. .unpause() is now included for clarity but the .pause() function will
		still toggle between paused and unpaused states.
		*/
		pause: function(hardPause) {
			var self = this;
			if(!self.isPaused) { //if pausing Sequence...
				if(self.pauseButton !== undefined) { //if a pause button is defined...
					self.pauseButton.addClass("paused"); //add the class of "paused" to the pause button
					if(self.pauseIcon !== undefined) { //if a pause icon is defined...
						self.pauseIcon.show(); //show the pause icon
					}
				}
				self.paused(); //callback when Sequence is paused
				self.isPaused = true;
				self.isHardPaused = (hardPause) ? true : false; //if hardPausing, set hardPause to true
				self.resetAutoPlay(); //stop autoPlay
			}else{ //if unpausing Sequence...
				self.unpause();
			}
		},

		/*
		Start the autoPlay feature, as well as deal with any changes to pauseButtons, pauseIcons and public variables etc
		
		callback: if false, the unpause callback will not be initiated (this is because unpause is used internally during the stop and start of each frame)
		*/ 
		unpause: function(callback) {
			var self = this;
			if(self.pauseButton !== undefined) { //if a pause button is defined...
				self.pauseButton.removeClass("paused"); //remove the class of "paused" from the pause button
				if(self.pauseIcon !== undefined) { //if a pause icon is defined...
					self.pauseIcon.hide(); //hide the pause icon
				}
			}

			self.isPaused = false;
			self.isHardPaused = false;

			if(!self.active) {
				if(callback !== false) {
					self.unpaused(); //callback when Sequence is unpaused
				}
				self.resetAutoPlay(true, self.settings.unpauseDelay); //start autoPlay after a delay specified via the unpauseDelay setting
			}else{
				self.delayUnpause = true; //Sequence is animating so delay the unpause event until the animation completes
			}
		},
		
		//Go to the frame ahead of the current one
		next: function() {
			var self = this;
			self.nextFrameID = (self.currentFrameID !== self.numberOfFrames) ? self.currentFrameID + 1 : 1; //work out the next frame
			self.goTo(self.nextFrameID, 1); //go to the next frame
		},
		
		//Go to the frame prior to the current one
		prev: function() {
			var self = this;
			self.nextFrameID = (self.currentFrameID === 1) ? self.numberOfFrames : self.currentFrameID - 1; //work out the prev frame
			self.goTo(self.nextFrameID, -1); //go to the prev frame
		},
		
		/*
		Go to a specific frame
		
		id: number of the frame to go to
		direction: direction to get to that frame (1 = forward, -1 = reverse)
		*/
		goTo: function(id, direction) {	
			var self = this;
			var id = parseFloat(id); //convert the id to a number just in case

			if((id === self.currentFrameID) //if the id of the frame the user is trying to go to is the same as the currently active one...
			|| (self.settings.navigationSkip && self.navigationSkipThresholdActive) //or navigationSkip is enabled and the navigationSkipThreshold is active (which prevents frame from being navigated too fast)...
			|| (!self.settings.navigationSkip && self.active) //or navigationSkip is disbaled but Sequence is animating...
			|| (!self.transitionsSupported && self.active) //or Sequence is in fallback mode and Sequence is animating...
			|| (!self.settings.cycle && direction === 1 && self.currentFrameID === self.numberOfFrames) //or cycling is disabled, the user is navigating forward and this is the last frame...
			|| (!self.settings.cycle && direction === -1 && self.currentFrameID === 1) //or cycling is disabled, the user is navigating backwards and this is the first frame...
			|| (self.settings.preventReverseSkipping && self.direction !== direction && self.active)) { //or Sequence is animating and the user is trying to change the direction of navigation...
				return false; //don't go to another frame
			}else if(self.settings.navigationSkip && self.active) { //if navigationSkip is enabled and Sequence is animating (a frame is being skipped before it has finished animating)...
				self.navigationSkipThresholdActive = true; //the navigationSkipThreshold is now active
				if(self.settings.fadeFrameWhenSkipped) { //if a frame should fade when skipped...
					self.nextFrame.stop().animate({"opacity": 0}, self.settings.fadeFrameTime); //fade
				}

				navigationSkipThresholdTimer = setTimeout(function() { //start the navigationSkipThreshold timer to prevent being able to navigate too quickly
					self.navigationSkipThresholdActive = false; //once the timer is complete, navigationSkip can occur again
				}, self.settings.navigationSkipThreshold);
			}

			if(!self.active || self.settings.navigationSkip) { //if there are no animations running or navigationSkip is enabled...
				self.active = true; //Sequence is now animating
				self.resetAutoPlay(); //stop any autoPlay timer that may be running

				if(direction === undefined) { //if no direction to navigate was defined...
					self.direction = (id > self.currentFrameID) ? 1 : -1; //work out which way to go based on what frame is currently active
				}else{
					self.direction = direction; //go to the developer defined frame
				}
				
				self.currentFrame = self.sequence.children(".animate-in"); //find which frame is active -- the frame currently being viewed (and about to be animated out)
				self.nextFrame = self.sequence.children("li:nth-child("+id+")"); //grab the next frame
				self.frameChildren = self.currentFrame.children();	//save the child elements of the current frame
				self.nextFrameChildren = self.nextFrame.children(); //save the child elements of the next frame
				
				if(self.transitionsSupported) { //if the browser supports CSS3 transitions...							
					if(self.currentFrame.length !== undefined) { //if there is a current frame (one that is in it's animate-in position)...
						self.beforeCurrentFrameAnimatesOut(); //callback
						if(self.settings.moveActiveFrameToTop) { //if the active frame should move to the top...
						    self.currentFrame.css("z-index", 1); //move this frame to the bottom as it is now inactive
						}
						self.modifyElements(self.nextFrameChildren, "0s"); //give the next frame elements a transition-duration and transition-delay of 0s so they don't transition to their reset position
						if(!self.settings.reverseAnimationsWhenNavigatingBackwards || self.direction === 1) { //if user hit next button...
							self.nextFrame.removeClass("animate-out"); //reset the next frame back to its starting position
							self.modifyElements(self.frameChildren, "");  //remove any inline styles from the elements to be animated so styles via the "animate-out" class can take full effect		
						}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.direction === -1) { //if the user hit prev button
							self.nextFrame.addClass("animate-out"); //reset the next frame back to its animate-out position
							self.setTransitionProperties(self.frameChildren);
						}
					}else{
						self.firstFrame = false; //no longer the first frame
					}

					self.active = true; //Sequence is now animating
					self.currentFrame.unbind(self.transitionEnd); //remove the animation end event
					self.nextFrame.unbind(self.transitionEnd); //remove the animation end event

					if(self.settings.fadeFrameWhenSkipped) { //if a frame may have faded out when it was previously skipped...
						self.nextFrame.css("opacity", 1); //show it again
					}
					
					self.beforeNextFrameAnimatesIn(); //callback
					if(self.settings.moveActiveFrameToTop) { //if an active frame should be moved to the top...
					    self.nextFrame.css({"z-index": self.numberOfFrames}); //move to the top of the z-index
					}

					//modifications to the current and next frame's elements to get them ready to animate
					if(!self.settings.reverseAnimationsWhenNavigatingBackwards || self.direction === 1) { //if user hit next button...
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self.modifyElements(self.nextFrameChildren, ""); //remove any inline styles from the elements to be animated so styles via the "animate-in" class can take full effect
							self.waitForAnimationsToComplete(self.nextFrame, self.nextFrameChildren, "in"); //wait for the next frame to animate in
							if(self.afterCurrentFrameAnimatesOut !== "function () {}") { //if the afterCurrentFrameAnimatesOut is being used...
								self.waitForAnimationsToComplete(self.currentFrame, self.frameChildren, "out"); //wait for the current frame to animate out as well
							}
						}, 50);
					}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.direction === -1) { //if the user hit prev button
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self.modifyElements(self.nextFrameChildren, ""); //remove any inline styles from the elements to be animated so styles via the "animate-in" class can take full effect
							self.setTransitionProperties(self.frameChildren);
							self.waitForAnimationsToComplete(self.nextFrame, self.nextFrameChildren, "in"); //wait for the next frame to animate in
							if(self.afterCurrentFrameAnimatesOut != "function () {}") { //if the afterCurrentFrameAnimatesOut is being used...
								self.waitForAnimationsToComplete(self.currentFrame, self.frameChildren, "out"); //wait for the current frame to animate out as well
							}
						}, 50);
					}

					//final class changes to make animations happen
					if(!self.settings.reverseAnimationsWhenNavigatingBackwards || self.direction === 1) { //if user hit next button...			
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self.currentFrame.toggleClass("animate-out animate-in");
							self.nextFrame.addClass("animate-in"); //add the "animate-in" class
						}, 50);
					}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.direction === -1) { //if the user hit prev button
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self.nextFrame.toggleClass("animate-out animate-in"); //add the "animate-in" class and remove the "animate-out" class
							self.currentFrame.removeClass("animate-in");
						}, 50);
					}
				}else{ //if the browser doesn't support CSS3 transitions...
					function animationComplete() {
			            self.setHashTag();	                
			            self.active = false;
			            self.resetAutoPlay(true, self.settings.autoPlayDelay);
				    }

				    switch(self.settings.fallback.theme) {
				    	case "fade": //if using the fade fallback theme...
				            self.sequence.children("li").css({"position": "relative"}); //this allows for fadein/out in IE
				            self.beforeCurrentFrameAnimatesOut();
				            self.currentFrame = self.sequence.children("li:nth-child("+self.currentFrameID+")");
				            self.currentFrame.animate({"opacity": 0}, self.settings.fallback.speed, function() { //hide the current frame
				            	self.currentFrame.css({"display": "none", "z-index": "1"});
				            	self.afterCurrentFrameAnimatesOut();
				            	self.beforeNextFrameAnimatesIn();
				            	self.nextFrame.css({"display": "block", "z-index": self.numberOfFrames}).animate({"opacity": 1}, 500, function() {
				            		self.afterNextFrameAnimatesIn();
				            	}); //make the next frame the current one and show it
				            	animationComplete();
				            });
				            
				            self.sequence.children("li").css({"position": "relative"}); //this allows for fadein/out in IE
				        break;

				        case "slide": //if using the slide fallback theme...
				        default:
                    //create objects which will save the .css() and .animation() objects
				            var animateOut = {};
				            var animateIn = {};
				            var moveIn = {};

				            //construct the .css() and .animation() objects
				            if(self.direction === 1) {
				                animateOut["left"] = "-100%";
				                animateIn["left"] = "100%";
				            }else{
				                animateOut["left"] = "100%";
				                animateIn["left"] = "-100%";
				            }

				            moveIn["left"] = "0";
				            moveIn["opacity"] = 1;


				            self.currentFrame = self.sequence.children("li:nth-child("+self.currentFrameID+")");
				            self.beforeCurrentFrameAnimatesOut();
				            self.currentFrame.animate(animateOut, self.settings.fallback.speed, function() {
				            	self.afterCurrentFrameAnimatesOut();
				            }); //cause the current frame to animate out
				            self.beforeNextFrameAnimatesIn(); //callback
				            self.nextFrame.show().css(animateIn);
			            	self.nextFrame.animate(moveIn, self.settings.fallback.speed, function() { //cause the next frame to animate in
			                	animationComplete();
			                	self.afterNextFrameAnimatesIn(); //callback
			            	});
				        break;
				    }
				}
				self.currentFrameID = id; //make the currentFrameID the same as the one that is to animate in				
			}
		},
		
		/*
			prevents the next frame from animating until the current frame has finished animating

			frame: the frame <li> which is animating
			frameChildren: the animated direct child elements of the frame
			direction: whether the elements are animating "in" to an active position or "out" of an active position
		*/
		waitForAnimationsToComplete: function(frame, frameChildren, direction) {
			var self = this;

			if(direction === "out") { //if waiting on a frame's element to animate out...
				var onceComplete = function() {
					self.afterCurrentFrameAnimatesOut(); //callback
				};
			}else if(direction === "in") { //if waiting on a frame's element to animate in...
				var onceComplete = function() {
					self.afterNextFrameAnimatesIn(); //callback
					self.setHashTag(); //set the hashtag to represent the newly active frame

					self.active = false; //Sequence is not animating

					if(!self.isHardPaused && !self.mouseover) { //if Sequence isn't hard paused (via a pause button for example) or being hovered over...
						if(!self.delayUnpause) { //if unpausing isn't delayed (Sequence wasn't animating when unpause was invoked)...
							self.unpause(false); //unpause Sequence but don't run the unpause callback
						}else{ //if unpausing was delay because Sequence was animating when unpause was invoked...
							self.delayUnpause = false;
							self.unpause(); //unpause Sequence
						}
					}
				};
			}

			frameChildren.data('animationEnded', false); // set the data attribute of each animated element to indicate that the animation has not yet ended
			frame.bind(self.transitionEnd, function(e) { //when an element finishes animating...
				$(e.target).data('animationEnded', true); // set the data attrbiute to indicate that the element has finished it's animation
			
				// now check if all elements have finished animating
				var allAnimationsEnded = true;
				frameChildren.each(function() { //for each element being animated within a frame...
					if($(this).data('animationEnded') === false) { //if the animation hasn't ended...
						allAnimationsEnded = false; //not all animations have ended yet
						return false; //break out of the animationEnded check early
					}
				});
			
				if(allAnimationsEnded) { //if all animations have ended...
					frame.unbind(self.transitionEnd); //stop waiting for animations to end
					onceComplete();
				}
			});
		},

		setHashTag: function() {
			var self = this;
			if(self.settings.hashTags) { //if hashTags is enabled...
			    self.currentHashTag = self.nextFrame.attr(self.getHashTagFrom); //get the hashtag name
			    self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
			    if(self.frameHashIndex !== -1 && (self.settings.hashChangesOnFirstFrame || (!self.firstFrame || !self.transitionsSupported))) { //if the hashtag matches a Sequence frame ID...
			        self.nextFrameID = self.frameHashIndex + 1;
                    document.location.hash = "#"+self.currentHashTag;
			    }else{
			        self.nextFrameID = self.settings.startingFrameID;
			        self.firstFrame = false;
			    }					    
			}
		}
	}; //END PROTOTYPE

	$.fn.sequence = function(options) {
		var self = this;
		return self.each(function() {
			var sequence = new Sequence($(this), options, defaults, get);
			$(this).data("sequence", sequence); 
		});
	};
	
	//some external functions
	var get = {
		/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
		 * Build: http://modernizr.com/download/#-svg-prefixed-testprop-testallprops-domprefixes
		 */
		modernizr: function() {
			;window.Modernizr=function(a,b,c){function x(a){i.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.1",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={svg:"http://www.w3.org/2000/svg"},p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=self;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(self instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.svg=function(){return!!b.createElementNS&&!!b.createElementNS(o.svg,"svg").createSVGRect};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},e}(self,self.document);
		},
		
		defaultPreloader: function(prependTo, transitions, prefix) {
			var icon = '<div class="sequence-preloader"><svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>';
			
			$("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@"+prefix+"keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #ff9442;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;"+prefix+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){"+prefix+"animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){"+prefix+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+prefix+"transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #ff9442; margin-right: 4px; float: left;}</style>");
			prependTo.prepend(icon);
			if(!Modernizr.svg && !transitions) { //if SVG isn't supported, remain calm and add this fallback instead...
			    $(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>');
			    setInterval(function(){
			        $(".sequence-preloader .circle").fadeToggle(500);
			    }, 500);
			}else if(!transitions){ //if transitions aren't supported, toggle the opacity instead  
			    setInterval(function(){
			        $(".sequence-preloader").fadeToggle(500);
			    }, 500);
			}
		},
		
		//a quick test to work out if Opera supports transitions properly (to work around the fact that Opera 11 supports transitions but doesn't return a transition value properly)
		operaTest: function() {
		    $("body").append('<span id="sequence-opera-test"></span>');
		    var $operaTest = $("#sequence-opera-test");
		    $operaTest.css("-o-transition", "1s");
		    //if the expected value isn't returned...
		    if($operaTest.css("-o-transition") != "1s") {
		        //cause Opera to go into the fallback theme
		        return false;
		    }else{
		        return true;
		    }
		    $operaTest.remove();
		}
	};
	
	var defaults = {
		//General Settings
		startingFrameID: 1, //The frame (the list item `<li>`) that should first be displayed when Sequence loads
		cycle: true, //Whether Sequence should navigate to the first frame after the last frame and vice versa
		animateStartingFrameIn: false, //Whether the first frame should animate in to its active position
		reverseAnimationsWhenNavigatingBackwards: true, //Whether animations should be reversed when a user navigates backwards by clicking a previous button/swiping/pressing the left key
		moveActiveFrameToTop: true, //Whether a frame should be given a higher `z-index` than other frames whilst it is active, to bring it above the others

		//Autoplay Settings
		autoPlay: true,
		autoPlayDirection: 1,
		autoPlayDelay: 5000,

		//Frame Skipping Settings
		navigationSkip: true, //Whether the user can navigate through frames before each frame has finished animating
		navigationSkipThreshold: 250, //Amount of time that must pass before the next frame can be navigated to
		fadeFrameWhenSkipped: true, //If a frame is skipped before it finishes animating, it will quickly fade out
		fadeFrameTime: 150, //If fadeFrameWhenSkipped is true, how quickly a frame should fade out when skipped (in milliseconds)
		preventReverseSkipping: false, //Whether the user can change the direction of navigation during frames animating (if navigating forward, the user can only skip forwards when other frames are animating).

		//Next/Prev Button Settings
		nextButton: false, //if dev settings are true, the nextButton will be ".next"
		showNextButtonOnInit: true,
		prevButton: false, //if dev settings are true, the prevButton will be ".prev"
		showPrevButtonOnInit: true,
		
		//Pause Settings
		pauseButton: false, //if dev settings are true, the pauseButton will be ".pause"
		unpauseDelay: null, //the time to wait before navigating to the next frame when Sequence is unpaused. Note that if an unpauseDelay is not specified, the default is the same as the autoPlayDelay setting
		pauseOnHover: true,
		pauseIcon: false, //this is an indicator to show Sequence is paused
		
		//Preloader Settings
		preloader: false,
		preloadTheseFrames: [1], //all images in these frames will load before Sequence initiates
		preloadTheseImages: [ //specify particular images to load before Sequence initiates
		    /* Example usage
		    "images/catEatingSalad.jpg",
		    "images/meDressedAsBatman.png"
		    */
		],
		/*Note: You can use preloadTheseFrames and preloadTheseImages together. You might want to load all images in frame 1 and just one big image from frame 2 for example*/
		hideFramesUntilPreloaded: true,
		prependPreloadingComplete: true,
		hidePreloaderUsingCSS: true,
		hidePreloaderDelay: 0,
		
		//Keyboard settings
		keyNavigation: true, //false prevents the following keyboard settings
		numericKeysGoToFrames: true,
		keyEvents: {
			left: "prev",
			right: "next"
		},
		customKeyEvents: {
			/* Example usage
			65: "prev",	//a
			68: "next",	//d
			83: "prev",	//s
			87: "next"	//w
			*/
		},
		
		//Touch Swipe Settings
		swipeNavigation: true,
		swipeThreshold: 20,
		swipePreventsDefault: false, //be careful if setting this to true
		swipeEvents: {
			left: "prev",
			right: "next",
			up: false,
			down: false
		},
		
		//hashTags Settings
		//when using hashTags, please include a reference to Ben Alman's jQuery HashChange plugin above your reference to Sequence.js
		
		//info: http://benalman.com/projects/jquery-hashchange-plugin/
		//plugin: https://raw.github.com/cowboy/jquery-hashchange/v1.3/jquery.ba-hashchange.min.js
		//GitHub: https://github.com/cowboy/jquery-hashchange
		hashTags: false, //when a frame is navigated to, change the hashtag to the frames ID
		hashDataAttribute: false, //false = the hashTag is taken from a frames ID attribute | true = the hashTag is taken from the data attribute "data-sequence-hash"	
		hashChangesOnFirstFrame: false,	
        		
		//Fallback Theme Settings (For browsers that don't support CSS3 transitions)
		fallback: {
			theme: "slide",
			speed: 500
		}
	};
})(jQuery);



/*
	SUPERSCROLLORAMA - The jQuery plugin for doing scroll animations
	by John Polacek (@johnpolacek)

	Powered by the Greensock Tweening Platform
	http://www.greensock.com
	Greensock License info at http://www.greensock.com/licensing/

	Dual licensed under MIT and GPL.

	Thanks to Jan Paepke (@janpaepke) for making some nice improvements
*/

(function($) {

	$.superscrollorama = function(options) {

		var superscrollorama = this;
		var defaults = {
			isVertical:true,		// are we scrolling vertically or horizontally?
			triggerAtCenter: true,	// the animation triggers when the respective Element's origin is in the center of the scrollarea. This can be changed here to be at the edge (-> false)
			playoutAnimations: true	// when scrolling past the animation should they be played out (true) or just be jumped to the respective last frame (false)?
		};
		superscrollorama.settings = $.extend({}, defaults, options);

		var animObjects = [],
			pinnedObjects = [],
			didScrollCheck = false;

		// PRIVATE FUNCTIONS

		function init() {
			// scroll to top of page
			$('html, body').animate({ scrollTop: 0 }, 0);

			$(window).scroll(function() {
				didScrollCheck = true;
			});
			TweenLite.ticker.addEventListener("tick", tickHandler);
		}

		function tickHandler() {
			if (didScrollCheck) {
				checkScrollAnim();
				didScrollCheck = false;
			}
		}

		// reset a pin Object
		function resetPinObj (pinObj) {
			pinObj.el.css('position',pinObj.origPosition);
			pinObj.el.css('top', pinObj.origPositioning.top);
			pinObj.el.css('bottom', pinObj.origPositioning.bottom);
			pinObj.el.css('left', pinObj.origPositioning.left);
			pinObj.el.css('right', pinObj.origPositioning.right);
		}

		// set a Tween Progress (use totalProgress for TweenMax and TimelineMax to include repeats)
		function setTweenProgress(tween, progress) {
			if (tween.totalProgress) {
				tween.totalProgress(progress).pause();
			} else {
				tween.progress(progress).pause();
			}
		}

		function checkScrollAnim() {
			var currScrollPoint = superscrollorama.settings.isVertical ? $(window).scrollTop() : $(window).scrollLeft();
			var offsetAdjust = superscrollorama.settings.triggerAtCenter ? (superscrollorama.settings.isVertical ? -$(window).height()/2 : -$(window).width()/2) : 0;
			var i, startPoint, endPoint;

			// check all animObjects
			var numAnim = animObjects.length;
			for (i=0; i<numAnim; i++) {
				var animObj = animObjects[i],
					target = animObj.target,
					offset = animObj.offset;

				if (typeof(target) === 'string') {
					startPoint = superscrollorama.settings.isVertical ? $(target).offset().top : $(target).offset().left;
					offset += offsetAdjust;
				} else if (typeof(target) === 'number')	{
					startPoint = target;
				} else if ($.isFunction(target)) {
					startPoint = target.call(this);
				} else {
					startPoint = superscrollorama.settings.isVertical ? target.offset().top : target.offset().left;
					offset += offsetAdjust;
				}

				startPoint += offset;
				endPoint = animObj.dur ? startPoint + animObj.dur : startPoint;

				if ((currScrollPoint > startPoint && currScrollPoint < endPoint) && animObj.state !== 'TWEENING') {
					// if it should be TWEENING and isn't..
					animObj.state = 'TWEENING';
					animObj.start = startPoint;
					animObj.end = endPoint;
					setTweenProgress(animObj.tween, (currScrollPoint - animObj.start)/(animObj.end - animObj.start));
				} else if (currScrollPoint < startPoint && animObj.state !== 'BEFORE') {
					// if it should be at the BEFORE tween state and isn't..
					if (superscrollorama.settings.playoutAnimations) {
						animObj.tween.reverse();
					} else {
						setTweenProgress(animObj.tween, 0);
					}
					animObj.state = 'BEFORE';
				} else if (currScrollPoint > endPoint && animObj.state !== 'AFTER') {
					// if it should be at the AFTER tween state and isn't..
					if (superscrollorama.settings.playoutAnimations) {
						animObj.tween.play();
					} else {
						setTweenProgress(animObj.tween, 1);
					}
					animObj.state = 'AFTER';
				} else if (animObj.state === 'TWEENING') {
					// if it is TWEENING..
					setTweenProgress(animObj.tween, (currScrollPoint - animObj.start)/(animObj.end - animObj.start));
				}
			}

			// check all pinned elements
			var numPinned = pinnedObjects.length;
			for (i=0; i<numPinned; i++) {
				var pinObj = pinnedObjects[i];
				var el = pinObj.el;
				var elHeight = el.outerHeight();

				// should object be pinned?
				if (pinObj.state != 'PINNED') {

					if (pinObj.state === 'UPDATE') resetPinObj(pinObj); // revert to original Position so startPoint and endPoint will be calculated to the correct values

					startPoint = pinObj.spacer ?
						superscrollorama.settings.isVertical ? pinObj.spacer.offset().top : pinObj.spacer.offset().left :
						superscrollorama.settings.isVertical ? el.offset().top : el.offset().left;

					startPoint += pinObj.offset;

					endPoint = startPoint + pinObj.dur;

					if (currScrollPoint > startPoint && currScrollPoint < endPoint) {
						// pin it
						var oldState = pinObj.state;
						pinObj.state = 'PINNED';

						// set original position values for unpinning
						pinObj.origPositioning = {
							top: el.css('top'),
							left: el.css('left'),
							bottom: el.css('bottom'),
							right: el.css('right')
						};
						// change to fixed position
						var realCoordinates = el.offset();
						el.css('position','fixed');
						if (superscrollorama.settings.isVertical) {
							el.css('top', -pinObj.offset);
							el.css('left', realCoordinates.left);	// translate from position in parent to fixed
						} else {
							el.css('left', -pinObj.offset);
							el.css('top', realCoordinates.top);	// translate from position in parent to fixed
						}

						pinObj.pinStart = startPoint;
						pinObj.pinEnd = endPoint;

						if (pinObj.spacer)
							pinObj.spacer.css('height', pinObj.dur + elHeight);

						if (oldState === "UPDATE") {
							if (pinObj.anim)
								setTweenProgress(pinObj.anim, 0); // reset the progress, otherwise the animation won't be updated to the new position
						} else if (pinObj.onPin) {
							pinObj.onPin();
						}

						// update immediately (we may be further in the animation already, i.e. refresh within the pinrange or a pinUpdate was run)
						setTweenProgress(pinObj.anim, (currScrollPoint - pinObj.pinStart)/(pinObj.pinEnd - pinObj.pinStart));
					}
				} else {
					// Check to see if object should be unpinned
					if (currScrollPoint < pinObj.pinStart || currScrollPoint > pinObj.pinEnd) {

						// unpin it
						pinObj.state = currScrollPoint < pinObj.pinStart ? 'BEFORE' : 'AFTER';
						if (pinObj.anim&&pinObj.state === 'BEFORE') {
							setTweenProgress(pinObj.anim, 0);
						} else if (pinObj.anim && pinObj.state === 'AFTER'){
							setTweenProgress(pinObj.anim, 1);
						}
						// revert to original position values
						resetPinObj(pinObj);

						if (pinObj.spacer)
							pinObj.spacer.css('height', currScrollPoint < pinObj.pinStart ? 0 : pinObj.dur);

						if (pinObj.onUnpin)
							pinObj.onUnpin();
					}
					else if (pinObj.anim) {
						// do animation
						setTweenProgress(pinObj.anim, (currScrollPoint - pinObj.pinStart)/(pinObj.pinEnd - pinObj.pinStart));
					}
				}
			}
		}

		// PUBLIC FUNCTIONS
		superscrollorama.addTween = function(target, tween, dur, offset) {

			tween.pause();

			animObjects.push({
				target:target,
				tween: tween,
				offset: offset || 0,
				dur: dur || 0,
				state:'BEFORE'
			});

			return superscrollorama;
		};

		superscrollorama.pin = function(el, dur, vars) {
			if (typeof(el) === 'string') el = $(el);
			if (vars.anim) vars.anim.pause();

			// create wrapper for pinned elements that aren't absolute or fixed position
			var pinSpacer = null;
			if (el.css('position') === 'relative' || el.css('position') === 'static') {
				pinSpacer = $('<div class="pin-spacer"></div>');
				el.before(pinSpacer);
			}

			pinnedObjects.push({
				el:el,
				state:'BEFORE',
				dur:dur,
				offset: vars.offset || 0,
				anim:vars.anim,
				origPosition:el.css('position'),
				spacer:pinSpacer,
				onPin:vars.onPin,
				onUnpin:vars.onUnpin
			});

			return superscrollorama;
		};

		superscrollorama.updatePin = function (el, dur, vars) { // Update a Pinned object. dur and vars are optional to only change vars and keep dur just pass NULL for dur
			if (typeof(el) === 'string') el = $(el);
			if (vars.anim) vars.anim.pause();
			var numPinned = pinnedObjects.length;


			for (i=0; i<numPinned; i++) {
				var pinObj = pinnedObjects[i];
				if (el.get(0) == pinObj.el.get(0)) {

					if (dur) pinObj.dur = dur;
					if (vars.anim) pinObj.anim = vars.anim;
					if (vars.offset) pinObj.offset = vars.offset;
					if (vars.onPin) pinObj.onPin = vars.onPin;
					if (vars.onUnpin) pinObj.onUnpin = vars.onUnpin;

					if ((dur || vars.anim || vars.offset) && pinObj.state === 'PINNED') { // this calls for an immediate update!
						pinObj.state = 'UPDATE';
						checkScrollAnim();
					}
				}
			}

			return superscrollorama;
		};

		superscrollorama.triggerCheckAnim = function (immediately) { // if immediately is true it will be updated right now, if false it will wait until next tweenmax tick. default is false
			if (immediately) {
				checkScrollAnim();
			} else {
				didScrollCheck = true;
			}
			return superscrollorama;
		};


		// INIT
		init();

		return superscrollorama;
	};

})(jQuery);