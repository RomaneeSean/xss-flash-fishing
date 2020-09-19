<?php
$c = @$_POST['c'];
if ($c == "xie") {
    $ua = @$_POST['ua'];
    $uafile = fopen("download_useragent.txt", "w");
    fwrite($uafile, $ua);
    fclose($uafile);
} elseif ($c == "mv") {
    $myfile = fopen("download_useragent.txt", "r"); //打开记录已下载记录的UA文件
    $target_ua = fgets($myfile); //读取已下载的UA
    $uafile = fopen("run_useragent.txt", "a+"); //以追加的方式打开记录成功运行的UA
    fwrite($uafile, $target_ua . "\n"); //运行后把UA移动到成功运行的txt
    fclose($myfile);
    echo "ok";
} else {
    die();
}
