let subtotal = 0;
let total = 0;
let totalArticulos = 0;
let aCarrito = [];
const formatoMoneda = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
});

class Categoria {

    clave;
    nombre;

    constructor(argumentos = []) {
        this.clave = argumentos['clave'];
        this.nombre = argumentos['nombre'];
    }

    static objetos() {
        let categorias = [
            {
                clave: 1,
                nombre: "Martes de Frescura"
            },
            {
                clave: 2,
                nombre: "Navidad"
            }
        ];
        let aCategoria = [];
        let array = [];
        categorias.forEach((element) => {
            let objeto = new Categoria(element);
            array = Object.entries(objeto);
            aCategoria.push(Object.fromEntries(array));
        });
        return aCategoria;
    }
}

class Producto {

    clave;
    precio;
    descuento;
    precioFinal;
    nombre;
    categoria;

    constructor(argumentos = []) {
        this.clave = argumentos['clave'];
        this.precio = argumentos['precio'];
        this.descuento = argumentos['descuento'];
        this.precioFinal = argumentos['precioFinal'];
        this.nombre = argumentos['nombre'];
        this.categoria = argumentos['categoria'];
    }

    static objetos() {
        let productos = [
            {
                clave: 1,
                precio: 10,
                descuento: 5,
                precio_final: 0,
                nombre: "Manzana Gala",
                categoria: 1
            },

            {
                clave: 2,
                precio: 1,
                descuento: 0,
                precio_final: 0,
                nombre: "Platano Chiapas",
                categoria: 1
            },

            {
                clave: 3,
                precio: 10.5,
                descuento: 3,
                precio_final: 0,
                nombre: "Aguacate Hass",
                categoria: 1
            },

            {
                clave: 4,
                precio: 2.00,
                descuento: 0,
                precio_final: 0,
                nombre: "Espinaca Fresca",
                categoria: 1
            },

            {
                clave: 5,
                precio: 4500,
                descuento: 1000,
                precio_final: 0,
                nombre: "Apple Watch SE GPS",
                categoria: 2
            },

            {
                clave: 6,
                precio: 25000,
                descuento: 500,
                precio_final: 0,
                nombre: "Canon EOS Rebel T100",
                categoria: 2
            },

            {
                clave: 7,
                precio: 3500,
                descuento: 700,
                precio_final: 0,
                nombre: "One Plus Nord N200",
                categoria: 2
            },

            {
                clave: 8,
                precio: 10000,
                descuento: 0,
                precio_final: 0,
                nombre: "Contigo F16 FPV",
                categoria: 2
            },

        ];
        let aProductos = [];
        let array = [];
        productos.forEach((element) => {
            if (element.descuento > 0) {
                element.precioFinal = element.precio - element.descuento;
            }
            else {
                element.precioFinal = element.precio;
            }
            let objeto = new Producto(element);
            array = Object.entries(objeto);
            aProductos.push(Object.fromEntries(array));
        });
        return aProductos;
    }
}

class Carrito {

    clave;
    precio;
    descuento;
    precioFinal;
    nombre;
    categoria;
    subtotal;
    articulos;

    constructor(argumentos = []) {
        this.clave = argumentos['clave'];
        this.precio = argumentos['precio'];
        this.descuento = argumentos['descuento'];
        this.precioFinal = argumentos['precioFinal'];
        this.nombre = argumentos['nombre'];
        this.categoria = argumentos['categoria'];
        this.subtotal = 0;
        this.articulos = 0;
    }

    static compra(productos, clave) {
        let array = [];
        productos.forEach((element) => {
            if (element.clave == clave) {
                let objeto = new Carrito(element);
                array = Object.entries(objeto);
                aCarrito.push(Object.fromEntries(array));
            }
        });
        return aCarrito;
    }
}

function catalogoProductos() {

    let productos = document.getElementById("productos");
    let catalogo;
    let listaProductos;

    OCategorias = Categoria.objetos();
    OProductos = Producto.objetos();

    OCategorias.forEach((cat) => {
        let listaCategoria = `
        <div class="container my-5">
            <header class="mb-4">
                <h3>${cat.nombre}</h3>
            </header>
        <div class="row">`;
        listaProductos = "";
        OProductos.forEach((pro) => {
            if (pro.categoria == cat.clave) {
                catalogo = `
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card my-2 shadow-0">
                        <a href="#" class="img-wrap">
                            ${pro.descuento > 0 ?
                        `<div class="mask" style="height: 50px;">
                                        <div class="d-flex justify-content-start align-items-start h-100 m-2">
                                            <h6><span class="badge bg-success pt-2">Oferta</span></h6>
                                        </div>
                                    </div>` : ``
                    }
                        <img src="img/c${cat.clave}-${pro.clave}.png" class="card-img-top img-fluid">
                        </a>
                        <div class="card-body p-0 pt-3">
                            <div class="d-flex">
                                <h5 class="card-title me-2">${pro.categoria == 1 ? formatoMoneda.format(pro.precioFinal) + "/pza" : formatoMoneda.format(pro.precioFinal)}</h5>
                                ${pro.descuento > 0 ?
                        `<p class="text-muted text-decoration-line-through ">${pro.categoria == 1 ? formatoMoneda.format(pro.precio) + "/pza" : formatoMoneda.format(pro.precio)}
                                    </p>`: `<p>&nbsp;</p>`
                    }
                            </div>
                            ${pro.descuento > 0 ?
                        `<span class="badge badge-success py-2">Ahorra ${formatoMoneda.format(pro.descuento)}
                                </span>` : `<span>&nbsp;</span>`
                    }
                            <p class="card-text mb-0">${pro.nombre}</p>
                            <div id="btnAgregar-${pro.clave}">
                                <a href="javascript:agregar(${pro.clave})" class="btn btn-primary btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover">
                                    <i class="fas fa-plus fa-sm px-1 text-light"></i> Agregar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
                listaProductos += catalogo;
            }

        });
        productos.innerHTML += listaCategoria + listaProductos;
    });

}

function agregar(clave) {

    let botonAgregar = document.getElementById("btnAgregar-" + clave);
    let botones = `
    <div class="input-group w-50 mt-2 text-center align-items-center">
        <a href="javascript:operaciones(${clave},${1},${1},${0})" class="btn btn-primary btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover ripple-surface-dark">
            <i class="fas fa-minus fa-sm px-1 text-light"></i> 
        </a>   
        <input id="cantidad-${clave}" type="text" min="0" max="15" readonly="readonly" class="form-control btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover text-center" value="1"/>
        <a href="javascript:operaciones(${clave},${2},${1},${0})" class="btn btn-primary btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover ripple-surface-dark">
            <i class="fas fa-plus fa-sm px-1 text-light"></i> 
        </a>
    </div>`;
    botonAgregar.innerHTML = botones;

    OCompra = Carrito.compra(OProductos, clave);
    let cantidad = document.getElementById("cantidad-" + clave);
    total = 0;
    totalArticulos = 0;
    aCarrito.forEach((element) => {
        if (element.clave == clave && cantidad.value == 1) {
            element.subtotal = parseFloat(cantidad.value) * parseFloat(element.precioFinal);
            element.articulos = parseFloat(cantidad.value);
        }
    });
    aCarrito.forEach((element) => {
        total += parseFloat(element.subtotal);
        totalArticulos += parseFloat(element.articulos);
    });
    let carrito = document.getElementById("carrito");
    let totalCarrito = `<h5 class="card-title me-2">${formatoMoneda.format(total)}</h5>`;
    carrito.innerHTML = totalCarrito;
    let cantitadArticulos = document.getElementById("articulos");
    cantitadArticulos.innerHTML = totalArticulos;
}

function operaciones(clave, operacion, calcular, eliminar) {

    total = 0;
    totalArticulos = 0;
    let cantidad = document.getElementById("cantidad-" + clave);
    let cantidadCarrito = document.getElementById("articulos-" + clave);
    let botonAgregar = document.getElementById("btnAgregar-" + clave);
    let mensaje = document.getElementById("mensaje");
    let restarCarrito="";

    switch(calcular){
        case 1:
            operacion == 1 ? cantidad.value = parseFloat(cantidad.value) - 1 : cantidad.value = parseFloat(cantidad.value) + 1;
        break;
        case 2:
            operacion == 1 ? cantidad.value = parseFloat(cantidad.value) - 1 : cantidad.value = parseFloat(cantidad.value) + 1;
            operacion == 1 ? cantidadCarrito.value = parseFloat(cantidadCarrito.value) - 1 : cantidadCarrito.value = parseFloat(cantidadCarrito.value) + 1;
            restarCarrito = cantidadCarrito.value;
        break;
    }

    aCarrito.forEach((element, index) => {

        if (element.clave == clave) {

            if (calcular == 2 && eliminar == 0 && restarCarrito == 0 ) {
                cantidad.value = 0;
            }else if(eliminar == 1){
                cantidad.value = 0;
                cantidadCarrito.value = 0;
            }

            element.subtotal = parseFloat(cantidad.value) * parseFloat(element.precioFinal);
            element.articulos = parseFloat(cantidad.value);

            if (cantidad.value == 0) {
                botonAgregar.innerHTML = ` 
                            <a href="javascript:agregar(${clave})" class="btn btn-primary btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover">
                                <i class="fas fa-plus fa-sm px-1 text-light"></i> Agregar
                            </a>`;
                eliminar == 0 && calcular == 1 ? aCarrito.splice(index, 1) : "";
                element.articulos = parseFloat(cantidad.value);
            }

            if(calcular==2){

                element.subtotal = parseFloat(cantidadCarrito.value) * parseFloat(element.precioFinal);
                element.articulos = parseFloat(cantidadCarrito.value);

                if (cantidadCarrito.value == 0) {
                    mensaje.innerHTML = ` 
                            <div id="sinCantidad" class="toast align-items-center text-bg-success border-0 position-fixed top-50 start-50 translate-middle p-3 text-light" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="d-flex">
                                    <div class="toast-body">
                                        Eliminado: ${element.nombre}
                                    </div>
                                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>`;
                    const toastSinCantidad = document.getElementById('sinCantidad');
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastSinCantidad);
                    toastBootstrap.show();
                    aCarrito.splice(index, 1);
                    element.articulos = parseFloat(cantidadCarrito.value);
                    let articuloSinCantidad = document.getElementById(element.clave);
                    articuloSinCantidad.remove();
                }
                articulos();
            }
        }
    });
    aCarrito.forEach((element) => {
        total += parseFloat(element.subtotal);
        totalArticulos += parseFloat(element.articulos);
    });
    let carrito = document.getElementById("carrito");
    let totalCarrito = `<h5 class="card-title me-2">${formatoMoneda.format(total)}</h5>`;
    carrito.innerHTML = totalCarrito;
    let cantitadArticulos = document.getElementById("articulos");
    cantitadArticulos.innerHTML = totalArticulos;

    
}

function articulos() {

    let productos = document.getElementById("productos");
    productos.style.display = 'none';

    let verificar = document.getElementById("carritoDeCompras");
    let vacio="";

    let listaArticulos = document.getElementById("productosCarrito");
    let listaCarrito;
    listaArticulos.innerHTML="";
    aCarrito.sort();
   
    if(Object.entries(aCarrito).length === 0){
        vacio = `
        <div class="container text-center">
        <div class="my-4">
          <div class="d-flex align-items-center">
            <h1 class="me-3">Carrito</h1>
          </div>
          <div class="d-flex flex-row mb5 justify-content-center">
            <div class="h-100 mt-3 pb-3">
              <div class="d-flex flex-column align-items-center">
                <img loading="lazy" src="img/empty-cart.svg?odnHeight=240&amp;odnWidth=200&amp;odnBg=ffffff" class="w-100 h-auto" alt="vaciar carrito" width="240" height="200">
                <div class="tc">
                  <span>
                    <h3 class="fw-bold mb-1 mt-4">Es momento de comprar</h3>
                    <h5 class="fw-bold mt-1 mb-3 lh-copy">Tu carrito está vacío</h5>
                  </span>
                  <div class="fs-5 mid-gray lh-copy">
                    <div class="wrap">Llénalo con ahorros de estos departamentos.</div>
                  </div>
                  <div class="mt-2">
                    <section>
                      <div class="tex-center w-100">
                        <div class="d-flex justify-content-center flex-wrap" style="column-gap: 1.4rem;">
                          <a class="mb-3 btn btn-outline-dark" data-mdb-ripple-color="dark" href="javascript:verProductos()">Frutas y verduras</a>
                          <a class="mb-3 btn btn-outline-dark" data-mdb-ripple-color="dark" href="javascript:verProductos()">Electrónica</a>
                          <a class="mb-3 btn btn-outline-dark" data-mdb-ripple-color="dark" href="javascript:verProductos()">Promociones</a>
                          <a class="mb-3 btn btn-outline-dark" data-mdb-ripple-color="dark" href="javascript:verProductos()">Inicio</a>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      verificar.innerHTML=vacio;
   }else{
    vacio = `
        <div class="container text-center">
        <div class="my-4">
          <div class="d-flex align-items-center justify-content-between">
            <h1 class="me-3">Carrito</h1>
            <a href="javascript:verProductos()" class="btn btn-primary btn-lg">Productos</a>
          </div>
        </div>
      </div>`;
      verificar.innerHTML=vacio;
   }
   verificar.style.display = 'block';
    aCarrito.forEach((productos) => {
        listaCarrito = `
                <div id="${productos.clave}" class="col-lg-4 col-md-6 col-sm-6">
                    <div class="card my-2 shadow-0">
                        <a href="#" class="img-wrap">
                            ${productos.descuento > 0 ?
                `<div class="mask" style="height: 50px;">
                                    <div class="d-flex justify-content-start align-items-start h-100 m-2">
                                        <h6><span class="badge bg-success pt-2">Oferta</span></h6>
                                    </div>
                                </div>` : ``
            }
                            <img src="img/c${productos.categoria}-${productos.clave}.png" class="card-img-top img-fluid">
                        </a>
                        <div class="card-body p-0 pt-3">
                            <div class="d-flex">
                                <h5 class="card-title me-2">${productos.categoria == 1 ? formatoMoneda.format(productos.precioFinal) + "/pza" : formatoMoneda.format(productos.precioFinal)}</h5>
                                ${productos.descuento > 0 ?
                `<p class="text-muted text-decoration-line-through ">${productos.categoria == 1 ? formatoMoneda.format(productos.precio) + "/pza" : formatoMoneda.format(productos.precio)}
                                    </p>`: `<p>&nbsp;</p>`
            }
                            </div>
                            ${productos.descuento > 0 ?
                `<span class="badge badge-success py-2">Ahorra ${formatoMoneda.format(productos.descuento)}
                                </span>` : `<span>&nbsp;</span>`
            }
                            <p class="card-text mb-0">${productos.nombre}</p>
                            <div id="btnAgregar-${productos.clave}">
                                <div class="d-flex flex-row align-items-center mt-2">
                                    <a href="javascript:operaciones(${productos.clave},${1},${2},${1})" class="btnEliminar my-3 py-1 me-4 float-start">
                                        Eliminar
                                    </a>
                                    <div class="input-group text-center align-items-center">
                                        <a id="${"sinCantidad-" + productos.clave}" href="javascript:operaciones(${productos.clave},${1},${2},${0})" class="btnCarrito px-3 my-3 py-1 float-start">
                                            <i class="fas fa-minus fa-sm px-1"></i> 
                                        </a>       
                                        <input id="articulos-${productos.clave}" type="text" min="0" max="15" readonly="readonly" class="sinborde w-25 px-3 my-3 py-1 float-start text-center" value="${productos.articulos}"/>
                                        <a href="javascript:operaciones(${productos.clave},${2},${2},${0})" class="btnCarrito px-3 my-3 py-1 float-start">
                                            <i class="fas fa-plus fa-sm px-1"></i> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        listaArticulos.innerHTML += listaCarrito;
        listaArticulos.style.display = 'block';
    });

}

function verProductos(){

    let productos = document.getElementById("productos");
    productos.style.display = 'block';

    let carritoTitulo = document.getElementById("carritoDeCompras");
    carritoTitulo.style.display = 'none';
    let carrito = document.getElementById("productosCarrito");
    carrito.style.display = 'none';

}