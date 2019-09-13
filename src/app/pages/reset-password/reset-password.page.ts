import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
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
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ])],
      newPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ])],
    });
  }

  ngOnInit() {
  }

  async submit() {
    const loading = await this.loadingCtrl.create({ message: "Atualizando..." });
    loading.present();

    this.service.resetPasswordCustomer(this.form.value).subscribe(
      (res: any) => {
        this.showSuccess(res);
        loading.dismiss();
      },
      (err: any) => {
        this.showError("Falha ao redefinir a senha!");
        loading.dismiss();
      }
    );
  }

  async showSuccess(data) {
    const alert = await this.alertCtrl.create({
      message: "Senha redefinida com sucesso!",
      buttons: [
        {
          text: "Continuar",
          handler: () => {
            this.navCtrl.navigateRoot('/login');
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
