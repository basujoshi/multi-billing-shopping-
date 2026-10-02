# BD Website Maker — Complete Firebase Version

## 1. Firebase Console

Project: `website-a091e`

Enable:
- Authentication → Email/Password
- Realtime Database
- Storage
- Hosting

### Realtime Database URL
The supplied Firebase project is `website-a091e`. The project URL you provided corresponds to the default Realtime Database, so the config in this ZIP is set to:

`https://website-a091e-default-rtdb.firebaseio.com`

If Firebase Console shows a different exact database URL for your database, use the URL shown there instead.

## 2. First admin

Create your own normal account first.

Firebase Console → Authentication → Users → copy that user's UID.

Open `js/admin.js` and replace:
`PASTE_ADMIN_UID_HERE`

with your UID.

IMPORTANT: For a real production system, use Firebase Admin SDK/custom claims for admin authorization. The client allowlist here is a starter control, not a complete server-side admin security model.

## 3. Firebase rules

The included `database.rules.json` protects each user's record. A user can edit only their own record. Public usernames are readable. Storage allows each signed-in user to upload files only inside their own folder.

## 4. Firebase CLI

Install Firebase CLI on PC:
`npm install -g firebase-tools`

Login:
`firebase login`

Inside this folder:
`firebase use website-a091e`

If the project is not initialized:
`firebase use --add`
and choose `website-a091e`.

Deploy:
`firebase deploy`

Hosting will give a URL such as:
`https://website-a091e.web.app`

Public profile:
`https://website-a091e.web.app/u/aakash`

## 5. How the user builds

Signup → Builder → fill details → upload photo → choose design → live preview → Publish.

The profile data is stored under:
`users/{uid}`

The username mapping is:
`usernames/{username}`

## 6. Important production upgrades

Before a large public launch, add:
- Firebase Auth custom claims / Cloud Functions for true server-side admin roles
- email verification and password reset
- username rename cleanup
- rate limiting / abuse controls
- privacy controls
- image moderation/size optimization
- analytics
- custom domains
- more templates
