let currentUrl = window.location.href

if(currentUrl.indexOf('index.html')!=-1){
    document.getElementById('index').style.transform = 'scale(1.5)'
    document.getElementById('index').style.textDecoration = 'underline'
}else if(currentUrl.indexOf('flavours.html')!=-1){
    document.getElementById('flavours').style.transform = 'scale(1.5)'
    document.getElementById('flavours').style.textDecoration = 'underline'
}else if(currentUrl.indexOf('verhuur.html')!=-1){
    document.getElementById('verhuur').style.transform = 'scale(1.5)'
    document.getElementById('verhuur').style.textDecoration = 'underline'
}else if(currentUrl.indexOf('contact.html')!=-1){
    document.getElementById('contact').style.transform = 'scale(1.5)'
    document.getElementById('contact').style.textDecoration = 'underline'
}