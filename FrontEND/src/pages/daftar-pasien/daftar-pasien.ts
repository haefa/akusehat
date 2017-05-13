import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { ProfilPasienDokter } from '../profil-pasien-dokter/profil-pasien-dokter';

@Component({
  selector: 'page-daftar-pasien',
  templateUrl: 'daftar-pasien.html',
})
export class DaftarPasien {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public http: Http, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPasien');
  }

  ionViewWillEnter() {
    // //ini ni ngambil value yang di return dari data.ts
    // this.data.getDataDokter().then((data) => {
    //   this.name = data.name_doctor;
    //   this.email = data.email_doctor;
    //   this.no_tel_doctor = data.no_tel_doctor;
    //   this.id_doctor = data.id_doctor;
    //   this.bank_doctor = data.bank_doctor;
    //   this.no_account_doctor = data.no_account_doctor;
    //   this.specialization = data.specialization;
    //   this.sum_patient = data.sum_patient;


    //   this.getProfilDokter();
    // })

    

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewWillEnter();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  profilPasien(){
     this.navCtrl.push(ProfilPasienDokter);
  }
  harianPasien(){
     this.navCtrl.push(ProfilPasienDokter);
  }



  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanDokter);
  }
  
}
