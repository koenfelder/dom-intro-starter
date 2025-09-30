// For this section, use JS to select the element here by its ID and add to the innerHTML a span with a class of "tan" and text inside that span that says "This is new tan text
document.getElementById("firstPara").innerHTML += "<span class='tan'>This is new tan text.</span>";

// For this section, select all of these images and change their width from its current setting to 250 pixels
let images = document.getElementsByTagName("img");
console.log(images);

for(let img of images){
    img.width = "250";
}

// For the elements below, there are two class names. You will need to select the groups of elements separately, and for the elements with the class "med-blue", add inline styles to change the text color to #3C5E73. For the elements with the class "light-blue" change the text color to #7C9EA6. You can access the inline styles for an element with the dot operator (.) and the attribute name "style" followed by another dot and the style you want to set (in this case, element.style.color).
let lightBlueSpans = document.getElementsByClassName("med-blue");
let medBlueSpans = document.getElementsByClassName("light-blue");

for(let span of lightBlueSpan){
    span.style.color = " #7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color = " #3C5E73"
}