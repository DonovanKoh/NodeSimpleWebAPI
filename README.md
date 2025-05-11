Absolutely! Here's the full `README.md` content for your **Financial Goals Planner** application:

---

# Financial Goals Planner

A simple web application that allows users to plan financial goals using a compounding interest calculator. Built with **Node.js**, **Express**, and **Tailwind CSS** via CDN.

---

## 🚀 Features

* Input fields for:

  * Initial investment
  * Annual interest rate
  * Investment duration (years)
  * Compounding frequency per year
* Real-time compound interest calculation via API
* Simple and responsive UI using Tailwind CSS

---

## 🛠 Local Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the app**

   ```bash
   npm start
   ```

3. **Open in browser**
   Navigate to: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment on Render

### Step 1: Push to GitHub

Initialize a Git repo and push your project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

### Step 2: Create a Web Service on Render

1. Go to [https://render.com](https://render.com) and log in.
2. Click **"New Web Service"**
3. Choose **"Connect a GitHub repo"**
4. Select your repo with the financial goals app
5. Fill in these settings:

   * **Name**: `financial-goals-app`
   * **Environment**: `Node`
   * **Build Command**: `npm install`
   * **Start Command**: `npm start`
   * **Root Directory**: (leave blank)
6. Click **"Create Web Service"**

---

### Step 3: Done!

Render will build and deploy your app. Once finished, it will give you a public URL like:

```
https://financial-goals-app.onrender.com
```

---

## 💡 Tip

Want to test your API separately? Use tools like Postman or cURL to POST to `/api/calculate` with JSON:

```json
{
  "principal": 1000,
  "rate": 5,
  "years": 10,
  "timesPerYear": 4
}
```

---

Let me know if you'd like this extended with authentication, goal saving, or database support!
