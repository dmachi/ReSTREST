.. _todo:

Docu Wiki ToDo
==============

.. contents::
   :depth: 2

Starting with V1.3 each new feature needs a proper documentation at docs.dojocampus.org - otherwise it will not be included in DojoToolkit. But besides that, there is still a lot of old stuff without proper documentation. 

The following pages need more love:


=====================
Top priority: dojo.js
=====================

* :ref:`dojo.Animation <dojo/Animation>` ``peller, slightlyoff, dante``

  needed: full page

* :ref:`dojo.anim <dojo/anim>`

  needed: full page

* :ref:`dojo.eval <dojo/eval>`

  needed: review

* :ref:`dojo.provide <dojo/provide>`

  needed: review necessary

* :ref:`dojo.moduleUrl <dojo/moduleUrl>`

  needed: review necessary


=====================
Priority 2: Dojo Core
=====================

* :ref:`dojo.AdapterRegistry <dojo/AdapterRegistry>`

  needed: full page

* :ref:`dojo.colors <dojo/colors>`

  needed: full page

* :ref:`dojo.cookie <dojo/cookie>`

  needed: review

* :ref:`dojo.currency <dojo/currency>`

  needed: setting locale in Dojo, binary floating point issues

* :ref:`dojo.rpc.JsonpService <dojo/rpc/JsonpService>`

  needed: full page

* :ref:`dojo.rpc.JsonService <dojo/rpc/JsonService>`

  needed: full page

* :ref:`dojo.rpc.RpcService <dojo/rpc/RpcService>`

  needed: full page


=================
Priority 3: Dijit
=================

* :ref:`dijit._HasDropDown <dijit/_HasDropDown>`

  needed: full page

* :ref:`dijit.form._FormSelectWidget <dijit/form/_FormSelectWidget>`

  needed: full page

* :ref:`dijit.layout.LinkPane <dijit/layout/LinkPane>`

  needed: full page


=================
Priority 4: DojoX
=================

* :ref:`dojox.analytics <dojox/analytics>` ``dmachi, phiggins``

  needed: examples or subpages?

* :ref:`dojox.atom.widget.FeedViewer <dojox/atom/widget/FeedViewer>`

  needed: Document the widgets. The IO layer is already documented.

* :ref:`dojox.atom.widget.FeedEntryViewer <dojox/atom/widget/FeedEntryViewer>`

  needed: Document the widgets. The IO layer is already documented.

* :ref:`dojox.atom.widget.FeedEntryEditor <dojox/atom/widget/FeedEntryEditor>`

  needed: Document the widgets. The IO layer is already documented.

* :ref:`dojox.av.FLAudio <dojox/av/FLAudio>`

  needed: errors in the example, no audio directory within tests available on the server

* :ref:`dojox.charting <dojox/charting>` ``ttrenka``

  needed: explanation about periodic updating, split apart into multiple pages for each major concept, add inline chart demos, add chart and legend widget properties/events table, using dojo data sources with charts/chart widgets

* :ref:`dojox.collections <dojox/collections>`

  needed: full page

* :ref:`dojox.DataGrid <dojox/DataGrid>` ``bforbes, toonetown``

  needed: Introduction, Grid 1.2 Changes, Usage, Parameter "selection mode", Example "sorting data at the server", Example "Large datasets", Tips

* :ref:`dojox/data/QueryReadStore/example <dojox/data/QueryReadStore/example>`

  This example is unfinished, should we delete it?

* :ref:`dojox.form.DateTextBox <dojox/form/DateTextBox>`

  needed: full page

* :ref:`dojox.form.DropDownStack <dojox/form/DropDownStack>`

  needed: full page

* :ref:`dojox.form.MultiComboBox <dojox/form/MultiComboBox>`

  needed: full page

* :ref:`dojox.form.RangeSlider <dojox/form/RangeSlider>`

  needed: full page

* :ref:`dojox.form.TimeSpinner <dojox/form/TimeSpinner>`

  needed: full page

* :ref:`dojox.gfx <dojox/gfx>` 

  needed: split apart into multiple pages for each major concept, add inline gfx demos

* :ref:`dojox.html.metrics <dojox/html/metrics>`

  needed: full page

* :ref:`dojox.html.styles <dojox/html/styles>`

  needed: full page


* :ref:`dojox.image.Badge <dojox/image/Badge>`

  needed: full page

* :ref:`dojox.image.MagnifierLite <dojox/image/MagnifierLite>`

  needed: available parameters and their description

* :ref:`dojox.io.httpParse <dojox/io/httpParse>`

  needed: full page

* :ref:`dojox.io.OAuth <dojox/io/OAuth>`

  needed: usage, examples

* :ref:`dojox.io.scriptFrame <dojox/io/scriptFrame>`

  needed: full page

* :ref:`dojox.io.windowName <dojox/io/windowName>`

  needed: full page

* :ref:`dojox.io.xhrMultiPart <dojox/io/xhrMultiPart>`

  needed: full page

* :ref:`dojox.io.xhrPlugins <dojox/io/xhrPlugins>`

  needed: usage, examples

* :ref:`dojox.io.xhrWindowNamePlugin <dojox/io/xhrWindowNamePlugin>`

  needed: full page

* :ref:`dojox.layout.ContentPane <dojox/layout/ContentPane>`

  needed: full page

* :ref:`dojox.layout.DragPane <dojox/layout/DragPane>`

  needed: full page

* :ref:`dojox.layout.ExpandoPane <dojox/layout/ExpandoPane>`

  needed: full page

* :ref:`dojox.layout.GridContainer <dojox/layout/GridContainer>`

  needed: params, examples, adding/removing regions, columns

* :ref:`dojox.layout.RadioGroup <dojox/layout/RadioGroup>`

  needed: full page

* :ref:`dojox.layout.ScrollPane <dojox/layout/ScrollPane>`

  needed: full page

* :ref:`dojox.layout.ToggleSplitter <dojox/layout/ToggleSplitter>`

  needed: full page

* :ref:`dojox.widget.FisheyeList <dojox/widget/FisheyeList>` 

  needed: full page

* :ref:`dojox.widget.DataPresentation <dojox/widget/DataPresentation>`

  add changes from http://trac.dojotoolkit.org/changeset/20698 (allow the line stroke style to be customized)


==================================
Integration with Dojo
==================================

We're working on documentation for how to use Dojo with various servers and other environments.  To claim one of the following, just add your name in the () at the beginning of the line and talk with Dylan Schiemann if you have any questions:

* ( ) ItemFileReadStore of Dojo Committers: (firstname, lastname, city)  (needed for all other demos)
* ( ) Basic Dojo-based UI for displaying information about committers... tundra theme, DTL-based table view of committers, etc.
* ( ) Java: JSP
* ( ) Java: Servlet
* ( ) Java: Persevere
* ( ) Java: DWR
* ( ) Java: Spring
* ( ) Java: AppEngine
* ( ) Java: WebSphere
* ( ) Java: Jetty
* ( ) PHP: plain
* ( ) PHP: Zend Framework
* ( ) PHP: WordPress
* ( ) Python: plain
* (Tobias) Python: Django/Dojango
* ( ) Python: Orbited
* ( ) Python: Tornado
* ( ) Python: Django
* ( ) Python: TurboGears
* ( ) Python: AppEngine
* ( ) Perl: plain
* ( ) Ruby: Rails
* ( ) Erlang: ErlyWeb/ErlyComet
* ( ) Compuware Uniface
* ( ) ProjectZero
* ( ) WaveMaker
* ( ) iPhone
* ( ) Android
* ( ) Palm Pre
* ( ) Vodafone widgets
* ( ) Facebook apps
