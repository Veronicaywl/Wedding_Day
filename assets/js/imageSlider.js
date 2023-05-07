var timer = setInterval(nextImage, 8000);
let curImage = 0;
    //edit number of images here
let numImages = 3;

function nextImage() {
    var e;
    // remove showMe class from current image
    e = document.getElementById("slideimg" + curImage);
    removeClass(e, "showMe");

    // compute next image
    curImage++;
   if (curImage > numImages - 1) {
       curImage = 0;
    }

    // add showMe class to next image
    e = document.getElementById("slideimg" + curImage);
     addClass(e, "showMe");

}


function prevImage() {
    var e;
    // remove showMe class from current image
    e = document.getElementById("slideimg" + curImage);
    removeClass(e, "showMe");

    // compute next image
    curImage--;
   if (curImage < 0) {
       curImage = numImages - 1;
    }

    // add showMe class to next image
    e = document.getElementById("slideimg" + curImage);

     addClass(e, "showMe");

}


function addClass(elem, name) {
    var c = elem.className;
    if (c) c += " ";  // if not blank, add a space separator
    c += name;
    elem.className = c;
}

function removeClass(elem, name) {
    var c = elem.className;
    elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
}

$(document).ready(function() {
  $('.arrowLeft').click(function() {
    prevImage();
  });
$('.arrowRight').click(function() {
    nextImage();
  });
});

$(document).ready(function() {
    const repoUrl = 'https://api.github.com/repos/Veronicaywl/veronicaywl.github.io/contents/assets/wedding_photos/';
    $.getJSON(repoUrl, function(data) {
        numImages = 0;
        $.each(data, function(i, item) {
            if (item.type === 'file' && item.name.match(/\.(jpe?g|png|gif)$/)) {
                const imageUrl = item.download_url;
                var img;
                numImages++;
                if (i == 0) {
                    img = $('<img>').attr('src', imageUrl).attr('id', 'slideimg' + i).addClass('slide').addClass('showMe');
                } else {
                    img = $('<img>').attr('src', imageUrl).attr('id', 'slideimg' + i).addClass('slide');
                }
                $('.sliderImg').append(img);
            }
        });
    });
});