import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';


@Component({
  selector: 'page-bayar-upload',
  templateUrl: 'bayar-upload.html',
})
export class BayarUpload {

  theme: string;

  constructor(public data: Data,public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BayarUpload');
  }

   ionViewWillEnter(){
    this.data.getDataPasien().then((data) => {
    
      this.theme= data.theme;

    })
    
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
