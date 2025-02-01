import json

email_text = """
Fundamental Algorithms: Design and Analysis - Week 2 content is live now!!
Inbox

onlinecourses@nptel.iitm.ac.in
Sun, Jan 26, 4:53 PM (2 days ago)
to noc25-cs33-announce

Dear Students


The lecture videos for Week 2 have been uploaded for the course Fundamental Algorithms: Design and Analysis. The lectures can be accessed using the following link: https://onlinecourses.nptel.ac.in/noc25_cs33/unit?unit=26&lesson=27


The other lectures of this week are accessible from the navigation bar to the left. Please remember to login into the website to view contents (if you aren't logged in already).


Assignment 2 for Week 2 is also released and can be accessed from the following link: https://onlinecourses.nptel.ac.in/noc25_cs33/unit?unit=26&assessment=72

The assignment has to be submitted on or before Wednesday, 2025-02-05, 23:59 IST.


As we have done so far, please use the discussion forums if you have any questions on this module.


Note : Please check the due date of the assignments in the announcement and assignment page if you see any mismatch write to us immediately.

Thanks and Regards,

--NPTEL Team"""

sanitized_text = json.dumps({"email_text": email_text})
print(sanitized_text)
