const form = document.getElementById('form1');
form.addEventListener('submit', submitCSV);
function submitCSV(e){
    // e.preventDefault()
    console.log('On Client Side: Hello World');
    console.log(e);
}