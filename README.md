## jQuery.restful ##

A plugin to ease AJAX interaction with RESTful APIs.

### Methods ###
There are the following public jQuery methods:
##### HTTP Methods for REST conventions #####
    jQuery.restful.get
    jQuery.restful.post
    jQuery.restful.put
    jQuery.restful.delete //for CRUD conventions too

##### CRUD conventions #####
    jQuery.restful.create //alias jQuery.restful.post
    jQuery.restful.read   //alias jQuery.restful.get
    jQuery.restful.update //alias jQuery.restful.put

##### Shortcuts for CRUD conventions #####
    jQuery.create
    jQuery.read
    jQuery.update
    jQuery.delete

### Params ###
Each method accepts [*settings*](http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings) of [jQuery.ajax](http://api.jquery.com/jQuery.ajax/)

## Bug tracker ##
Found any bug? Notify [issue](https://github.com/wendtecnologia/jquery-restful/issues).
