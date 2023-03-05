# About The Project

CareerTrack is a web app designed to help users track and analyze job opportunities. Our app helps to improve productivity and saves time spent on regularly checking mails as well. With a user-friendly interface, students are reminded of new e-mails from the companies they have applied to and are able to keep track of the updates through notes. A chrome extension allows you to easily add details of new applications or to wishlist jobs right after applying.
* Our initial stage involved a platform just to visualise job details based on user input.
* Incrementally we were able to access user emails to provide notifications from all companies in a single platform, and the use of a browser extension to input job details faster.
* We also added a graph to visualise the number of jobs applied for during a time period and the use of a notes feature for each job so that the user can add personalised data specific to the job.

https://user-images.githubusercontent.com/77000606/222957582-05d31a58-7c70-465d-8440-6fbf4a45af6b.mp4

## App Preview
![Screenshot (5)](https://user-images.githubusercontent.com/77000606/222957826-f727fa04-85c2-4e5c-ab5a-4901a10257fd.png)

![Screenshot (6)](https://user-images.githubusercontent.com/77000606/222957835-0a6840d9-970b-421b-9e6f-4abff884afb7.png)

![Screenshot (3)](https://user-images.githubusercontent.com/77000606/222957844-0b2b022b-7037-4777-9147-1376b312db69.png)

![Screenshot (4)](https://user-images.githubusercontent.com/77000606/222957848-1d72d53c-83f7-4576-9fd0-cc67c13146ad.png)

## Built With

* React.js
* Node.js
* Plasmo

<!-- GETTING STARTED -->
# Getting Started
## Dependencies

* react-to-pdf : 0.0.14
* recharts : 2.4.3
* plasmo : 0.65.3
* googleapis : 112.0.0
* google-auth-library: 8.7.0
## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/shreyas0512/CareerTrack
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Start the Development Server
   ```sh
   npm start
   ```

# Extension
## How it Works ?

The extension is present upon installation. As we browse ,we can select the extension to add data related to a particular job like job title, location, position.
 
## Configuring the extension

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

### Getting Started

First, go to the extension directory and run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

Once you apply for a job, you can right click and select the context menu option "Add your application".
Add the job details into the popup and click on Add.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

### Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

<!-- USAGE EXAMPLES -->
# Usage
Career track is a solution to avoid missing out on any e-mail notifications received regarding a job opportunity.
It keeps track of the status of the application and displays it visually.
The extension can be used while browsing e-mails to add details of applied jobs.
<!-- ROADMAP -->
# Roadmap

- Add data using extension
- Display status of e-mails company-wise
- Check for new e-mail in the webpage
- Add tasks to notes

<!--FUTURE -->
# Future Scope
* To be able to analyse mails and update the dashboard directly without having to manually input application details.
* To automate the job application procedure.
<!-- CONTRIBUTING -->
# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b CareerTrack`)
3. Commit your Changes (`git commit -m 'Added some features'`)
4. Push to the Branch (`git push origin CareerTrack`)
5. Open a Pull Request

<!-- LICENSE -->
# License

Distributed under the MIT License. 

<!-- CONTACT -->
# Project Link: 
[https://github.com/shreyas0512/CareerTrack](https://github.com/shreyas0512/CareerTrack)


<!-- ACKNOWLEDGMENTS -->
# Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

