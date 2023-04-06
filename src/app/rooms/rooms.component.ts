import { Component, OnInit, DoCheck } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName = 'Regency';
  title = "Room Tabel"
  numberOfRooms = 10; 
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  selectedRoom!: RoomList

  roomList: RoomList[] = []

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Delux Room",
        amenities: "Air Condition, free wifi, kitchen",
        price: 500,
        photos: "https://unsplash.com/photos/WTXCOA_EZbE",
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 4.6
      },
      {
        roomNumber: 2,
        roomType: "Delux Room",
        amenities: "Air Condition, free wifi, Tv, kitchen",
        price: 1000,
        photos: "https://unsplash.com/photos/WTXCOA_EZbE",
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 3.465
      },
      {
        roomNumber: 3,
        roomType: "Private Suite",
        amenities: "Air Condition, free wifi, kitchen",
        price: 2500,
        photos: "https://unsplash.com/photos/WTXCOA_EZbE",
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 3.767
      }
    ]
  }


  ngDoCheck(): void {
    console.log("on Change is Called.");
  }


  toggle(){
    this.hideRooms = !this.hideRooms
    this.title = "Rooms Table"
  }

  selectRoom(room: RoomList){
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Delux Room",
      amenities: "Air Condition, free wifi, kitchen",
      price: 500,
      photos: "https://unsplash.com/photos/WTXCOA_EZbE",
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.65
    }
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }
}
