# Company Project: A Tictail Online Store

Last year, shopping became one of the most popular online activities worldwide. The retail e-commerce sales worldwide amounted 1.86 trillion US dollar and retail revenues are projected to grow to 4.48 trillion US dollars in 2021 (Source: [Statista](https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/)) Therefore we are going to focus on online stores for this sprint. This may be the first e-commerce site you build, but it most probably won't be the last!

Your project for this sprint is to build a custom retail store for one of Tictail's customers in React using Tictail's API to fetch live data. To help, you will also have two days at the Tictail office to get help from their developers along the way – so great! Next friday, you will demo your pages and code for their web team.

## How to complete this project

You will be assigned a store by Tictail that is your customer for the week. You task is to build a storefront for this store using their API.

**Your storefront should have the following views:**

_Listing page_

* Listing all products, from all categories, with relevant information.
* A menu with all categories.

Try to aim for something like this:

![Listing page wireframe](https://i.imgur.com/R6nHr0L.png)

_A category page_

* Landing page for a category.  
* Listing all products in that category with relevant information.  

Could look something like this:

![Category page wireframe](https://i.imgur.com/5KxW8Fq.png)

_Product page_

* Information about the product.

Bare minimum on the product page:

![Product page wireframe](https://i.imgur.com/mn8V0Zz.png)

### Tech Specifications

The project should be built in React. It should also be responsive and work well on mobile, tablet and desktop. Your code should conform to the Technigo eslint rules, too.

The code folder in this repository contains a copy of the Technigo React Starter project. You should use this as a base for your project.

### The Tictail API

Your company has an example store created in Tictail. You can access the administration interface for the store here: https://tictail.com/dashboard. Your login credentials are below. Also make a note of the store ID - you'll need to use this when using the API.

Username: tictail-group1@technigo.io
Password: buildshop
Store ID: 5znA

There you’ll be able to [view products](https://tictail.com/dashboard/products), create/update products and change navigation (categories), as well as [update general store information](https://tictail.com/dashboard/settings/general). The shops contain example products in three categories (art, watches and chairs) but feel free to change if you’d rather have other products or categories. In fact, feel free to change anything about these shops - they’re created only for this purpose, and they’re easy to recreate if anything breaks.

You will also be able to fetch all this information from different APIs at Tictail in order to build the storefront (what shoppers see):

Stores: https://tictail.com/developers/docs/resources/store<br>
Example: `GET https://api.tictail.com/v1.26/stores/{store_id}`

Products: https://tictail.com/developers/docs/resources/product<br>
Example: `GET https://api.tictail.com/v1.26/stores/{store_id}/products`

Categories: https://tictail.com/developers/docs/resources/category<br>
Example: `GET https://api.tictail.com/v1.26/stores/{store_id}/categories`

Replace {store_id} with the store ID for your shop (listed with credentials above). The documentation contains information on how to get all products in a certain category.

On the Wednesday the first week, Tictail will have a lecture on how to use their API and help set everything up and fill your old product page assignment with data from their API – a really good start!

## How to approach this as a team

As always, a good start is to sit down as a team and sketch out how the site will look, and what kind of components you will need. Try to come up with a plan which breaks down the project into small, manageable chunks, and divide responsibility between the group.

*We'll be introducing how to navigate between "Page" components in React on Friday, so keep this in the back of your head for now.*

A good next step is to try to work out some common CSS style rules for the whole page so that headlines, fonts, margins, breakpoints, buttons etc look the same on the whole website. You want your users to be familiar on all pages in your store. An easy approach is to design and build one page first which you then can use all the CSS from.

Then, divide and build the three main page types, listing page, category page and product page based on the data that is available from the API.

Make sure you get the connection to the API to work and that it works for everyone in your group. Then implement that pages are filled and created based on real data from the API.

# :boom: Success!

After completing this project, you should be more comfortable using React and fetching data through an external API – a super useful skill to have as a frontend developer. You will also grow your CSS and HTML skills together with understanding more about React state handling. You should also know a little more about good ways to break up React projects, and how to approach working as a team on more complex, dynamic projects.

# :runner: Stretch Goals

Done with the main task? Try to come up with some fun stretch goals within your company. Here's some ideas:

1. Display the sale price for products on sale, with the original price in strikethrough.
1. Instead of just showing one image for a product on the product page, show all images as a gallery.
1. Include variations on products like available sizes or colors.
1. Add a "buy" button to products which makes it possible to add them to a cart. When you're ready to approach this goal, speak to the Tictail guys and they'll give you some pointers for where to start.
