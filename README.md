# colorpicker

Another example of state design. This app should display a problem that we solve with React Events.

## Complete: Takeaways

### Stateful Parent Issue

* Each box has it's own clickHandler, how to figure out which box has been clicked on and update the parent state?

* React Events is the next topic that addresses this issue.


<img src="https://i.imgur.com/Mfbu6FL.png">

# Original Post

## Requirements

* Display a series of 18 boxes (square div with a background color). Initially random color chosen from a list of random colors.

* Clicking any box should change it's color to a *different* random color.

> Downward Data Flow? We may need to violate "children dumber than parents" rule of thumb, since each box may need it's own color state, while the parent container doesn't really need to be smart.