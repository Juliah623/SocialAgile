import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../servicios.service';
import { Observable } from '../../../../../node_modules/rxjs';


@Component({
	selector: 'app-servicios',
	templateUrl: './servicios.component.html',
	styleUrls: ['./servicios.component.sass'],
	providers: [ServiciosService]
})
export class ServiciosComponent implements OnInit {

	categorias: Array<object>=[];
	constructor(private serviciosService: ServiciosService) { }


	ngOnInit() {
		this.getCategoria();
	}

	public getCategoria() {
		this.serviciosService.getCategoria().subscribe((retorno: Array<object>=[]) => {
			this.categorias = retorno;
			console.log(this.categorias);
		})	
	
}
}
