# MY-SCHEDULE-PROJECT

Objective
---------

To create a "Day Planner" that would give the user the ability to organize their day
from 9am - 6pm.  The Day Planner has the ability to designate the past / present / future
times of the day based on color coding e.g.  "gray" - denotes hours previous to the current hour , red - denotes the current hour and green denotes hours in the future.


software needed for the project
-------------------------------
(a)  HTML
(b)  JavaScript
(c)  JQUERY
(d)  CSS
(e)  Moment JS


Building Scheduler
------------------

While the skeleton of the project was provided for the developer , he /she would have
to complete the build using JQUERY to build the " Text areas / buttons " need for each
hour of the scheduler .  The developer would also have to make available the current date
on the scheduler as well .

HTML
----

"ID's"  were added to all text areas / buttons created so manipulation
of DOM elements within JavaScript would be made possible

jQUERY additions
----------------
a) Utilizing Moment JS to create date and "hour" variable
   to be used to determine when the text area would change color from 
   gray (previous hour) , red (current hour) and green (hours in the future).
b) ability to retrieve the entered data and format it for insertion into " local Sto
   age" with an associated key  

c) ability to retrieve data from local storage and display in the correct text area
   baed on associated Key   

CSS
----

 no additional software creation from developer needed

TESTING
-------

A) The ability to bring up the Scheduler with the correct date , outcome: successful 
b) bringing up the code before first available schedule time(9am) and notice text area   
   expected results: that all scheduled times would be shaded gray - outcome successful
c) Developer would be able to enter data in any textarea for any time and the
   application would receive / store / retrieve after "refresh of page.
   outcome: successful 
d) Developer would be able to erase scheduled event , save it, once page is refreshed
   that textarea for that hour would show no event scheduled .  outcome: successful
e) Developer would be able to enter multiple tasks at on time , save all tasks and
   be able to retrieve said tasks when refresh took place:   outcome:successful
f) Developer would witness the hourly color text areas to confirm that the
   correct color designation was being applied.  outcome: successful   

ISSUES
------

Developers limited knowledge of JQUERY proved to be an issue when completing this
project.  Reading / online investigation / fellow classmate input regarding questions / tutor proved essential in completion of this application.

Future Enhancements
-------------------

Although this is a simple scheduler ,  this project can be expanded to cover 24 
hour period where the application would become available on demand or present itself
by a "timed" event giving the user the ability to "snooze / dismiss " the event if 
it has now become irrelevant.