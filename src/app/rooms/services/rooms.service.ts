import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: '1',
      roomType: 'Delux Room',
      amenities: 'Air Condition, free wifi, kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/WTXCOA_EZbE',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.6,
    },
    {
      roomNumber: '2',
      roomType: 'Delux Room',
      amenities: 'Air Condition, free wifi, Tv, kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/WTXCOA_EZbE',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.465,
    },
    {
      roomNumber: '3',
      roomType: 'Private Suite',
      amenities: 'Air Condition, free wifi, kitchen',
      price: 2500,
      photos: 'https://unsplash.com/photos/WTXCOA_EZbE',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.767,
    },
  ];

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
    console.log('Room Service Initialized.');
  }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      { reportProgress: true }
    );
    return this.http.request(request);
  }
}
