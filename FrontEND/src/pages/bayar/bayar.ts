import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BayarUpload } from '../bayar-upload/bayar-upload';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-bayar',
  templateUrl: 'bayar.html',
})
export class Bayar {

  theme: string;

  constructor(public data: Data,public http: Http,public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bayar');
  }

  ionViewWillEnter(){
    this.data.getDataPasien().then((data) => {
    
      this.theme= data.theme;

    })
    
  }

  pembayaran(){
    this.navCtrl.push(BayarUpload);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewWillEnter();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanPasien);
  }

  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }
  profildokter(){
    this.navCtrl.push(ProfilDokterPasien);
  }


}

