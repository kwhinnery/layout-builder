# Layout Builder Prototype

This repository contains a sample app (based on [create-react-app](https://create-react-app.dev/)) to demonstrate an approach to visually building UI layouts by managing a component hierarchy. This is presented as an alternative to manually positioning and sizing components on a canvas using a mouse - a common approach in many UI builder tools. Developers typically reason about rich front end applications as a hierarchy of custom components (in the DOM or another model), where parents control the layout of their children. This UI builds on that existing base of knowledge and mental model.

## Live Demo

You can interact with this prototype here *TODO - add GitHub Pages Link*

## How It Works

This UI has three panes, from left to right:

* A explorer view, showing the component hierarchy
* A preview of the actual, working UI
* An "inspector" view, used to edit selected components

**All adding, moving, selecting, and deleting of components is done using the explorer view** on the left. The center preview pane always shows the working version of the UI and layout, and cannot be directly manipulated (except to interact with the app). The inspector view allows you to edit the properties of a selected component.

## Advantages

Managing a user interface by manipulating a component hierarchy has a few benefits over manual positioning and sizing.

* Moving groups of components or individual components is easier when you are just changing their parent, rather than trying to clear out new space within a manually-constructed layout.
* Dragging and dropping nodes on a tree structure is a UI pattern most computer users already understand (like a filesystem).
* Parents can define layout strategies, so as new children are added, they can more easily snap into place using the strategy defined by the parent. 
* Managing a component hierarchy opens up the possibility of using more powerful layout options, like CSS grid or Flexbox.
* Mouse movement and selection in a manual positioning UI can be clunky - you might not click on and move the right parent, resizing a component might mess up your layout, etc. It is difficult to create consistent mouse behavior. Inserting a new node into a hierarchy is a predictable experience.

## Disadvantages

Some disadvantages of this approach might be:

* Most WYSIWIG editors support free drag-and-drop and resizing with the mouse - the absence of this feature may surprise some users. 
* Similarly, most WYSIWIG editors support a flow like "click on a thing directly in the layout, and edit its properties in an inspector UI". Though there are ways to provide this experience potentially in this model too, like having the center preview pane be able to switch between a "user mode" and maybe a "selection mode", like the Unity editor has different mouse modes.
* Complex layouts can sometimes result in large component trees which could be tricky to navigate (but this becomes true eventually for any sufficiently complex app)

## Future Explorations

It could be possible to support drag-and-drop additions of components to the hierarchy via the center preview pane - but rather than dropping the components at an X/Y position, you are just determining where in the component hierarchy to slot in the new UI control.

I think the most important idea in this prototype is that UI structure is naturally hierarchical, and eschewing manual sizing and X/Y positioning in favor of layouts for parents and children creates a much more consistent experience.
