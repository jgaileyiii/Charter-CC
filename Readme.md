Comments: 

This was a challenging test for me as I have not written a purely server-side script to deal with data transformations such as these. I only made my way through the first two problems before I decided that I should spend some time writing testing rather than none at all.

For the functions left out:
1. Sequence Number: I would have written a map function that returns season and episode number data
2. Title Without: I would have tried to use a regex expression to identify titles and remove the unnecessary data.
3. For the epoch time I would have implemented some function converting the timestamp with Date.now()
4. For the first sentence I again would have probably used a regex to find the first period and return the sentence block preceding it.

For testing I would need to do more research on how to spy test functions. While I have experience testing routes and api requests, I have not tested other types of functionality with node. In the brief time I had to research the best testing options I found chai-spies and sinon which both seem to potentially serve this purpose. I would have preferred to use Cypress to write these tests as it is what I'm most familiar with, but I have only used mocha, chai, and supertest in server side testing. 