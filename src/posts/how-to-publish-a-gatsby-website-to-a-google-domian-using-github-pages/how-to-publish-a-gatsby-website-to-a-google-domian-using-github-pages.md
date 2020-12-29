---
title: "How to publish a Gatsby website to a Google Domain using GitHub Pages"
date: "2020-12-28"
image: "./image.jpg"
topics: ["How To", "Coding", "Web Development"]
---

## Step 1: Link Google Domain to GitHub

Go to Google Domain and link kwatme.com and www.kwatme.com.

![1](1.png)

Wait a few minutes and check if the linking works.

Check kwatme.com.

![2](2.png)

Check www.kwatme.com.

![3](3.png)

## Step 2: Set up GitHub Page

![4](4.png)

Enter kwatme.com, press Save, and refresh.

![5](5.png)

![6](6.png)

This adding of the custom domain creates docs/CNAME.

![7](7.png)

Confirm CNAME to have only 1 line, the GitHub Page custom domain.

![8](8.png)

## Step 3 Build Gatsby website

By default, gatsby builds into public/. But GitHub Pages needs docs/ and customizing domain needs docs/CNAME.

So make a custom NPM build command that: 1) removes docs/ (if it exists); 2) builds public/; 3) copies public/ to docs/; and 4) makes docs/CNAME.

![9](9.png)

Run this custom command.

![10](10.png)

Confirm new public/, docs/, and docs/CNAME.

![11](11.png)

Git add, commit, and push.

Wait a few mintes. The website should go live at http://kwatme.com.

## Step 4: Set up HTTPS

Wait a few more minutes. GitHub Pages Enforce HTTPS setting should become available.
Check it, refresh, and confirm publishing at httpS://kwatme.com.

![12](12.png)

## Step 5: Grow the website

The workflow for updating the website is simple: 1) edit it; 2) build it with the custom comman; and 3) push it to GitHub.

Cheers.
