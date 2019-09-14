import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserInfo {
  name: string;
  surname: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  private userInfoSubject: BehaviorSubject<UserInfo>;
  private userInfo = {
    name: 'Ignacio',
    surname: 'García-Cano',
    // tslint:disable-next-line: max-line-length
    img: 'https://lh3.googleusercontent.com/-T1QXLgxh6y4/VJG-y3BklAE/AAAAAAAAAB4/MFYOT0ahGLYRhBYAEumt3RcxCV3akMixgCEwYChgb/w326-h220-p/ProfilePhotos02'
  };

  constructor() {
    this.userInfoSubject = new BehaviorSubject(this.userInfo);
  }

  public getUserInfo(): Observable<UserInfo> {
    return this.userInfoSubject.asObservable();
  }

}
