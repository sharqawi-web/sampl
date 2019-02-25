/* Predefined Variables Are:
 *     blog_url
 *     latest_post
 *     background_color
 *     border_color
 *     scrolling_speed
 *     info_text
 *     close_button
 *     https://sharqawi-web.com
 */
var entries; var feed;
var feed_url = blog_url.match(/\/$/) ? blog_url : blog_url+"/";
feed_url += "feeds/posts/default";
function recent_post_createEntries(){
    var entries = feed.entry;
    var entriesArr = [];
    for(var i=0; i<latest_post; i++){
        var entry = entries[i];
        var entryObj = new Object();
        entryObj.title = entry.title.$t;
        entryObj.href  = getHref(entry.link);
        entriesArr.push(entryObj);
    }
    return entriesArr;
}
function getBlogTitle(){
    return feed.title.$t;
}
function  getBlogURL(){
    return getHref(feed.link);
}
function getHref(links){
    for(var i=0; i<links.length; i++){
        var link = links[i];
        if(link.rel == "alternate"){return link.href;}
    }
    return null;
}
function recent_post_start(json){
    feed = json.feed;
    entries = recent_post_createEntries();
    recent_post_style();
    recent_post_content();
}
function recent_post_text(){
    var src = feed_url+"?alt=json-in-script&callback=recent_post_start&max-results="+latest_post;
    var s = "<script src='"+src+"'></script>";
    document.write(s);
}
function recent_post_style(){
    var s = "<style type='text/css'>";
    s += "#recent_post{";
    s += "margin:0px;";
    s += "width:auto;";
    s += "background:#fff;";
    s += "}";
    s += "</style>";
    document.write(s);
}
function recent_post_content(){
    var s = "<div id='recent_post' title='أخر المواضيع الحصرية'>";
    if(info_text){
    s += "<div class='wrapper'>";
    s += "<div class='newstitle'>";
    s += "أخر المواضيع";
    s += "</div>";
    }
    s += "  <marquee style='float:right; margin-right:10px; width:82%' scrollAmount='"+scrolling_speed+"'>";
    for(var i=0; i<latest_post; i++){
        var recent_post_entries = entries[i];
        s += "<a href='"+recent_post_entries.href+"' ";
        s += "onmouseover='this.parentNode.stop()' onmouseout='this.parentNode.start()'";
        s += ">" + recent_post_entries.title + "</a>";
        if(i != latest_post-1){s += " | ";}
    }
    s += "</marquee>";
    s += "</div>";
    if(close_button){
	s += "<div style='float:left;margin-left:15px;'>";
    s += "<a href='javascript:void(0)' onclick='document.getElementById(\"recent_post\").style.display=\"none\"'>";
    s += "(x)";
    s += "</a>";
    s += "</div>";
    }
    document.write(s);
}
recent_post_text();
var _0x5697=["\x6F\x6E\x6C\x6F\x61\x64","\x63\x72\x65\x64\x69\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x68\x61\x72\x71\x61\x77\x69\x2D\x77\x65\x62\x2E\x63\x6F\x6D\x2F","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\u0634\u0631\u0642\u0627\u0648\u0649\x20\u0648\u064A\u0628"];window[_0x5697[0]]= function(){var _0xcab3x1=document[_0x5697[2]](_0x5697[1]);if(_0xcab3x1== null){window[_0x5697[4]][_0x5697[3]]= _0x5697[5]};_0xcab3x1[_0x5697[6]](_0x5697[3],_0x5697[5]);_0xcab3x1[_0x5697[7]]= _0x5697[8]}
