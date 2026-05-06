# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Aidan Rikic

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, the feature that would send a message involves multiple components like the UI, backend, database, and network, so it would be better suited with an integration or end-to-end test.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, validating whether an message input is too long for the max message length is an isolated pure logic check which is perfect for a unit test.

