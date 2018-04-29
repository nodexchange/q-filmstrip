'use strict';

/* global ADTECH */

let filmstrip = {};
let items = {};
let settings = {};
let filmstripContainer = {}

class Filmstrip {
  constructor(filmstrip, items, settings) {
    this.filmstrip = filmstrip;
    this.currentViewedItem = 0;
    this.items = items;
    this.maxRange = (items.length - 1) * 600; // height of the unit
    this.create(items);
    this.setup(settings);
  }
  create(items) {
    for (let i = 0; i < items.length; i++) {
      let image = document.createElement('div');
      image.style.background = 'url("' + items[i]['image source'] + '")';
      image.id = 'image' + (i + 1);
      image.addEventListener('click', (e) => {
        let id = parseFloat(e.target.id.split('e')[1]) - 1;
        ADTECH.contentClick('Filmstrip Items', 'clickthrough', this.items[id]);
      });
      this.filmstrip.appendChild(image);
    }
  }
  setup() {

  }
  scroll(percentage) {
    let scrollValue = (this.maxRange / 100) * percentage;
    let range = this.maxRange / (this.items.length - 1);
    let currentProgress = scrollValue / range;
    if (
      (currentProgress >= 0 && currentProgress < 0.3) || 
      (currentProgress >= 1 && currentProgress < 1.3) || 
      (currentProgress >= 2 && currentProgress < 2.3) || 
      (currentProgress >= 3 && currentProgress < 3.3) || 
      (currentProgress >= 4 && currentProgress < 4.3) || 
      (currentProgress >= 5 && currentProgress < 5.3) || 
      (currentProgress >= 6 && currentProgress < 6.3)
    ) {
      if (Math.floor(currentProgress) === 0) {
        this.filmstrip.style.top = '0px';
      } else {
        this.filmstrip.style.top = -Math.floor(currentProgress) * range + 'px';
      }
    } else {
      this.filmstrip.style.top = -scrollValue + 'px';
    }
  }
  nextItem() {
    this.currentViewedItem++;
    if (this.currentViewedItem > this.items.length) {
      this.currentViewedItem = this.items.length;
      return;
    }
    this.filmstrip.style.top = -this.currentViewedItem * 600 + 'px';
  }
  previousItem() {
    this.currentViewedItem--;
    if (this.currentViewedItem < 0) {
      this.currentViewedItem = 0;
      return;
    }
    this.filmstrip.style.top = -this.currentViewedItem * 600 + 'px';
  }
}

ADTECH.ready(() => {
  items = ADTECH.getContent('Filmstrip Items', [{'image source': 'image1.jpg','clickthrough': 'http://test1.com/'},{'image source': 'image1.jpg','clickthrough': 'http://test1.com/'},{'image source': 'image1.jpg','clickthrough': 'http://test1.com/'}, {'image source': 'image2.jpg','clickthrough': 'http://test2.com/'}]);
  settings = ADTECH.getContent('Filmstrip Animation Settings', 'Linear||Ease out');
  filmstripContainer = document.getElementsByClassName('filmstrip')[0]
  filmstrip = new Filmstrip(filmstripContainer, items, settings);
  setTimeout(() => {
    filmstripContainer.parentNode.style.opacity = 1;
  }, 100);
  ADTECH.addEventListener('scrollEvent', scrollHandler);

  function scrollHandler(evt) {
    let scrollValue = evt.meta.scrollValue;
    if (typeof scrollValue === 'number') {
      if (scrollValue < 101) {
        filmstrip.scroll(scrollValue);
      }
      // console.log('_______', scrollValue);
      // videoModal.style.opacity = scrollValue;
      // if (skipOverlay) {
        // skipOverlay.style.opacity = 1 - scrollValue;
      // }
    }
  }
  /*
  setInterval(() => {
    let evt = {};
    evt.meta = {};
    evt.meta.scrollValue = dummyScroll;
    dummyScroll++;
    if (dummyScroll > 101) {
      return;
    }
    scrollHandler(evt)
  }, 300);
  */
  /*
  setTimeout(() => {
    //filmstrip.nextItem();
  }, 2000);
*/
});

let dummyScroll = 0;