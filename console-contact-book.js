// This function opens up the menu in prompt
function getMenu() {
    // Get user input
    const input = prompt(`Welcome to your Contact Book!
        What would you like to do?
        1. Add contact
        2. View all contacts
        3. Search contact
        4. Exit`
    );
    return input;
}

// This function adds a contact to the contact list array and logs it to console
function addContact(contactList) {
    const name = prompt("Enter Name:");

    // If name is falsy, exit the function. Didn't do it for phone and email cause you can just save the name.
    if (!name) return;

    const phone = prompt(`Enter ${name}'s Phone Number:`);
    const email = prompt(`Enter ${name}'s Email:`);

    console.log(`A new contact was added!\nName: ${name}\nPhone Number: ${phone}\nEmail: ${email}`
    );

    // Push contact into contact list.
    contactList.push({
        Name: name,
        "Phone Number": phone,
        Email: email
    });
}

// This function logs all contacts onto the console
function viewAllContacts(contactList) {
    console.log("Listing all saved contacts...");

    // Loop through all contacts in the list and log it to the console
    contactList.forEach((contact, index) => {
        console.log(`[${index}] Name: ${contact.Name}\nPhone Number: ${contact["Phone Number"]}\nEmail: ${contact.Email}`);
    })

    // Marker for end of saved contacts and the count of contacts
    console.log(`=== END OF SAVED CONTACTS ===\nTotal count of contacts saved: ${contactList.length}`)
}

// This function logs the contact information if the searched name matches one in the array
function searchContact(contactList) {
    const nameSearch = prompt("What is the name of the contact you are searching for?");

    // Filter the array to find the contact name within the object, if found assign it to variable
    const foundContact = contactList.filter(
        (contact) => nameSearch === contact.Name
    );

    // If the filtered array doesn't have a contact, means that no match was found. Return error.
    if (foundContact.length < 1) {
        console.log("ERROR: No contact with given name was found.");
        return;
    }

    alert("Match found! Check console for details.");

    // Log the contact information to the console.
    console.log(`Match found!\nName: ${foundContact[0].Name}\nPhone Number: ${foundContact[0]["Phone Number"]}\nEmail: ${foundContact[0].Email}`)
}

// This is the main function that calls everything together. The logic for the menu is also located in here
function contactBook() {
    // Initialize array of contact list and as well the input. Don't want the input within the loop, or else the input will be re-created every iteration.
    const contactList = [];
    let menuInput;

    // Used an infinite loop for the main menu so if user exits a previous menu, user can select what to do next.
    do {
        menuInput = getMenu();

        // If prompt gets cancelled, exit the program
        if (menuInput === null) {
            alert("Goodbye!");
            return;
        }

        // Switch cases for all possible functions
        switch (menuInput) {
            case "4":
                alert("Goodbye!");
                return;
            case "1":
                addContact(contactList);
                break;
            case "2":
                viewAllContacts(contactList);
                break;
            case "3":
                searchContact(contactList);
                break;
            default:
                alert("Invalid Option. Please enter 1, 2, 3 or 4.")
        }

    // While true allows us to have an infinite loop. 
    } while (true);
}

contactBook();