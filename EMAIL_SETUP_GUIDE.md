# Email Setup Guide for quarkcostarica.com

You have the domain `quarkcostarica.com` and want to set up `info@quarkcostarica.com`. Here are your best options:

## Option 1: Google Workspace (Recommended for Business) 💼

**Cost**: ~$6/user/month
**Best for**: Professional business email with excellent reliability

### Setup Steps:
1. Go to [workspace.google.com](https://workspace.google.com)
2. Click "Get Started"
3. Enter your business name: "Quark Costa Rica"
4. Enter number of employees (1 to start)
5. Enter your domain: `quarkcostarica.com`
6. Create your email: `info@quarkcostarica.com`
7. Google will provide DNS records to add to your domain

### DNS Records to Add:
You'll add these in your domain registrar (where you bought quarkcostarica.com):

**MX Records** (for receiving email):
```
Priority 1: ASPMX.L.GOOGLE.COM
Priority 5: ALT1.ASPMX.L.GOOGLE.COM
Priority 5: ALT2.ASPMX.L.GOOGLE.COM
Priority 10: ALT3.ASPMX.L.GOOGLE.COM
Priority 10: ALT4.ASPMX.L.GOOGLE.COM
```

**SPF Record** (TXT record to prevent spam):
```
v=spf1 include:_spf.google.com ~all
```

**DKIM Record**: Google will provide this after setup

### Benefits:
- ✅ Professional Gmail interface
- ✅ 30GB storage per user
- ✅ Google Drive, Calendar, Meet included
- ✅ 99.9% uptime guarantee
- ✅ Excellent spam filtering

---

## Option 2: Zoho Mail (Best Free Option) 🆓

**Cost**: FREE for up to 5 users (with ads), or $1/user/month (no ads)
**Best for**: Small businesses on a budget

### Setup Steps:
1. Go to [zoho.com/mail](https://www.zoho.com/mail/)
2. Sign up for free plan
3. Add your domain: `quarkcostarica.com`
4. Create mailbox: `info@quarkcostarica.com`
5. Add the DNS records Zoho provides

### DNS Records (similar to Google):
Zoho will provide specific MX and TXT records to add to your domain.

### Benefits:
- ✅ Completely FREE for basic plan
- ✅ 5GB storage per user
- ✅ Clean webmail interface
- ✅ Mobile apps available
- ✅ Good spam filtering

---

## Option 3: Microsoft 365 (Office Integration) 📧

**Cost**: ~$6/user/month
**Best for**: If you use Office apps (Word, Excel, etc.)

Similar setup to Google Workspace but integrates with Outlook and Office apps.

---

## Option 4: Domain Registrar Email

Many domain registrars (GoDaddy, Namecheap, etc.) offer email hosting:
- **Cost**: Usually $1-5/month per mailbox
- **Quality**: Varies by provider
- Check with whoever you registered `quarkcostarica.com` with

---

## My Recommendation for Quark Costa Rica:

### Start with **Zoho Mail FREE** plan:
1. **Free** for up to 5 users
2. Professional appearance
3. Easy to set up
4. Can upgrade later if needed

### Or if budget allows, **Google Workspace**:
1. Most professional option
2. Best spam filtering
3. Familiar Gmail interface
4. Integrates with other Google services

---

## Step-by-Step: Zoho Mail Setup (Recommended)

### 1. Sign Up
- Go to https://www.zoho.com/mail/zohomail-pricing.html
- Click "SIGNUP NOW" under Forever Free plan
- Create a Zoho account

### 2. Add Your Domain
- Enter `quarkcostarica.com`
- Choose "I already have a domain"

### 3. Create Email Address
- Add user: `info`
- Full email will be: `info@quarkcostarica.com`
- Set a strong password

### 4. Verify Domain Ownership
Zoho will ask you to add a TXT record to prove you own the domain:

**Example TXT Record:**
```
Name: @ (or leave blank)
Type: TXT
Value: zoho-verification=xxxxx.zmverify.zoho.com
```

### 5. Add MX Records
Add these MX records in your domain DNS settings:

```
Priority 10: mx.zoho.com
Priority 20: mx2.zoho.com
Priority 50: mx3.zoho.com
```

### 6. Add SPF Record (TXT)
```
v=spf1 include:zoho.com ~all
```

### 7. Wait for DNS Propagation
- Usually takes 15 minutes to 24 hours
- Check status in Zoho dashboard

### 8. Start Using Email!
- Access via: https://mail.zoho.com
- Or set up on your phone/computer with IMAP/SMTP

---

## Where to Add DNS Records?

You need to log into wherever you registered `quarkcostarica.com`:

### Common Registrars:
- **GoDaddy**: My Products → Domains → DNS Management
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Google Domains**: My Domains → DNS
- **Cloudflare**: Select domain → DNS

### What to Look For:
- "DNS Management"
- "DNS Settings"
- "Nameservers" or "DNS Zone"

---

## Testing Your Email

After setup (24 hours max), test your email:

1. **Send a test email** from Gmail/Outlook to `info@quarkcostarica.com`
2. **Reply from** `info@quarkcostarica.com` to verify sending works
3. **Check spam folder** if you don't receive it

### Email Testing Tools:
- https://mxtoolbox.com/ - Check MX records
- https://www.mail-tester.com/ - Test email deliverability

---

## Mobile & Desktop Setup

### For Zoho Mail:

**Mobile Apps:**
- iOS: Download "Zoho Mail" from App Store
- Android: Download "Zoho Mail" from Play Store

**Desktop (Outlook/Thunderbird/Apple Mail):**

**IMAP Settings:**
- Server: imap.zoho.com
- Port: 993
- Security: SSL

**SMTP Settings (Outgoing):**
- Server: smtp.zoho.com
- Port: 465
- Security: SSL

---

## Need Help?

If you get stuck:
1. Contact your domain registrar's support
2. Check Zoho/Google help documentation
3. YouTube has many video tutorials for email setup
4. I can help guide you through the DNS settings

---

## Quick Checklist

- [ ] Choose email provider (Zoho recommended for free)
- [ ] Sign up and add domain
- [ ] Get DNS records from provider
- [ ] Log into domain registrar
- [ ] Add MX records
- [ ] Add SPF/TXT records
- [ ] Wait 24 hours for propagation
- [ ] Test sending/receiving
- [ ] Set up on phone/computer
- [ ] Update website contact info (already done! ✅)
