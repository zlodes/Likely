# Likely

The social sharing buttons that aren’t shabby.
Fork was made for using on [TJournal](https://tjournal.ru)

## Install

Download this repository and move files `release/likely.js` and 
`release/likely.css` to desired directory.

## Setup

After you've installed Likely, you need to setup it.

Just include files named `likely.css` and `likely.js`.

Then you'll need to create HTML container with `likely` class and list desired 
social networks in child divs:

```html
<div class="likely">
    <div class="twitter">Tweet</div>
    <div class="facebook">Share</div>
    <div class="vkontakte">Share</div>
    <div class="gplus"></div>
    <div class="odnoklassniki"></div>
    <div class="telegram"></div>
    <div class="whatsapp"></div>
    <div class="more"></div>
</div>
```

Likely supports following social networks and mobile messengers:

* `twitter` – Twitter
* `facebook` – Facebook
* `vkontakte` – VK
* `gplus` - Google+
* `odnoklassniki` – Odnoklassniki
* `telegram` – Telegram
* `whatsapp` – WhatsApp

### "More" button

Remove `<div class="more"></div>` if you don't want to display button set on small resolutions.
Keeping it will hide social buttons under one button, which will be fixed in bottom right corner of the screen. Click on it to show hidden buttons.

You can have several Likely button sets on the page, but more than one "More" button per page won't work. 
Use it only if you have one button set on page (in article, for example).

## Options

You can set some options on Likely button set via `data-*` attributes:

* `data-url` – URL to share and load counters for
* `data-title` – Page title

There's also social network specific options.

### Twitter

You can set `data-via` attribute on Twitter button to insert username mention 
of this user:

```html
<div class="twitter" data-via="tjournal">Tweet</div>
```

## Demo

You can see Likely in action on this [page](http://valerypatorius.github.io/Likely/).
