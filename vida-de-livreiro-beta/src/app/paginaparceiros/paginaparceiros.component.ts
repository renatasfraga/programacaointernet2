import { Component, OnInit } from '@angular/core';
import { CrudUsuariosService } from "app/crud-usuarios.service";
import { MzModalService } from "ng2-materialize/dist";

@Component({
  selector: 'app-paginaparceiros',
  templateUrl: './paginaparceiros.component.html',
  styleUrls: ['./paginaparceiros.component.css']
})
export class PaginaparceirosComponent {
  
  
	constructor(private modalService: MzModalService) {
	   
	}
  
	ngOnInit() {
	
	}

	/* public openServiceModal() {
		this.modalService.open(ModalCadastroParceirosComponent);
	}*/
 
}