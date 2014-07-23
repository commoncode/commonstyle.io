commonstyle.io
==============

@shaune add usage docs here.

Later we can make a readthedocs.org site or somethin.


On creating new themes...
In ~/commongroup there are several Meteor themes that we can reference an use. We can also create new themes if necessary too. 
To create a new theme;
1. Create your new theme file following the naming convention _theme--'filename'.scss and making sure to reference the site name within the file accurately too (you'll use this to refer to it within your Meteor app). Once you have created the new template file, you'll need to build the new style.min.css. These theme files is one way to use custom css in your meteor project
2. To build the new style.min.css we need to add the new template to style.css, and then build style.min.css. To do this, first run the command "$sass --watch style.scss:style.min.css --style compressed" This will enable a sass watch feature, where it monitors for changes in the style.css file.
3. Now that watch is running, go in and update style.css to include the new theme reference and save it. The watch monitor detects the save, and automatically rebuilds style.min.css
4. You can now refer to your new theming in your meteor project using the class = "theme--'theme-name'" referencing. Check that your styling is accurate, and once your happy look to push & deploy!
5. Not that the new theme has been built, and included in style.min.css push your changes to the git commonstyle.io and deploy the site changes so they are available in the production environment
