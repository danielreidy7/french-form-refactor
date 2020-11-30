# A UX experiment to improve the most submitted website form in France.

Since the 29th of October, France has endured it's second COVID-19 nationwide lockdown.
All members of the public must fill out a permission form (Paper version or an online form that downloads a PDF to your device) in order to leave their home.
Basically if you need to do something(shopping, go to work, drop the kids to day care, etc.) you are obliged to fill out a form.
Each form is timestamped and so needs to be refilled for each new reason for leaving your home.
Needless to say I USE THIS FORM A LOT !!!

Voila, the form in question: https://media.interieur.gouv.fr/deplacement-covid-19/

#### In the interest of fairness

The form in it's current state is well built. It is user-centric and has been revised multiple times. The main revision was to add the ability to autofill (remember) inputs on your device, this meant only changing the 'reason' and timestamp each time you used the form. Believe me, when they made this update (about a week into the lockdown, and 437 forms filled by me later...) It was a game changer. Honestly I dreaded the form before this, being a developer I just cannot bare repetitive tasks, let alone ones you have to do every single day.

### A worthy challenge

> I am currently (today's date: 28/11/2020) building out a portfolio as a Front-end Developer. As I interact with this form multiple times per day, I couldn't help myself from making my own revision.

### Goal for the project :

Make the form more efficient and intuitive. Fix some design flaws in the original.

### Dependencies

I built the form(which is non-fucntional redesign) using the following:

- Bootstrap 4
- Font Awesome Icons
- A few lines of JS :wink:
- HTML
- CSS
- SASS
- Algolia (auto search address)

### Criteria

As I only use this form on mobile I am going to focus on the mobile experience of the site.

# UX issues of the Form

## Header is too large, typography :suspect:


original form           |  redesign
:-------------------------:|:-------------------------:
![](https://i.ibb.co/18djGrz/old-form.png)  |  ![](https://i.ibb.co/gV4Pkg4/new-form.png)

As you can see above, the header and basic information take up half the viewport.
For me, we are losing valuable real-estate to information that will only ever be useful on the first render of the form to a user.
So let's clean up that header.

I went with a minimal material layout. One line per input. Small titles. 

Note I placed the "refresh form" button in the top right. On the original form this refresh button was at the bottom of the page in an obnoxiously large 
button. If ever a user would need it, it would be on page load, so we saved some scrolling time here!

A note on typography: Some will argue that having small text will be an accessibility issue.
In my experience anyone who is going to be effected by small typography is already usign the paper forms.



## The checkboxes to select the reason for your permission request are overloaded.


original form           |  redesign
:-------------------------:|:-------------------------:
![](https://i.ibb.co/KhdRmBv/original-form-2.png)  |  ![](https://i.ibb.co/zsGNFZL/redesign-form-2.png)

In the original form they opted for some heavy text explinations of the reason for the permission request.
This is useful maybe on the first useage, but made the daily usage of the form a nightmare. Trying to search 
via scroll on mobile was unnecessarily painful. 

I opted to simplify the reasons and present them like items in an UberEats menu.
This is a tried and tested method for checkboxes.
Again a note on accessibility: Yes i have used Icons for this section, but anyone who would struggle with 
iconography will not be filling out a form on their mobile :nerd_face:.

# Closing thoughts

Enjoyable. Scratched my own itch. 

The whole project took about: 8HRS.

I gained some insight into design critique and of course testing. 
As with all UX projects this could be refined ad inifitum, but for the time spent working on this, 
I feel the value added is > the effort to do the refactor.

# :wave:
