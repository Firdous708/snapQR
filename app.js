let btnDownload = document.querySelector('#btn');
let img = document.querySelector('#img');

function generateQR(){
  document.querySelector("#qr-image").style.display = "block";
  btnDownload.style.display = "block";
  let QRtext = document.querySelector("#text").value;
  if(QRtext.trim().length == 0){
    document.querySelector("#qr-image .error").innerHTML = "Please enter text";
  document.querySelector("#img").style.display = "none";
    btnDownload.style.display = "none";
  } else {
    document.querySelector("#img").style.display = "block";
    document.querySelector("#qr-image .error").innerHTML = "";
    document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240×240&data=" + QRtext;
    btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}
  }
};
