# README

[Unlimitlist](https://unlimitlist.herokuapp.com/#/) is Workflowy clone, an app that aims to give organization to to your ideas. 

## Why Unlimitlist? 

Unlimitlist provides the ability to make and edit lists, mark items as complete, and provides organization of ideas via sublists. Any bulletted idea can house another list. 

## Key Features

![unlimitlist-app-image](app/assets/images/unlimitlist-ss-3.png)

* Unlimitlist has a persistent user authentication pattern that allows for signup and login functionality. 

* List items to be created from the interface (button) or with the keyboard, with a press of the enter key for seamless jotting. Items will be created with preservation of list order - with the next item being inserted after the item previously in focus. 

* Bullet items can be added as nested lists underneath bulletted items. This means that lists can be flowing, and organized. 

* Users can utilize buttons in the app or the Enter/Delete keys to create and delete list items. 

* Users can perform a plaintext search, as well as save tags by puttins a '#' in front of a word in a list item. 

## Technologies

* Unlimitlist is seeded and deployed on Heroku. 

* The project is built with a Ruby on Rails back-end, and PostgresSQL database and a React front end.

## Challenges 

* One of my biggest challenges was the search function. I wanted to create seamless interface that utilized the same list component that I was using for the regular index for list items. 

![unlimitlist-app-image](app/assets/images/nodes-controller-screenshot.png)
![unlimitlist-app-image](app/assets/images/node-model-screenshot.png)

## Future Features

* Toggling hide/show of completed list items.
* Sharing lists with other users. 
* Drag and drop ordering of list items. 
* Exporting of lists in a printable format. 

