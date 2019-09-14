import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { UserManagerService, UserInfo } from '../services/user-manager/user-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {

  @ViewChild('profileImage', { static: true }) public profileImage: ElementRef;
  public userInfo: UserInfo;
  public canEdit = false;
  private user$: Subscription;

  constructor(
    private userService: UserManagerService,
    private renderer: Renderer2) { }

  public ngOnInit(): void {
    this.user$ = this.userService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      this.renderer.setStyle(this.profileImage.nativeElement, 'background-image', `url(${userInfo.img})`)
    });
  }

  public changeEdit(): void {
    this.canEdit = !this.canEdit;
  }

  public ngOnDestroy(): void {
    this.user$.unsubscribe();
  }

}
