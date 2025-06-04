function guessPassword() {
  const secret = "code123";
  const maxAttempts = 5;
  let attempts = 0;

  while (attempts < maxAttempts) {
    let input = prompt("Enter your password:"); // Pretend this collects user input
    attempts++;

    if (!input) {
      console.log("You didn't enter anything. Try again.");
      continue; // Skip the rest and ask again
    }

    if (input === secret) {
      console.log("✅ Correct! You're logged in.");
      break; // Stop the loop — password matched!
    }

    console.log("❌ Incorrect password.");
  }

  if (attempts === maxAttempts) {
    console.log("🔒 Too many attempts. Access denied.");
  }

  console.log("Session ended.");
}