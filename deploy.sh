#!/bin/bash

# Loqi AILanding - Firebase Hosting Deployment Script
# This script removes the dist folder, builds the project, and deploys to Firebase Hosting

echo "🚀 Starting Loqi AILanding deployment to Firebase Hosting..."

# Remove dist folder if it exists
echo "🧹 Cleaning up previous build..."
if [ -d "dist" ]; then
    rm -rf dist
    echo "✅ Removed dist folder"
else
    echo "ℹ️  No dist folder found, proceeding with build"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"
else
    echo "❌ Build failed. Exiting..."
    exit 1
fi

# Deploy to Firebase Hosting
echo "🚀 Deploying to Firebase Hosting..."
firebase deploy --only hosting

# Check if deployment was successful
if [ $? -eq 0 ]; then
    echo "🎉 Deployment completed successfully!"
    echo "🌐 Your site is live at: https://larafast-landing.web.app"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
