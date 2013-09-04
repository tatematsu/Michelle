//画像解像度取得
stageWidth = Titanium.Platform.displayCaps.platformWidth;
stageHeight = Titanium.Platform.displayCaps.platformHeight;

// ロゴイメージ作成
var logo_image = Ti.UI.createImageView({
	image: 'logo.png',
	width: stageWidth/2,
	top: stageHeight*0.014,
	left: stageWidth*0.25
});

//地図ビュー作成
var map_view = Ti.UI.createView();
var hatsukaichi = Ti.Map.createAnnotation({
	latitude: 34.331876,
	longitude: 132.320321,
	title:'ラ・ミッシェル廿日市',
	animate: true
});
var funakoshi = Ti.Map.createAnnotation({
	latitude: 34.366526,
	longitude: 132.521121,
	title:'ラ・ミッシェル船越',
	animate: true
});
var kabe = Ti.Map.createAnnotation({
	latitude: 34.522375,
	longitude: 132.447355,
	title:'ラ・ミッシェル可部',
	animate: true
});

var nav_kabe = Ti.UI.createButton(
	{
		title:'可部までナビ',
		top: stageHeight/2,
		left: 0,	//stageWidth/3,
		width:	stageWidth/2
	}
);
// 可部のナビマッピに移動
nav_kabe.addEventListener('click',function(e){
	Titanium.Platform.openURL('http://goo.gl/maps/ulVAs');
});
var nav_funakoshi = Ti.UI.createButton(
	{
		title:'船越までナビ',
		top: stageHeight/2.8,
		left: stageWidth/2,
		width:	stageWidth/2
	}
);
// 船越のナビマッピに移動
nav_funakoshi.addEventListener('click',function(e){
	Titanium.Platform.openURL('http://goo.gl/maps/sGokW');
});
var nav_hat = Ti.UI.createButton(
	{
		title:'廿日市までナビ',
		top: stageHeight/2.8,
		left: 0,
		width:	stageWidth/2
	}
);
// 廿日市のナビマッピに移動
nav_hat.addEventListener('click',function(e){
	Titanium.Platform.openURL('http://goo.gl/maps/Jhhh1');
});

// GPS目的記述
Titanium.Geolocation.purpose = 'ホテルへの道案内';

//位置情報の取得
/*Titanium.Geolocation.getCurrentPosition(
    function(e) {
        if (!e.success || e.error){
            alert('位置情報が取得できませんでした');
            return;
        }
        var my_lat = e.coords.latitude;
        var my_lon = e.coords.longitude;
	}
);*/

// 地図ビュー作成
var access_map = Ti.Map.createView({
	mapType: Ti.Map.STANDARD_TYPE,
	region: { latitude:34.376287,longitude:132.420743,latitudeDelta:0.25,longitudeDelta:0.25 },
	animate: true,
	regionFit: true,
	top: stageHeight*0.1,
	width: stageWidth,
	height: 220,
	userLocation: true,
	annotations: [kabe,funakoshi,hatsukaichi]
});
map_view.add(logo_image);
map_view.add(access_map);
map_view.add(nav_hat);
map_view.add(nav_kabe);
map_view.add(nav_funakoshi);

//ウィンドウに追加
Ti.UI.currentWindow.add(map_view);