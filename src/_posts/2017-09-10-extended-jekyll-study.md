---
layout:     post
title:      "Jekyll - additional study"
subtitle:   "advanced features and extension"
date:       2017-09-10
author:     "Daohui Li"
header-img: "img/study.jpg"
uses: google-charts math 
---

<h1 style="text-decoration:underline;">Table of Content</h1>
* TOC
{: toc}
<hr/>

The basic setup of a jekyll project can be seen in [my first post]({{ site.baseurl }}{% post_url 2017-09-07-hello-world %}). 

# Re-arrange file structure

*Motivation*: 
1. Cleanup the top-level directory to make its not cluttered, 
2. in preparation of integrating with other technologies

*Steps*:
1. create _src_ directory and move all the source code, except _config.yml_, _.gitignore_, _Gemfile_, _package.json_, to _src_
2. add the following entry in _config.yml_:
~~~ text
  source: src
~~~

# Jekyll Studies

Jekyll employs following technologies to generate static html pages:
 - [Front Matter](https://jekyllrb.com/docs/frontmatter/): it uses _\_config.yml_ (and other _yaml_ files in _\_data_ directory) and block between *triple-dashed-lines*, `---`, to defines variables and to specify the file structure (e.g., _layout_).
 - [Liquid](https://shopify.github.io/liquid/) is employed to process templates:
   i. include segment of html files (mainly from _\_include_ directory, but can use _include-relative_ to include files from other location)
   ii. fill in variables, via '{{' and '}}'
   iii. provides conditional logic, _if, elseif, else, and endif_, and _case, when, else, endcase_.
   iv. provides loop logic, _for and endfor_.
   v. filters, such as _append, prepend, replace_ etc.
- [kramdown](https://kramdown.gettalong.org/syntax.html) is used to process markdown files (as seen in the markdown attribute in _config.yml).

# How-to

* *Adding links to other posts*:
{% raw %}
~~~ text
{{ site.baseurl }}{% post_url 2010-07-21-name-of-post %}
~~~
{% endraw %}

* *Enable math block in kramdown*

*kramdown* uses '$$' to mark the math boundary. For example: 
<pre>$$ a^2 + b^2 = c^2 $$</pre> leads to $$ a^2 + b^2 = c^2 $$.

*Note*, one must add the following in the post to make the math block visible:
~~~ html
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
~~~


# Add [Google Charts](https://developers.google.com/chart/)

1. Include google API and our own javascript, _draw\_charts.js_, in a html file.
2. _draw\_charts.js_ is used to manipulate a DOM element, based on _id_ in our case, and draws a pie chart
3. defines the DOM element in a html file, for example, down below:

<div id="google-charts--pie"></div>
