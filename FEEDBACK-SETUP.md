# Feedback setup (Netlify Forms, free)

Your form is called `nexovia-feedback`. It saves: star rating (1-5), the quick choices, an optional comment, and the page. No names or emails are collected; emails/phone numbers typed in the comment are removed before sending. A hidden spam trap (honeypot) blocks bots.

## See the feedback
1. Log in at https://app.netlify.com and open your site (nexovea).
2. Left menu: **Forms** -> **nexovia-feedback** -> **Verified submissions**.
(Forms only works on the live Netlify site, not on `npm run dev`.)

## Get an email for each new feedback
Site configuration -> **Notifications** -> Form submission notifications -> **Add notification** -> Email notification -> pick `nexovia-feedback` -> your email -> Save.

## Check it works
After deploying, open https://nexovea.netlify.app/feedback, give 4 stars, press Submit, then look in Forms. It can take a minute to appear. The free plan has a monthly limit on submissions, so check the Netlify usage page.

## If you add a field
Add the same field name to `public/__forms.html` and to `FeedbackForm.tsx`.

## If feedback does not show up
- It only works on the LIVE site (https://nexovea.netlify.app), never on localhost. On localhost the form shows an error on purpose.
- The error under the form now shows a code. **404** = Netlify has not detected the form yet: in Netlify go to Site configuration -> Forms -> **Enable form detection**, then redeploy (Deploys -> Trigger deploy -> Clear cache and deploy site).
- Make sure `public/__forms.html` is in your project and deployed.
- Spam: entries can land under Forms -> **Spam submissions**; check there too.
