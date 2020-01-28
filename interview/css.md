# CSS
[[toc]]

## Grid
### #1
Consider a site design that simply has a login form in the center of the page. Using CSS, what is the best way to ensure the box is horizontally and vertically centered?
### Answer
There are technically various ways to achieve this. However, nowadays, there is one “correct” way to do this: using display: flex and margin: auto.

Other methods include position: absolute;, top: 50%, and margin-top: -Xpx, but these are no longer considered good practices since the introduction of display: flex.
