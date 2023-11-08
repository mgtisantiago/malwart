<?php

	class Pedido{
		
		public $nombre;
		public $apellido;
		public $direccion;
		public $localidad;
		public $numeroTelefono;
		public $correoElectronico;
		public $fechaNacimiento;
		public $tipoCuenta;// Proveedor o Cliente

		function __construct($name,$apell,$direc,$loc,$numTel,$correo,$fnac,$tipCu){
			$this->nombre=$name;
			$this->apellido=$apell;
			$this->direccion=$direc;
			$this->localidad=$loc;
			$this->numeroTelefono=$numTel;
			$this->correoElectronico=$correo;
			$this->fechaNacimiento=$fnac;
			$this->tipoCuenta=$tipCu;
		}
		function Crear(){
			echo "Nombre : $this->nombre<br> Apellido : $this->apellido<br> Direccion : $this->direccion<br> Localidad : $this->localidad<br> Telefono : $this->numeroTelefono<br> Correo electronico : $this->correoElectronico<br> Fecha nacimiento : $this->fechaNacimiento<br> Tipo de cuenta : $this->tipoCuenta";
		}
	}



?>