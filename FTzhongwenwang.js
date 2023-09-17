/******************************
FT中文网 外区
***********************

[rewrite_local]
^http[s]?:\/\/.*.cloudfront.net\/index.php\/jsapi\/paywall url script-response-body cloudfront.js
[mitm] 
hostname = .*.cloudfront.net

*******************************/

var newBody = '{"paywall":0,"premium":1,"standard":1,"addon":0,"expire":"999693756810","v":1997,"campaign_code":"","latest_duration":"yearly"}';
$done({newBody});
