$(function(){
    window.onhashchange=function(){
        var n=$(".main"),
        o=window.location.hash,
        a=o.substring(2,o.length);
        n.css({"background-color":a})
}});