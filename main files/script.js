function openInsta() {
  var links = [
    "https://www.instagram.com/shreyamhrj/",
    "https://www.instagram.com/jonimhrzn/",
    "https://www.instagram.com/srijeetaregmi/",
    "https://www.instagram.com/sujan.adhikari.7/",
    "https://www.instagram.com/pxrbat/",
  ];

  var newWindow = window.open();
  links.forEach(function (link) {
    var iframe = document.createElement("iframe");
    iframe.src = link;
    newWindow.document.body.appendChild(iframe);
  });
}
