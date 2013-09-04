//画像解像度取得
stageWidth = Titanium.Platform.displayCaps.platformWidth;
stageHeight = Titanium.Platform.displayCaps.platformHeight;

var camera_view = Ti.UI.createView();

var otanoshimi_label = Ti.UI.createLabel({
	top:80,
	text:"仲良し二人の写真を撮ってコンテストに出よう！優勝者にはな、な〜んと○○がもらえる！さあ、今スグ最高の一枚を撮って応募だ！！"
});

// ロゴイメージ作成
var logo_image = Ti.UI.createImageView({
	image: 'logo.png',
	width: stageWidth/2,
	top: stageHeight*0.014,
	left: stageWidth*0.25
});
camera_view.add(logo_image);
camera_view.add(otanoshimi_label);

// カメラ起動ボタン
var camera_start_btn = Titanium.UI.createButton({
        title:'お楽しみカメラ起動',
        height:stageHeight*0.1,
        width:200,
        top:10
});

//クリック時の動作
camera_start_btn.addEventListener('click', function(e)
{
	Ti.Media.showCamera({
	
	        success:function(event)
	        {
	                var cropRect = event.cropRect;
	                var image = event.media;
	                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
	                {
	                        // カメラで撮った画像を表示する
	                        var imageView = Ti.UI.createImageView({
	                        		top:200,
	                                width:win.width/2,
	                                height:win.height/2,
	                                image:event.media
	                        });
	                        win.add(imageView);
	
	                        // カメラで撮った画像をアップロード（uploadCameraImageはあとで説明）
	                        uploadCameraImage(image);
	                }
	                else
	                {
	                        alert("got the wrong type back ="+event.mediaType);
	                }
	        },
	        cancel:function()
	        {
	        },
	        error:function(error)
	        {
	                // create alert
	                var a = Ti.UI.createAlertDialog({title:'Camera'});
	
	                // set message
	                if (error.code == Ti.Media.NO_CAMERA)
	                {
	                        a.setMessage('Please run this App on device');
	                }
	                else
	                {
	                        a.setMessage('Unexpected error: ' + error.code);
	                }
	
	                // show alert
	                a.show();
	        },
	        saveToPhotoGallery:true,
	        allowEditing:true,
	        mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
	});

});

//カメラ起動ボタン追加
camera_view.add(camera_start_btn);

//ウィンドウに追加
Ti.UI.currentWindow.add(camera_view);

/*
// RSSを表示するテーブルビュー作成
var tableView = Titanium.UI.createTableView({
	data: [],
	fontSize: 12,
	top:	150
});
// 表示対象の画像は配列として渡します
var images = [
    'funakoshi_logo.png',
    'hatsukaichi_logo.png',
    'kabe_logo.png'
];
// 背景色とセットで画像一覧を引き渡します
var cover_imageView = Ti.UI.iOS.createCoverFlowView({
    images: images,
    height:	150,
    top: 0,
    backgroundColor: '#efefef'
});

//alert(images);
// 画像選択時のイベント
cover_imageView.addEventListener('click',function(e){
	var selected_rss = e.index;
	// 各店舗のRSSを選択
	if( selected_rss == 0){
			var rss = require('services/rss_funa');
	}
	if( selected_rss == 1){
			var rss = require('services/rss_hat');
	}
	if( selected_rss == 2){
			var rss = require('services/rss_kabe');
	}
	if( selected_rss>2 || selected_rss<0 ){
			var rss = require('services/rss_funa');
	}
//	Ti.API.info(selected_rss);
	refreshRSS(rss);
});

// フリックなどで選択中の画像が変わったときのイベント
cover_imageView.addEventListener('change',function(e){
	var selected_rss = e.index;
	// 各店舗のRSSを選択

	if( selected_rss == 0){
			var rss = require('services/rss_funa');
	}
	if( selected_rss == 1){
			var rss = require('services/rss_hat');
	}
	if( selected_rss == 2){
			var rss = require('services/rss_kabe');
	}
	if( selected_rss>2 || selected_rss<0 ){
			var rss = require('services/rss_kabe');
	}
	refreshRSS(rss);
});
Ti.UI.currentWindow.add(cover_imageView);

function refreshRSS(rss) {
	var rows = [];
	var i;
	rss.loadRssFeed({
		success: function(data) {
    		var rssitems = data;
		    // TableViewで記事のタイトル一覧を表示
		    for (i = 0; i < rssitems.length; i++) {
		        rows.push({
		            title: rssitems[i].title,
		            hasDetail:true,
		        });
		 	 }
			// テーブルビューに記事をセット
		    tableView.setData(rows);

		    //記事タイトル時の挙動
			tableView.addEventListener(
				'click',
				function(e){
					// コールバック内では e.index でどの列がタップされたか取得できます
					var entryWindow = null,
						entryView = null;
					
					// 新しくWindowを作ってWebViewを表示します
					entryWindow = Titanium.UI.createWindow({
						title: rssitems[e.index].title
					});
					entryWindow.addEventListener('focus',function(){
						//Windows読み込み時の処理
					});
					entryView = Titanium.UI.createWebView({
						url: rssitems[e.index].link						
					});
					entryWindow.add(entryView);
					// 現在のTabでWebViewのWindowを表示
					Ti.UI.currentTab.open(entryWindow);
				}
			);// tableview event listener
//			tableView.removeEventListener('click',function(e){});
    	}// load success function
	});//load rss feed
}//refresh rss feed
*/