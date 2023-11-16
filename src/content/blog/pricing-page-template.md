---
title: I made a Pricing Page template with Tailwind and Shadcn UI
description: An open-source pricing page, completely customizable and responsive
pubDate: "Nov 14 2023"
---

Hey everyone! I noticed that there aren't a lot of free and open-source pricing pages with Tailwind, and none with Shadcn UI, so I made my own from scratch and wanted to share it with the community. You can copy-paste the code in the repo and have a fully functional pricing page in two clicks!

<br>

## Demo Gif

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cs8vpbq8iy9y0j9qdu6s.gif)

✅ Dark & Light Mode <br>
✅ Monthly / Yearly Plan <br>
✅ Yearly Plan savings automatically calculated and highlighted <br>
✅ "Popular" tag (PRO Plan in the live preview) <br>
✅ "Exclusive" tag (EXCLUSIVE Plan in the dark theme live preview) <br>

<br>

## Customization

This template is fully customizable and responsive. You can easily add and delete plans, and fill them with the data you what. At the bottom of src/app/page.tsx (which is the only relevant file) you'll find the customization array:

```javascript
const plans = [
  {
    title: "Basic",
    monthlyPrice: 10,
    yearlyPrice: 100,
    description: "Essential features you need to get started",
    features: ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3"],
    actionLabel: "Get Started",
  },
  {
    title: "Pro",
    monthlyPrice: 25,
    yearlyPrice: 250,
    description: "Perfect for owners of small & medium businessess",
    features: ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3"],
    actionLabel: "Get Started",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Dedicated support and infrastructure to fit your needs",
    features: ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3", "Super Exclusive Feature"],
    actionLabel: "Contact Sales",
    exclusive: true,
  },
]
```

<br>

## Card variations

I also made two card variations. You can add them with `popular:true` or `exclusive:true` in the specific plan you want to highlight.
<br>

### Popular tag

The first one is the "popular" tag, that you can see in the PRO plan in the example. It adds the gradient outline to highlight the card.
<br>

### Exclusive tag

The second one is the exclusive tag, only available in dark mode. It's the shine effect in the EXCLUSIVE plan.

<br>

[Github Repo](https://github.com/m4nute/pricing-page-shadcn) <br>
[Live Demo](https://pricing-page-shadcn.vercel.app/)

<br>

Follow me if you wanna see more of my work 😊. I'm currently looking for opportunities, feel free to contact me at mgud@proton.me

<br>

That's it!
