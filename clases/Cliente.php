<?php
class Cliente {
	
		public $id;
		public $nombre;
		public $fechaNacimiento;
		
		var $array = [];
		

		public function __construct($args = []){
			$this->id = $args['id'] ?? '';
			$this->nombre = $args['nombre'] ?? '';
			$this->fechaNacimiento = $args['fechaNacimiento'] ?? '';
		}

		public static function objetos(){

			$clientes = [

				"1" => [
					"id" => "1",
					"nombre" => "Ana Pérez",
					"fechaNacimiento" => "15/07/1988",
				],
				"2" => [
					"id" => "2",
					"nombre" => "Juan Pérez",
					"fechaNacimiento" => "25/06/1987",
				],
			];

			global $array;
			foreach($clientes as $cliente) {
				$array[] = self::crearObjeto($cliente);
			}
		}

		protected static function crearObjeto($objetos){
			$objeto = new self;
			foreach($objetos as $key => $value) {
				$objeto->$key = $value;
			}
			return $objeto;	
		}

		public static function find($key){
			global $array;
			$resultado = $array[$key]->nombre;
			return $resultado;
		}

}
