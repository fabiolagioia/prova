import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Turn on notifications',
      message: 'Do you agree to turn on notifications?',
      buttons: ['Disagree', 'Agree']
    });

    await alert.present();
  }

  ngOnInit() {
    this.presentAlert();
  }

}
