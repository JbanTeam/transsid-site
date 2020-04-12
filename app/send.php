<?php

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$project_name = trim($_POST["project_name"]);
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);
$c = true;
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.timeweb.ru'; // SMTP сервера
    $mail->Username   = 'noreply@ce20489.tmweb.ru'; // Логин на почте
    $mail->Password   = '*********'; // Пароль на почте
    //$mail->SMTPSecure = 'ssl';
    $mail->Port       = 25;
    $mail->setFrom('noreply@ce20489.tmweb.ru', 'TransSiD'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('@mail.ru');

    foreach ( $_POST as $key => $value ) {
    		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    			$message .= "<b>$key</b>: <span>$value</span><br><br>";
    	}
    }

// -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);

        $mail->Subject = 'Заявка с сайта';
        $mail->Body    = $message;
// Проверяем отправленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}





