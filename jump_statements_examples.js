function validateForm(fields) {
  const requiredFields = ["name", "email", "age"];
  let errors = [];

  // Loop through required fields and check for presence
  for (let field of requiredFields) {
    if (!fields[field]) {
      errors.push(`Missing required field: ${field}`);
      // Skip further validation for this missing field
      continue;
    }

    // Nested validation
    switch (field) {
      case "email":
        if (!fields[field].includes("@")) {
          errors.push("Invalid email format");
        }
        break; // Done validating email

      case "age":
        const age = Number(fields[field]);
        if (isNaN(age)) {
          errors.push("Age must be a number");
          break;
        }
        if (age < 18) {
          errors.push("You must be at least 18 years old.");
          // If underage, stop validation entirely (critical failure)
          break;
        }
        break;

      default:
        // Additional field-specific validation could go here
        break;
    }
  }

  // Stop processing if there are too many errors
  if (errors.length > 3) {
    console.log("Too many errors. Aborting submission.");
    return;
  }

  console.log("Validation complete.");
  console.log("Errors:", errors);
}