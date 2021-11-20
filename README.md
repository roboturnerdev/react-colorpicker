# colorpicker

Another example of state design. This app should display a problem that we solve with React Events.

## Requirements

* Display a series of 18 boxes (square div with a background color). Initially random color chosen from a list of random colors.

* Clicking any box should change it's color to a *different* random color.

> Downward Data Flow? We may need to violate "children dumber than parents" rule of thumb, since each box may need it's own color state, while the parent container doesn't really need to be smart.