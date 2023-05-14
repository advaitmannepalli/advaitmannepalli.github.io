// Creates the code to make the intro visible
let intro = document.getElementsByClassName('intro')[0];
let more = document.getElementsByClassName('more')[0];
let ShowMore = () => {
    more.style.display = 'block';
}
intro.onclick = ShowMore;
intro.onmouseover = () => {
    intro.innerHTML = 'Click Me!';
    intro.style.textDecoration = 'underline';
    intro.style.cursor = 'pointer';
}
intro.onmouseout = () => {
    intro.innerHTML = "Let's get started";
    intro.style.textDecoration = 'none';
}



// Creates code to make ChatGPT's article visible
let intro2 = document.getElementsByClassName('intro')[1];
let more2 = document.getElementsByClassName('more')[1];
let ShowMore2 = () => {
    more2.style.display = 'block';
}
intro2.onclick = ShowMore2;
intro2.onmouseover = () => {
    intro2.innerHTML = 'Click Me!';
    intro2.style.textDecoration = 'underline';
    intro2.style.cursor = 'pointer';
}
intro2.onmouseout = () => {
    intro2.innerHTML = "A brief introduction";
    intro2.style.textDecoration = 'none';
}


// creates code to make the future of chatbots visible
let intro3 = document.getElementsByClassName('intro')[2];
let more3 = document.getElementsByClassName('more')[2];
let ShowMore3 = () => {
    more3.style.display = 'block';
}
intro3.onclick = ShowMore3;
intro3.onmouseover = () => {
    intro3.innerHTML = 'Click Me!';
    intro3.style.textDecoration = 'underline';
    intro3.style.cursor = 'pointer';
}
intro3.onmouseout = () => {
    intro3.innerHTML = "The harsh future in store";
    intro3.style.textDecoration = 'none';
}
