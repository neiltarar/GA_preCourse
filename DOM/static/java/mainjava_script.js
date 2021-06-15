window.onload = function() {
    change_script();
    function change_script() {
        document.querySelector('h1').innerHTML = "Visit my <a href='http://www.coolsite.net'>site</a>";
        document.querySelector('h2').setAttribute('class', 'blue');
        document.querySelector('.blue').style.color = 'yellow';
    change_p();
    function change_p() {
        const paragraph = document.createElement('li');
        paragraph.innerText = "Your passwords did not match.";
        //paragraph.setAttribute("class", "registration-error");
        const new_text = document.querySelector('ul');
        new_text.append(paragraph);
        const x = document.querySelector('title').innerText;
        document.getElementsByClassName
        console.log(x);
        }
    }
}

