import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';


@Component({
  selector: 'page-profil-pasien-dokter',
  templateUrl: 'profil-pasien-dokter.html',
})
export class ProfilPasienDokter {

  history : any;
  history2 : any;


  id_doctor:number;
  email:string;
  password:string;
  name:string;
  id_patient:number;
  address_patient:string;

  no_tel_patient:number;
  

  constructor(public http: Http, public data: Data,public navCtrl: NavController, public navParams: NavParams) {

    let pasien = this.navParams.data; //ngambil data yang dikirim

    this.email = pasien.email_patient;
    this.name = pasien.name_patient;
    this.address_patient = pasien.address_patient;
    this.no_tel_patient = pasien.no_tel_patient;
    this.id_patient = pasien.id_patient;

    this.getRiwayatKesehatan();
    this.getDataHistory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPasienDokter');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
  }


  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanDokter);
  }



  getRiwayatKesehatan(){


    // nah ini nnti dipisah aja jadi 2 ,, eheheheh 


    this.http.get(this.data.BASE_URL+"/health_history.php?patient="+this.id_patient).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.history= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  getDataHistory(){
    this.http.get(this.data.BASE_URL+"/patient_disease.php?patient="+this.id_patient).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.history2 = response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }


  




}
