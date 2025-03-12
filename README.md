# FireDevLab

A development sandbox for testing Firebase integrations and features.

## 📌 Setup Instructions

Follow these steps to set up and start using the project:

### 1️⃣ Create an `.env` File

At the root of the project, create a file named `.env` and add the following environment variables: 

```ini
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Replace each value with your actual Firebase project credentials.

### 2️⃣ Add Google Services Configuration Files

To enable Firebase services, download the required configuration files from your Firebase console and place them in the respective directories.

### 3️⃣ Set Up @capacitor-firebase/authentication

The project includes [@capacitor-firebase/authentication](https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/authentication) for testing authentication.

#### ✅ SignIn with Facebook

Facebook login can be tested once the setup is complete. Follow the official guide to configure Facebook authentication:

[Setup Guide](https://github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/setup-facebook.md)
