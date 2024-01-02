let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = '-200px';
}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxJkyq9U9SQ1WG_LEsE3b8hErYh-j1ruyXpClgcu-RR6YBiYtkNlcUwk-vxvUCU1YAUvA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML='Message sent successfully'
        setTimeout(function(){
            msg.innerHTML=''
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
