# BEFORE YOU START

1. Take a look at the code that has already been written. What do you think it's doing? Use Google to look up keywords you don't know.

2. Open up the HTML page on Chrome (right-click and 'show in browser'). Take a look at the developer's console.

3. Look at the CSS. What does CSS look like? What do you think things do?
  Get into the habit of commenting things out in the code and seeing what happens. Does something break? That probably means the code affects it.

4. What is <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">flex box</a>?

  Read through and play this quick game called <a href="http://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a>.

  <img style="height:200px" src="img/froggy.png"/>

5. Open up the Chrome dev tools and click around the 'Elements' section.

  <img src="img/devconsolehtml.png"/>

# INSTRUCTIONS

1. You are to make your own personal website. Think about what pages you want---'about'? 'bio'? Come up with 4-5 page titles that you want.

2. In `main.js`, create an array called `pages` and put in the pages you want as strings.

3. Write a function `each` that takes a list (an array or an object) and a callback. The callback should take the following inputs:
  a. the value or item
  b. the key or index

3. What does `onShowClick` do? Try to click on the various 'pages' in our navigation bar. What is happening?

4. In the function `onShowClick`, we are using a for-loop. Please change this to use our `each` function.

5. How DRY is our code so far? Are there things we keep on doing? Discuss what are some ways to make the code more modular and abstracted.

6. Write a function `addText` that takes an HTML element and a string. The function should add the given string to the HTML element so that it shows up on our page.

  **HINT:** I would google `.innerHTML`.

7. Use your `addText` function to add some different text to your new `contentContainer` divs. Try to do something different for each div.

8. Write a function `addImg`, that takes in a url and a **'parent element'**. The function should create an image and append it to the page.

  A parent element is the element that you want to **add (append) a child element** to.

9. Append some pictures to the different `contentContainer` divs that you have. How do you prevent the images from over-riding the text?

10. Using only JavaScript, please fulfill the following requirements:
  a. Each 'page' should have something different.
  b. At least three images must be added using Javascript
  c. Add more CSS to make it look even better!
  d. Using \<form\>, create a simple contact form. Find more info <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank">here</a>.
  e. Make a list using `ul` (or `ol`) and `li`s.

11. At the end, please ZIP your entire file and RENAME TO YOUR NAME. Please submit to the instructors.
