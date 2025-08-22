var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mathematics Department Fort Lewis College  Last Updated:       "
},
{
  "id": "sec-section-name-4",
  "level": "1",
  "url": "sec-section-name-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 121 Week 1 Activity",
  "body": " Math 121 Week 1 Activity   In this activity we will do the following:    Review the basic forms of linear, quadratic, and exponential functions.    Identify functions of each of the above types from their graphs.    Find formulas for functions in the families given above from points on their graphs.      This activity is intended to help you review some of the algebraic functions you saw in previous math courses. Please feel free to work together. If you get stuck, just ask and we'll get unstuck.      Fill in the blanks defining each of the following types of functions. If there are multiple forms you remember, try to write all of them down.     A linear function is one of the form .      A quadratic function is one of the form .      An exponential function is one of the form .          Match each graph shown below with one or more of the given formulas.                                                f(x)=3*x-2            f(x)=3*x+1            f(x)=-3*x^2+6*x+3              f(x)=-3*x^2 - 6*x + 3            f(x)=3*5^(x\/2)            f(x)=3*5^(-x\/2)                 Find a formula for a function whose graph passes through the points and under each of the following assumtions:     Assume is a linear function.      Assume is an exponential function.         Find formulas for quadratic functions satisfying each description below.     The -intercept is at and there are two -intercepts at and .      The vertex is at and the graph passes through the point .      "
},
{
  "id": "sec-section-name-4-2",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": " In this activity we will do the following:    Review the basic forms of linear, quadratic, and exponential functions.    Identify functions of each of the above types from their graphs.    Find formulas for functions in the families given above from points on their graphs.    "
},
{
  "id": "sec-section-name-4-4-1",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-4-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Fill in the blanks defining each of the following types of functions. If there are multiple forms you remember, try to write all of them down.     A linear function is one of the form .      A quadratic function is one of the form .      An exponential function is one of the form .    "
},
{
  "id": "sec-section-name-4-5-1",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-5-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "   Match each graph shown below with one or more of the given formulas.                                                f(x)=3*x-2            f(x)=3*x+1            f(x)=-3*x^2+6*x+3              f(x)=-3*x^2 - 6*x + 3            f(x)=3*5^(x\/2)            f(x)=3*5^(-x\/2)            "
},
{
  "id": "sec-section-name-4-6-1",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-6-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find a formula for a function whose graph passes through the points and under each of the following assumtions:     Assume is a linear function.      Assume is an exponential function.    "
},
{
  "id": "sec-section-name-4-7-1",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-7-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Find formulas for quadratic functions satisfying each description below.     The -intercept is at and there are two -intercepts at and .      The vertex is at and the graph passes through the point .    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
