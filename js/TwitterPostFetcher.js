/*********************************************************************
*  #### Twitter Post Fetcher v16.0.1 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(C,p){"function"===typeof define&&define.amd?define([],p):"object"===typeof exports?module.exports=p():p()})(this,function(){function C(a){if(null===r){for(var f=a.length,b=0,k=document.getElementById(D),g="<ul>";b<f;)g+="<li>"+a[b]+"</li>",b++;k.innerHTML=g+"</ul>"}else r(a)}function p(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,b){return b}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function E(a){a=a.getElementsByTagName("a");
for(var f=a.length-1;0<=f;f--)a[f].setAttribute("target","_blank")}function l(a,f){for(var b=[],k=new RegExp("(^| )"+f+"( |$)"),g=a.getElementsByTagName("*"),h=0,d=g.length;h<d;h++)k.test(g[h].className)&&b.push(g[h]);return b}function F(a){if(void 0!==a&&0<=a.innerHTML.indexOf("data-srcset"))return a=a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(a).split('"')[1]}var D="",f=20,G=!0,v=[],x=!1,y=!0,w=!0,z=null,A=!0,B=!0,r=null,H=!0,I=!1,t=!0,J=!0,K=!1,m=null,L={fetch:function(a){void 0===
a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);void 0===a.dataOnly&&
(a.dataOnly=!1);if(x)v.push(a);else{x=!0;D=a.domId;f=a.maxTweets;G=a.enableLinks;w=a.showUser;y=a.showTime;B=a.showRetweet;z=a.dateFunction;r=a.customCallback;H=a.showInteraction;I=a.showImages;t=a.linksInNewWindow;J=a.showPermalinks;K=a.dataOnly;var l=document.getElementsByTagName("head")[0];null!==m&&l.removeChild(m);m=document.createElement("script");m.type="text/javascript";m.src=void 0!==a.list?"https://syndication.twitter.com/timeline/list?callback=twitterFetcher.callback&dnt=false&list_slug="+
a.list.listSlug+"&screen_name="+a.list.screenName+"&suppress_response_codes=true&lang="+(a.lang||"en")+"&rnd="+Math.random():void 0!==a.profile?"https://syndication.twitter.com/timeline/profile?callback=twitterFetcher.callback&dnt=false&screen_name="+a.profile.screenName+"&suppress_response_codes=true&lang="+(a.lang||"en")+"&rnd="+Math.random():void 0!==a.likes?"https://syndication.twitter.com/timeline/likes?callback=twitterFetcher.callback&dnt=false&screen_name="+a.likes.screenName+"&suppress_response_codes=true&lang="+
(a.lang||"en")+"&rnd="+Math.random():"https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();l.appendChild(m)}},callback:function(a){function m(a){var b=a.getElementsByTagName("img")[0];b.src=b.getAttribute("data-src-2x");return a}var b=document.createElement("div");b.innerHTML=a.body;"undefined"===typeof b.getElementsByClassName&&(A=!1);a=[];var k=[],g=[],h=[],d=[],q=[],n=[],e=0;if(A)for(b=
b.getElementsByClassName("timeline-Tweet");e<b.length;){0<b[e].getElementsByClassName("timeline-Tweet-retweetCredit").length?d.push(!0):d.push(!1);if(!d[e]||d[e]&&B)a.push(b[e].getElementsByClassName("timeline-Tweet-text")[0]),q.push(b[e].getAttribute("data-tweet-id")),k.push(m(b[e].getElementsByClassName("timeline-Tweet-author")[0])),g.push(b[e].getElementsByClassName("dt-updated")[0]),n.push(b[e].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==b[e].getElementsByClassName("timeline-Tweet-media")[0]?
h.push(b[e].getElementsByClassName("timeline-Tweet-media")[0]):h.push(void 0);e++}else for(b=l(b,"timeline-Tweet");e<b.length;){0<l(b[e],"timeline-Tweet-retweetCredit").length?d.push(!0):d.push(!1);if(!d[e]||d[e]&&B)a.push(l(b[e],"timeline-Tweet-text")[0]),q.push(b[e].getAttribute("data-tweet-id")),k.push(m(l(b[e],"timeline-Tweet-author")[0])),g.push(l(b[e],"dt-updated")[0]),n.push(l(b[e],"timeline-Tweet-timestamp")[0]),void 0!==l(b[e],"timeline-Tweet-media")[0]?h.push(l(b[e],"timeline-Tweet-media")[0]):
h.push(void 0);e++}a.length>f&&(a.splice(f,a.length-f),k.splice(f,k.length-f),g.splice(f,g.length-f),d.splice(f,d.length-f),h.splice(f,h.length-f),n.splice(f,n.length-f));var b=[],e=a.length,c=0;if(K)for(;c<e;)b.push({tweet:a[c].innerHTML,author:k[c].innerHTML,time:g[c].textContent,image:F(h[c]),rt:d[c],tid:q[c],permalinkURL:void 0===n[c]?"":n[c].href}),c++;else for(;c<e;){if("string"!==typeof z){var d=g[c].getAttribute("datetime"),u=new Date(g[c].getAttribute("datetime").replace(/-/g,"/").replace("T",
" ").split("+")[0]),d=z(u,d);g[c].setAttribute("aria-label",d);if(a[c].textContent)if(A)g[c].textContent=d;else{var u=document.createElement("p"),r=document.createTextNode(d);u.appendChild(r);u.setAttribute("aria-label",d);g[c]=u}else g[c].textContent=d}d="";G?(t&&(E(a[c]),w&&E(k[c])),w&&(d+='<div class="user">'+p(k[c].innerHTML)+"</div>"),d+='<p class="tweet">'+p(a[c].innerHTML)+"</p>",y&&(d=J?d+('<p class="timePosted"><a href="'+n[c]+'">'+g[c].getAttribute("aria-label")+"</a></p>"):d+('<p class="timePosted">'+
g[c].getAttribute("aria-label")+"</p>"))):(w&&(d+='<p class="user">'+k[c].textContent+"</p>"),d+='<p class="tweet">'+a[c].textContent+"</p>",y&&(d+='<p class="timePosted">'+g[c].textContent+"</p>"));H&&(d+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+q[c]+'" class="twitter_reply_icon"'+(t?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+q[c]+'" class="twitter_retweet_icon"'+(t?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+
q[c]+'" class="twitter_fav_icon"'+(t?' target="_blank">':">")+"Favorite</a></p>");I&&void 0!==h[c]&&(d+='<div class="media"><img src="'+F(h[c])+'" alt="Image from tweet" /></div>');b.push(d);c++}C(b);x=!1;0<v.length&&(L.fetch(v[0]),v.splice(0,1))}};return window.twitterFetcher=L});



/**
 * ### HOW TO CREATE A VALID ID TO USE: ###
 * Go to www.twitter.com and sign in as normal, go to your settings page.
 * Go to "Widgets" on the left hand side.
 * Create a new widget for what you need eg "user time line" or "search" etc.
 * Feel free to check "exclude replies" if you don't want replies in results.
 * Now go back to settings page, and then go back to widgets page and
 * you should see the widget you just created. Click edit.
 * Look at the URL in your web browser, you will see a long number like this:
 * 345735908357048478
 * Use this as your ID below instead!
 */

/**
 * How to use TwitterFetcher's fetch function:
 * 
 * @function fetch(object) Fetches the Twitter content according to
 *     the parameters specified in object.
 * 
 * @param object {Object} An object containing case sensitive key-value pairs
 *     of properties below.
 * 
 * You may specify at minimum the following two required properties:
 * 
 * @param object.id {string} The ID of the Twitter widget you wish
 *     to grab data from (see above for how to generate this number).
 * @param object.domId {string} The ID of the DOM element you want
 *     to write results to.
 *
 * You may also specify one or more of the following optional properties
 *     if you desire:
 *
 * @param object.maxTweets [int] The maximum number of tweets you want
 *     to return. Must be a number between 1 and 20. Default value is 20.
 * @param object.enableLinks [boolean] Set false if you don't want
 *     urls and hashtags to be hyperlinked.
 * @param object.showUser [boolean] Set false if you don't want user
 *     photo / name for tweet to show.
 * @param object.showTime [boolean] Set false if you don't want time of tweet
 *     to show.
 * @param object.dateFunction [function] A function you can specify
 *     to format date/time of tweet however you like. This function takes
 *     a JavaScript date as a parameter and returns a String representation
 *     of that date.
 * @param object.showRetweet [boolean] Set false if you don't want retweets
 *     to show.
 * @param object.customCallback [function] A function you can specify
 *     to call when data are ready. It also passes data to this function
 *     to manipulate them yourself before outputting. If you specify
 *     this parameter you must output data yourself!
 * @param object.showInteraction [boolean] Set false if you don't want links
 *     for reply, retweet and favourite to show.
 * @param object.showImages [boolean] Set true if you want images from tweet
 *     to show.
 * @param object.lang [string] The abbreviation of the language you want to use
 *     for Twitter phrases like "posted on" or "time ago". Default value
 *     is "en" (English).
 */

// ##### Simple example 1 #####
// Get all tweets from a handle.
var configProfile = {
  "profile": {"screenName": 'jsinsa'},
  "domId": 'jsinsa_profile',
  "maxTweets": 99,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};


// ##### Simple example 2 #####
// Get all tweets from a widget.
var configWidget = {
  "id": '472497070914297856',
  "domId": 'jsinsa_posts',
  "maxTweets": 99,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": true,
  "showRetweet" : true,
  "lang": 'en'
};

// var config = {
//   "id": '472497070914297856',  
//   "domId": '',
//   "dataOnly": true,
//   "enableLinks": true,
//   "showUser": true,
//   "showTime": true,
//   "dateFunction": '',
//   "showRetweet": false,
//   "customCallback": handleTweets,
//   "showInteraction": false
// }

// //twitterFetcher.fetch(configProfile);
// twitterFetcher.fetch(config);

// // Just updating every 5 seconds
// // var timer = setInterval(mycode, 1000);
// // function mycode() {
// //     //twitterFetcher.fetch(configProfile);
// //     twitterFetcher.fetch(configWidget);
// // }
// function handleTweets(tweets){
//   console.log(tweets);
//     var x = tweets.length;
//     var n = 0;
//     var element = document.getElementById('example5');
//     var html = '<ul>';
//     while(n < x) {
//       html += '<li>' + tweets[n] + '</li>';
//       n++;
//     }
//     html += '</ul>';
//     element.innerHTML = html;
// }