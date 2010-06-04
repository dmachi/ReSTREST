This is a small wiki test using http://github.com/kriszyp/pintura for handling REST requests and ReST documents on the file system for source documents.

Quick Start:

        - Download the latest nightly build of persevereJSGI from http://www.persvr.org/nightly/
        - Checkout a copy of this project.
        - expand the nightly build of persevere
	- in nightly/narwhal/packages git clone git@github.com:dmachi/markdown-js.git  to get a copy of my branch of hte markdown-js parser
	- from the nightly/narwhal directory, run './bin/sea'
        - from the ReSTREST directory, run './bin/sea' 
        - run 'jackup' to start the webserver, which will be running on port 8080 by default

You should now be able to access files the ReST files (the dojotoolkit rst docs are in there at the moment) by hitting a url like /Doc/djConfig .  The file will be read from ReSTREST/data/Doc/djConfig.rst .


