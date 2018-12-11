import { Component, OnInit, Renderer, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
isDashboard: boolean;
file: string;
@ViewChild('closeBtn') closeBtn: ElementRef;
constructor(private render: Renderer, private router: Router) {

}
  w3_open() {
  document.getElementById('mySidebar').style.display = 'block';
  document.getElementById('openNav').style.display = 'none';
  document.getElementById('closeNav').style.display = 'inline-block';
  }
  w3_close() {
    document.getElementById('main').style.marginLeft = '0%';
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('openNav').style.display = 'inline-block';
    document.getElementById('closeNav').style.display = 'none';
  }
  ngOnInit() {
    document.getElementById('closeNav').style.display = 'none';
    this.isDashboard = true;
  }
  addAciveClass(event: any) {
    if (event.target.nextElementSibling !== null ) {
      this.render.setElementClass(event.target.nextElementSibling, 'active', false);
    }
    if (event.target.previousElementSibling !== null) {
      this.render.setElementClass(event.target.previousElementSibling, 'active', false);
    }
    this.render.setElementClass(event.target, 'active', true);
    if (event.target.getAttribute('title') === 'Reports') {
      this.isDashboard = false;
    } else if (event.target.getAttribute('title') === 'Dashboard') {
      this.isDashboard = true;
    }
  }
  uploadDoc(): void {
    if (this.file === undefined) {
      alert('Please select file');
    } else {
      this.router.navigate(['userDetail']);
      this.closeBtn.nativeElement.click();
    }
  }
}
