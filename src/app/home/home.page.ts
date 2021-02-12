import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController,
              private toastController: ToastController
    ) { }

  ngOnInit() {
    this.presentToast();
    /* Per settare feed come tab iniziale */
    this.navCtrl.navigateRoot('home/feed');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login succesfull',
      duration: 3000,
      color: 'primary'
    });
    toast.present();
  }

}
