import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private headerService: HeaderService) {}

	name : string = "fake name";
	titulos : string = "fake phd";
	mision : string = "fake mision";
	foto : string = "fake photo";
	email : string = "fake email";
	celular : string = "fake celular";
	ubicacion : string = "fake ubicacion";
	redsocial : string = "fake redsocial";


	ngOnInit(): void {
		this.headerService.getHeader()
		.subscribe( (data: any) => {
			console.log(data);
			//alert(data);
			this.name = data.name;
			this.titulos = data.titulos;
			this.mision = data.mision;
			this.foto = data.foto;
			this.email = data.email;
			this.celular = data.celular;
			this.ubicacion = data.ubicacion;
			this.redsocial = data.redsocial;
		});
	}


}
