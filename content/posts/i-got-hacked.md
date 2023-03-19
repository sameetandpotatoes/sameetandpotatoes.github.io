+++
title = "I got hacked - here’s my story and what I learned."
date = "2023-03-19T14:33:10-05:00"
author = "Sameet Sapra"
authorTwitter = "" #do not include @
cover = ""
tags = ["", ""]
keywords = ["", ""]
description = ""
showFullContent = false
readingTime = true
hideComments = false
color = "" #color from the theme settings
+++

I was visiting the NYC offices during the week of Feb 27 to meet some of my team in person. It was Friday, March 3, and I was spending it at the NYC office in Hudson Yards. Check out the view below! I was planning on enjoying part of my weekend in NYC before heading back to Chicago… little did I know what I'd be dealing with later that day.

![Alt image](IMG_3984.jpg)

## A timeline of what happened

Around 2:55 pm, I received some phone calls from a 1-800–692–7753 number, claiming to be Apple. The phone call said that “someone had attempted to login to my Apple account. Press 1 to reject login”. While this call was happening, I googled the number and saw that it did in fact match Apple (In hindsight, it's likely that this was not real, but I do not know the purpose of this call). Before I could really react and decide if I should press 1 or not, the number called me again. And again. And again. Probably 5-6 times over the course of 10 seconds. I found this to be pretty strange, but I ignored these phone calls.

Then, at 2:59 pm, I received several emails from Apple reporting that someone had logged into my iCloud, then another email saying someone had changed my trusted number, and finally one final email saying someone had changed the password on my iCloud account. Then, on my Mac and iPhone, I saw prompts telling me to sign in to my iCloud account once again. Someone signed me out of all my iCloud accounts.

Just a minute or two later, the Apple logo appears on my phone, and when I see the screen, it shows a “Set up as new iPhone” screen.

I was shocked.

## What I did immediately

In fact, I was still wrapping up a meeting while all of this was happening. My mind was racing as I tried to figure out what immediate steps I should take.

First, I decided to get my phone set up again as a new phone, and then that’s when I only saw only one SIM card registered, my work device. See, I had a dual SIM setup on my phone, with my personal SIM installed as an eSIM on my work phone. This way, I could have two phone numbers attached to one phone and separate work from personal. eSIMs are also safer than physical SIMs. But I only saw one signal bar, not two, on my phone. I no longer had access to my personal phone number.

Putting that bombshell aside, I turned back to my computer and tried logging back in. I ended up triggering the reset iCloud password flow, only to be prompted by a trusted number that I didn’t recognize. I couldn’t reset my iCloud account, even though I had access to my email.

Then, I started thinking about this a bit more, and realized that my iCloud account has access to my keychain (which has all my uniquely generated passwords), my files, and all my photos. My files, which contain all of my personal information including tax information (SSN), as well as my photo collection of over 10+ years. All in the cloud. And now in the hands of someone else.

About 18 months ago, I decided to upgrade to 200 GB of shared storage in iCloud so that I could consolidate all my files and photos in iCloud so I could access them on all my Apple devices and not worry about things getting out of sync.

**But this means whoever has my iCloud account has access to all of this.**

After a few minutes of panicking, I realized I still had a local copy of my keychain, which included my passwords. I started looking through my keychain and started filtering through my financial accounts: bank accounts, retirement accounts, investment accounts, mortgage accounts. For each one, I had 2FA (two factor authentication). Some accounts used an app to verify myself, while other accounts use SMS. I tried logging in, but then realized that a 2FA code was just going to be sent to my phone number, which I didn’t have access to. Presumably, the person who compromised my iCloud account had my phone number, which meant they also intercepted any of my insecure SMS-based two factor authentication.

While this was happening, I received one more alarming email: someone logged into my mortgage account. My mortgage account had 2FA, so this validated my theory that my number received SMS messages that the attacker used to start logging into my accounts.

I called each of my financial accounts and explained the situation with the goal of changing the phone number on my account to my work number. Then, I logged into each of the accounts and changed the passwords to a new password, tracking my work in an Excel sheet

I also changed my social media account passwords, in case the attacker wanted to post anything on my socials. It was now a race between the attacker and myself to login to any of my accounts, since the iCloud keychain now was completely useless since it had been compromised and all the passwords can just be read in plaintext.

Next, I created accounts for all the major credit unions (TransUnion, Experian, Equifax) and started to place security freezes. At this point, it was starting to get late, they were closed, and I was losing momentum (and getting quite the migraine). I used their automated phone lines to place security freezes with just one of the unions, and made a mental note to call them tomorrow and/or confirm online that security freezes were placed. This seemed like one of the most important steps to take as soon as possible to prevent loans or other forms of credit from being opened under my name. At least it was a Friday though, and maybe less likely for action to be taken, compared to a weekday.

While rotating some of my most critical accounts’ passwords, I got on the phone with an Apple senior advisor and explained my situation (luckily I still had my work number to make phone calls). They told me that even though I have access to the email associated with my Apple ID, I could not use that to reset my password. This was weird to me because my account had 2FA - Apple should have sent 6 digit codes to all my devices upon an unrecognized login. Why didn’t I get that 2FA code on my devices? I’m still not sure. Almost any login flow on a website lets you reset your password with an email sent to you or by verifying your SSN or other sensitive PII.

*Not Apple though. Everything seems to be tied to a trusted number.*

Apple told me there was nothing they could do. The senior advisor was blunt and told me that my situation was dire, which was what I needed to hear at the time, though certainly frustrating. She said I could go to an Apple store, but I’d be wasting my time, and I could file a police report, but that probably wouldn’t go anywhere either. I’d have to create a new Apple ID and start over.

After debriefing the situation with immediate family and friends to explain the attack and warn them that my number was not available, I went to AT&T to regain access to my phone number. Luckily, they were able to do it without too much fuss, but of course, they did not seem to have any data on when/how the hack happened.

## What I did in the next 48 hours

The following day, I called the FBI hotline and placed a cybercrime report at ic3.gov.

I called the rest of the credit unions and made sure security freezes were placed on all my accounts.

I went to AT&T again to try to ask more direct questions: should I change my phone number (I probably should), what exactly happened to my account (they have 0 historical logs and can’t tell me anything), and was there a PIN set on my account (there was). They were unfortunately not much help here.

I also sent an email to Tim Cook, on the off chance that he responds and my story is heard there. Unfortunately, I haven't received any response.

## What I did in the next week

After flying back home, I talked with my family and decided to set up identity theft monitoring. Considering that it is likely that my family’s phone numbers were also used as part of my hack, we felt that it was better for us to all have monitoring to be safe. We did some research and ended up signing up with Aura.

I received a few more emails that were concerning on Thursday. My Apple ID was logged into another iPhone (different from the one that originally logged into my iCloud), the password was changed again, and Find My was disabled. I read those emails and came to the conclusion that my Apple ID was likely sold on the dark web to another interested buyer, and perhaps that my data was passing through the hands of another attacker. In fact, another super old bank account sent me alerts of unrecognized access.

This scared me a little bit, so then I decided that any single account of mine was still vulnerable. I went through the painstaking process of changing every single password on all my accounts. I also used this time to switch to Bitwarden, a free, open source password manager.

Out of an abundance of caution, I completely switched phone numbers (and carriers) too and rotated my credit card numbers as well.

**I basically changed every meaningful aspect of my digital life within the span of a week.**

## Was I able to recover everything?

Even though my Mac was not signed into iCloud anymore, I could still view a lot of data locally from the cloud. I took all my contacts from the Contacts App and saved them into a .vcf file, and shared that with my new phone so I didn’t lose any of my contacts.

My keychain was still accessible, so I could see all my accounts and passwords. This was helpful as it gave me a list of accounts to track.

My photos were all recoverable in a Photos Library on my Mac. I took the files and saved them to my Downloads.

For my iCloud Drive, many of my files were cached and downloaded onto my local storage. I filtered through the files that were cached and saved them to a new folder. That way, when I signed out of my iCloud Drive, in case those files were gone, I still had the local copy.

But, all my iCloud backups were gone so I've had to set up each of my devices as brand new. I also lost any apps previously purchased on my Apple account, cash back from Apple credit card which I used to own, and any gift cards registered on my digital Apple Wallet too. My iMessage conversation history (and my WhatsApp messages, which were iCloud backed up) were also gone. I had a local copy of iMessage on my own Mac, but once I got a new phone number, I had to end up deleting all of those old messages to properly reset my group chats.

With respect to my Apple devices, they were all tied to my old Apple ID.

- I could restore access to my iPad and my Apple Watch by submitting proof of purchase to Apple, which would help remove the activation lock.
- For my AirPods Pro, I needed to factory reset it. Until I properly factory reset my AirPods Pro., the attacker who had my iCloud could see the location of the AirPods.
- My AirTag was in my home when my iCloud was compromised. This means the attacker likely knows where I live because Find My shows all device locations.
- My MagSafe Wallet could not be reset and was permanently tied to my old Apple ID. I had to throw it away.

## My theory as to what happened

In college, I read about social engineering attacks to compromise phone numbers. The way it works is an attacker gathers as much public information about the victim through previous leaks, public information scraped off of social media profiles, etc. Then, through persuasion, tactics, and having information on the account, the attacker gains the sympathy of the caller and asks to transfer the SIM of the account to their “new phone”.

I have no knowledge that this happened to me, but that’s the only way I know of an attack like this. Of course, if others know more, please share; I’d love to learn.

Despite all that, there’s still things that don’t add up.

- Was the phone call I received from “Apple” real? Seems unlikely. Did this trigger an attack in some way then? I’m not sure. This wasn’t a phishing attack as I didn’t give away any information. Was the phone call made to my personal line? If so, then my point below doesn’t make sense.
- I don’t know for how long my phone number was compromised. I assume it was compromised around 3 pm EST, but I wasn’t checking my phone very much so it could have been earlier. I know I received texts at the beginning of the day, at least until 12-1 pm.
- I still don’t know exactly how my Apple ID got compromised. I had 2FA on (Apple did confirm this), I had a trusted number listed (which was my personal phone number), and my password was secure and not captured in any leaks as far as I know. It may have been re-used across one or two websites, but it seems like a stretch to presume that caused this to happen.

## How to better protect yourself / Changes I plan on making

1. **Add multiple trusted devices to your iCloud account and/or a Recovery Contact.**

   a. This seems obvious but I don't believe most people know this (I certainly didn’t). You can add multiple trusted devices and that means any of those numbers can still potentially have access to the account if any changes are made to it. This is similar to having Recovery Contact(s), which can also help in the case you can't get access to your account. This should probably be mandatory as part of iCloud account creation. This one would have probably prevented this attack from happening, as I would have likely been able to use one of those other trusted numbers to regain access.

   b. You can also turn on “Advanced Data Protection”, which will have end to end encryption on more of your iCloud data. Of course, this won’t necessarily save you if an unauthorized user gains access to your iCloud, as information can still be decrypted on the client side.

   c. Don’t use SMS based 2FA for as many accounts as possible. If your phone number is compromised, this effectively becomes just an extra step for an attacker. Instead, use authenticator apps (I use Authy). These may not be foolproof either, but still, a big improvement over SMS based authentication.

2. **Make sure that you have trusted pass phrases in place for your financial accounts.** For Schwab and Vanguard, I use the multi factor authentication which requires me to login to the app on my phone. For my mortgage and other important accounts, I have trusted phrases set up which should hopefully secure me further (though my 5th point is still good to think about).

3. **Don’t re-use passwords across accounts**. This one is obvious, and I wasn’t doing this often either (especially not for my sensitive accounts). But, of course, I think the situation would have been far worse if I was reusing passwords. And I think it's fair to say most people have one or two "insecure passwords" that they use as a default for their accounts they don't care a lot about.

4. **Be careful about the pin codes, usernames, and security questions you have out there.** It’s possible that the attacker used social engineering and public data from online about me. Maybe it’s worth recycling some of these answers. This is something I'll be thinking about as well.

5. **Don’t consolidate all your data. Have redundancy measures.** I’m changing my approach here and reverting my stance on cloud storage. While I likely would have been able to recover my data if everything was in Google and not Apple, I think it’s important to have local copies of your data.
