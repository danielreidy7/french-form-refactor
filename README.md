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

I am currently (today's date: 28/11/2020) building out a portfolio as a Front-end Developer. As I interact with this form multiple times per day, I couldn't help myself from making my own revision.

### Goal for the project :

Make the form more efficient and intuitive. Fix some design flaws in the original.

### Dependencies

I built the form(which is non-fucntional redesign) using the following:

- Bootstrap 4
- Flexbox
- Some vanilla JS

### Criteria

As I only use this form on mobile I am going to focus on the mobile experience of the site.

# Current issues (as i see them.)

## Issue 1

![Header is too large](https://ibb.co/x1WH310)
As you can see in the screenshot, when the pages loads the header and basic information takes up half the page.
For me, we are losing valueable real-estate to information that will only ever be useful on the first render of the form to a user.
So let's clean up that header.
