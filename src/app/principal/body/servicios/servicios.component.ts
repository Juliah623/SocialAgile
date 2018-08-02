import { Component, OnInit } from '@angular/core';
import { ServiciosService, Categoria } from '../../../servicios.service';
import { Observable } from '../../../../../node_modules/rxjs';


@Component({
	selector: 'app-servicios',
	templateUrl: './servicios.component.html',
	styleUrls: ['./servicios.component.sass'],
	providers: [ServiciosService]
})
export class ServiciosComponent implements OnInit {
	private categoria: Array<Categoria>[];

	//private categorias: Array<object>=[];
	
	constructor(private serviciosService: ServiciosService) { }


	ngOnInit() {
		this.getCategoria();
	}

	public getCategoria() {
		this.serviciosService.getCategoria().subscribe((retorno: Array<Categoria>[]) => {
			this.categoria = retorno;
			console.log(this.categoria);
		})	
	
}
}
