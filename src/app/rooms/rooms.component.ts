import { Component, OnInit, DoCheck } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName = 'Regency';
  title = 'Room Tabel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  selectedRoom!: RoomList;

  roomList: RoomList[] = [];

  stream = new Observable<string>((observer) => {
    observer.next('User 1');
    observer.next('User 2');
    observer.next('User 3');
    observer.next('User 4');
    observer.complete();
  });

  totalBytes!: 0;
  error!: '';

  // roomService = new RoomsService();
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    });
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Complete'),
      error: (err) => console.log(err),
    });
    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });
  }

  ngDoCheck(): void {
    // console.log('on Change is Called.');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms Table';
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Delux Room',
      amenities: 'Air Condition, free wifi, kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/WTXCOA_EZbE',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.65,
    };
    // this.roomList.push(room)
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Delux Room Edit',
      amenities: 'Air Condition, free wifi, kitchen Edit',
      price: 500,
      photos: 'https://unsplash.com/photos/WTXCOA_EZbE',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.97,
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Delux Room Edit',
      amenities: 'Air Condition, free wifi, kitchen Edit',
      price: 500,
      photos: 'https://unsplash.com/photos/WTXCOA_EZbE',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.97,
    };
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    });
  }
}
