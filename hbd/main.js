async function munculAlert(){
    await Swal.fire({
      title: "HI!, I'am Lukman",
      imageUrl: "fotome.png",
      imageWidth: 200,
      imageAlt: "hbd"
    });
    await swal.fire("enyem maret 2024")
    await Swal.fire({
        title: "19 TH",
        text: "HBD TO ME",
        imageUrl: "hbd.jpg",
        imageWidth: 200,
        imageAlt: "hbd"
      });await Swal.fire({
        title: "Doakan atau tidak",
        text: "apakah anda ingin mendoakan aku?",
        icon: "warning",
        showDenyButton : true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "DOAKAN",
        denyButtonText : ' GK USAH',
      }).then((result) => {
        if (result.isConfirmed) {
            doakanSaya()
            Swal.fire({
            title: "success",
            text: "Terima kasih telah mendoakan!!",
            imageUrl: "loli seneng.png",
            imageWidth: 200,
            imageAlt: "loli"
          })
        }else {
            swal.fire({
                title : 'failed',
                text: 'YANG bener aja rugi donkk',
                imageUrl: "MIKIR.png",
                imageWidth: 200,
                imageAlt: "mikir"
            })
        }
      });
} 


munculAlert()

function doakanSaya(){
  document.getElementById('test').innerHTML = prompt("Silahkan ketikan doa")
}