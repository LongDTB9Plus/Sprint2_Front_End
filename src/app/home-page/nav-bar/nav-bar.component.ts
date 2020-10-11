import {
  Component,
  ComponentFactoryResolver,
  Input, OnDestroy,
  OnInit, ViewChild
} from '@angular/core';
import {ModalForm} from '../modalForm';
import {ModalFormDirective} from '../modalForm.directive';
import {ModalComponent} from '../modalComponent';
import {ModalServiceService} from '../modal-service.service';
import {JwtService} from '../../login/services/jwt.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy{
  @Input() modal: ModalForm[];
  @ViewChild(ModalFormDirective, {
    static: true
  })
  modalForm: ModalFormDirective;
  username: string;
  avatar: string;
  loggedIn = false;

  currentIndex = -1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private jwtService: JwtService,
              private modalService: ModalServiceService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.modal = this.modalService.getModal();
    if (this.jwtService.getUsername() != null) {
      this.username = this.jwtService.getUsername();
      // const getImageData = this.jwtService.getAvatar();
      this.avatar = this.jwtService.getAvatar();
      this.loggedIn = true;
      console.log(this.username + '\n' + this.avatar + '\n' + this.loggedIn);
    }
    this.modalService.load$.subscribe(
      (index) => {
        if (typeof index === 'number') {
          this.currentIndex = index;
        }
        this.renderComponent(this.currentIndex);
      });
  }

  // tslint:disable-next-line:typedef
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // tslint:disable-next-line:typedef
  renderComponent(index: number) {
    // this.currentIndex = (this.currentIndex + 1);
    this.modalForm.viewContainerRef.clear();
    const item = this.modal[index];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.components);
    const viewContainerRef = this.modalForm.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<ModalComponent>(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.username = null;
    this.avatar = null;
    this.loggedIn = false;
  }

}
