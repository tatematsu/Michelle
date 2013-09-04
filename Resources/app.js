//タブグループ作成
var tabGroup = Ti.UI.createTabGroup();

//空室予約ウィンドウ作成
var reservation_win = Ti.UI.createWindow({
	title :'空室状況・ご予約',
	backgroundColor: 'white',
	url: 'reservation_win.js'
});
//新着イベント情報ウィンドウ作成
var event_win = Ti.UI.createWindow({
	title :'フォトコンテスト',	
	backgroundColor: 'white',
	url :'event_win.js'	
});
//地図ウィンドウ作成
var map_win = Ti.UI.createWindow({
	title :'ホテル地図',	
	backgroundColor: 'white',
	url :'map_win.js'	
});
//空室状況タブ
var reservation_tab = Ti.UI.createTab({
	icon: 'KS_nav_views.png',
	title:'空室状況・ご予約',
	window: reservation_win
});
//マップタブ
var map_tab = Ti.UI.createTab({
	icon: 'KS_nav_ui.png',
	title:'ホテル地図',
	window: map_win
});
/*
// イベント情報タブ
var event_tab = Ti.UI.createTab({
	icon: 'KS_nav_ui.png',
	title:'フォトコンテスト',
	window: event_win
});*/
// tabグループにタブ追加
tabGroup.addTab(reservation_tab);
//tabGroup.addTab(event_tab);
tabGroup.addTab(map_tab);
//タブグループを開く
tabGroup.open();

