---
pageTemplate: how-to-use
blockName: content
order: 1
---

# How To Use

Installing **Wish To Go** in your blog is really easy. We provide you with 2 widgets in the form of an _HTML_ tag; the [WishWidget](#the-wishwidget-tag) and the [TravelPlanWidget](#the-travelplanwidget-tag). The first is the heart button to indicate which destinations are _wished_ by your readers. The second is to implement the **Trip Planner** in your blog. In order the widgets to work, you should load the JavaScript code in your page.

- [Loading the JavaScript Code](#loading-the-javascript)

- [WishWidget Tag Reference](#the-wishwidget-tag)

	Attributes: [`country`](#country), [`city`](#city), [`activity`](#activity), [`post`](#post), [`picture`](#picture), [`label`](#label)

- [TravelPlanWidget Tag Reference](#the-travelplanwidget-tag)

## Loading the JavaScript Code

The JavaScript code is loaded by inserting this 

```html
	<script src="https://wish-to-go.com/wish-to-go.main.js"></script>
```

tag at the bottom of your **HTML** document but still inside the `<body>` tag.

A very minimalistic webpage loading a **WishWidget** and the needed scripts will be:

```html{numberLines: false}{3,11}
<html>
<body>
	<h1>My Entry Title</h1>
	<p>
		This is the entry body with a Wish To Go Heart.
		<WishWidget country="TH"></WishWidget>
	</p>
	<script src="https://wish-to-go.com/wish-to-go.main.js"></script>
</body>
</html>
```

The highlighted line is the one loading the JavaScript code.

### Troubleshooting 

In some cases, the initialization of the script can fail because it is called before the actual page is rendered. This will likely happen when server rendering is used.

The **Whish to go** JavaScript code exposes a global function in the window namespace called `wtgInit`. If the **WishWidget** and **TripPlannerWidget** are not rendered properly, you can call the `wtgInit` function somewhere in your webpage where you know the document has been rendered.

## The WishWidget Tag

The **WishWidget** is used to show the **wish heart** tag <WishWidget country="TV"></WishWidget>in any part of a blog post. You only have to insert the following _html_ code snippet where you want the heart to appear.

```html
<WishWidget country="Spain"></WishWidget>
```

_This configuration will identify a blog entry talking about Spain_.

The **WishWidget** snippet can be placed in any part of your _html_ page.

The following code shows just a few of the multiple places where you can insert the **WishWidget**. Only your creativity and imagination can put the limits.

```html
<h1>My Post about Thailand <WishWidget country="TH"></WishWidget></h1>

<p>The capital of the country is
	<strong>
		Bangkok
		<WishWidget
			country="TH"
			city="Bangkok">
		</WishWidget>
	</strong>
	which has a vibrant nightlife
</p>

<h2>Things to do</h2>

<ul>

	<li>
		Grand Palace
		<WishWidget
			country="TH"
			city="Bangkok"
			activity="Grand Palace">
		</WishWidget>
	</li>

	<li>
		Wat Pho
		<WishWidget
			country="TH"
			city="Bangkok"
			activity="Wat Pho">
		</WishWidget>
	</li>

	<li>
		Chatuchak
		<WishWidget
			country="TH"
			city="Bangkok"
			activity="Chatuchak">
		</WishWidget>
	</li>

</ul>
```

The code above will produce:

> <h1>My Post about Thailand <WishWidget country="TH"></WishWidget></h1>
> <p>The capital of the country is
> 	<strong>
> 		Bangkok
> 		<WishWidget
> 			country="TH"
> 			city="Bangkok">
> 		</WishWidget>
> 	</strong>
> 	which has a vibrant nightlife
> </p>
> <h2>Things to do</h2>
> <ul>
> 	<li>
> 		Grand Palace
> 		<WishWidget
> 			country="TH"
> 			city="Bangkok"
> 			activity="Grand Palace">
> 		</WishWidget>
> 	</li>
> 	<li>
> 		Wat Pho
> 		<WishWidget
> 			country="TH"
> 			city="Bangkok"
> 			activity="Wat Pho">
> 		</WishWidget>
> 	</li>
> 	<li>
> 		Chatuchak
> 		<WishWidget
> 			country="TH"
> 			city="Bangkok"
> 			activity="Chatuchak">
> 		</WishWidget>
> 	</li>
> </ul>

### WishWidget attributes

In other to define the behaviour of the widget and the information to transfer to the **Trip Planner**, the **WishWidget** tag defines several attributes that you can use. All, except `country` attribute are optional.

- [`country`](#country)
- [`city`](#city)
- [`activity`](#activity)
- [`post`](#post)
- [`picture`](#picture)
- [`label`](#label)

#### `country`

Country ISO code (recommended) or country name.

This is the only mandatory attribute. You should use the `country` attribute alone to set a ***Country WishWidget***[^country_wishwidget] which indicates that the _wish_ refers to a country as a whole.

The `country` attribute, when used with `city` or `activity` attributes, clearly identifies in which country is a city or an activity is carried out.

```html
<WishWidget country="TH"></WishWidget>
```
_The example above will show in your post a **Wish to go** heart and the context semantics is referring to Spain as a whole country_.

#### `city`

City name

`city` attribute should be used along with `country` attribute. It is used to specify that the _wish heart_ refers to a city. A city is where the traveller will sleep. If you think the visit to a city or village can be done from another city in a one-day tour, it is better to specify it as an activity done from the sleeping city.

You should use a widely known name of the city in order to keep consistency along blog posts. For example, Bangkok is known to locals as _Krungtep_ or _Krungtep Maha Nakhon_ or even _KMN_ but the most known around the world, even to the locals, is Bangkok. Although you are not obliged to use Bangkok, we recommend to use standardized English names as this name will be passed to flight, accommodation and tour search engines.

This city name has to be consistent in all your blog site. If you use different city names in the attribute, it will appear as different cities in the **Trip Planner** giving a bad user experience to your readers. You can, of course, use any name in your post text or even use the different names a city is know. You only have to be consistent in the **WishWidget** attribute.

```html
<p>
	We are talking about Bangkok or, as known to locals, <em>Krungtep</em>
	<WishWidget
		country="TH"
		city="Bangkok">
	</WishWidget>
	.
</P>
```

The above code produces:

> <p>
> 	We are talking about Bangkok or, as known to locals, <em>Krungtep</em>
> 	<WishWidget
> 		country="TH"
> 		city="Bangkok">
> 	</WishWidget>
>		.
> </P>


_The above snippet is telling to the system that the **Wish to go** heart is in the semantics context of the city of Bangkok in Thailand_

#### `activity`

Activity name

An activity can be something the traveller can do in destination. This includes monuments, spots, tours, courses or any other experience that can be done in a city or from a city.

An activity can be a city name if you recommend not to overnight there because it is better to visit in a day tour from another city. For example, there are many tours visiting the city of _Amphawa_ (2 hours drive from Bangkok) and most of times the traveller will not overnight there but going back to Bangkok. You can use one **WishWidget** for the city, giving the opportunity to book accommodation from the **Trip Planner** and other **WishWidget** as an activity, allowing the traveller to book a tour.

Inserting this code:

```html
<p>
	In the city of Amphawa

	<WishWidget
		country="TH"
		city="Amphawa">
	</WishWidget>

	you can find the popular Amphawa Floating Market

	<WishWidget
		country="TH"
		city="Bangkok"
		activity="Amphawa">
	</WishWidget>

	.	Be sure you don't miss the boat ride along the Mae Klong river tour

	<WishWidget
		country="TH"
		city="Bangkok"
		activity="Mae Klong River Tour">
	</WishWidget>

	at night time to see the fireflies flying along the riverside.

</p>
```

will produce

> <p>
> 	In the city of Amphawa
> 	<WishWidget
> 		country="TH"
> 		city="Amphawa">
> 	</WishWidget>
> 	you can find the popular Amphawa Floating Market
> 	<WishWidget
> 		country="TH"
> 		city="Bangkok"
> 		activity="Amphawa">
> 	</WishWidget>
> 	.
> 	Be sure you don't miss the boat ride along the Mae Klong river tour
> 	<WishWidget
> 		country="TH"
> 		city="Bangkok"
> 		activity="Mae Klong River Tour">
> 	</WishWidget>
> 	at night time to see the fireflies flying along the riverside.
> </p>

#### `post`

Post URL

You can specify a web page address pointing to the post where you talk about the information contained in the **WishWidget**. Normally the post should point to the page where the **WishWidget** is inserted and it is inferred automatically and you don't have to code manually.

The post URL can be shown in the **Trip Planner** as a reference for the reader.

On some occasions you may want to point to a different post in your blog, i.e. when blogging about a city and you insert a country **WishWidget** and you have a specific post about the country. In that case you can get advantage of specify the country post address by using this attribute.

The following code in a post about Bangkok,

```html
<h1>
	Bangkok

	<WishWidget
		country="TH"
		city="Bangkok"
	</WishWidget>

	<!-- In this case you don't need to specify the post attribute
			as the post URL	is this page address -->

</h1>

<p>
	Bangkok is the capital city of Thailand

	<WishWidget
		country="TH"
		post="/my-posts/countries/thailand">
	</WishWidget>
	.
</p>
```

will show

> <h1>
> 	Bangkok
> 	<WishWidget
> 		country="TH"
> 		city="Bangkok"
> 	</WishWidget>
> </h1>
>
> <p>
> 	Bangkok is the capital city of Thailand
> 	<WishWidget
> 		country="TH"
> 		post="/posts/countries/thailand">
> 	</WishWidget>
> 	.
> </p>


#### `picture`

Picture URL

Featured image URL. This picture, if set, will be used in the **Trip Planner** to illustrate the related destination. You can use for a country, a city or an activity **WishWidget**. When used in a ***Country WishWidget***[^country_wishwidget], the picture will be used to decorate the related country entry in the **Trip Planner**. If used in a ***City WishWidget***[^city_wishwidget], the picture will illustrate the corresponding city entry and when used with an ***Activity WishWidget***[^activity_wishwidget], the picture will adorn the associated entry in the **Trip Planner**

#### `label`

Shows a button with a text in `label` attribute

When `label` is set to an arbitrary text string, the **WishWidget** takes the form of a button and shows the text in the `label` attribute. If `label` is set to `true`, the text shown in the button is the standard _Wish to go_ string. When set to `false` (default) or not set it doesn't show any text nor have the shape of a button.

Writing the following html code:

```html
<p>
	The following widget will not show any text
	<WishWidget
		country="TH">
	</WishWidget>
</p>
<p>
	Here it shows the standard text
	<WishWidget
		country="TH"
		label="true">
	</WishWidget>
</p>
<p>
	And this will show Add to Wishlist
	<WishWidget
		country="TH"
		label="Add to Wishlist">
	</WishWidget>
</p>
```

will show

> <p>
> 	The following widget will not show any text
> 	<WishWidget
> 		country="TH">
> 	</WishWidget>
> </p>
> <p>
> 	Here it shows the standard text
> 	<WishWidget
> 		country="TH"
> 		label="true">
> 	</WishWidget>
> </p>
> <p>
> 	And this will show Add to Wishlist
> 	<WishWidget
> 		country="TH"
> 		label="Add to Wishlist">
> 	</WishWidget>
> </p>


[^country_wishwidget]: A ***Country WishWidget*** is a **WishWidget** with the `country` attribute set but `city` and `activity` attributes not set. It is used to denote that the **WishWidget** is set to describe a country as a whole.

[^city_wishwidget]: A ***City WishWidget*** is a **WishWidget** with the `country` and `activity` attributes set but the `activity` attribute not set. It is used to denote that the **WishWidget** is set to describe a city.

[^activity_wishwidget]: An ***Activity WishWidget*** is a **WishWidget** with the `country`, `city` and `activity` attributes set. It is used to denote that the **WishWidget** is set to describe an activity for the related city.
