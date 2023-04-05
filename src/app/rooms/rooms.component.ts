import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Regency';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [
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

  ngOnInit(): void {}
  toggle(){
    this.hideRooms = !this.hideRooms
  }
}
