import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public products: any[];
  public contacts: any[];
  public showList = true;

  constructor(
    private service: DataService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.service.getContacts().subscribe(
      (res: any) => {
        this.contacts = res;
      }
    );
  }

  async showMessage(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      closeButtonText: "Fechar",
      duration: 3000,
      showCloseButton: true
    });
    toast.present();
  }

  newCustomer() {
    this.navCtrl.navigateRoot('/new-contact');
  }

  toggleView() {
    this.showList = !this.showList;
  }
}
