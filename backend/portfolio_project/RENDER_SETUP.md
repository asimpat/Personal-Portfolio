# Render Deployment Setup Guide

## 🔧 Database Configuration Fixed

The MySQL error has been resolved! Your Django app now:
- ✅ Uses PostgreSQL in production (when `DEBUG=False`)
- ✅ Falls back to PostgreSQL if no `DATABASE_URL` is provided
- ✅ Only uses MySQL for local development

## 🚀 Deploy Steps for Render

### 1. Create PostgreSQL Database First
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"PostgreSQL"**
3. Configure:
   - **Name**: `portfolio-database`
   - **Database**: `portfolio_db`
   - **User**: `portfolio_user`
   - **Region**: Choose closest to you
   - **Plan**: **Free**
4. Click **"Create Database"**
5. **Copy the External Database URL** (starts with `postgresql://`)

### 2. Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `portfolio-backend`
   - **Environment**: `Python 3`
   - **Build Command**: `./build.sh`
   - **Start Command**: `gunicorn portfolio_project.wsgi:application`
   - **Instance Type**: **Free**

### 3. Set Environment Variables
In the Web Service settings, add these environment variables:

**Required:**
```
SECRET_KEY = django-insecure-GENERATE-NEW-SECRET-KEY-HERE
DEBUG = False
DATABASE_URL = postgresql://portfolio_user:password@host:port/portfolio_db
ALLOWED_HOSTS = your-app-name.onrender.com
```

**Optional (Email):**
```
EMAIL_HOST_USER = your-gmail@gmail.com
EMAIL_HOST_PASSWORD = your-app-password
CONTACT_EMAIL = your-contact@gmail.com
```

### 4. Generate Secret Key
Run this locally to generate a secure secret key:
```python
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

### 5. Deploy
1. Click **"Create Web Service"**
2. Render will automatically build and deploy
3. Monitor the logs for success

## 🎯 What's Fixed

### Database Configuration
- **Production**: Uses PostgreSQL automatically when `DEBUG=False`
- **Fallback**: If no `DATABASE_URL`, still uses PostgreSQL in production
- **Development**: Uses MySQL locally (when `DEBUG=True`)

### Error Resolution
- ❌ **Old Error**: `ModuleNotFoundError: No module named 'MySQLdb'`
- ✅ **Fixed**: Django now uses PostgreSQL backend in production

## 📋 Checklist

- [ ] Push updated code to GitHub
- [ ] Create PostgreSQL database on Render
- [ ] Create Web Service on Render  
- [ ] Set environment variables (especially `DATABASE_URL`)
- [ ] Generate and set new `SECRET_KEY`
- [ ] Deploy and verify success

## 🔍 Troubleshooting

### If Still Getting MySQL Errors:
1. Ensure `DEBUG=False` in environment variables
2. Verify `DATABASE_URL` is set correctly
3. Check that PostgreSQL database is running

### Build Logs Should Show:
```
==> Using Python version 3.12.7
==> Running build command './build.sh'
==> Installing dependencies from requirements.txt
==> Collecting static files
==> Running migrations
==> Build succeeded
```

Your app will be live at: `https://personal-portfolio-ruddy-omega.vercel.app/` 🎉
