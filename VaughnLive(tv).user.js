// ==UserScript==
// @name        VaughnLive.tv
// @namespace   Adios Facebook, pueblicidad, ads, etc.
// @run-at      document-end
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @include     *://vaughnlive.tv*
// @exclude     *://vaughnlive.tv/*chat*
// @version     1.4
// @dateLast	2017.04.08
// @grant       none
// ==/UserScript==

var $vg = jQuery.noConflict();

//top.location.href = document.location.href ;
function geto(){
  if(window.location.href.indexOf('embed') > -1 && window.location.href.indexOf('chat') < 0 && top.window.location.href.indexOf('vaughnlive') > -1) {
  var getadrres = document.location.href;
  var nukelii = getadrres.replace(/\?viewers.+/gi,'');
  var stuped = nukelii.replace(/.+embed\/video\//gi,'http://vaughnlive.tv/');
    top.location.href = stuped;
    //window.open(stuped,'numberil');
    //self.location = unescape('about%3Ablank');
  }
  $vg( 'div.theChat, div.theChatToggle, div.theBar, div#vs_chat_vaughn, div.theMenu, div.clear, div.theTop, div.modalv3, div#browseWindow, div#dashboardWindow, div#mvn, div#loading, div#topBarV2wrapper, div#topBarV2toggle, div#videoHeader, div#videoStatus, div.spacer10px, div.theAboutWrap, div.aboutHeader_left, div.theAboutWrap2' ).each(function() {
  $vg( this ).remove();
  });
  setTimeout(master, 1500);
}

function master(){
  $vg( 'script,style,br,table,p,head,noscript,#vs_chat_vaughn' ).each(function() {
    $vg( this ).remove();
  });
  $vg('#vsPlayer').unwrap();
  $vg('#vsPlayer').unwrap();
  $vg('#vsPlayer').unwrap();
  $vg('#vsPlayer').unwrap();
  $vg('#vsPlayer').unwrap();
  $vg('#vsPlayer').unwrap();
  $vg('#vsPlayer').unwrap();
  $vg( 'div' ).each(function() {
    $vg( this ).remove();
  });
}

setTimeout(geto, 500);
