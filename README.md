# Learning SanityIO

This repository contains the code for a **blog** built using **Sanity IO** as the headless CMS and rendering it in a Next.js frontend.

This tutorial walks through setting up a blog from scratch. If you would like to follow along, the initial video covering the blog setup is available on *youtube (TODO add video link)* and further videos are available covering more complex subjects such as:

* **Typegen**
* **Groq functions**; and
* **Page Builders**

## Topics Covered in video tutorial

* **installation and setup**
* **How to use GROQ!**  - Sanity’s very own Query Language.
* **Schemas -**  how they shape the data
* **PortableText** - introduction to custom components
* **Singleton Pages**

## 🚀 Blog Features

* **Sanity IO CMS** for structured content management
* **PortableText** for rich text rendering
* **Next.js 15** with App Router
* **Dynamic routing** for blog posts
* **SEO Optimization** with Next.js metadata

## 📌 Prerequisites

Before starting, ensure you have:

* **Node.js** (>= 18)
* **Sanity CLI** installed globally (`npm install -g @sanity/cli`)
* A **Sanity project** (sign up at [sanity.io](https://www.sanity.io/))

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/codercarl1243/blog-with-sanity
cd blog-with-sanity
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Set Up Sanity Studio

1. create an .env.local file at the root of the project

   ```
   touch .env.local
   ```
2. configure your Sanity .ENV keys.

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_KEY_GOES_HERE"
   NEXT_PUBLIC_SANITY_DATASET="production"

   ```

   > ℹ️ **Note:** The project ID can be found in your Sanity dashboard.
   >

### 4️⃣ Start the Development Server

#### Start Next.js Frontend:

```
npm run dev
```

The Next.js app will run at [ http://localhost:3000](http://localhost:3000 "Localhost 3000")

## 🏗 Project Structure

```
blog-with-sanity/
├── sanity/          # Sanity Studio (CMS)
│   ├── schemaTypes/ # Schema definitions
│   ├── lib/         # utilities and functions specific to Sanity
│   ├── .env         # Sanity credentials
│   ├── structure.ts # Where we create Singletons and personalise the Studio Layout
├── app/             # Next.js App Router pages
│   ├── layout.tsx   # Main layout
│   ├── page.tsx     # Home page
│   ├── (client)/    # All the code for frontend goes here
│   │   ├── post/    # Blog post dynamic route
│   ├── (sanity)/    # All the Studio code goes here
├── components/      # UI components
├── lib/             # utilities and functions
├── public/          # Static assets
├── .env.local       # project configuration
├── ...
```

## 📝 Creating Blog Posts

1. Open [http://localhost:3000/studio](`http://localhost:3000/studio` "Sanity Studio")
2. Click **New Document** → **Post**
3. Fill in the title, slug, and content.
4. Publish the post.
5. Visit [http://localhost:3000/](http://localhost:3000/ "localhost 3000") to see the post rendered.

## 🚀 Deploying

Vercel as the creators of NextJS have also created a seamless deployment service.

Information on options can be found in the [NextJS documentation on deployment](https://nextjs.org/docs/pages/building-your-application/deploying "deploying a nextjs project")

## 📚 Learn More

* [Sanity Documentation](https://www.sanity.io/docs "Sanity Documentation")
* [Next.js Documentation](https://nextjs.org/docs "NextJS Documentation")

## 📜 License

MIT License. Free to use and modify.

---

Happy coding! 🎉
