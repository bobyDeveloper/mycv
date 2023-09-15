import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '../services/certifications.service';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

  certifications: any[] = [];

  constructor(private certificationsService: CertificationsService) { }

  ngOnInit(): void {
    this.certificationsService.getCertifications().subscribe((data: any[]) => {
      console.log(data);
      this.certifications = data;
    });
  }
}
