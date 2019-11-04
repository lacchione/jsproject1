# jsproject1 READ ME
# Luca Acchione
# Project 1 
# WEB 501 - JavaScript 4

This is the start of my project1 on October, 30th 2019. I started by creating all of my repos on github. 

I created my master and dev repos. With this, I imported my already completed Assignment 6 to use as a solid foundation for this project. This site included basic styling as well
as 2 pages, a home page as well as a keyboard product page. 

From here, I corrected the .gitignore to ignore all files inside my prod/ folder so that it would exclude these files from any pushes to git that I made, as well as excluded my node_modules folder. 

My first step is to access the changes I want to make to my website in terms of CSS for this is going to be my first feature addition, a revamped CSS cross site. 

# Introduction of Feature 1: SCSS changes site wide

With this feature I edited the styles.scss file in my ui/ folder under my feature1 branch. This feature changed all of the styles to better suite my likely, as well as added color and different fonts to the different sections of my site. 

Overall, it was a very simple change but made my site feel more presentable then the base styling I had on it prior. 

Once my scss was changed and good, I ran gulp to check that all my styles where perfect on my local machine and then commited them in the feature1 branch. After that I pushed them to git, and then merged them into my dev branch. With this, I moved onto feature2. 


# Introduction of Feature 2: SCSS Mobile Responsiveness & TypeScript Accessibility Features

Feature two housed alittle more content than that of feature one in that I made style changes again, but then added typescript as well as changed my layout and my main gulpfile. 

Firstly, I had to create my feature2 branch underneath my main dev branch, after doing so I opened my feature2 branch and started to develop this feature. 

The first thing that I did was create a new scss file called mobile.scss, this file would be the home for all my new mobile repsonsive scss that I would be adding to my site. 

After all my mobile responsiveness was completed I checked to make sure it was done, and then moved onto adding the typescript to my project. 

With adding the typescript I had to add more code to my gulpfile to ensure that I was firstly, concatinating my main.ts with the jquery.js into one main.js file, as well as running it through terser and then finally placing it into my prod/ directory this was all done under a new function called js. Once that was done I added it to my watch_task and then finally added it to my gulp default function so that it could be run alongside all my other methods. 

Once this was done, I added in two buttons on my layout.html file one in order to change site contrast, and the other to change site font. Once added to my layout they showed up on both of my pages, which now meant it was time to write the typescript in order to make them work. 

After I completed that, I doubled checked that the mobile resposniveness worked, alongside the typescript that I had added to my site. Once confirming that both of the new changes in this feature worked I commited them to the feature2 branch and then pushed them to github. 

Lastly, I then merged the feature2 branch into my main dev branch and prepared to move onto the last part of creating a third page for my site. 

# Creating of third page - Contact Page 

This section of the project was the last part. After making sure that my current dev branch site was working the way it was intended too after merging in features 1 & 2 it was time to create a brand new webpage for my site. I first made a brand new branch off of my dev branch and called it contactpage. This branch was going to be the home for my contact page, that would display my information so that anybody can reach out to me. 

First thing that I did was create a new markdown page in my pages/ directory in my source folder. After putting in all the content that I wanted in this page, I then added a new < li > feild into my layout.html page so that my navigation across all webpages had access to the new page I was creating. 

Once this was done I again checked to make sure that all the content was there, and styled correctly, and then tested my above two features on the new page I just added to my site. 

Lastly, I commited all the work to my contactpage branch, and then pushed it to github. Finally merging this last branch back up to my dev branch. 

With this, my entire project was done underneath my dev branch, which meant that I was finally able to do the final merge from dev to master, with master now hosting my entire completed project site. 

Thanks,
Luca. 


Picture References: 

https://www.pinpng.com/
- clipart of the keyboards on my keyboard page
- with respect to there rightful owners of Razor and Corsair