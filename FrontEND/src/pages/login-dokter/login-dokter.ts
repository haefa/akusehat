import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BerandaDokter } from '../beranda-dokter/beranda-dokter';
import { TabsDokter } from '../tabs-dokter/tabs-dokter';
import { SignupDokter } from '../signup-dokter/signup-dokter';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-login-dokter',
  templateUrl: 'login-dokter.html',
})
export class LoginDokter {

  email:string;
  password:string;
  submitted = false;  //ini di declare awalnya false dlu
  status:string;
  lihat = true;

  constructor(private vibration: Vibration,public navCtrl: NavController,
  public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data,public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginDokter');
    this.status = "password";
  }
  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  gotoTab(){
    this.navCtrl.setRoot(TabsDokter);
  }

  signUp(){
	 this.navCtrl.push(SignupDokter);
  }


  login(form: NgForm){
    this.submitted = true;
    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
    if(form.valid){
      loading.present();
      let input = JSON.stringify({
        email: this.email, 
        password: this.password
      });
        this.http.post(this.data.BASE_URL+"/login_doctors.php",input).subscribe(data => {
        let response = data.json();
	if(response.status=="200"){
        //console.log(response);
        this.data.login(response.data,"dokter");//masukin data ke localstorage
        this.gotoTab();
        loading.dismiss();
      }
      else
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              this.vibration.vibrate(1000);
              alert.present();
           }

      });
    }
  }




  lupaPassword(){
             let alert = this.alertCtrl.create({
                title: 'Hubungi Admin',
                subTitle: 'Nuh  : @nuhsat <br> Fatim  : @haefa',      
                buttons: ['OK']
              });
              alert.present();
           }


}
