"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Brenden Riley
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
// setStyles will run when the page loads
window.addEventListener("load", setStyles)

function setStyles() {
      // A random image will appear when the page loads, based on a random number, which is the number assigned to an href attribute
      var styleNum = randInt(5);
      var link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("id", "fancySheet");
      link.setAttribute("href", "na_style_" + styleNum + ".css");
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(link);

      // A figure box is created which contains all the images, and will later allow the user to switch between them
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      // The user is able to switch between the images, because a style sheet is run to change the image to whatever is selected
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png")
            sheetImg.setAttribute("alt", "na_style_" + i + ".css")
            sheetImg.onclick = function () {
                  var switcher = document.getElementById("fancySheet");
                  switcher.setAttribute("href", event.target.alt);
            }
            figBox.appendChild(sheetImg);
      }

      // A style sheet is created and added to the document
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      // The styles are added to the figure element and the images, which changes how they look and how they look when hovered over
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs {\
                  position: absolute; \
                  left: 0px;\
                  bottom: 0px; \
            }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img {\
                  outline: 1 px solid black;\
                  cursor: pointer;\
                  opacity: 0.75;\
            }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px solid red; \
                  opacity: 1.0;\
            }", 2);
}

//premade below
function randInt(size) {
      return Math.floor(size * Math.random());
}