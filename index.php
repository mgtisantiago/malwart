<?php

include 'clases/Categoria.php';
$oCategoria = Categoria::objetos();

include 'clases/Producto.php';
$oProducto = Producto::objetos();

include 'clases/Cliente.php';
$oCliente = Cliente::objetos();

?>

<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Principal</title>

	<!-- Bootstrap -->
	<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
	<!-- Estilos propios -->
	<link href="css/styles.css" rel="stylesheet" type="text/css" />
	<!-- Fuente de iconos -->
	<link href="css/all.css" rel="stylesheet" type="text/css" />

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>



	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container">
			<a class="navbar-brand" href="#">
				<img src="img/logo.svg" height="40" class="logo">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbar_main">
				<ul class="navbar-nav me-auto">
					<li class="nav-item"> <a class="nav-link" href="#"> Principal </a> </li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Productos</a>
						<ul class="dropdown-menu">
							<li> <a class="dropdown-item" href="#"> Congelados </a> </li>
							<li> <a class="dropdown-item" href="#"> Refrigerador </a> </li>
							<li> <a class="dropdown-item" href="#"> Alacena </a> </li>
							<li> <a class="dropdown-item" href="#"> Lavandería </a> </li>
						</ul>
					</li>
					<li class="nav-item"> <a class="nav-link" href="#"> Acerca de </a> </li>
					<li class="nav-item"> <a class="nav-link" href="#"> Contacto </a> </li>
				</ul>


				<a href="#" class="ms-md-2 btn btn-outline-dark">
					<i class="fas fa-user me-2"></i><?php echo $oCliente = Cliente::find(0); ?>
				</a>

				<a data-bs-toggle="offcanvas" href="#offcanvas_cart" class="ms-md-2 btn btn-primary">
					<i class="fa-solid fa-cart-shopping"></i> Mi despensa (3)
				</a>
			</div>
		</div>
	</nav>
	<div class=" p-5" style="min-height:280px; background-size: cover; background-image: url('img/bg-food.jpg');">
		<header class="text-center mt-5">
			<h1 class="text-white">Ordene tu despensa en línea ahora</h1>
			<p class="text-white">Descubre los mejores productos de tu zona</p>
			<div class="d-grid gap-2 w-25 mx-auto">
				<button class="btn btn-warning btn-lg" type="button">Regístrate</button>
			</div>
		</header>
	</div>

	<div class="container ">
		<?php foreach ($oCategoria as $categoria) : ?>
			<h3 class="my-3"><?php echo $categoria->nombre; ?></h3>
			<?php $claveCategoria = $categoria->clave; ?>
			<div class="card card-body my-3">
				<div class="row">
					<?php foreach ($oProducto as $producto) : ?>
						<?php if ($claveCategoria == $producto->claveCategoria) { ?>
							<div class="col-lg-3 col-md-6">
								<a href="#" class="itemside align-items-center my-2">
									<div class="aside">
										<img src="img/2.jpg" class="img-sm img-thumbnail" />
									</div>
									<div class="info">
										<p class="title"> <?php echo $producto->nombre; ?></p>
										<div class="price"><?php echo "$ ".$producto->precio; ?></div>
										<button type="button" class="btn btn-primary-light btn-sm"> Agregar</button>
									</div>
								</a>
							</div>
					<?php } ?>
					<?php endforeach ?>
				</div>
			</div>
		<?php endforeach ?>
	</div>

	

	<footer class="section-footer bg-primary footer-dark ">
		<div class="container">
			<section class="footer-main py-5">
				<div class="row">
					<aside class="col-lg-4 col-12">
						<article class="me-lg-4 mb-4">
							<h6 class="title">Contactáctanos</h6>
							<ul class="list-icon">
								<li class="mb-2">
									<i class="fas fa-map-marker-alt icon"></i>Mérida, Yucatán, México <br> Fraccionamiento los Héroes, CP 97314
								</li>
								<li class="mb-2">
									<i class="fas fa-phone icon"></i> (800) 060-0730, (800) 060-0730
								</li>
								<li class="mb-2">
									<i class="fas fa-envelope icon"></i> info@despensadigital.com.mx
								</li>
							</ul>
						</article>
					</aside> <!-- col end.// -->
					<aside class="col-lg col-6">
						<h6 class="title">Compañia</h6>
						<ul class="list-menu mb-4">
							<li> <a href="#"> A cerca de </a> </li>
							<li> <a href="#"> Empleos </a> </li>
							<li> <a href="#"> Terminos y condiciones </a> </li>
							<li> <a href="#"> Mapa del sitio </a> </li>
						</ul>
					</aside> <!-- col end.// -->
					<aside class="col-lg col-6">
						<h6 class="title"> Servicios </h6>
						<ul class="list-menu mb-4">
							<li> <a href="#"> Contacto </a> </li>
							<li> <a href="#"> Envíos </a> </li>
							<li> <a href="#"> Cancelaciones </a> </li>
						</ul>
					</aside> <!-- col end.// -->
					<aside class="col-lg col-6">
						<h6 class="title"> Cuenta </h6>
						<ul class="list-menu mb-4">
							<li> <a href="#"> Regístrate </a> </li>
							<li> <a href="#"> Iniciar sesión </a> </li>
							<li> <a href="#"> Recuperar contraseña </a> </li>
						</ul>
					</aside> <!-- col end.// -->
					<aside class="col-lg col-6">
						<h6 class="title">Redes sociales</h6>
						<ul class="list-icon list-menu mb-4">
							<li><a href="#"> <i class="icon fab fa-facebook"></i> Facebook </a></li>
							<li><a href="#"> <i class="icon fab fa-twitter"></i> Twitter </a></li>
							<li><a href="#"> <i class="icon fab fa-instagram"></i> Instagram </a></li>
							<li><a href="#"> <i class="icon fab fa-youtube"></i> Youtube </a></li>
						</ul>
					</aside>
				</div> <!-- row end.// -->
			</section>
			<hr class="my-0">
			<section class="footer-bottom d-flex justify-content-between">
				<p class="text-white-50 mb-0"> © 2022 Despensa Digital. Todos los derechos reservados. </p>
				<div>
					<i class="fab fa-lg fa-cc-visa"></i>
					<i class="fab fa-lg fa-cc-amex"></i>
					<i class="fab fa-lg fa-cc-mastercard"></i>
					<i class="fab fa-lg fa-cc-paypal"></i>
				</div>
			</section>
		</div> <!-- container end.// -->
	</footer>

	<!-- Bootstrap -->
	<script src="js/bootstrap.js" type="text/javascript"></script>

</body>

</html>