# SafeTrip AI

A five-page React + Vite frontend demo for travel planning and personal safety.

## Pages
1. Login
2. Dashboard (navigation hub)
3. Destination search, illustrative risk score, and recommendations
4. Emergency SOS, trusted contacts, and user-initiated location sharing
5. Travel history

The AI assistant button is available on every page. It is a frontend demo assistant, not a live AI service.

## Run locally
1. Extract the ZIP.
2. Open the `SafeTrip-AI` folder in VS Code (the folder containing `package.json`).
3. Open Terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```
4. Open the localhost URL shown by Vite.

Do not open `index.html` directly. Start the app using Vite.

## Demo limitations
- Destination risk scores and recommendations are sample data, not live crime data or official safety advisories.
- Location access requires browser permission and a secure context (localhost or HTTPS).
- SOS mode is an in-app demo only. It does not contact emergency services or send SMS automatically.
- Shake detection depends on browser/device support and cannot reliably detect phone snatching or run in the background.
- Trusted contacts and travel history are saved locally in the browser only.
