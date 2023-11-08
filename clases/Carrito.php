<?php 

	class Carrito{

		public $categoria;
		public $nombre;
		public $cantidad;
		public $precio;
		public $importe;

		function __construct($categoria,$nombre,$cantidad,$precio){
			$this->categoria=$categoria;
			$this->nombre=$nombre;
			$this->cantidad=$cantidad;
			$this->precio=$precio;
		}	
		
		public function total(){
		  $this->importe = $this->cantidad * $this->precio;
		  return  $this->importe;
		}


	}


?>