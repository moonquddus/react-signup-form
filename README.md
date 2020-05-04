# Simple Signup Form - by Moon Quddus

Do you want to voluntarily give your personal details to this form you downloaded from a random guy called Moon? **OF COURSE YOU DO :D**

## Set-up and run

1. Run `git clone` and pull this repo into your local workspace
2. Navigate to the directory with this code and run `npm install`
3. After it's completed, run `npm run start` and navigate to *http://localhost:3000*
4. Have fun and complete the form!

## Notes

- Used *material-ui* to present everything using Google's Material Design (great for rapid prototyping). Although next time I'd use steppers instead of traditional tabs.
- It's a React app, using *redux* - React alone (or even vanilla JS) would've been enough for this demo, but I guess I wanted to show my experience.
- Although one benefit of using a state container with redux - The app UI can be split into smaller forms, rather than one massive form wrapping the tab components.
- You can actually go backwards in this app! Just click on the tab headers (each tab remembers what you inputted). You can't skip forward though.
- I like to use *redux-form* to build some larger forms - went without it today, I want to keep the number of packages used low.
- `DetailsForm` has all the text fields - to change the configuration, you'd need to modify the template to add an extra `TextField` or whatver input component, and add an state value. The validation configuration in the util function would also need to be updated.
- `App` houses the main tab framework. If you want to add a page, you just add another `Tab` and an extra content component. Progress bar would need a slight tweak.
- I use *testing-library* and *jest* for running tests, and a couple e2e tests with *cypress*.
- The fields in the form are basically hardcoded into the component templates. As an alternative next time, I'd make a map of form elements (inc. field details & validation rules) and have my form component dynamically generate the inputs. It would take a lot longer to implement, but makes it much easier to chop up and re-arrange the form.