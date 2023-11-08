<?php
class Producto {
	
		public $clave;
		public $nombre;
		public $precio;
		

		public function __construct($valor = []){
			$this->clave = $valor['clave'] ?? '';
			$this->nombre = $valor['nombre'] ?? '';
			$this->precio = $valor['precio'] ?? '';
		}

		public static function objetos(){

			$productos = [
				
				"1" => [
					"clave" => "1",
					"nombre" => "Celular",
					"precio" => "6500",
					"claveCategoria" => "1"
				],

				"2" => [
					"clave" => "2",
					"nombre" => "Laptop",
					"precio" => "13500",
					"claveCategoria" => "1"
				],


				"3" => [
					"clave" => "3",
					"nombre" => "Tableta",
					"precio" => "8500",
					"claveCategoria" => "1"
				],

				
				"4" => [
					"clave" => "4",
					"nombre" => "Cloralex",
					"precio" => "50",
					"claveCategoria" => "2"
				],

			
				"5" => [
					"clave" => "5",
					"nombre" => "Pan Bimbo",
					"precio" => "4500",
					"claveCategoria" => "3"
				],

				"6" => [
					"clave" => "6",
					"nombre" => "Cereal",
					"precio" => "50",
					"claveCategoria" => "3"
				]
			];

			$array = [];
			foreach($productos as $producto) {
				$array[] = self::crearObjeto($producto);
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
