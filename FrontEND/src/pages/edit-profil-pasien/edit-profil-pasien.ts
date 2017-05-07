import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ProfilPasien } from '../profil-pasien/profil-pasien';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-edit-profil-pasien',
  templateUrl: 'edit-profil-pasien.html',
})
export class EditProfilPasien {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilPasien');
  }

  simpanProfil(){

  let alert = this.alertCtrl.create({
      title: 'Data Tersimpan!',
      buttons: ['OK']
    });
    alert.present();

  	this.navCtrl.push(ProfilPasien);
  }

}