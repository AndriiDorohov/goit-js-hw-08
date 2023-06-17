# Admission criteria

- The repository `goit-js-hw-08-gallery' has been created.
- When submitting homework, there are two links: to the source files and a working
page on GitHub pages.
- When visiting the work page (GitHub pages) of the task, there are no errors and
warnings in the console.
- The names of variables and functions are clear, descriptive.
- The code is formatted using Prettier.

## Task

Create a gallery with the ability to click on its elements and view a full-size
image in a modal window. Look at the preview of the result
[by link](https://take.ms/ZvBD0E ).

![Preview](preview.jpg )

Break the task into several subtasks:

- Creation and rendering of markup based on the data array and the provided template.
- Implementation of delegation on the `ul.js-gallery` gallery and getting the `url' of a large
  images.
- Opening a modal window by clicking on a gallery element.
- Substitution of the value of the `src` attribute of the `img.lightbox__image` element.
- Closing the modal window by clicking on the button
  `button[data-action="close-lightbox"]`.
- Clearing the value of the `src` attribute of the `img.lightbox__image` element. This is necessary
  in order for the next time the modal window is opened, while loading
  the image, we didn't see the previous one.

## Start files

- In the [src](./src) folder you will find the project's starter files with basic markup and
ready-made styles.
- In the file [gallery-items.js ](./src/gallery-items.js) there is an array of objects
containing information about images: a small image, an original and
a description.

## Markup of the gallery element

The link to the original image must be stored in the `source` data attribute on
the `img` element, and specified in the `href` of the link (this is necessary for accessibility).

```html
<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
```

## Additional

The following functionality is not required when submitting a task, but it will be a good practice
to work with events.

- Closing the modal window by clicking on `div.lightbox__overlay'.
- Closing the modal window by pressing the `ESC` key.
- Scrolling through the gallery images in an open modal window with the "left"
and "right" keys.
