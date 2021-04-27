# simple_app
Simple Node.js App to demo session management using passport and fb authentication

Purpose:  Create a simple app to prove out session management using facebook login strategy.

Code: Landing page for the app checks for the session. Displays use name in case user is logged in.
Otherwise, gives an option to login using facebook credentials.

Steps:
To be able to use this code, need to create an app at https://developers.facebook.com/
and setup .env file for the project:
FB_CLIENT_ID=$YOURAPPID$
FB_CLIENT_SECRET="YOURAPPSECRET"
FB_CALLBACK_URL=http://localhost:3000/auth/facebook/callback

Callback URL will work for the testing purpose.

Challenges:
Had multiple issues while creating this simple app and learnt a lot
- Couldn not get it working on repl due to the callback URL
- Facebook was compialing about not using the secure connection.

References:
- http://www.passportjs.org/packages/passport-facebook/
- https://www.twilio.com/blog/facebook-oauth-login-node-js-app-passport-js
- Module on session management