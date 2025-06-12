// ================================ IGNORE BELOW THIS ================================
// I like run debug and run code on my terminal with nodemon, this is so I know what line a log is ran from;
const origLog = console.log;
console.log = function (...args) {
  const err = new Error();
  const stackLine = err.stack.split("\n")[2]; // the caller
  const match = stackLine.match(/\((.*):(\d+):(\d+)\)/);
  if (match) {
    const [, file, line, col] = match;
    origLog(`[${line}:${col}]`, ...args);
  } else {
    origLog(...args);
  }
};
// ================================ IGNORE ABOVE THIS ================================

class PetHotel {
    constructor() {
        this.hotelCapacity = 5;
        this.bookedRooms = [];
        this.availableRooms = [];

        // generates rooms only once per pet hotel
        this.getRooms();
    }
    getRooms() {
        for (let i = 0; i < this.hotelCapacity; i++) {
            const newRoom = new Room(100 + i);
            this.availableRooms.push(newRoom);
        }
    }
    isFull() {
        // return true if booked rooms is greater than or equal to capacity
        return this.bookedRooms >= this.hotelCapacity;
    }
    addPet(pet) {
        // if hotel is full, give error
        if (this.isFull()) {
            console.log(`ERROR: Hotel is at max capacity. Cannot take in new guests.`);
            return;
        }

        // grab first available room number from available rooms
        let newRoom = this.availableRooms.splice(0, 1)[0];

        // check in pet to room
        newRoom.checkIn(pet);
        // add the room to list of booked rooms.
        this.bookedRooms.push(newRoom);

        // Success message
        console.log(`Successfully booked room for ${pet.name}.\nRoom assigned: ${newRoom.roomNumber}`);
    }
    removePet(roomNum) {
        // can actually use a find.. to search for the booked room
        const roomFound = this.bookedRooms.find((room) => room.roomNumber == roomNum);

        if (!roomFound) {
            console.log("There is no pet checked in with this room number.");
            return;
        }

        // checkout the room
        roomFound.checkOut();

        // remove from bookedRooms list
        const indexToRemove = this.bookedRooms.indexOf(roomFound);
        this.bookedRooms.splice(indexToRemove, 1);

        // add empty checkedout room to available rooms
        this.availableRooms.push(roomFound);

    }
    showHotelStatus() {
        // logs the hotel status
        console.log(`HOTEL STATUS\nBooked rooms: ${this.bookedRooms.length}\nAvailable rooms: ${this.availableRooms.length}\nCapacity: ${this.bookedRooms.length} out of ${this.hotelCapacity}`);
    }
    getBookedRooms() {
        // show the array of room objects, but printed...
        for (let i = 0; i < this.bookedRooms.length; i++) {
            const room = this.bookedRooms[i]
            console.log(`ENTRY ${i + 1}\nRoom number: ${room.roomNumber}\nOccupied: ${room.isOccupied}\nOccupied by: ${room.pet.name}\nType: ${room.pet.type} | Age: ${room.pet.age} years\n=======================`
            )
        }
        console.log(`Total number of rooms booked: ${this.bookedRooms.length}`);
    }
}

class Room {
    constructor(roomNumber) {
        this.roomNumber = roomNumber;
        this.isOccupied = false;
        this.pet = null;
    }
    checkIn(pet) {
        // this makes room occupied and assigned to a pet; assign the Pet this room number
        this.isOccupied = true;
        this.pet = pet;
    }
    checkOut() {
        // room is not occupied, remove pet assignment; remove the room number from Pet obj
        this.isOccupied = false;
        this.pet = null;
    }
}

class Pet {
    constructor(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }
}

// tests
const lano = new Pet("Lano", "Dog", 4);
const cleo = new Pet("Cleo", "Dog", 0.8);
const kito = new Pet("Kito", "Dog", 5);
const hotel = new PetHotel();
hotel.addPet(lano);
hotel.addPet(cleo);
hotel.addPet(kito);
hotel.removePet(101);
hotel.showHotelStatus();
hotel.getBookedRooms();