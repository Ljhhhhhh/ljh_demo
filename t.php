<?php

$ch = curl_init();
// 必要参数
$apikey = "xxxxxxxxxxx"; //修改为您的apikey(https://www.yunpian.com)登录官网后获取
$mobile = "xxxxxxxxxxx"; //请用手机号代替
$text="【云片网】您的验证码是1234";
// 发送短信
$data=array('text'=>$text,'apikey'=>$apikey,'mobile'=>$mobile);
curl_setopt ($ch, CURLOPT_URL, 'https://sms.yunpian.com/v2/sms/single_send.json');
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
$json_data = curl_exec($ch);
//如果curl发生错误，打印出错误
if(curl_error($ch) != ""){
    echo 'Curl error: ' .curl_error($ch);
}
//解析返回结果（json格式字符串）
$array = json_decode($json_data,true);
echo '<pre>';print_r($array);