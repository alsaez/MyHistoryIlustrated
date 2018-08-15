<?php header('Location: /index.html');

if(isset($_POST["submit"])){
// Checking For Blank Fields..
if($_POST["fullName"]==""||$_POST["email"]==""||$_POST["sms"]==""){
echo "Please Fill All Fields..";
}else{
// Check if the "Sender's Email" input field is filled out
$email=$_POST['email'];
// Sanitize E-mail Address
$email =filter_var($email, FILTER_SANITIZE_EMAIL);
// Validate E-mail Address
$email= filter_var($email, FILTER_VALIDATE_EMAIL);
if (!$email){
echo "Invalid Sender's Email";
}
else{
$recipient = "anisley.sv@gmail.com";
$subject = "From ASVWEB portfolio";
$message = $_POST['sms'];
$headers = 'From:'. $email . "\r\n"; // Sender's Email

// Message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);
// Send Mail By PHP Mail Function
mail($recipient, $subject, $message, $headers) or die("Error!");
echo "Your mail has been sent successfuly ! Thank you for your feedback";
}
}
}

?>
