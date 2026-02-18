
## Connect Formspree to Contact Form

**What's changing:** The contact form in `ContactSection.tsx` will be wired up to Formspree using your Form ID `xgolzngr`. When someone submits the form, the data will be sent to `https://formspree.io/f/xgolzngr` and Formspree will forward the message directly to your email (`kshawpnil@gmail.com`).

---

### Technical Details

**File to edit:** `src/components/ContactSection.tsx`

**Changes:**
1. Add a `isSubmitting` state to disable the button while the form is being sent, preventing duplicate submissions.
2. Update `handleSubmit` to make a real `fetch` POST request to `https://formspree.io/f/xgolzngr` with the form data as JSON.
3. Handle the response:
   - On success: show "Message sent successfully!" toast and clear the form.
   - On failure: show an error toast so the sender knows something went wrong.
4. Show a loading state on the "Send Message" button while the request is in flight.

No new packages are needed — this uses the browser's built-in `fetch` API.

---

### What happens after someone submits?
- Formspree receives the form data.
- Formspree sends you an email at `kshawpnil@gmail.com` with the sender's name, email, subject, and message.
- The sender sees a "Message sent successfully!" confirmation on the website.
