import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.page.html',
  styleUrls: ['./new-contact.page.scss'],
})
export class NewContactPage implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
  ) {
    this.form = this.fb.group({
      id: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ])],
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ])],
      cpf: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11),
      ])],
      address: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ])],
    });
  }

  ngOnInit() {
  }

  async submit() {
    const loading = await this.loadingCtrl.create({ message: "Adicionando..." });
    loading.present();

    this.service.createContact(this.form.value).subscribe(
      (res: any) => {
        this.showSuccess(res);
        loading.dismiss();
      },
      (err: any) => {
        this.showError("Falha ao adicionar contato!");
        loading.dismiss();
      }
    );
  }

  async showSuccess(data) {
    const alert = await this.alertCtrl.create({
      message: "Contato cadastrado com sucesso!",
      buttons: [
        {
          text: "Continuar",
          handler: () => {
            this.navCtrl.navigateRoot('/');
          }
        }
      ]
    });
    alert.present();
  }

  async showError(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}
