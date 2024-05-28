<h1 align="center">Ling React-native</h1>


<h4 align="center">Case Study Leaderboard App</h4>

```
src
 ├── assets
     ├── leaderboard.json
 ├── helper,  
     ├── string.ts
 ├── components
     ├── common
     ├── Skeleton
     ├── Table
        ├── components
           ├── Table.ts
           ├── index
 ├── hooks
     ├── useInitialLeaderBoard
     └── useUpdateLeaderBoard
 ├── redux 
     ├── actions
       ├── userAction.ts
     ├── reducers
     ├── store.ts
```

<a id="Assets"></a>
# Assets

Assets used in the project.
<br>
Sample: mock data, color, images, svg etc.


<a id="Components"></a>
# Components

Components Folder containing base components in the project.
<br>
Sample: ErrorComponent, ToastMessage etc.

<br>

<a id="Hooks"></a>
# Hooks
Hooks Folder containing base hooks in the project.
<br>
Sample: useTheme etc.


<a id="Run"></a>
# Run in Dev Environment

- Setting up the development environment: https://reactnative.dev/docs/environment-setup.
- Install dependencies: ( `npm install` or `yarn install`).
- Install CocoaPods dependencies: ( `pod install`).
- Run on iOS: `npx react-native run-ios` (or `npm run ios`).
- Run on Android: `npx react-native run-android` 
- Run on Test: `npm test` (or `npm run test`).
- ✨ Don't forget to enable eslint ✨