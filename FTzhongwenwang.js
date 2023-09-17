/******************************
FT中文网 外区
***********************

[rewrite_local]
^https:\/\/*\.cloudfront\.net\/index\.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/FTzhongwenwang.js

^https:\/\/*\.cloudfront\.net\/index\.php\/jsapi\/get_story_more_info\/* url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/FTbody.js


[mitm]
hostname = *.cloudfront.net

*******************************/
var objc = JSON.parse($response.body);
    objc = {"paywall":0,"premium":1,"standard":1,"addon":0,"expire":"999693756810","v":1997,"campaign_code":"","latest_duration":"yearly"}
$done({body : JSON.stringify(objc)});
