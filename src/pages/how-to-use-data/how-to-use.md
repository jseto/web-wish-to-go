---
pageTemplate: how-to-use
blockName: content
order: 1
---

# How To Use

Installing **Wish To Go** in your blog is really easy. We provide you with 2 widgets; the WhishWidget and the TravelPlanWidget. The first is the heart button to indicate which destinations are _wished_ by your readers. The second is to implement the **Trip Planner** in your blog.

## The WhishWidget

As mentioned above, the **WhishWidget** is used to show the wish heart (❤️) in any part of a blog post. To do that, you have to include the following _html_ code where you want the heart to appear

```html
<WhishWidget
	country="Spain"
>
</WhishWidget>
```

interest

```html
<!DOCTYPE html>
<html lang="en">
<head>

<script>
	// Just a lil’ script to show off that inline JS gets highlighted
	window.console && console.log('foo');
</script>
<meta charset="utf-8" />
<link rel="icon" href="favicon.png" />
<title>Prism</title>
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="themes/prism.css" data-noprefix />
<script src="scripts/prefixfree.min.js"></script>

<script>var _gaq = [['_setAccount', 'UA-33746269-1'], ['_trackPageview']];</script>
<script src="https://www.google-analytics.com/ga.js" async></script>
</head>
```


_This configuration will identify a blog entry talking about Spain_

There are 3 parameters that help to identify what category the wish will be on. Those 3 parameters are:

- `country`

	Country ISO code (recommended) or country name.

	This is the only mandatory parameter. You can use the `country` parameter alone to indicate that at the heather of a blog entry about a country or any other part of the blog where you refer to a country as a whole.

	The `country` parameter should be used along with the next 2 parameters to clearly identify in which country is a city or an activity

	```html
	<WhishWidget
		country="TH"
	>
	</WhishWidget>
	```
	_The example above will show in your post a **Wish to go** heart and the context semantics is referring to Spain as a whole country_

- `city`

	City name

	`city` parameter should be used along with `country` parameter

- `activity`
