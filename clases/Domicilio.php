<?php 

	class Domicilio{

		public $nombreUsuario;
		public $idUsuario;
		public $tipoPago;
		public $totalEnvio;
		public $direccion;
		public $localidad;
		public $referencia;

		function __construct($nomUsu,$idUs,$tipoPa,$dir,$loc,$ref,$toEn){

			$this->nombreUsuario=$nomUsu;
			$this->idUsuario=$idUs;
			$this->tipoPago=$tipoPa;
			$this->direccion=$dir;
			$this->localidad=$loc;
			$this->referencia=$ref;
			$this->totalEnvio=$toEn;
			
		}

		function Envio(){

			echo "Nombre : $this->nombreUsuario<br> ID Usuario : $this->idUsuario <br> Tipo de pago : $this->tipoPago <br> Direccion : $this->direccion <br> Localidad : $this->localidad<br> Referencia : $this->referencia<br> Total con envio : $this->totalEnvio" ;
		}
	}



?>