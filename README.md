# Welcome to your Expo app 👋

## Authentication

Recurrly uses Clerk hosted authentication on iOS and Android, and Clerk's web
components on web. The existing `src/app/index.tsx` redirects to the tabs; access
is controlled by protected routes in the root layout.

1. Set `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` in `.env` (see `.env.example`). Keep the
   existing key if it is already configured, then restart Expo after changes.
2. In [Clerk Native applications](https://dashboard.clerk.com/~/native-applications),
   enable the Native API. Enable your desired sign-in methods in Clerk.
3. Native builds currently use `com.recurrly.app` for both the iOS bundle identifier
   and Android package. Before production, confirm these identifiers in `app.json`
   and register the matching applications in Clerk (including Android namespace).
   Rebuild native apps after changing identifiers or plugins.
4. Run `npx expo start` and open Sign in or Create an account. Completing the flow
   opens the existing tabs. Dismissing it allows you to retry. Sessions persist via
   SecureStore on native platforms; Settings includes Sign out.

Hosted auth does not require Clerk's beta native components. For native builds,
the `@clerk/expo` plugin registers the Android callback; no manual edits to `ios/`
or `android/` are needed. Expo Go uses a development callback. For web, the
`/sign-in` and `/sign-up` routes render Clerk's web components with hash routing.

See [Clerk hosted authentication](https://clerk.com/docs/expo/guides/account-portal/hosted-auth).
Verify sign-in, sign-up, cancellation, reopening the app, sign-out, and a signed-out
subscription deep link on your target device. Route guards protect navigation;
any future backend must also authenticate and authorize its requests.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src/app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **example** directory and create a blank **src/app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
