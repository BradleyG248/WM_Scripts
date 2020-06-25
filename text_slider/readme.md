The text slide will populate inside of whatever tag it is placed in, however it was designed to populate inside text specific tags, such as <h2>, for example.
Add a class of rotate-site to the tag the slider will be in.
Place a span tag where text should slide, and give it a class of rotate-parent.
After creating the span tag, place additional span tags for each line of text to slide, populating these tags with the text needed. No classes are necessary for these.
To use the script, place the JS file in the server, where you see fit.
On the Default.aspx file, place the <script src="/filepath"></script> tag inside the <body> tag, at the last line just before the </body> closing tag.