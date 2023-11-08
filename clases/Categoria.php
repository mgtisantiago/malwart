<?php
	class Categoria{
		
		public $clave;
		public $nombre;

		public function __construct($argumentos = []){
			$this->clave = $argumentos['clave'] ?? ''; 
			$this->nombre = $argumentos['nombre'] ?? '';
		}

		public static function objetos(){

			$categorias = [

				"1" => 
				[
					"clave" => 1,
					"nombre" => "Electrónica"
				],
				
				"2" => 
				[
					"clave" => 2,
					"nombre" => "Detergentes"
				],

				"3" =>
				[
					"clave"=> 3,
					"nombre"=>"Panadería"
				]
			];

			$array = [];
			foreach($categorias as $categoria) {
				$array[] = self::crearObjeto($categoria);
			}
			return $array;
		}

		protected static function crearObjeto($objetos){
			$objeto = new self;
			foreach($objetos as $key => $value) {
				$objeto->$key = $value;
			}
			return $objeto;	
		}
	}
	
?>